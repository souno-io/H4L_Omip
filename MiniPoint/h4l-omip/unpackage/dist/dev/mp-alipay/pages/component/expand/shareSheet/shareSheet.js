"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      visible: false,
      items: [{
        name: "wechat",
        color: "#07c160",
        text: "\u5FAE\u4FE1\u597D\u53CB"
      }, {
        name: "moments",
        color: "#44DC6B",
        text: "\u670B\u53CB\u5708"
      }, {
        name: "qq",
        color: "#3FB7F5",
        text: "QQ"
      }, {
        name: "sina",
        color: "#D8070B",
        text: "\u65B0\u6D6A\u5FAE\u535A"
      }],
      itemList: [],
      show: false,
      itemList2: [],
      show2: false
    };
  },
  onLoad() {
    this.itemList = [
      [{
        name: "wechat",
        size: 72,
        color: "#07c160",
        text: "\u5FAE\u4FE1\u597D\u53CB"
      }, {
        name: "moments",
        size: 72,
        color: "#44DC6B",
        text: "\u670B\u53CB\u5708"
      }, {
        name: "qq",
        size: 72,
        color: "#3FB7F5",
        text: "QQ"
      }, {
        name: "sina",
        size: 72,
        color: "#D8070B",
        text: "\u65B0\u6D6A\u5FAE\u535A"
      }, {
        name: "browser",
        size: 72,
        color: "#465CFF",
        text: "\u6D4F\u89C8\u5668\u6253\u5F00"
      }, {
        name: "community-fill",
        size: 72,
        color: "#FFB703",
        text: "\u793E\u533A"
      }],
      [{
        name: "picture",
        size: 56,
        text: "\u5206\u4EAB\u6D77\u62A5"
      }, {
        name: "link",
        size: 56,
        text: "\u590D\u5236\u94FE\u63A5"
      }, {
        name: "search",
        size: 56,
        text: "\u641C\u7D22"
      }, {
        name: "refresh",
        size: 56,
        text: "\u5237\u65B0"
      }, {
        name: "help",
        size: 56,
        text: "\u5E2E\u52A9"
      }, {
        name: "edit",
        size: 56,
        text: "\u53CD\u9988"
      }]
    ];
    this.itemList2 = JSON.parse(JSON.stringify(this.itemList));
    this.itemList2.map((item, index) => {
      if (index === 1) {
        item.map((obj) => {
          obj.color = "#d1d1d1";
        });
      }
    });
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    shareSheet(type) {
      if (type === 1) {
        this.visible = true;
      } else if (type === 2) {
        this.show = true;
      } else {
        this.show2 = true;
      }
    },
    onTap(e) {
      console.log(e);
      this.fui.toast(e.item.text);
      this.visible = false;
    },
    onClick(e, type) {
      console.log(e);
      if (type === 1) {
        this.show = false;
      } else {
        this.show2 = false;
      }
    },
    onCancel(type) {
      if (type == 1) {
        this.visible = false;
      } else if (type == 2) {
        this.show = false;
      } else {
        this.show2 = false;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_share_sheet2 = common_vendor.resolveComponent("fui-share-sheet");
  (_easycom_fui_button2 + _easycom_fui_share_sheet2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_share_sheet = () => "../../../../components/firstui/fui-share-sheet/fui-share-sheet.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_share_sheet)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.shareSheet(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5185\u5BB9\u4E24\u7AEF\u5BF9\u9F50",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.shareSheet(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5C55\u793A\u591A\u884C",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.shareSheet(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u66F4\u6362\u989C\u8272",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.onCancel(1)),
    i: common_vendor.o($options.onTap),
    j: common_vendor.p({
      isFull: true,
      padding: "48",
      background: "#fff",
      lineColor: "#eee",
      show: $data.visible,
      itemList: $data.items,
      maskClosable: true
    }),
    k: common_vendor.o(($event) => $options.onClick($event, 1)),
    l: common_vendor.o(($event) => $options.onCancel(2)),
    m: common_vendor.p({
      show: $data.show,
      itemList: $data.itemList,
      itemBackground: "#fff"
    }),
    n: common_vendor.o(($event) => $options.onClick($event, 2)),
    o: common_vendor.o(($event) => $options.onCancel(3)),
    p: common_vendor.p({
      title: "\u5206\u4EAB\u7ED9\u597D\u53CB",
      background: "#222",
      itemBackground: "#333",
      btnColor: "#d1d1d1",
      lineColor: "#333",
      show: $data.show2,
      itemList: $data.itemList2
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/shareSheet/shareSheet.vue"]]);
my.createPage(MiniProgramPage);
