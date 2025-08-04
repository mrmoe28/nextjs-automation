# Next.js Automation

## Overview
This document captures all issues encountered during setup and their solutions to ensure smooth automation for future builds.

## Product Requirements Document (PRD) Template

### What is a PRD?
A Product Requirements Document defines what you're building, who it's for, and what features it needs. Think of it as your app's blueprint - it helps you stay focused and makes development much smoother.

### 1. Product Overview

**What this means**: A brief description of your app - like an elevator pitch.

**Why it matters**: Keeps everyone aligned on what you're building.

**Questions to answer**:
- What problem does your app solve?
- Who will use it?
- What makes it unique?

**Example for "Baller App"**:
```
Product Name: Baller - Basketball Stats Tracker
Problem: Coaches and players struggle to track and analyze game statistics efficiently
Solution: A real-time stats tracking app with instant insights and trend analysis
Unique Value: Voice-activated stat entry during games, AI-powered performance suggestions
```

### 2. User Personas

**What this means**: Descriptions of your typical users - who they are and what they need.

**Why it matters**: Helps you design features that real people will actually use.

**Questions to answer**:
- Who are your main user types?
- What are their goals?
- What frustrates them currently?

**Example Personas**:
```
1. Coach Carlos (Primary User)
   - Age: 35-50
   - Tech comfort: Medium
   - Needs: Quick stat entry during games, team performance reports
   - Pain points: Paper scorebooks are slow, hard to analyze trends

2. Player Pat (Secondary User)
   - Age: 14-25
   - Tech comfort: High
   - Needs: Personal stats, improvement tips, share achievements
   - Pain points: No easy way to track progress over time
```

### 3. Core Features

**What this means**: The main things your app must do (MVP - Minimum Viable Product).

**Why it matters**: Prevents scope creep - focus on essentials first.

**Questions to answer**:
- What are the 3-5 must-have features?
- What can wait for version 2?

**Example Features List**:
```
Must Have (Version 1):
□ User registration and login
□ Add/edit player profiles
□ Record game statistics (points, rebounds, assists)
□ View individual and team stats
□ Basic game reports

Nice to Have (Version 2):
□ Live game mode with timer
□ Advanced analytics and trends
□ Social sharing features
□ Video highlight linking
□ Tournament brackets
```

### 4. User Stories

**What this means**: Specific actions users want to take, written from their perspective.

**Why it matters**: Translates features into actual development tasks.

**Format**: "As a [user type], I want to [action] so that [benefit]"

**Examples**:
```
- As a coach, I want to quickly add stats during a game so that I don't miss any action
- As a player, I want to see my shooting percentage so that I know what to practice
- As a team manager, I want to export reports so that I can share with parents/scouts
```

### 5. Technical Requirements

**What this means**: The technical decisions and constraints for your app.

**Why it matters**: Ensures your tech stack can handle your requirements.

**Questions to answer**:
- What devices/browsers must you support?
- How many users do you expect?
- What integrations do you need?

**Example Technical Specs**:
```
Frontend:
- Framework: Next.js 14 with TypeScript
- Styling: Tailwind CSS
- State Management: Context API or Zustand
- Mobile: Responsive design (mobile-first)

Backend:
- Database: PostgreSQL with Prisma ORM
- Authentication: NextAuth.js
- API: Next.js API routes
- File Storage: Vercel Blob or AWS S3

Performance:
- Page load: < 3 seconds
- Offline capability: Basic PWA features
- Concurrent users: Support 100+ simultaneous users
```

### 6. Data Model

**What this means**: The main types of information your app will store.

**Why it matters**: Defines your database structure early.

**Example Data Structure**:
```
User
├── id, email, password, role
├── createdAt, updatedAt

Team
├── id, name, logo, season
├── coachId (→ User)
├── players (→ Player[])

Player
├── id, name, number, position
├── teamId (→ Team)
├── stats (→ GameStats[])

Game
├── id, date, opponent
├── teamId (→ Team)
├── finalScore, opponentScore

GameStats
├── playerId (→ Player)
├── gameId (→ Game)
├── points, rebounds, assists, steals, blocks
├── minutesPlayed, fouls
```

