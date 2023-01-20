"use strict";
const pages_component_nav_indexListA_index_list = require("./index.list.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      lists: pages_component_nav_indexListA_index_list.lists,
      show: false
    };
  },
  onLoad() {
  },
  methods: {
    init() {
      this.show = true;
    },
    search(e) {
      this.fui.toast(`\u641C\u7D22\uFF1A${e.detail.value}`);
    },
    itemClick(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_search_bar2 = common_vendor.resolveComponent("fui-search-bar");
  const _easycom_fui_loadmore2 = common_vendor.resolveComponent("fui-loadmore");
  const _easycom_fui_divider2 = common_vendor.resolveComponent("fui-divider");
  const _easycom_fui_index_list2 = common_vendor.resolveComponent("fui-index-list");
  (_easycom_fui_search_bar2 + _easycom_fui_loadmore2 + _easycom_fui_divider2 + _easycom_fui_index_list2)();
}
const _easycom_fui_search_bar = () => "../../../../components/firstui/fui-search-bar/fui-search-bar.js";
const _easycom_fui_loadmore = () => "../../../../components/firstui/fui-loadmore/fui-loadmore.js";
const _easycom_fui_divider = () => "../../../../components/firstui/fui-divider/fui-divider.js";
const _easycom_fui_index_list = () => "../../../../components/firstui/fui-index-list/fui-index-list.js";
if (!Math) {
  (_easycom_fui_search_bar + _easycom_fui_loadmore + _easycom_fui_divider + _easycom_fui_index_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.search),
    b: !$data.show
  }, !$data.show ? {} : {}, {
    c: $data.show
  }, $data.show ? {
    d: common_vendor.p({
      text: "66\u4E2A\u670B\u53CB\u53CA\u8054\u7CFB\u4EBA"
    })
  } : {}, {
    e: common_vendor.o($options.init),
    f: common_vendor.o($options.itemClick),
    g: common_vendor.p({
      isSrc: true,
      listData: $data.lists
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/indexList-A/indexList-A.vue"]]);
my.createPage(MiniProgramPage);
