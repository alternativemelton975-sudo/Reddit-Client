# Reddit Client

A responsive, production-ready React and Redux application that delivers curated Reddit-style content with advanced search, filtering, and detailed post previews. This project demonstrates modern web development practices including component-based architecture, state management, testing, and deployment automation.

## 🚀 Quick Start

### Prerequisites
- Node.js 14.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/Reddit-Client.git
cd Reddit-Client

# Install dependencies
npm install

# Start the development server
npm start

# The app will open at http://localhost:3000
```

### Running Tests

```bash
# Run unit tests
npm run test:unit

# Run E2E tests (app must be running)
npm start &
npm run test:e2e

# Open Cypress test runner
npm run e2e:open

# Build for production
npm run build
```

## 📋 Project Overview

This Reddit Client application is built to showcase best practices in modern web development with React and Redux. The application features a responsive design that works seamlessly across desktop, tablet, and mobile devices.

### Key Features
- ✅ **Initial Content Loading** - Data loads immediately from curated sample posts
- ✅ **Search Functionality** - Search posts by title, author, or keywords
- ✅ **Category Filtering** - Filter posts by predefined categories
- ✅ **Sorting Options** - Sort by newest, most upvoted, or most comments
- ✅ **Detail Views** - Click posts to view detailed information in a modal
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Error Handling** - Graceful error states and recovery options
- ✅ **Animations** - Smooth transitions and animations throughout the UI
- ✅ **Accessibility** - ARIA labels and semantic HTML for screen readers

## 📐 Wireframes

### User Flow
```
┌─────────────────────────────────────────────────────┐
│  Header (Logo + Navigation)                          │
├─────────────────────────────────────────────────────┤
│  Search Bar                                          │
├─────────────────────────────────────────────────────┤
│  Filter Bar (Categories + Sort + Reset)             │
├─────────────────────────────────────────────────────┤
│  Post Grid                                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Post 1   │ │ Post 2   │ │ Post 3   │            │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │            │
│  │ Title    │ │ Title    │ │ Title    │            │
│  │ Meta     │ │ Meta     │ │ Meta     │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│  ... more posts ...                                 │
└─────────────────────────────────────────────────────┘
        │
        └──> Click Post
             │
             v
        ┌─────────────────────────┐
        │ Detail Modal            │
        ├─────────────────────────┤
        │ [Large Image]           │
        │ Title                   │
        │ Author | Subreddit      │
        │ Posted time             │
        │ Description             │
        │ Stats (↑ 💬)           │
        │ [View on Reddit] [Close]│
        └─────────────────────────┘
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 17** - UI component library
- **Redux Toolkit** - State management
- **React Redux** - Redux bindings for React

### Styling & Animation
- **CSS 3** - Custom animations and transitions
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Modules** - Component scoped styling (available)

### Testing
- **Jest** - JavaScript testing framework
- **Enzyme** - React component testing utility
- **Cypress** - End-to-end testing framework

### Build & Deployment
- **Create React App** - React boilerplate
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD automation

### Development Tools
- **ESLint** - Code quality and style
- **gh-pages** - GitHub Pages deployment

## 📦 Project Structure

```
Reddit-Client/
├── public/
│   ├── index.html              # Main HTML file
│   └── manifest.json           # PWA manifest
├── src/
│   ├── components/             # React components
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   ├── FilterBar.js
│   │   ├── PostGrid.js
│   │   ├── PostCard.js
│   │   ├── DetailModal.js
│   │   ├── EmptyState.js
│   │   ├── ErrorBoundary.js
│   │   └── [Component].css     # Component styles
│   ├── store/
│   │   ├── store.js            # Redux store configuration
│   │   ├── postsSlice.js       # Posts state slice
│   │   ├── filtersSlice.js     # Filters state slice
│   │   └── uiSlice.js          # UI state slice
│   ├── utils/
│   │   └── helpers.js          # Utility functions
│   ├── __tests__/
│   │   ├── postsSlice.test.js
│   │   ├── filtersSlice.test.js
│   │   ├── uiSlice.test.js
│   │   ├── helpers.test.js
│   │   ├── Header.test.js
│   │   ├── EmptyState.test.js
│   │   └── ErrorBoundary.test.js
│   ├── App.js                  # Main app component
│   ├── App.css
│   ├── index.js                # React entry point
│   └── index.css               # Global styles
├── cypress/
│   ├── e2e/
│   │   └── reddit-client.spec.js
│   ├── support/
│   │   ├── e2e.js
│   │   └── commands.js
│   └── fixtures/
├── .github/
│   └── workflows/
│       └── ci-cd.yml           # GitHub Actions CI/CD
├── setupTests.js               # Jest configuration
├── cypress.config.js           # Cypress configuration
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Orange** - `#ff4500` (Reddit brand color)
- **Dark Background** - `#1a1a1b` (Text color)
- **Light Background** - `#f7f9fb` (App background)
- **Neutral Gray** - `#818384` (Secondary text)

### Typography
- **Body Font** - System fonts (-apple-system, Segoe UI, etc.)
- **Font Sizes** - 12px (labels) → 24px (headings)
- **Font Weights** - 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components