### 7. UI/UX Requirements

**What this means**: How your app should look and feel.

**Why it matters**: Ensures consistent, user-friendly design.

**Key Decisions**:
```
Color Scheme:
- Primary: Orange (#FFA500) - energetic, sporty
- Secondary: Dark Blue (#1E3A8A) - professional
- Background: Light Gray (#F5F5F5)

Typography:
- Headings: Bold, sans-serif (Inter or Montserrat)
- Body: Readable, clean (Roboto or Open Sans)

Layout Principles:
- Mobile-first responsive design
- Maximum 3 clicks to any feature
- Clear visual hierarchy
- Consistent spacing (8px grid)

Key Pages:
1. Dashboard - Overview of recent games and stats
2. Game View - Live stat entry interface
3. Player Profile - Individual statistics and trends
4. Reports - Exportable team/player summaries
```

### 8. Success Metrics

**What this means**: How you'll measure if your app is successful.

**Why it matters**: Gives you clear goals to work toward.

**Example Metrics**:
```
User Engagement:
- Target: 100 active teams in first 3 months
- Daily active users: 50% of registered users
- Average session time: 10+ minutes

Performance:
- App store rating: 4.5+ stars
- Page load time: < 2 seconds
- Zero critical bugs in production

Business:
- Customer acquisition cost: < $10/team
- Monthly recurring revenue: $500 by month 3
- Churn rate: < 5% monthly
```

### 9. Timeline and Milestones

**What this means**: When different parts will be completed.

**Why it matters**: Keeps development on track.

**Example Timeline**:
```
Week 1-2: Setup and Foundation
□ Project setup (Next.js, database, auth)
□ Basic UI components and layout
□ User registration/login

Week 3-4: Core Features
□ Team and player management
□ Basic stat entry form
□ Simple data display views

Week 5-6: Game Features
□ Live game mode
□ Real-time stat updates
□ Game history and reports

Week 7-8: Polish and Deploy
□ UI/UX improvements
□ Testing and bug fixes
□ Production deployment
□ User documentation
```

### 10. Risks and Assumptions

**What this means**: Potential problems and what you're assuming to be true.

**Why it matters**: Helps you prepare for challenges.

**Examples**:
```
Risks:
- Users might find stat entry too slow during fast games
  → Mitigation: Add voice input or quick-tap buttons
- Database might get expensive with lots of stats
  → Mitigation: Implement data archiving for old seasons

Assumptions:
- Users have stable internet during games
- Coaches are willing to use tablets/phones courtside
- Teams play standard basketball rules (not custom variations)
```

---

## PRD Quick Start Templates

### Template 1: E-commerce Store
```yaml
Product: Online clothing store
Users: Fashion shoppers age 18-35
Core Features:
  - Product catalog with filters
  - Shopping cart and checkout
  - User accounts and order history
  - Payment processing (Stripe)
  - Inventory management
Tech Stack: Next.js + Stripe + PostgreSQL
```

### Template 2: Task Management App
```yaml
Product: Team task tracker
Users: Small business teams (5-20 people)
Core Features:
  - Create/assign/track tasks
  - Project boards (Kanban style)
  - Due dates and reminders
  - Team collaboration comments
  - Basic reporting
Tech Stack: Next.js + Prisma + PostgreSQL
```

### Template 3: Content Blog
```yaml
Product: Tech tutorial blog
Users: Developers learning new skills
Core Features:
  - Article creation/editing (Markdown)
  - Categories and tags
  - Search functionality
  - Comments system
  - Admin dashboard
Tech Stack: Next.js + MDX + PostgreSQL
```

---

## Creating Your PRD

### Option 1: Fill Out the Template
Copy the sections above and fill in your own answers.

### Option 2: Use the PRD Generator Script
Save this as `generate-prd.js` and run it:

