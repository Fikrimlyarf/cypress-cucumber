Cypress.Commands.add("loginsuperadmin", (idrole) => {
  cy.visit("/");
  cy.fixture("login/login_user").then((data) => {
    data.list.forEach((user)=>{
      if(idrole === user.id){
        cy.get("#email").type(user.username);
        cy.get("#password").type(user.password);
      }
    })
  });
  cy.get(".btn-login").contains("Masuk").click();
});


