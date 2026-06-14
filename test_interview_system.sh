#!/bin/bash
# Quick test script for Interview Coaching System

echo "🧪 Testing Interview Coaching System..."
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base URL
BASE_URL="http://localhost:5000/api/interview"

echo -e "${BLUE}1. Testing Parse Resume Endpoint${NC}"
curl -s -X POST $BASE_URL/parse-resume \
  -H "Content-Type: application/json" \
  -d '{
    "resume_text": "Product Manager at Google (5 years). Experience with analytics, product strategy, roadmapping. Skills: SQL, Python, Tableau, Leadership.",
    "user_id": "test_user_1"
  }' | jq .
echo ""

echo -e "${BLUE}2. Testing Generate Question Endpoint${NC}"
PROFILE='{"role":"PM","years_experience":5,"seniority_level":"Mid-Level","skills":["Analytics","Leadership"],"industry":"SaaS","companies":["Google"]}'

RESPONSE=$(curl -s -X POST $BASE_URL/generate-question \
  -H "Content-Type: application/json" \
  -d "{\"profile\":$PROFILE,\"user_id\":\"test_user_1\"}")

echo "$RESPONSE" | jq .
SESSION_ID=$(echo "$RESPONSE" | jq -r '.session_id')
echo "Session ID: $SESSION_ID"
echo ""

echo -e "${BLUE}3. Testing Submit Answer Endpoint${NC}"
curl -s -X POST $BASE_URL/submit-answer \
  -H "Content-Type: application/json" \
  -d "{
    \"session_id\":\"$SESSION_ID\",
    \"answer\":\"I would immediately escalate to the legal and HR teams to report the fraud. Within 10 minutes, I would freeze the employee's access and gather all evidence. Then I would document everything in a detailed report and conduct a proper investigation before making any final decisions about termination.\",
    \"duration\":45,
    \"user_id\":\"test_user_1\"
  }" | jq .
echo ""

echo -e "${BLUE}4. Testing Get Progress Endpoint${NC}"
curl -s -X GET "$BASE_URL/progress?user_id=test_user_1" | jq .
echo ""

echo -e "${BLUE}5. Testing Get Drills Endpoint${NC}"
curl -s -X GET "$BASE_URL/drills" | jq '.drills | length'
echo ""

echo -e "${BLUE}6. Testing Get Badges Endpoint${NC}"
curl -s -X GET "$BASE_URL/badges" | jq '.total'
echo ""

echo -e "${GREEN}✅ All tests completed!${NC}"
