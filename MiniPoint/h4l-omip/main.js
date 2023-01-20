// 本文件由FirstUI授权予叶兴（手机号： 1879  8 7 9 1 5 4  9，身份证尾号： 05 5 9 1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import App from './App'
import fui from './common/fui-app'
import http from './components/firstui/fui-request'
import fuiConfig from './components/firstui/fui-config'
import store from './store'

//初始化请求配置项
http.create({
	host: 'https://ffa.firstui.cn',
	header: {
		// 'content-type': 'application/x-www-form-urlencoded'
	}
})
//请求拦截
http.interceptors.request.use(config => {
	//请求之前可在请求头中加入token等信息
	let token = uni.getStorageSync('firstui_token') || 'testToken';
	if (config.header) {
		config.header['Authorization'] = token
	} else {
		config.header = {
			'Authorization': token
		}
	}
	return config
})
//响应拦截
http.interceptors.response.use(response => {
	//TODO
	return response
})

//全局组件配置
uni.$fui = fuiConfig

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.fui = fui
Vue.prototype.http = http

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(store)
	app.config.globalProperties.fui = fui;
	app.config.globalProperties.http = http;
	return {
		app
	}
}
// #endif