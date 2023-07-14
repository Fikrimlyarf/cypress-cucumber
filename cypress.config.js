
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  video: false,
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
      on("file:preprocessor", bundler)
      await addCucumberPreprocessorPlugin(on, config)
      return config
    },  
  specPattern: "**/*.feature",
  baseUrl: "http://localhost/siacloud/gate/login"
  },
});

