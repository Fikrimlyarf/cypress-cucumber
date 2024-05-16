import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const filesimilarity = 'file upload/lorem-ipsum.pdf'

When ('User melihat detail proposal untuk penilaian administrasi', ()=> {
    cy.get('td').contains('2024')
      .parent()
      .find('.btn.btn_outline.btn_xs').first().click()
    // .then((data)=>{cy.log(data)})
})

When ('User mengisi aspek similairy', ()=> {
    cy.get('td').contains('Similarity Proposal')
      .parent()
      .find('.btn.btn_outline.btn_xs.btn_icon').click()
    cy.get('#form-control-penilaian_index_similarity').type('20')
    cy.get('#form-control-id_dokumen_penilaian_similarity').attachFile(filesimilarity)
    cy.contains('Simpan').click()
    cy.get('.alert_success').should('contain','Berhasil memberikan penilaian untuk Similarity Proposal.')
})

When ('User mengisi aspek ai', ()=> {
    cy.get('td').contains('Artificial Intelligence')
      .parent()
      .find('.btn.btn_outline.btn_xs.btn_icon').click()
    cy.get('#form-control-penilaian_index_ai').type('30')
    cy.get('#form-control-id_dokumen_penilaian_ai').attachFile(filesimilarity)
    cy.get('.btn.btn_primary').last().click()
    cy.get('.alert_success').should('contain','Berhasil memberikan penilaian untuk Artificial Intelligence.')
})

When ('User menentukan reviewer', ()=> {
    cy.get('#modal-tambah-reviewer > .modal__wrapper > form > .modal__body > .modal__content-input > :nth-child(1) > .form-control__group > .choices > .choices__inner').click()
    cy.get('.choices__list').contains('0650589 - Mick Jagger (Internal)').click();
    cy.get('#form-control-id_dokumen_sk').attachFile(filesimilarity)
    cy.contains('Simpan').click()
    cy.get('.alert_success').should('contain','Berhasil menambahkan reviewer')
})