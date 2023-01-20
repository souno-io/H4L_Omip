"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_component_form_cascader_data = require("./data.js");
const _sfc_main = {
  data() {
    return {
      options: pages_component_form_cascader_data.data.options,
      value: ["440000", "440200", "440202", "44020203"],
      layer1: pages_component_form_cascader_data.data.layer_0,
      layerData: [pages_component_form_cascader_data.data.layer_0, pages_component_form_cascader_data.data.layer_1, pages_component_form_cascader_data.data.layer_2, pages_component_form_cascader_data.data.layer_3, pages_component_form_cascader_data.data.layer_4, pages_component_form_cascader_data.data.layer_5],
      value2: ["04", "0203", "0302", "0405", "0501", "0602"],
      show: false
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    btnReset() {
      if (this.$refs.cascader) {
        this.$refs.cascader.reset();
      }
    },
    complete(e) {
      console.log(e);
      this.fui.toast(`\u60A8\u7684\u9009\u62E9\u4E3A\uFF1A${e.text.join("")}`);
    },
    change(e) {
      console.log(e);
      let layer = e.layer;
      e.index;
      e.value;
      common_vendor.index.showLoading();
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.$refs.cascader1.setRequestData(pages_component_form_cascader_data.data[`layer_${layer + 1}`], layer);
      }, 300);
    },
    change2(e) {
      console.log(e);
      let layer = e.layer;
      e.index;
      e.value;
      common_vendor.index.showLoading();
      setTimeout(() => {
        common_vendor.index.hideLoading();
        this.$refs.cascader2.setRequestData(pages_component_form_cascader_data.data[`layer_${layer + 1}`], layer);
      }, 300);
    },
    btnSelect() {
      this.show = true;
    },
    closePopup() {
      this.show = false;
    },
    complete2(e) {
      console.log(e);
      this.fui.toast(`\u60A8\u7684\u9009\u62E9\u4E3A\uFF1A${e.text.join("")}`);
      this.closePopup();
    }
  }
};
if (!Array) {
  const _easycom_fui_cascader2 = common_vendor.resolveComponent("fui-cascader");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_bottom_popup2 = common_vendor.resolveComponent("fui-bottom-popup");
  (_easycom_fui_cascader2 + _easycom_fui_button2 + _easycom_fui_icon2 + _easycom_fui_bottom_popup2)();
}
const _easycom_fui_cascader = () => "../../../../components/firstui/fui-cascader/fui-cascader.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_bottom_popup = () => "../../../../components/firstui/fui-bottom-popup/fui-bottom-popup.js";
if (!Math) {
  (_easycom_fui_cascader + _easycom_fui_button + _easycom_fui_icon + _easycom_fui_bottom_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.complete),
    c: common_vendor.p({
      options: $data.options
    }),
    d: common_vendor.o($options.complete),
    e: common_vendor.p({
      options: $data.options,
      value: $data.value,
      activeColor: "#FF2B2B"
    }),
    f: common_vendor.o($options.btnReset),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u91CD\u7F6E\u9009\u62E9",
      bold: true,
      margin: ["48rpx", "0", "0"]
    }),
    h: common_vendor.o($options.change),
    i: common_vendor.o($options.complete),
    j: common_vendor.p({
      options: $data.layer1,
      stepLoading: true
    }),
    k: common_vendor.o($options.change2),
    l: common_vendor.o($options.complete),
    m: common_vendor.p({
      options: $data.layerData,
      value: $data.value2,
      stepLoading: true
    }),
    n: common_vendor.o($options.btnSelect),
    o: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E95\u90E8\u5F39\u51FA\u9009\u62E9",
      bold: true,
      margin: ["48rpx", "0", "0"]
    }),
    p: common_vendor.o($options.complete2),
    q: common_vendor.p({
      options: $data.options
    }),
    r: common_vendor.p({
      name: "close",
      size: 48
    }),
    s: common_vendor.o((...args) => $options.closePopup && $options.closePopup(...args)),
    t: common_vendor.p({
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/cascader/cascader.vue"]]);
my.createPage(MiniProgramPage);
