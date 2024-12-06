/// <reference types="Cypress"/>

describe('handle dropdown',()=>{
 it('dropdown with select',()=>{
 
    cy.visit("https://www.zoho.com/commerce/free-demo.html")
    cy.get('#zcf_address_country')
    .select('Italy')
    .should('have.value','Italy')
 })
 //BootStrap Element Interaction
 it('dropdown without select',()=>{
 
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Italy').type('{enter}')
    cy.get('#select2-billing_country-container').should('have.text','Italy')
    
 }) 

 it('auto suggested dropdown',()=>{
 
    cy.visit("https://www.wikipedia.org/")
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click()

 }) 

 it.only('dynamic dropdown',()=>{
 
    cy.visit("https://www.google.com/")
    cy.get("textarea[name='q']").type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.length','13')
    cy.get('div.wM6W7d>span').each(($el,index,$list)=>{

        if ($el.text()=='cypress automation tutorial') {

            cy.wrap($el).click()
            
        }

    })
    cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')
        
 }) 


})