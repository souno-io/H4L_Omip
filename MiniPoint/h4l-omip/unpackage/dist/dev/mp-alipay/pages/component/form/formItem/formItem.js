"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      radioItems: [
        {
          name: "18~28\u5C81",
          value: "1",
          checked: true
        },
        {
          name: "29~40\u5C81",
          value: "2",
          checked: false
        }
      ],
      checkboxItems: [{
        name: "\u7BEE\u7403",
        value: "1",
        checked: true
      }, {
        name: "\u4E52\u4E53\u7403",
        value: "2",
        checked: false
      }]
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_form_item2 = common_vendor.resolveComponent("fui-form-item");
  const _easycom_fui_switch2 = common_vendor.resolveComponent("fui-switch");
  const _easycom_fui_checkbox2 = common_vendor.resolveComponent("fui-checkbox");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_checkbox_group2 = common_vendor.resolveComponent("fui-checkbox-group");
  const _easycom_fui_radio2 = common_vendor.resolveComponent("fui-radio");
  const _easycom_fui_radio_group2 = common_vendor.resolveComponent("fui-radio-group");
  const _easycom_fui_rate2 = common_vendor.resolveComponent("fui-rate");
  const _easycom_fui_upload2 = common_vendor.resolveComponent("fui-upload");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_input2 + _easycom_fui_form_item2 + _easycom_fui_switch2 + _easycom_fui_checkbox2 + _easycom_fui_text2 + _easycom_fui_label2 + _easycom_fui_checkbox_group2 + _easycom_fui_radio2 + _easycom_fui_radio_group2 + _easycom_fui_rate2 + _easycom_fui_upload2 + _easycom_fui_button2)();
}
const _easycom_fui_input = () => "../../../../components/firstui/fui-input/fui-input.js";
const _easycom_fui_form_item = () => "../../../../components/firstui/fui-form-item/fui-form-item.js";
const _easycom_fui_switch = () => "../../../../components/firstui/fui-switch/fui-switch.js";
const _easycom_fui_checkbox = () => "../../../../components/firstui/fui-checkbox/fui-checkbox.js";
const _easycom_fui_text = () => "../../../../components/firstui/fui-text/fui-text.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
const _easycom_fui_checkbox_group = () => "../../../../components/firstui/fui-checkbox-group/fui-checkbox-group.js";
const _easycom_fui_radio = () => "../../../../components/firstui/fui-radio/fui-radio.js";
const _easycom_fui_radio_group = () => "../../../../components/firstui/fui-radio-group/fui-radio-group.js";
const _easycom_fui_rate = () => "../../../../components/firstui/fui-rate/fui-rate.js";
const _easycom_fui_upload = () => "../../../../components/firstui/fui-upload/fui-upload.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_form_item + _easycom_fui_switch + _easycom_fui_checkbox + _easycom_fui_text + _easycom_fui_label + _easycom_fui_checkbox_group + _easycom_fui_radio + _easycom_fui_radio_group + _easycom_fui_rate + _easycom_fui_upload + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      borderBottom: false,
      padding: [0],
      placeholder: "\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0"
    }),
    c: common_vendor.p({
      label: "\u6D3B\u52A8\u540D\u79F0"
    }),
    d: common_vendor.p({
      label: "\u624B\u673A\u53F7\u7801"
    }),
    e: common_vendor.p({
      scaleRatio: 0.9
    }),
    f: common_vendor.p({
      label: "\u5373\u65F6\u914D\u9001"
    }),
    g: common_vendor.p({
      value: "1"
    }),
    h: common_vendor.p({
      size: 28,
      text: "\u5730\u63A8\u6D3B\u52A8",
      padding: ["0", "30rpx", "0", "16rpx"]
    }),
    i: common_vendor.p({
      inline: true
    }),
    j: common_vendor.p({
      value: "2"
    }),
    k: common_vendor.p({
      size: 28,
      text: "\u7F8E\u98DF\u6D3B\u52A8",
      padding: ["0", "16rpx"]
    }),
    l: common_vendor.p({
      inline: true
    }),
    m: common_vendor.p({
      label: "\u6D3B\u52A8\u6027\u8D28"
    }),
    n: common_vendor.p({
      value: "1"
    }),
    o: common_vendor.p({
      size: 28,
      text: "\u7EBF\u4E0A\u54C1\u724C\u65B9\u8D5E\u52A9",
      padding: ["0", "30rpx", "0", "16rpx"]
    }),
    p: common_vendor.p({
      value: "2"
    }),
    q: common_vendor.p({
      size: 28,
      text: "\u7EBF\u4E0B\u573A\u5730\u514D\u8D39",
      padding: ["0", "16rpx"]
    }),
    r: common_vendor.p({
      margin: ["32rpx", "0", "0"]
    }),
    s: common_vendor.p({
      label: "\u7279\u6B8A\u8D44\u6E90"
    }),
    t: common_vendor.p({
      label: "\u8BC4\u5206"
    }),
    v: common_vendor.p({
      label: "\u4E0A\u4F20\u56FE\u7247",
      padding: ["28rpx", "32rpx", "8rpx"]
    }),
    w: common_vendor.p({
      borderBottom: false,
      padding: [0],
      placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D"
    }),
    x: common_vendor.p({
      label: "\u59D3\u540D",
      asterisk: true
    }),
    y: common_vendor.p({
      label: "\u624B\u673A\u53F7\u7801",
      asterisk: true
    }),
    z: common_vendor.p({
      borderBottom: false,
      padding: [0],
      placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
      disabled: true,
      backgroundColor: "transparent"
    }),
    A: common_vendor.p({
      label: "\u6D3B\u52A8\u65F6\u95F4",
      asterisk: true,
      arrow: true,
      highlight: true
    }),
    B: common_vendor.p({
      label: "\u5730\u533A",
      arrow: true,
      highlight: true
    }),
    C: common_vendor.p({
      label: "\u662F\u5426\u63A8\u9001"
    }),
    D: common_vendor.p({
      type: "digit",
      borderBottom: false,
      padding: ["0", "16rpx"],
      placeholder: "\u8BF7\u8F93\u5165\u4F53\u91CD",
      textRight: true
    }),
    E: common_vendor.p({
      text: "kg"
    }),
    F: common_vendor.p({
      label: "\u4F53\u91CD"
    }),
    G: common_vendor.p({
      type: "gray",
      bold: true,
      width: "200rpx",
      height: "64rpx",
      size: 28,
      text: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    }),
    H: common_vendor.p({
      label: "\u9A8C\u8BC1\u7801"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/formItem/formItem.vue"]]);
my.createPage(MiniProgramPage);
