import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import proposal from '../../../fixtures/litabmas/pengajuan pendanaan/pengajuan_pendanaan.json'

const fileprogres = 'file upload/lorem-ipsum.pdf'

When('User melihat detail proposal untuk mengisi progres report', () => {
    cy.get('td').contains(proposal.jeff.judul)
        .parent()
        .find('.btn.btn_outline.btn_xs').first().click()
})

When('Peneliti melakukan upload file progres dan keuangan', () => {
    cy.get('td').contains('Laporan Progres').parent().find('.btn.btn_outline.btn_xs').click()
    cy.get('[data-cy="id_dokumen_laporan_progres"]').attachFile(fileprogres)
    cy.contains('Simpan').should('be.visible').click()
    cy.get('.alert_success').should('contain', 'Berhasil mengupload laporan progress report.').and('be.visible')
    cy.get('td').contains('Laporan Keuangan Sementara').parent().find('.btn.btn_outline.btn_xs').click()
    cy.get('[data-cy="id_dokumen_laporan_progres"]').attachFile(fileprogres)
    cy.contains('Simpan').should('be.visible').click()
    cy.get('.alert_success').should('contain', 'Berhasil mengupload laporan progress report.').and('be.visible')
})

When('Reviewer memberikan feedback laporan progres report', () => {
    cy.get('[data-cy="feedback_laporan_progres[lap_progres]"]').clear().type('mantap laporan bisa di presentasi kan secara singkat untuk kevalidan')
    cy.get('[data-cy="status_laporan_progres_reviewer[lap_progres]"]').next().click()
    cy.get('.choices__list').contains('Direvisi').click()
    cy.get('[data-cy="feedback_laporan_progres[lap_keuangan_sementara]"]').clear().type('kurang detail dan lengkap kalo ada struk yg bisa di buat bukti di lampitkan aja')
    cy.get('[data-cy="status_laporan_progres_reviewer[lap_keuangan_sementara]"]').next().click()
    cy.get('.choices__list').contains('Direvisi').click({ force: true })
    cy.get('[data-cy="komentar_umum_presentasi_progres"]').clear().type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
})