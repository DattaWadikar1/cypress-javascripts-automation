const { should } = require("chai")
const { title } = require("process")

describe('My first Test',()=>{
    it('lauch browser',()=>{

        cy.visit('https://www.google.com/')
        cy.log("Browser launch ")
        expect(true).to.equal(true)

    })
})