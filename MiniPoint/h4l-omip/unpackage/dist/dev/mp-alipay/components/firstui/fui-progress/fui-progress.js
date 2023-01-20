"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-progress",
  emits: ["activeend"],
  props: {
    percent: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 8
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    showInfo: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: "#333"
    },
    percentWidth: {
      type: [Number, String],
      default: 96
    },
    background: {
      type: String,
      default: "#CCCCCC"
    },
    activeColor: {
      type: String,
      default: ""
    },
    duration: {
      type: [Number, String],
      default: 15
    }
  },
  watch: {
    percent(val) {
      this.darwProgress();
    }
  },
  mounted() {
    this.darwProgress();
  },
  data() {
    return {
      percentage: 0,
      translateX: "-100%",
      time: 0
    };
  },
  methods: {
    darwProgress() {
      let percent = Number(this.percent);
      percent = percent > 100 ? 100 : percent;
      this.time = Number(this.duration) * Math.abs(percent - this.percentage) / 1e3;
      if (percent < this.percentage && this.percentage - percent > 30) {
        this.time = this.time / 2;
      }
      this.percentage = percent;
      this.translateX = 100 - percent + "%";
      setTimeout(() => {
        this.$emit("activeend", {});
      }, this.time);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.activeColor ? 1 : "",
    b: $props.activeColor,
    c: `translate3d(-${$data.translateX},0,0)`,
    d: `${$data.time}s`,
    e: $props.height + "rpx",
    f: $props.radius + "rpx",
    g: $props.background,
    h: $props.showInfo
  }, $props.showInfo ? {
    i: common_vendor.t($data.percentage),
    j: $props.percentWidth + "rpx",
    k: $props.size + "rpx",
    l: $props.color
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8d1fbf82"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-progress/fui-progress.vue"]]);
my.createComponent(Component);
