import { When } from "@badeball/cypress-cucumber-preprocessor"
import dataPeriod from "../../../fixtures/rpl/periodePendaftaran.json"
import dataProdi from "../../../fixtures/rpl/prodi.json"

When ("User menambahkan {string} dengan jalur RPL", (menu) => {
    if (menu == "periode pendaftaran") {
        cy.get('.btn').contains("Tambah").click()
        //input data secara looping
        dataPeriod.dataPeriode.forEach((periode)=>{
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
            cy.get('.alert').should('contain', dataPeriod.alertBerhasil)

        })
    }
})

When("User menambahkan prodi dengan {string} asesor", (jumlahAsesor) => {
    // // Masuk ke detail data
    // cy.get("input.form-control.input-sm").type('Rekognisi Pembelajaran Lampau{enter}')
    // cy.get('.table').contains('Gelombang 5').parent().find('.btn-info').click()
  
    cy.get('#sidebar-menu-list > :nth-child(3) > a').contains('Program Studi').click()
  
    dataProdi.prodi.forEach((prodi) => {
        cy.get('.btn-success').contains('Tambah').click()
    
        // Mengisi Form prodi dengan jalur RPL transfer kredit
        cy.get('#select2-idunit-container').type(prodi.prodi + '{enter}')
        cy.get('#idadminprodi')
        cy.get('#jmlditerima').type(prodi.kuota)
        cy.get('#prefixnim').type(prodi.prefixNim)
        cy.get('#select2-jmlurutannim-container').type(prodi.urutNim + '{enter}')

        // Jika transfer kredit diperlukan
        if (prodi.tfKredit == "ya") {
            cy.get('#dokumen-rpl > :nth-child(2) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();

            // Mewajibkan dokumen transfer kredit
            cy.get(':nth-child(2) > .table').contains('Ijazah').parent().find('.labelinput > .icheckbox_minimal > .iCheck-helper').click();
            cy.get(':nth-child(2) > .table').contains('Transkrip').parent().find('.labelinput > .icheckbox_minimal > .iCheck-helper').click();

            // Jika perolehan kredit juga diperlukan
            if (prodi.perolehanKredit == "ya") {
                cy.get('#dokumen-rpl > :nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();

                // Menambah dokumen perolehan kredit
                cy.get('#dokumen_a2_0').select('Penghargaan');
                cy.get('[style=""] > :nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();
                cy.get('.col-md-3 > .btn').click();

                cy.get('#dokumen_a2_1').select('Surat Referensi');
                cy.get(':nth-child(2) > :nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();
            }
        } else {
            // Jika transfer kredit tidak diperlukan, tetapi perolehan kredit diperlukan
            if (prodi.perolehanKredit == "ya") {
                cy.get('#dokumen-rpl > :nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();

                // Menambah dokumen perolehan kredit
                cy.get('#dokumen_a2_0').select('Penghargaan');
                cy.get('[style=""] > :nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();
                cy.get('.col-md-3 > .btn').click();

                cy.get('#dokumen_a2_1').select('Sertifikat');
                cy.get(':nth-child(2) > :nth-child(3) > .labelinput > .icheckbox_minimal > .iCheck-helper').click();
            }
        }

        // Memilih Asesor
        cy.get('#item-assesor-rpl > a').click()
        const total = parseInt(jumlahAsesor)
    
        // Cek apakah jumlah asesor >1, jika iya maka klik tombol tambah asesor
        if (total > 1) {
            const klik = total - 1 // Hitung berapa kali tombol tambah asesor harus diklik
            for (let i = 0; i < klik; i++) {
            cy.get('#tr_tambahasesor > :nth-child(1) > .row > .col-md-8 > .btn').click()
            }
        }

        let prodiSebelumnya = null; // Inisialisasi prodiSebelumnya dengan null
        let realIndex = 0; // Inisialisasi realIndex kembali ke 0 untuk setiap prodi
        dataProdi.asesor.forEach((asesor) => {
            if (asesor.prodiAsal === prodi.prodi) {
            cy.get(`#select2-asesor_${realIndex}-container`).type(asesor.search)
            cy.get('.select2-results').each(($el) => {
                if ($el.text() === asesor.suggest) {
                cy.wrap($el).click()
                }
            })
            // Tambahkan log untuk mencatat bahwa asesor telah dipilih
            cy.log(`Asesor untuk prodi '${prodi.prodi}' telah dipilih: ${asesor.search}`)
            realIndex++; // Naikkan realIndex setiap kali Anda mengisi asesor yang sesuai dengan prodi
            }
        })
  
        cy.get('.btn-success').contains('Simpan').click()
        cy.get('#modal-konfirmasi > .modal-footer > .btn-primary').click()
        prodiSebelumnya = prodi.prodi;
    })
  })  

When("User menambahkan mata kuliah di prodi {string}", (prodiName) => {
    // // Masuk ke detail data
    // cy.get("input.form-control.input-sm").type('Rekognisi Pembelajaran Lampau{enter}')
    // cy.get('.table').contains('Gelombang 5').parent().find('.btn-info').click()
  
    cy.get('#sidebar-menu-list > :nth-child(4) > a').contains('Mata Kuliah RPL').click()
    if (prodiName == "akuntansi") {
        cy.get('#idsebaranprodi').select('S1 - Akuntansi')
    } else if (prodiName == 'hukum') {
        cy.get('#idsebaranprodi').select('S1 - Hukum')
    } else if (prodiName == 'teknik informatika') {
        cy.get('#idsebaranprodi').select('S1 - Informatika')
    }

    cy.get('.col-md-8 > .btn-success').click()
        // cy.get('#search_matakuliah').type('AK1102')
        cy.get('#modal_kurikulum > .modal-dialog > .modal-content').then(($el) => {
            cy.get($el).children().find('.icheckbox_minimal').each(($elchild, index)=>{
                if(index > 1 ){
                    const temp = Math.random() < 0.5
                    // cy.log('index : ' + index)
                    if(temp && index < 8){ // dibatasi sebanyak 8 centangan
                        // cy.log('temp : ' + temp)
                        cy.get($elchild).invoke('addClass', 'checked');
                        cy.get($elchild).invoke('attr', 'aria-checked', true).click();
                    }
                }
            })
        })
    cy.get('#select_mk').click()
})