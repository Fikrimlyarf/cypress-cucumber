import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given('User mengakses halaman login siakadcloud', ()=> {
    cy.visit('/');
})
When('User Superadmin login', ()=>{
    cy.loginsuperadmin();
})
When('User memilih modul akademik', ()=>{
    cy.modulAkademik()
})
Then('Terdapat tampilan beranda', ()=>{
    cy.get('.content-header > h1').should('contain', 'Beranda')
})
