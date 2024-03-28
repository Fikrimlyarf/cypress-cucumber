import { When } from "@badeball/cypress-cucumber-preprocessor";

// Menampung element tombol
const buttonSelector = {
    "tambah": "#wrap-button > .btn",
    "simpan jalur": ":nth-child(5) > .btn-success",
}

// Menampung element field input text
const inputText = {
    "kode jalur": "#i_idjalurpendaftaran",
    "nama jalur": "#i_namajalurpendaftaran",
    "keterangan jalur": "#i_keterangan"
}

// Menampung element select
const select = {
    "jenis pendaftaran": "#i_istransfer",
}

When ("Admin klik tombol {string} di halaman jalur pendaftaran", (button) => {
    const selector = buttonSelector[button]
    cy.get(selector).click()
})

When ("Admin isi field {string} dengan {string} di halaman jalur pendaftaran", (fieldName,fieldValue) => {
    if (select[fieldName]) {
        cy.get(select[fieldName]).select(fieldValue)
    } else if (inputText[fieldName]) {
        cy.get(inputText[fieldName]).type(fieldValue)
    }
})
