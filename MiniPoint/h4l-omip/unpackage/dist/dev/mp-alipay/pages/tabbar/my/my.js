"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiClipboard_index = require("../../../components/firstui/fui-clipboard/index.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      menus: [{
        text: "\u5206\u4EAB\u597D\u53CB",
        background: "#F2FCF6",
        src: "share",
        page: "/pages/my/share/share"
      }, {
        text: "\u8D5E\u8D4FFirstUI",
        background: "#FFFBF2",
        src: "appreciate",
        page: "appreciate"
      }, {
        text: "\u610F\u89C1\u53CD\u9988",
        background: "#F6F7FF",
        src: "proposal",
        page: "feedback"
      }, {
        text: "\u6211\u8981\u5408\u4F5C",
        background: "#FFF4F4",
        src: "cooperation",
        page: "/pages/my/cooperate/cooperate"
      }],
      list: [
        {
          text: "\u529F\u80FD\u4ECB\u7ECD",
          src: "edition",
          page: "/pages/my/updated/updated"
        },
        {
          text: "\u5F00\u6E90\u5730\u5740",
          src: "address",
          page: "/pages/my/website/website"
        },
        {
          text: "\u5E2E\u52A9\u4E2D\u5FC3",
          src: "help",
          page: "/pages/my/help/help"
        },
        {
          text: "\u5173\u4E8E\u6211\u4EEC",
          src: "aboutus",
          page: "/pages/my/about/about"
        }
      ]
    };
  },
  computed: common_vendor.mapState(["status"]),
  onLoad() {
    this.getStatus().then((res) => {
    });
  },
  methods: {
    ...common_vendor.mapActions(["getStatus"]),
    href(page, e) {
      if (page === "appreciate") {
        let urls = `${this.resUrl}/common/img_wxpay.png`;
        urls = `${this.resUrl}/common/img_alipay.png`;
        common_vendor.index.previewImage({
          urls: [urls]
        });
      } else if (page === "feedback") {
        let text = "\u590D\u5236 Issue \u94FE\u63A5\u5730\u5740";
        this.fui.modal("\u610F\u89C1\u53CD\u9988", "\u5728\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u7684\u53C2\u4E0E\u524D\uFF0C\u8BF7\u5148\u9605\u8BFB\u6587\u6863\u5F00\u53D1\u6307\u5357\u3002\u5982\u6709\u4EFB\u4F55\u7684\u610F\u89C1\u6216\u5EFA\u8BAE\uFF0C\u6B22\u8FCE\u60A8\u901A\u8FC7\u521B\u5EFA Issue \u7684\u65B9\u5F0F\u544A\u77E5\u6211\u4EEC\u3002", (res) => {
          if (res) {
            this.getLink("https://github.com/FirstUI/FirstUI/issues", e);
          }
        }, false, "", text);
      } else {
        this.fui.href(page);
      }
    },
    getLink(link, e) {
      components_firstui_fuiClipboard_index.$fui.getClipboardData(link, (res) => {
        this.fui.toast("\u94FE\u63A5\u590D\u5236\u6210\u529F");
      }, e);
    }
  },
  onShareAppMessage() {
    return {
      title: "First UI\u7EC4\u4EF6\u5E93"
    };
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
    a: `${$data.resUrl}/my/light/img_banner_3x.png`,
    b: `${$data.resUrl}/my/light/img_mod_bg.png`,
    c: common_vendor.o(($event) => $options.href("/pages/my/vip/vip")),
    d: common_vendor.f($data.menus, (item, index, i0) => {
      return common_vendor.e({
        a: index === 2
      }, index === 2 ? {} : {}, {
        b: `${$data.resUrl}/my/light/icon_${item.src}_3x.png`,
        c: item.background,
        d: common_vendor.t(item.text),
        e: index,
        f: common_vendor.o(($event) => $options.href(item.page, $event))
      });
    }),
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: `/static/images/my/light/icon_${item.src}_3x.png`,
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.href(item.page)),
        d: index,
        e: "80e2d97e-0-" + i0
      };
    }),
    f: common_vendor.p({
      arrow: true,
      bottomRight: "32"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/tabbar/my/my.vue"]]);
_sfc_main.__runtimeHooks = 2;
my.createPage(MiniProgramPage);
