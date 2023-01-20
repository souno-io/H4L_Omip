"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiCopyText_lib_index = require("./lib/index.js");
const _sfc_main = {
  name: "fui-copy-text",
  emits: ["click", "copy"],
  props: {
    text: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 28
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    color: {
      type: String,
      default: "#181818"
    },
    background: {
      type: String,
      default: "transparent"
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "top"
    },
    zIndex: {
      type: [Number, String],
      default: 1001
    },
    removeCopy: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      showTooltip: false
    };
  },
  methods: {
    isPC() {
      if (typeof navigator !== "object")
        return false;
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      var flag = true;
      for (var v = 0; v < Agents.length - 1; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    handleCopyByPC(e) {
    },
    handleCopy(e) {
      if (this.showBtn || this.buttons.length > 0) {
        this.showTooltip = true;
      } else {
        this.copyVal(e);
      }
    },
    copyVal(e) {
      components_firstui_fuiCopyText_lib_index.$fui.getClipboardData(
        this.value || this.text,
        (res) => {
          if (res) {
            common_vendor.index.showToast({
              title: "\u590D\u5236\u6210\u529F",
              icon: "none"
            });
            this.$emit("copy", {
              text: this.text,
              value: this.value
            });
          }
        },
        e
      );
      this.hiddenTooltip();
    },
    hiddenTooltip() {
      this.showTooltip = false;
    },
    buttonTap(index) {
      this.$emit("click", {
        index,
        text: this.buttons[index]
      });
      this.hiddenTooltip();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.text),
    b: common_vendor.o((...args) => $options.handleCopy && $options.handleCopy(...args)),
    c: $props.color,
    d: $props.size + "rpx",
    e: $props.fontWeight,
    f: $data.showTooltip ? $props.background : "transparent",
    g: $data.showTooltip
  }, $data.showTooltip ? common_vendor.e({
    h: !$props.removeCopy || $props.buttons.length === 0
  }, !$props.removeCopy || $props.buttons.length === 0 ? {
    i: ($props.direction == "left" || $props.direction == "right") && $props.buttons.length > 0 ? 1 : "",
    j: common_vendor.o((...args) => $options.copyVal && $options.copyVal(...args))
  } : {}, {
    k: common_vendor.f($props.buttons, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.buttonTap(index))
      };
    }),
    l: $props.direction == "left" || $props.direction == "right" ? 1 : "",
    m: common_vendor.n("fui-copy__tooltip-" + $props.direction),
    n: common_vendor.n(($props.direction == "left" || $props.direction == "right") && $props.buttons.length > 0 ? "fui-copy__list-column" : ""),
    o: $props.zIndex
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e2a45a81"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-copy-text/fui-copy-text.vue"]]);
my.createComponent(Component);
