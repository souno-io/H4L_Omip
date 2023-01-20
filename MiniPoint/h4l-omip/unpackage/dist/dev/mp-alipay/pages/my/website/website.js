"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiClipboard_index = require("../../../components/firstui/fui-clipboard/index.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      links: [{
        img: "website",
        name: "First UI \u5B98\u7F51\u5730\u5740",
        link: "https://www.firstui.cn/"
      }, {
        img: "file",
        name: "First UI \u6587\u6863\u5730\u5740",
        link: "https://doc.firstui.cn/"
      }, {
        img: "github",
        name: "GitHub \u5730\u5740",
        link: "https://github.com/FirstUI/FirstUI"
      }, {
        img: "uni",
        name: "UniApp \u63D2\u4EF6\u5E02\u573A\u5730\u5740",
        link: "https://ext.dcloud.net.cn/publisher?id=766365"
      }]
    };
  },
  computed: common_vendor.mapState(["status"]),
  methods: {
    getLink(e) {
      const item = this.links[e.index];
      components_firstui_fuiClipboard_index.$fui.getClipboardData(item.link, (res) => {
        this.fui.toast(`${item.name}\u590D\u5236\u6210\u529F`);
      }, e);
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
    a: `${$data.resUrl}/website/light/img_banner_3x.png`,
    b: common_vendor.f($data.links, (item, index, i0) => {
      return {
        a: `/static/images/website/light/icon_${item.img}_3x.png`,
        b: common_vendor.t(item.name),
        c: index,
        d: "5a4bd8c7-0-" + i0,
        e: common_vendor.p({
          arrow: true,
          padding: [0, "32rpx"],
          bottomBorder: false,
          radius: "16rpx",
          marginTop: "24",
          index
        })
      };
    }),
    c: common_vendor.o($options.getLink)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/website/website.vue"]]);
my.createPage(MiniProgramPage);
