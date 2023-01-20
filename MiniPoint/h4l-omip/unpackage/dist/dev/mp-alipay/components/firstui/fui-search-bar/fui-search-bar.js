"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-search-bar",
  emits: ["clear", "focus", "blur", "click", "cancel", "input", "search"],
  props: {
    background: {
      type: String,
      default: ""
    },
    paddingTb: {
      type: [Number, String],
      default: 16
    },
    paddingLr: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 72
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    color: {
      type: String,
      default: ""
    },
    inputBackground: {
      type: String,
      default: "#fff"
    },
    focus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD"
    },
    isLeft: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    cancelColor: {
      type: String,
      default: "#7F7F7F"
    },
    searchText: {
      type: String,
      default: "\u641C\u7D22"
    },
    searchColor: {
      type: String,
      default: ""
    },
    showInput: {
      type: Boolean,
      default: true
    },
    showLabel: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.val = this.value;
    if (this.focus || this.val.length > 0) {
      this.isSearch = true;
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isFocus = this.focus;
      }, 120);
    });
  },
  watch: {
    focus(val) {
      this.$nextTick(() => {
        this.isFocus = val;
      });
    },
    value(val) {
      this.val = val;
    }
  },
  data() {
    return {
      isSearch: false,
      isFocus: false,
      val: ""
    };
  },
  methods: {
    clearInput() {
      this.val = "";
      this.isFocus = true;
      this.$emit("clear");
    },
    inputFocus(e) {
      if (!this.showLabel) {
        this.isSearch = true;
      }
      this.$emit("focus", e);
    },
    inputBlur(e) {
      this.isFocus = false;
      if (!this.cancel && !this.val) {
        this.isSearch = false;
      }
      this.$emit("blur", e);
    },
    onShowInput() {
      if (!this.disabled && this.showInput) {
        this.isSearch = true;
        setTimeout(() => {
          this.isFocus = true;
        }, 20);
      }
      this.$emit("click", {});
    },
    hideInput() {
      this.isSearch = false;
      this.isFocus = false;
      common_vendor.index.hideKeyboard();
      this.$emit("cancel", {});
    },
    inputChange(e) {
      this.val = e.detail.value;
      this.$emit("input", e);
    },
    search() {
      this.$emit("search", {
        detail: {
          value: this.val
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showInput
  }, $props.showInput ? common_vendor.e({
    b: !$props.color ? 1 : "",
    c: $props.color,
    d: $props.height + "rpx",
    e: $props.placeholder,
    f: $data.val,
    g: $data.isFocus,
    h: $props.disabled,
    i: common_vendor.o((...args) => $options.inputBlur && $options.inputBlur(...args)),
    j: common_vendor.o((...args) => $options.inputFocus && $options.inputFocus(...args)),
    k: common_vendor.o((...args) => $options.inputChange && $options.inputChange(...args)),
    l: common_vendor.o((...args) => $options.search && $options.search(...args)),
    m: $data.val.length > 0 && !$props.disabled
  }, $data.val.length > 0 && !$props.disabled ? {
    n: common_vendor.o((...args) => $options.clearInput && $options.clearInput(...args))
  } : {}, {
    o: $props.height + "rpx",
    p: $props.radius + "rpx",
    q: $props.inputBackground
  }) : {}, {
    r: !$data.isFocus && !$data.isSearch && $props.showLabel
  }, !$data.isFocus && !$data.isSearch && $props.showLabel ? {
    s: common_vendor.t($props.placeholder),
    t: common_vendor.n($props.isLeft ? "fui-sb__label-left" : "fui-sb__label-center"),
    v: $props.radius + "rpx",
    w: $props.inputBackground,
    x: common_vendor.o((...args) => $options.onShowInput && $options.onShowInput(...args))
  } : {}, {
    y: $props.height + "rpx",
    z: $props.cancel && $data.isSearch && !$data.val && $props.cancelText && $props.cancelText !== "true"
  }, $props.cancel && $data.isSearch && !$data.val && $props.cancelText && $props.cancelText !== "true" ? {
    A: common_vendor.t($props.cancelText),
    B: $props.cancelColor,
    C: common_vendor.o((...args) => $options.hideInput && $options.hideInput(...args))
  } : {}, {
    D: $data.val && !$props.disabled && $data.isSearch && $props.searchText && $props.searchText !== "true"
  }, $data.val && !$props.disabled && $data.isSearch && $props.searchText && $props.searchText !== "true" ? {
    E: common_vendor.t($props.searchText),
    F: !$props.searchColor ? 1 : "",
    G: $props.searchColor,
    H: common_vendor.o((...args) => $options.search && $options.search(...args))
  } : {}, {
    I: !$props.background ? 1 : "",
    J: $props.background,
    K: $props.paddingTb + "rpx",
    L: $props.paddingTb + "rpx",
    M: $props.paddingLr + "rpx",
    N: $props.paddingLr + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-333ab654"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-search-bar/fui-search-bar.vue"]]);
my.createComponent(Component);
