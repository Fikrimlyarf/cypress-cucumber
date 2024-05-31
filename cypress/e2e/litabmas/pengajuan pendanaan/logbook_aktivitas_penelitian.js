import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import proposal from '../../../fixtures/litabmas/pengajuan pendanaan/pengajuan_pendanaan.json'
import logbook from '../../../fixtures/litabmas/pengajuan pendanaan/logbook_aktivitas_penelitian.json'

When('User melihat detail proposal untuk mengisi log book', () => {
    cy.get('td').contains(proposal.jeff.judul)
        .parent()
        .find('.btn.btn_outline.btn_xs').first().click()

})

When('User mengisi log book penelitian', () => {
    logbook.list.forEach((log) => {
        cy.contains('Tambahkan Aktivitas').should('be.visible').click()
        cy.get('[data-cy="tanggal_aktivitas_penelitian"]').click();
        cy.get('.air-datepicker-cell[data-date="' + log.tgl + '"]').click();
        cy.get('[data-cy="tanggal_aktivitas_penelitian"]').should('have.value', log.tanggal);
        cy.get('[data-cy="nama_aktivitas_penelitian"]').type(log.aktivitas)
        cy.get('[data-cy="id_jenis_aktivitas"]').next().should('be.visible').click()
        cy.get('.choices__list').contains(log.jenis).should('be.visible').click()
        cy.get('[data-cy="lokasi_aktivitas_penelitian"]').type(log.tempat)
        cy.get('[data-cy="id_dokumen_logbook"]').attachFile('file upload/' + log.pendukung)
        cy.contains('Simpan').should('be.visible').click()
    })

})

When('User menghapus log book', () => {
    cy.get('.table-max > table > tbody > tr').then((row) => {
        // cy.log(row)
        for (let n = 0; n < row.length; n++) {
            cy.get('td').find('[data-btn-label="Hapus"]').first().click();
            cy.get('.btn_destructive').should('be.visible').click()
        }
    });
})

