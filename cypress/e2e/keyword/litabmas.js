import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//pilih env
Given ('User mengakses modul Litabmas', ()=>{
    cy.visit(Cypress.env('litabmas'));
})

  //konfirmasi setelah login
When ('User konfirmasi akun', ()=>{
    cy.get('.btn').click()
})

When ('User klik tombol tambah', ()=>{
    cy.contains('Tambah').should('be.visible').click()
})

When ('User klik tombol simpan', ()=>{
    cy.contains('Simpan').should('be.visible').click()
})

