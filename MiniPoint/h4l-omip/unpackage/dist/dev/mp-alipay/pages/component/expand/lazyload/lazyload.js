"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: ""
    };
  },
  onLoad() {
    setTimeout(() => {
      this.src = "https://res.firstui.cn/static/images/common/logo.png";
    }, 3e3);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_lazyload2 = common_vendor.resolveComponent("fui-lazyload");
  _easycom_fui_lazyload2();
}
const _easycom_fui_lazyload = () => "../../../../components/firstui/fui-lazyload/fui-lazyload.js";
if (!Math) {
  _easycom_fui_lazyload();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      src: "https://res.firstui.cn/static/images/common/img_logo.png"
    }),
    c: common_vendor.p({
      src: "https://res.firstui.cn/static/images/common/img_logo.png"
    }),
    d: common_vendor.p({
      src: $data.src
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/lazyload/lazyload.vue"]]);
my.createPage(MiniProgramPage);
