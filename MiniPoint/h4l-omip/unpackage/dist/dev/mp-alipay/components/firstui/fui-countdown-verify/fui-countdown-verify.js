"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-countdown-verify",
  emits: ["send", "countdown", "end"],
  props: {
    text: {
      type: String,
      default: "\u53D1\u9001\u9A8C\u8BC1\u7801"
    },
    sending: {
      type: String,
      default: "\u6B63\u5728\u53D1\u9001..."
    },
    sent: {
      type: String,
      default: "s\u540E\u91CD\u65B0\u83B7\u53D6"
    },
    seconds: {
      type: [Number, String],
      default: 60
    },
    width: {
      type: [Number, String],
      default: 192
    },
    height: {
      type: [Number, String],
      default: 60
    },
    marginLeft: {
      type: [Number, String],
      default: 0
    },
    marginRight: {
      type: [Number, String],
      default: 0
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "transparent"
    },
    borderColor: {
      type: String,
      default: ""
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      showText: "",
      status: 1,
      timer: null
    };
  },
  created() {
    if (this.start) {
      this.doLoop();
    } else {
      this.showText = this.text;
      this.clearTimer();
    }
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    sendCode(e) {
      if (this.status > 1)
        return;
      this.clearTimer();
      this.status = 2;
      this.showText = this.sending;
      this.$emit("send", {
        param: this.param
      });
    },
    doLoop() {
      this.clearTimer();
      this.status = 3;
      let seconds = Number(this.seconds || 60);
      this.showText = seconds + this.sent;
      this.timer = setInterval(() => {
        if (seconds > 1) {
          --seconds;
          this.showText = seconds + this.sent;
          this.$emit("countdown", {
            seconds,
            param: this.param
          });
        } else {
          this.reset();
          this.$emit("end", {
            param: this.param
          });
        }
      }, 1e3);
    },
    success() {
      this.doLoop();
    },
    reset() {
      this.clearTimer();
      this.showText = this.text;
      this.status = 1;
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.showText),
    b: $props.size + "rpx",
    c: $props.size + "rpx",
    d: $props.color,
    e: !$props.color ? 1 : "",
    f: $data.status === 1
  }, $data.status === 1 ? {
    g: $props.radius + "rpx",
    h: common_vendor.o((...args) => $options.sendCode && $options.sendCode(...args))
  } : {}, {
    i: !$props.borderColor ? 1 : "",
    j: $props.borderColor,
    k: $props.radius * 2 + "rpx",
    l: $data.status > 1 ? 1 : "",
    m: $props.width + "rpx",
    n: $props.height + "rpx",
    o: $props.marginLeft + "rpx",
    p: $props.marginRight + "rpx",
    q: $props.radius + "rpx",
    r: $props.background,
    s: !$props.borderColor || $props.borderColor === "true" ? $props.background : $props.borderColor
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a18c2dc"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-countdown-verify/fui-countdown-verify.vue"]]);
my.createComponent(Component);
