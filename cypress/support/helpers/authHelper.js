export function login(user) {
  cy.log("Open website login page");
  cy.visit("/index.php?rt=account/login");

  cy.log("Authorize user");
  cy.get("#loginFrm_loginname").type(user.loginName);
  cy.get("#loginFrm_password").type(user.password);
  cy.get('button[type="submit"]').contains("Login").click();

  cy.get(".heading1", { timeout: 2000 }).should("contain", user.firstName);
}

export function loginAPI(user) {
  let csrftoken, csrfinstance, cookie;

  cy.visit('/index.php?rt=account/login')

  cy.get('form[id="loginFrm"]>input[name="csrftoken"]').invoke('val').then((value) => {
    csrftoken = value;
    console.log("csrftoken", csrftoken);

    cy.get('form[id="loginFrm"]>input[name="csrfinstance"]').invoke('val').then((value) => {
      csrfinstance = value;
      console.log("csrfinstance", csrfinstance);

      cy.getCookie("AC_SF_8CEFDA09D5").then((c) => {
        cookie = c;
        console.log("AC_SF_8CEFDA09D5 value:", cookie.value);

        cy.request({
          method: 'POST',
          url: '/index.php?rt=account/login',
          form: true,
          headers: {
            cookie: cookie
          },
          body: {
            csrftoken: csrftoken,
            csrfinstance: csrfinstance,
            loginname: 'wktest',
            password: '123456'
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.indexOf(user.firstName) !== -1).to.eq(true);
        })
      });
    });
  });
};

