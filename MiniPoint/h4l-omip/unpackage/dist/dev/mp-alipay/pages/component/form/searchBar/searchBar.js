"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    search(e) {
      console.log(e.detail.value);
      this.fui.toast(`\u641C\u7D22\u5173\u952E\u8BCD:${e.detail.value}`);
    },
    onClick() {
      this.fui.toast("\u8DF3\u8F6C\u81F3\u641C\u7D22\u9875\u9762~");
    }
  }
};
if (!Array) {
  const _easycom_fui_search_bar2 = common_vendor.resolveComponent("fui-search-bar");
  _easycom_fui_search_bar2();
}
const _easycom_fui_search_bar = () => "../../../../components/firstui/fui-search-bar/fui-search-bar.js";
if (!Math) {
  _easycom_fui_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.search),
    c: common_vendor.o($options.search),
    d: common_vendor.p({
      background: "#ededed",
      radius: "36",
      searchColor: "#FFB703"
    }),
    e: common_vendor.o($options.search),
    f: common_vendor.p({
      isLeft: true,
      background: "#111",
      color: "#fff",
      inputBackground: "#222"
    }),
    g: common_vendor.o($options.onClick),
    h: common_vendor.p({
      disabled: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/searchBar/searchBar.vue"]]);
my.createPage(MiniProgramPage);
