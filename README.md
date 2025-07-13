PlaywrightAutomation:
Automated UI testing framework built with Playwright for reliable cross-browser testing and continuous integration.

**Features**

- Automated cross-browser UI testing with [Playwright](https://playwright.dev)
- Page Object Model (POM) for reusable, maintainable test code
- Runs tests automatically on push or pull request via GitHub Actions
- Test reports and traces stored as workflow artifacts

## ⚙️ CI/CD

- This project runs tests automatically on every push or pull request to `main` or `master` branches.
- Uses GitHub Actions to install dependencies, execute tests, and upload reports.
- Test traces are saved for debugging failed runs.

---

## 🧩 Page Object Model

- The framework uses the POM design pattern for better test maintainability.
- All page-specific locators and actions live in the `PageObjects/` folder.
- Tests in the `tests/` folder reuse Page Objects for clarity and reusability.
