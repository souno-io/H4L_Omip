"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabs: ["\u70ED\u95E8\u63A8\u8350", "\u65B0\u65F6\u4EE3", "\u61C2\u7403\u5E1D"],
      tabs2: [{
        name: "\u6807\u7B7E\u4E00"
      }, {
        name: "\u6807\u7B7E\u4E8C"
      }, {
        name: "\u6807\u7B7E\u4E09",
        badge: 1
      }, {
        name: "\u6807\u7B7E\u56DB"
      }, {
        name: "\u6807\u7B7E\u4E94"
      }, {
        name: "\u6807\u7B7E\u516D"
      }, {
        name: "\u6807\u7B7E\u4E03"
      }, {
        name: "\u6807\u7B7E\u516B",
        disabled: true
      }, {
        name: "\u6807\u7B7E\u4E5D"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_tabs2 = common_vendor.resolveComponent("fui-tabs");
  _easycom_fui_tabs2();
}
const _easycom_fui_tabs = () => "../../../../components/firstui/fui-tabs/fui-tabs.js";
if (!Math) {
  _easycom_fui_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      tabs: $data.tabs
    }),
    c: common_vendor.p({
      tabs: $data.tabs,
      selectedColor: "#FFB703",
      sliderBackground: "#FFB703"
    }),
    d: common_vendor.p({
      tabs: $data.tabs,
      short: false
    }),
    e: common_vendor.p({
      tabs: $data.tabs2,
      isDot: true,
      scroll: true,
      alignLeft: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/tabs/tabs.vue"]]);
my.createPage(MiniProgramPage);
