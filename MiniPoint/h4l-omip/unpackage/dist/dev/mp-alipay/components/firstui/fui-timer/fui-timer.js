"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-timer",
  emits: ["end"],
  props: {
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    borderWidth: {
      type: [Number, String],
      default: 0
    },
    borderColor: {
      type: String,
      default: "transparent"
    },
    background: {
      type: String,
      default: "transparent"
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#333"
    },
    colonSize: {
      type: [Number, String],
      default: 32
    },
    colonColor: {
      type: String,
      default: "#333"
    },
    value: {
      type: [Number, String],
      default: 0
    },
    maxTime: {
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
    isMs: {
      type: Boolean,
      default: false
    },
    msWidth: {
      type: [Number, String],
      default: 0
    },
    msSize: {
      type: [Number, String],
      default: 28
    },
    msColor: {
      type: String,
      default: ""
    },
    isColon: {
      type: Boolean,
      default: true
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      d: "0",
      h: "00",
      m: "00",
      s: "00",
      ms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      seconds: 0,
      loop: null,
      ani: false,
      percent: 0
    };
  },
  mounted() {
    this.seconds = Number(this.value);
    this.timer(this.seconds);
    if (this.autoStart) {
      this.startTiming();
    }
  },
  beforeUnmount() {
    this.clearTimer();
  },
  watch: {
    value(val) {
      this.clearTimer();
      this.seconds = Number(val);
      this.timer(this.seconds);
      setTimeout(() => {
        if (this.autoStart) {
          this.startTiming();
        }
      }, 0);
    }
  },
  methods: {
    getWidth(num, width) {
      num = Number(num);
      let w = Math.ceil(num > 99 ? width / 2 * num.toString().length : width);
      w = w % 2 === 0 ? w : w + 1;
      return w;
    },
    clearTimer() {
      this.ani = false;
      clearInterval(this.loop);
      this.loop = null;
    },
    startTiming() {
      let max = Number(this.maxTime);
      if (this.seconds >= max && max != 0) {
        this.endTimer();
        return;
      }
      this.clearTimer();
      this.ani = true;
      this.loop = setInterval(() => {
        this.seconds++;
        this.timer(this.seconds);
        if (this.seconds >= max && max != 0) {
          this.endTimer();
        }
      }, 1e3);
    },
    resetTimer() {
      this.d = "0";
      this.h = "00";
      this.m = "00";
      this.s = "00";
      this.seconds = 0;
      this.clearTimer();
    },
    endTimer() {
      this.clearTimer();
      this.$emit("end", {
        day: this.d,
        hour: this.h,
        minute: this.m,
        second: this.s,
        totalSeconds: this.seconds
      });
    },
    timer(seconds) {
      let [day, hour, minute, second] = [0, 0, 0, 0];
      if (seconds > 0) {
        day = this.isDays ? Math.floor(seconds / (60 * 60 * 24)) : 0;
        hour = this.isHours ? Math.floor(seconds / (60 * 60)) - day * 24 : 0;
        minute = this.isMinutes ? Math.floor(seconds / 60) - hour * 60 - day * 24 * 60 : 0;
        second = this.isSeconds ? Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60 : 0;
      }
      hour = hour < 10 ? `0${hour}` : hour;
      minute = minute < 10 ? `0${minute}` : minute;
      second = second < 10 ? `0${second}` : second;
      this.d = day;
      this.h = hour;
      this.m = minute;
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
    d: `${$props.borderWidth}rpx`,
    e: $props.borderWidth > 0 ? "solid" : "none",
    f: $props.borderWidth > 0 ? $props.borderColor : "transparent",
    g: $props.background == "transparent" && $props.borderColor == "transparent" ? "auto" : $options.getWidth($data.d, $props.width) + "rpx",
    h: $props.height + "rpx",
    i: $props.size + "rpx",
    j: $props.color
  } : {}, {
    k: $props.isDays
  }, $props.isDays ? {
    l: $props.colonSize + "rpx",
    m: $props.colonSize + "rpx",
    n: $props.colonColor
  } : {}, {
    o: $props.isHours
  }, $props.isHours ? {
    p: common_vendor.t($data.h),
    q: $props.background,
    r: `${$props.borderWidth}rpx`,
    s: $props.borderWidth > 0 ? "solid" : "",
    t: $props.borderWidth > 0 ? $props.borderColor : "transparent",
    v: $options.getWidth($data.h, $props.width) + "rpx",
    w: $props.height + "rpx",
    x: $props.size + "rpx",
    y: $props.color
  } : {}, {
    z: $props.isHours
  }, $props.isHours ? {
    A: common_vendor.t($props.isColon ? ":" : "\u65F6"),
    B: $props.colonSize + "rpx",
    C: $props.colonSize + "rpx",
    D: $props.colonColor
  } : {}, {
    E: $props.isMinutes
  }, $props.isMinutes ? {
    F: common_vendor.t($data.m),
    G: $props.background,
    H: `${$props.borderWidth}rpx`,
    I: $props.borderWidth > 0 ? "solid" : "",
    J: $props.borderWidth > 0 ? $props.borderColor : "transparent",
    K: $options.getWidth($data.m, $props.width) + "rpx",
    L: $props.height + "rpx",
    M: $props.size + "rpx",
    N: $props.color
  } : {}, {
    O: $props.isMinutes
  }, $props.isMinutes ? {
    P: common_vendor.t($props.isColon ? ":" : "\u5206"),
    Q: $props.colonSize + "rpx",
    R: $props.colonSize + "rpx",
    S: $props.colonColor
  } : {}, {
    T: $props.isSeconds
  }, $props.isSeconds ? {
    U: common_vendor.t($data.s),
    V: $props.background,
    W: `${$props.borderWidth}rpx`,
    X: $props.borderWidth > 0 ? "solid" : "",
    Y: $props.borderWidth > 0 ? $props.borderColor : "transparent",
    Z: $options.getWidth($data.s, $props.width) + "rpx",
    aa: $props.height + "rpx",
    ab: $props.size + "rpx",
    ac: $props.color
  } : {}, {
    ad: $props.isSeconds
  }, $props.isSeconds ? {
    ae: common_vendor.t($props.isColon ? "" : "\u79D2"),
    af: $props.colonSize + "rpx",
    ag: $props.colonSize + "rpx",
    ah: $props.colonColor
  } : {}, {
    ai: $props.isSeconds && $props.isMs
  }, $props.isSeconds && $props.isMs ? {
    aj: $props.colonSize + "rpx",
    ak: $props.colonSize + "rpx",
    al: $props.colonColor
  } : {}, {
    am: $props.isSeconds && $props.isMs
  }, $props.isSeconds && $props.isMs ? {
    an: common_vendor.f($data.ms, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    ao: $props.height + "rpx",
    ap: $props.height + "rpx",
    aq: $props.msSize + "rpx",
    ar: $props.msColor || $props.color,
    as: $data.ani ? 1 : "",
    at: $props.background,
    av: `${$props.borderWidth}rpx`,
    aw: $props.borderWidth > 0 ? "solid" : "",
    ax: $props.borderWidth > 0 ? $props.borderColor : "transparent",
    ay: $props.height + "rpx",
    az: $props.msWidth > 0 ? $props.msWidth + "rpx" : "auto"
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0aa07f9c"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-timer/fui-timer.vue"]]);
my.createComponent(Component);
