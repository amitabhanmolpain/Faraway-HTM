"""
Agent 2: Question Generator
Generates situational/behavioral interview questions based on resume
"""

import random
from typing import Dict, List, Tuple

class QuestionGenerator:
    """Generates contextual interview questions based on candidate profile"""
    
    # Situational questions by role
    ROLE_QUESTIONS = {
        "PM": [
            "You're launching a product feature and it flops on day 1. Walk me through your response.",
            "Your engineering team says a feature will take 6 months, but your CEO wants it in 1 month. How do you handle it?",
            "A major customer is threatening to leave due to a bug. Your team is overloaded. What do you do?",
            "You discover that your main competitor launched a similar feature first. How do you respond?",
            "You have conflicting feedback from users and stakeholders. How do you prioritize?",
            "A team member publicly disagrees with your product direction in a meeting. How do you handle it?",
            "Your product's metrics are declining. Walk me through how you'd investigate.",
        ],
        "SDE": [
            "There's a production bug affecting 10% of users. You're the on-call engineer. Walk me through your approach.",
            "Your code review is rejected for the third time. How do you respond?",
            "You discover legacy code causing major performance issues. How do you prioritize fixing it?",
            "A team member keeps pushing back on your architectural design. What do you do?",
            "You're asked to estimate a complex feature. You're unsure about the timeline. What's your approach?",
        ],
        "Data Scientist": [
            "Your model has 99% accuracy but stakeholders don't trust it. How do you build confidence?",
            "You realize your training data has a significant bias. What's your next step?",
            "A business critical prediction went wrong. How do you debug it?",
            "You need to explain a complex model to non-technical stakeholders. How do you approach it?",
        ],
        "UX Designer": [
            "Users hate your redesign. You've already invested weeks. What do you do?",
            "You have competing design directions from leadership. How do you decide?",
            "A feature you designed isn't being used. Walk me through your investigation.",
            "Your accessibility audit reveals major issues. How do you prioritize fixes?",
        ],
    }
    
    # Behavioral questions - universal
    BEHAVIORAL_QUESTIONS = [
        "Tell me about a time you failed and what you learned.",
        "Describe a time you had to learn something completely new quickly.",
        "Give an example of when you had to compromise on your ideals.",
        "Tell me about a conflict with a coworker and how you resolved it.",
        "Describe your biggest professional achievement.",
        "Tell me about a time you advocated for an unpopular idea.",
        "When have you shown leadership despite not having a title?",
    ]
    
    # Industry-specific questions
    INDUSTRY_QUESTIONS = {
        "Fintech": [
            "How would you ensure security in a payment system you're designing?",
            "A compliance audit flags a potential issue in your system. Walk through your response.",
        ],
        "Healthcare": [
            "How would you handle a data breach affecting patient records?",
            "You discover a bug in a medical feature. What's your immediate action?",
        ],
        "E-commerce": [
            "During peak sales season, your checkout is down for 2 hours. What's your response?",
            "Your recommendation algorithm is showing biased results. How do you fix it?",
        ],
        "SaaS": [
            "A key customer's account has performance issues. Walk me through your troubleshooting.",
            "You need to scale your system 10x. What's your approach?",
        ],
        "AI/ML": [
            "Your model performance degrades in production. How do you investigate?",
            "You're asked to deploy a model you're not confident about. What do you do?",
        ],
    }
    
    # Time limits by difficulty
    TIME_LIMITS = {
        "easy": 30,      # 30 seconds
        "medium": 45,    # 45 seconds
        "hard": 60,      # 60 seconds
        "very_hard": 90, # 90 seconds
    }
    
    @staticmethod
    def get_difficulty(years_experience: int) -> str:
        """Determine difficulty based on experience"""
        if years_experience >= 10:
            return "very_hard"
        elif years_experience >= 5:
            return "hard"
        elif years_experience >= 2:
            return "medium"
        else:
            return "easy"
    
    @staticmethod
    def generate_question(profile: Dict) -> Tuple[str, int, str]:
        """
        Generate a question based on candidate profile
        
        Args:
            profile: Resume parser output with role, industry, etc.
        
        Returns:
            (question, time_limit_seconds, question_type)
        """
        role = profile.get("role", "Professional")
        industry = profile.get("industry", "General")
        years = profile.get("years_experience", 0)
        
        difficulty = QuestionGenerator.get_difficulty(years)
        time_limit = QuestionGenerator.TIME_LIMITS[difficulty]
        
        # 60% chance of role-specific, 20% behavioral, 20% industry-specific
        rand = random.random()
        
        question = None
        question_type = "behavioral"
        
        if rand < 0.6 and role in QuestionGenerator.ROLE_QUESTIONS:
            question = random.choice(QuestionGenerator.ROLE_QUESTIONS[role])
            question_type = "role_specific"
        elif rand < 0.8:
            question = random.choice(QuestionGenerator.BEHAVIORAL_QUESTIONS)
            question_type = "behavioral"
        elif industry in QuestionGenerator.INDUSTRY_QUESTIONS:
            question = random.choice(QuestionGenerator.INDUSTRY_QUESTIONS[industry])
            question_type = "industry_specific"
        else:
            question = random.choice(QuestionGenerator.BEHAVIORAL_QUESTIONS)
            question_type = "behavioral"
        
        return question, time_limit, question_type
    
    @staticmethod
    def generate_question_batch(profile: Dict, count: int = 5) -> List[Dict]:
        """Generate multiple questions for a candidate"""
        questions = []
        for _ in range(count):
            question, time_limit, q_type = QuestionGenerator.generate_question(profile)
            questions.append({
                "question": question,
                "time_limit": time_limit,
                "type": q_type,
            })
        return questions
