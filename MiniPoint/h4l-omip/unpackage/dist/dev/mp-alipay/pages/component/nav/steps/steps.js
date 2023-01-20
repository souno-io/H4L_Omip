"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      items: [{
        title: "\u6CE8\u518C"
      }, {
        title: "\u6FC0\u6D3B\u90AE\u7BB1"
      }, {
        title: "\u6CE8\u518C\u5B8C\u6210"
      }],
      items2: [{
        title: "\u6CE8\u518C",
        text: "1"
      }, {
        title: "\u6FC0\u6D3B\u90AE\u7BB1",
        text: "2"
      }, {
        title: "\u6CE8\u518C\u5B8C\u6210",
        text: "3"
      }],
      items3: [{
        title: "STEP1",
        descr: "\u6B65\u9AA4\u4E00",
        text: "F"
      }, {
        title: "STEP2",
        descr: "\u6B65\u9AA4\u4E8C",
        text: "S"
      }, {
        title: "STEP3",
        descr: "\u6B65\u9AA4\u4E09",
        text: "T"
      }],
      items4: [{
        title: "STEP1",
        descr: "\u6B65\u9AA4\u4E00",
        src: "/static/images/common/logo.png"
      }, {
        title: "STEP2",
        descr: "\u6B65\u9AA4\u4E8C",
        src: "/static/images/common/img_logo.png"
      }, {
        title: "STEP3",
        descr: "\u6B65\u9AA4\u4E09",
        src: "/static/images/common/logo.png"
      }]
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    stepChange() {
      if (this.current === 2) {
        this.current = 0;
      } else {
        this.current++;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_steps2 = common_vendor.resolveComponent("fui-steps");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_steps2 + _easycom_fui_button2)();
}
const _easycom_fui_steps = () => "../../../../components/firstui/fui-steps/fui-steps.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_steps + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      items: $data.items,
      current: $data.current
    }),
    c: common_vendor.p({
      items: $data.items2,
      current: $data.current,
      activeColor: "#FF2B2B"
    }),
    d: common_vendor.p({
      items: $data.items2,
      current: $data.current,
      isMark: false
    }),
    e: common_vendor.p({
      items: $data.items3,
      current: $data.current
    }),
    f: common_vendor.p({
      items: $data.items3,
      current: $data.current,
      isWait: true,
      activeColor: "#FFB703"
    }),
    g: common_vendor.p({
      items: $data.items4,
      current: $data.current,
      radius: "24rpx"
    }),
    h: common_vendor.p({
      items: $data.items2,
      current: $data.current,
      direction: "column",
      padding: ["0", "32rpx"]
    }),
    i: common_vendor.o($options.stepChange),
    j: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "Next step",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/steps/steps.vue"]]);
my.createPage(MiniProgramPage);
