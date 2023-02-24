import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/drgs/single_disease/`,
		name: "获取病种",
		get: async function () {
			return await http.get(this.url);
		}
	},
	details: {
		url: `${config.API_URL}/drgs/single_disease/`,
		name: "获取病种数据详情",
		get: async function (params) {
			return await http.get(this.url + params.id + '/query', params);
		}
	},
	add: {
		url: `${config.API_URL}/drgs/single_disease/`,
		name: "添加病种",
		post: async function (data) {
			return await http.post(this.url, data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	},
	edit: {
		url: `${config.API_URL}/drgs/single_disease/`,
		name: "编辑病种",
		patch: async function (data) {
			return await http.patch(this.url + data.id + '/', data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	},
	delete: {
		url: `${config.API_URL}/drgs/single_disease/`,
		name: "删除病种",
		delete: async function (data) {
			return await http.delete(this.url + data.id + '/', data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	}
}