#### Post Card
- Image (180px height)
- Category badge (top right)
- Title (2 lines max)
- Summary (2 lines max)
- Author & Subreddit
- Score, Comments, Time

#### Modal
- Backdrop with fade animation
- Image (300px height)
- Detailed content
- Stats cards (Score, Comments)
- Action buttons
- Close button and ESC key support

### Animations
- `fadeIn` - 0.3s ease-in
- `slideUp` - 0.4s ease-out
- `slideDown` - 0.3s ease-out
- `scaleIn` - 0.3s ease-out

## 📱 Responsive Design

### Breakpoints
- **Mobile** - 480px and below
- **Tablet** - 481px to 768px
- **Desktop** - 769px and above

### Responsive Features
- Flexible grid layout (auto-fill)
- Adjusted padding and margins
- Touch-friendly button sizes (48px minimum)
- Readable font sizes on all devices
- Full-width design on mobile

## ✨ Features Detail

### Search
- Real-time search across title, author, and summary
- Case-insensitive matching
- Clear button to reset search
- Works with other filters

### Filtering
- 9 predefined categories
- Filter and search together
- Active filter indicators
- Quick reset button

### Sorting
- **Newest** (default) - Sort by timestamp
- **Most Upvoted** - Sort by score
- **Most Comments** - Sort by comment count

### Detail Modal
- Click any post to view details
- Large image preview
- Full post information
- Stats display
- Close via button, backdrop click, or ESC key
- Smooth scale-in animation

### Error Handling
- Error boundary component
- Empty state when no results
- Recovery options (clear filters, retry)
- Graceful error messages

## 🧪 Testing

### Unit Tests (Jest + Enzyme)
```bash
npm run test:unit
```

- Redux slices (postsSlice, filtersSlice, uiSlice)
- Helper utility functions
- Component rendering and interaction
- State management

**Coverage**: 7 test suites, 40+ test cases

### End-to-End Tests (Cypress)
```bash
npm run test:e2e
```

- Initial load verification
- Search functionality
- Category filtering
- Sorting options
- Modal interactions
- Responsive design
- Error recovery
- User interactions

**Coverage**: 50+ test scenarios

## 🚀 Deployment

### GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy

# This runs: build -> gh-pages -d build
```

### GitHub Actions CI/CD
Automated workflow on every push to main/master/develop:
1. Install dependencies
2. Run linters
3. Run unit tests
4. Build application
5. Run E2E tests
6. Deploy to GitHub Pages (on main branch)

### Setting Up Deployment

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select "GitHub Actions" as source

2. **Configure Homepage**
   - Repository name format: `username.github.io` (user site) or `repository-name` (project site)
   - Update `homepage` in package.json accordingly

3. **Deploy**
   ```bash
   npm run deploy
   ```

## ⚡ Performance Optimization

### Lighthouse Scores (Target: 90+)
- **Performance** - 90+
- **Accessibility** - 95+
- **Best Practices** - 95+
- **SEO** - 100

### Optimization Techniques
- Lazy loading of images
- Memoization of filtered posts
- CSS animations (GPU-accelerated)
- Efficient Redux selectors
- Code splitting via React lazy loading
- Production build optimization

## 🔮 Future Enhancements

### Phase 2 - Advanced Features
- [ ] Connect to live Reddit API
- [ ] User authentication (OAuth)
- [ ] Save favorite posts
- [ ] User preferences and settings
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

### Phase 3 - Progressive Web App
- [ ] Service Worker for offline support
- [ ] Install as app on mobile
- [ ] Push notifications
- [ ] Background sync

### Phase 4 - Advanced Features
- [ ] Post rating and reviews
- [ ] User comments section
- [ ] Share functionality
- [ ] Advanced search filters
- [ ] Trending analytics

### Phase 5 - Scaling
- [ ] Backend API development
- [ ] Database for user data
- [ ] Real-time updates
- [ ] Performance monitoring
- [ ] Advanced analytics

## 📊 Git Workflow

### Branch Strategy
```
main (production)
├── develop (staging)
│   ├── feature/search
│   ├── feature/filter
│   ├── feature/modal
│   └── feature/tests
```

### Commit Convention
```
feat: add search functionality
fix: resolve filter reset bug
test: add E2E tests for modal
docs: update README
refactor: optimize Redux selectors
```

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Cypress Documentation](https://docs.cypress.io)
- [Jest Documentation](https://jestjs.io)
- [MDN Web Docs](https://developer.mozilla.org)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a demonstration of modern web development practices.

---

**Last Updated:** May 2026  
**Version:** 1.0.0  
**Status:** Production Ready ✅
- Deploy to a custom domain.
- Progressive Web App support for install and offline caching.

## Getting Started

1. Install dependencies: `npm install`
2. Start the app: `npm start`
3. Run unit tests: `npm test`
4. Run e2e tests: `npm run test:e2e`

## Deployment

This project is configured for GitHub Pages deployment.

To deploy:

1. Set `homepage` in `package.json` to your repository path if needed.
2. Run `npm run deploy`.

The app also includes a simple Progressive Web App service worker for offline asset caching.

## Project Planning

See `PROJECT_PLAN.md` for the planned tasks and milestones.
