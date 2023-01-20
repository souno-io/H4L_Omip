// 本文件由FirstUI授权予叶兴（手机号：187   9 8  791  5  49，身份证尾号： 05 5  91 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
// #ifdef MP
import http from '../common/fui-request'
// #endif
// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
			// #endif

			// #ifdef VUE3
			import {
				createStore
			} from 'vuex'
			const store = createStore({
				// #endif
				state: {
					//当前版本
					version: "1.6.0",
					//主题 light、dark
					theme: uni.getStorageSync('fui_theme') || 'light',
					status: 0
				},
				mutations: {
					setTheme(state, theme) {
						state.theme = theme || 'light'
					},
					setStatus(state, status) {
						state.status = status
					}
				},
				actions: {
					getStatus: async function({
						commit,
						state
					}) {
						return await new Promise((resolve, reject) => {
							// #ifndef MP
							commit('setStatus', 1)
							resolve(true)
							// #endif
							// #ifdef MP
							if (state.status == 1) {
								resolve(true)
							} else {
								//wx，ali，baidu，toutiao，qq
								let platform = 'wx';

								// #ifdef MP-ALIPAY
								platform = 'ali';
								// #endif

								// #ifdef MP-BAIDU
								platform = 'baidu';
								// #endif

								// #ifdef MP-TOUTIAO
								platform = 'toutiao';
								// #endif

								// #ifdef MP-QQ
								platform = 'qq';
								// #endif
								http.get(`/api/main/site-status/${platform}`, {
									brief: true,
									showLoading: false,
									errorMsg: ''
								}).then(res => {
									if (res.succeeded && res.data == 1) {
										commit('setStatus', 1)
										resolve(true)
									} else {
										resolve(false)
									}
								}).catch(e => {
									reject(false)
								})
							}
							// #endif
						})
					}
				}
			})

			export default store