const { defineConfig } = require('cypress')
// devUrl: 'http://localhost:5173',
// prodUrl: 'https://bryan-martinez-portfolio.vercel.app/'

module.exports = defineConfig({
	watchForFileChanges: false,
	e2e: {
		baseUrl: 'http://localhost:5173',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
