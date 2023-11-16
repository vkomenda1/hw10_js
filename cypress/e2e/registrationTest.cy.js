import user from "../fixtures/user.json";
import { faker } from "@faker-js/faker";

user.email = faker.internet.email({ provider: "fakeMail.com" });
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postcode = faker.location.zipCode("####");

describe("Succesfull registration", () => {
  it("Registration", () => {
    cy.visit("/");

    cy.get('.topnavbar [data-id="menu_account"]').click();

    cy.get("#accountFrm button").click();
    cy.get("#AccountFrm_firstname").type(user.firstName);
    cy.get("#AccountFrm_lastname").type(user.lastName);
    cy.get("#AccountFrm_email").type(user.email);
    cy.get("#AccountFrm_telephone").type(user.phone);
    cy.get("#AccountFrm_fax").type(user.fax);
    cy.get("#AccountFrm_company").type(user.companyName);
    cy.get("#AccountFrm_address_1").type(user.address1);
    cy.get("#AccountFrm_address_2").type(user.address2);
    cy.get("#AccountFrm_city").type(user.city);
    cy.get("#AccountFrm_postcode").type(user.postcode);
    cy.get("#AccountFrm_country_id").select(user.countryid);
    cy.get("#AccountFrm_zone_id").select(user.zoneId);
    cy.get("#AccountFrm_loginname").type(user.loginName);
    cy.get("#AccountFrm_password").type(user.password);
    cy.get("#AccountFrm_confirm").type(user.password);
    cy.get("#AccountFrm_newsletter1").check();
    cy.get("#AccountFrm_agree").check();
    cy.get('button[title="Continue"]').click();

    cy.get(".heading1", { timeout: 2000 }).should("contain", user.firstName);
  });

  it("Authorization", () => {
    cy.log("Open website login page");
    cy.visit("/index.php?rt=account/login");

    cy.log("Check user is unauthorized");
    cy.getCookie("customer").should("be.null");

    cy.log("Authorize user");
    cy.get("#loginFrm_loginname").type(user.loginName);
    cy.get("#loginFrm_password").type(user.password);
    cy.get('button[type="submit"]').contains("Login").click();

    cy.get(".heading1", { timeout: 2000 }).should("contain", user.firstName);
  });
});

// describe('Registration fields validation', ()=>{

//     it('Registration without Firstname field', () => {
//         cy.visit('/');

//         cy.get('.topnavbar [data-id="menu_account"]').click();

//         cy.get('#accountFrm button').click();
//         //cy.get('#AccountFrm_firstname').type('First_Name_test');
//         cy.get('#AccountFrm_lastname').type('Last_Name_test');
//         cy.get('#AccountFrm_email').type('test111@testmail.com');
//         cy.get('#AccountFrm_telephone').type('0981115522');
//         cy.get('#AccountFrm_fax').type('380981115522');
//         cy.get('#AccountFrm_company').type('Qalight');
//         cy.get('#AccountFrm_address_1').type('Khreschatyk St.1');
//         cy.get('#AccountFrm_address_2').type('Khreschatyk St.2');
//         cy.get('#AccountFrm_city').type('Kyiv');
//         cy.get('#AccountFrm_postcode').type('00001');
//         cy.get('#AccountFrm_country_id').select('220');
//         cy.get('#AccountFrm_zone_id').select('3490');
//         cy.get('#AccountFrm_loginname').type('sanita11');
//         cy.get('#AccountFrm_password').type('123456');
//         cy.get('#AccountFrm_confirm').type('123456');
//         cy.get('#AccountFrm_newsletter1').check();
//         cy.get('#AccountFrm_agree').check();
//         cy.get('button[title="Continue"]').click();

//         cy.get('.heading1', {timeout: 2000}).should('contain', 'First_Name_test');
//     })

//     it('Registration without Firstname field', () => {
//         cy.visit('/');

//         cy.get('.topnavbar [data-id="menu_account"]').click();

//         cy.get('#accountFrm button').click();
//         //cy.get('#AccountFrm_firstname').type('First_Name_test');
//         cy.get('#AccountFrm_lastname').type('Last_Name_test');
//         cy.get('#AccountFrm_email').type('test111@testmail.com');
//         cy.get('#AccountFrm_telephone').type('0981115522');
//         cy.get('#AccountFrm_fax').type('380981115522');
//         cy.get('#AccountFrm_company').type('Qalight');
//         cy.get('#AccountFrm_address_1').type('Khreschatyk St.1');
//         cy.get('#AccountFrm_address_2').type('Khreschatyk St.2');
//         cy.get('#AccountFrm_city').type('Kyiv');
//         cy.get('#AccountFrm_postcode').type('00001');
//         cy.get('#AccountFrm_country_id').select('220');
//         cy.get('#AccountFrm_zone_id').select('3490');
//         cy.get('#AccountFrm_loginname').type('sanita11');
//         cy.get('#AccountFrm_password').type('123456');
//         cy.get('#AccountFrm_confirm').type('123456');
//         cy.get('#AccountFrm_newsletter1').check();
//         cy.get('#AccountFrm_agree').check();
//         cy.get('button[title="Continue"]').click();

//         cy.get('.heading1', {timeout: 2000}).should('contain', 'First_Name_test');
//     })

// })

// const testData = []

// it('Registration', () => {
//     cy.visit('/');

//     cy.get('.topnavbar [data-id="menu_account"]').click();

//     cy.get('#accountFrm button').click();

//     testData.elemets.textFields.forEach(({selector, data}) => {
//         cy.get(selector).type(data);
//     })

//     testData.elemets.selectFields.forEach(({selector, data}) => {
//         cy.get(selector).select(optionNumber);
//     })

//     cy.get('#AccountFrm_newsletter1').check();
//     cy.get('#AccountFrm_agree').check();
//     cy.get('button[title="Continue"]').click();

//     cy.get('.heading1', {timeout: 2000}).should('contain', 'First_Name_test');
// })