```javascript
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function generatePRD() {
  console.log('🚀 PRD Generator - Let\'s define your app!\n');
  
  // Basic Info
  const appName = await question('What is your app name? ');
  const problem = await question('What problem does it solve? (one sentence) ');
  const targetUsers = await question('Who are your target users? ');
  
  // Features
  console.log('\nList 3 core features (press enter after each):');
  const features = [];
  for (let i = 1; i <= 3; i++) {
    features.push(await question(`Feature ${i}: `));
  }
  
  // Tech choices
  console.log('\nChoose your database:');
  console.log('1. PostgreSQL (recommended for complex data)');
  console.log('2. MongoDB (good for flexible schemas)');
  console.log('3. SQLite (simple, file-based)');
  const dbChoice = await question('Enter number (1-3): ');
  
  const databases = {
    '1': 'PostgreSQL with Prisma',
    '2': 'MongoDB with Mongoose',
    '3': 'SQLite with Prisma'
  };
  
  // Generate PRD
  const prd = `# Product Requirements Document

## Product Overview
**Name**: ${appName}
**Problem**: ${problem}
**Target Users**: ${targetUsers}

## Core Features (MVP)
${features.map((f, i) => `${i + 1}. ${f}`).join('\n')}

## Technical Stack
- Frontend: Next.js 14 with TypeScript
- Styling: Tailwind CSS
- Database: ${databases[dbChoice] || databases['1']}
- Deployment: Vercel
- Authentication: NextAuth.js

## Next Steps
1. Set up development environment
2. Create database schema
3. Build authentication system
4. Implement core features
5. Deploy to production

Generated on: ${new Date().toLocaleDateString()}
`;

  // Save PRD
  fs.writeFileSync('PRD.md', prd);
  console.log('\n✅ PRD saved to PRD.md');
  
  rl.close();
}

generatePRD();
```

Run with: `node generate-prd.js`

---

## Prerequisites
- Node.js and npm installed
- GitHub CLI (`gh`) installed and authenticated
- Vercel CLI (`npm install -g vercel`)
- Vercel account with API token
- GitHub account with appropriate permissions

## Common Issues and Solutions

### 1. Interactive Script Input Problem
**Issue**: The `setup-vercel.js` script requires interactive input that can't be provided programmatically.

**Solution**: Skip the interactive script entirely and use Vercel CLI directly:
```bash
# Don't use: npm run setup-vercel
# Instead use direct Vercel CLI commands with environment variables
VERCEL_TOKEN=your_token vercel --yes --name project-name
```

### 2. Vercel Project Name Requirements
**Issue**: Vercel rejects project names with uppercase letters or invalid characters.

**Error**: "Project names must be lowercase and can only contain letters, digits, '.', '_', '-'"

**Solution**: Always use lowercase project names:
```bash
# Bad: --name MyProject
# Good: --name my-project
```

### 3. Vercel CLI Flag Deprecations
**Issue**: The `--name` flag is deprecated in `vercel link` command.

**Solution**: Use `vercel --yes --name` for initial deployment which both creates and links:
```bash
VERCEL_TOKEN=your_token vercel --yes --name project-name
```

### 4. GitHub Workflow Permissions
**Issue**: GitHub OAuth tokens from CLI may lack `workflow` scope, preventing push of `.github/workflows/` files.

**Error**: "refusing to allow an OAuth App to create or update workflow without `workflow` scope"

**Solutions**:
1. Add workflow files manually through GitHub web interface
2. Or re-authenticate GitHub CLI with workflow scope:
```bash
gh auth refresh -s workflow
```
3. Or commit workflow files separately after granting permissions

### 5. Template Workflow Conflicts
**Issue**: Next.js templates may include existing workflow files that conflict with new ones.

**Solution**: Remove template workflows before adding custom ones:
```bash
git rm .github/workflows/*.yml
git commit -m "Remove template workflows"
```

## Automated Setup Script

Save this as `setup-project.sh`:

