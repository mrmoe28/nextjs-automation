!/bin/bash
x
# Next.js + Vercel + GitHub Automated Setup Script
# This script automates the entire setup process for a Next.js project
# with Vercel deployment and GitHub Actions CI/CD

# Configuration - UPDATE THESE VALUES
PROJECT_NAME="my-nextjs-app"  # Must be lowercase, no spaces
VERCEL_TOKEN="your_vercel_token_here"
GITHUB_USERNAME=$(gh api user --jq .login 2>/dev/null || echo "your-github-username")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Next.js Automation Setup${NC}"
echo "Project: $PROJECT_NAME"
echo ""

# 1. Check prerequisites
echo -e "${BLUE}Checking prerequisites...${NC}"

if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    exit 1
fi

if ! command -v gh &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI is not installed${NC}"
    echo "Install with: brew install gh"
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo -e "${RED}❌ GitHub CLI is not authenticated${NC}"
    echo "Run: gh auth login"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites checked${NC}"

# 2. Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

# 3. Install Vercel CLI globally
echo -e "${BLUE}Installing Vercel CLI...${NC}"
npm install -g vercel

# 4. Deploy to Vercel and create project
echo -e "${BLUE}Deploying to Vercel...${NC}"
VERCEL_TOKEN=$VERCEL_TOKEN vercel --yes --name $PROJECT_NAME

# 5. Extract Vercel project details
if [ -f ".vercel/project.json" ]; then
    VERCEL_ORG_ID=$(cat .vercel/project.json | grep orgId | cut -d'"' -f4)
    VERCEL_PROJECT_ID=$(cat .vercel/project.json | grep projectId | cut -d'"' -f4)
    echo -e "${GREEN}✅ Vercel project created${NC}"
else
    echo -e "${RED}❌ Failed to create Vercel project${NC}"
    exit 1
fi

# 6. Create .env file
echo -e "${BLUE}Creating .env file...${NC}"
cat > .env << EOF
VERCEL_TOKEN=$VERCEL_TOKEN
VERCEL_ORG_ID=$VERCEL_ORG_ID
VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID
GITHUB_REPO=$PROJECT_NAME
EOF

echo -e "${GREEN}✅ Environment file created${NC}"

# 7. Create GitHub repository
echo -e "${BLUE}Creating GitHub repository...${NC}"
gh repo create $PROJECT_NAME --private --source=. --remote=origin 2>/dev/null || {
    echo "Repository may already exist, continuing..."
}

# 8. Add GitHub secrets
echo -e "${BLUE}Adding GitHub secrets...${NC}"
gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" --repo $GITHUB_USERNAME/$PROJECT_NAME
gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID" --repo $GITHUB_USERNAME/$PROJECT_NAME
gh secret set VERCEL_PROJECT_ID --body "$VERCEL_PROJECT_ID" --repo $GITHUB_USERNAME/$PROJECT_NAME
echo -e "${GREEN}✅ GitHub secrets configured${NC}"

# 9. Remove any existing workflow files from template
if [ -d ".github/workflows" ]; then
    git rm -f .github/workflows/*.yml 2>/dev/null || true
fi

# 10. Create GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Vercel Production Deployment

on:
  push:
    branches:
      - main

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

jobs:
  deploy-production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm install -g vercel
      
      - name: Pull Vercel Environment
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Build Project Artifacts
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Deploy to Vercel
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
EOF

echo -e "${GREEN}✅ GitHub Actions workflow created${NC}"

# 11. Commit and push
echo -e "${BLUE}Committing and pushing...${NC}"
git add -A
git commit -m "Initial setup with Vercel and GitHub Actions" || true

# Handle workflow permission issue
if ! git push -u origin main 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Note: Workflow file couldn't be pushed due to permissions.${NC}"
    echo "You may need to:"
    echo "1. Run: gh auth refresh -s workflow"
    echo "2. Or add the workflow file manually through GitHub web interface"
    
    # Remove workflow and push without it
    git rm .github/workflows/deploy.yml 2>/dev/null || true
    git commit -m "Remove workflow file due to permissions" || true
    git push -u origin main
fi

echo ""
echo -e "${GREEN}✨ Setup complete!${NC}"
echo ""
echo -e "${BLUE}📋 Summary:${NC}"
echo "Repository: https://github.com/$GITHUB_USERNAME/$PROJECT_NAME"
echo "Vercel Project: https://vercel.com/dashboard"
echo ""
echo -e "${BLUE}🚀 Next steps:${NC}"
echo "1. Start development: npm run dev"
echo "2. View deployment: Check your Vercel dashboard"
echo "3. Monitor deployments: npm run monitor (if available)ho ""
xxecho -e "${GREEN}Happy coding! 🎉${NC}"
