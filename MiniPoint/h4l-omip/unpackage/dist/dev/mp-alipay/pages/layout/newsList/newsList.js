"use strict";
const pages_layout_newsList_index = require("./index.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      newsList: pages_layout_newsList_index.newsList
    };
  },
  methods: {
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    }
  }
};
if (!Array) {
  const _easycom_fui_overflow_hidden2 = common_vendor.resolveComponent("fui-overflow-hidden");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_lazyload2 = common_vendor.resolveComponent("fui-lazyload");
  const _easycom_fui_list2 = common_vendor.resolveComponent("fui-list");
  (_easycom_fui_overflow_hidden2 + _easycom_fui_text2 + _easycom_fui_lazyload2 + _easycom_fui_list2)();
}
const _easycom_fui_overflow_hidden = () => "../../../components/firstui/fui-overflow-hidden/fui-overflow-hidden.js";
const _easycom_fui_text = () => "../../../components/firstui/fui-text/fui-text.js";
const _easycom_fui_lazyload = () => "../../../components/firstui/fui-lazyload/fui-lazyload.js";
const _easycom_fui_list = () => "../../../components/firstui/fui-list/fui-list.js";
if (!Math) {
  (_easycom_fui_overflow_hidden + _easycom_fui_text + _easycom_fui_lazyload + _easycom_fui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.newsList, (item, index, i0) => {
      return common_vendor.e({
        a: "10cf615e-0-" + i0,
        b: common_vendor.p({
          text: item.title,
          size: 36,
          rows: 1
        }),
        c: item.isTop
      }, item.isTop ? {
        d: "10cf615e-1-" + i0,
        e: common_vendor.p({
          padding: ["0", "20rpx", "0", "0"],
          text: "\u7F6E\u9876",
          size: 25,
          color: "#FF2B2B"
        })
      } : {}, {
        f: "10cf615e-2-" + i0,
        g: common_vendor.p({
          padding: ["0", "20rpx", "0", "0"],
          text: item.source,
          size: 25,
          color: "#7F7F7F"
        }),
        h: "10cf615e-3-" + i0,
        i: common_vendor.p({
          text: `${item.comment}\u8BC4\u8BBA`,
          size: 25,
          color: "#7F7F7F"
        }),
        j: index
      });
    }),
    c: common_vendor.f($data.newsList, (item, index, i0) => {
      return common_vendor.e({
        a: "10cf615e-5-" + i0 + "," + ("10cf615e-4-" + i0),
        b: common_vendor.p({
          text: item.title,
          size: 36,
          rows: 3
        }),
        c: item.imageList && item.imageList.length
      }, item.imageList && item.imageList.length ? {
        d: common_vendor.f(item.imageList, (src, idx, i1) => {
          return {
            a: idx,
            b: "10cf615e-6-" + i0 + "-" + i1 + "," + ("10cf615e-4-" + i0),
            c: common_vendor.p({
              src,
              width: item.imageList.length > 1 ? 200 : 400,
              height: item.imageList.length > 1 ? 200 : 0,
              marginRight: "20",
              mode: "aspectFill"
            })
          };
        })
      } : {}, {
        e: item.isTop
      }, item.isTop ? {
        f: "10cf615e-7-" + i0 + "," + ("10cf615e-4-" + i0),
        g: common_vendor.p({
          padding: ["0", "20rpx", "0", "0"],
          text: "\u7F6E\u9876",
          size: 25,
          color: "#FF2B2B"
        })
      } : {}, {
        h: "10cf615e-8-" + i0 + "," + ("10cf615e-4-" + i0),
        i: common_vendor.p({
          padding: ["0", "20rpx", "0", "0"],
          text: item.source,
          size: 25,
          color: "#7F7F7F"
        }),
        j: "10cf615e-9-" + i0 + "," + ("10cf615e-4-" + i0),
        k: common_vendor.p({
          text: `${item.comment}\u8BC4\u8BBA`,
          size: 25,
          color: "#7F7F7F"
        }),
        l: index,
        m: "10cf615e-4-" + i0
      });
    }),
    d: common_vendor.p({
      topBorder: false,
      bottomBorder: true,
      bottomLeft: "32",
      bottomRight: "32"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/newsList/newsList.nvue"]]);
my.createPage(MiniProgramPage);
