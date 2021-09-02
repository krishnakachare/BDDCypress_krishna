import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

//const url = 
Given('I open Google page', () => {
  cy.visit('https://google.com')
})


Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})