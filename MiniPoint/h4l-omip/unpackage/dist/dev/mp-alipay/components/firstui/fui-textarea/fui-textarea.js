"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-textarea",
  emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "linechange", "keyboardheightchange"],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    requiredColor: {
      type: String,
      default: "#FF2B2B"
    },
    requiredTop: {
      type: String,
      default: "34rpx"
    },
    label: {
      type: String,
      default: ""
    },
    labelSize: {
      type: [Number, String],
      default: 32
    },
    labelColor: {
      type: String,
      default: "#333"
    },
    labelWidth: {
      type: [Number, String],
      default: 140
    },
    focus: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderStyle: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String],
      default: ""
    },
    modelValue: {
      type: [Number, String],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: Number,
      default: -1
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    disableDefaultPadding: {
      type: Boolean,
      default: true
    },
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "200rpx"
    },
    minHeight: {
      type: String,
      default: "30rpx"
    },
    flexStart: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#333"
    },
    textareaBorder: {
      type: Boolean,
      default: false
    },
    borderTop: {
      type: Boolean,
      default: true
    },
    topLeft: {
      type: [Number, String],
      default: 0
    },
    topRight: {
      type: [Number, String],
      default: 0
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    bottomLeft: {
      type: [Number, String],
      default: 0
    },
    bottomRight: {
      type: [Number, String],
      default: 0
    },
    borderColor: {
      type: String,
      default: "#eaeef1"
    },
    trim: {
      type: Boolean,
      default: true
    },
    textRight: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFE"
    },
    marginTop: {
      type: Number,
      default: 0
    },
    isCounter: {
      type: Boolean,
      default: false
    },
    counterColor: {
      type: String,
      default: "#B2B2B2"
    },
    counterSize: {
      type: [Number, String],
      default: 28
    }
  },
  data() {
    return {
      placeholderStyl: "",
      count: 0,
      focused: false,
      val: ""
    };
  },
  watch: {
    focus(val) {
      this.$nextTick(() => {
        this.focused = val;
      });
    },
    placeholderStyle() {
      this.fieldPlaceholderStyle();
    },
    modelValue(newVal) {
      this.val = this.getVal(newVal);
      this.count = this.getCount(String(this.val).length);
    },
    value(newVal) {
      this.val = this.getVal(newVal);
      this.count = this.getCount(String(this.val).length);
    }
  },
  created() {
    if (this.value && !this.modelValue) {
      this.val = this.getVal(this.value);
    } else {
      this.val = this.getVal(this.modelValue);
    }
    this.count = this.getCount(String(this.val).length);
    this.fieldPlaceholderStyle();
  },
  mounted() {
    this.$nextTick(() => {
      this.focused = this.focus;
    });
  },
  methods: {
    getVal(val) {
      return !val && val !== 0 ? "" : val;
    },
    fieldPlaceholderStyle() {
      if (this.placeholderStyle) {
        this.placeholderStyl = this.placeholderStyle;
      } else {
        const size = common_vendor.index.upx2px(this.size);
        this.placeholderStyl = `font-size:${size}px`;
      }
    },
    getCount(len) {
      const max = Number(this.maxlength);
      return len > max && max !== -1 ? max : len;
    },
    onInput(event) {
      let value = event.detail.value;
      if (this.trim)
        value = this.trimStr(value);
      let len = value.length;
      const max = Number(this.maxlength);
      if (len > max && max !== -1) {
        len = max;
        value = value.substring(0, max - 1);
      }
      this.count = len;
      this.val = value;
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    fieldClick() {
      this.$emit("click", {
        name: this.name
      });
    },
    onLinechange(e) {
      this.$emit("linechange", e);
    },
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e);
    },
    trimStr(str) {
      return str.replace(/^\s+|\s+$/g, "");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.borderTop && !$props.textareaBorder
  }, $props.borderTop && !$props.textareaBorder ? {
    b: $props.borderColor,
    c: $props.topLeft + "rpx",
    d: $props.topRight + "rpx"
  } : {}, {
    e: $props.required
  }, $props.required ? {
    f: $props.flexStart ? 1 : "",
    g: $props.requiredColor,
    h: $props.flexStart ? $props.requiredTop : "50%"
  } : {}, {
    i: $props.label
  }, $props.label ? {
    j: common_vendor.t($props.label),
    k: $props.labelSize + "rpx",
    l: $props.labelColor,
    m: $props.labelWidth + "rpx"
  } : {}, {
    n: $props.textRight ? 1 : "",
    o: $props.height,
    p: $props.minHeight,
    q: $props.size + "rpx",
    r: $props.color,
    s: $props.name,
    t: $data.val,
    v: $props.placeholder,
    w: $data.placeholderStyl,
    x: $props.disabled,
    y: $props.cursorSpacing,
    z: $props.maxlength,
    A: $data.focused,
    B: $props.autoHeight,
    C: $props.fixed,
    D: $props.showConfirmBar,
    E: $props.cursor,
    F: $props.selectionStart,
    G: $props.selectionEnd,
    H: $props.adjustPosition,
    I: $props.holdKeyboard,
    J: $props.disableDefaultPadding,
    K: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    L: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    M: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    N: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args)),
    O: common_vendor.o((...args) => $options.onLinechange && $options.onLinechange(...args)),
    P: common_vendor.o((...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args)),
    Q: $props.isCounter
  }, $props.isCounter ? {
    R: common_vendor.t($props.maxlength != -1 ? `${$data.count}/${$props.maxlength}` : $data.count),
    S: $props.counterSize + "rpx",
    T: $props.counterColor
  } : {}, {
    U: $props.borderBottom && !$props.textareaBorder
  }, $props.borderBottom && !$props.textareaBorder ? {
    V: $props.borderColor,
    W: $props.bottomLeft + "rpx",
    X: $props.bottomRight + "rpx"
  } : {}, {
    Y: $props.flexStart ? 1 : "",
    Z: $props.padding[0] || 0,
    aa: $props.padding[1] || 0,
    ab: $props.padding[2] || $props.padding[0] || 0,
    ac: $props.padding[3] || $props.padding[1] || 0,
    ad: $props.backgroundColor,
    ae: $props.textareaBorder ? 1 : "",
    af: $props.marginTop + "rpx",
    ag: $props.borderColor,
    ah: common_vendor.o((...args) => $options.fieldClick && $options.fieldClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-31fc37c7"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-textarea/fui-textarea.vue"]]);
my.createComponent(Component);
