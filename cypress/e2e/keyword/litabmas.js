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
    cy.contains('Ajukan Proposal').should('be.visible').click({ force: true })
})

When ('User memilih section penelitian', ()=> {
    cy.contains('Penelitian').should('be.visible').click()
})

When ('User memilih section pengabdian masyarakat', ()=> {
    cy.contains('Pengabdian Masyarakat').should('be.visible').click()
})

When ('Reviewer klik tombol berikan feedback', ()=> {
    cy.get('.btn.btn_primary.btn_sm').should('contain', 'Berikan Feedback').click()
})

//validai dokumen oleh admin
When('User klik tombol validasi dokumen {string}', (validasi) => {
    if (validasi == "Dokumen Tidak Lengkap") {
      cy.get('[data-target="#modal-status-dokumen-tidak-lengkap"]').should('be.visible').click();
    } else if (validasi == "Tandai Dokumen Lengkap") {
      cy.get('[data-target="#modal-status-dokumen-valid"]').should('be.visible').click();
    }
});

//konfirmasi anggota oleh dosen eksternal
When('User klik tombol konfirmasi anggota {string}', (validasi) => {
    if (validasi == "Terima Undangan") {
      cy.get('[data-target="#modal-terima-undangan"]').should('be.visible').click();
    } else if (validasi == "Tolak Undangan") {
      cy.get('[data-target="#modal-tolak-undangan"]').should('be.visible').click();
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
    }else if(konfirmasi == "Gabung Penelitian") {
        cy.get('.btn.btn_primary').contains('Gabung Penelitian').click()
    }
})
  
When ('User klik tombol batalkan penilaian', ()=> {
    cy.contains('Batalkan Penilaian').should('be.visible').click()
})

//akses halaman
When ('User mengakses halaman data referensi', ()=>{
    cy.contains('Data Referensi').should('be.visible').click()
})

When ('User mengakses halaman aspek penilaian', ()=>{
    cy.contains('Aspek Penilaian').should('be.visible').click()
})

When ('User mengakses halaman penilaian aspek proposal', ()=>{
    cy.contains('Penilaian Aspek Proposal').should('be.visible').click()
    cy.url().should('include', '/penilaian-komposisi-proposal')
})

When ('User mengakses halaman penilaian bobot aspek proposal', ()=>{
    cy.contains('Penilaian Aspek Proposal').should('be.visible').click()
    cy.url().should('include', '/penilaian-komposisi')
})

When ('User mengakses halaman klaster pendanaan', ()=>{
    cy.contains('Klaster Pendanaan').should('be.visible').click()
    cy.url().should('include', '/klaster-pendanaan');
})

When ('User mengakses halaman kegiatan', ()=>{
    cy.contains('Kegiatan').should('be.visible').click()
    
})

When ('User mengakses halaman pengajuan pendanaan', ()=>{
    cy.contains('Pengajuan Pendanaan').should('be.visible').click()
    cy.url().should('include', '/pengajuan-pendanaan')
})

When ('User mengakses halaman usulan anggota', ()=>{
    cy.contains('Usulan Anggota').should('be.visible').click()
    cy.url().should('include', '/usulan-dosen-eksternal')
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

When ('User mengakses halaman penilaian', ()=> {
    cy.contains('Penilaian').should('be.visible').click()
})

When ('User mengakses halaman penilaian isian proposal', ()=> {
    cy.contains('Penilaian Isian Proposal').should('be.visible').click()
    cy.url().should('include', '/penilaian-isian')
})

When ('User mengakses halaman aktivitas penelitian', ()=> {
    cy.contains('Aktivitas Penelitian').should('be.visible').click()
    cy.url().should('include', '/aktivitas-penelitian')
})

When ('User mengakses halaman daftar bimbingan', ()=> {
    cy.contains('Daftar Bimbingan').should('be.visible').click()
    cy.url().should('include', '/bimbingan')
})


