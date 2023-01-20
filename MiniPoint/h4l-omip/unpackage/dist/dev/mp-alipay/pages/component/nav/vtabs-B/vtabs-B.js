"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activeTab: 0,
      vtabs: [],
      contents: [],
      content: {},
      resUrl: this.fui.resUrl()
    };
  },
  onLoad() {
    this.vtabs = ["First UI", "\u5FEB\u901F\u4E0A\u624B", "\u66F4\u65B0\u65E5\u5FD7", "\u5347\u7EA7\u6307\u5357", "\u8BBE\u8BA1\u89C4\u8303", "\u81EA\u5B9A\u4E49\u4E3B\u9898", "FAQ"];
    const contents = [
      {
        title: "FirstUI\u7EC4\u4EF6\u5E93",
        img: "/cooperate/light/img_banner_3x.png",
        descr: "First UI\u662F\u4E00\u5957\u8D85\u9AD8\u6027\u80FD\u3001\u8D85\u9AD8\u989C\u503C\u7684\u79FB\u52A8\u7AEFUI\u7EFC\u5408\u89E3\u51B3\u65B9\u6848\uFF0C\u5305\u542B\u4E1A\u5185\u9876\u5C16\u7684\u7EC4\u4EF6\u5E93\u3001\u5F3A\u5927\u7684\u529F\u80FD\u5E93\u3001\u4E30\u5BCC\u7CBE\u7F8E\u7684\u6A21\u677F\u5E93\uFF0C\u63D0\u4F9Buni-app(\u5B8C\u7F8E\u652F\u6301nvue)\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u7B49\u7248\u672C\uFF0C\u517C\u987E\u9AD8\u6548\u7387\u4E0E\u9AD8\u6027\u80FD\uFF0C\u8BA9\u60A8\u7684\u5F00\u53D1\u83B7\u5F97\u767E\u500D\u63D0\u8D28\u63D0\u901F\uFF01"
      },
      {
        title: "\u5FEB\u901F\u4E0A\u624B",
        img: "/cooperate/dark/img_banner_3x.png",
        descr: "\u4F7F\u7528 First UI\u524D\uFF0C\u8BF7\u786E\u4FDD\u4F60\u5DF2\u7ECF\u5B66\u4E60\u5E76\u719F\u7EC3\u4F7F\u7528\u8FC7 uni-app \u6216\u8005 \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u3002\u6587\u6863\u8BE6\u89C1\uFF1Ahttps://doc.firstui.cn/docs/started.html\u3002"
      },
      {
        title: "\u66F4\u65B0\u65E5\u5FD7",
        img: "/cooperate/light/img_banner_3x.png",
        descr: "First UI \u4E25\u683C\u9075\u5FAA Semantic Versioning 2.0.0\u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303\u3002\u66F4\u65B0\u65E5\u5FD7\u8BE6\u89C1\uFF1Ahttps://doc.firstui.cn/docs/log.html\u3002"
      },
      {
        title: "\u5347\u7EA7\u6307\u5357",
        img: "/cooperate/dark/img_banner_3x.png",
        descr: "First UI \u5347\u7EA7\u6307\u5357\uFF0C\u5F53\u542B\u6709\u7834\u574F\u6027\u66F4\u65B0\uFF0C\u4E0D\u5411\u4E0B\u517C\u5BB9\u7684\u7248\u672C\u5347\u7EA7\u65F6\uFF0C\u4F1A\u5728\u8FD9\u91CC\u5199\u5165\u76F8\u5173\u7684\u5347\u7EA7\u6307\u5BFC\u3002"
      },
      {
        title: "\u8BBE\u8BA1\u89C4\u8303",
        img: "/cooperate/light/img_banner_3x.png",
        descr: "\u4E3A\u4E86\u7EA6\u675F\u548C\u6210\u5C31\u66F4\u591A\u4F18\u79C0\u7684\u4EA7\u54C1\uFF0C\u6253\u9020\u4F18\u8D28\u7684\u4F53\u9A8C\uFF0C\u6211\u4EEC\u62DF\u5B9A\u4E86\u4E00\u4E9BUI\u754C\u9762\u8BBE\u8BA1\u6307\u5357\u548C\u5EFA\u8BAE\u3002 \u8BBE\u8BA1\u6307\u5357\u5EFA\u7ACB\u5728\u5145\u5206\u5C0A\u91CD\u7528\u6237\u77E5\u60C5\u6743\u4E0E\u64CD\u4F5C\u6743\u7684\u57FA\u7840\u4E4B\u4E0A\u3002\u65E8\u5728First UI\u751F\u6001\u4F53\u7CFB\u5185\uFF0C\u5EFA\u7ACB\u53CB\u597D\u3001\u9AD8\u6548\u3001\u4E00\u81F4\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u540C\u65F6\u6700\u5927\u7A0B\u5EA6\u9002\u5E94\u548C\u652F\u6301\u4E0D\u540C\u9700\u6C42\uFF0C\u5B9E\u73B0\u7528\u6237\u4E0EFirst UI\u7684\u5171\u8D62\u3002"
      },
      {
        title: "\u81EA\u5B9A\u4E49\u4E3B\u9898",
        img: "/cooperate/dark/img_banner_3x.png",
        descr: "First UI \u9ED8\u8BA4\u63D0\u4F9B\u4E86\u4E00\u5957\u4E3B\u9898\uFF0C\u5E76\u4F7F\u7528 CSS \u53D8\u91CF \u6765\u5B9E\u73B0\u5B9A\u5236\u4E3B\u9898\uFF0C\u94FE\u63A5\u4E2D\u7684\u5185\u5BB9\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5BF9 CSS \u53D8\u91CF \u6982\u5FF5\u6709\u57FA\u672C\u7684\u8BA4\u8BC6\uFF0C\u907F\u514D\u8BB8\u591A\u4E0D\u5FC5\u8981\u7684\u56F0\u6270\u3002\u6587\u6863\u8BE6\u89C1\uFF1Ahttps://doc.firstui.cn/docs/theme.html\u3002"
      },
      {
        title: "FAQ",
        img: "/cooperate/light/img_banner_3x.png",
        descr: "\u5E38\u89C1\u95EE\u9898\u89E3\u7B54\uFF0C\u4F7F\u7528\u524D\u8BF7\u5148\u4ED4\u7EC6\u9605\u8BFBFAQ\u5185\u5BB9\uFF0C\u4E86\u89E3\u5E38\u89C1\u95EE\u9898\uFF0C\u907F\u514D\u5728\u540E\u7EED\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u82B1\u8D39\u66F4\u591A\u65F6\u95F4\u3002\u8BE6\u89C1\uFF1Ahttps://doc.firstui.cn/docs/FAQ.html\u3002"
      }
    ];
    this.contents = contents;
    this.content = contents[this.activeTab];
  },
  methods: {
    onTabClick(e) {
      const index = e.index;
      this.content = this.contents[index];
    }
  }
};
if (!Array) {
  const _easycom_fui_vtabs2 = common_vendor.resolveComponent("fui-vtabs");
  _easycom_fui_vtabs2();
}
const _easycom_fui_vtabs = () => "../../../../components/firstui/fui-vtabs/fui-vtabs.js";
if (!Math) {
  _easycom_fui_vtabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.content.title),
    b: $data.resUrl + $data.content.img,
    c: $data.content.title === "FAQ"
  }, $data.content.title === "FAQ" ? {
    d: common_vendor.f($data.contents, (item, index, i0) => {
      return {
        a: $data.resUrl + item.img,
        b: index
      };
    })
  } : {}, {
    e: common_vendor.t($data.content.descr),
    f: common_vendor.o($options.onTabClick),
    g: common_vendor.p({
      vtabs: $data.vtabs,
      activeTab: $data.activeTab,
      linkage: false
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/vtabs-B/vtabs-B.vue"]]);
my.createPage(MiniProgramPage);
