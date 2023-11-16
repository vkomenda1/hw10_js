import tableTest from "..//fixtures/tableTest.json";
/// <reference types="cypress"/>

beforeEach("Open page", () => {
  cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com/");

  cy.get('[src="assets/images/dark-theme.jpg"]').click();
  cy.get('[title="Modal & Overlays"]').click();
  cy.get('[title="Toastr"]').click();
});

tableTest.forEach(({ testData, expected }) => {
  it(`Toast test for position ${testData.position}, and type ${testData.type}`, () => {
    cy.get("ngx-toastr", { timeout: 15000 }).should("be.visible");

    cy.get("div.col-md-6.col-sm-12  button.select-button").eq(0).click();
    cy.get(`nb-option[ng-reflect-value="${testData.position}"]`).click();
    cy.get(`input[name="title"]`).clear().type(`${testData.title}`);
    cy.get(`input[name="content"]`).clear().type(`${testData.content}`);
    cy.get(`input[name="timeout"]`).clear().type(`${testData.time}`);
    cy.get(`div.col-md-6.col-sm-12  button.select-button`).eq(1).click();
    cy.get(`nb-option[ng-reflect-value="${testData.type}"]`).click();
    cy.contains("button", "Show toast").click();

    cy.get("nb-toast[ng-reflect-toast]", { timeout: 10000 }).should(
      "contain",
      expected.title
    );
    cy.get("nb-toast[ng-reflect-toast]", { timeout: 10000 })
      .should("contain", expected.title)
      .and("contain", expected.content)
      .and("have.css", "background-color")
      .and("eq", expected.color);

    cy.get("nb-toast[ng-reflect-toast]", { timeout: 10000 })
      .find(`g[data-name="${expected.icon}"]`)
      .should("exist");
    cy.get("nb-toast[ng-reflect-toast]", { timeout: 10000 })
      .parents(".toastr-overlay-container")
      .should("have.css", "justify-content")
      .and("eq", expected.position.justifyContent);
    cy.get("nb-toast[ng-reflect-toast]", { timeout: 10000 })
      .parents(".toastr-overlay-container")
      .should("have.css", "align-items")
      .and("eq", expected.position.alignItems);

    // cy.get('nb-toast[ng-reflect-toast]', {timeout: 10000}).then(toast => {

    //     // cy.get('nb-toast[ng-reflect-toast]').click();
    //     // cy.wrap(toast).click();

    //     cy.wrap(toast).should('contain', expected.title);

    //     cy.wrap(toast).should('contain', expected.title)
    //         .and('contain', expected.content)
    //         .and('have.css', 'background-color')
    //         .and('eq', expected.color);

    //     // expect(toast).to.contain(expected.title)
    //     // expect(toast).to.contain(expected.content)
    //     // expect(toast).to.have.css('background-color', expected.color);

    //     cy.wrap(toast).find(`g[data-name="${expected.icon}"]`).should('exist');
    //     //expect(toast).to.exist;

    //     cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expected.position.justifyContent);
    //     //expect(toast).to.have.css('justify-content', expected.position.justifyContent);

    //     cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expected.position.alignItems);
    //     //expect(toast).to.have.css('align-items', expected.position.alignItems);

    // });
  });
});
