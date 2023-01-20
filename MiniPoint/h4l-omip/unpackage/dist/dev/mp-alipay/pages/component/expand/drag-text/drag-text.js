"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      itemList: [{
        id: 1,
        text: "\u6807\u9898\u6587\u672C\u300A\u4E00\u300B"
      }, {
        id: 2,
        text: "\u6807\u9898\u6587\u672C\u300A\u4E8C\u300B"
      }, {
        id: 3,
        text: "\u6807\u9898\u6587\u672C\u300A\u4E09\u300B"
      }, {
        id: 4,
        text: "\u6807\u9898\u6587\u672C\u300A\u56DB\u300B"
      }, {
        id: 5,
        text: "\u6807\u9898\u6587\u672C\u300A\u4E94\u300B"
      }, {
        id: 6,
        text: "\u6807\u9898\u6587\u672C\u300A\u516D\u300B"
      }, {
        id: 7,
        text: "\u6807\u9898\u6587\u672C\u300A\u4E03\u300B"
      }, {
        id: 8,
        text: "\u6807\u9898\u6587\u672C\u300A\u516B\u300B"
      }, {
        id: 9,
        text: "\u6807\u9898\u6587\u672C\u300A\u4E5D\u300B"
      }],
      styles: {
        type: 2,
        isDel: true
      }
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    end(e) {
      console.log(e.itemList);
    },
    del(e) {
      this.fui.toast(`\u5220\u9664\u5217\u76EE\u7D22\u5F15\uFF1A${e.index}`);
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
    c: common_vendor.o($options.del),
    d: common_vendor.p({
      itemList: $data.itemList,
      itemHeight: 88,
      styles: $data.styles
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/drag-text/drag-text.vue"]]);
my.createPage(MiniProgramPage);
