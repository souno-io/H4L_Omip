"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      panelData: {
        src: "/static/images/common/img_logo.png",
        title: "\u57FA\u7840\u4F7F\u7528",
        desc: "First UI\u7EC4\u4EF6\u5E93\uFF0C\u662F\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u53EF\u9760\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002"
      },
      panelData2: {
        head: "\u5E26\u6807\u9898\u7684\u5217\u8868",
        src: "/static/images/common/logo.png",
        title: "First UI\u7EC4\u4EF6\u5E93",
        desc: "First UI\u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002"
      },
      panelData3: {
        head: "First UI\u4ECB\u7ECD",
        list: [{
          src: "/static/images/common/logo.png",
          title: "First UI\u7EC4\u4EF6\u5E93",
          desc: "First UI \u662F\u4E00\u5957\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u7EC4\u4EF6\u5316\u3001\u53EF\u590D\u7528\u3001\u6613\u6269\u5C55\u3001\u4F4E\u8026\u5408\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEFUI \u7EC4\u4EF6\u5E93\u3002"
        }, {
          src: "/static/images/common/logo.png",
          title: "First UI\u8DE8\u5E73\u53F0UI\u7EC4\u4EF6\u5E93",
          desc: "First UI\u7EC4\u4EF6\u5E93\uFF0C\u662F\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u53EF\u9760\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002"
        }]
      },
      panelData4: {
        head: "\u8BBE\u7F6E\u56FE\u7247\u5927\u5C0F",
        list: [{
          src: "/static/images/common/img_logo.png",
          title: "First UI\u7EC4\u4EF6\u5E93"
        }, {
          src: "/static/images/common/img_logo.png",
          title: "First UI\u8DE8\u5E73\u53F0UI\u7EC4\u4EF6\u5E93"
        }]
      },
      panelData5: {
        head: "\u9644\u52A0\u4FE1\u606F",
        list: [{
          title: "First UI\u7EC4\u4EF6\u5E93",
          desc: "First UI\u7EC4\u4EF6\u5E93\uFF0C\u662F\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u53EF\u9760\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002",
          source: "\u5F00\u6E90\u4E2D\u56FD",
          time: "2021-08-09"
        }, {
          title: "First UI\u8DE8\u5E73\u53F0UI\u7EC4\u4EF6\u5E93",
          desc: "First UI\u7EC4\u4EF6\u5E93\uFF0C\u662F\u57FA\u4E8Euni-app\u5F00\u53D1\u7684\u4E00\u6B3E\u8F7B\u91CF\u3001\u5168\u9762\u53EF\u9760\u7684\u8DE8\u5E73\u53F0\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002",
          source: "GitHub",
          time: "2021-08-09",
          extra: "Apache License 2.0"
        }]
      }
    };
  },
  methods: {
    itemClick(e) {
      console.log(e);
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_panel2 = common_vendor.resolveComponent("fui-panel");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_panel2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_panel = () => "../../../../components/firstui/fui-panel/fui-panel.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_panel + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      panelData: $data.panelData,
      radius: "24",
      fontWeight: "600"
    }),
    c: common_vendor.p({
      panelData: $data.panelData2,
      marginTop: 24,
      size: 34,
      descSize: 26
    }),
    d: common_vendor.p({
      arrow: true,
      bottomBorder: false,
      topBorder: true,
      topLeft: "32"
    }),
    e: common_vendor.p({
      panelData: $data.panelData3,
      marginTop: 24,
      size: 34,
      descSize: 26
    }),
    f: common_vendor.p({
      panelData: $data.panelData4,
      radius: "16",
      marginTop: 24,
      width: "60",
      height: "60",
      size: 32
    }),
    g: common_vendor.o($options.itemClick),
    h: common_vendor.p({
      panelData: $data.panelData5,
      marginTop: 24,
      size: 32
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/layout/panel/panel.vue"]]);
my.createPage(MiniProgramPage);
