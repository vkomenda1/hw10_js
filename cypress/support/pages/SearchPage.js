import BasePage from "./BasePage";

class SearchPage extends BasePage {
  constructor() {
    super();
    this.elements.buttonPaginationSignMore =
      'a[href="https://automationteststore.com/index.php?rt=product/search&keyword=e&category_id=0&sort=date_modified-ASC&limit=20&page=2"]:contains(">")';
    this.elements.productMensShirt =
      'img[src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"]:first';
  }

  getButtonPaginationSignMore() {
    return cy.get(this.elements.buttonPaginationSignMore);
  }
  getProductMensShirt() {
    return cy.get(this.elements.productMensShirt);
  }
}

export default new SearchPage();
