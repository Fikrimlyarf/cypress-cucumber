import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import dataMK from '../../fixtures/mata kuliah/mata_kuliah.json'

When('Admin memilih mata kuliah {string}', (mk)=>{
    if(mk == 'Pengantar Teknologi Informasi'){
        cy.get('#collapseTahunKurikulum').contains(dataMK.thnkur).click()
        cy.get('.col-xs-8 > .input-group > .form-control').type('Pengantar Teknologi Informasi')
        cy.get('.input-group-btn > .btn-success').click()
        cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td').each(($el) => {
            if ($el.text() == '2020' && 'Teknik Informatika') {
              cy.get($el).parent().find('.btn.btn-info.btn-xs.btn-flat').last().click()
            }
          })
    }
})

When('Admin mengisi data {string}', (menu)=>{
  if(menu == 'Pemetaan CPMK'){
    cy.get('.list-unstyled.profile-nav').contains('Pemetaan CPMK').click();
    cy.get('#periode').select(dataMK.periode)
    dataMK.cpmk.forEach((cpmk) => {
      cy.get('.col-md-8 > .btn-success').click()
      cy.get('#i_kodecpmk').type(cpmk.kodecpmk)
      cy.get('#i_deskripsi_id').type(cpmk.cpmkIN)
      cy.get('#i_deskripsi_en').type(cpmk.cpmkEN)
      cy.get('#form_data > div > table > tbody').each(($el, index)=>{
        cy.get($el).children().each(($elchild, index)=>{
            if(index > 1 ){
                const temp = Math.random() > 0.66
                cy.log(Math.random())
                if(temp){
                    cy.get($elchild).find('label > div').invoke('addClass', 'checked');
                    cy.get($elchild).find('label > div').invoke('attr', 'aria-checked', true).click();
                }
            }
        });   
      });
      cy.get('.btn-success').click()      
    })
  }
})
