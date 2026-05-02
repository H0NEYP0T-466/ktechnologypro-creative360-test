# Contributing to Creative 360 Pro

Thank you for your interest in contributing! This document outlines how to participate in the development of this project.

---

## 🤝 How to Contribute

### 1. Fork & Clone

```bash
# Fork the repository on GitHub, then:
git clone https://github.com/YOUR_USERNAME/ktechnologypro-creative360-test.git
cd ktechnologypro-creative360-test
```

### 2. Create a Branch

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Use conventional branch naming:

- `feat/` — New features
- `fix/` — Bug fixes
- `refactor/` — Code refactoring
- `docs/` — Documentation updates
- `style/` — UI/CSS changes
- `chore/` — Build, config, or tooling changes

### 3. Install & Develop

```bash
npm install
npm run dev
```

### 4. Commit & Push

```bash
git add .
git commit -m "feat: add new hero animation"
git push origin feat/your-feature-name
```

### 5. Open a Pull Request

Open a PR against the `main` branch. Fill out the PR template with a clear description of your changes.

---

## 📝 Code Style & Linting Rules

- **Language:** JavaScript (ES Modules) with JSX
- **Linter:** ESLint 10 with flat config (`eslint.config.js`)
- **Formatter:** Consistent with ESLint rules

### Key Rules

| Rule | Requirement |
|------|-------------|
| **Immutability** | Never mutate state directly — use spread operators, `map`, `filter`, `reduce` |
| **Naming** | `PascalCase` for components, `camelCase` for functions/variables |
| **File Size** | Keep files under 400 lines — extract into smaller modules |
| **Component Size** | Keep components under 800 lines |
| **Nesting** | Avoid deeper than 4 levels of nesting |
| **Error Handling** | Always handle errors at every level |
| **No `console.log`** | Remove all console.log statements before committing |
| **CSS** | Use CSS custom properties from `variables.css` |
| **CSS Modules** | Each component has its own `.css` file |

### Run Linting

```bash
npm run lint
```

---

## 🐛 Bug Reports

Found a bug? Please [open an issue](https://github.com/H0NEYP0T-466/ktechnologypro-creative360-test/issues/new?template=bug_report.yml) with:

1. **Clear description** of the bug
2. **Steps to reproduce** (numbered list)
3. **Expected behavior** — what should happen
4. **Actual behavior** — what actually happens
5. **Environment** — OS, browser, Node.js version
6. **Screenshots** if applicable
7. **Severity** — Low / Medium / High / Critical

---

## ✨ Feature Requests

Have an idea? Please [open a feature request](https://github.com/H0NEYP0T-466/ktechnologypro-creative360-test/issues/new?template=feature_request.yml) with:

1. **Problem statement** — what problem does this solve?
2. **Proposed solution** — your idea
3. **Alternatives considered** — other approaches you thought of
4. **Scope** — what's in and out of scope

---

## 🧪 Testing

- Write tests for all new features and bug fixes
- Ensure the build passes: `npm run build`
- Verify linting passes: `npm run lint`
- Test responsive behavior on mobile, tablet, and desktop

---

## 📖 Documentation

- Update the README.md if your change affects setup, usage, or features
- Keep code comments minimal — write self-documenting code
- Add JSDoc for public utilities and complex functions

---

## 💬 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `perf`, `ci`, `style`, `revert`

**Examples:**

```
feat: add scroll-reveal animation to service cards
fix: resolve mobile menu not closing on route change
refactor: extract hero section into separate component
docs: update installation instructions
```

---

## 📋 Review Process

1. All PRs require at least one review
2. Address all review comments before merging
3. PRs must pass linting and build checks
4. Maintainers may request changes or provide feedback

---

<p align="center">Thank you for contributing! 🎉</p>
