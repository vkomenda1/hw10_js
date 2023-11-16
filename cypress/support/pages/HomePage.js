import BasePage from "./BasePage";

class HomePage extends BasePage {
  constructor() {
    super();
  }

  visit() {
    cy.log("Opening home page...");
    cy.visit("/");
  }
}
export default new HomePage();
