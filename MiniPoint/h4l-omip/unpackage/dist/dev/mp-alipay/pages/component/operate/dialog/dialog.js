"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      visible: false,
      buttons: [{
        text: "\u786E\u5B9A",
        color: "#FF2B2B"
      }]
    };
  },
  methods: {
    showDialog(type) {
      if (type === 1) {
        this.show = true;
      } else {
        this.visible = true;
      }
    },
    onClick(e) {
      console.log(e);
      this.onClose();
    },
    onClose(e) {
      this.show = false;
    },
    onTap(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_dialog2 = common_vendor.resolveComponent("fui-dialog");
  (_easycom_fui_button2 + _easycom_fui_dialog2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_dialog = () => "../../../../components/firstui/fui-dialog/fui-dialog.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDialog(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u57FA\u7840\u4F7F\u7528",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showDialog(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u6309\u94AE",
      bold: true
    }),
    e: common_vendor.o($options.onClick),
    f: common_vendor.o($options.onClose),
    g: common_vendor.p({
      show: $data.show,
      content: "\u5F39\u7A97\u5185\u5BB9\uFF0C\u544A\u77E5\u5F53\u524D\u72B6\u6001\u3001\u4FE1\u606F\u548C\u89E3\u51B3\u65B9\u6CD5\uFF0C\u63CF\u8FF0\u6587\u5B57\u5C3D\u91CF\u63A7\u5236\u5728\u4E09\u884C\u5185",
      maskClosable: true
    }),
    h: common_vendor.o($options.onTap),
    i: common_vendor.p({
      show: $data.visible,
      title: "\u6211\u662F\u6807\u9898",
      content: "\u6211\u662F\u81EA\u5B9A\u4E49\u7684\u5BF9\u8BDD\u6846\uFF01",
      buttons: $data.buttons
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/dialog/dialog.vue"]]);
my.createPage(MiniProgramPage);
