import { When } from "@badeball/cypress-cucumber-preprocessor";
import data from "../../fixtures/rpl/periodePendaftaran.json"

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