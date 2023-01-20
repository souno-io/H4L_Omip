"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-switch",
  emits: ["change"],
  props: {
    name: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "switch"
    },
    color: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: "#ccc"
    },
    checkMarkColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    let isNvue = false;
    return {
      val: false,
      isNvue
    };
  },
  watch: {
    checked(val) {
      this.val = val;
    }
  },
  created() {
    this.val = this.checked;
    this.label = this.getParent();
    if (this.label) {
      this.label.childrens.push(this);
    }
  },
  methods: {
    change(e, label) {
      if (this.label && !label)
        return;
      this.val = e.detail.value;
      this.$emit("change", e);
    },
    labelClick() {
      if (this.disabled)
        return;
      let e = {
        detail: {
          value: !this.val
        }
      };
      this.change(e, true);
    },
    getParent(name = "fui-label") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type === "switch"
  }, $props.type === "switch" ? {
    b: common_vendor.o((...args) => $options.change && $options.change(...args)),
    c: $props.name,
    d: $data.val,
    e: $props.disabled,
    f: $props.color,
    g: $data.val ? $props.color : "#dfdfdf",
    h: $data.val ? $props.color : $props.borderColor,
    i: $data.val ? 1 : "",
    j: $props.disabled ? 1 : "",
    k: $data.val && !$props.color ? 1 : ""
  } : common_vendor.e({
    l: $data.val
  }, $data.val ? {
    m: $props.checkMarkColor,
    n: $props.checkMarkColor
  } : {}, {
    o: common_vendor.o((...args) => $options.change && $options.change(...args)),
    p: $props.name,
    q: $data.isNvue ? "switch" : "checkbox",
    r: $data.val,
    s: $props.disabled,
    t: $props.disabled ? 1 : "",
    v: !$props.color && $data.val ? 1 : "",
    w: $data.val ? $props.color : "#fff",
    x: $data.val ? `1px solid ${$props.color}` : `1px solid ${$props.borderColor}`
  }), {
    y: $data.isNvue ? 1 : $props.scaleRatio,
    z: `scale(${$data.isNvue ? $props.scaleRatio : 1})`
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-27f89589"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-switch/fui-switch.vue"]]);
my.createComponent(Component);
