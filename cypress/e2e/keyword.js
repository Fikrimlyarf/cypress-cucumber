import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User login sebagai {string}', (role)=>{
    cy.visit('/');
    cy.fixture("login/login_user").then((data) => {
        data.list.forEach((user)=>{
          if(role === user.id){
            cy.get("#email").type(user.username);
            cy.get("#password").type(user.password);
          }
        })
      });
    cy.get(".btn-login").contains("Masuk").click();
})

Given('User memilih modul akademik', ()=>{
    //pilih modul akademik
    cy.get(".siakad > .inner").click();
    cy.get("#siakad").contains("Super Administrator").should('be.visible').click();
    cy.get('.container > .nav > :nth-child(1) > a').click()
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     return false
    // })
})

When('User mengakses halaman mata kuliah', ()=>{
    cy.visit('http://localhost/siacloud/siakad/list_matakuliah');
})

When('User klik tombol konfirmasi {string}', (pilih)=>{
    cy.get('#modal-konfirmasi').should('be.visible')
      if(pilih=="ya"){
        cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }else if(pilih=="tidak"){
        cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
      }else if(pilih=="ok"){
        cy.get('[data-bb-handler="ok"]').should('be.visible').and('contain', 'Ok').click()
      }
})