"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: ["2021-01-06", "2021-01-16", "2021-01-26", "2021-02-08", "2022-01-08", "2022-01-10", "2022-01-20"],
      show: false,
      result: ""
    };
  },
  onLoad() {
    common_vendor.index.showLoading({
      title: "\u8BF7\u7A0D\u5019..."
    });
    setTimeout(() => {
      common_vendor.index.hideLoading();
    }, 500);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    change(e) {
      console.log(e);
      this.fui.toast(e.value);
    },
    change1(e) {
      console.log(e);
      this.fui.toast(e.value.join(","));
    },
    btnSelect() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
    },
    change2(e) {
      this.result = JSON.stringify(e);
      this.closePopup();
    }
  }
};
if (!Array) {
  const _easycom_fui_calendar2 = common_vendor.resolveComponent("fui-calendar");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_bottom_popup2 = common_vendor.resolveComponent("fui-bottom-popup");
  (_easycom_fui_calendar2 + _easycom_fui_button2 + _easycom_fui_icon2 + _easycom_fui_bottom_popup2)();
}
const _easycom_fui_calendar = () => "../../../../components/firstui/fui-calendar/fui-calendar.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_bottom_popup = () => "../../../../components/firstui/fui-bottom-popup/fui-bottom-popup.js";
if (!Math) {
  (_easycom_fui_calendar + _easycom_fui_button + _easycom_fui_icon + _easycom_fui_bottom_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.change),
    c: common_vendor.o($options.change1),
    d: common_vendor.p({
      type: "2",
      showLunar: true
    }),
    e: common_vendor.p({
      type: "2",
      language: "en",
      value: $data.value,
      disabled: true,
      minDate: "2021-01-01",
      maxDate: "2023-12-31"
    }),
    f: common_vendor.o($options.btnSelect),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65E5\u671F\u533A\u95F4\u9009\u62E9",
      bold: true,
      margin: ["48rpx", "0", "0"]
    }),
    h: common_vendor.t($data.result),
    i: common_vendor.o($options.change2),
    j: common_vendor.p({
      type: "3",
      showLunar: true,
      showBtn: true
    }),
    k: common_vendor.p({
      name: "close",
      size: 48
    }),
    l: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    m: common_vendor.p({
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/calendar/calendar.vue"]]);
my.createPage(MiniProgramPage);
