Cypress.Commands.add("loginsuperadmin", (idrole) => {
    cy.visit("/");
    cy.fixture("login/login_user").then((data) => {
      data.list.forEach((user)=>{
        if(idrole === user.id){
          cy.get("#userid").type(user.username);
          cy.get("#password").type(user.password);
        }
      })
    });
    cy.get(".btn").click();
  });


