import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import dataCPL from '../../fixtures/manajemen obe/manajemen_cpl.json'
import dataPL from '../../fixtures/manajemen obe/profil_lulusan.json'

Given ('Admin mengakses halaman menajemen OBE', ()=> {
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

    cy.visit('http://localhost/siacloud/siakad/ms_obe');
    cy.get('.col-xs-8 > .input-group > .form-control').type('Teknik Informatika')
    cy.get('.btn.btn-sm.btn-success').click()
    cy.get('td').contains('S1 - Teknik Informatika')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click()
})


When('Admin menambahkan data {string}', (menu)=>{
    //pengkondisian menu yang dituju
    if(menu == "Profil Lulusan"){
        //input data secara looping
        dataPL.listPL.forEach((pl)=>{
            cy.get('#addBtn').click()
            cy.get('#i_kodepl').type(pl.kodepl)
            cy.get('#i_profile_lulusan').type(pl.profil)
            cy.get('#i_detail_profesi').type(pl.profesi)
            cy.get('#i_deskripsi_id').type(pl.desIN)
            cy.get('#i_deskripsi_en').type(pl.desEN)
              .parent()
              .next()
              .find('.btn.btn-success.btn-xs.btn-flat').click()
            cy.get('.alert').should('contain', dataPL.alertBerhasil)
        })
    }else if(menu == "Manajemen CPL"){
        cy.get('.list-unstyled.profile-nav').contains('Manajemen CPL').click();
        //input data secara looping
        dataCPL.listCPL.forEach((cpl)=>{
            cy.get('#addBtn').click()
            cy.get('[name="kodecpl"]').type(cpl.kodeCPL)
            cy.get('[name="deskripsi_id"]').type(cpl.cplID)
            cy.get('[name="deskripsi_en"]').type(cpl.cplEN)
            cy.get('[name="kategori"]').select(cpl.katergori)
              .parent()
              .next()
              .find('.btn.btn-success.btn-xs.btn-flat').click()
            cy.get('.alert').should('contain', dataCPL.alertCplBerhasil)
        })
    }else if(menu == "Pemetaan PL -> CPL"){
        cy.get('.list-unstyled.profile-nav').contains('Pemetaan PL -> CPL').click();
        cy.get('[data-type="edit-click"]').click()
        cy.get('.table.table-bordered.table-striped.dataTable > tbody > tr').each(($el)=>{
            cy.get($el).children().each(($elchild, index)=>{
                if(index > 1 ){
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
        cy.get('.col-md-8 > .btn-success').click() 
        cy.get('.alert').should('contain', dataCPL.alertPLkeCPLBerhasil)
    }else if(menu == "Pemetaan CPL -> MK"){
        cy.get('.list-unstyled.profile-nav').contains('Pemetaan CPL -> MK').click();
        cy.get('[data-type="edit-click"]').click()
        cy.get('.table.table-bordered.table-striped.dataTable > tbody > tr').each(($el)=>{
            cy.get($el).children().each(($elchild, index)=>{
                if(index > 2 ){
                    const temp = Math.random() < 0.3
                    // cy.log(index)
                    if(temp){
                        // cy.log(temp)
                        cy.get($elchild).find('label > div').invoke('addClass', 'checked');
                        cy.get($elchild).find('label > div').invoke('attr', 'aria-checked', true).click();
                    }
                }
            }); 
        }) 
        cy.get('.col-md-8 > .btn-success').click() 
        cy.get('.alert').should('contain', dataCPL.alertCPLkeMKBerhasil)
    }
})

When('Admin menghapus data {string}', (menu)=>{
    if(menu == "Profil Lulusan"){
        //get jumlah row dalam table
        cy.get('.table.table-bordered.table-striped.dataTable > tbody').find('tr').then((row)=>{
            //hapus data secara looping sejumlah row table
            for(let n = 1; n <= row.length; n++){
                cy.get('td').contains('PL').parent()
                    .find('.btn.btn-danger.btn-xs.btn-flat').click()
                // cy.modalKonfirmasi("ya")
                cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
                cy.get('.alert').should('contain', 'berhasil dihapus')
            }
        })
    }else if(menu === "Manajemen CPL"){
        cy.get('.list-unstyled.profile-nav').contains('Manajemen CPL').click();
        //get jumlah row dalam table
        cy.get('.table.table-bordered.table-striped.dataTable > tbody').find('tr').then((row)=>{
            //hapus data secara looping sejumlah row table
            for(let n = 1; n <= row.length; n++){
                cy.get('td').contains('CPL').parent()
                    .find('.btn.btn-danger.btn-xs.btn-flat').click()
                // cy.modalKonfirmasi("ya")
                cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
                cy.get('.alert').should('contain', 'berhasil dihapus')
            }
        })
    }
})