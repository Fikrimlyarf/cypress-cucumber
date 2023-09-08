import { When } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../fixtures/rpl/periodePendaftaran.json"

// Menampung element field input text
const inputText = {

    // Element program studi
    "kuota": "#jmlditerima",
    "prefix nim": "#prefixnim",
}

const select2 = {
    // Element program studi
    "program studi": "#select2-idunit-container",
    "admin prodi": "#idadminprodi",
    "urut nim": "#select2-jmlurutannim-container",
    "dosen asesor 1": "#select2-asesor_0-container",
    "dosen asesor 2": "#select2-asesor_1-container",
    "dosen asesor 3": "#select2-asesor_2-container"
}

// Menampung element sub menu
const subMenu = {
    // Element sub menu
    "jenis program" : "#sidebar-menu-list > :nth-child(2) > a:contains('Jenis Program')",
    "program studi" : "#sidebar-menu-list > :nth-child(3) > a:contains('Program Studi')",
    "seleksi pendaftaran" : "#sidebar-menu-list > :nth-child(4) > a:contains('Seleksi Pendaftaran')",
    "syarat pendaftaran" : "#sidebar-menu-list > :nth-child(6) > a:contains('Syarat Pendaftaran')",

    // Element program studi
    "tim asesor": "#item-assesor-rpl > a"
}

const checkBox = {
    // Element program studi
    "transfer kredit" : ":nth-child(3) > .icheckbox_minimal > .iCheck-helper",
    "perolehan kredit" : ":nth-child(5) > .icheckbox_minimal > .iCheck-helper"
}


When ("User menambahkan {string}", (menu) => {
    if (menu == "periode pendaftaran") {
        cy.get('.btn').contains("Tambah").click()
        //input data secara looping
        data.dataPeriode.forEach((periode)=>{
            cy.get('#namaperiodedaftar').type(periode.nama)
            cy.get('#select2-idgelombang-container').type(periode.gelombang + '{enter}')
            cy.get('#select2-idjalurpendaftaran-container').type(periode.jalur + '{enter}')
            cy.get('#select2-idsistemkuliah-container').type(periode.sistemKuliah + '{enter}')
            cy.get('#tglawalbuka').type(periode.tglMulai).tab()
            cy.get('#tglakhirbuka').type(periode.tglAkhir).tab()
            cy.get('#tglakhirfinalisasi').type(periode.akhirFinalisasi).tab()
            cy.get('#tglawaldaftarulang').type(periode.awalDU).tab()
            cy.get('#tglakhirdaftarulang').type(periode.akhirDU).tab()
            cy.get('#prefixkodependaftar').type(periode.kodePendaftar)

            // Sub menu pengaturan
            cy.get('#item-pengaturan > a').click()
            cy.get('#tglumumkannilai').type(periode.umumkanNilai).tab()
            cy.get('#waktuumumkannilai').type(periode.waktuUmumNilai)
            cy.get('#tglumumkankelulusan').type(periode.umumkanLulus).tab()
            cy.get('#waktuumumkankelulusan').type(periode.waktuUmumLulus)
            cy.get('.btn-success').click()
            cy.get('#modal-konfirmasi > .modal-footer > .btn-primary').click()
            cy.get('.alert').should('contain', data.alertBerhasil)

        })
    }
})