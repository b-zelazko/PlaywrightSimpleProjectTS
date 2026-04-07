import { test, expect } from "@playwright/test";

test.describe("User login to Demobank", () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  
  test("succesful login with correct credentials", async ({ page }) => {
    //Arrange
    const userId = "testerLO";
    const userPassword = "12345678";
    const expectedUsername = "Jan Demobankowy";

    //Act
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(userPassword);
    await page.getByTestId("login-button").click();

    //Assert
    await expect(page.getByTestId("user-name")).toHaveText(expectedUsername);
  });

  test("unsuccesful login with too short username", async ({ page }) => {
    //Arrange
    const incorrectUserId = "tester";
    const expectedErrorMessage = "identyfikator ma min. 8 znaków";

    //Act
    await page.getByTestId("login-input").fill(incorrectUserId);
    await page.getByTestId("login-input").blur();

    //Assert
    await expect(page.getByTestId("error-login-id")).toHaveText(
      expectedErrorMessage,
    );
  });

  test("unsuccesful login with too short password", async ({ page }) => {
    //Arrange
    const userId = "testerLO";
    const incorrectUserPassword = "123456";
    const expectedErrorMessage = "hasło ma min. 8 znaków";

    //Act
    await page.getByTestId("login-input").fill(userId);
    await page.getByTestId("password-input").fill(incorrectUserPassword);
    await page.getByTestId("password-input").blur();

    //Assert
    await expect(page.getByTestId("error-login-password")).toHaveText(
      expectedErrorMessage,
    );
  });
});
