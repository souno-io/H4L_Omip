"use strict";
const common_vendor = require("./vendor.js");
const components_firstui_fuiRequest_index = require("../components/firstui/fui-request/index.js");
components_firstui_fuiRequest_index.http.create({
  host: "https://ffa.firstui.cn",
  header: {}
});
components_firstui_fuiRequest_index.http.interceptors.request.use((config) => {
  let token = common_vendor.index.getStorageSync("firstui_token") || "testToken";
  if (config.header) {
    config.header["token"] = token;
  } else {
    config.header = {
      "token": token
    };
  }
  return config;
});
components_firstui_fuiRequest_index.http.interceptors.response.use((response) => {
  return response;
});
