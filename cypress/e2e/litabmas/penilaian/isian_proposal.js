import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from '../../../fixtures/litabmas/penilaian/isian_proposal.json'

When ('Reviewer 1 melihat detail proposal', ()=> {
    cy.get('td').contains('Belum Dinilai')
      .parent()
      .parent()
      .find('.btn.btn_outline.btn_xs').first().click()
})

When ('Reviewer 2 melihat detail proposal', ()=> {
    cy.get('td').contains('Proses Penilaian')
      .parent()
      .parent()
      .find('.btn.btn_outline.btn_xs').first().click()
})

When ('Reviewer 1 memeberikan feedback', ()=> {
    cy.get('[data-cy="isian_proposal[19]"]').type(data.feedback1.judul)
    cy.get('[data-cy="isian_proposal[20]"]').type(data.feedback1.latar)
    cy.get('[data-cy="isian_proposal[21]"]').type(data.feedback1.masalah)
    cy.get('[data-cy="isian_proposal[22]"]').type(data.feedback1.tujuan)
    cy.get('[data-cy="isian_proposal[23]"]').type(data.feedback1.kajian)
    cy.get('[data-cy="isian_proposal[24]"]').type(data.feedback1.konsep)
    cy.get('[data-cy="isian_proposal[25]"]').type(data.feedback1.metode)
    cy.get('[data-cy="isian_proposal[26]"]').type(data.feedback1.rencana)
    cy.get('[data-cy="isian_proposal[27]"]').type(data.feedback1.pustaka)
    cy.scrollTo('top')
    cy.contains('Simpan').should('be.visible').click()
})

When ('Reviewer 2 memeberikan feedback', ()=> {
    cy.get('[data-cy="isian_proposal[19]"]').type(data.feedback2.judul)
    cy.get('[data-cy="isian_proposal[20]"]').type(data.feedback2.latar)
    cy.get('[data-cy="isian_proposal[21]"]').type(data.feedback2.masalah)
    cy.get('[data-cy="isian_proposal[22]"]').type(data.feedback2.tujuan)
    cy.get('[data-cy="isian_proposal[23]"]').type(data.feedback2.kajian)
    cy.get('[data-cy="isian_proposal[24]"]').type(data.feedback2.konsep)
    cy.get('[data-cy="isian_proposal[25]"]').type(data.feedback2.metode)
    cy.get('[data-cy="isian_proposal[26]"]').type(data.feedback2.rencana)
    cy.get('[data-cy="isian_proposal[27]"]').type(data.feedback2.pustaka)
    cy.scrollTo('top')
    cy.contains('Simpan').should('be.visible').click()
})