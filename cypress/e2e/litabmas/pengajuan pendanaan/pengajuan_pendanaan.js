import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import klaster from '../../../fixtures/litabmas/data referensi/klaster.json'
import anggota from '../../../fixtures/litabmas/usulan anggota/usulan_anggota.json'
import pendanaan from '../../../fixtures/litabmas/pengajuan pendanaan/pengajuan_pendanaan.json'

const fileproposal = 'file upload/lorem-ipsum.pdf'
const filerab = 'file upload/fitur.pdf'
const filetabungan = 'file upload/fire.png'

When('User mengisi pernyataan proposal', () => {
    cy.get('[for="kode_jenis_pendanaan_penelitian"]').click();
    cy.get('#form-control-judul_penelitian').type(pendanaan.judulPenelitian).tab()
    cy.get(':nth-child(4) > .choices > .choices__inner').click()
    cy.get(':nth-child(4) > .choices > .choices__list--dropdown > .choices__input').type(klaster.list[0].bidangIlmu)
    cy.get('.choices__list').contains(klaster.list[0].bidangIlmu).click()
    cy.wait(1000)
    cy.get(':nth-child(5) > .choices > .choices__inner').click()
    cy.get(':nth-child(5) > .choices > .choices__list--dropdown > .choices__input').type(klaster.list[0].temaKegiatan)
    cy.get('.choices__list').contains(klaster.list[0].temaKegiatan).click();
    cy.wait(1000)
    cy.get(':nth-child(6) > .choices > .choices__inner').click()
    cy.get(':nth-child(6) > .choices > .choices__list--dropdown > .choices__input').type(klaster.list[0].sumberPendanaan)
    cy.get('.choices__list').contains(klaster.list[0].sumberPendanaan).click();
    cy.wait(1000)
    cy.get(':nth-child(7) > .choices > .choices__inner').click()
    cy.get(':nth-child(7) > .choices > .choices__list--dropdown > .choices__input').type(klaster.list[0].namaKlaster)
    cy.get('.choices__list').contains(klaster.list[0].namaKlaster).click();
    cy.get('#form-control-jenis_output_penelitian_2').click()
    cy.get('#form-control-jenis_output_penelitian_3').click()
    cy.get('[for="apakah_berkontribusi_bidang_ilmu_1"]').click()
})

When('User mengisi isian proposal', () => {
    cy.get('[data-name="isian_proposal__penelitian__1"]').type(pendanaan.judulPenelitian)
    cy.get('[data-name="isian_proposal__penelitian__2"]').type(pendanaan.latarBelakang)
    cy.get('[data-name="isian_proposal__penelitian__3"]').type(pendanaan.rumusan)
    cy.get('[data-name="isian_proposal__penelitian__4"]').type(pendanaan.tujuanPenelitian)
    cy.get('[data-name="isian_proposal__penelitian__5"]').type(pendanaan.kajian)
    cy.get('[data-name="isian_proposal__penelitian__6"]').type(pendanaan.konsep)
    cy.get('[data-name="isian_proposal__penelitian__7"]').type(pendanaan.metode)
    cy.get('[data-name="isian_proposal__penelitian__8"]').type(pendanaan.rencana)
    cy.get('[data-name="isian_proposal__penelitian__9"]').type(pendanaan.pustaka)
    cy.get('[name="id_dokumen_proposal"]').attachFile(fileproposal)
    cy.wait(1000);
})

When('User memilih anggota proposal', () => {
    cy.contains('Tambahkan Anggota').click()
    cy.get('[for="member_type_1"]').click();
    cy.get('.form-control__group > .choices > .choices__inner').click()
    cy.get('.form-control__group > .choices > .choices__list--dropdown > .choices__input').type(anggota.list[0].namaAnggota)
    cy.get('.choices__list').contains(anggota.list[0].namaAnggota).click()
    cy.contains('Tambahkan Anggota').click()
})

When('User mengisi detail pendanaan', () => {
    cy.get('#form-control-nominal_anggaran_diajukan').type(pendanaan.usulanBiaya)
    cy.get('#form-control-id_dokumen_rab').attachFile(filerab)
    cy.get('#form-control-nama_pemilik_rekening').type(pendanaan.pemilikRek)
    cy.get('#form-control-nama_bank').type(pendanaan.namaBank)
    cy.get('#form-control-nomor_rekening').type(pendanaan.noRek)
    cy.get('#form-control-cabang_bank').type(pendanaan.cabBank)
    cy.get('#form-control-id_foto_tabungan').attachFile(filetabungan);
    cy.get('#check-snk').click()
})

