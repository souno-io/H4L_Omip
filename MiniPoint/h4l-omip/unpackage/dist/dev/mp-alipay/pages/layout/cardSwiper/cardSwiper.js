"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      current2: 0,
      items: [{
        src: "https://res.firstui.cn/static/images/component/sc/img_sc_1.png"
      }, {
        src: "https://res.firstui.cn/static/images/component/sc/img_sc_2.png"
      }, {
        src: "https://res.firstui.cn/static/images/component/sc/img_sc_3.png"
      }],
      styles: {
        activeBackground: "#FFB703",
        activeWidth: 30
      }
    };
  },
  methods: {
    vip() {
      const url = "/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9";
      this.fui.href(url);
    },
    href() {
      const url = "/pages/component/expand/swiperDot/swiperDot";
      this.fui.href(url);
    },
    change(e) {
      this.current = e.detail.current;
    },
    change2(e) {
      this.current2 = e.detail.current;
    }
  }
};
if (!Array) {
  const _easycom_fui_swiper_dot2 = common_vendor.resolveComponent("fui-swiper-dot");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_swiper_dot2 + _easycom_fui_button2)();
}
const _easycom_fui_swiper_dot = () => "../../../components/firstui/fui-swiper-dot/fui-swiper-dot.js";
const _easycom_fui_button = () => "../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_swiper_dot + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: $data.current !== index ? 1 : "",
        c: index
      };
    }),
    c: common_vendor.o((...args) => $options.change && $options.change(...args)),
    d: common_vendor.p({
      items: $data.items,
      current: $data.current
    }),
    e: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: index
      };
    }),
    f: common_vendor.o((...args) => $options.change2 && $options.change2(...args)),
    g: common_vendor.p({
      items: $data.items,
      current: $data.current2,
      styles: $data.styles
    }),
    h: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: index
      };
    }),
    i: common_vendor.o($options.href),
    j: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "More",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/cardSwiper/cardSwiper.nvue"]]);
my.createPage(MiniProgramPage);
