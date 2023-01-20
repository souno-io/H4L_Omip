"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      images: [
        "https://res.firstui.cn/static/images/component/waterfall/P_001.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_002.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_003.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_004.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_005.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_006.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_007.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_008.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_009.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_010.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_011.jpeg",
        "https://res.firstui.cn/static/images/component/waterfall/P_012.jpeg"
      ],
      isEnd: false
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    onEnd(e) {
      this.isEnd = true;
    }
  }
};
if (!Array) {
  const _easycom_fui_waterfall_item2 = common_vendor.resolveComponent("fui-waterfall-item");
  const _easycom_fui_waterfall2 = common_vendor.resolveComponent("fui-waterfall");
  const _easycom_fui_loadmore2 = common_vendor.resolveComponent("fui-loadmore");
  (_easycom_fui_waterfall_item2 + _easycom_fui_waterfall2 + _easycom_fui_loadmore2)();
}
const _easycom_fui_waterfall_item = () => "../../../../components/firstui/fui-waterfall-item/fui-waterfall-item.js";
const _easycom_fui_waterfall = () => "../../../../components/firstui/fui-waterfall/fui-waterfall.js";
const _easycom_fui_loadmore = () => "../../../../components/firstui/fui-loadmore/fui-loadmore.js";
if (!Math) {
  (_easycom_fui_waterfall_item + _easycom_fui_waterfall + _easycom_fui_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: index,
        b: "02544c16-1-" + i0 + ",02544c16-0",
        c: common_vendor.p({
          src: item
        })
      };
    }),
    c: common_vendor.o($options.onEnd),
    d: !$data.isEnd
  }, !$data.isEnd ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/waterfall/waterfall.vue"]]);
my.createPage(MiniProgramPage);
