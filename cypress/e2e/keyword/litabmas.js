import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//pilih env
Given ('User mengakses modul Litabmas', ()=>{
    cy.visit(Cypress.env('litabmas'));
  })

  //konfirmasi setelah login
When ('User konfirmasi akun', ()=>{
    cy.get('.btn').click()
  })