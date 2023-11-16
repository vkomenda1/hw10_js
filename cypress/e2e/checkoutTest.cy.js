import homePage from "../support/pages/HomePage";
import searchPage from "../support/pages/SearchPage";
import designerMenCasualFormalDoubleCuffsGrandadBandCollarShirtElegantTiePage from "../support/pages/DesignerMenCasualFormalDoubleCuffsGrandadBandCollarShirtElegantTiePage";
import basketPage from "../support/pages/BasketPage";
import confirmPage from "../support/pages/ConfirmPage";
import successPage from "../support/pages/SuccessPage";

import user from "../fixtures/user.json";
import { login } from "../support/helpers/authHelper";
import { productSearch } from "../support/helpers/productSearchHelper";

let mainText = " Your Order Has Been Processed!";

it("Checkout Test", () => {
  login(user);

  cy.log('Enter the letter "e" in the field');
  homePage.getFilterKeywordField().type("e");

  cy.log("Click on the Button In Search");
  homePage.getButtonInSearch().click();

  cy.log("Click on for the product mens shirt");
  searchPage.getButtonPaginationSignMore().click();

  cy.log("Click on for the product mens shirt");
  searchPage.getProductMensShirt().click({ force: true });

  cy.log("Click on the button Add to Cart");
  designerMenCasualFormalDoubleCuffsGrandadBandCollarShirtElegantTiePage
    .getButtonSubmitAddtoCart()
    .click();

  cy.log("Click on the button Cart Checkout");
  basketPage.getButtonCartCheckout().click();

  cy.log("Click on the button Confirm Order");
  confirmPage.getButtonConfirmOrder().click();

  cy.log("Check text visibility Your Order Has Been Processed!");
  successPage.getMainText().should("contain", mainText);
});

it("Checkout Test search for a product using the function ", () => {
  login(user);

  cy.log('Enter the letter "e" in the field');
  homePage.getFilterKeywordField().type("e");

  cy.log("Click on the Button In Search");
  homePage.getButtonInSearch().click();

  productSearch("Casual 3/4 Sleeve Baseball T-Shirt").first().click();

  cy.log("Click on the button Add to Cart");
  designerMenCasualFormalDoubleCuffsGrandadBandCollarShirtElegantTiePage
    .getButtonSubmitAddtoCart()
    .click();

  cy.log("Click on the button Cart Checkout");
  basketPage.getButtonCartCheckout().click();

  cy.log("Click on the button Confirm Order");
  confirmPage.getButtonConfirmOrder().click();

  cy.log("Check text visibility Your Order Has Been Processed!");
  successPage.getMainText().should("contain", mainText);
});
