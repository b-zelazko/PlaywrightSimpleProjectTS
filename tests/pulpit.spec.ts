import { test, expect } from "@playwright/test";

test.describe("Pulpit tests", () => {
  test.describe.configure({retries: 3})
  
  test("Money transfer", async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("testerLO");
    await page.getByTestId("password-input").fill("12345678");
    await page.getByTestId("login-button").click();

    // wait for page to fully load:
    await page.waitForLoadState("domcontentloaded");

    await page.locator("#widget_1_transfer_receiver").selectOption("2");
    await page.locator("#widget_1_transfer_amount").fill("150");
    await page.locator("#widget_1_transfer_title").fill("zwrot kasy");
    await page.getByRole("button", { name: "wykonaj" }).click();
    await page.getByTestId("close-button").click();

    await expect(page.getByTestId("message-text")).toHaveText(
      "Przelew wykonany! Chuck Demobankowy - 150,00PLN - zwrot kasy",
    );
  });

  test('Successful mobile top-up', async ({ page }) => {
    await page.goto("https://demo-bank.vercel.app/");
    await page.getByTestId("login-input").fill("testerLO");
    await page.getByTestId("password-input").fill("12345678");
    await page.getByTestId("login-button").click();

    // wait for page to fully load:
    await page.waitForLoadState("domcontentloaded");
    await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('100');
    await page.locator('#uniform-widget_1_topup_agreement > span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();
    
    await expect(page.getByTestId("message-text")).toHaveText(
      "Doładowanie wykonane! 100,00PLN na numer 500 xxx xxx",
    );
});
});
