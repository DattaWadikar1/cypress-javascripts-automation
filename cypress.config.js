const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  e2e: {
    specPattern: 'e2e/testScripts/*.cy.js', // Adjust the path and extensions as needed
    defaultCommandTimeout: 10000,
    retries: {
      runMode: 3,
      openMode: 2,
    },
    baseUrl:"https://opensource-demo.orangehrmlive.com/",
    
   
    
    supportFile:false,
  },
});
