Cypress.Commands.add('modalKonfirmasi', (pilih) => {
    cy.get('#modal-konfirmasi').should('be.visible')
      if(pilih=="ya"){
        cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }else if(pilih=="tidak"){
        cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
      }else if(pilih=="ok"){
        cy.get('[data-bb-handler="ok"]').should('be.visible').and('contain', 'Ok').click()
      }
});
