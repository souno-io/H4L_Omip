"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0,
      items: [{
        background: "#09BE4F",
        title: "First UI\u7EC4\u4EF6\u5E93\uFF0C\u662F\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u53EF\u9760\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002"
      }, {
        background: "#FFB703",
        title: "UI \u6837\u5F0F\u53EF\u914D\u7F6E\uFF0C\u62D3\u5C55\u7075\u6D3B\uFF0C\u8F7B\u677E\u9002\u5E94\u4E0D\u540C\u7684\u8BBE\u8BA1\u98CE\u683C\u3002"
      }, {
        background: "#B2B2B2",
        title: "\u652F\u6301App-vue\uFF08Android\u3001IOS\uFF09\u3001App-Nvue\uFF08Android\u3001IOS\uFF09\u3002"
      }],
      styles: {
        width: 12,
        height: 12,
        activeWidth: 24
      },
      styles2: {
        width: 40,
        height: 40,
        background: "rgba(255, 43, 43, .1)",
        activeBackground: "#FF2B2B"
      },
      styles3: {
        height: 80,
        bottom: 0
      },
      styles4: {
        width: 68,
        height: 40
      }
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    change(e) {
      this.current = e.detail.current;
    },
    change2(e) {
      this.current2 = e.detail.current;
    },
    change3(e) {
      this.current3 = e.detail.current;
    },
    change4(e) {
      this.current4 = e.detail.current;
    },
    change5(e) {
      this.current5 = e.detail.current;
    }
  }
};
if (!Array) {
  const _easycom_fui_swiper_dot2 = common_vendor.resolveComponent("fui-swiper-dot");
  _easycom_fui_swiper_dot2();
}
const _easycom_fui_swiper_dot = () => "../../../../components/firstui/fui-swiper-dot/fui-swiper-dot.js";
if (!Math) {
  _easycom_fui_swiper_dot();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.background,
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.change && $options.change(...args)),
    d: common_vendor.p({
      items: $data.items,
      current: $data.current
    }),
    e: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: $data.current2 !== index ? 1 : "",
        b: item.background,
        c: index
      };
    }),
    f: common_vendor.o((...args) => $options.change2 && $options.change2(...args)),
    g: common_vendor.p({
      styles: $data.styles,
      items: $data.items,
      current: $data.current2
    }),
    h: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.background,
        b: index
      };
    }),
    i: common_vendor.o((...args) => $options.change3 && $options.change3(...args)),
    j: common_vendor.p({
      type: "2",
      styles: $data.styles2,
      items: $data.items,
      current: $data.current3
    }),
    k: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.background,
        b: index
      };
    }),
    l: common_vendor.o((...args) => $options.change4 && $options.change4(...args)),
    m: common_vendor.p({
      type: "3",
      field: "title",
      styles: $data.styles3,
      items: $data.items,
      current: $data.current4
    }),
    n: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.background,
        b: index
      };
    }),
    o: common_vendor.o((...args) => $options.change5 && $options.change5(...args)),
    p: common_vendor.p({
      type: "4",
      styles: $data.styles4,
      items: $data.items,
      current: $data.current5
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/swiperDot/swiperDot.vue"]]);
my.createPage(MiniProgramPage);
