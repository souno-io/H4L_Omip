"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_layout_waterfall_index = require("./index.js");
const _sfc_main = {
  data() {
    return {
      goodsList: [],
      isEnd: false,
      pageNo: 1,
      finished: false,
      loading: false
    };
  },
  created() {
    setTimeout(() => {
      this.goodsList = pages_layout_waterfall_index.list;
    }, 300);
  },
  methods: {
    getPrice(price, type) {
      if (!price)
        return "";
      const arr = price.split(".");
      return type === 1 ? arr[0] : `.${arr[1]}`;
    },
    onEnd(e) {
      this.isEnd = true;
    },
    handleClick(item, index) {
      this.fui.toast("\u70B9\u51FB\u4E86~");
    }
  },
  onPullDownRefresh: function() {
    this.$refs.waterfall.resetLoadmore();
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
      this.goodsList = [];
      this.$nextTick(() => {
        this.goodsList = pages_layout_waterfall_index.list;
        this.pageNo = 1;
        this.finished = false;
        this.loading = false;
        this.fui.toast("\u5237\u65B0\u6210\u529F~");
      });
    }, 200);
  },
  onReachBottom: function() {
    if (this.finished || !this.isEnd || this.loading)
      return;
    this.loading = true;
    setTimeout(() => {
      const data = this.pageNo === 3 ? [] : this.pageNo === 2 ? pages_layout_waterfall_index.list.reverse() : pages_layout_waterfall_index.list;
      this.goodsList = this.goodsList.concat(data);
      this.pageNo = this.pageNo + 1;
      if (data.length < 10) {
        this.finished = true;
      }
      this.loading = false;
    }, 200);
  }
};
if (!Array) {
  const _easycom_fui_overflow_hidden2 = common_vendor.resolveComponent("fui-overflow-hidden");
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_waterfall_item2 = common_vendor.resolveComponent("fui-waterfall-item");
  const _easycom_fui_waterfall2 = common_vendor.resolveComponent("fui-waterfall");
  const _easycom_fui_loadmore2 = common_vendor.resolveComponent("fui-loadmore");
  (_easycom_fui_overflow_hidden2 + _easycom_fui_text2 + _easycom_fui_waterfall_item2 + _easycom_fui_waterfall2 + _easycom_fui_loadmore2)();
}
const _easycom_fui_overflow_hidden = () => "../../../components/firstui/fui-overflow-hidden/fui-overflow-hidden.js";
const _easycom_fui_text = () => "../../../components/firstui/fui-text/fui-text.js";
const _easycom_fui_waterfall_item = () => "../../../components/firstui/fui-waterfall-item/fui-waterfall-item.js";
const _easycom_fui_waterfall = () => "../../../components/firstui/fui-waterfall/fui-waterfall.js";
const _easycom_fui_loadmore = () => "../../../components/firstui/fui-loadmore/fui-loadmore.js";
if (!Math) {
  (_easycom_fui_overflow_hidden + _easycom_fui_text + _easycom_fui_waterfall_item + _easycom_fui_waterfall + _easycom_fui_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.goodsList, (item, index, i0) => {
      return {
        a: "3c74388b-2-" + i0 + "," + ("3c74388b-1-" + i0),
        b: common_vendor.p({
          rows: 2,
          size: 28,
          text: item.title
        }),
        c: "3c74388b-3-" + i0 + "," + ("3c74388b-1-" + i0),
        d: "3c74388b-4-" + i0 + "," + ("3c74388b-1-" + i0),
        e: common_vendor.p({
          ["font-weight"]: "500",
          lineHeight: true,
          text: $options.getPrice(item.price, 1),
          size: 34,
          color: "#FF2B2B"
        }),
        f: "3c74388b-5-" + i0 + "," + ("3c74388b-1-" + i0),
        g: common_vendor.p({
          ["font-weight"]: "500",
          text: $options.getPrice(item.price, 2),
          size: 24,
          color: "#FF2B2B"
        }),
        h: index,
        i: common_vendor.o(($event) => $options.handleClick(item, index)),
        j: "3c74388b-1-" + i0 + ",3c74388b-0",
        k: common_vendor.p({
          src: item.src
        })
      };
    }),
    b: common_vendor.p({
      ["font-weight"]: "500",
      text: "\uFFE5",
      size: 22,
      color: "#FF2B2B"
    }),
    c: common_vendor.o($options.onEnd),
    d: common_vendor.p({
      ["left-gap"]: "20",
      ["right-gap"]: "20",
      ["column-gap"]: "16",
      ["top-gap"]: "16"
    }),
    e: !$data.isEnd || $data.loading
  }, !$data.isEnd || $data.loading ? {
    f: common_vendor.p({
      activeColor: "#7F7F7F"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/waterfall/waterfall.nvue"]]);
my.createPage(MiniProgramPage);
