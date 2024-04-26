import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from '../../../fixtures/litabmas/data referensi/klaster.json'

When ('User mengakses halaman data referensi', ()=>{
    cy.contains('Data Referensi').should('be.visible').click()
})

When ('User mengakses halaman klaster pendanaan', ()=>{
    cy.contains('Klaster Pendanaan').should('be.visible').click()
})

When ('User mengisi data informasi umum klaster', ()=>{
    cy.get('[for="kode_jenis_pendanaan_penelitian"]').click();
    cy.get('#form-control-nama_klaster').type(data.namaKlaster)
    cy.get('[for="form-control-id_sumber_pendanaan"]').next().click()
    cy.get('.choices__list--dropdown > .choices__input').type(data.sumberPendanaan)
    cy.get('.choices__list').contains(data.sumberPendanaan).click();
    cy.get('#form-control-maksimal_anggaran').type(data.maksAnggaran)
    cy.get('[for="form-control-maksimal_anggota"]').next().click()
    cy.get('.choices__list').contains(data.jumlahAnggota).click();
    cy.get('[for="apakah_butuh_approve_semua_anggota_1"]').click();
})

When ('User mengisi data bidang ilmu & tema', ()=>{
    cy.contains('Tambahkan Data').click()
    cy.get('[for="form-control-bidang_ilmu"]').next().click();
    cy.get(':nth-child(1) > .choices > .choices__list--dropdown > .choices__input').type(data.bidangIlmu)
    cy.get('.choices__list').contains(data.bidangIlmu).click();
    cy.get('[for="form-control-tema_kegiatan"]').next().click();
    cy.get('.choices__list').contains(data.temaKegiatan).click();
    cy.contains('Tambahkan Data').click()
})

When ('User memilih output dan outcome', ()=>{
    cy.get('td').contains(data.output1).parent().find('.form-control__checkbox').click()
    cy.get('td').contains(data.output2).parent().find('.form-control__checkbox').click()
    cy.get('td').contains(data.output3).parent().find('.form-control__checkbox').click()
    cy.get('td').contains(data.outcome1).parent().find('.form-control__checkbox').click()
})

When ('User mengisi agenda kegiatan', ()=>{
    cy.get('#form-control-agenda_kegiatan\\.1\\.waktu_mulai').type(data.tglawal_daftar)
    cy.get('#form-control-agenda_kegiatan\\.1\\.waktu_selesai').type(data.tglakhir_daftar)
    cy.get('#form-control-agenda_kegiatan\\.2\\.waktu_mulai').type(data.tglawal_reviewadmin)
    cy.get('#form-control-agenda_kegiatan\\.2\\.waktu_selesai').type(data.tglakhir_reviewadmin)
    cy.get('#form-control-agenda_kegiatan\\.3\\.waktu_mulai').type(data.tglawal_penguumanadmin)
    cy.get('#form-control-agenda_kegiatan\\.4\\.waktu_mulai').type(data.tglawal_reviewproposal)
    cy.get('#form-control-agenda_kegiatan\\.4\\.waktu_selesai').type(data.tglakhir_reviewproposal)
    cy.get('#form-control-agenda_kegiatan\\.7\\.waktu_mulai').type(data.tglawal_lolospendanaan)
    cy.get('#form-control-agenda_kegiatan\\.8\\.waktu_mulai').type(data.tglawal_pelaksanaan)
    cy.get('#form-control-agenda_kegiatan\\.8\\.waktu_selesai').type(data.tglakhir_pelaksanaan)
    cy.get('#form-control-agenda_kegiatan\\.9\\.waktu_mulai').type(data.tglawal_report)
    cy.get('#form-control-agenda_kegiatan\\.9\\.waktu_selesai').type(data.tglakhir_report)
    cy.get('#form-control-agenda_kegiatan\\.11\\.waktu_mulai').type(data.tglawal_ouput)
    cy.get('#form-control-agenda_kegiatan\\.11\\.waktu_selesai').type(data.tglakhir_output)
    

})