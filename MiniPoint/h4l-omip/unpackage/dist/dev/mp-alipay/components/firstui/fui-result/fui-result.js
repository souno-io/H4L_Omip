"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-result",
  props: {
    paddingTop: {
      type: [Number, String],
      default: 96
    },
    type: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 44
    },
    color: {
      type: String,
      default: ""
    },
    descr: {
      type: String,
      default: ""
    },
    descrSize: {
      type: [Number, String],
      default: 32
    },
    descrColor: {
      type: String,
      default: ""
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue
    };
  },
  computed: {
    show() {
      return ~["success", "warning", "fail", "waiting"].indexOf(this.type);
    },
    ibColor() {
      let style = `border-color:${this.iconColor}`;
      if (this.type === "fail" || this.type === "warning") {
        style = `background:${this.iconColor}`;
      }
      return style;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.ibColor
  }, $options.ibColor ? common_vendor.e({
    b: $options.show
  }, $options.show ? common_vendor.e({
    c: common_vendor.n("fui-result__ib-" + $props.type),
    d: common_vendor.s($options.ibColor),
    e: $props.type === "fail" || $props.type === "warning"
  }, $props.type === "fail" || $props.type === "warning" ? {
    f: common_vendor.n("fui-result__ia-" + $props.type),
    g: $props.iconColor
  } : {}, {
    h: $props.background,
    i: $data.isNvue ? 1 : $props.scaleRatio,
    j: `scale(${$data.isNvue ? $props.scaleRatio : 1})`,
    k: common_vendor.n($props.background ? "" : `fui-result__bg-${$props.type}`)
  }) : {}, {
    l: $props.title
  }, $props.title ? {
    m: common_vendor.t($props.title),
    n: !$props.color ? 1 : "",
    o: $props.size + "rpx",
    p: $props.color
  } : {}, {
    q: $props.descr
  }, $props.descr ? {
    r: common_vendor.t($props.descr),
    s: !$props.descrColor ? 1 : "",
    t: $props.descrSize + "rpx",
    v: $props.descrColor
  } : {}, {
    w: $props.paddingTop + "rpx"
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df4b3b03"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-result/fui-result.vue"]]);
my.createComponent(Component);
