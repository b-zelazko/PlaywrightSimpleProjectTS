# Playwright course

## Commands

- check `NodeJS` version  
  `node -v`
- new project with Playwright:  
  `npm init playwright@latest`
- record tests for given site  
  `npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI:  
  `npx playwright test`
- run test with browser GUI:  
  `npx playwright test --headed`
- viewing report  
  `npx playwright show-report`

## Playwright Config modifications

- config file `playwright.config.ts`
- disabling browsers, i.e. Firefox by comment:

  ```json
  // {
  //   name: 'firefox',
  //   use: {
  //     ...devices['Desktop Firefox'],
  //   },
  // },
  ```

## VSC
  - Preview: for README.md

- Autosave: in File -> Auto Save
- Timeline: file context menu -> Open Timeline
- Formatting: editor -> context menu -> Format Document

## Playwright snippets

- test:
  ```javascript
  test("test description", async ({ page }) => {});
  ```
- describe:

  ```javascript
  test.describe("Group description", () => {});
  ```

- running one test: `test.only`
