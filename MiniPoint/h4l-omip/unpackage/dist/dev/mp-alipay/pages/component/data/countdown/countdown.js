"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: 0
    };
  },
  onReady() {
    setTimeout(() => {
      this.value = 20;
    }, 2e3);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    end(e) {
      console.log(e);
      this.fui.toast("\u5012\u8BA1\u65F6\u7ED3\u675F~");
    },
    handleClick(e) {
      let index = e.detail.index;
      if (index == 0) {
        this.$refs.countdown.startCountdown();
      } else if (index == 1) {
        this.$refs.countdown.endCountdown(true);
      } else {
        this.$refs.countdown.resetCountdown();
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_count_down2 = common_vendor.resolveComponent("fui-count-down");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_count_down2 + _easycom_fui_icon2 + _easycom_fui_grid_item2 + _easycom_fui_grid2)();
}
const _easycom_fui_count_down = () => "../../../../components/firstui/fui-count-down/fui-count-down.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_grid_item = () => "../../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_grid = () => "../../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_count_down + _easycom_fui_icon + _easycom_fui_grid_item + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.end),
    c: common_vendor.p({
      value: $data.value
    }),
    d: common_vendor.o($options.end),
    e: common_vendor.p({
      isColon: false,
      borderColor: "transparent",
      background: "transparent",
      value: 3600
    }),
    f: common_vendor.o($options.end),
    g: common_vendor.p({
      isDays: true,
      isColon: false,
      borderColor: "transparent",
      background: "transparent",
      value: 244800
    }),
    h: common_vendor.o($options.end),
    i: common_vendor.p({
      isHours: false,
      isMinutes: false,
      isColon: false,
      unitEn: true,
      borderColor: "transparent",
      background: "transparent",
      value: 180
    }),
    j: common_vendor.o($options.end),
    k: common_vendor.p({
      background: "#465CFF",
      color: "#fff",
      colonColor: "#465CFF",
      borderColor: "#465CFF",
      isMs: true,
      msWidth: "40",
      value: 3600
    }),
    l: common_vendor.o($options.end),
    m: common_vendor.p({
      background: "#333",
      color: "#fff",
      colonColor: "#333",
      isMs: true,
      msWidth: "36",
      value: 30,
      autoStart: false
    }),
    n: common_vendor.p({
      name: "play"
    }),
    o: common_vendor.p({
      backgroundColor: "#fff"
    }),
    p: common_vendor.p({
      name: "suspend"
    }),
    q: common_vendor.p({
      backgroundColor: "#fff",
      index: 1
    }),
    r: common_vendor.p({
      name: "refresh"
    }),
    s: common_vendor.p({
      backgroundColor: "#fff",
      index: 2
    }),
    t: common_vendor.o($options.handleClick)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/countdown/countdown.vue"]]);
my.createPage(MiniProgramPage);
