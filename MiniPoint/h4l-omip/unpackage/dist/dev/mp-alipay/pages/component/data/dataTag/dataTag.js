"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  watch: {
    val(newVal) {
      if (newVal) {
        this.fui.toast(newVal);
      } else {
        this.fui.toast("\u5DF2\u5168\u90E8\u53D6\u6D88");
      }
    },
    vals(newVal) {
      if (newVal.length > 0) {
        this.fui.toast(newVal.join(","));
      } else {
        this.fui.toast("\u5DF2\u5168\u90E8\u53D6\u6D88");
      }
    }
  },
  data() {
    return {
      options: ["\u9009\u9879\u4E00", "\u9009\u9879\u4E8C", "\u9009\u9879\u4E09", "\u9009\u9879\u56DB"],
      val: "",
      vals: [],
      val2: ""
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    change(e) {
      this.fui.toast(e.detail.value);
    },
    change2(e) {
      console.log(e.detail);
      let arr = e.detail.value || [];
      if (arr.length > 0) {
        this.fui.toast(arr.join(","));
      } else {
        this.fui.toast("\u5DF2\u5168\u90E8\u53D6\u6D88");
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_data_tag2 = common_vendor.resolveComponent("fui-data-tag");
  _easycom_fui_data_tag2();
}
const _easycom_fui_data_tag = () => "../../../../components/firstui/fui-data-tag/fui-data-tag.js";
if (!Math) {
  _easycom_fui_data_tag();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      options: $data.options
    }),
    d: common_vendor.o($options.change2),
    e: common_vendor.p({
      multiple: true,
      mark: true,
      options: $data.options
    }),
    f: common_vendor.o(($event) => $data.val = $event),
    g: common_vendor.p({
      min: 0,
      options: $data.options,
      modelValue: $data.val
    }),
    h: common_vendor.o(($event) => $data.vals = $event),
    i: common_vendor.p({
      multiple: true,
      max: 2,
      radius: 40,
      activeBgColor: "#F1F4FA",
      options: $data.options,
      modelValue: $data.vals
    }),
    j: common_vendor.o(($event) => $data.val2 = $event),
    k: common_vendor.p({
      options: $data.options,
      width: "180",
      activeColor: "#FFB703",
      borderColor: "#FFB703",
      mark: true,
      markColor: "#FFB703",
      modelValue: $data.val2
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/dataTag/dataTag.vue"]]);
my.createPage(MiniProgramPage);
