"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      processData: [{
        title: "\u5165\u573A",
        time: "07:00",
        activeColor: "#465CFF"
      }, {
        title: "\u4E3B\u573A\u6F14\u8BB2",
        time: "08:00",
        descr: "\u9A6C\u4E91\uFF08\u963F\u91CC\u5DF4\u5DF4\uFF09",
        activeColor: "#465CFF"
      }, {
        title: "\u4E16\u754C\u4E92\u8054\u7ECF\u6D4E",
        time: "08:30",
        descr: "\u9A6C\u4E91\uFF08\u963F\u91CC\u5DF4\u5DF4\uFF09",
        activeColor: "#465CFF"
      }, {
        title: "\u6253\u9020\u81EA\u5DF1\u7684\u4E92\u8054\u5E1D\u56FD",
        time: "09:30",
        descr: "\u9A6C\u5316\u817E\uFF08\u817E\u8BAF\uFF09",
        activeColor: "#FFB703"
      }, {
        title: "\u6563\u573A",
        time: "11:00",
        descr: "\u8BF7\u5E26\u8D70\u5783\u573E\uFF0C\u6709\u5E8F\u6563\u573A\u3002"
      }]
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_timeaxis_node2 = common_vendor.resolveComponent("fui-timeaxis-node");
  const _easycom_fui_timeaxis2 = common_vendor.resolveComponent("fui-timeaxis");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_timeaxis_node2 + _easycom_fui_timeaxis2 + _easycom_fui_icon2)();
}
const _easycom_fui_timeaxis_node = () => "../../../../components/firstui/fui-timeaxis-node/fui-timeaxis-node.js";
const _easycom_fui_timeaxis = () => "../../../../components/firstui/fui-timeaxis/fui-timeaxis.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_timeaxis_node + _easycom_fui_timeaxis + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.f($data.processData, (item, index, i0) => {
      return common_vendor.e({
        a: item.activeColor,
        b: common_vendor.t(item.title),
        c: index === 3 ? item.activeColor : "#181818",
        d: item.descr
      }, item.descr ? {
        e: common_vendor.t(item.descr)
      } : {}, {
        f: common_vendor.t(item.time),
        g: index !== $data.processData.length - 1 ? 1 : "",
        h: index,
        i: "02bd3804-1-" + i0 + ",02bd3804-0",
        j: common_vendor.p({
          lineColor: index < 3 ? item.activeColor : "#ccc",
          lined: index !== $data.processData.length - 1
        })
      });
    }),
    c: common_vendor.p({
      background: "#fff",
      padding: ["32rpx", "16rpx"]
    }),
    d: common_vendor.f($data.processData, (item, index, i0) => {
      return common_vendor.e({
        a: item.activeColor,
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.title),
        d: index === 3 ? item.activeColor : "#181818",
        e: item.descr
      }, item.descr ? {
        f: common_vendor.t(item.descr)
      } : {}, {
        g: index !== $data.processData.length - 1 ? 1 : "",
        h: index,
        i: "02bd3804-3-" + i0 + ",02bd3804-2",
        j: common_vendor.p({
          lineColor: index < 3 ? item.activeColor : "#ccc",
          lined: index !== $data.processData.length - 1
        })
      });
    }),
    e: common_vendor.p({
      leftWidth: "200",
      background: "#fff",
      padding: ["32rpx", "16rpx"]
    }),
    f: common_vendor.p({
      name: "check",
      size: 28,
      color: "#fff"
    }),
    g: common_vendor.p({
      name: "face",
      size: 28,
      color: "#fff"
    }),
    h: common_vendor.p({
      name: "my-fill",
      size: 28,
      color: "#fff"
    }),
    i: common_vendor.p({
      lined: false
    }),
    j: common_vendor.p({
      background: "#fff",
      padding: ["32rpx", "16rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/nav/timeAxis/timeAxis.vue"]]);
my.createPage(MiniProgramPage);
