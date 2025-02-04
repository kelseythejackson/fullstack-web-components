import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 30000,
  viewportWidth: 1000,
  viewportHeight: 568,
  includeShadowDOM: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:6006',
  },
})
