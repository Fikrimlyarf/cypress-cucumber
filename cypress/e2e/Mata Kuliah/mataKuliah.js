import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import dataMK from '../../fixtures/Mata Kuliah/mataKuliah.json'

Given ('Admin mengakses halaman Mata Kuliah', ()=> {
    cy.visit('/');
    // cy.loginsuperadmin('1');
    // cy.modulAkademik()

    //login superadmin
    cy.fixture("login/login_user").then((data) => {
        data.list.forEach((user)=>{
          if('1' === user.id){
            cy.get("#email").type(user.username);
            cy.get("#password").type(user.password);
          }
        })
      });
    cy.get(".btn-login").contains("Masuk").click();

    //pilih modul akademik
    cy.get(".siakad > .inner").click();
    cy.get("#siakad").contains("Super Administrator").should('be.visible').click();
    cy.get('.container > .nav > :nth-child(1) > a').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    cy.visit('http://localhost/siacloud/siakad/list_matakuliah');
})

When('Admin memilih mata kuliah {string}', (mk)=>{
    if(mk == 'Pengantar Teknologi Informasi'){
        cy.get('#collapseTahunKurikulum').contains(dataMK.thnkur).click()
        // cy.get('#accordion').contains('Prodi Pengampu').click()
        // cy.get('#collapseunit').contains('a', /^S1 - Teknik Informatika$/).click()
        

        cy.get('.col-xs-8 > .input-group > .form-control').type('Pengantar Teknologi Informasi')
        cy.get('.input-group-btn > .btn-success').click()
        cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td').each(($el) => {
            if ($el.text() == '2020' && 'Teknik Informatika') {
              cy.get($el).parent().find('.btn.btn-info.btn-xs.btn-flat').last().click()
            //   return false
            }
            // cy.log($el.text())
          })
    }
})

When('Admin mengisi data {string}', (menu)=>{
  if(menu == 'Pemetaan CPMK'){
    cy.get('.list-unstyled.profile-nav').contains('Pemetaan CPMK').click();
    cy.get('#periode').select(dataMK.periode)
    cy.get('.col-md-8 > .btn-success').click()
    cy.get('#i_kodecpmk').type(dataMK.kodecpmk)
    cy.get('#i_deskripsi_id').type(dataMK.cpmkIN)
    cy.get('#i_deskripsi_en').type(dataMK.cpmkEN)

    cy.get('#form_data > div > table > tbody >tr').each(($el)=>{
      cy.log($el)
      cy.get($el).children().each(($elchild, index)=>{
          if(index > 4 ){
              const temp = Math.random() < 0.6
              // cy.log(index)
              if(temp){
                  // cy.log(temp)
                  cy.get($elchild).find('label > div').invoke('addClass', 'checked');
                  cy.get($elchild).find('label > div').invoke('attr', 'aria-checked', true).click();
              }
          }
      }); 
  })    
  }
})