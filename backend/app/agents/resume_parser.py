"""
Agent 1: Resume Parser
Extracts role, experience, skills, and industry from resume text
"""

import re
from typing import Dict, List

class ResumeParser:
    """Parses resume text and extracts structured information"""
    
    # Common job roles/titles
    ROLE_KEYWORDS = {
        'product manager': 'PM',
        'software engineer': 'SDE',
        'data scientist': 'Data Scientist',
        'frontend developer': 'Frontend Dev',
        'backend developer': 'Backend Dev',
        'devops engineer': 'DevOps',
        'ux designer': 'UX Designer',
        'project manager': 'PM',
        'business analyst': 'BA',
        'qa engineer': 'QA',
        'manager': 'Manager',
        'lead': 'Lead',
        'director': 'Director',
    }
    
    # Industry keywords
    INDUSTRY_KEYWORDS = {
        'fintech': 'Fintech',
        'healthcare': 'Healthcare',
        'ecommerce': 'E-commerce',
        'saas': 'SaaS',
        'ai': 'AI/ML',
        'machine learning': 'AI/ML',
        'blockchain': 'Blockchain',
        'gaming': 'Gaming',
        'social media': 'Social Media',
        'enterprise': 'Enterprise',
        'startup': 'Startup',
    }
    
    # Common skills
    SKILL_KEYWORDS = {
        'python': 'Python',
        'javascript': 'JavaScript',
        'react': 'React',
        'node.js': 'Node.js',
        'typescript': 'TypeScript',
        'aws': 'AWS',
        'sql': 'SQL',
        'mongodb': 'MongoDB',
        'docker': 'Docker',
        'kubernetes': 'Kubernetes',
        'git': 'Git',
        'analytics': 'Analytics',
        'leadership': 'Leadership',
        'communication': 'Communication',
        'project management': 'Project Management',
        'problem solving': 'Problem Solving',
        'data analysis': 'Data Analysis',
        'product strategy': 'Product Strategy',
    }
    
    @staticmethod
    def extract_role(text: str) -> str:
        """Extract primary role/title from resume"""
        text_lower = text.lower()
        
        for keyword, role in ResumeParser.ROLE_KEYWORDS.items():
            if keyword in text_lower:
                return role
        
        return "Professional"
    
    @staticmethod
    def extract_years_experience(text: str) -> int:
        """Extract years of experience from resume"""
        # Look for patterns like "5 years", "5 yrs", "5+"
        patterns = [
            r'(\d+)\+?\s*(?:years?|yrs?)\s+(?:of\s+)?experience',
            r'(?:experience|worked|employed|total|current).*?(\d+)\s+(?:years?|yrs?)',
        ]
        
        for pattern in patterns:
            match = re.search(pattern, text, re.IGNORECASE)
            if match:
                try:
                    years = int(match.group(1))
                    return min(years, 30)  # Cap at 30 years
                except:
                    pass
        
        # Try to infer from dates
        year_matches = re.findall(r'(20\d{2})', text)
        if len(year_matches) >= 2:
            try:
                start_year = int(year_matches[0])
                end_year = int(year_matches[-1])
                return max(0, end_year - start_year)
            except:
                pass
        
        return 0
    
    @staticmethod
    def extract_skills(text: str) -> List[str]:
        """Extract technical and soft skills from resume"""
        text_lower = text.lower()
        found_skills = []
        
        for keyword, skill_name in ResumeParser.SKILL_KEYWORDS.items():
            if keyword in text_lower:
                found_skills.append(skill_name)
        
        # Remove duplicates while preserving order
        return list(dict.fromkeys(found_skills))
    
    @staticmethod
    def extract_industry(text: str) -> str:
        """Extract industry/domain from resume"""
        text_lower = text.lower()
        
        for keyword, industry in ResumeParser.INDUSTRY_KEYWORDS.items():
            if keyword in text_lower:
                return industry
        
        return "General"
    
    @staticmethod
    def extract_companies(text: str) -> List[str]:
        """Extract company names mentioned in resume"""
        # Common company names and patterns
        company_patterns = [
            r'(?:at|worked at|employed by|company|worked for)\s+(\w+)',
            r'(?:google|amazon|meta|microsoft|apple|netflix|uber|airbnb|stripe|dropbox)',
        ]
        
        companies = []
        for pattern in company_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            companies.extend(matches)
        
        return list(dict.fromkeys([c for c in companies if c]))[:5]  # Max 5
    
    @staticmethod
    def parse(resume_text: str) -> Dict:
        """
        Main method to parse resume and extract all information
        
        Returns:
        {
            "role": "Product Manager",
            "years_experience": 5,
            "skills": ["Analytics", "Product Strategy", ...],
            "industry": "SaaS",
            "companies": ["Google", "Stripe"],
            "seniority_level": "Mid-Level"
        }
        """
        years = ResumeParser.extract_years_experience(resume_text)
        
        # Determine seniority level
        if years >= 10:
            seniority = "Senior"
        elif years >= 5:
            seniority = "Mid-Level"
        elif years >= 2:
            seniority = "Junior"
        else:
            seniority = "Entry-Level"
        
        return {
            "role": ResumeParser.extract_role(resume_text),
            "years_experience": years,
            "seniority_level": seniority,
            "skills": ResumeParser.extract_skills(resume_text),
            "industry": ResumeParser.extract_industry(resume_text),
            "companies": ResumeParser.extract_companies(resume_text),
        }
