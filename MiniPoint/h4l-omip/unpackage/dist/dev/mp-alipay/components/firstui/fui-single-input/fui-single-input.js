"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-single-input",
  emits: ["complete", "focus", "input", "blur", "confirm"],
  props: {
    padding: {
      type: [Number, String],
      default: 88
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    password: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    native: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: Boolean,
      default: true
    },
    cursorColor: {
      type: String,
      default: ""
    },
    cursorHeight: {
      type: [Number, String],
      default: 60
    },
    length: {
      type: Number,
      default: 4
    },
    width: {
      type: [Number, String],
      default: 112
    },
    height: {
      type: [Number, String],
      default: 112
    },
    background: {
      type: String,
      default: "transparent"
    },
    border: {
      type: [Number, String],
      default: 2
    },
    borderColor: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    borderWidth: {
      type: [Number, String],
      default: 4
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 48
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: 600
    }
  },
  data() {
    return {
      inputArr: [],
      inputVal: [],
      focus: false,
      activeIndex: -1,
      aliZero: false,
      val: ""
    };
  },
  watch: {
    length(val) {
      const nums = Number(val);
      if (nums !== this.inputArr.length) {
        this.inputArr = this.getArr(nums);
      }
    },
    value(val) {
      this.focus = true;
      val = val.replace(/\s+/g, "");
      this.getVals(val);
    },
    isFocus(val) {
      this.initFocus(val);
    }
  },
  created() {
    this.inputArr = this.getArr(Number(this.length));
    let val = this.value.replace(/\s+/g, "");
    this.getVals(val, true);
  },
  mounted() {
    setTimeout(() => {
      this.initFocus(this.isFocus);
    }, 150);
  },
  methods: {
    initFocus(val) {
      if (this.disabled)
        return;
      if (val && this.activeIndex === -1) {
        this.activeIndex = 0;
      }
      if (!this.value && !val) {
        this.activeIndex = -1;
      }
      this.$nextTick(() => {
        this.focus = val;
        if (this.focus && !this.native) {
          this.onTap();
        }
      });
    },
    getArr(end) {
      let arr = Array.from(new Array(end + 1).keys()).slice(1);
      arr = arr.map((item) => {
        const ref = `fui_ref_${Math.ceil(Math.random() * 1e6).toString(36)}`;
        return ref;
      });
      return arr;
    },
    getVals(val, init = false) {
      this.val = val;
      if (!val) {
        this.inputVal = [];
        this.activeIndex = init ? -1 : 0;
      } else {
        let vals = val.split("");
        let arr = [];
        this.inputArr.forEach((item, index) => {
          arr.push(vals[index] || "");
        });
        this.inputVal = arr;
        const len = vals.length;
        this.activeIndex = len > this.length ? this.length : len;
        if (len === this.length) {
          this.$emit("complete", {
            detail: {
              value: val
            }
          });
          this.focus = false;
          common_vendor.index.hideKeyboard();
        }
      }
    },
    onTap() {
      if (this.disabled)
        return;
      this.focus = true;
      if (this.activeIndex === -1) {
        this.activeIndex = 0;
      }
      if (this.activeIndex === this.length) {
        this.activeIndex--;
      }
      this.$emit("focus", {});
    },
    onInput(e) {
      let value = e.detail.value;
      value = value.replace(/\s+/g, "");
      this.getVals(value);
      this.$emit("input", {
        detail: {
          value
        }
      });
    },
    onBlur(e) {
      let value = e.detail.value;
      value = value.replace(/\s+/g, "");
      this.focus = false;
      this.aliZero = false;
      if (!value) {
        this.activeIndex = -1;
      }
      this.$emit("blur", {
        detail: {
          value
        }
      });
    },
    onConfirm(e) {
      this.focus = false;
      common_vendor.index.hideKeyboard();
      this.$emit("confirm", e);
    },
    onAliClick() {
      setTimeout(() => {
        this.aliZero = true;
      }, 50);
    },
    clear() {
      this.val = "";
      this.inputVal = [];
      this.activeIndex = -1;
      this.$nextTick(() => {
        this.onTap();
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.inputArr, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t($props.password ? $data.inputVal[index] ? "\u25CF" : "" : $data.inputVal[index] || ""),
        b: common_vendor.t($props.password ? $data.inputVal[index] ? "\u25CF" : "" : $data.inputVal[index] || "")
      }, $props.cursor && !$props.disabled ? {
        c: !$props.cursorColor ? 1 : "",
        d: $data.activeIndex === index && $data.focus ? 1 : "",
        e: item,
        f: $props.cursorHeight + "rpx",
        g: $props.cursorColor
      } : {}, {
        h: !$props.borderColor && $data.activeIndex !== index && !$data.inputVal[index] ? 1 : "",
        i: !$props.activeColor && ($data.activeIndex === index || $data.inputVal[index]) ? 1 : "",
        j: $data.activeIndex === index || $data.inputVal[index] ? $props.activeColor : $props.borderColor,
        k: index
      });
    }),
    b: !$props.color ? 1 : "",
    c: $props.width + "rpx",
    d: $props.height + "rpx",
    e: $props.size + "rpx",
    f: $props.height + "rpx",
    g: $props.color,
    h: $props.fontWeight,
    i: $props.size + "rpx",
    j: $props.fontWeight,
    k: $props.cursor && !$props.disabled,
    l: $props.width + "rpx",
    m: $props.height + "rpx",
    n: $props.background,
    o: $props.radius + "rpx",
    p: ($props.border == 1 ? $props.borderWidth : 0) + "rpx",
    q: ($props.border == 1 ? $props.borderWidth : 0) + "rpx",
    r: ($props.border == 1 ? $props.borderWidth : 0) + "rpx",
    s: ($props.border == 1 || $props.border == 2 ? $props.borderWidth : 0) + "rpx",
    t: common_vendor.o((...args) => $options.onTap && $options.onTap(...args)),
    v: $props.padding + "rpx",
    w: $props.padding + "rpx",
    x: $props.disabled ? 1 : "",
    y: $props.native
  }, $props.native ? {
    z: $data.val,
    A: $props.password,
    B: $props.type,
    C: $data.aliZero ? 1 : "",
    D: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    E: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    F: $data.focus,
    G: $props.length,
    H: $props.disabled,
    I: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args)),
    J: common_vendor.o((...args) => $options.onTap && $options.onTap(...args))
  } : {}, {
    K: $props.marginTop + "rpx",
    L: $props.marginBottom + "rpx",
    M: common_vendor.o((...args) => $options.onAliClick && $options.onAliClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0ebc0765"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-single-input/fui-single-input.vue"]]);
my.createComponent(Component);