```bash
#!/bin/bash

# Configuration
PROJECT_NAME="baller-app"  # Must be lowercase
VERCEL_TOKEN="your_vercel_token_here"
GITHUB_USERNAME=$(gh api user --jq .login)

# 1. Install dependencies
echo "Installing dependencies..."
npm install

# 2. Install Vercel CLI globally
echo "Installing Vercel CLI..."
npm install -g vercel

# 3. Deploy to Vercel and create project
echo "Deploying to Vercel..."
VERCEL_TOKEN=$VERCEL_TOKEN vercel --yes --name $PROJECT_NAME

# 4. Extract Vercel project details
VERCEL_ORG_ID=$(cat .vercel/project.json | grep orgId | cut -d'"' -f4)
VERCEL_PROJECT_ID=$(cat .vercel/project.json | grep projectId | cut -d'"' -f4)

# 5. Create .env file
echo "Creating .env file..."
cat > .env << EOF
VERCEL_TOKEN=$VERCEL_TOKEN
VERCEL_ORG_ID=$VERCEL_ORG_ID
VERCEL_PROJECT_ID=$VERCEL_PROJECT_ID
GITHUB_REPO=$PROJECT_NAME
EOF

# 6. Create GitHub repository
echo "Creating GitHub repository..."
gh repo create $PROJECT_NAME --private --source=. --remote=origin

# 7. Add GitHub secrets
echo "Adding GitHub secrets..."
gh secret set VERCEL_TOKEN --body "$VERCEL_TOKEN" --repo $GITHUB_USERNAME/$PROJECT_NAME
gh secret set VERCEL_ORG_ID --body "$VERCEL_ORG_ID" --repo $GITHUB_USERNAME/$PROJECT_NAME
gh secret set VERCEL_PROJECT_ID --body "$VERCEL_PROJECT_ID" --repo $GITHUB_USERNAME/$PROJECT_NAME

# 8. Remove any existing workflow files from template
if [ -d ".github/workflows" ]; then
    git rm -f .github/workflows/*.yml 2>/dev/null || true
fi

# 9. Create GitHub Actions workflow
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Vercel Production Deployment

on:
  push:
    branches:
      - main

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
      - run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
      - run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
EOF

# 10. Commit and push
echo "Committing and pushing..."
git add -A
git commit -m "Initial setup with Vercel and GitHub Actions"

# Handle workflow permission issue
if ! git push -u origin main 2>/dev/null; then
    echo "Note: Workflow file couldn't be pushed due to permissions."
    echo "Please add the workflow file manually through GitHub web interface."
    git rm .github/workflows/deploy.yml
    git commit -m "Remove workflow file due to permissions"
    git push -u origin main
fi

echo "Setup complete!"
echo "Repository: https://github.com/$GITHUB_USERNAME/$PROJECT_NAME"
echo "Vercel Project: Check your Vercel dashboard"
```

## Manual Workflow Addition (if needed)

If GitHub CLI lacks workflow permissions, add the workflow manually:

1. Go to your GitHub repository
2. Click "Add file" → "Create new file"
3. Name it: `.github/workflows/deploy.yml`
4. Paste the workflow content
5. Commit to main branch

## Quick Command Reference

```bash
# Deploy to Vercel (creates project if doesn't exist)
VERCEL_TOKEN=token vercel --yes --name project-name

# Link existing Vercel project
VERCEL_TOKEN=token vercel link --yes

# Create GitHub repo with CLI
gh repo create project-name --private --source=. --remote=origin

# Add GitHub secrets
gh secret set SECRET_NAME --body "secret_value" --repo owner/repo

# Check GitHub CLI auth status
gh auth status

# Add workflow scope to GitHub CLI
gh auth refresh -s workflow
```

## Environment Variables Required

Create a `.env` file with:
```env
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
GITHUB_REPO=repository_name
```

## Troubleshooting Checklist

- [ ] Project name is lowercase
- [ ] Vercel token has proper permissions
- [ ] GitHub CLI is authenticated
- [ ] No conflicting workflow files from templates
- [ ] `.env` file is in `.gitignore`
- [ ] GitHub secrets are properly set
- [ ] Workflow file has correct indentation

## Notes for Future Automation

1. **Always use lowercase project names** to avoid Vercel validation errors
2. **Skip interactive scripts** - use direct CLI commands with environment variables
3. **Check for template conflicts** - remove existing workflows before adding new ones
4. **Handle permission issues gracefully** - provide fallback instructions for manual steps
5. **Use `--yes` flags** to avoid interactive prompts in automation scripts
6. **Test token permissions** before running full automation