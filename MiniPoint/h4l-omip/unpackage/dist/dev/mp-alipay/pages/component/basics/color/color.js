"use strict";
const components_firstui_fuiClipboard_index = require("../../../../components/firstui/fui-clipboard/index.js");
const common_vendor = require("../../../../common/vendor.js");
const colors = [{
  text: "\u4E3B\u8272",
  key: "key_01",
  data: [{
    color: "#FFFFFF",
    text: "\u84DD\u8272",
    value: "#465CFF"
  }]
}, {
  text: "\u8F85\u52A9\u8272",
  key: "key_02",
  data: [{
    color: "#FFFFFF",
    text: "\u7EA2\u8272",
    value: "#FF2B2B"
  }, {
    color: "#FFFFFF",
    text: "\u9EC4\u8272",
    value: "#FFB703"
  }, {
    color: "#FFFFFF",
    text: "\u7D2B\u8272",
    value: "#6831FF"
  }, {
    color: "#FFFFFF",
    text: "\u7EFF\u8272",
    value: "#09BE4F"
  }]
}, {
  text: "\u5B57\u4F53\u989C\u8272",
  key: "key_03",
  data: [{
    color: "#FFFFFF",
    text: "\u6DF1\u9ED1\u8272",
    value: "#181818"
  }, {
    color: "#FFFFFF",
    text: "\u6DF1\u7070\u8272",
    value: "#333333"
  }, {
    color: "#FFFFFF",
    text: "\u7070\u8272",
    value: "#B2B2B2"
  }, {
    color: "#FFFFFF",
    text: "\u6D45\u7070\u8272",
    value: "#CCCCCC"
  }, {
    color: "#181818",
    text: "\u767D\u8272",
    value: "#FFFFFF"
  }]
}, {
  text: "\u80CC\u666F\u8272",
  key: "key_04",
  data: [{
    color: "#181818",
    text: "\u6D45\u84DD",
    value: "#F1F4FA"
  }, {
    color: "#181818",
    text: "\u767D\u8272",
    value: "#FFFFFF"
  }, {
    color: "#181818",
    text: "\u7070\u8272",
    value: "#F8F8F8"
  }, {
    color: "#181818",
    text: "\u7EA2\u8272 5%",
    value: "rgba(255, 43, 43, .05)"
  }, {
    color: "#181818",
    text: "\u9EC4\u8272 10%",
    value: "rgba(255, 183, 3, .1)"
  }, {
    color: "#181818",
    text: "\u7D2B\u8272 5%",
    value: "rgba(104, 49, 255, .05)"
  }, {
    color: "#181818",
    text: "\u7EFF\u8272 5%",
    value: "rgba(9, 190, 79, .05)"
  }, {
    color: "#FFFFFF",
    text: "\u9ED1\u8272 60%",
    value: "rgba(0, 0, 0, 0.6)"
  }, {
    color: "#FFFFFF",
    text: "\u9ED1\u8272 20%",
    value: "rgba(0, 0, 0, 0.2)"
  }]
}, {
  text: "\u8FB9\u6846\u989C\u8272",
  key: "key_05",
  data: [{
    color: "#181818",
    text: "\u7070\u8272",
    value: "#EEEEEE"
  }]
}, {
  text: "\u6E10\u53D8\u8272",
  key: "key_06",
  data: [{
    color: "#FFFFFF",
    text: "\u6E10\u53D8\u8272",
    value: "#465CFF  #6831FF",
    gradual: "linear-gradient(90deg, #465CFF 0%, #6831FF 100%)"
  }, {
    color: "#FFFFFF",
    text: "\u6E10\u53D8\u8272",
    value: "#FD8C8C  #FF2B2B",
    gradual: "linear-gradient(90deg, #FD8C8C 0%, #FF2B2B 100%)"
  }]
}];
const _sfc_main = {
  data() {
    return {
      colors
    };
  },
  methods: {
    getColor(e, color) {
      components_firstui_fuiClipboard_index.$fui.getClipboardData(color, (res) => {
        this.fui.toast("\u989C\u8272\u590D\u5236\u6210\u529F");
      }, e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.colors, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: common_vendor.f(item.data, (model, idx, i1) => {
          return {
            a: common_vendor.t(model.text),
            b: common_vendor.t(model.value),
            c: common_vendor.o(($event) => $options.getColor($event, model.gradual || model.value)),
            d: idx,
            e: model.gradual || model.value,
            f: model.color
          };
        }),
        c: item.key
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/basics/color/color.vue"]]);
my.createPage(MiniProgramPage);
