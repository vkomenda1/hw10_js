export function productSearch(productName) {
    return cy.get(".contentpanel").then((el) => {
      const productLink = el.find('a:contains("' + productName + '")');
  
      // Перевірка наявності елемента
      if (productLink.length > 0) {
        cy.wrap(productLink).invoke("text").should("contain", productName);
        return cy.wrap(productLink);
      } else {
        // Клік на сторінку пагінації і рекурсивний виклик
        cy.get('.pagination a:contains(">")').eq(0).click();
        return productSearch(productName);
      }
    });
  }

  