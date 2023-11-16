import BasePage from "./BasePage";

class BasketPage extends BasePage {
  constructor() {
    super();
    this.elements.buttonCartCheckout = "#cart_checkout1";
  }

  getButtonCartCheckout() {
    return cy.get(this.elements.buttonCartCheckout);
  }
}
export default new BasketPage();
