import BasePage from "./BasePage";

class DesignerMenCasualFormalDoubleCuffsGrandadBandCollarShirtElegantTiePage extends BasePage {
  constructor() {
    super();
    this.elements.buttonSubmitAddtoCart = 'ul[class="productpagecart"]';
  }

  getButtonSubmitAddtoCart() {
    return cy.get(this.elements.buttonSubmitAddtoCart);
  }
}

export default new DesignerMenCasualFormalDoubleCuffsGrandadBandCollarShirtElegantTiePage();
