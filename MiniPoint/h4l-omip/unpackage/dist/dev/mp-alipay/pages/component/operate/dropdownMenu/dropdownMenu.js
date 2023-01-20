"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      options: [{
        text: "\u7EFC\u5408\u63A8\u8350",
        value: 1,
        checked: true
      }, {
        text: "\u65B0\u54C1\u4F18\u5148",
        value: 2
      }, {
        text: "\u8BC4\u8BBA\u6570\u4ECE\u9AD8\u5230\u4F4E",
        value: 3
      }],
      options1: [{
        text: "\u9ED8\u8BA4\u6392\u5E8F",
        value: 11,
        checked: true
      }, {
        text: "\u9500\u91CF\u6392\u5E8F",
        value: 12
      }, {
        text: "\u4EF7\u683C\u6392\u5E8F",
        value: 13
      }],
      range: "\u7EFC\u5408\u63A8\u8350",
      rangeShow: false,
      sort: "\u9ED8\u8BA4\u6392\u5E8F",
      sortShow: false,
      options2: ["\u6CE8\u518C\u6FC0\u6D3B", "\u7AD9\u957F\u5DE5\u5177", "\u6295\u9012\u6587\u7AE0", "\u5A92\u4F53\u5408\u4F5C", "\u7D20\u6750\u76F8\u5173", "\u62A5\u544A\u9519\u8BEF", "\u8BBA\u575B\u4E8B\u52A1", "\u53D1\u5E03\u8F6F\u4EF6", "\u7F51\u7AD9\u6392\u884C\u699C", "\u5176\u4ED6\u4E8B\u52A1"],
      question: "",
      quesShow: false,
      options3: ["\u6700\u65B0\u8F66\u8BAF", "\u964D\u4EF7\u6392\u884C", "SUV", "\u8FDD\u7AE0\u7F5A\u5355", "\u63D0\u8F66\u8BD5\u9A7E", "\u6D4B\u8BC4\u4F53\u9A8C", "\u9009\u8F66\u6307\u5357", "\u7F8E\u5973\u8F66\u6A21", "\u52A0\u6CB9\u4F18\u60E0\u5361", "\u7EF4\u4FEE\u4FDD\u517B"],
      tag: "",
      tagShow: false
    };
  },
  methods: {
    filterTap(type) {
      if (type === 1) {
        this.$refs.ddmRange.show();
        this.rangeShow = true;
      } else {
        this.$refs.ddmSort.show();
        this.sortShow = true;
      }
    },
    rangeItemClick(e) {
      console.log(e);
      this.range = e.text;
      this.rangeClose();
    },
    rangeClose() {
      this.rangeShow = false;
    },
    sortItemClick(e) {
      console.log(e);
      this.sort = e.text;
      this.sortClose();
    },
    sortClose() {
      this.sortShow = false;
    },
    quesTap() {
      this.$refs.ddmQues.show();
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
      this.$refs.ddmTag.show();
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
  const _easycom_fui_dropdown_menu2 = common_vendor.resolveComponent("fui-dropdown-menu");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_icon2 + _easycom_fui_dropdown_menu2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_dropdown_menu = () => "../../../../components/firstui/fui-dropdown-menu/fui-dropdown-menu.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_dropdown_menu + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.range),
    b: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    c: $data.rangeShow ? 1 : "",
    d: common_vendor.o(($event) => $options.filterTap(1)),
    e: common_vendor.o($options.rangeItemClick),
    f: common_vendor.o($options.rangeClose),
    g: common_vendor.p({
      size: 28,
      selectedColor: "#465CFF",
      options: $data.options
    }),
    h: common_vendor.t($data.sort),
    i: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    j: $data.sortShow ? 1 : "",
    k: common_vendor.o(($event) => $options.filterTap(2)),
    l: common_vendor.o($options.sortItemClick),
    m: common_vendor.o($options.sortClose),
    n: common_vendor.p({
      minWidth: 300,
      right: "0",
      size: 28,
      selectedColor: "#465CFF",
      isCheckMark: true,
      checkmarkColor: "#465CFF",
      isReverse: true,
      options: $data.options1
    }),
    o: $data.question,
    p: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    q: $data.quesShow ? 1 : "",
    r: common_vendor.o((...args) => $options.quesTap && $options.quesTap(...args)),
    s: common_vendor.o($options.quesItemClick),
    t: common_vendor.o($options.quesClose),
    v: common_vendor.p({
      checkboxColor: "#FFB703",
      minWidth: 400,
      splitLine: true,
      options: $data.options2
    }),
    w: common_vendor.p({
      highlight: false
    }),
    x: $data.tag,
    y: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    z: $data.tagShow ? 1 : "",
    A: common_vendor.o((...args) => $options.tagTap && $options.tagTap(...args)),
    B: common_vendor.o($options.tagItemClick),
    C: common_vendor.o($options.tagClose),
    D: common_vendor.p({
      isCheckbox: false,
      selectedColor: "#FF2B2B",
      splitLine: true,
      options: $data.options3,
      direction: "up"
    }),
    E: common_vendor.p({
      highlight: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/operate/dropdownMenu/dropdownMenu.vue"]]);
my.createPage(MiniProgramPage);
