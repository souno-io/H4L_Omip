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
    end(e) {
      console.log(e);
      this.fui.toast(`\u8BA1\u65F6\u7ED3\u675F\uFF0C\u65F6\u95F4\uFF1A${e.totalSeconds}s`);
    },
    handleClick(e) {
      let index = e.detail.index;
      if (index == 0) {
        this.$refs.timer.startTiming();
      } else if (index == 1) {
        this.$refs.timer.endTimer();
      } else {
        this.$refs.timer.resetTimer();
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_timer2 = common_vendor.resolveComponent("fui-timer");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_timer2 + _easycom_fui_icon2 + _easycom_fui_grid_item2 + _easycom_fui_grid2)();
}
const _easycom_fui_timer = () => "../../../../components/firstui/fui-timer/fui-timer.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_grid_item = () => "../../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_grid = () => "../../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_timer + _easycom_fui_icon + _easycom_fui_grid_item + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.end),
    c: common_vendor.p({
      maxTime: 20
    }),
    d: common_vendor.o($options.end),
    e: common_vendor.p({
      isColon: false,
      maxTime: 40
    }),
    f: common_vendor.o($options.end),
    g: common_vendor.p({
      background: "#465CFF",
      color: "#fff",
      colonColor: "#465CFF",
      isMs: true,
      msWidth: "40",
      maxTime: 180
    }),
    h: common_vendor.o($options.end),
    i: common_vendor.p({
      isMs: true,
      autoStart: false
    }),
    j: common_vendor.p({
      name: "play"
    }),
    k: common_vendor.p({
      backgroundColor: "#fff"
    }),
    l: common_vendor.p({
      name: "suspend"
    }),
    m: common_vendor.p({
      backgroundColor: "#fff",
      index: 1
    }),
    n: common_vendor.p({
      name: "refresh"
    }),
    o: common_vendor.p({
      backgroundColor: "#fff",
      index: 2
    }),
    p: common_vendor.o($options.handleClick)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/timer/timer.vue"]]);
my.createPage(MiniProgramPage);
