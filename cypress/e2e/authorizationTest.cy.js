import { login } from "../support/helper";
import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import accountPage from "../support/pages/AccountPage";
import user from "../fixtures/user.json"

it("Authorization", () => {
  homePage.visit();
  loginPage.visit();

  loginPage.getCustomerCookie().should("be.null");

  loginPage.fillAuthorizationFields(user);

  cy.log("Submit Authorization form...");
  loginPage.getSubmitAuthorizationFormButton().click();

  cy.log("Verify first name displayed on account page...");
  accountPage.getFirstNameText().should("contain", user.firstName);
});

it("Authorization with invalid loginName", () => {
  //user.loginName = faker.animal.bear.name;
  login(user);
});
