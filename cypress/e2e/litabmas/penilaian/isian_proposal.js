import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from '../../../fixtures/litabmas/penilaian/isian_proposal.json'
import aspek from '../../../fixtures/litabmas/data referensi/penilaian_aspek_proposal.json'
import proposal from '../../../fixtures/litabmas/pengajuan pendanaan/pengajuan_pendanaan.json'

When('Reviewer 1 melihat detail proposal', () => {
    cy.get('td').contains(proposal.judulPenelitian)
        .parent()
        .parent()
        .find('.btn.btn_outline.btn_xs').first().click()
})

When('Reviewer melihat detail proposal', () => {
    cy.get('td').contains(proposal.judulPenelitian)
        .parent()
        .parent()
        .find('.btn.btn_outline.btn_xs').first().click()
})

When('Reviewer 1 memeberikan feedback', () => {
    cy.get('[data-cy="isian_proposal[1]"]').type(data.feedback1.judul)
    cy.get('[data-cy="isian_proposal[2]"]').type(data.feedback1.latar)
    cy.get('[data-cy="isian_proposal[3]"]').type(data.feedback1.masalah)
    cy.get('[data-cy="isian_proposal[4]"]').type(data.feedback1.tujuan)
    cy.get('[data-cy="isian_proposal[5]"]').type(data.feedback1.kajian)
    cy.get('[data-cy="isian_proposal[6]"]').type(data.feedback1.konsep)
    cy.get('[data-cy="isian_proposal[7]"]').type(data.feedback1.metode)
    cy.get('[data-cy="isian_proposal[8]"]').type(data.feedback1.rencana)
    cy.get('[data-cy="isian_proposal[9]"]').type(data.feedback1.pustaka)
    cy.scrollTo('top')
    cy.contains('Simpan').should('be.visible').click()
})

When('Reviewer 1 memberikan penilaian aspek', () => {
    cy.contains('Ubah Data').should('be.visible').click();
    cy.get('td').contains(aspek.list[0].aspek).parent()
        .get(':nth-child(1) > :nth-child(4) > .choices > .choices__inner').click()
    cy.get('.choices__list').eq(1).contains(aspek.list[0].nilai).should('be.visible').click()
    cy.get('td').contains(aspek.list[1].aspek).parent()
        .get(':nth-child(2) > :nth-child(4) > .choices > .choices__inner').click()
    cy.get('.choices__list').eq(4).contains(aspek.list[1].nilai).should('be.visible').click()
    cy.get('td').contains(aspek.list[2].aspek).parent()
        .get(':nth-child(3) > :nth-child(4) > .choices > .choices__inner').click()
    cy.get('.choices__list').eq(7).contains(aspek.list[2].nilai).should('be.visible').click()
    cy.get('td').contains(aspek.list[3].aspek).parent()
        .get(':nth-child(4) > :nth-child(4) > .choices > .choices__inner').click()
    cy.get('.choices__list').eq(10).contains(aspek.list[3].nilai).should('be.visible').click()
    cy.get('td').contains(aspek.list[4].aspek).parent()
        .get(':nth-child(5) > :nth-child(4) > .choices > .choices__inner').click()
    cy.get('.choices__list').eq(13).contains(aspek.list[4].nilai).should('be.visible').click()
    cy.get('td').contains(aspek.list[5].aspek).parent()
        .get(':nth-child(6) > :nth-child(4) > .choices > .choices__inner').click()
    cy.get('.choices__list').eq(16).contains(aspek.list[5].nilai).should('be.visible').click()
    cy.contains('Simpan Nilai').should('be.visible').click()
})

When('Reviewer 2 memeberikan feedback', () => {
    cy.get('[data-cy="isian_proposal[1]"]').type(data.feedback2.judul)
    cy.get('[data-cy="isian_proposal[2]"]').type(data.feedback2.latar)
    cy.get('[data-cy="isian_proposal[3]"]').type(data.feedback2.masalah)
    cy.get('[data-cy="isian_proposal[4]"]').type(data.feedback2.tujuan)
    cy.get('[data-cy="isian_proposal[5]"]').type(data.feedback2.kajian)
    cy.get('[data-cy="isian_proposal[6]"]').type(data.feedback2.konsep)
    cy.get('[data-cy="isian_proposal[7]"]').type(data.feedback2.metode)
    cy.get('[data-cy="isian_proposal[8]"]').type(data.feedback2.rencana)
    cy.get('[data-cy="isian_proposal[9]"]').type(data.feedback2.pustaka)
    cy.scrollTo('top')
    cy.contains('Simpan').should('be.visible').click()
})