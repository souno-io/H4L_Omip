"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pageA = () => "./pageA.js";
const pageB = () => "./pageB.js";
const pageC = () => "./pageC.js";
const pageD = () => "./pageD.js";
const _sfc_main = {
  components: {
    pageA,
    pageB,
    pageC,
    pageD
  },
  data() {
    return {
      current: 0,
      tabBar: [
        {
          text: "\u7EC4\u4EF6",
          iconPath: "/static/images/tabbar/assembly_default_3x.png",
          selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
        },
        {
          text: "\u5E03\u5C40",
          iconPath: "/static/images/tabbar/layout_default_3x.png",
          selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
        },
        {
          text: "\u6A21\u677F",
          iconPath: "/static/images/tabbar/mod_default_3x.png",
          selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
        },
        {
          text: "\u6211\u7684",
          iconPath: "/static/images/tabbar/my_default_3x.png",
          selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
        }
      ],
      height: 0
    };
  },
  methods: {
    init(e) {
      this.height = e.height;
    },
    itemClick(e) {
      console.log(e);
      this.current = e.index;
      common_vendor.index.setNavigationBarTitle({
        title: ["\u7EC4\u4EF6", "\u5E03\u5C40", "\u6A21\u677F", "\u6211\u7684"][e.index]
      });
    }
  }
};
if (!Array) {
  const _component_page_a = common_vendor.resolveComponent("page-a");
  const _component_page_b = common_vendor.resolveComponent("page-b");
  const _component_page_c = common_vendor.resolveComponent("page-c");
  const _component_page_d = common_vendor.resolveComponent("page-d");
  const _easycom_fui_tabbar2 = common_vendor.resolveComponent("fui-tabbar");
  (_component_page_a + _component_page_b + _component_page_c + _component_page_d + _easycom_fui_tabbar2)();
}
const _easycom_fui_tabbar = () => "../../../../components/firstui/fui-tabbar/fui-tabbar.js";
if (!Math) {
  _easycom_fui_tabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.current === 0
  }, $data.current === 0 ? {} : {}, {
    b: $data.current === 1
  }, $data.current === 1 ? {} : {}, {
    c: $data.current === 2
  }, $data.current === 2 ? {} : {}, {
    d: $data.current === 3
  }, $data.current === 3 ? {} : {}, {
    e: $data.height + "px",
    f: common_vendor.o($options.init),
    g: common_vendor.o($options.itemClick),
    h: common_vendor.p({
      tabBar: $data.tabBar,
      current: $data.current
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/tabbar-C/tabbar-C.vue"]]);
my.createPage(MiniProgramPage);
