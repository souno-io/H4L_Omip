"use strict";
const pages_component_expand_table_tableData = require("./tableData.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tableData: pages_component_expand_table_tableData.data.table,
      itemList: pages_component_expand_table_tableData.data.itemList,
      headerData: [{
        prop: "name",
        label: "\u540D\u79F0"
      }, {
        prop: "province",
        label: "\u7701\u4EFD"
      }, {
        prop: "city",
        label: "\u57CE\u5E02"
      }],
      header: [{
        prop: "date",
        label: "\u65E5\u671F",
        fixed: true
      }, {
        prop: "name",
        label: "\u540D\u79F0"
      }, {
        prop: "province",
        label: "\u7701\u4EFD"
      }, {
        prop: "city",
        label: "\u57CE\u5E02"
      }, {
        prop: "address",
        label: "\u5730\u5740",
        width: 320
      }, {
        label: "\u64CD\u4F5C",
        fixed: "right",
        type: 3,
        width: 160,
        buttons: [{
          text: "\u8BE6\u60C5",
          color: "#465CFF",
          fontWeight: 600
        }]
      }]
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    rowClick(e) {
      console.log(e);
    },
    detail(e) {
      console.log(e);
      this.fui.toast(e.item.name);
    }
  }
};
if (!Array) {
  const _easycom_fui_table2 = common_vendor.resolveComponent("fui-table");
  _easycom_fui_table2();
}
const _easycom_fui_table = () => "../../../../components/firstui/fui-table/fui-table.js";
if (!Math) {
  _easycom_fui_table();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      itemList: $data.tableData,
      header: $data.headerData
    }),
    c: common_vendor.o($options.rowClick),
    d: common_vendor.p({
      full: true,
      stripe: true,
      itemList: $data.tableData,
      header: $data.headerData
    }),
    e: common_vendor.o($options.detail),
    f: common_vendor.p({
      fixed: true,
      height: "600",
      itemList: $data.itemList,
      header: $data.header
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/table/table.vue"]]);
my.createPage(MiniProgramPage);
