import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import dataCPL from '../../fixtures/Manajemen OBE/manajemenCPL.json'
import dataPL from '../../fixtures/Manajemen OBE/profilLulusan.json'

Given ('Admin mengakses halaman menajemen OBE', ()=> {
    cy.visit('/');
    cy.loginsuperadmin('1');
    cy.modulAkademik()
    cy.visit('http://localhost/siacloud/siakad/ms_obe');
    cy.get('.col-xs-8 > .input-group > .form-control').type('teknik informatika')
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
            cy.get('#i_profile_lulusan').type(pl.profil)
            cy.get('#i_deskripsi_id').type(pl.profilIN)
            cy.get('#i_deskripsi_en').type(pl.profilEN)
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
            cy.get('[name="deskripsi_id"]').type(cpl.cplID)
            cy.get('[name="deskripsi_en"]').type(cpl.cplEN)
            .parent()
            .next()
            .find('.btn.btn-success.btn-xs.btn-flat').click()
            // cy.get('.alert').should('contain', '')
        })
    }else if(menu == "Mapping CPL -> MK"){
        cy.get('.list-unstyled.profile-nav').contains('Mapping CPL -> MK').click();
    }
})

When('Admin menghapus data {string}', (menu)=>{
    if(menu == "Profil Lulusan"){
        //get jumlah row dalam table
        cy.get('.table.table-bordered.table-striped.dataTable > tbody').find('tr').then((row)=>{
            //hapus data secara looping sejumlah row table
            for(let n = 1; n <= row.length; n++){
                    cy.get('td').contains('1').parent()
                      .find('.btn.btn-danger.btn-xs.btn-flat').click()
                    cy.modalKonfirmasi("ya")
                    cy.get('.alert').should('be.visible')
                }
            })
    }
})