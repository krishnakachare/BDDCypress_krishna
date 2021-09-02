import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I move on recast login page",function(){
    cy.visit('https://app.recast.studio/auth/login/')
})
When("I type username and password",() => {
    cy.get('#login-form_email').type('tecure.shrikrishna96@gmail.com')
    cy.get('#login-form_password').type('Shrikrishna_@2020')
})
And("I click on login button", () => {
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
})

And("I waiting for load login page", () => {
    cy.wait(7000)
})

Then("I should navigate to reacast dashboard and validate it", () => {
    cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text',"Create New Project")
    cy.get('.ant-typography').eq(4).should('have.text',"Create New Project")

    
})



Given("I navigate to the recast login page",function(){
    cy.visit('https://app.recast.studio/auth/login/')
})
When("I type invalid username and password",() => {
    cy.get('#login-form_email').type('tecure.shrikrishna96@gmail')
    cy.get('#login-form_password').type('Shrikrishna')
})
And("I click on login button", () => {
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
})

Then("I should not be logged in and validate it", () => {
    cy.get('.ant-form-item-control-input-content').eq(4).should('contain',"Or")   
})














