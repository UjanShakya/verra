const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e:{
      baseURL: "https://projecthub.verra.org/",
      viewportWidth: 1280,
      viewportHeight: 720,
      fixturesFolder: "cypress/fixtures",
      supportFolder: "cypress/support",
      experimentalModifyObstructiveThirdPartyCode: true,

    }
});
