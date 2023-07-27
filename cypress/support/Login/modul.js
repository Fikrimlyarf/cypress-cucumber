Cypress.Commands.add('modulAkademik', ()=>{
    cy.get(".siakad > .inner").click();
    cy.get("#siakad").contains("Super Administrator").should('be.visible').click();
    cy.get('.container > .nav > :nth-child(1) > a').click()
}) 