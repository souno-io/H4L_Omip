"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-input-number",
  emits: ["change", "update:modelValue", "input", "blur"],
  props: {
    modelValue: {
      type: [Number, String],
      default: 1
    },
    type: {
      type: String,
      default: "number"
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 99
    },
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    signWidth: {
      type: [Number, String],
      default: 24
    },
    signColor: {
      type: String,
      default: "#181818"
    },
    height: {
      type: [Number, String],
      default: 40
    },
    width: {
      type: [Number, String],
      default: 80
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    size: {
      type: Number,
      default: 26
    },
    backgroundColor: {
      type: String,
      default: "#EEEEEE"
    },
    color: {
      type: String,
      default: "#181818"
    },
    margin: {
      type: [Number, String],
      default: 16
    },
    custom: {
      type: Boolean,
      default: false
    },
    index: {
      type: [Number, String],
      default: 0
    },
    params: {
      type: [Number, String],
      default: 0
    }
  },
  created() {
    this.inputValue = this.getValue(this.modelValue);
  },
  computed: {
    getMinHeight() {
      return Number(this.height) - 8 + "rpx";
    }
  },
  data() {
    let isNvue = false;
    return {
      inputValue: 0,
      oldValue: 0,
      isNvue
    };
  },
  watch: {
    modelValue(val) {
      this.inputValue = this.getValue(val);
    },
    inputValue(newVal, oldVal) {
      if (!isNaN(Number(newVal)) && Number(newVal) !== Number(oldVal)) {
        const val = this.getValue(+newVal);
        this.oldValue = val;
        this.$emit("change", {
          value: val,
          index: this.index,
          params: this.params
        });
        this.$emit("input", val);
        this.$emit("update:modelValue", +val);
      }
    }
  },
  methods: {
    getScale(val, step) {
      let scale = 1;
      let scaleVal = 1;
      if (!Number.isInteger(step)) {
        scale = Math.pow(10, (step + "").split(".")[1].length);
      }
      if (!Number.isInteger(val)) {
        scaleVal = Math.pow(10, (val + "").split(".")[1].length);
      }
      return Math.max(scale, scaleVal);
    },
    getValue(val) {
      val = Number(val);
      if (val < this.min) {
        val = this.min;
      } else if (val > this.max) {
        val = this.max;
      }
      return val;
    },
    calcNum: function(type) {
      if (this.disabled || this.inputValue == this.min && type === "reduce" || this.inputValue == this.max && type === "plus")
        return;
      const scale = this.getScale(Number(this.inputValue), Number(this.step));
      let num = Number(this.inputValue) * scale;
      let step = this.step * scale;
      if (type === "reduce") {
        num -= step;
      } else if (type === "plus") {
        num += step;
      }
      let value = Number((num / scale).toFixed(String(scale).length - 1));
      if (value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      }
      this.inputValue = String(value);
    },
    plus: function() {
      this.calcNum("plus");
    },
    minus: function() {
      this.calcNum("reduce");
    },
    blur: function(e) {
      let value = e.detail.value;
      if (value && !isNaN(Number(value))) {
        if (~value.indexOf(".") && Number.isInteger(this.step) && Number.isInteger(Number(value))) {
          value = value.split(".")[0];
        }
        value = this.getValue(value);
      } else {
        value = this.oldValue;
      }
      setTimeout(() => {
        e.detail.value = value;
        this.$emit("blur", e);
        this.inputValue = value;
      }, this.type === "text" ? 100 : 0);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.custom
  }, !$props.custom ? {
    b: $props.signColor,
    c: $props.signWidth + "rpx"
  } : {}, {
    d: common_vendor.n($props.disabled || $props.min >= $data.inputValue ? "fui-number__disabled" : ""),
    e: common_vendor.o((...args) => $options.minus && $options.minus(...args)),
    f: $options.getMinHeight,
    g: $props.type,
    h: $props.disabled,
    i: common_vendor.o((...args) => $options.blur && $options.blur(...args)),
    j: $props.color,
    k: $props.size + "rpx",
    l: $props.backgroundColor,
    m: $props.height + "rpx",
    n: $props.height + "rpx",
    o: $props.width + "rpx",
    p: $props.radius + "rpx",
    q: $props.margin + "rpx",
    r: $props.margin + "rpx",
    s: $data.inputValue,
    t: common_vendor.o(($event) => $data.inputValue = $event.detail.value),
    v: !$props.custom
  }, !$props.custom ? {
    w: $props.signWidth + "rpx",
    x: $props.signColor,
    y: $data.isNvue ? $props.signWidth / 2 + "rpx" : "50%"
  } : {}, {
    z: !$props.custom
  }, !$props.custom ? {
    A: $props.signWidth + "rpx",
    B: $props.signColor
  } : {}, {
    C: $props.signWidth + "rpx",
    D: $props.signWidth + "rpx",
    E: common_vendor.n($props.disabled || $data.inputValue >= $props.max ? "fui-number__disabled" : ""),
    F: common_vendor.o((...args) => $options.plus && $options.plus(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fa9bba79"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-input-number/fui-input-number.vue"]]);
my.createComponent(Component);
