import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import dataMK from '../../../fixtures/siakad/mata kuliah/mata_kuliah.json'
import rps from '../../../fixtures/siakad/mata kuliah/detail_rps.json'
import eval from '../../../fixtures/siakad/mata kuliah/rencana_evaluasi.json'

const fileupload = 'file upload/lorem-ipsum.pdf'
const excelrps = 'file upload/Template Rincian RPS.xlsx'

When('Admin memilih mata kuliah {string}', (mk)=>{
    if(mk == 'Pengantar Teknologi Informasi'){
        cy.get('#collapseTahunKurikulum').contains(dataMK.thnkur).click()
        cy.get('.col-xs-8 > .input-group > .form-control').type('Pengantar Teknologi Informasi')
        cy.get('.input-group-btn > .btn-success').click()
        cy.get('table.table.table-bordered.table-striped.dataTable > tbody > tr > td').each(($el) => {
            if ($el.text() == '2020' && 'Teknik Informatika') {
              cy.get($el).parent().find('.btn.btn-info.btn-xs.btn-flat').last().click()
            }
          })
    }
})

When('Admin mengisi data {string}', (menu)=>{
  if(menu == 'Pemetaan CPMK'){
    cy.get('.list-unstyled.profile-nav').contains('Pemetaan CPMK').click();
    cy.get('#periode').select(dataMK.periode)
    dataMK.cpmk.forEach((cpmk) => {
      cy.get('.col-md-8 > .btn-success').click()
      cy.get('#i_kodecpmk').type(cpmk.kodecpmk)
      cy.get('#i_deskripsi_id').type(cpmk.cpmkIN)
      cy.get('#i_deskripsi_en').type(cpmk.cpmkEN)
      cy.get('#form_data > div > table > tbody').each(($el, index)=>{
        cy.get($el).children().each(($elchild, index)=>{
            if(index > 0 ){
                const temp = Math.random() > 0.66
                cy.log(Math.random())
                if(temp){
                    cy.get($elchild).find('label > div').invoke('addClass', 'checked');
                    cy.get($elchild).find('label > div').invoke('attr', 'aria-checked', true).click();
                }
            }
        });   
      });
      cy.get('.btn-success').click()      
    })

  } else if(menu == 'Detail RPS'){
      cy.get('.list-unstyled.profile-nav').contains('Detail RPS').click();
      cy.get('.btn.btn-warning.btn-sm').contains('Ubah RPS').click()
      cy.get('#tglcp').type('12-12-2022').tab()
      const deskripsimk = cy.get('#block-deskripsimk > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const deskripsimken = cy.get('#block-deskripsimken > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const tujuanmk  = cy.get('#block-tujuanmk > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const filebahanajar = cy.get('#block-filebahanajar > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const pustaka = cy.get('#block-pustaka > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const pustakapendukung = cy.get('#block-pustakapendukung > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const mediabelajarlunak = cy.get('#block-mediabelajarlunak > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      const mediabelajarkeras = cy.get('#block-mediabelajarkeras > .col-md-9 > .wysihtml5-sandbox').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
      
      deskripsimk.focus().realType(rps.deskripsimk)
      deskripsimken.focus().realType(rps.deskripsimken)
      tujuanmk.focus().realType(rps.tujuanmk)
      filebahanajar.focus().realType(rps.filebahanajar)
      pustaka.focus().realType(rps.pustaka)
      pustakapendukung.focus().realType(rps.pustakapendukung)
      mediabelajarlunak.focus().realType(rps.mediabelajarlunak)
      mediabelajarkeras.focus().realType(rps.mediabelajarkeras)

      cy.get('#block-filerps > .col-md-9 > input').attachFile(fileupload)
      cy.get('[data-type="save"]').click()

  } else if (menu == 'Renc. Pembelajaran'){
      cy.get('.list-unstyled.profile-nav').contains('Renc. Pembelajaran').click();
      cy.get('#select2-perioderps-container').click()
      cy.get('.select2-search__field').type(dataMK.periode)
      cy.get('#select2-perioderps-results').contains(dataMK.periode).click();
      cy.get('.btn.btn-warning.btn-sm').contains('Upload Excel').click()
      cy.get('#modal_rps').should('contain', 'Upload Excel Rincian RPS')
      cy.get('[name="excel"]').attachFile(excelrps);
      cy.get('.btn.btn-success').contains('Upload Excel').click()
      cy.get('.alert').should('contain' ,rps.alertrpsberhasil)

  } else if (menu == 'Metode Evaluasi'){
    cy.get('.list-unstyled.profile-nav').contains('Rencana Evaluasi').click();
    cy.get('#periode').select(dataMK.periode)
    cy.get('[data-type="edit"]').click();
    cy.get('#aktivitas_deskripsi').clear().type(eval.metodeaktivitas)
    cy.get('#proyek_deskripsi').clear().type(eval.metodeproyek)
    cy.get('#tugas_deskripsi').clear().type(eval.metodetugas)
    cy.get('#quiz_deskripsi').clear().type(eval.metodequiz)
    cy.get('#uts_deskripsi').clear().type(eval.metodeuts)
    cy.get('#uas_deskripsi').clear().type(eval.metodeuas)
    cy.get('[data-type="save"]').click();

  } else if (menu == 'Komposisi Nilai'){
    cy.get('.list-unstyled.profile-nav').contains('Rencana Evaluasi').click();
    cy.get('#periode').select(dataMK.periode)
    eval.nilai.forEach((komposisi)=>{
      cy.get('[data-type="tambahkomposisi"]').click()
      cy.get('#select2-i_unsurnilai-container').click()
      cy.get('.select2-search__field').type(komposisi.unsur)
      cy.get('#select2-i_unsurnilai-results').contains(komposisi.unsur).click()
      cy.get('#select2-i_metodeevaluasi-container').click()
      cy.get('.select2-search__field').type(komposisi.eval)
      cy.get('#select2-i_metodeevaluasi-results').contains(komposisi.eval).click()
      cy.get('#i_cpmk_71').clear().type(komposisi.cpmk1)
      cy.get('#i_cpmk_72').clear().type(komposisi.cpmk2)
        .parent().parent().find('[data-type="insertip"]').should('be.visible').click()
      cy.get('.alert-success').should('contain', eval.alertevalberhasil)
    })
    cy.get('#total > strong').should('have.text', '100,00%')
  }
})

When('Admin menghapus {string}', (menu)=>{
  if(menu == 'Komposisi Nilai'){
    cy.get('.list-unstyled.profile-nav').contains('Rencana Evaluasi').click();
    cy.get('#periode').select(dataMK.periode)
    cy.get('.table.table-bordered.table-striped.dataTable > tfoot').find('td').then((row)=>{
      for(let n = 1; n <= row.length; n++){
          cy.get('td').parent()
            .find('.btn.btn-danger.btn-xs.btn-flat').first().click()
          cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }
    })
  }else if(menu == 'Renc. Pembelajaran'){
    cy.get('.list-unstyled.profile-nav').contains('Renc. Pembelajaran').click();
    cy.get('#select2-perioderps-container').click()
    cy.get('.select2-search__field').type(dataMK.periode)
    cy.get('#select2-perioderps-results').contains(dataMK.periode).click();
    cy.get('.table.table-bordered.table-striped.dataTable > tbody').find('tr').then((row)=>{
      for(let n = 1; n <= row.length; n++){
          cy.get('td').parent()
            .find('.btn.btn-danger.btn-xs.btn-flat').first().click()
          cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }
    })
  }else if(menu == 'Pemetaan CPMK'){
    cy.get('.list-unstyled.profile-nav').contains('Pemetaan CPMK').click();
    cy.get('#periode').select(dataMK.periode)
    cy.get('.table.table-bordered.table-striped.dataTable > tbody').find('tr').then((row)=>{
      for(let n = 1; n <= row.length; n++){
          cy.get('td').parent()
            .find('.btn.btn-danger.btn-xs.btn-flat').first().click()
          cy.get('[data-bb-handler="confirm"]').should('be.visible').and('contain', 'Ya, Yakin').click()
      }
    })
  }
})
  