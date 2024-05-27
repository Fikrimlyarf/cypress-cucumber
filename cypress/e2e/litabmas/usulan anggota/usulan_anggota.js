import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Eks from '../../../fixtures/litabmas/usulan anggota/usulan_anggota.json'

When('User mengisi data usulan anggota', () => {
  Eks.list.forEach((team) => {
    cy.contains('Tambah').should('be.visible').click()
    cy.get('#form-control-nama_user').type(team.namaAnggota)
    cy.get('#form-control-email_user').type(team.emailAnggota)
    cy.get('#form-control-nip').type(team.nipAnggota)
    cy.get('.choices__inner').click()
    cy.get('.choices__list--dropdown > .choices__input').type(team.asalInstitusi)
    cy.get('.choices__list').contains(team.asalInstitusi).click();
    cy.contains('Simpan').should('be.visible').click()
    cy.get('.alert').should('contain', 'Berhasil menambahkan data')
    cy.contains('Kembali ke List').should('be.visible').click()
  })
})

When('User menyetujui akun anggota eksternal', () => {
  Eks.list.forEach((team) => {
    cy.get('td').contains(team.namaAnggota)
      .parent()
      .find('.btn.btn_outline.btn_xs').first().click()
    cy.contains('Setujui Ajuan Akun').should('be.visible').click()
    cy.get('.grid > .btn_primary').click()
    cy.get('.alert').should('contain', 'Berhasil menyetujui usulan dosen eksternal')
    cy.contains('Kembali ke List').should('be.visible').click()
  })
})