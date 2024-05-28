import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const aktor = Cypress.env('list')

//pilih role login
When('User login sebagai {string}', (user) => {
  aktor.forEach((role) => {
    if (user === role.id) {
      cy.get("#email").type(role.username);
      cy.get("#password").type(role.password);
    }
  })
  cy.get(".btn-login").contains("Masuk").click();
})

//memilih modul berdasarkan role
When('{string} memilih modul {string}', (user, modul) => {
  aktor.forEach((role) => {
    if (user === role.id) {
      if (modul === "akademik") {
        cy.get(".siakad > .inner").click();
        cy.get("#siakad").contains(user).should('be.visible').click();
        cy.get('.container > .nav > :nth-child(1) > a').click()
      } else if (modul === "pmb") {
        cy.get(".spmb").click()
        cy.get('#spmb').contains(user).should('be.visible').click()
      } else if (modul === "litabmas") {
        cy.get(".litabmas").click()
        cy.get('#litabmas').contains(user).should('be.visible').click()
      }
    }
  })
})

//khusus login dosen
When('Dosen memilih modul {string}', (modul) => {
  if (modul === "akademik") {
    cy.get(".siakad > .inner").click();
    cy.get("#siakad").should('be.visible').click();
    cy.get('.container > .nav > :nth-child(1) > a').click()
  } else if (modul === "pmb") {
    cy.get(".spmb").click()
    cy.get('#spmb').should('be.visible').click()
  } else if (modul === "litabmas") {
    cy.get(".litabmas").click()
    cy.get('#litabmas').contains('Dosen').should('be.visible').click()
  }

})

//list parameter halaman
const url = {
  // Akademik
  "mata kuliah": "http://localhost/siacloud/siakad/list_matakuliah",

  // PMB
  "jalur pendaftaran": "spmb/ms_jalurpendaftaran",
  "periode pendaftaran": "spmb/list_periode",
  "jalur seleksi": "spmbfront/jalur-seleksi",
  "penilaian rpl": "spmb/seleksi_rpl"

}
When('User mengakses halaman {string}', (pageName) => {
  const pageUrl = url[pageName]
  cy.visit(pageUrl)
})

//modal konfirmasi
When('User klik tombol konfirmasi {string}', (pilih) => {
  cy.get('#modal-konfirmasi').should('be.visible')
  if (pilih === "Ya, Yakin") {
    cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
  } else if (pilih === "Batalkan") {
    cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
  } else if (pilih === "Ok") {
    cy.get('[data-bb-handler="ok"]').should('be.visible').and('contain', 'Ok').click()
  }
})


