import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//pilih env
Given ('User mengakses modul Litabmas', ()=>{
    cy.visit(Cypress.env('litabmas'));
})

  //konfirmasi setelah login
When ('User konfirmasi akun', ()=>{
    cy.get('.btn').click()
})

//aksi
When ('User klik tombol tambah', ()=>{
    cy.contains('Tambah').should('be.visible').click()
})

When ('User klik tombol simpan', ()=>{
    cy.contains('Simpan').should('be.visible').click()
})

When ('User klik tombol kirim pengajuan', ()=>{
    cy.contains('Kirim Pengajuan').should('be.visible').click()
})

When ('User klik tombol konfirmasi pengajuan', ()=>{
    cy.contains('Ajukan Proposal').should('be.visible').click()
})

When ('User memilih section penelitian', ()=> {
    cy.contains('Penelitian').should('be.visible').click()
})

When ('User memilih section pengabdian masyarakat', ()=> {
    cy.contains('Pengabdian Masyarakat').should('be.visible').click()
})

When ('User klik tombol tambahkan reviewer', ()=> {
    cy.get('[data-target="#modal-tambah-reviewer"]').should('be.visible').click()
})

When('User klik tombol validasi dokumen {string}', (validasi) => {
    if (validasi == "Dokumen Tidak Lengkap") {
      cy.get('[data-target="#modal-status-dokumen-tidak-lengkap"]').should('be.visible').click();
    } else if (validasi == "Tandai Dokumen Lengkap") {
      cy.get('[data-target="#modal-status-dokumen-valid"]').should('be.visible').click();
    }
});

When ('User klik modal konfirmasi {string}', (konfirmasi)=> {
    if(konfirmasi == "Ya, Yakin") {
        cy.get('.btn.btn_primary').contains('Ya, Yakin').click()
    }else if(konfirmasi == "Ya, Tidak Lengkap") {
        cy.get('.btn.btn_destructive').contains('Ya, Tidak Lengkap').click()
    }else if(konfirmasi == "Batalkan") {
        cy.get('.btn.btn_outline').contains('Batalkan').click()
    }else if(konfirmasi == "Ya, Batalkan Penilaian") {
        cy.get('.btn.btn_primary').contains('Ya, Batalkan Penilaian').click()
    }
})
  
When ('User klik tombol batalkan penilaian', ()=> {
    cy.contains('Batalkan Penilaian').should('be.visible').click()
})

//akses halaman
When ('User mengakses halaman data referensi', ()=>{
    cy.contains('Data Referensi').should('be.visible').click()
})

When ('User mengakses halaman klaster pendanaan', ()=>{
    cy.contains('Klaster Pendanaan').should('be.visible').click()
})

When ('User mengakses halaman pengajuan pendanaan', ()=>{
    cy.contains('Pengajuan Pendanaan').should('be.visible').click()
})

When ('User mengakses halaman usulan anggota', ()=>{
    cy.contains('Usulan Anggota').should('be.visible').click()
})

When ('User mengakses halaman seleksi', ()=> {
    cy.contains('Seleksi').should('be.visible').click()
})
When ('User mengakses halaman penilaian administrasi', ()=> {
    cy.contains('Penilaian Administrasi').should('be.visible').click()
})

When ('User mengakses halaman penilaian similarity & AI', ()=> {
    cy.contains('Penilaian Similarity & AI').should('be.visible').click()
})

When ('User mengakses halaman penilaian assign reviewer', ()=> {
    cy.contains('Assign Reviewer').should('be.visible').click()
})

