import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given('User mengakses halaman login siakadcloud', ()=> {
    cy.visit('/');
})
When('User Superadmin login', ()=>{
    // cy.loginsuperadmin(); 

    // alternatif jika custom command tidak terbaca (code pindahkan kesini langsung)
    cy.fixture("login/login_user").then((data) => {
        data.list.forEach((user)=>{
          if('1' === user.id){
            cy.get("#email").type(user.username);
            cy.get("#password").type(user.password);
          }
        })
      });
      cy.get(".btn-login").contains("Masuk").click();
})
When('User memilih modul akademik', ()=>{
    // cy.modulAkademik()

    cy.get(".siakad > .inner").click();
    cy.get("#siakad").contains("Super Administrator").should('be.visible').click();
    cy.get('.container > .nav > :nth-child(1) > a').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})
Then('Terdapat tampilan beranda', ()=>{
    cy.get('.content-header > div > h1').should('contain', 'Beranda')
})
