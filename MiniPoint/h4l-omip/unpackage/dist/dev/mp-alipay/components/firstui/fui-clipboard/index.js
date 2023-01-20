"use strict";
const common_vendor = require("../../../common/vendor.js");
/*!
 * 剪贴板
 *
 * 官网地址：https://firstui.cn/
 * 文档地址：https://doc.firstui.cn/
 */
const getClipboardData = function(data, callback, e) {
  common_vendor.index.setClipboardData({
    data,
    success(res) {
      "function" == typeof callback && callback(true);
    },
    fail(res) {
      "function" == typeof callback && callback(false);
    }
  });
};
const $fui = {
  getClipboardData
};
exports.$fui = $fui;
