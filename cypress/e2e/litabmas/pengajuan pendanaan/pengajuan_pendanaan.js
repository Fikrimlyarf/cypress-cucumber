import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When ('User mengakses halaman pengajuan pendanaan', ()=>{
    cy.contains('Pengajuan Pendanaan').should('be.visible').click()
})

When ('User mengisi pernyataan proposal', ()=>{
    cy.get('[for="kode_jenis_pendanaan_penelitian"]').click();
    cy.get('#form-control-judul_penelitian').type('Anilisis Perbandingan Pengujian Manual dan Automation Testing Pada Website Sistem Informasi Akademik').tab()
    cy.get('[name="id_bidang_ilmu"]').should('be.visible')
})