import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
  constructor() {
    super();
    this.elements.firstNameField = "#AccountFrm_firstname";
    this.elements.lastNameField = "#AccountFrm_lastname";
    this.elements.emailField = "#AccountFrm_email";
    this.elements.phoneNumberField = "#AccountFrm_telephone";
    this.elements.faxField = "#AccountFrm_fax";
    this.elements.companyNameField = "#AccountFrm_company";
    this.elements.addressFirstField = "#AccountFrm_address_1";
    this.elements.addressSecondField = "#AccountFrm_address_2";
    this.elements.cityField = "#AccountFrm_city";
    this.elements.postcodeField = "#AccountFrm_postcode";
    this.elements.countryIdField = "#AccountFrm_country_id";
    this.elements.zoneIdField = "#AccountFrm_zone_id";
    this.elements.loginNameField = "#AccountFrm_loginname";
    this.elements.passwordField = "#AccountFrm_password";
    this.elements.passwordConfirmField = "#AccountFrm_confirm";
    this.elements.newsLetterCheckbox = "#AccountFrm_newsletter1";
    this.elements.privacyPolicyCheckbox = "#AccountFrm_agree";
    this.elements.submitRegistrationFormButton = 'button[title="Continue"]';
  }

  getFirstNameField() {
    return cy.get(this.elements.firstNameField);
  }

  getLastNameField() {
    return cy.get(this.elements.lastNameField);
  }

  getEmailField() {
    return cy.get(this.elements.emailField);
  }

  getPhoneNumberField() {
    return cy.get(this.elements.phoneNumberField);
  }

  getFaxField() {
    return cy.get(this.elements.faxField);
  }

  getCompanyNameField() {
    return cy.get(this.elements.companyNameField);
  }

  getAddressFirstField() {
    return cy.get(this.elements.addressFirstField);
  }

  getAddressSecondField() {
    return cy.get(this.elements.addressSecondField);
  }

  getCityField() {
    return cy.get(this.elements.cityField);
  }

  getPostcodeField() {
    return cy.get(this.elements.postcodeField);
  }

  getCountryIdField() {
    return cy.get(this.elements.countryIdField);
  }

  getZoneIdField() {
    return cy.get(this.elements.zoneIdField);
  }

  getLoginNameField() {
    return cy.get(this.elements.loginNameField);
  }

  getPasswordField() {
    return cy.get(this.elements.passwordField);
  }

  getPasswordConfirmField() {
    return cy.get(this.elements.passwordConfirmField);
  }

  getNewsLetterCheckbox() {
    return cy.get(this.elements.newsLetterCheckbox);
  }

  getPrivacyPolicyCheckbox() {
    return cy.get(this.elements.privacyPolicyCheckbox);
  }

  /**
   * Get submit button element from page
   * @returns {CypressElement} Returns the Submit Button in Registration Form as Cypress element.
   */
  getSubmitRegistrationFormButton() {
    return cy.get(this.elements.submitRegistrationFormButton);
  }

  /**
   *  Fill in registration fields
   *  @param {Object} user - user object
   *  User object example can be found in ./cypress/fixtures/user.json
   */
  fillRegistrationFields(user) {
    cy.log("Fill in registration fields...");

    this.getFirstNameField().type(user.firstName);
    this.getLastNameField().type(user.lastName);
    this.getEmailField().type(user.email);
    this.getPhoneNumberField().type(user.phone);
    this.getFaxField().type(user.fax);
    this.getCompanyNameField().type(user.companyName);
    this.getAddressFirstField().type(user.address1);
    this.getAddressSecondField().type(user.address2);
    this.getCityField().type(user.city);
    this.getPostcodeField().type(user.postcode);
    this.getCountryIdField().select(user.countryid);
    this.getZoneIdField().select(user.zoneId);
    this.getLoginNameField().type(user.loginName);
    this.getPasswordField().type(user.password);
    this.getPasswordConfirmField().type(user.password);
  }
}
export default new RegistrationPage();
