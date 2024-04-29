import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const fileproposal = 'file upload/lorem-ipsum.pdf'
const filerab = 'file upload/fitur.pdf'
const filetabungan = 'file upload/fire.png'

When ('User mengakses halaman pengajuan pendanaan', ()=>{
    cy.contains('Pengajuan Pendanaan').should('be.visible').click()
})

When ('User mengisi pernyataan proposal', ()=>{
    cy.get('[for="kode_jenis_pendanaan_penelitian"]').click();
    cy.get('#form-control-judul_penelitian').type('Anilisis Perbandingan Pengujian Manual dan Automation Testing Pada Website Sistem Informasi Akademik').tab()
    cy.get(':nth-child(4) > .choices > .choices__inner').click()
    cy.get(':nth-child(4) > .choices > .choices__list--dropdown > .choices__input').type('Sistem Informasi')
    cy.get('.choices__list').contains('Sistem Informasi').click()
    cy.wait(1000)
    cy.get(':nth-child(5) > .choices > .choices__inner').click()
    cy.get(':nth-child(5) > .choices > .choices__list--dropdown > .choices__input').type('Generasi Milenial')
    cy.get('.choices__list').contains('Generasi Milenial').click();
    cy.wait(1000)
    cy.get(':nth-child(6) > .choices > .choices__inner').click()
    cy.get(':nth-child(6) > .choices > .choices__list--dropdown > .choices__input').type('Sevima 1')
    cy.get('.choices__list').contains('Sevima 1').click();
    cy.wait(1000)
    cy.get(':nth-child(7) > .choices > .choices__inner').click()
    cy.get(':nth-child(7) > .choices > .choices__list--dropdown > .choices__input').type('Pendanaan Penelitian Tren Teknologi Dibidang Sistem Pendidikan Perguruan Tinggi')
    cy.get('.choices__list').contains('Pendanaan Penelitian Tren Teknologi Dibidang Sistem Pendidikan Perguruan Tinggi').click();
    cy.get('#form-control-jenis_output_penelitian_2').click()
    cy.get('#form-control-jenis_output_penelitian_3').click()
    cy.get('[for="apakah_berkontribusi_bidang_ilmu_1"]').click()
})

When ('User mengisi isian proposal', ()=>{
  cy.get('[data-name="isian_proposal__penelitian__1"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__2"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__3"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__4"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__5"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__6"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__7"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__8"]').type('lorem ipsum')
  cy.get('[data-name="isian_proposal__penelitian__9"]').type('lorem ipsum')
  cy.get('[name="id_dokumen_proposal"]').attachFile(fileproposal)
  cy.wait(3000);
})

When ('User memilih anggota proposal', ()=>{
    cy.contains('Tambahkan Anggota').click()
    cy.get('[for="member_type_1"]').click();
    cy.get('.form-control__group > .choices > .choices__inner').click()
    cy.get('.form-control__group > .choices > .choices__list--dropdown > .choices__input').type('Stevie Ray Vaughan')
    cy.get('.choices__list').contains('Stevie Ray Vaughan').click()
    cy.contains('Tambahkan Anggota').click()
})

When ('User mengisi detail pendanaan', ()=>{
    cy.get('#form-control-nominal_anggaran_diajukan').type('15000000')
    cy.get('#form-control-id_dokumen_rab').attachFile(filerab)
    cy.get('#form-control-nama_pemilik_rekening').type('Kahlil Gibran')
    cy.get('#form-control-nama_bank').type('BCA')
    cy.get('#form-control-nomor_rekening').type('675160001')
    cy.get('#form-control-cabang_bank').type('Surabaya')
    cy.get('#form-control-id_foto_tabungan').attachFile(filetabungan);
    cy.get('#check-snk').click()
})