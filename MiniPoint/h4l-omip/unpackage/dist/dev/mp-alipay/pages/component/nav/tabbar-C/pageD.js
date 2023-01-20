"use strict";
const common_vendor = require("../../../../common/vendor.js");
const components_firstui_fuiClipboard_index = require("../../../../components/firstui/fui-clipboard/index.js");
const _sfc_main = {
  computed: common_vendor.mapState(["version", "status"]),
  data() {
    return {};
  },
  methods: {
    getLink(e) {
      components_firstui_fuiClipboard_index.$fui.getClipboardData("https://github.com/FirstUI/FirstUI", (res) => {
        this.fui.toast("GitHub\u5730\u5740\u590D\u5236\u6210\u529F");
      }, e);
    },
    href(page) {
      this.fui.href(page);
    }
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_footer2 = common_vendor.resolveComponent("fui-footer");
  (_easycom_fui_list_cell2 + _easycom_fui_footer2)();
}
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_footer = () => "../../../../components/firstui/fui-footer/fui-footer.js";
if (!Math) {
  (_easycom_fui_list_cell + _easycom_fui_footer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.version),
    b: common_vendor.o($options.getLink),
    c: common_vendor.p({
      topBorder: true,
      arrow: true
    }),
    d: common_vendor.o(($event) => $options.href("/pages/my/updated/updated")),
    e: common_vendor.p({
      arrow: true
    }),
    f: common_vendor.o(($event) => $options.href("/pages/my/vip/vip")),
    g: common_vendor.p({
      bottomLeft: "0",
      arrow: true
    }),
    h: common_vendor.p({
      isFixed: true,
      text: "Copyright \xA9 2021 First UI. All Rights Reserved."
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/tabbar-C/pageD.vue"]]);
my.createComponent(Component);
