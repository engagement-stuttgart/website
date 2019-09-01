module.exports = {
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
