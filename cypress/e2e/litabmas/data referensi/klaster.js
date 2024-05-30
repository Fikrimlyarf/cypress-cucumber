import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import data from '../../../fixtures/litabmas/data referensi/klaster.json'

When('User mengisi data informasi umum klaster', () => {
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

When('User mengisi data bidang ilmu & tema', () => {
    cy.contains('Tambahkan Data').click()
    cy.get('[for="form-control-bidang_ilmu"]').next().click();
    cy.get(':nth-child(1) > .choices > .choices__list--dropdown > .choices__input').type(data.bidangIlmu)
    cy.get('.choices__list').contains(data.bidangIlmu).click();
    cy.get('[for="form-control-tema_kegiatan"]').next().click();
    cy.get('.choices__list').contains(data.temaKegiatan).click();
    cy.contains('Tambahkan Data').click()
})

When('User memilih output dan outcome', () => {
    cy.get('td').contains(data.output1).parent().find('.form-control__checkbox').click()
    cy.get('td').contains(data.output2).parent().find('.form-control__checkbox').click()
    cy.get('td').contains(data.output3).parent().find('.form-control__checkbox').click()
    cy.get('td').contains(data.outcome1).parent().find('.form-control__checkbox').click()
    cy.wait(3000);
})

When('User mengisi agenda kegiatan', () => {
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

When('looping data', () => {
    data.list.forEach((go) => {
        cy.contains('Tambah').should('be.visible').click()
        cy.get('[for="kode_jenis_pendanaan_penelitian"]').click();
        cy.get('#form-control-nama_klaster').type(go.namaKlaster)
        cy.get('[for="form-control-id_sumber_pendanaan"]').next().click()
        cy.get('.choices__list--dropdown > .choices__input').type(go.sumberPendanaan)
        cy.get('.choices__list').contains(go.sumberPendanaan).click();
        cy.get('#form-control-maksimal_anggaran').type(go.maksAnggaran)
        cy.get('[for="form-control-maksimal_anggota"]').next().click()
        cy.get('.choices__list').contains(go.jumlahAnggota).click();
        cy.get('[for="apakah_butuh_approve_semua_anggota_1"]').click();
        cy.contains('Tambahkan Data').click()
        cy.get('[for="form-control-bidang_ilmu"]').next().click();
        cy.get(':nth-child(1) > .choices > .choices__list--dropdown > .choices__input').type(go.bidangIlmu)
        cy.get('.choices__list').contains(go.bidangIlmu).click();
        cy.get('[for="form-control-tema_kegiatan"]').next().click();
        cy.get('.choices__list').contains(go.temaKegiatan).click();
        cy.contains('Tambahkan Data').click()
        cy.get('td').contains(go.output1).parent().find('.form-control__checkbox').click()
        cy.get('td').contains(go.output2).parent().find('.form-control__checkbox').click()
        cy.get('td').contains(go.output3).parent().find('.form-control__checkbox').click()
        cy.get('td').contains(go.outcome1).parent().find('.form-control__checkbox').click()
        cy.wait(3000);
        cy.get('[data-cy="agenda_kegiatan.1.waktu_mulai"]').type(go.tglawal_daftar)
        cy.get('[data-cy="agenda_kegiatan.1.waktu_selesai"]').type(go.tglakhir_daftar)
        cy.get('[data-cy="agenda_kegiatan.2.waktu_mulai"]').type(go.tglawal_reviewadmin)
        cy.get('[data-cy="agenda_kegiatan.2.waktu_selesai"]').type(go.tglakhir_reviewadmin)
        cy.get('[data-cy="agenda_kegiatan.3.waktu_mulai"]').type(go.tglawal_penguumanadmin)
        cy.get('[data-cy="agenda_kegiatan.4.waktu_mulai"]').type(go.tglawal_reviewproposal)
        cy.get('[data-cy="agenda_kegiatan.4.waktu_selesai"]').type(go.tglakhir_reviewproposal)
        cy.get('[data-cy="agenda_kegiatan.5.waktu_mulai"]').type(go.tgl_nominasi)
        cy.get('[data-cy="agenda_kegiatan.7.waktu_mulai"]').type(go.tglawal_lolospendanaan)
        cy.get('[data-cy="agenda_kegiatan.8.waktu_mulai"]').type(go.tglawal_pelaksanaan)
        cy.get('[data-cy="agenda_kegiatan.8.waktu_selesai"]').type(go.tglakhir_pelaksanaan)
        cy.get('[data-cy="agenda_kegiatan.9.waktu_mulai"]').type(go.tglawal_report)
        cy.get('[data-cy="agenda_kegiatan.9.waktu_selesai"]').type(go.tglakhir_report)
        cy.get('[data-cy="agenda_kegiatan.11.waktu_mulai"]').type(go.tglawal_ouput)
        cy.get('[data-cy="agenda_kegiatan.11.waktu_selesai"]').type(go.tglakhir_output)
        cy.contains('Simpan').should('be.visible').click()
        cy.get('.sidebar__link').click()
    })
})