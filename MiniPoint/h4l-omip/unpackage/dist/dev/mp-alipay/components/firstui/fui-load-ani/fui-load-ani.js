"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-load-ani",
  props: {
    type: {
      type: [Number, String],
      default: 1
    },
    color: {
      type: String,
      default: ""
    },
    isFixed: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type == 1
  }, $props.type == 1 ? {
    b: !$props.color || $props.color === "true" ? 1 : "",
    c: $props.color,
    d: !$props.color || $props.color === "true" ? 1 : "",
    e: $props.color,
    f: !$props.color || $props.color === "true" ? 1 : "",
    g: $props.color
  } : {}, {
    h: $props.type == 2
  }, $props.type == 2 ? {
    i: !$props.color || $props.color === "true" ? 1 : "",
    j: $props.color,
    k: !$props.color || $props.color === "true" ? 1 : "",
    l: $props.color,
    m: !$props.color || $props.color === "true" ? 1 : "",
    n: $props.color
  } : {}, {
    o: $props.type == 3
  }, $props.type == 3 ? {
    p: !$props.color || $props.color === "true" ? 1 : "",
    q: $props.color,
    r: $props.color
  } : {}, {
    s: $props.type == 4
  }, $props.type == 4 ? {
    t: !$props.color || $props.color === "true" ? 1 : "",
    v: $props.color,
    w: !$props.color || $props.color === "true" ? 1 : "",
    x: $props.color
  } : {}, {
    y: $props.type == 5
  }, $props.type == 5 ? {
    z: !$props.color || $props.color === "true" ? 1 : "",
    A: $props.color,
    B: !$props.color || $props.color === "true" ? 1 : "",
    C: $props.color,
    D: !$props.color || $props.color === "true" ? 1 : "",
    E: $props.color
  } : {}, {
    F: $props.isFixed ? 1 : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a421c086"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-load-ani/fui-load-ani.vue"]]);
my.createComponent(Component);
