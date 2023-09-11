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
})

const url = {
  // Akademik
  "mata kuliah": "siakad/list_matakuliah",

  // PMB
  "jalur pendaftaran": "spmb/ms_jalurpendaftaran",
  "periode pendaftaran": "spmb/list_periode"

}
When('User mengakses halaman {string}', (pageName)=>{
  const pageUrl = url[pageName]
  cy.visit(pageUrl)
})

When('User klik tombol konfirmasi {string}', (pilih)=>{
    cy.get('#modal-konfirmasi').should('be.visible')
      if(pilih === "Ya, Yakin"){
        cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }else if(pilih === "Batalkan"){
        cy.get('[data-bb-handler="cancel"]').should('be.visible').and('contain', 'Batalkan').click()
      }else if(pilih === "Ok"){
        cy.get('[data-bb-handler="ok"]').should('be.visible').and('contain', 'Ok').click()
      }
})

// Tambah modul lain dan kombinasi user disini
const moduleActions = {
  PMB: {
    SuperAdmin: () => {
      cy.get(".spmb").click()
      cy.get('#spmb').contains("Super Administrator").should('be.visible', { timeout: 1000 }).click()
    },
    Admin: () => {
      cy.get(".spmb").click()
      cy.get('#spmb').contains('Administrator Perguruan Tinggi').should('be.visible', { timeout: 1000 }).click()
    }
  },
  Siakad: {
    SuperAdmin: () => {
      cy.get(".siakad > .inner").click()
      cy.get("#siakad").contains("Super Administrator").should('be.visible', { timeout: 1000 }).click()
    },
    Admin: () => {
      cy.get(".siakad > .inner").click()
      cy.get("#siakad").contains("Administrator Perguruan Tinggi").should('be.visible', { timeout: 1000 }).click()
    },
    Dosen: () => {
      cy.get(".siakad > .inner").click()
      cy.get("#siakad").contains("Dosen").should('be.visible', { timeout: 1000 }).click()
    }
  },
  Aplikasi: {
    SuperAdmin: () => {
      cy.get(".admin > .inner").click()
      cy.get("#admin").contains("Super Administrator").should('be.visible', { timeout: 1000 }).click()
    }
  }
}
// Pemanggilan untuk feature nya
When('{string} masuk ke modul {string}', (user, modul) => {
  const action = moduleActions[modul]?.[user]
  if (action) {
    action()
  } else {
    cy.log("Modul / Role tidak ditemukan")
  }
})

When('{string} memilih modul {string}', (user, modul)=>{
  cy.fixture('login/login_user').then((data) => {
    data.list.forEach((aktor)=>{
      if(user === aktor.id){
        if(modul === "akademik"){
          cy.get(".siakad > .inner").click();
          cy.get("#siakad").contains("Super Administrator").should('be.visible').click();
          cy.get('.container > .nav > :nth-child(1) > a').click()
        } else if (modul === "pmb"){
          cy.get(".spmb").click()
          cy.get('#spmb').contains("Super Administrator").should('be.visible', { timeout: 1000 }).click()
        }
      }
    })
  })
})