When('User mengkorfimasi undangan anggota proposal', () => {
    cy.get('td').contains(pendanaan.judulPenelitian)
        .parent()
        .find('.btn.btn_outline.btn_xs').first().click()
})

When('Dosen jeff membuat pengajuan penanaan', () => {
    cy.get('[for="kode_jenis_pendanaan_penelitian"]').click();
    cy.get('[data-cy="judul_penelitian"]').type(pendanaan.jeff.judul).tab()
    cy.get('[data-cy="id_bidang_ilmu"]').next().should('be.visible').click()
    cy.get('[name="search_terms"]').eq(0).type(klaster.list[0].bidangIlmu)
    cy.get('.choices__list').contains(klaster.list[0].bidangIlmu).click()
    cy.get('[data-cy="id_tema_kegiatan"]').next().should('be.visible').click()
    cy.get('[name="search_terms"]').eq(1).type(klaster.list[0].temaKegiatan)
    cy.get('.choices__list').contains(klaster.list[0].temaKegiatan).click({ force: true });
    cy.get('[data-cy="id_sumber_pendanaan"]').next().should('be.visible').click()
    cy.get('[name="search_terms"]').eq(2).type(klaster.list[0].sumberPendanaan)
    cy.get('.choices__list').contains(klaster.list[0].sumberPendanaan).click({ force: true });
    cy.get('[data-cy="id_klaster_pendanaan"]').next().should('be.visible').click()
    cy.get('[name="search_terms"]').eq(3).type(klaster.list[0].namaKlaster)
    cy.get('.choices__list').contains(klaster.list[0].namaKlaster).click({ force: true });
    cy.get('[data-cy="checkbox-multiple__jenis_output_penelitian"]').contains('Draft Buku').click()
    cy.get('[data-cy="checkbox-multiple__jenis_output_penelitian"]').contains('Dokumen Business Plan').click()
    cy.get('[data-cy="apakah_berkontribusi_bidang_ilmu"]').next().contains('Iya, berkontribusi').click()

    cy.contains('Tambahkan Anggota').should('be.visible').click()
    cy.get('[data-cy="member_type"]').next().contains('Dosen').click();
    cy.get('[data-cy="id_user"]').next().should('be.visible').click()
    cy.get('[name="search_terms"]').eq(4).type('Kurt Cobain')
    // cy.get('[name="search_terms"]').eq(4).type(anggota.list[0].namaAnggota)
    cy.get('.choices__list').contains('14043 - Kurt Cobain (Eksternal)').click({ force: true })
    cy.contains('Tambahkan Anggota').should('be.visible').click().wait(1000)

    cy.get('[data-name="isian_proposal__penelitian__1"]').should('be.visible').type(pendanaan.jeff.judul)
    cy.get('[data-name="isian_proposal__penelitian__2"]').should('be.visible').type(pendanaan.jeff.latar)
    cy.get('[data-name="isian_proposal__penelitian__3"]').should('be.visible').type(pendanaan.jeff.rumusan)
    cy.get('[data-name="isian_proposal__penelitian__4"]').should('be.visible').type(pendanaan.jeff.tujuan)
    cy.get('[data-name="isian_proposal__penelitian__5"]').should('be.visible').type(pendanaan.jeff.kajian)
    cy.get('[data-name="isian_proposal__penelitian__6"]').should('be.visible').type(pendanaan.jeff.konsep)
    cy.get('[data-name="isian_proposal__penelitian__7"]').should('be.visible').type(pendanaan.jeff.metode)
    cy.get('[data-name="isian_proposal__penelitian__8"]').should('be.visible').type(pendanaan.jeff.rencana)
    cy.get('[data-name="isian_proposal__penelitian__9"]').should('be.visible').type(pendanaan.jeff.pustaka)
    cy.get('[name="id_dokumen_proposal"]').attachFile(fileproposal)
    
    // //
    cy.get('[data-cy="nominal_anggaran_diajukan"]').type(pendanaan.jeff.biaya)
    cy.get('[data-cy="id_dokumen_rab"]').attachFile(filerab)
    cy.get('[data-cy="nama_pemilik_rekening"]').type(pendanaan.jeff.pemilikRek)
    cy.get('[data-cy="nama_bank"]').type(pendanaan.jeff.bank)
    cy.get('[data-cy="nomor_rekening"]').type(pendanaan.jeff.rek)
    cy.get('[data-cy="cabang_bank"]').type(pendanaan.jeff.cabang)
    cy.get('[data-cy="id_foto_tabungan"]').attachFile(filetabungan);
    cy.get('#check-snk').click()
    //
})