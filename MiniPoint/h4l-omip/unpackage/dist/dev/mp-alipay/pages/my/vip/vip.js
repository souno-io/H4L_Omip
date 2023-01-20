"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiClipboard_index = require("../../../components/firstui/fui-clipboard/index.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      menus: [{
        icon: "vip",
        title: "VIP\u7684\u4F18\u52BF\uFF1F"
      }, {
        icon: "difference",
        title: "\u5546\u7528\u7248\u7684\u533A\u522B\uFF1F"
      }, {
        icon: "date",
        title: "VIP\u7684\u6709\u6548\u671F\uFF1F"
      }],
      show: false,
      styles: {
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        backgroundColor: "rgba(0,0,0,0.6)"
      }
    };
  },
  computed: common_vendor.mapState(["status"]),
  methods: {
    href(index) {
      let title = [
        "\u4F1A\u5458\u9664\u4E86\u83B7\u53D6\u5546\u4E1A\u7248\u7EC4\u4EF6\u6E90\u7801\u5916\u4E0E\u975E\u4F1A\u5458\u6709\u4EC0\u4E48\u5176\u4ED6\u4F18\u52BF\uFF1F",
        "\u5F00\u6E90\u7248\u4E0E\u5546\u4E1A\u7248\u6709\u4EC0\u4E48\u533A\u522B?",
        "\u4F1A\u5458\u7684\u6709\u6548\u671F\u662F\u591A\u4E45?"
      ][index];
      let idx = [10, 9, 14][index];
      this.fui.href(`../qa/qa?index=${idx}&title=${title}`);
    },
    purchase(mask) {
      setTimeout(() => {
        this.show = true;
      }, 80);
    },
    handleClick() {
      this.show = false;
    },
    getLink(e) {
      components_firstui_fuiClipboard_index.$fui.getClipboardData("https://www.firstui.cn/", (res) => {
        this.fui.toast("\u94FE\u63A5\u590D\u5236\u6210\u529F");
        this.show = false;
      }, e);
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_animation2 = common_vendor.resolveComponent("fui-animation");
  (_easycom_fui_button2 + _easycom_fui_animation2)();
}
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_animation = () => "../../../components/firstui/fui-animation/fui-animation.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_animation)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: `${$data.resUrl}/member/img_banner_3x.png`,
    b: `${$data.resUrl}/member/img_mod_bg.png`,
    c: common_vendor.o($options.purchase),
    d: common_vendor.p({
      radius: "100rpx",
      background: "linear-gradient(180deg, #E3BF82 0%, #997B4A 100%)",
      borderColor: "rgba(0,0,0,0)",
      ["border-width"]: "0"
    }),
    e: common_vendor.f($data.menus, (item, index, i0) => {
      return {
        a: `/static/images/member/icon_${item.icon}_3x.png`,
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => $options.href(index))
      };
    }),
    f: common_vendor.o($options.getLink),
    g: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "linear-gradient(180deg, #E3BF82 0%, #997B4A 100%)",
      borderColor: "rgba(0,0,0,0)",
      ["border-width"]: "0"
    }),
    h: common_vendor.o($options.handleClick),
    i: common_vendor.p({
      duration: 500,
      animationType: ["fade"],
      styles: $data.styles,
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/vip/vip.vue"]]);
my.createPage(MiniProgramPage);
