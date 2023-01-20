"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      items: [{
        src: "/static/images/common/logo.png",
        title: "First UI",
        descr: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002",
        isOpen: true
      }, {
        src: "/static/images/common/icon_tabbar_2x.png",
        title: "\u6807\u9898\u5185\u5BB9",
        descr: "\u81EA\u5B9A\u4E49\u6298\u53E0\u5185\u5BB9\u4E3B\u4F53\uFF0C\u8FD9\u662F\u4E00\u6BB5\u6BD4\u8F83\u957F\u5185\u5BB9\u3002\u9ED8\u8BA4\u6298\u53E0\u4E3B\u8981\u5185\u5BB9\uFF0C\u53EA\u663E\u793A\u5F53\u524D\u9879\u6807\u9898\u3002\u70B9\u51FB\u6807\u9898\u5C55\u5F00\u3002\u518D\u6B21\u70B9\u51FB\u6807\u9898\uFF0C\u6298\u53E0\u5185\u5BB9\u3002"
      }],
      list: [{
        question: "\u6211\u53EA\u60F3\u7528\u67D0\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u5417\uFF1F",
        answer: "\u53EF\u4EE5\uFF0C\u7EC4\u4EF6\u652F\u6301\u6309\u9700\u5F15\u5165\uFF0C\u8BE6\u89C1 First UI \u6587\u6863 \u201C\u5FEB\u901F\u4E0A\u624B\u201D\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u524D\u8BF7\u5148\u4ED4\u7EC6\u9605\u8BFB\u7EC4\u4EF6\u6587\u6863\u3002"
      }, {
        question: "\u4E3A\u4EC0\u4E48\u6587\u6863\u6216\u793A\u4F8B\u4E2D\u6709\u4E9B\u7EC4\u4EF6\u5728GitHub\u6216npm\u4E0B\u8F7D\u7684\u5305\u4E2D\u65E0\u6CD5\u627E\u5230\uFF1F",
        answer: "First UI \u5206\u4E3A \u201C\u5F00\u6E90\u7248\u201D \u548C \u201C\u5546\u4E1A\u7248\u201D\uFF0C\u6240\u6709\u793A\u4F8B\u6216\u6587\u6863\u4E2D\u52A0 \u201CV\u201D \u7684\u8868\u793A\u9700\u8981\u5F00\u901A\u4F1A\u5458\u624D\u53EF\u83B7\u53D6\u6E90\u7801\u4F7F\u7528\uFF0C\u4F1A\u5458\u5185\u5BB9\u4E0D\u4F1A\u53D1\u5E03\u5230\u4EFB\u4F55\u516C\u5F00\u6E20\u9053\u3002"
      }, {
        question: "\u7EC4\u4EF6\u652F\u6301Nvue\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F...\u5417\uFF1F",
        answer: "\u652F\u6301\u3002\u7EC4\u4EF6\u652F\u6301\u54EA\u4E9B\u5E73\u53F0\u8BF7\u53C2\u8003\u7EC4\u4EF6\u5177\u4F53\u6587\u6863\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u6587\u6863\u4E2D\u90FD\u6709\u652F\u6301\u5E73\u53F0\u7684\u8BF4\u660E\u3002"
      }]
    };
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_collapse_item2 = common_vendor.resolveComponent("fui-collapse-item");
  const _easycom_fui_collapse2 = common_vendor.resolveComponent("fui-collapse");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_collapse_item2 + _easycom_fui_collapse2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_collapse_item = () => "../../../../components/firstui/fui-collapse-item/fui-collapse-item.js";
const _easycom_fui_collapse = () => "../../../../components/firstui/fui-collapse/fui-collapse.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_collapse_item + _easycom_fui_collapse + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "26d00abf-2-" + i0 + ",26d00abf-1",
        f: common_vendor.p({
          index,
          open: item.isOpen
        })
      };
    }),
    c: common_vendor.o($options.change),
    d: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "26d00abf-4-" + i0 + ",26d00abf-3",
        f: common_vendor.p({
          index
        })
      };
    }),
    e: common_vendor.o($options.change),
    f: common_vendor.p({
      accordion: true
    }),
    g: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "26d00abf-6-" + i0 + ",26d00abf-5",
        f: common_vendor.p({
          animation: false,
          arrowColor: "#333",
          index
        })
      };
    }),
    h: common_vendor.o($options.change),
    i: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "26d00abf-8-" + i0 + ",26d00abf-7",
        f: common_vendor.p({
          disabled: index === 1,
          arrowColor: "#333",
          index
        })
      };
    }),
    j: common_vendor.o($options.change),
    k: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.question),
        b: "26d00abf-11-" + i0 + "," + ("26d00abf-10-" + i0),
        c: common_vendor.t(item.answer),
        d: index,
        e: "26d00abf-10-" + i0 + ",26d00abf-9",
        f: common_vendor.p({
          arrow: false,
          index
        })
      };
    }),
    l: common_vendor.p({
      padding: []
    }),
    m: common_vendor.o($options.change),
    n: common_vendor.p({
      accordion: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/data/collapse/collapse.vue"]]);
my.createPage(MiniProgramPage);
