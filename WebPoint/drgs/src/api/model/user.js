import config from "@/config";
import http from "@/utils/request";

export default {
	add: {
		url: `${config.API_URL}/users/personal/`,
		name: "添加用户",
		post: async function (data) {
			return await http.post(this.url, data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	},
	edit: {
		url: `${config.API_URL}/users/personal/`,
		name: "编辑用户",
		patch: async function (data) {
			return await http.patch(this.url + data.id + '/', data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	},
	delete: {
		url: `${config.API_URL}/users/personal/`,
		name: "删除用户",
		delete: async function (data) {
			return await http.delete(this.url + data.id + '/', data, {
				headers: {
					//'response-status': 401
				}
			});
		}
	}
}
