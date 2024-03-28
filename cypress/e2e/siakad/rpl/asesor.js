import { When } from "@badeball/cypress-cucumber-preprocessor"

When ("Asesor berada pada halaman seleksi RPL", () => {
    cy.url().should('eq', 'http://localhost/siacloud/spmb/seleksi_rpl')
})

When ("User melihat statistik pendaftar", () => {
    cy.get('.statistik').invoke('text').then((text) => {
        cy.log(text)
    })
})

When ("Asesor melakukan penilaian RPL pendaftar {string}", (namaPendaftar) => {
    cy.get("#sub-peminat-penilaian_rpl").click()
    cy.get('#sub-peminat-penilaian_rpl > h4 > .badge').invoke('text').then((text) => {
        cy.log("Pendaftar yang perlu dinilai: " + text)
    })

    cy.get('#search-input').type(namaPendaftar + '{enter}')

    // Masuk ke detail pendaftar untuk memberikan nilai
    cy.get('.col-sm-12').contains(namaPendaftar).parent().parent().next().next().next().next().children().click()
    
    // Hitung jumlah mk
    cy.get('#form_list > .table > tbody').find('tr').then(($rows) => {
        const numRows = $rows.length
        cy.log(`Jumlah mata kuliah yang harus dinilai: ${numRows}`)

        // Daftar nilai yang diinginkan
        const nilai = ['A', 'B', 'C', 'D', 'E']

        $rows.each((index, $row) => {
            // Menghasilkan indeks acak antara 0 hingga 4 (indeks array)
            const indeksAcak = Math.floor(Math.random() * nilai.length)

            // Menggunakan indeks acak untuk memilih nilai acak dari array
            const nilaiAcak = nilai[indeksAcak]

            // Di dalam setiap baris, cari elemen select dengan atribut 'name' yang sesuai
            const nameAttribute = Cypress.$($row).find('.form-select').prop('name')
            if (nameAttribute) {
              // Menggunakan ekspresi reguler untuk mengambil angka dari atribut name
              const matches = nameAttribute.match(/nangka-(\d+)/)
              if (matches && matches.length > 1) {
                const angka = matches[1] // Mengambil angka yang cocok
                cy.log(angka)
                // Memilih nilai pada select yang sesuai
                cy.get(`select[name^="nangka-${angka}"]`).select(nilaiAcak)
              }
            } else {
              cy.log('Atribut name tidak ditemukan.')
            }
          })

          // Melihat mata kuliah yang sudah di nilai
          cy.get('#info-jumlah').invoke('text').then((text) => {
            const arrayText = text.split(' ')
            cy.log("Mata kuliah yang sudah dinilai: " + arrayText[7])
          })
    })

    cy.get('#btn-simpan').click()
}) 

When ("Asesor kembali ke halaman list dan melihat status pendaftar {string}", (namaPendaftar) => {
    cy.get('#btn-back').click()
    cy.get('#search-input').clear().type(namaPendaftar + '{enter}')

    // Masuk ke detail pendaftar untuk memberikan nilai
    cy.get('.col-sm-12').contains(namaPendaftar).parent().parent().next().next().next().children().invoke('text').then((text) => {
        cy.log('Status penilaian pendaftar: ' + text)
    })
    
})