# Security Policy

## 🛡️ Reporting Security Vulnerabilities

We take security seriously. If you discover a security vulnerability in this project, please report it responsibly.

### How to Report

**Option 1 — GitHub Issues (Preferred)**

Open a [security issue](https://github.com/H0NEYP0T-466/ktechnologypro-creative360-test/issues) with the `security` label and include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Suggested fix (if any)

**Option 2 — Email**

If the vulnerability is sensitive, please do NOT open a public issue. Instead, describe the issue in detail via GitHub's private vulnerability reporting (GitHub → Repository → Security → Advisories → New draft security advisory).

### What to Expect

| Stage | Timeline |
|-------|----------|
| **Acknowledgment** | Within 48 hours |
| **Investigation** | Within 7 days |
| **Resolution** | As soon as practically possible |

### Guidelines

- **Do NOT** publicly disclose the vulnerability before it has been addressed
- **Do NOT** exploit the vulnerability beyond what is necessary to demonstrate it
- Provide detailed reproduction steps to help us resolve the issue quickly
- We will credit you in the fix (unless you prefer to remain anonymous)

---

## 🔐 Security Best Practices for Contributors

When contributing to this project:

1. **Never commit secrets** — API keys, passwords, tokens, or credentials
2. **Use environment variables** for all sensitive configuration
3. **Validate all user inputs** — sanitize and validate at system boundaries
4. **Prevent XSS** — sanitize any user-generated content before rendering
5. **Keep dependencies updated** — run `npm audit` regularly
6. **Review PRs for security** — watch for common vulnerabilities (OWASP Top 10)

---

## 🔍 Vulnerability Handling Policy

1. **Triage** — All reported vulnerabilities are triaged within 48 hours
2. **Severity Assessment** — Issues are classified as Low, Medium, High, or Critical
3. **Fix & Test** — Fixes are developed, tested, and reviewed
4. **Disclosure** — Fixed vulnerabilities are disclosed after a patch is available
5. **Rotation** — Any exposed secrets are immediately rotated
