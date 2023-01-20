"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      options: [{
        text: "\u673A\u67B6\u5F0F\u670D\u52A1\u5668",
        value: 1
      }, {
        text: "\u7B14\u8BB0\u672C",
        value: 2
      }, {
        text: "\u5E73\u677F\u7535\u8111",
        value: 3
      }, {
        text: "\u53F0\u5F0F\u673A+\u663E\u793A\u5668",
        value: 3
      }],
      assets: "",
      assetsShow: false,
      options2: ["\u6CE8\u518C\u6FC0\u6D3B", "\u7AD9\u957F\u5DE5\u5177", "\u6295\u9012\u6587\u7AE0", "\u5A92\u4F53\u5408\u4F5C", "\u7D20\u6750\u76F8\u5173", "\u62A5\u544A\u9519\u8BEF", "\u8BBA\u575B\u4E8B\u52A1", "\u53D1\u5E03\u8F6F\u4EF6", "\u7F51\u7AD9\u6392\u884C\u699C", "\u5176\u4ED6\u4E8B\u52A1"],
      question: "",
      quesShow: false,
      options3: ["\u6700\u65B0\u8F66\u8BAF", "\u964D\u4EF7\u6392\u884C", "SUV", "\u8FDD\u7AE0\u7F5A\u5355", "\u63D0\u8F66\u8BD5\u9A7E", "\u6D4B\u8BC4\u4F53\u9A8C", "\u9009\u8F66\u6307\u5357", "\u7F8E\u5973\u8F66\u6A21", "\u52A0\u6CB9\u4F18\u60E0\u5361", "\u7EF4\u4FEE\u4FDD\u517B"],
      tag: "",
      tagShow: false
    };
  },
  methods: {
    assetsTap() {
      this.$refs.ddlAssets.show();
      this.assetsShow = true;
    },
    assetsItemClick(e) {
      console.log(e);
      this.assets = e.text;
      this.assetsClose();
    },
    assetsClose() {
      this.assetsShow = false;
    },
    quesTap() {
      this.$refs.ddlQues.show();
      this.quesShow = true;
    },
    quesItemClick(e) {
      console.log(e);
      this.question = e.text;
      this.quesClose();
    },
    quesClose() {
      this.quesShow = false;
    },
    tagTap() {
      this.$refs.ddlTag.show();
      this.tagShow = true;
    },
    tagItemClick(e) {
      console.log(e);
      this.tag = e.text;
      this.tagClose();
    },
    tagClose() {
      this.tagShow = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_dropdown_list2 = common_vendor.resolveComponent("fui-dropdown-list");
  (_easycom_fui_icon2 + _easycom_fui_list_cell2 + _easycom_fui_dropdown_list2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_dropdown_list = () => "../../../../components/firstui/fui-dropdown-list/fui-dropdown-list.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_list_cell + _easycom_fui_dropdown_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.assets,
    b: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    c: $data.assetsShow ? 1 : "",
    d: common_vendor.o((...args) => $options.assetsTap && $options.assetsTap(...args)),
    e: common_vendor.p({
      highlight: false
    }),
    f: $data.question,
    g: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    h: $data.quesShow ? 1 : "",
    i: common_vendor.o((...args) => $options.quesTap && $options.quesTap(...args)),
    j: common_vendor.p({
      highlight: false
    }),
    k: $data.tag,
    l: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    m: $data.tagShow ? 1 : "",
    n: common_vendor.o((...args) => $options.tagTap && $options.tagTap(...args)),
    o: common_vendor.p({
      highlight: false
    }),
    p: common_vendor.o($options.assetsItemClick),
    q: common_vendor.o($options.assetsClose),
    r: common_vendor.p({
      options: $data.options
    }),
    s: common_vendor.o($options.quesItemClick),
    t: common_vendor.o($options.quesClose),
    v: common_vendor.p({
      height: 600,
      width: 480,
      checkboxColor: "#FFB703",
      options: $data.options2
    }),
    w: common_vendor.o($options.tagItemClick),
    x: common_vendor.o($options.tagClose),
    y: common_vendor.p({
      isCheckbox: false,
      selectedColor: "#FFB703",
      splitLine: true,
      height: 600,
      width: 400,
      options: $data.options3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/dropdownList/dropdownList.vue"]]);
my.createPage(MiniProgramPage);
