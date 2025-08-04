#!/usr/bin/env node

/**
 * PRD Generator - Interactive Product Requirements Document Creator
 * This script helps you create a comprehensive PRD for your Next.js project
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  blue: '\x1b[34m',
  green: '\x1b[32m',
  yellow: '\x1b[33m'
};

async function generatePRD() {
  console.log(`${colors.blue}${colors.bright}🚀 PRD Generator - Let's define your app!${colors.reset}\n`);
  
  // Basic Info
  console.log(`${colors.yellow}📋 Basic Information${colors.reset}`);
  const appName = await question('What is your app name? ');
  const problem = await question('What problem does it solve? (one sentence) ');
  const targetUsers = await question('Who are your target users? ');
  const uniqueValue = await question('What makes it unique? ');
  
  // User Personas
  console.log(`\n${colors.yellow}👥 User Personas${colors.reset}`);
  console.log('Define your primary user persona:');
  const personaName = await question('Persona name (e.g., "Manager Mike"): ');
  const personaAge = await question('Age range: ');
  const personaNeeds = await question('Main needs: ');
  const personaPainPoints = await question('Current pain points: ');
  
  // Features
  console.log(`\n${colors.yellow}✨ Core Features${colors.reset}`);
  console.log('List 5 core features (press enter after each):');
  const features = [];
  for (let i = 1; i <= 5; i++) {
    const feature = await question(`Feature ${i}: `);
    if (feature) features.push(feature);
  }
  
  // Technical Requirements
  console.log(`\n${colors.yellow}🛠️ Technical Requirements${colors.reset}`);
  console.log('Choose your database:');
  console.log('1. PostgreSQL (recommended for complex data)');
  console.log('2. MongoDB (good for flexible schemas)');
  console.log('3. SQLite (simple, file-based)');
  console.log('4. MySQL (traditional relational)');
  const dbChoice = await question('Enter number (1-4): ');
  
  const databases = {
    '1': 'PostgreSQL with Prisma',
    '2': 'MongoDB with Mongoose',
    '3': 'SQLite with Prisma',
    '4': 'MySQL with Prisma'
  };
  
  console.log('\nChoose authentication method:');
  console.log('1. NextAuth.js (recommended)');
  console.log('2. Clerk');
  console.log('3. Auth0');
  console.log('4. Supabase Auth');
  const authChoice = await question('Enter number (1-4): ');
  
  const authMethods = {
    '1': 'NextAuth.js',
    '2': 'Clerk',
    '3': 'Auth0',
    '4': 'Supabase Auth'
  };
  
  // Timeline
  console.log(`\n${colors.yellow}📅 Timeline${colors.reset}`);
  const timeline = await question('Estimated development time (e.g., "8 weeks"): ');
  const mvpDate = await question('Target MVP launch date: ');
  
  // Success Metrics
  console.log(`\n${colors.yellow}📊 Success Metrics${colors.reset}`);
  const userTarget = await question('Target number of users in first 3 months: ');
  const revenueTarget = await question('Revenue target (if applicable): ');
  
  // Generate PRD
  const prd = `# Product Requirements Document

## Product Overview

**Name**: ${appName}
**Problem Statement**: ${problem}
**Target Users**: ${targetUsers}
**Unique Value Proposition**: ${uniqueValue}

## User Personas

### Primary Persona
**Name**: ${personaName}
**Age Range**: ${personaAge}
**Needs**: ${personaNeeds}
**Pain Points**: ${personaPainPoints}

## Core Features (MVP)

${features.map((f, i) => `${i + 1}. **${f}**`).join('\n')}

## User Stories

${features.slice(0, 3).map(f => `- As a user, I want to ${f.toLowerCase()} so that I can achieve my goals more efficiently`).join('\n')}

## Technical Requirements

### Frontend
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Context API / Zustand
- **UI Components**: Shadcn/ui or custom components

### Backend
- **Database**: ${databases[dbChoice] || databases['1']}
- **Authentication**: ${authMethods[authChoice] || authMethods['1']}
- **API**: Next.js API routes
- **File Storage**: Vercel Blob / AWS S3

### Infrastructure
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics
- **Error Tracking**: Sentry

## Data Model

\`\`\`
User
├── id: string (uuid)
├── email: string
├── name: string
├── role: enum (admin, user)
├── createdAt: DateTime
└── updatedAt: DateTime

// Add more models based on your features
\`\`\`

## UI/UX Requirements

### Design Principles
- Mobile-first responsive design
- Accessibility (WCAG 2.1 AA compliance)
- Fast load times (< 3s)
- Intuitive navigation

### Key Pages
1. **Landing Page** - Product overview and CTA
2. **Dashboard** - User's main workspace
3. **Settings** - Account and preference management
4. **Admin Panel** - System management (if applicable)

## Success Metrics

### User Metrics
- **Target Users**: ${userTarget} active users in 3 months
- **Engagement**: 50% daily active users
- **Retention**: 80% monthly retention rate

### Business Metrics
- **Revenue Target**: ${revenueTarget || 'N/A'}
- **Customer Acquisition Cost**: < $50
- **Lifetime Value**: > $500

### Technical Metrics
- **Performance**: 90+ Lighthouse score
- **Uptime**: 99.9% availability
- **Response Time**: < 200ms API response

## Timeline and Milestones

**Total Duration**: ${timeline}
**MVP Launch**: ${mvpDate}

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup and configuration
- [ ] Database schema design
- [ ] Authentication implementation
- [ ] Basic UI components

### Phase 2: Core Features (Week 3-5)
${features.slice(0, 3).map(f => `- [ ] Implement ${f}`).join('\n')}

### Phase 3: Polish & Testing (Week 6-7)
- [ ] UI/UX improvements
- [ ] Performance optimization
- [ ] Testing and bug fixes
- [ ] Documentation

### Phase 4: Launch (Week 8)
- [ ] Production deployment
- [ ] Monitoring setup
- [ ] User onboarding
- [ ] Launch marketing

## Risks and Mitigations

### Technical Risks
- **Risk**: Scalability issues with user growth
  - **Mitigation**: Implement caching, optimize database queries, use CDN

- **Risk**: Security vulnerabilities
  - **Mitigation**: Regular security audits, implement best practices, use security tools

### Business Risks
- **Risk**: Low user adoption
  - **Mitigation**: User research, beta testing, iterative improvements

- **Risk**: Competition
  - **Mitigation**: Focus on unique value proposition, rapid iteration

## Assumptions

- Users have stable internet connections
- Target users are comfortable with web applications
- Market demand exists for this solution
- Technical stack can handle expected load

## Dependencies

- Third-party APIs are reliable and available
- Payment processing (if applicable) is compliant
- Data privacy regulations are followed (GDPR, CCPA)

## Next Steps

1. **Review and approve this PRD**
2. **Set up development environment**
3. **Create detailed technical design document**
4. **Begin development sprint planning**
5. **Start implementation**

---

**Document Version**: 1.0
**Created Date**: ${new Date().toLocaleDateString()}
**Last Updated**: ${new Date().toLocaleDateString()}
**Status**: Draft

## Approval

- [ ] Product Owner
- [ ] Technical Lead
- [ ] Design Lead
- [ ] Stakeholders
`;
  
  // Save PRD
  const fileName = `PRD-${appName.replace(/\s+/g, '-').toLowerCase()}.md`;
  fs.writeFileSync(fileName, prd);
  
  console.log(`\n${colors.green}✅ PRD saved to ${fileName}${colors.reset}`);
  console.log(`\n${colors.blue}📋 Next steps:${colors.reset}`);
  console.log('1. Review and refine the PRD with your team');
  console.log('2. Get stakeholder approval');
  console.log('3. Create detailed technical specifications');
  console.log('4. Start development!');
  
  rl.close();
}

// Run the generator
generatePRD().catch(error => {
  console.error(`${colors.reset}Error:`, error);
  rl.close();
  process.exit(1);
});