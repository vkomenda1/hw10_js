import user from "../fixtures/user.json";
import { base, faker } from "@faker-js/faker";
import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import registrationPage from "../support/pages/RegistrationPage";
import accountPage from "../support/pages/AccountPage";

user.email = faker.internet.email({ provider: "fakeMail.com" });
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postcode = faker.location.zipCode("####");

let date;
date = user.loginName;

describe("Succesfull registration", () => {
  it("Registration", () => {
    homePage.visit();

    cy.log("Opening registration page...");
    homePage.getHeaderAccountButton().click();
    loginPage.getRegisterAccountButton().click();

    registrationPage.fillRegistrationFields(user);

    cy.log("Submit registration form...");
    registrationPage.getNewsLetterCheckbox().check();
    registrationPage.getPrivacyPolicyCheckbox().check();
    registrationPage.getSubmitRegistrationFormButton().click();

    cy.log("Verify first name displayed on account page...");
    accountPage.getFirstNameText().should("contain", user.firstName);
  });

  it("Authorization", () => {
    homePage.visit();
    loginPage.visit();

    loginPage.getCustomerCookie().should("be.null");

    loginPage.fillAuthorizationFields(user);

    cy.log("Submit Authorization form...");
    loginPage.getSubmitAuthorizationFormButton().click();

    cy.log("Verify first name displayed on account page...");
    accountPage.getFirstNameText().should("contain", user.firstName);
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
