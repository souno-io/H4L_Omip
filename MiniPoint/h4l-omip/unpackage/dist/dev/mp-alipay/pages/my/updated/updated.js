"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      logs: [{
        date: "2022.09.28",
        version: "V1.7.0"
      }, {
        date: "2022.06.26",
        version: "V1.6.0"
      }, {
        date: "2022.05.18",
        version: "V1.5.0"
      }, {
        date: "2022.03.16",
        version: "V1.4.0"
      }, {
        date: "2021.12.31",
        version: "V1.3.0"
      }, {
        date: "2021.11.22",
        version: "V1.2.0"
      }, {
        date: "2021.09.07",
        version: "V1.1.0"
      }, {
        date: "2021.08.02",
        version: "V1.0.0"
      }]
    };
  },
  methods: {
    detail(date, version) {
      this.fui.href(`../log/log?date=${date}&version=${version}`);
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
    a: common_vendor.f($data.logs, (item, index, i0) => {
      return {
        a: common_vendor.t(item.version),
        b: common_vendor.t(item.date),
        c: index,
        d: common_vendor.o(($event) => $options.detail(item.date, item.version)),
        e: "04899907-0-" + i0
      };
    }),
    b: common_vendor.p({
      ["bottom-right"]: "32",
      arrow: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/updated/updated.vue"]]);
my.createPage(MiniProgramPage);
