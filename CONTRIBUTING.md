# Contributing Guide

Thank you for your interest in contributing to the Reddit Client project!

## Getting Started

### Prerequisites
- Node.js 14.x or higher
- npm or yarn
- Git

### Setup Development Environment

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/yourusername/Reddit-Client.git
   cd Reddit-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Start Development Server
```bash
npm start
```
The app opens at http://localhost:3000 with hot reload enabled.

### Running Tests

**Unit Tests**
```bash
npm run test:unit
```

**E2E Tests**
```bash
# Terminal 1
npm start

# Terminal 2
npm run test:e2e

# Or open Cypress UI
npm run e2e:open
```

**Linting**
```bash
npm run lint
```

## Code Standards

### Naming Conventions
- **Components**: PascalCase (e.g., `SearchBar.js`)
- **Utilities**: camelCase (e.g., `helpers.js`)
- **CSS Classes**: kebab-case (e.g., `.search-bar`)
- **Redux Actions**: camelCase (e.g., `setSearchTerm`)

### File Organization
- Components should have corresponding CSS file
- Tests should be in `src/__tests__/` with `.test.js` extension
- Utilities should be in `src/utils/`
- Redux slices should be in `src/store/`

### React Best Practices
- Use functional components with hooks
- Memoize callbacks with `useCallback`
- Use `useMemo` for expensive computations
- Keep components focused and reusable
- Use proper prop validation

### Redux Best Practices
- Use Redux Toolkit for reducers
- Keep actions simple and focused
- Normalize state shape
- Use selectors for accessing state
- Avoid deeply nested state

### CSS Standards
- Use CSS Grid for layouts
- Use Flexbox for components
- Mobile-first approach
- Maintain 8px spacing system
- Use CSS variables for reusable values

### Testing Standards
- Write tests for new features
- Aim for >80% code coverage
- Test user interactions, not implementation
- Use descriptive test names
- Test error cases

## Commit Convention

Use the following format:
```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Test additions or changes
- `chore`: Build process, dependencies, etc.

### Examples
```
feat: add advanced search filters
fix: resolve modal close on ESC key
test: add comprehensive E2E tests
docs: update README with deployment guide
refactor: optimize Redux selectors
```

## Pull Request Process

1. **Update your branch**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run tests locally**
   ```bash
   npm run lint
   npm run test:unit
   npm run test:e2e
   ```

3. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**
   - Provide clear title and description
   - Link to related issues if any
   - Describe changes and testing performed
   - Include screenshots for UI changes

5. **Address review comments**
   - Make requested changes
   - Re-run tests
   - Push updates (no force push to PR branch)

6. **Merge**
   - PR must pass all CI/CD checks
   - At least one approval needed
   - Squash commits when merging

## Issue Reporting

### Bug Report Template
```markdown
**Description**
Clear description of the bug.

**Steps to Reproduce**
1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Environment**
- OS: [e.g. Windows, macOS]
- Browser: [e.g. Chrome, Firefox]
- Node version: [e.g. 18.0.0]
```

### Feature Request Template
```markdown
**Description**
Clear description of the feature.

**Use Case**
Why this feature is needed.

**Proposed Solution**
How you envision this feature.

**Alternatives**
Other approaches considered.
```

## Documentation

### Code Comments
- Explain complex logic
- Document public functions
- Add JSDoc for important functions
- Keep comments up to date

### README Updates
- Update when adding major features
- Include usage examples
- Document new environment variables
- Update feature list

### Git History
- Maintain clean commit history
- Use descriptive commit messages
- No merge commits (rebase instead)

## Performance Considerations

- Don't create new objects/arrays in render methods
- Use `useMemo` for expensive computations
- Use `useCallback` for event handlers
- Implement virtual scrolling for large lists
- Lazy load images and components
- Monitor bundle size

## Security Guidelines

- Never commit sensitive data (keys, passwords)
- Validate user input
- Use CSP (Content Security Policy)
- Keep dependencies updated
- Report security issues privately

## Running Lighthouse

```bash
npm run build
npm run serve

# Then run Lighthouse in Chrome DevTools
# Target scores: 90+ for all metrics
```

## Deployment

### GitHub Pages
```bash
npm run deploy
```

### Manual Testing
1. Build locally: `npm run build`
2. Test build: `npm run serve`
3. Verify all features work
4. Check performance with Lighthouse

## Release Process

1. Update version in package.json
2. Create changelog entry
3. Merge to main branch
4. Create git tag
5. GitHub Actions deploys automatically

## Questions?

- Open an issue for discussions
- Check existing issues and PRs
- Review the README and docs
- Check project discussions

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Acknowledge contributions
- Report issues professionally

---

Thank you for contributing! Your efforts help make this project better for everyone. 🙌
