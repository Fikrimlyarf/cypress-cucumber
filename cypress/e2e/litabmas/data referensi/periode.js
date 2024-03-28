import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('Admin mengakses modul Litabmas', ()=>{
    cy.visit(Cypress.env('litabmas'));
    cy.get('');
})