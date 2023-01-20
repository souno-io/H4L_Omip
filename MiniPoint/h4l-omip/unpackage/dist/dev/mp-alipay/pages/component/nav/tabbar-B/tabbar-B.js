"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
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
      height: 0,
      texts: [
        "Tabbar \u6807\u7B7E\u680F\uFF0C\u7528\u4E8E\u5728\u4E0D\u540C\u529F\u80FD\u6A21\u5757\u4E4B\u95F4\u8FDB\u884C\u5207\u6362\uFF0C\u5C0F\u56FE\u6807\u5EFA\u8BAE\u5C3A\u5BF884*84\u3002",
        "\u8BE5\u4F7F\u7528\u65B9\u5F0F\u5728\u975ENvue\u7AEF\u53EA\u9002\u7528\u4E8E\u7B80\u5355\u7684\u9875\u9762\uFF0C\u8FC7\u4E8E\u590D\u6742\u7684\u9875\u9762\u5EFA\u8BAE\u4EC5App-Nvue\u7AEF\u4F7F\u7528\u3002",
        "\u975E\u5FC5\u8981\u60C5\u51B5\u4E0B\u5EFA\u8BAE\u4F7F\u7528\u539F\u751Ftabbar\u3002",
        "\u7531\u4E8ENvue\u7AEFAndroid\u4E0B\u5185\u5BB9\u8D85\u51FA\u4F1A\u5F3A\u5236\u9690\u85CF\uFF0C\u6240\u4EE5App-Nvue\u6682\u4E0D\u652F\u6301\u4E2D\u95F4\u51F8\u8D77\u56FE\u6807\uFF0C\u53EF\u4F7F\u7528\u539F\u751Ftabbar\u914D\u7F6E\u3002"
      ]
    };
  },
  methods: {
    init(e) {
      this.height = e.height;
    },
    itemClick(e) {
      console.log(e);
      this.current = e.index;
      this.setTitle(e.index);
    },
    change(e) {
      if (e.detail.source == "touch") {
        let index = e.target.current || e.detail.current;
        this.current = index;
        this.setTitle(index);
      }
    },
    setTitle(index) {
      common_vendor.index.setNavigationBarTitle({
        title: ["\u7EC4\u4EF6", "\u5E03\u5C40", "\u6A21\u677F", "\u6211\u7684"][index]
      });
    }
  }
};
if (!Array) {
  const _easycom_fui_tabbar2 = common_vendor.resolveComponent("fui-tabbar");
  _easycom_fui_tabbar2();
}
const _easycom_fui_tabbar = () => "../../../../components/firstui/fui-tabbar/fui-tabbar.js";
if (!Math) {
  _easycom_fui_tabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabBar, (tab, index, i0) => {
      return {
        a: common_vendor.t($data.texts[index]),
        b: index
      };
    }),
    b: $data.height + "px",
    c: $data.current,
    d: common_vendor.o((...args) => $options.change && $options.change(...args)),
    e: common_vendor.o($options.init),
    f: common_vendor.o($options.itemClick),
    g: common_vendor.p({
      tabBar: $data.tabBar,
      current: $data.current
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/tabbar-B/tabbar-B.nvue"]]);
my.createPage(MiniProgramPage);
