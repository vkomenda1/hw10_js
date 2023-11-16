import BasePage from "./BasePage";

class SuccessPage extends BasePage {
  constructor() {
    super();
    this.elements.mainText = 'span[class="maintext"]';
  }

  getMainText() {
    return cy.get(this.elements.mainText);
  }
}
export default new SuccessPage();
