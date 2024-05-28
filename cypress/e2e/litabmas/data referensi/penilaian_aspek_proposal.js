import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../../fixtures/litabmas/data referensi/penilaian_aspek_proposal.json";

When ('User menambahkan aspek proposal', ()=> {
    data.list.forEach((apk)=> {
        cy.contains('Tambah Data').should('be.visible').click()
        cy.get('[data-cy="no"]').type(apk.no)
        cy.get('[data-cy="nama_komposisi_proposal"]').type(apk.aspek)
        cy.get('[data-cy="bobot_komposisi_proposal"]').type(apk.bobot)
        cy.get('.btn.btn_outline.btn_xs').first().click()
        cy.get('.alert_success').should('contain', 'Berhasil menambahkan data')
    })

})