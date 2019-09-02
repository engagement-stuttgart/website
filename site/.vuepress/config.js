module.exports = {
	title: 'CityLab Stuttgart',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Projekt', link: '/projekt' },
			{ text: 'Ergebnisse', link: '/fortschritt' },
			{ text: 'Mitmachen', link: '/mitmachen' },
		]
	},
	plugins: [
		// 'clean-urls',
	],
	configureWebpack: {
		resolve: {
			alias: {
				'@images': 'images'
			}
		}
	}

}
