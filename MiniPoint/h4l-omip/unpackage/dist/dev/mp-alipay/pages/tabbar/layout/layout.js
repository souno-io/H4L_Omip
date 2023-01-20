"use strict";
const pages_tabbar_layout_index = require("./index.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      layoutData: pages_tabbar_layout_index.layoutData,
      resUrl: this.fui.resUrl()
    };
  },
  methods: {
    href(page) {
      if (page) {
        this.fui.href(page);
      } else {
        this.fui.href("/pages/common/coding/coding");
      }
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  },
  onShareAppMessage() {
    return {
      title: "First UI\u7EC4\u4EF6\u5E93"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.layoutData, (item, index, i0) => {
      return {
        a: `${$data.resUrl}/layout/img_${item.src}_3x.png`,
        b: item.background,
        c: common_vendor.t(item.cn),
        d: common_vendor.t(item.en),
        e: common_vendor.o(($event) => $options.href(item.page)),
        f: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/tabbar/layout/layout.vue"]]);
_sfc_main.__runtimeHooks = 2;
my.createPage(MiniProgramPage);
