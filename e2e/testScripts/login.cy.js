describe('Login to orange HRM ', () => {

  before(()=>{
    cy.visit('/')
    cy.viewport(1280,800)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })

  });
    it('login with username and password positive', () => {
     
      cy.get("input[name='username']").type("Admin");
      cy.get("input[name='password']").type("admin123");
      cy.get("button[type='submit']").click();
      cy.title().should('eq','OrangeHRM');
    });

    it('login with username and password Negative', () => {
     
      cy.get("input[name='username']").type("Admins");
      cy.get("input[name='password']").type("admin12345");
      cy.get("button[type='submit']").click();
      cy.title().should('eq','OrangeHRM');
    });

    after(()=>{

      cy.get("span[class='oxd-userdropdown-tab']").click({force:true});
      
      cy.contains("Logout").click({force:true});
      cy.title().should('eq','OrangeHRM');
     

    });
  })