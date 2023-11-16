import BasePage from "./BasePage";

class ConfirmPage extends BasePage {
  constructor() {
    super();
    this.elements.buttonConfirmOrder = "#checkout_btn";
  }

  getButtonConfirmOrder() {
    return cy.get(this.elements.buttonConfirmOrder);
  }
}
export default new ConfirmPage();
