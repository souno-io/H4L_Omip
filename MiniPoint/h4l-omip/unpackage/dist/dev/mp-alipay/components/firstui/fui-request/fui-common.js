"use strict";
const common_vendor = require("../../../common/vendor.js");
const base = {
  config() {
    return {
      host: "",
      url: "",
      data: {},
      header: {
        "content-type": "application/json"
      },
      method: "POST",
      timeout: 0,
      dataType: "json",
      prevent: false,
      keys: [],
      brief: false,
      cancelToken: "",
      showLoading: true,
      loadingText: "",
      errorMsg: "\u7F51\u7EDC\u4E0D\u7ED9\u529B\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E\uFF01",
      withCredentials: false,
      firstIpv4: false
    };
  },
  getOptions(config) {
    let options = {
      ...config
    };
    ["host", "timeout", "prevent", "keys", "brief", "cancelToken", "showLoading", "loadingText", "errorMsg"].forEach((item) => {
      delete options[item];
    });
    return options;
  },
  merge(a, b) {
    return Object.assign({}, a, b);
  },
  mergeConfig(defaultConfig, config, init) {
    let header = base.merge(defaultConfig.header, config.header || {});
    let params = base.merge(defaultConfig, config);
    params.header = header;
    if (!init) {
      let url = base.combineURLs(params.host, params.url);
      params.url = url;
    }
    return params;
  },
  combineURLs(host, target) {
    return host ? host.replace(/\s+/g, "") + "/" + target.replace(/\s+/g, "").replace(/^\/+/, "") : target;
  },
  toast(text, duration, success) {
    text && common_vendor.index.showToast({
      title: text,
      icon: success ? "success" : "none",
      duration: duration || 2e3
    });
  },
  showLoading(title, mask = true) {
    common_vendor.index.showLoading({
      mask,
      title: title || "\u8BF7\u7A0D\u5019..."
    });
  }
};
exports.base = base;
