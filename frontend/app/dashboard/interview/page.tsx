'use client'

import React, { useState, useEffect } from 'react';

interface ProfileType {
  role: string;
  seniority_level: string;
  years_experience: number;
  industry: string;
  skills: string[];
}

interface FeedbackIssue {
  category: string;
  issue: string;
  tip: string;
}

interface FeedbackType {
  metrics?: Record<string, number>;
  strengths?: string[];
  issues?: FeedbackIssue[];
  top_3_tips?: string[];
}

interface DrillType {
  name: string;
  description: string;
  duration: number;
  difficulty: string;
}

interface BadgeType {
  icon: string;
  name: string;
}

interface UserProgressType {
  level: number;
  xp_earned: number;
  best_score: number;
  current_streak: number;
}

export default function InterviewPage() {
  // State management
  const [stage, setStage] = useState('resume'); // resume | profile | question | answer | feedback | progress
  const [userId, setUserId] = useState(`user_${Date.now()}`);
  
  // Resume & Profile
  const [resumeText, setResumeText] = useState('');
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [parseLoading, setParseLoading] = useState(false);
  
  // Question & Answer
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [question, setQuestion] = useState<string | null>(null);
  const [timeLimit, setTimeLimit] = useState(45);
  const [answerText, setAnswerText] = useState('');
  const [answerLoading, setAnswerLoading] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // Feedback
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [unlockedDrills, setUnlockedDrills] = useState<DrillType[]>([]);
  
  // Progress
  const [userProgress, setUserProgress] = useState<UserProgressType | null>(null);
  const [badges, setBadges] = useState<BadgeType[]>([]);
  
  // Colors for UI
  const colors = {
    bg: 'bg-slate-950',
    text: 'text-white',
    panel: 'bg-slate-900/50',
    border: 'border-slate-700',
    primary: 'bg-blue-600 hover:bg-blue-700',
    success: 'bg-green-600 hover:bg-green-700',
    warning: 'bg-yellow-600 hover:bg-yellow-700',
  };

  // Timer effect for answer
  useEffect(() => {
    if (stage === 'answer' && startTime) {
      const interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(elapsed);
        
        if (elapsed >= timeLimit) {
          autoSubmitAnswer();
        }
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [stage, startTime, timeLimit]);

  // API Functions
  const parseResume = async () => {
    setParseLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/interview/parse-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resume_text: resumeText,
          user_id: userId,
        }),
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        setProfile(data.profile);
        setStage('profile');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert(`Failed to parse resume: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setParseLoading(false);
    }
  };

  const generateQuestion = async () => {
    if (!profile) return;
    
    try {
      const response = await fetch('http://localhost:5000/api/interview/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: profile,
          user_id: userId,
        }),
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        setSessionId(data.session_id);
        setQuestion(data.question);
        setTimeLimit(data.time_limit);
        setAnswerText('');
        setElapsedTime(0);
        setStartTime(Date.now());
        setStage('answer');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert(`Failed to generate question: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const submitAnswer = async () => {
    if (!answerText.trim()) {
      alert('Please type an answer');
      return;
    }
    
    setAnswerLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/interview/submit-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          answer: answerText,
          duration: elapsedTime,
          user_id: userId,
        }),
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        setScore(data.score);
        setFeedback(data.feedback);
        setUnlockedDrills(data.unlocked_drills);
        setUserProgress(data.progress);
        setBadges(data.badges.earned);
        setStage('feedback');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert(`Failed to submit answer: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setAnswerLoading(false);
    }
  };

  const autoSubmitAnswer = async () => {
    if (answerText.trim() && !answerLoading) {
      await submitAnswer();
    }
  };

  const loadProgress = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/interview/progress?user_id=${userId}`);
      const data = await response.json();
      
      if (data.status === 'success') {
        setUserProgress(data.stats.progress);
        setBadges(data.stats.badges.earned);
        setStage('progress');
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
    }
  };

  // PDF Upload
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUploading, setPdfUploading] = useState(false);
  const [pdfError, setPdfError] = useState('');
  const [pdfFileName, setPdfFileName] = useState('');

  const uploadPdf = async (file: File) => {
    setPdfUploading(true);
    setPdfError('');
    setPdfFileName(file.name);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('user_id', userId);
      
      const response = await fetch('http://localhost:5000/api/interview/upload-resume', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        setResumeText(data.resume_text);
        setProfile(data.profile);
        setStage('profile');
      } else {
        setPdfError(data.message || 'Failed to parse PDF');
      }
    } catch (error: any) {
      setPdfError(`Upload failed: ${error.message}`);
    } finally {
      setPdfUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setPdfError('Only PDF files are supported.');
      return;
    }
    
    setPdfFile(file);
    uploadPdf(file);
  };

  // Render stages
  const renderResumeStage = () => (
    <div className={`${colors.bg} min-h-screen p-8`}>
      <div className={`max-w-2xl mx-auto ${colors.panel} rounded-2xl border ${colors.border} p-8`}>
        <h1 className={`${colors.text} text-3xl font-bold mb-2`}>📋 Interview Coach</h1>
        <p className={`text-slate-400 mb-6`}>Let's prepare you for your next interview</p>
        
        <div className="space-y-6">
          {/* PDF Upload Section */}
          <div>
            <label className={`${colors.text} block font-semibold mb-3`}>
              📄 Upload Resume (PDF)
            </label>
            <label
              className={`flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer transition-all
                ${pdfUploading ? 'border-blue-500 bg-blue-950/30' : 'border-slate-600 hover:border-blue-400 bg-slate-800/50 hover:bg-slate-800'}`}
            >
              <div className="flex flex-col items-center justify-center py-4">
                {pdfUploading ? (
                  <>
                    <svg className="animate-spin h-8 w-8 text-blue-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    <p className="text-sm text-blue-400 font-semibold">Extracting text from PDF...</p>
                  </>
                ) : pdfFileName && !pdfError ? (
                  <>
                    <span className="text-3xl mb-2">✅</span>
                    <p className="text-sm text-green-400 font-semibold">{pdfFileName}</p>
                    <p className="text-xs text-slate-500 mt-1">PDF parsed successfully</p>
                  </>
                ) : (
                  <>
                    <span className="text-3xl mb-2">📎</span>
                    <p className={`text-sm font-semibold ${colors.text}`}>
                      Drop your resume PDF here or click to browse
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Supports .pdf files only</p>
                  </>
                )}
              </div>
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
                disabled={pdfUploading}
              />
            </label>
            {pdfError && (
              <p className="mt-2 text-sm text-red-400 font-medium">⚠️ {pdfError}</p>
            )}
          </div>
          
          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="text-slate-500 text-sm font-semibold">OR</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>
          
          {/* Text Paste Section */}
          <div>
            <label className={`${colors.text} block font-semibold mb-2`}>
              ✏️ Paste Your Resume Text
            </label>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="w-full h-48 bg-slate-800 text-white border border-slate-600 rounded-lg p-4 focus:border-blue-500 focus:outline-none"
              placeholder="Example:
Product Manager at Google (2 years)
- Led 3+ product launches
- Experience with analytics, roadmapping
- Skills: Python, SQL, Tableau

Senior Engineer at Microsoft (5 years)
- Built scalable systems
- Leadership experience
- Skills: Cloud architecture, C#, .NET"
            />
          </div>
          
          <button
            onClick={parseResume}
            disabled={parseLoading || !resumeText.trim()}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${colors.primary} disabled:opacity-50`}
          >
            {parseLoading ? 'Parsing...' : 'Analyze My Profile →'}
          </button>
        </div>
      </div>
    </div>
  );

  const renderProfileStage = () => {
    if (!profile) return null;
    return (
      <div className={`${colors.bg} min-h-screen p-8`}>
        <div className={`max-w-2xl mx-auto`}>
          <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8 mb-6`}>
            <h2 className={`${colors.text} text-2xl font-bold mb-6`}>✨ Your Profile</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`bg-blue-900/30 rounded-lg p-4 border border-blue-700`}>
                <p className="text-blue-300 text-sm">Role</p>
                <p className={`${colors.text} text-lg font-semibold`}>{profile.role}</p>
              </div>
              <div className={`bg-purple-900/30 rounded-lg p-4 border border-purple-700`}>
                <p className="text-purple-300 text-sm">Level</p>
                <p className={`${colors.text} text-lg font-semibold`}>{profile.seniority_level}</p>
              </div>
              <div className={`bg-green-900/30 rounded-lg p-4 border border-green-700`}>
                <p className="text-green-300 text-sm">Years of Experience</p>
                <p className={`${colors.text} text-lg font-semibold`}>{profile.years_experience}+ years</p>
              </div>
              <div className={`bg-orange-900/30 rounded-lg p-4 border border-orange-700`}>
                <p className="text-orange-300 text-sm">Industry</p>
                <p className={`${colors.text} text-lg font-semibold`}>{profile.industry}</p>
              </div>
            </div>
            
            {profile.skills.length > 0 && (
              <div className="mb-6">
                <p className={`${colors.text} font-semibold mb-2`}>Skills</p>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, idx) => (
                    <span key={idx} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={generateQuestion}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${colors.success}`}
            >
              🎤 Start Practice Interview →
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAnswerStage = () => (
    <div className={`${colors.bg} min-h-screen p-8`}>
      <div className={`max-w-3xl mx-auto`}>
        {/* Question and Timer */}
        <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8 mb-6`}>
          <div className="flex justify-between items-start mb-4">
            <h2 className={`${colors.text} text-2xl font-bold flex-1`}>🎯 Question</h2>
            <div className={`text-center ${elapsedTime >= timeLimit * 0.8 ? 'text-red-500' : 'text-green-500'}`}>
              <p className="text-sm font-semibold">{elapsedTime}s / {timeLimit}s</p>
              <div className="w-20 h-2 bg-slate-700 rounded-full mt-1 overflow-hidden">
                <div 
                  className={`h-full ${elapsedTime >= timeLimit * 0.8 ? 'bg-red-500' : 'bg-green-500'} transition-all`}
                  style={{ width: `${(elapsedTime / timeLimit) * 100}%` }}
                />
              </div>
            </div>
          </div>
          
          <p className={`${colors.text} text-lg leading-relaxed mb-6 bg-slate-800/30 p-4 rounded-lg`}>
            {question}
          </p>
          
          <p className="text-slate-400 text-sm mb-2">Take time to think, then type your answer:</p>
          <textarea
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            className="w-full h-32 bg-slate-800 text-white border border-slate-600 rounded-lg p-4 focus:border-blue-500 focus:outline-none"
            placeholder="Type your answer here... (You have 45+ seconds)"
          />
          
          <div className="flex gap-3 mt-4">
            <button
              onClick={submitAnswer}
              disabled={answerLoading || !answerText.trim()}
              className={`flex-1 py-3 rounded-lg font-semibold text-white transition ${colors.success} disabled:opacity-50`}
            >
              {answerLoading ? 'Evaluating...' : '✓ Submit Answer'}
            </button>
            <button
              onClick={() => setStage('profile')}
              className={`px-6 py-3 rounded-lg font-semibold text-white bg-slate-700 hover:bg-slate-600`}
            >
              ✕ Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFeedbackStage = () => {
    if (score === null || !feedback) return null;
    return (
      <div className={`${colors.bg} min-h-screen p-8`}>
        <div className={`max-w-4xl mx-auto space-y-6`}>
          {/* Score */}
          <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Your Score</p>
                <p className={`${colors.text} text-5xl font-bold`}>{score}/100</p>
              </div>
              <div className={`text-6xl ${score >= 75 ? '😊' : score >= 60 ? '😐' : '😟'}`} />
            </div>
          </div>
          
          {/* Score Breakdown */}
          <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8`}>
            <h3 className={`${colors.text} text-xl font-bold mb-4`}>📊 Breakdown</h3>
            <div className="space-y-3">
              {Object.entries(feedback.metrics || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-slate-300">{key.replace(/_/g, ' ').toUpperCase()}</span>
                  <span className={`${colors.text} font-semibold`}>{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Feedback */}
          <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8`}>
            <h3 className={`${colors.text} text-xl font-bold mb-4`}>💬 Feedback</h3>
            
            {/* Strengths */}
            {feedback.strengths && feedback.strengths.length > 0 && (
              <div className="mb-6">
                <p className="text-green-400 font-semibold mb-2">Strengths</p>
                <ul className="space-y-1">
                  {feedback.strengths.map((strength, idx) => (
                    <li key={idx} className="text-slate-300">• {strength}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Issues */}
            {feedback.issues && feedback.issues.length > 0 && (
              <div className="mb-6">
                <p className="text-yellow-400 font-semibold mb-2">Areas for Improvement</p>
                <ul className="space-y-2">
                  {feedback.issues.map((issue, idx) => (
                    <li key={idx} className="text-slate-300 bg-yellow-900/20 p-2 rounded border border-yellow-700">
                      • <strong>{issue.category}:</strong> {issue.issue} → {issue.tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Top 3 Tips */}
            {feedback.top_3_tips && (
              <div>
                <p className="text-blue-400 font-semibold mb-2">🎯 Top 3 Tips</p>
                <ol className="space-y-1 list-decimal list-inside">
                  {feedback.top_3_tips.map((tip, idx) => (
                    <li key={idx} className="text-slate-300 text-sm">{tip}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
          
          {/* Unlocked Drills */}
          {unlockedDrills && unlockedDrills.length > 0 && (
            <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8`}>
              <h3 className={`${colors.text} text-xl font-bold mb-4`}>🔓 Unlocked Practice Drills</h3>
              <div className="space-y-3">
                {unlockedDrills.slice(0, 3).map((drill, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                    <p className="text-lg font-semibold">{drill.name}</p>
                    <p className="text-sm text-slate-400">{drill.description}</p>
                    <p className="text-xs text-slate-500 mt-2">⏱️ {drill.duration}s • Difficulty: {drill.difficulty}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Badges Earned */}
          {badges && badges.length > 0 && (
            <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8`}>
              <h3 className={`${colors.text} text-xl font-bold mb-4`}>🏆 Badges Earned</h3>
              <div className="flex flex-wrap gap-4">
                {badges.map((badge, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-3xl mb-1">{badge.icon}</p>
                    <p className="text-xs text-slate-300">{badge.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={generateQuestion}
              className={`flex-1 py-3 rounded-lg font-semibold text-white transition ${colors.success}`}
            >
              🔄 Try Another Question
            </button>
            <button
              onClick={loadProgress}
              className={`flex-1 py-3 rounded-lg font-semibold text-white transition ${colors.primary}`}
            >
              📈 View Progress
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProgressStage = () => {
    if (!userProgress) return null;
    return (
      <div className={`${colors.bg} min-h-screen p-8`}>
        <div className={`max-w-4xl mx-auto`}>
          {/* Header */}
          <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8 mb-6`}>
            <h1 className={`${colors.text} text-3xl font-bold mb-6`}>📈 Your Progress</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-900/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm">Level</p>
                <p className={`${colors.text} text-3xl font-bold`}>{userProgress.level}</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-4">
                <p className="text-purple-300 text-sm">XP</p>
                <p className={`${colors.text} text-2xl font-bold`}>{userProgress.xp_earned}</p>
              </div>
              <div className="bg-green-900/30 rounded-lg p-4">
                <p className="text-green-300 text-sm">Best Score</p>
                <p className={`${colors.text} text-2xl font-bold`}>{userProgress.best_score}</p>
              </div>
              <div className="bg-orange-900/30 rounded-lg p-4">
                <p className="text-orange-300 text-sm">Streak</p>
                <p className={`${colors.text} text-2xl font-bold`}>{userProgress.current_streak} 🔥</p>
              </div>
            </div>
          </div>
          
          {/* Badges */}
          {badges && badges.length > 0 && (
            <div className={`${colors.panel} rounded-2xl border ${colors.border} p-8`}>
              <h2 className={`${colors.text} text-2xl font-bold mb-4`}>🏆 Badges Earned ({badges.length})</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {badges.map((badge, idx) => (
                  <div key={idx} className="text-center p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-3xl mb-1">{badge.icon}</p>
                    <p className="text-xs text-slate-300">{badge.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Back Button */}
          <button
            onClick={generateQuestion}
            className={`w-full mt-6 py-3 rounded-lg font-semibold text-white transition ${colors.success}`}
          >
            ← Back to Practice
          </button>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <>
      {stage === 'resume' && renderResumeStage()}
      {stage === 'profile' && renderProfileStage()}
      {stage === 'answer' && renderAnswerStage()}
      {stage === 'feedback' && renderFeedbackStage()}
      {stage === 'progress' && renderProgressStage()}
    </>
  );
}
