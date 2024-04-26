import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Eks from '../../../fixtures/litabmas/usulan anggota/usulan_anggota.json'

When ('User mengakses halaman usulan anggota', ()=>{
    cy.contains('Usulan Anggota').should('be.visible').click()
})

When ('User mengisi data usulan anggota', ()=>{
    cy.get('#form-control-nama_user').type(Eks.namaAnggota)
    cy.get('#form-control-email_user').type(Eks.emailAnggota)
    cy.get('#form-control-nip').type(Eks.nipAnggota)
    cy.get('.choices__inner').click()
    cy.get('.choices__list--dropdown > .choices__input').type(Eks.asalInstitusi)
    cy.get('.choices__list').contains(Eks.asalInstitusi).click();
    cy.contains('Simpan').should('be.visible').click()
    cy.get('.alert').should('contain', 'Berhasil menambahkan data')
})

When ('User menyetujui akun anggota eksternal', ()=>{
    cy.get('td').contains(Eks.namaAnggota)
      .parent()
      .find('.btn.btn_outline.btn_xs').first().click()
    cy.contains('Setujui Ajuan Akun').should('be.visible').click()
    cy.get('.grid > .btn_primary').click()
    cy.get('.alert').should('contain','Berhasil menyetujui usulan dosen eksternal')
    
})