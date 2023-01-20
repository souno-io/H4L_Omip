"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-bottom-popup",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 24
    },
    zIndex: {
      type: [Number, String],
      default: 1001
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isAndroid = false;
    let isNvue = false;
    return {
      iphoneX: false,
      isNvue,
      isShow: false,
      isAndroid
    };
  },
  created() {
  },
  methods: {
    handleClose(e) {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    stop(e, tap) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? {
    b: $props.show ? 1 : "",
    c: $data.iphoneX && $props.safeArea ? 1 : "",
    d: $props.radius + "rpx",
    e: $props.radius + "rpx",
    f: $props.background,
    g: common_vendor.o(($event) => $options.stop($event, true)),
    h: $props.show ? 1 : "",
    i: $props.zIndex,
    j: $props.maskBackground,
    k: common_vendor.o((...args) => $options.handleClose && $options.handleClose(...args)),
    l: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c71b9f5d"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-bottom-popup/fui-bottom-popup.vue"]]);
my.createComponent(Component);
