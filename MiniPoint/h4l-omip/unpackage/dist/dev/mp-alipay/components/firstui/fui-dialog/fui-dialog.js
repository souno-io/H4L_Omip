"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-dialog",
  emits: ["click", "close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "\u6E29\u99A8\u63D0\u793A"
    },
    color: {
      type: String,
      default: "#333"
    },
    content: {
      type: String,
      default: ""
    },
    contentColor: {
      type: String,
      default: "#7F7F7F"
    },
    buttons: {
      type: Array,
      default() {
        return [{
          text: "\u53D6\u6D88"
        }, {
          text: "\u786E\u5B9A",
          color: "#465CFF"
        }];
      }
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 24
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    return {
      visible: false,
      isNvue
    };
  },
  methods: {
    handleClick(index) {
      this.$emit("click", {
        index,
        ...this.buttons[index]
      });
    },
    maskClose() {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    stop() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.visible || !$data.isNvue
  }, $data.visible || !$data.isNvue ? common_vendor.e({
    b: $props.title
  }, $props.title ? {
    c: common_vendor.t($props.title),
    d: $props.color
  } : {}, {
    e: $props.content
  }, $props.content ? {
    f: common_vendor.t($props.content),
    g: $props.contentColor
  } : {}, {
    h: !$props.title ? 1 : "",
    i: common_vendor.f($props.buttons, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: item.color || "#333333",
        d: index === 0 ? 1 : "",
        e: common_vendor.o(($event) => $options.handleClick(index))
      };
    }),
    j: $props.background,
    k: $props.radius + "rpx",
    l: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    m: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    n: $props.maskBackground,
    o: $props.show ? 1 : "",
    p: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f6503a43"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-dialog/fui-dialog.vue"]]);
my.createComponent(Component);
