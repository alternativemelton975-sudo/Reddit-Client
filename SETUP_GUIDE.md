# Setup Guide - Reddit Client

## Prerequisites Installation

### 1. Install Node.js
Download and install Node.js from https://nodejs.org (LTS version recommended - currently 18.x or 20.x)

**Verify installation:**
```bash
node --version
npm --version
```

### 2. Clone or Initialize Git
If not already done:
```bash
git init
git add .
git commit -m "Initial commit: Reddit Client setup"
```

### 3. Install Project Dependencies

Navigate to the project directory and run:
```bash
npm install
```

This will install all required packages:
- React & React DOM
- Redux Toolkit & React Redux
- Jest, Enzyme, Cypress (testing)
- Create React App scripts
- And other dependencies

## Development Workflow

### Start Development Server
```bash
npm start
```
Opens http://localhost:3000 in your browser with hot reload.

### Run Tests

**Unit Tests (Jest + Enzyme):**
```bash
npm run test:unit
```

**E2E Tests (Cypress):**
First, start the dev server in another terminal:
```bash
npm start
```

Then in another terminal:
```bash
npm run test:e2e
```

Or open Cypress UI:
```bash
npm run e2e:open
```

## Build & Deploy

### Build for Production
```bash
npm run build
```

Creates optimized build in `build/` folder (~500KB gzipped).

### Deploy to GitHub Pages

1. **First-time setup:**
   - Go to your GitHub repository settings
   - Navigate to Pages
   - Select "GitHub Actions" as source

2. **Update package.json homepage:**
   ```json
   "homepage": "https://yourusername.github.io/Reddit-Client"
   ```
   OR for GitHub user site:
   ```json
   "homepage": "https://yourusername.github.io"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Or use GitHub Actions CI/CD

Push to main/master branch automatically triggers:
1. Install dependencies
2. Run tests
3. Build application
4. Deploy to GitHub Pages

## Folder Structure Quick Reference

```
src/
├── components/        # React components (8 files + CSS)
├── store/            # Redux setup (4 files)
├── utils/            # Helper functions
├── __tests__/        # Unit tests (7 test files)
├── App.js            # Main component
└── index.js          # Entry point

cypress/
├── e2e/              # E2E test scenarios
└── support/          # Cypress helpers
```

## Git Workflow

### Create Feature Branch
```bash
git checkout -b feature/new-feature
```

### Make Changes & Commit
```bash
git add .
git commit -m "feat: description of changes"
```

### Push & Create Pull Request
```bash
git push origin feature/new-feature
```

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Build fails
```bash
npm run lint  # Check for code errors
npm run test:unit  # Run unit tests
npm run build  # Try again
```

### Tests failing
- Ensure dev server is running (for E2E tests)
- Check Cypress browser compatibility
- Review test output for specific failures

## Performance Checklist

Before deployment, verify:
- [ ] npm run build completes successfully
- [ ] npm run test:unit passes all tests
- [ ] npm run test:e2e passes all tests
- [ ] No console errors in development
- [ ] Responsive design verified on mobile/tablet
- [ ] Lighthouse scores checked
- [ ] Images optimized

## Next Steps

1. Install Node.js
2. Run `npm install`
3. Start with `npm start`
4. Review the test suites
5. Customize and extend features
6. Deploy to GitHub Pages

For detailed documentation, see [README.md](./README.md)
