var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// context: , // 上下文默认指向项目根目录
	// entry: './src/script/main.js',
	// entry: ['./src/script/main.js', './src/script/a.js'],
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js'
		// b: './src/script/b.js',
		// c: './src/script/c.js'
	},
	output: {
		path:__dirname+'/dist',
		// filename:'bundle.js'
		// filename: '[name]-[hash].js'
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http://geekxia.cn/'   // 当网站上线时，它会替换掉项目中的相对路径
	},
	module: {
		loaders: [
			{test: /\.css$/, loader:'style!css'},
			{test: /\.js$/, loader: 'jsx-loader'}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},

	// 单页面程序
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html',  // 指定模板
			// filename: 'index-[hash].html',
			filename: 'index.html',
			// inject: 'head'
			// inject: 'body',
			inject: false,
			title: 'webpack is good',  // 向模板传递参数
			date: new Date(),
			minfy: {
				removeComments: true,  // 压缩时删除注释
				collapseWhitespace: true  // 删除留白、空格和换行
			}
		})
	]

	// 多页面程序
	// plugins: [
	// 	new htmlWebpackPlugin({
	// 		filename:'a.html',
	// 		template: 'index.html',
	// 		inject: 'body',
	// 		title: 'this a html',
	// 		// chunks: ['main','a'],
	// 		excludeChunks: ['b','c']
	// 	}),
	// 	new htmlWebpackPlugin({
	// 		filename:'b.html',
	// 		template: 'index.html',
	// 		inject: 'body',
	// 		title: 'this b html',
	// 		// chunks: ['b'],
	// 		excludeChunks: ['a','c']
	// 	}),
	// 	new htmlWebpackPlugin({
	// 		filename:'c.html',
	// 		template: 'index.html',
	// 		inject: 'body',
	// 		title: 'this c html',
	// 		// chunks: ['c'],
	// 		excludeChunks: ['a','b']
	// 	})
	]
};