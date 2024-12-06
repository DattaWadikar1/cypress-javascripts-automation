describe("Action",()=>{
    beforeEach(()=>{

        cy.visit("https://example.cypress.io/commands/actions")

    })

    it("Type into Dom Element",()=>{

        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value','fake@email.com')
        cy.get('.action-email').type('{leftarrow},{rightarrow},{uparrow},{downarrow}')
        cy.get('.action-email').type('{del},{selectall},{backspace}')


              // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.1 sec
      .type('slow.typing@email.com', { delay: 100 })
      .should('have.value', 'slow.typing@email.com')



    })

})