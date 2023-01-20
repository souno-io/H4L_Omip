"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      itemList: [{
        id: 1,
        src: "/static/images/common/logo.png"
      }, {
        id: 2,
        src: "/static/images/common/img_logo.png"
      }, {
        id: 3,
        src: "/static/images/qrcode/h5_qrcode.png"
      }, {
        id: 4,
        src: "/static/images/qrcode/toutiao_qrcode.png"
      }, {
        id: 5,
        src: "/static/images/qrcode/qq_qrcode.jpg"
      }, {
        id: 6,
        src: "/static/images/qrcode/wx_qrcode.jpg"
      }, {
        id: 7,
        src: "/static/images/qrcode/baidu_qrcode.png"
      }, {
        id: 8,
        src: "/static/images/qrcode/ali_qrcode.png"
      }, {
        id: 9,
        src: "/static/images/common/logo.png"
      }, {
        id: 10,
        src: "/static/images/common/img_logo.png"
      }],
      styles: {
        padding: 4
      }
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    end(e) {
      console.log(e.itemList);
    }
  }
};
if (!Array) {
  const _easycom_fui_drag2 = common_vendor.resolveComponent("fui-drag");
  _easycom_fui_drag2();
}
const _easycom_fui_drag = () => "../../../../components/firstui/fui-drag/fui-drag.js";
if (!Math) {
  _easycom_fui_drag();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.end),
    c: common_vendor.p({
      width: 720,
      itemList: $data.itemList,
      columns: 4,
      square: true,
      styles: $data.styles
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/drag-img/drag-img.vue"]]);
my.createPage(MiniProgramPage);
