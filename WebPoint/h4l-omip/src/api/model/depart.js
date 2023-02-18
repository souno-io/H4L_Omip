import config from "@/config";
import http from "@/utils/request";

export default {
	add: {
		url: `${config.API_URL}/system/router/`,
		name: "添加角色",
		post: async function (data) {
			return await http.post(this.url, data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	},
	edit: {
		url: `${config.API_URL}/system/router/`,
		name: "编辑角色",
		patch: async function (data) {
			return await http.patch(this.url + data.id + '/', data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	},
	delete: {
		url: `${config.API_URL}/system/router/`,
		name: "删除角色",
		delete: async function (data) {
			return await http.delete(this.url + data.id + '/', data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	}
}
