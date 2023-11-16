export default class BasePage {
  constructor() {
    this.elements = {};
    this.elements.headerAccountButton = '.topnavbar [data-id="menu_account"]';
    this.elements.customerCookie = "customer";
    this.elements.filterKeywordField = "#filter_keyword";
    this.elements.buttonInSearch = 'div[class="button-in-search"]';
    
  }

  getHeaderAccountButton() {
    return cy.get(this.elements.headerAccountButton);
  }

  getCustomerCookie() {
    cy.log("Verify customer cookies");
    return cy.getCookie(this.elements.customerCookie);
  }

  getFilterKeywordField() {
    return cy.get(this.elements.filterKeywordField);
  }

  getButtonInSearch() {
    return cy.get(this.elements.buttonInSearch);
  }
}
