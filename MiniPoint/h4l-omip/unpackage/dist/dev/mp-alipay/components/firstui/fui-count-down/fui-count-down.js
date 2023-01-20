"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-count-down",
  emits: ["end", "time"],
  props: {
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    borderColor: {
      type: String,
      default: "#333"
    },
    background: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: "#333"
    },
    colonSize: {
      type: [Number, String],
      default: 28
    },
    colonColor: {
      type: String,
      default: "#333"
    },
    value: {
      type: [Number, String],
      default: 0
    },
    isDays: {
      type: Boolean,
      default: false
    },
    isHours: {
      type: Boolean,
      default: true
    },
    isMinutes: {
      type: Boolean,
      default: true
    },
    isSeconds: {
      type: Boolean,
      default: true
    },
    unitEn: {
      type: Boolean,
      default: false
    },
    isMs: {
      type: Boolean,
      default: false
    },
    msWidth: {
      type: [Number, String],
      default: 36
    },
    msSize: {
      type: [Number, String],
      default: 24
    },
    msColor: {
      type: String,
      default: ""
    },
    isColon: {
      type: Boolean,
      default: true
    },
    returnTime: {
      type: Boolean,
      default: false
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(val) {
      this.clearTimer();
      this.time = Number(val) || 0;
      this.countDown(this.time);
      setTimeout(() => {
        if (this.autoStart) {
          this.startCountdown();
        }
      }, 0);
    }
  },
  data() {
    return {
      countdown: null,
      d: "0",
      h: "00",
      i: "00",
      s: "00",
      ms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      ani: false,
      percent: 0,
      time: 0
    };
  },
  mounted() {
    this.clearTimer();
    this.time = Number(this.value) || 0;
    this.countDown(this.time);
    if (this.time > 0 && this.autoStart) {
      this.startCountdown();
    }
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    getWidth: function(num, width) {
      num = Number(num);
      let w = Math.ceil(num > 99 ? width / 2 * num.toString().length : width);
      w = w % 2 === 0 ? w : w + 1;
      return w;
    },
    clearTimer() {
      this.ani = false;
      clearInterval(this.countdown);
      this.countdown = null;
    },
    endCountdown(isSuspend = false) {
      this.clearTimer();
      if (!isSuspend) {
        this.$emit("end", {});
      }
    },
    startCountdown: function() {
      this.clearTimer();
      if (this.time <= 0) {
        this.endCountdown();
        return;
      }
      this.ani = true;
      this.countdown = setInterval(() => {
        this.time--;
        if (this.time < 0) {
          this.endCountdown();
          return;
        }
        this.countDown(this.time);
        if (this.returnTime) {
          this.$emit("time", {
            seconds: this.time
          });
        }
      }, 1e3);
    },
    resetCountdown(seconds = 0) {
      this.time = seconds || Number(this.value);
      this.clearTimer();
      this.countDown(this.time);
      if (this.autoStart) {
        this.startCountdown();
      }
    },
    countDown(seconds) {
      let [day, hour, minute, second] = [0, 0, 0, 0];
      if (seconds > 0) {
        day = this.isDays ? Math.floor(seconds / (60 * 60 * 24)) : 0;
        hour = this.isHours ? Math.floor(seconds / (60 * 60)) - day * 24 : 0;
        minute = this.isMinutes ? Math.floor(seconds / 60) - hour * 60 - day * 24 * 60 : 0;
        second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
      }
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      this.d = day;
      this.h = hour;
      this.i = minute;
      this.s = second;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.isDays
  }, $props.isDays ? {
    b: common_vendor.t($data.d),
    c: $props.background,
    d: $props.borderColor,
    e: $options.getWidth($data.d, $props.width) + "rpx",
    f: $props.height + "rpx",
    g: $props.size + "rpx",
    h: $props.color
  } : {}, {
    i: $props.isDays
  }, $props.isDays ? {
    j: common_vendor.t($props.isColon ? ":" : "\u5929"),
    k: $props.colonSize + "rpx",
    l: $props.colonSize + "rpx",
    m: $props.colonColor
  } : {}, {
    n: $props.isHours
  }, $props.isHours ? {
    o: common_vendor.t($data.h),
    p: $props.background,
    q: $props.borderColor,
    r: $options.getWidth($data.h, $props.width) + "rpx",
    s: $props.height + "rpx",
    t: $props.size + "rpx",
    v: $props.color
  } : {}, {
    w: $props.isHours
  }, $props.isHours ? {
    x: common_vendor.t($props.isColon ? ":" : "\u65F6"),
    y: $props.colonSize + "rpx",
    z: $props.colonSize + "rpx",
    A: $props.colonColor
  } : {}, {
    B: $props.isMinutes
  }, $props.isMinutes ? {
    C: common_vendor.t($data.i),
    D: $props.background,
    E: $props.borderColor,
    F: $options.getWidth($data.i, $props.width) + "rpx",
    G: $props.height + "rpx",
    H: $props.size + "rpx",
    I: $props.color
  } : {}, {
    J: $props.isMinutes
  }, $props.isMinutes ? {
    K: common_vendor.t($props.isColon ? ":" : "\u5206"),
    L: $props.colonSize + "rpx",
    M: $props.colonSize + "rpx",
    N: $props.colonColor
  } : {}, {
    O: $props.isSeconds
  }, $props.isSeconds ? {
    P: common_vendor.t($data.s),
    Q: $props.background,
    R: $props.borderColor,
    S: $options.getWidth($data.s, $props.width) + "rpx",
    T: $props.height + "rpx",
    U: $props.size + "rpx",
    V: $props.color
  } : {}, {
    W: $props.isSeconds && !$props.isColon
  }, $props.isSeconds && !$props.isColon ? {
    X: common_vendor.t($props.unitEn ? "s" : "\u79D2"),
    Y: $props.colonSize + "rpx",
    Z: $props.colonSize + "rpx",
    aa: $props.colonColor
  } : {}, {
    ab: $props.isSeconds && $props.isMs && $props.isColon
  }, $props.isSeconds && $props.isMs && $props.isColon ? {
    ac: $props.colonSize + "rpx",
    ad: $props.colonSize + "rpx",
    ae: $props.colonColor
  } : {}, {
    af: $props.isSeconds && $props.isMs
  }, $props.isSeconds && $props.isMs ? {
    ag: common_vendor.f($data.ms, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    ah: $props.height + "rpx",
    ai: $props.height + "rpx",
    aj: $props.msSize + "rpx",
    ak: $props.msColor || $props.color,
    al: $data.ani ? 1 : "",
    am: $props.background,
    an: $props.borderColor,
    ao: $props.height + "rpx",
    ap: $props.msWidth > 0 ? $props.msWidth + "rpx" : "auto"
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b4537aac"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-count-down/fui-count-down.vue"]]);
my.createComponent(Component);
