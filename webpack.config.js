module.exports = {
	entry: './index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ["style", "css", "sass"]
		},{
			test: /\.json$/,
			loaders: ["json-loader"]
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				cacheDirectory: true,
				presets: ['react', 'es2015']
			}
		}]
	},
	resolve: {
		alias: {
			moment: __dirname+"/bower_components/moment/min/moment-with-locales.min.js",
			timezone: __dirname+"/bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.min.js"
		},
	}
}