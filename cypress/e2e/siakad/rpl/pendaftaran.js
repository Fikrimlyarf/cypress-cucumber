import { When } from "@badeball/cypress-cucumber-preprocessor"
import user from "../../../fixtures/siakad/rpl/pmb-V1.json"

When ("Pendaftar memilih jalur RPL gelombang 4", () => {
    cy.contains('.cards-jalur', 'Gelombang 4').within(() => {
        cy.get('.btn:contains("Daftar")').click()
    })
})

When ("Pendaftar mengisi form registrasi", () => {
    user.pendaftar.forEach((data) => {
        // Isi form langkah kedua
        cy.get("#namapendaftar").type(data.nama)
        if (data.kelamin == "L") {
            cy.get("#jk_L").click()
        } else {
            cy.get("#jk_P").click()
        }
        cy.get("#nohp").type(data.hp)
        cy.get("#email").type(data.email)
        cy.get("#tgllahir").type(data.tglLahir)
        cy.get("#tmplahir").type(data.tempatLahir)
        cy.get("#nik").type(data.nik)
        cy.get('#pendterakhir').select(data.pendidikanTerakhir)

        cy.get(".btn").contains("Lanjut").click()

        // Isi form langkah ketiga
        cy.get('#select2-idpropinsi-container').type(data.provinsi +'{enter}')
        cy.get('#select2-idkota-container').type(data["kab/kota"] +'{enter}')
        cy.get('#select2-idjenisinstitusi-container').type(data.jnsSekolah +'{enter}')
        cy.get('#npsn_label').type(data.namaSekolah)
        cy.get('.tt-suggestions').contains(data.autoCompleteNamaSekolah).click()
        cy.get('#jurusan').type(data.jurusan)
        cy.get('#select2-thnlulus-container').type(data.thLulus +'{enter}')

        cy.get(".btn").contains("Lanjut").click()

        // Isi form langkah ke empat
        cy.get('#select2-pilihan_1-container').type(data.prodiPilihan +'{enter}')
        
        cy.get(".btn").contains('Daftar Sekarang').click()

        // Ringkasan biodata pendaftar dan klik konfirmasi pendaftaran
        cy.get('#form-daftar').should('include.text','Saya menyetujui bahwa data yang telah dimasukkan adalah Benar dan dapat dipertanggungjawabkan.')
        cy.get('label').click()
        cy.get('.btn').contains('Konfirmasi Pendaftaran').should('not.have.attr','disabled')

        cy.get(".btn").contains('Konfirmasi Pendaftaran').click()
        // cy.get('.modal-content')
        cy.get('.btn-primary').click()
    })
})

let globalID
let globalPIN

When ("Pendaftar mendapatkan {string} yang dapat digunakan untuk login", (access) => {
    if (access == "ID Pendaftar") {
        cy.get('.id').invoke('text').then((id) => {
            globalID = id // Simpan ID dalam variabel global
            cy.log(globalID)
        })
    } else if (access == "PIN"){
        cy.get('.katasandi').invoke('text').then((pin) => {
            globalPIN = pin // Simpan PIN dalam variabel global
            cy.log(globalPIN)
        })
    }
})

When ("Pendaftar login menggunakan credentials yang didapat", () => {
    cy.get('.login-button > .button').click()
    // cy.get('#idpendaftar').type(globalID)
    // cy.get('#pin').type(globalPIN)
    cy.get('#idpendaftar').type("2023.10002")
    cy.get('#pin').type("01042004")

    cy.get(".btn").contains("LOGIN").click()
})

When ("Pendaftar melengkapi data untuk melanjutkan pendaftaran", () => {
    user.pendaftar.forEach((data) => {
        // Melengkapi langkah pertama
        cy.get('#select2-idagama-container').type(data.agama +'{enter}')
        cy.get('#select2-idpekerjaan-container').type(data.pekerjaan +'{enter}')

        cy.get('.btn').contains("SIMPAN DAN LANJUTKAN").click()

        // Skip langkah kedua
        cy.get('.btn').contains("SIMPAN DAN LANJUTKAN").click()

        // Melengkapi langkah ketiga
        cy.get('#namakeluarga_I').type(data.namaIbu)
        cy.get('#select2-pekerjaan_I-container').type(data.pekerjaanIbu +'{enter}')
        cy.get('#select2-idpenghasilan_I-container').type(data.penghasilanIbu +'{enter}')

        cy.get('#namakeluarga_A').type(data.namaAyah)
        cy.get('#select2-pekerjaan_A-container').type(data.pekerjaanAyah +'{enter}')
        cy.get('#select2-idpenghasilan_A-container').type(data.penghasilanAyah +'{enter}')

        cy.get('.btn').contains("SIMPAN DAN LANJUTKAN").click()

        // Melengkapi langkah ke empat
        cy.get('#nisn').type(data.nisn)
        cy.get('.btn').contains("SIMPAN DAN LANJUTKAN").click()

        cy.get('.btn').contains("LANJUT ISI BERKAS").click()

    })
    
})

const foto = 'file upload/foto.jpg'
const ijazah = 'file upload/ijazah.jpg'

When ("Pendaftar mengupload berkas syarat pendaftaran", () => {
    cy.get('input[name="fotopendaftar"]').attachFile(foto)

    cy.get('input[name^="filesyarat["]').each(($element) => {
        // Mengambil nilai atribut 'name' dari elemen
        const nameAttribute = $element.attr('name')
        cy.get(`input[name="${nameAttribute}"]`).should('exist').attachFile(ijazah)
    })

    cy.get('.btn').contains('SIMPAN').click()
    cy.get('.btn-primary').click()
})

When ("Pendaftar mengupload berkas syarat RPL perolehan kredit", () => {
    // cy.get('#menu-sidebar > :nth-child(3) > a').click()

    cy.get('.table-wrapper').find('tr').each(($row, index, $list) => {
            // Melewatkan baris header
            if (index === 0) {
                return
            }
            // Melakukan aksi untuk setiap baris data di sini
            cy.wrap($row).find('td:contains("1")').should('exist')
            .next().next().click().wait(1000)
            
            // Lakukan pengunggahan berkas
            cy.get('input[id="input-doc-file"]').attachFile(ijazah)
            
            // Klik Upload
            cy.get('.modal-footer > .button_primary').click()
        })

    // cy.get('.modal-footer > .button_primary').click()
})