"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "f-index-list-item",
  props: {
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    selectedColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: "#ccc"
    },
    isSrc: {
      type: Boolean,
      default: false
    },
    subRight: {
      type: Boolean,
      default: true
    },
    last: {
      type: Boolean,
      default: false
    },
    idx: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onClick() {
      this.$emit("itemClick", {
        idx: this.idx,
        index: this.index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.isSelect
  }, $props.isSelect ? common_vendor.e({
    b: $props.model.checked
  }, $props.model.checked ? {} : {}, {
    c: (!$props.selectedColor || $props.selectedColor == "true") && $props.model.checked ? 1 : "",
    d: $props.model.checked ? $props.selectedColor : "#fff",
    e: $props.model.checked ? $props.selectedColor : $props.borderColor
  }) : {}, {
    f: $props.isSrc
  }, $props.isSrc ? common_vendor.e({
    g: $props.model.src
  }, $props.model.src ? {
    h: $props.model.src
  } : {}) : {}, {
    i: common_vendor.t($props.model.text || ""),
    j: common_vendor.t($props.model.subText || ""),
    k: !$props.last
  }, !$props.last ? {} : {}, {
    l: $props.subRight ? 1 : "",
    m: common_vendor.o((...args) => $options.onClick && $options.onClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-38ce29e4"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-index-list/f-index-list-item.vue"]]);
my.createComponent(Component);
