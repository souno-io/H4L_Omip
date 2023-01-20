"use strict";
const common_vendor = require("../common/vendor.js");
require("../common/fui-request.js");
const components_firstui_fuiRequest_index = require("../components/firstui/fui-request/index.js");
const store = common_vendor.createStore({
  state: {
    version: "1.6.0",
    theme: common_vendor.index.getStorageSync("fui_theme") || "light",
    status: 0
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme || "light";
    },
    setStatus(state, status) {
      state.status = status;
    }
  },
  actions: {
    getStatus: async function({
      commit,
      state
    }) {
      return await new Promise((resolve, reject) => {
        if (state.status == 1) {
          resolve(true);
        } else {
          let platform = "wx";
          platform = "ali";
          components_firstui_fuiRequest_index.http.get(`/api/main/site-status/${platform}`, {
            brief: true,
            showLoading: false,
            errorMsg: ""
          }).then((res) => {
            if (res.succeeded && res.data == 1) {
              commit("setStatus", 1);
              resolve(true);
            } else {
              resolve(false);
            }
          }).catch((e) => {
            reject(false);
          });
        }
      });
    }
  }
});
exports.store = store;
