import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
Given("User Navigate to recast studio login page",function(){
    cy.visit('https://app.recast.studio/auth/login/')
})
When("User logged in using {string}",(username) => {
    cy.get('#login-form_email').type(username)
})
And("Password as {word}", (password) => {
    cy.get('#login-form_password').type(password)
})
And("User clicks on submit button", () => {
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
 
})

And("wait for load dashboard or home page", () => {
    cy.wait(9000)
 
})

Then("Home page should be displayed and validate it", () => {
    cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text',"Create New Project")
    cy.get('.ant-typography').eq(4).should('have.text',"Create New Project")

})




Given("User Navigate to recast studio login page",function(){
    cy.visit('https://app.recast.studio/auth/login/')
})
When("User logged in using {word}",(username) => {
    cy.get('#login-form_email').type(username)
})
And("Password as {word}", (password) => {
    cy.get('#login-form_password').type(password)
})
And("User clicks on submit button", () => {
    cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
 
})

And("wait for load dashboard or home page", () => {
    cy.wait(7000)
 
})

Then("login page should be displayed and validate it", () => {
    cy.get('.ant-form-item-control-input-content').eq(4).should('contain',"Or") 
})
