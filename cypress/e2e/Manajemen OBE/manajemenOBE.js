import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('Admin PT mengelola manajemen OBE Teknik Informatika', ()=> {
    cy.visit('/');
    cy.loginsuperadmin('1');
    cy.modulAkademik()
})
When('Admin mengakses halaman menajemen OBE', ()=>{
    cy.visit('http://localhost/siacloud/siakad/ms_obe');
    cy.get('.col-xs-8 > .input-group > .form-control').type('teknik informatika')
    cy.get('.btn.btn-sm.btn-success').click()
    cy.get('td').contains('S1 - Teknik Informatika')
        .parent()
        .find('.btn.btn-info.btn-xs.btn-flat').click()
})
When('Admin menambahkan data {string}', (menu)=>{
    if(menu == "Profil Lulusan"){
        cy.fixture("Manajemen OBE/profilLulusan").then((data)=>{
            cy.get('#addBtn').click()
            cy.get('#i_profile_lulusan').type(data.profil)
            cy.get('#i_deskripsi_id').type(data.desProfilIN)
            cy.get('#i_deskripsi_en').type(data.desProfilEN)
            .parent()
            .next()
            .find('.btn.btn-success.btn-xs.btn-flat').click()
            cy.get('.alert').should('contain', data.alertBerhasil)
        })
    }else if(menu == "Manajemen CPL"){
        cy.get('.list-unstyled.profile-nav').contains('Manajemen CPL').click();
    }else if(menu == "Mapping CPL -> MK"){
        cy.get('.list-unstyled.profile-nav').contains('Mapping CPL -> MK').click();
    }
})