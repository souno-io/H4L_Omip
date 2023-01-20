"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      partners: [{
        name: "ThorUI\u7EC4\u4EF6\u5E93",
        src: "/links/thorui_logo.png"
      }, {
        name: "\u8DE8\u7AEF\u56FE\u8868",
        src: "/links/ucharts_logo.png"
      }, {
        name: "\u56FE\u9E1F UI",
        src: "/links/tn__logo.png"
      }]
    };
  },
  methods: {
    href(e) {
    }
  }
};
if (!Array) {
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_grid_item2 + _easycom_fui_grid2)();
}
const _easycom_fui_grid_item = () => "../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_grid = () => "../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_grid_item + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.partners, (item, index, i0) => {
      return common_vendor.e({
        a: item.name !== ""
      }, item.name !== "" ? {
        b: $data.resUrl + item.src,
        c: common_vendor.t(item.name)
      } : {}, {
        d: index,
        e: "2247d1be-1-" + i0 + ",2247d1be-0",
        f: common_vendor.p({
          index,
          highlight: item.name !== ""
        })
      });
    }),
    b: common_vendor.o($options.href)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/partner/partner.vue"]]);
my.createPage(MiniProgramPage);
