import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import proposal from '../../../fixtures/litabmas/pengajuan pendanaan/pengajuan_pendanaan.json'
import logbook from '../../../fixtures/litabmas/pengajuan pendanaan/logbook_aktivitas_penelitian.json'
import bimbingan from '../../../fixtures/litabmas/daftar bimbingan/bimbingan.json'

When('User melihat detail proposal untuk mengisi feedback bimbingan', () => {
    cy.get('td').contains(proposal.jeff.judul)
        .parent()
        .find('.btn.btn_outline.btn_xs').first().click()
})

When('User pembimbing 1 memberikan feedback bimbingan', () => {
    logbook.list.forEach((log, book) => {
        cy.get('td').contains(log.aktivitas).parent().find('.btn.btn_outline.btn_xs').last().click()
        bimbingan.list.forEach((bimbingan, komen) => {
            if (book == komen) {
                cy.get('[data-cy="feedback_logbook"]').clear().type(bimbingan.feedback)
                cy.get('[data-cy="id_dokumen_feedback_logbook"]').attachFile('file upload/' + bimbingan.filefeedback)
                cy.contains('Simpan').should('be.visible').click()
                cy.get('.alert').should('be.visible')
            }
        })
    })
})