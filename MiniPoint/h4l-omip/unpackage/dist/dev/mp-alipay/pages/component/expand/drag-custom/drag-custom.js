"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      itemList: [{
        id: 1,
        text: "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",
        src: "/static/images/qrcode/wx_qrcode.jpg"
      }, {
        id: 2,
        text: "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F",
        src: "/static/images/qrcode/ali_qrcode.png"
      }, {
        id: 3,
        text: "\u5934\u6761\u5C0F\u7A0B\u5E8F",
        src: "/static/images/qrcode/toutiao_qrcode.png"
      }, {
        id: 4,
        text: "\u767E\u5EA6\u5C0F\u7A0B\u5E8F",
        src: "/static/images/qrcode/baidu_qrcode.png"
      }, {
        id: 5,
        text: "QQ\u5C0F\u7A0B\u5E8F",
        src: "/static/images/qrcode/qq_qrcode.jpg"
      }, {
        id: 6,
        text: "H5",
        src: "/static/images/qrcode/h5_qrcode.png"
      }, {
        id: 7,
        text: "IOS",
        src: "/static/images/common/logo.png"
      }, {
        id: 8,
        text: "Android",
        src: "/static/images/common/img_logo.png"
      }]
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
    b: common_vendor.w(({
      model,
      width,
      height,
      index
    }, s0, i0) => {
      return {
        a: model.src,
        b: common_vendor.t(model.text),
        c: width + "px",
        d: height + "px",
        e: i0,
        f: s0
      };
    }, {
      name: "d",
      path: "b",
      vueId: "b26be136-0"
    }),
    c: common_vendor.o($options.end),
    d: common_vendor.p({
      width: 680,
      custom: true,
      itemList: $data.itemList,
      columns: 4,
      itemHeight: 200
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/drag-custom/drag-custom.vue"]]);
my.createPage(MiniProgramPage);
