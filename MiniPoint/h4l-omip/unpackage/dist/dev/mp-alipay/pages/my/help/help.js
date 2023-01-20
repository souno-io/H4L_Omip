"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      ques: [
        "\u6211\u53EA\u60F3\u7528\u67D0\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u5417\uFF1F",
        "\u67D0\u4E9B\u5E73\u53F0\u5F53\u6211\u4F7F\u7528 textarea \u7B49\u7EC4\u4EF6\u65F6\u5C42\u7EA7\u592A\u9AD8\u906E\u6321\u5176\u4ED6\u7EC4\u4EF6\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F",
        "\u4E3A\u4EC0\u4E48\u6587\u6863\u6216\u793A\u4F8B\u4E2D\u6709\u4E9B\u7EC4\u4EF6\u5728GitHub\u6216npm\u4E0B\u8F7D\u7684\u5305\u4E2D\u65E0\u6CD5\u627E\u5230\uFF1F",
        "\u7EC4\u4EF6\u652F\u6301Nvue\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F...\u5417\uFF1F",
        "\u7EC4\u4EF6\u652F\u6301vue3\u5417\uFF1F"
      ],
      bugs: [
        "\u65B9\u6CD5\u672A\u5B9A\u4E49?",
        "\u7F16\u8BD1\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6837\u5F0F\u6DF7\u4E71?",
        "\u7F16\u8BD1\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u62A5\u9519?",
        "\u5C0F\u7A0B\u5E8F\u8FD0\u884C\u62A5\u9519?"
      ],
      members: [
        "\u5F00\u6E90\u7248\u4E0E\u5546\u4E1A\u7248\u6709\u4EC0\u4E48\u533A\u522B?",
        "\u4F1A\u5458\u9664\u4E86\u83B7\u53D6\u5546\u4E1A\u7248\u7EC4\u4EF6\u6E90\u7801\u5916\u4E0E\u975E\u4F1A\u5458\u6709\u4EC0\u4E48\u5176\u4ED6\u4F18\u52BF\uFF1F",
        "\u4E2A\u4EBA\u4F1A\u5458\u548C\u4F01\u4E1A\u4F1A\u5458\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",
        "\u5546\u4E1A\u7248\u672C\u7684\u7248\u6743\u89E3\u91CA\u8BF4\u660E\u662F\u4EC0\u4E48\uFF1F",
        "\u5982\u4F55\u5F00\u901A\u4F1A\u5458\uFF0C\u4F1A\u5458\u6E90\u7801\u5982\u4F55\u83B7\u53D6?",
        "\u4F1A\u5458\u7684\u6709\u6548\u671F\u662F\u591A\u4E45?",
        "\u80FD\u5426\u4EE3\u8D2D\u5546\u4E1A\u6388\u6743\uFF1F",
        "\u8D2D\u4E70\u4F1A\u5458\u53EF\u4EE5\u5F00\u53D1\u7968\u5417\uFF1F"
      ]
    };
  },
  computed: common_vendor.mapState(["status"]),
  methods: {
    search() {
      this.fui.toast("\u6682\u4E0D\u63D0\u4F9B\u641C\u7D22\u529F\u80FD~");
    },
    href(type) {
      if (type === 1) {
        this.fui.href("../webview/webview");
      } else if (type === 2) {
        this.fui.href("../updated/updated");
      } else {
        this.fui.href("../vip/vip");
      }
    },
    detail(title, index) {
      this.fui.href(`../qa/qa?index=${index}&title=${title}`);
    }
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  _easycom_fui_list_cell2();
}
const _easycom_fui_list_cell = () => "../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  _easycom_fui_list_cell();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: `${$data.resUrl}/help/light/img_banner_3x.png`,
    b: common_vendor.o((...args) => $options.search && $options.search(...args)),
    c: common_vendor.p({
      bottomLeft: "0",
      padding: ["32rpx", "0"],
      highlight: false
    }),
    d: common_vendor.o(($event) => $options.href(1)),
    e: common_vendor.o(($event) => $options.href(2)),
    f: common_vendor.o(($event) => $options.href(3)),
    g: common_vendor.f($data.ques, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.detail(item, index)),
        d: "ce26ee22-1-" + i0
      };
    }),
    h: common_vendor.p({
      arrow: true,
      bottomRight: "32"
    }),
    i: common_vendor.f($data.bugs, (item, idx, i0) => {
      return {
        a: common_vendor.t(item),
        b: idx,
        c: common_vendor.o(($event) => $options.detail(item, idx + 5)),
        d: "ce26ee22-2-" + i0
      };
    }),
    j: common_vendor.p({
      arrow: true,
      bottomRight: "32"
    }),
    k: common_vendor.f($data.members, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.detail(item, index + 9)),
        d: "ce26ee22-3-" + i0
      };
    }),
    l: common_vendor.p({
      arrow: true,
      bottomRight: "32"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/help/help.vue"]]);
my.createPage(MiniProgramPage);
