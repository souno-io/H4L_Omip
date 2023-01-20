"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-form-item",
  emits: ["click"],
  props: {
    padding: {
      type: Array,
      default() {
        return ["28rpx", "32rpx"];
      }
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    label: {
      type: String,
      default: ""
    },
    labelSize: {
      type: [Number, String],
      default: 0
    },
    labelColor: {
      type: String,
      default: "#333"
    },
    labelWidth: {
      type: [Number, String],
      default: 0
    },
    labelRight: {
      type: [Number, String],
      default: 0
    },
    asterisk: {
      type: Boolean,
      default: false
    },
    asteriskColor: {
      type: String,
      default: "#FF2B2B"
    },
    background: {
      type: String,
      default: "#fff"
    },
    highlight: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: false
    },
    arrowColor: {
      type: String,
      default: "#B2B2B2"
    },
    bottomBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    left: {
      type: [Number, String],
      default: 32
    },
    right: {
      type: [Number, String],
      default: 0
    },
    radius: {
      type: String,
      default: "0"
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getLabelSize() {
      const labelSize = common_vendor.index.$fui && common_vendor.index.$fui.fuiFormItem && common_vendor.index.$fui.fuiFormItem.labelSize || 32;
      return `${this.labelSize || labelSize}rpx`;
    },
    getLabelWidth() {
      const labelWidth = common_vendor.index.$fui && common_vendor.index.$fui.fuiFormItem && common_vendor.index.$fui.fuiFormItem.labelWidth || 140;
      return `${this.labelWidth || labelWidth}rpx`;
    },
    getLabelRight() {
      const labelRight = common_vendor.index.$fui && common_vendor.index.$fui.fuiFormItem && common_vendor.index.$fui.fuiFormItem.labelRight || 16;
      return `${this.labelRight || labelRight}rpx`;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        param: this.param
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.asterisk
  }, $props.asterisk ? {
    b: $props.asteriskColor
  } : {}, {
    c: $props.label
  }, $props.label ? {
    d: common_vendor.t($props.label),
    e: $options.getLabelWidth,
    f: $options.getLabelSize,
    g: $props.labelColor,
    h: $options.getLabelRight
  } : {}, {
    i: $props.bottomBorder
  }, $props.bottomBorder ? {
    j: $props.borderColor,
    k: $props.left + "rpx",
    l: $props.right + "rpx"
  } : {}, {
    m: $props.arrow
  }, $props.arrow ? {
    n: $props.arrowColor
  } : {}, {
    o: $props.highlight ? 1 : "",
    p: $props.padding[0] || 0,
    q: $props.padding[1] || 0,
    r: $props.padding[2] || $props.padding[0] || 0,
    s: $props.padding[3] || $props.padding[1] || 0,
    t: $props.background,
    v: $props.marginTop + "rpx",
    w: $props.marginBottom + "rpx",
    x: $props.radius,
    y: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a27156ed"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-form-item/fui-form-item.vue"]]);
my.createComponent(Component);
