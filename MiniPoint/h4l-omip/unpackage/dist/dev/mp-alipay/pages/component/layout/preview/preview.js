"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      previewData: {
        label: "\u8BA2\u5355\u91D1\u989D",
        value: "\uFFE529.90",
        list: [{
          label: "\u8BA2\u5355\u53F7",
          value: "Fui00000111112",
          valueColor: "#FF2B2B"
        }, {
          label: "\u7269\u6D41\u5355\u53F7",
          value: "34409992021080911"
        }, {
          label: "\u521B\u5EFA\u65F6\u95F4",
          value: "2021-08-09 09:20"
        }, {
          label: "\u4ED8\u6B3E\u65F6\u95F4",
          value: "2021-08-09 09:30"
        }, {
          label: "\u8BA2\u5355\u5907\u6CE8",
          value: "\u8DEF\u4E0A\u8BF7\u5B89\u5168\u7B2C\u4E00\uFF0C\u5982\u679C\u8D85\u65F6\u53EF\u63D0\u524D\u6309\u5DF2\u9001\u8FBE\u6216\u4E0E\u6211\u8054\u7CFB\u3002\u8F9B\u82E6\u4E86\uFF01"
        }],
        buttons: [{
          text: "\u8054\u7CFB\u5BA2\u670D"
        }]
      },
      previewData2: {
        label: "\u4E2A\u4EBA\u4FE1\u606F",
        list: [{
          label: "\u59D3\u540D",
          value: "\u5F20\u4E09"
        }, {
          label: "\u6027\u522B",
          value: "\u7537"
        }, {
          label: "\u5E74\u9F84",
          value: "36"
        }, {
          label: "\u624B\u673A\u53F7\u7801",
          value: "189****0020"
        }, {
          label: "\u5BB6\u5EAD\u4F4F\u5740",
          value: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u9F99\u534E\u533A\u6DF1\u5733\u5317\u7AD9"
        }],
        buttons: [{
          id: 1,
          text: "\u4FEE\u6539",
          color: "#181818"
        }, {
          id: 2,
          text: "\u5220\u9664",
          color: "#FF2B2B"
        }]
      }
    };
  },
  methods: {
    btnClick(e) {
      console.log(e);
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_preview2 = common_vendor.resolveComponent("fui-preview");
  _easycom_fui_preview2();
}
const _easycom_fui_preview = () => "../../../../components/firstui/fui-preview/fui-preview.js";
if (!Math) {
  _easycom_fui_preview();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.p({
      previewData: $data.previewData
    }),
    c: common_vendor.o($options.btnClick),
    d: common_vendor.p({
      labelAlign: "justify",
      labelWidth: "112",
      previewData: $data.previewData2,
      marginTop: "24"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/layout/preview/preview.vue"]]);
my.createPage(MiniProgramPage);
