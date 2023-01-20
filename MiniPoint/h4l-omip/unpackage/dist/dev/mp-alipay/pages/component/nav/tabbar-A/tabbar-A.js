"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      tabBar: ["\u9996\u9875", "\u670B\u53CB", "\u6D88\u606F", "\u6211"],
      current: 0,
      current2: 0,
      tabBar2: [
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
      tabBar3: [
        {
          iconPath: "/static/images/tabbar/assembly_default_3x.png",
          selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
        },
        {
          iconPath: "/static/images/tabbar/layout_default_3x.png",
          selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
        },
        {
          iconPath: "/static/images/tabbar/mod_default_3x.png",
          selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
        },
        {
          iconPath: "/static/images/tabbar/my_default_3x.png",
          selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
        }
      ],
      tabBar4: [
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
          iconPath: "/static/images/common/icon_plus_3x.png",
          midButton: true,
          width: 96,
          height: 96
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
      tabBar5: [
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
          text: "\u53D1\u5E03",
          iconPath: "/static/images/common/icon_plus_3x.png",
          midButton: true,
          width: 126,
          height: 126,
          bottom: 26
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
      tabBar6: [
        {
          text: "\u9996\u9875",
          iconPath: "/static/images/component/tabbar/icon_home.png",
          selectedIconPath: "/static/images/component/tabbar/icon_home_fill.png",
          badge: 1
        },
        {
          text: "\u5206\u7C7B",
          iconPath: "/static/images/component/tabbar/icon_classify.png",
          selectedIconPath: "/static/images/component/tabbar/icon_classify_fill.png",
          badge: 2,
          dot: true
        },
        {
          text: "\u6211\u7684",
          iconPath: "/static/images/component/tabbar/icon_my.png",
          selectedIconPath: "/static/images/component/tabbar/icon_my_fill.png"
        }
      ]
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    itemClick(e) {
      console.log(e);
      this.current = e.index;
    },
    itemClick2(e) {
      console.log(e);
      if (e.index == 2) {
        this.fui.toast("\u60A8\u70B9\u51FB\u4E86\u5927\u56FE\u6807~");
      } else {
        this.current2 = e.index;
      }
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
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.itemClick),
    c: common_vendor.p({
      isFixed: false,
      tabBar: $data.tabBar2,
      current: $data.current
    }),
    d: common_vendor.o($options.itemClick),
    e: common_vendor.p({
      isFixed: false,
      background: "rgba(0,0,0,.5)",
      color: "rgba(255,255,255,.7)",
      selectedColor: "#fff",
      size: "32",
      ["font-weight"]: "500",
      tabBar: $data.tabBar,
      current: $data.current
    }),
    f: common_vendor.o($options.itemClick),
    g: common_vendor.p({
      isFixed: false,
      tabBar: $data.tabBar3,
      current: $data.current
    }),
    h: common_vendor.o($options.itemClick2),
    i: common_vendor.p({
      isFixed: false,
      tabBar: $data.tabBar4,
      current: $data.current2
    }),
    j: common_vendor.o($options.itemClick2),
    k: common_vendor.p({
      isFixed: false,
      tabBar: $data.tabBar5,
      current: $data.current2
    }),
    l: common_vendor.o($options.itemClick),
    m: common_vendor.p({
      isFixed: false,
      tabBar: $data.tabBar6,
      current: $data.current
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/tabbar-A/tabbar-A.vue"]]);
my.createPage(MiniProgramPage);
