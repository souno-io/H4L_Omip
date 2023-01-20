"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      preloadList: [{
        left: 15,
        top: 10,
        bottom: 220,
        width: 40,
        height: 40,
        type: "round"
      }, {
        left: 60,
        right: 365,
        top: 10,
        bottom: 220,
        width: 180,
        height: 19,
        type: "rect"
      }, {
        left: 60,
        right: 365,
        top: 40,
        bottom: 220,
        width: 240,
        height: 19,
        type: "rect"
      }, {
        left: 60,
        right: 365,
        top: 70,
        bottom: 220,
        width: 200,
        height: 19,
        type: "rect"
      }],
      show: true
    };
  },
  onReady() {
    setTimeout(() => {
      this.show = false;
    }, 2e3);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    change(e) {
      console.log(e.nodes);
    }
  }
};
if (!Array) {
  const _easycom_fui_skeleton2 = common_vendor.resolveComponent("fui-skeleton");
  _easycom_fui_skeleton2();
}
const _easycom_fui_skeleton = () => "../../../../components/firstui/fui-skeleton/fui-skeleton.js";
if (!Math) {
  _easycom_fui_skeleton();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      outerClass: "fui-outer",
      preloadList: $data.preloadList
    }),
    c: $data.show
  }, $data.show ? {
    d: common_vendor.o($options.change),
    e: common_vendor.p({
      background: "#F1F4FA",
      outerClass: "fui-wrap"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/skeleton/skeleton.vue"]]);
my.createPage(MiniProgramPage);
