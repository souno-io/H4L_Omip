"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-backtop",
  emits: ["click"],
  props: {
    scrollTop: {
      type: [Number, String]
    },
    targetRef: {
      type: String,
      default: ""
    },
    threshold: {
      type: [Number, String],
      default: 320
    },
    width: {
      type: [Number, String],
      default: 80
    },
    bottom: {
      type: [Number, String],
      default: 160
    },
    right: {
      type: [Number, String],
      default: 40
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    name: {
      type: String,
      default: "top"
    },
    color: {
      type: String,
      default: "#333333"
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    scrollTop(newValue, oldValue) {
      this.scrollChange();
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      isShow: false,
      visible: true
    };
  },
  methods: {
    goBacktop: function() {
      this.visible = false;
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 120
      });
      setTimeout(() => {
        this.visible = true;
      }, 220);
      this.$emit("click", {});
    },
    scrollChange() {
      let show = this.scrollTop > this.threshold;
      if (show && this.isShow || !show && !this.isShow)
        return;
      this.isShow = show;
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  _easycom_fui_icon2();
}
const _easycom_fui_icon = () => "../fui-icon/fui-icon.js";
if (!Math) {
  _easycom_fui_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow && $data.visible
  }, $data.isShow && $data.visible ? common_vendor.e({
    b: !$props.custom
  }, !$props.custom ? {
    c: common_vendor.p({
      name: $props.name,
      size: 52,
      color: $props.color
    })
  } : {}, {
    d: $props.width + "rpx",
    e: $props.width + "rpx",
    f: $data.isNvue ? $props.width + "rpx" : "50%",
    g: $props.bottom + "rpx",
    h: $props.right + "rpx",
    i: $props.background,
    j: common_vendor.o((...args) => $options.goBacktop && $options.goBacktop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fa7d5fd2"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-backtop/fui-backtop.vue"]]);
my.createComponent(Component);
