import BasePage from "./BasePage";

class LoginPage extends BasePage {
  constructor() {
    super();
    this.elements.registerAccountButton = "#accountFrm button";
    this.elements.loginNameField = "#loginFrm_loginname";
    this.elements.loginPasswordField = "#loginFrm_password";

    this.elements.submitAuthorizationFormButton =
      'button[type="submit"]:contains("Login")';
  }

  visit() {
    cy.log("Open website login page");
    cy.visit("/index.php?rt=account/login");
  }

  getRegisterAccountButton() {
    return cy.get(this.elements.registerAccountButton);
  }

  getLoginNameField() {
    return cy.get(this.elements.loginNameField);
  }

  getLoginPasswordField() {
    return cy.get(this.elements.loginPasswordField);
  }

  getSubmitAuthorizationFormButton() {
    return cy.get(this.elements.submitAuthorizationFormButton);
  }

  fillAuthorizationFields(user) {
    cy.log("Fill in Authorization fields...");

    this.getLoginNameField().type(user.loginName);
    this.getLoginPasswordField().type(user.password);
  }
}

export default new LoginPage();
