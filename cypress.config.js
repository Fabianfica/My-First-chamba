const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 1200000,
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
