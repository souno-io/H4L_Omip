"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-divider",
  props: {
    text: {
      type: String,
      default: ""
    },
    height: {
      type: [Number, String],
      default: 100
    },
    width: {
      type: String,
      default: "400rpx"
    },
    dividerColor: {
      type: String,
      default: "#CCCCCC"
    },
    color: {
      type: String,
      default: "#B2B2B2"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    backgroundColor: {
      type: String,
      default: "#F1F4FA"
    }
  },
  computed: {
    getTop() {
      return Number(this.height) / 2 + "rpx";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.width,
    b: $props.dividerColor,
    c: $options.getTop,
    d: $props.text
  }, $props.text ? {
    e: common_vendor.t($props.text),
    f: $props.fontWeight,
    g: $props.color,
    h: $props.size + "rpx",
    i: $props.size + "rpx"
  } : {}, {
    j: $props.backgroundColor,
    k: $props.height + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a128a94"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-divider/fui-divider.vue"]]);
my.createComponent(Component);
