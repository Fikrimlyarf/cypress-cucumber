# cypress-cucumber Installation

Untuk menginstall semua package

```bash
npm install
```

Untuk menginstall cypress

```bash
npm install cypress --save-dev
```

Untuk menginstall cucumber

```bash
npm i @badeball/cypress-cucumber-preprocessor
```

Untuk menginstall esbuild bundler by Gleb Bahmutov

```bash
npm i @bahmutov/cypress-esbuild-preprocessor
```
Untuk menginstall moment.js
```bash
npm install moment --save-dev
```

Setelah menginstal paket-paket ini, Anda perlu mengonfigurasi Cypress untuk menggunakan plugin. Konfigurasi pada file cypress config akan terlihat seperti ini:

```bash
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  experimentalStudio: true,
  reporter: 'cypress-multi-reporters  ',
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
    specPattern: "cypress/**/*.feature",
    baseUrl: "your url"
  },
  
});

```

Pada package.json ditambahkan untuk step definition (disesuaikan letaknya)
```
"cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/*.js"
  }
```

