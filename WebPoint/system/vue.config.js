const {defineConfig} = require('@vue/cli-service')
const path = require('path')
const ps = process.cwd().split('\\')
const projectName = ps[ps.length-1]  //项目名称

console.log("dirname",path.resolve(__dirname))  //vue_code/_common/config 当前目录

module.exports = defineConfig({
	//设置为空打包后不分更目录还是多级目录
	publicPath: process.env.NODE_ENV === 'production' ? `/static/${projectName}` : '',
	//build编译后存放静态文件的目录
	//生产环境构建文件的目录名
	outputDir: process.env.NODE_ENV === 'production' ? `../../BackPoint/h4l_omip/static/${projectName}` : 'dist', //打包配置
	//build编译后存放静态文件的目录
	// assetsDir: process.env.NODE_ENV === 'production' ? '../../static/system' : 'static',
	// build编译后不生成资源MAP文件
	productionSourceMap: false,
	indexPath: process.env.NODE_ENV === 'production' ? `../../templates/${projectName}/index.html` : 'index.html',

	// 开发服务,build后的生产模式还需nginx代理
	devServer: {
		allowedHosts: 'all',
		open: false, //运行后自动打开浏览器
		port: process.env.VUE_APP_PORT, //挂载端口
		proxy: {
			'/api': {
				target: process.env.VUE_APP_API_BASEURL,
				ws: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},

	chainWebpack: config => {
		// 移除 prefetch 插件
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
		config.resolve.alias.set('vue-i18n', 'vue-i18n/dist/vue-i18n.cjs.js');
	},

	configureWebpack: {
		//性能提示
		performance: {
			hints: false
		},
		optimization: {
			splitChunks: {
				chunks: "all",
				automaticNameDelimiter: '~',
				name: "scuiChunks",
				cacheGroups: {
					//第三方库抽离
					vendor: {
						name: "modules",
						test: /[\\/]node_modules[\\/]/,
						priority: -10
					},
					elicons: {
						name: "elicons",
						test: /[\\/]node_modules[\\/]@element-plus[\\/]icons-vue[\\/]/
					},
					tinymce: {
						name: "tinymce",
						test: /[\\/]node_modules[\\/]tinymce[\\/]/
					},
					echarts: {
						name: "echarts",
						test: /[\\/]node_modules[\\/]echarts[\\/]/
					},
					xgplayer: {
						name: "xgplayer",
						test: /[\\/]node_modules[\\/]xgplayer.*[\\/]/
					},
					codemirror: {
						name: "codemirror",
						test: /[\\/]node_modules[\\/]codemirror[\\/]/
					}
				}
			}
		}
	}
})
