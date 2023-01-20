"use strict";
const components_firstui_fuiForm_fuiValidator = require("./fui-validator.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-form",
  props: {
    padding: {
      type: Array,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    top: {
      type: [Number, String],
      default: 0
    },
    left: {
      type: [Number, String],
      default: 24
    },
    right: {
      type: [Number, String],
      default: 24
    },
    background: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: "#fff"
    },
    ridus: {
      type: [Number, String],
      default: 16
    },
    duration: {
      type: Number,
      default: 2e3
    }
  },
  data() {
    return {
      errorMsg: "",
      timer: null
    };
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    validator(model, rules, checkAll = false) {
      return new Promise((resolve, reject) => {
        try {
          let res = components_firstui_fuiForm_fuiValidator.form.validator(model, rules, checkAll);
          if (!res.isPassed && this.show) {
            this.clearTimer();
            let errors = res.errorMsg;
            if (checkAll) {
              errors = errors[0].msg;
            }
            this.errorMsg = errors;
            this.timer = setTimeout(() => {
              this.errorMsg = "";
            }, this.duration);
          }
          resolve(res);
        } catch (e) {
          reject({
            isPassed: false,
            errorMsg: "\u6821\u9A8C\u51FA\u9519\uFF0C\u8BF7\u68C0\u67E5\u4F20\u5165\u7684\u6570\u636E\u683C\u5F0F\u662F\u5426\u6709\u8BEF\uFF01"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.show
  }, $props.show ? {
    b: common_vendor.t($data.errorMsg),
    c: $props.size + "rpx",
    d: $props.color,
    e: $props.top + "px",
    f: $props.left + "rpx",
    g: $props.right + "rpx",
    h: $props.background,
    i: $props.ridus + "rpx",
    j: !$props.background ? 1 : "",
    k: $data.errorMsg ? 1 : ""
  } : {}, {
    l: $props.disabled
  }, $props.disabled ? {} : {}, {
    m: $props.padding[0] || 0,
    n: $props.padding[1] || 0,
    o: $props.padding[2] || $props.padding[0] || 0,
    p: $props.padding[3] || $props.padding[1] || 0
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f917458"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-form/fui-form.vue"]]);
my.createComponent(Component);
