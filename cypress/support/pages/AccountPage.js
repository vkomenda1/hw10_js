import BasePage from "./BasePage";

class AccountPage extends BasePage {
  constructor() {
    super();
    this.elements.firstNameText = ".heading1";
  }

  getFirstNameText() {
    return cy.get(this.elements.firstNameText, { timeout: 2000 });
  }
}
export default new AccountPage();
