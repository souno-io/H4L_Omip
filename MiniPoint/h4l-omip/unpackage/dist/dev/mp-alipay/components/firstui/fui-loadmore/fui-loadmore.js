"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-loadmore",
  props: {
    height: {
      type: [Number, String],
      default: 100
    },
    state: {
      type: [Number, String],
      default: 2
    },
    initText: {
      type: String,
      default: "\u4E0A\u62C9\u52A0\u8F7D"
    },
    text: {
      type: String,
      default: "\u6B63\u5728\u52A0\u8F7D..."
    },
    noneText: {
      type: String,
      default: "\u6CA1\u6709\u66F4\u591A\u4E86"
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    iconColor: {
      type: String,
      default: "#B2B2B2"
    },
    activeColor: {
      type: String,
      default: ""
    },
    iconWidth: {
      type: [Number, String],
      default: 28
    },
    src: {
      type: String,
      default: ""
    },
    direction: {
      type: String,
      default: "row"
    }
  },
  watch: {
    state(newValue, oldValue) {
      this.$nextTick(() => {
      });
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue
    };
  },
  methods: {
    getStateText(state) {
      state = Number(state);
      return [this.initText, this.text, this.noneText][state - 1];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.src && $props.state == 2
  }, !$props.src && $props.state == 2 ? {
    b: !$data.isNvue && !$props.activeColor ? 1 : "",
    c: $props.iconWidth + "rpx",
    d: $props.iconWidth + "rpx",
    e: $props.activeColor,
    f: $props.iconColor,
    g: $props.iconColor,
    h: $props.iconColor
  } : {}, {
    i: $props.src && $props.state == 2
  }, $props.src && $props.state == 2 ? {
    j: $props.src,
    k: $props.iconWidth + "rpx",
    l: $props.iconWidth + "rpx"
  } : {}, {
    m: common_vendor.t($options.getStateText($props.state)),
    n: $props.direction === "col" ? 1 : "",
    o: $props.color,
    p: $props.size + "rpx",
    q: $props.size + "rpx",
    r: common_vendor.n("fui-loadmore__" + $props.direction),
    s: $props.height + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92e92e73"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-loadmore/fui-loadmore.vue"]]);
my.createComponent(Component);
