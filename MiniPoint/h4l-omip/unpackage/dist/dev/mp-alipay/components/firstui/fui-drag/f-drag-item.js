"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "f-drag-item",
  emits: ["delete"],
  props: {
    width: {
      type: [Number, String],
      default: 40
    },
    height: {
      type: [Number, String],
      default: 40
    },
    src: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    index: {
      type: [Number, String],
      default: 0
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      type: 1,
      padding: 0,
      background: "#fff",
      size: 30,
      color: "#181818",
      isDel: false,
      delColor: "#FF2B2B",
      slideColor: "#B2B2B2"
    };
  },
  watch: {
    styles(vals) {
      this.init(vals);
    }
  },
  created() {
    this.init(this.styles);
  },
  methods: {
    init(styles) {
      styles = styles || {};
      this.type = styles.type || 1;
      this.padding = Number(styles.padding || 0);
      this.background = styles.background || "#fff";
      this.size = styles.size || 30;
      this.color = styles.color || "#181818";
      this.isDel = styles.isDel || false;
      this.delColor = styles.delColor || "#FF2B2B";
      this.slideColor = styles.slideColor || "#B2B2B2";
    },
    handleDel() {
      this.$emit("delete", {
        index: this.index
      });
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
    a: $data.type == 2 && $data.isDel
  }, $data.type == 2 && $data.isDel ? {
    b: common_vendor.p({
      name: "minussign-fill",
      color: $data.delColor,
      size: 48
    }),
    c: common_vendor.o((...args) => $options.handleDel && $options.handleDel(...args)),
    d: $data.type == 2 ? 1 : ""
  } : {}, {
    e: $props.src && $props.src !== true && $props.src !== "true" && $data.type == 1
  }, $props.src && $props.src !== true && $props.src !== "true" && $data.type == 1 ? {
    f: $props.width - $data.padding * 2 + "px",
    g: $props.height - $data.padding * 2 + "px",
    h: $props.src,
    i: $data.type == 2 ? 1 : ""
  } : {}, {
    j: $data.type == 1 && $data.isDel
  }, $data.type == 1 && $data.isDel ? {
    k: common_vendor.p({
      name: "clear-fill",
      color: $data.delColor,
      size: 48
    }),
    l: common_vendor.o((...args) => $options.handleDel && $options.handleDel(...args)),
    m: $data.type == 1 ? 1 : ""
  } : {}, {
    n: $props.text != "" && $props.text !== true && $data.type == 2
  }, $props.text != "" && $props.text !== true && $data.type == 2 ? {
    o: common_vendor.t($props.text),
    p: $data.color,
    q: $data.size + "rpx"
  } : {}, {
    r: $data.type == 1 ? 1 : "",
    s: $data.type == 2
  }, $data.type == 2 ? {
    t: common_vendor.p({
      name: "menu",
      size: 48,
      color: $data.slideColor
    })
  } : {}, {
    v: $data.type == 2 ? 1 : "",
    w: $props.width - $data.padding * 2 + "px",
    x: $props.height - $data.padding * 2 + "px",
    y: $data.background,
    z: $data.type == 1 ? "center" : "space-between",
    A: $props.width + "px",
    B: $props.height + "px"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d177f3a"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-drag/f-drag-item.vue"]]);
my.createComponent(Component);
