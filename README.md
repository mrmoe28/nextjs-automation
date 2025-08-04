# Next.js Automation Workflow & PRD Templates

> 🚀 Complete automation workflow for Next.js + Vercel + GitHub Actions with comprehensive Product Requirements Document templates

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/yourusername/nextjs-automation-workflow)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-blueviolet)](https://nextjs.org)

## 📚 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [PRD Templates](#prd-templates)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🎯 Overview

This repository contains a comprehensive automation workflow for building Next.js applications with Vercel deployment and GitHub Actions CI/CD. It includes:

- **Complete Automation Scripts** - One-command project setup
- **Security Best Practices** - Secure credential storage using macOS Keychain
- **PRD Templates** - Product Requirements Document templates and generator
- **Troubleshooting Guide** - Solutions to common issues
- **Best Practices** - Enterprise-grade automation patterns

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nextjs-automation-workflow.git
cd nextjs-automation-workflow
```

### 2. View the Documentation

The main documentation is in [`automation-workflow.md`](./automation-workflow.md). It contains:

- Common issues and their solutions
- PRD templates with real examples
- Security best practices
- Automated setup scripts
- Troubleshooting guides

### 3. Use the Automated Setup Script

```bash
# Make the script executable
chmod +x templates/setup-project.sh

# Run the setup
./templates/setup-project.sh
```

## 📖 Documentation

### Main Sections

| Section | Description | Link |
|---------|-------------|------|
| **PRD Templates** | Product Requirements Document templates and examples | [View PRD Section](./automation-workflow.md#product-requirements-document-prd-template) |
| **Common Issues** | Solutions to frequent setup problems | [View Issues](./automation-workflow.md#common-issues-and-solutions) |
| **Automation Script** | Complete automated setup script | [View Script](./automation-workflow.md#automated-setup-script) |
| **Security Practices** | Secure credential management | [View Security](./automation-workflow.md#security-best-practices) |
| **Troubleshooting** | Comprehensive troubleshooting checklist | [View Troubleshooting](./automation-workflow.md#enhanced-troubleshooting-checklist) |

### Key Features Covered

- ✅ Automated Vercel project creation
- ✅ GitHub repository setup with secrets
- ✅ Secure token storage in macOS Keychain
- ✅ CI/CD pipeline with GitHub Actions
- ✅ Real-time deployment monitoring
- ✅ Error recovery and rollback strategies
- ✅ PRD templates for different app types

## 📝 PRD Templates

### What's Included

The PRD (Product Requirements Document) section includes:

1. **Complete PRD Template** - 10 essential sections for defining your app
2. **Real Examples** - Basketball stats tracker app example
3. **Quick Start Templates** - E-commerce, Task Management, Blog
4. **PRD Generator Script** - Interactive script to create your PRD

### Using the PRD Generator

```bash
# Navigate to templates directory
cd templates

# Run the PRD generator
node generate-prd.js
```

This will interactively create a customized PRD for your project.

### PRD Template Sections

1. **Product Overview** - Elevator pitch for your app
2. **User Personas** - Who will use your app
3. **Core Features** - MVP features list
4. **User Stories** - Feature requirements from user perspective
5. **Technical Requirements** - Tech stack and constraints
6. **Data Model** - Database structure
7. **UI/UX Requirements** - Design guidelines
8. **Success Metrics** - How to measure success
9. **Timeline** - Development milestones
10. **Risks & Assumptions** - Potential challenges

## 💻 Installation

### Prerequisites

Install all required tools:

```bash
# Install Node.js (if not installed)
brew install node

# Install GitHub CLI
brew install gh

# Install Vercel CLI
npm install -g vercel

# Authenticate GitHub CLI
gh auth login

# Authenticate Vercel CLI
vercel login
```

### Setting Up Credentials

For secure credential storage:

```bash
# Store Vercel token in macOS Keychain
security add-generic-password -s "nextjs-automation" -a "vercel-token" -w "your-token-here"

# Store GitHub token
security add-generic-password -s "nextjs-automation" -a "github-token" -w "your-token-here"
```

## 🔧 Usage

### Method 1: Using the Complete Script

```bash
# Edit the configuration in the script
nano templates/setup-project.sh

# Update these variables:
# PROJECT_NAME="your-app-name"  # Must be lowercase
# VERCEL_TOKEN="your-vercel-token"

# Run the setup
./templates/setup-project.sh
```

### Method 2: Manual Step-by-Step

Follow the detailed instructions in `automation-workflow.md`:

1. Create Vercel project
2. Set up GitHub repository
3. Configure GitHub secrets
4. Deploy with GitHub Actions

### Method 3: Using Individual Commands

```bash
# Deploy to Vercel
VERCEL_TOKEN=token vercel --yes --name project-name

# Create GitHub repo
gh repo create project-name --private --source=. --remote=origin

# Add GitHub secrets
gh secret set VERCEL_TOKEN --body "token" --repo owner/repo
```

## 🐛 Troubleshooting

### Common Issues Quick Fixes

| Problem | Solution |
|---------|----------|
| "Project name invalid" | Use lowercase letters only (e.g., `my-app` not `MyApp`) |
| "Token not found" | Check Keychain access: `security find-generic-password -s "service-name"` |
| "Workflow permission denied" | Run: `gh auth refresh -s workflow` |
| "Vercel link failed" | Use: `vercel --yes --name project-name` |
| "Build failed" | Use `npm ci` instead of `npm install` |

For detailed troubleshooting, see the [full guide](./automation-workflow.md#enhanced-troubleshooting-checklist).

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [PRD Best Practices](https://www.productplan.com/glossary/product-requirements-document/)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/nextjs-automation-workflow/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/nextjs-automation-workflow/discussions)
- **Email**: your-email@example.com

---

## Quick Commands Reference

```bash
# Clone and setup
git clone https://github.com/yourusername/nextjs-automation-workflow.git
cd nextjs-automation-workflow

# View documentation
cat automation-workflow.md

# Generate a PRD
node templates/generate-prd.js

# Run automated setup
./templates/setup-project.sh

# Check prerequisites
gh --version && vercel --version && node --version
```

## Next Steps

1. 📖 Read the [complete documentation](./automation-workflow.md)
2. 🎯 Create your PRD using the templates
3. 🚀 Run the automated setup script
4. 🎉 Deploy your first app!

---

Made with ❤️ for Next.js developers who love automation