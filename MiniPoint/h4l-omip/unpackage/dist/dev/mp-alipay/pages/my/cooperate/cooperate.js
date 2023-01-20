"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiClipboard_index = require("../../../components/firstui/fui-clipboard/index.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      menus: [{
        icon: "app",
        name: "App\u5B9A\u5236"
      }, {
        icon: "web",
        name: "\u7F51\u7AD9\u5B9A\u5236"
      }, {
        icon: "applet",
        name: "\u5C0F\u7A0B\u5E8F"
      }, {
        icon: "design",
        name: "UI\u5B9A\u5236"
      }, {
        icon: "code",
        name: "\u8D21\u732E\u4EE3\u7801"
      }, {
        icon: "cooperation",
        name: "\u5176\u4ED6\u5408\u4F5C"
      }],
      contacts: [{
        icon: "email",
        text: "\u90AE\u7BB1",
        value: "firstui@126.com"
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
      },
      idx: 0,
      title: "\u5F00\u53D1\u5B9A\u5236"
    };
  },
  computed: common_vendor.mapState(["status"]),
  onLoad() {
    if (this.status == 1) {
      this.contacts = [{
        icon: "email",
        text: "\u90AE\u7BB1",
        value: "firstui@126.com"
      }, {
        icon: "weixin",
        text: "\u5FAE\u4FE1",
        value: "wx_firstui"
      }, {
        icon: "qq",
        text: "QQ",
        value: "3560662983"
      }];
    }
  },
  methods: {
    copy(e, content, title) {
      title = title || "\u94FE\u63A5";
      components_firstui_fuiClipboard_index.$fui.getClipboardData(content, (res) => {
        this.fui.toast(`${title}\u590D\u5236\u6210\u529F`);
      }, e);
    },
    open(idx) {
      this.idx = idx;
      if (idx === 4) {
        this.title = "\u8D21\u732E\u4EE3\u7801";
      } else if (idx === 5) {
        this.title = "\u5176\u4ED6\u5408\u4F5C";
      } else {
        this.title = "\u5F00\u53D1\u5B9A\u5236";
      }
      setTimeout(() => {
        this.show = true;
      }, 80);
    },
    close() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_divider2 = common_vendor.resolveComponent("fui-divider");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_animation2 = common_vendor.resolveComponent("fui-animation");
  (_easycom_fui_divider2 + _easycom_fui_button2 + _easycom_fui_animation2)();
}
const _easycom_fui_divider = () => "../../../components/firstui/fui-divider/fui-divider.js";
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_animation = () => "../../../components/firstui/fui-animation/fui-animation.js";
if (!Math) {
  (_easycom_fui_divider + _easycom_fui_button + _easycom_fui_animation)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: `${$data.resUrl}/cooperate/light/img_banner_3x.png`,
    b: common_vendor.f($data.menus, (model, idx, i0) => {
      return {
        a: `/static/images/cooperate/light/icon_${model.icon}_3x.png`,
        b: common_vendor.t(model.name),
        c: common_vendor.n("fui-bg__" + idx),
        d: idx,
        e: common_vendor.o(($event) => $options.open(idx))
      };
    }),
    c: common_vendor.f($data.contacts, (item, index, i0) => {
      return {
        a: `/static/images/cooperate/light/icon_${item.icon}_3x.png`,
        b: common_vendor.t(item.text),
        c: index,
        d: common_vendor.o(($event) => $options.copy($event, item.value, item.text))
      };
    }),
    d: common_vendor.p({
      backgroundColor: "#fff",
      dividerColor: "#F1F4FA",
      color: "#465CFF",
      text: "\u8054\u7CFB\u65B9\u5F0F",
      size: 28
    }),
    e: common_vendor.t($data.title),
    f: $data.idx < 4
  }, $data.idx < 4 ? {} : {}, {
    g: $data.idx === 4
  }, $data.idx === 4 ? {
    h: common_vendor.o(($event) => $options.copy($event, "https://github.com/FirstUI/FirstUI/issues")),
    i: common_vendor.o(($event) => $options.copy($event, "https://github.com/FirstUI/FirstUI/pulls"))
  } : {}, {
    j: $data.idx === 5
  }, $data.idx === 5 ? {} : {}, {
    k: common_vendor.o($options.close),
    l: common_vendor.p({
      width: "400rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "linear-gradient(270deg, #6831FF 0%, #465CFF 100%)",
      borderColor: "rgba(0,0,0,0)",
      ["border-width"]: "0"
    }),
    m: common_vendor.p({
      duration: 500,
      animationType: ["fade"],
      styles: $data.styles,
      show: $data.show
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/cooperate/cooperate.vue"]]);
my.createPage(MiniProgramPage);
