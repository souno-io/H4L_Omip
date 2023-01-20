"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    showToast(type) {
      let options = {};
      if (type === 3) {
        this.$refs.toast2.show(options);
      } else {
        if (type === 1) {
          options.src = "/static/images/common/img_logo.png";
          options.text = "First UI !";
        } else if (type === 2) {
          options.text = "\u8BF7\u8F93\u5165\u624B\u673A\u53F7";
        }
        this.$refs.toast.show(options);
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_toast2 = common_vendor.resolveComponent("fui-toast");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_button2 + _easycom_fui_toast2 + _easycom_fui_icon2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_toast = () => "../../../../components/firstui/fui-toast/fui-toast.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_toast + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showToast(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E26\u56FE\u6807\u63D0\u793A",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showToast(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u65E0\u56FE\u6807\u63D0\u793A",
      bold: true
    }),
    e: common_vendor.o(($event) => $options.showToast(3)),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u5185\u5BB9",
      margin: ["24rpx"],
      bold: true
    }),
    g: common_vendor.p({
      name: "checkbox",
      color: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/toast/toast.vue"]]);
my.createPage(MiniProgramPage);
