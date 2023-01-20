"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-grid-item",
  inject: ["grid"],
  props: {
    highlight: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      columns: 0,
      showBorder: true,
      width: 0,
      height: 0,
      borderColor: "#eaeef1"
    };
  },
  created() {
    this.init();
  },
  beforeUnmount() {
    if (this.grid) {
      this.grid.children.forEach((item, index) => {
        if (item === this) {
          this.grid.children.splice(index, 1);
        }
      });
    }
  },
  methods: {
    init() {
      if (this.grid) {
        this.columns = this.grid.columns;
        this.showBorder = this.grid.showBorder;
        this.borderColor = this.grid.borderColor;
        this.grid.children.push(this);
        this.width = this.grid.width;
        this.height = this.grid.height;
      }
    },
    handleClick() {
      this.grid.handleClick({
        detail: {
          index: this.index
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.width
  }, $data.width ? {
    b: $data.showBorder ? 1 : "",
    c: $props.highlight ? 1 : "",
    d: $data.borderColor,
    e: $data.borderColor,
    f: $data.borderColor,
    g: $props.backgroundColor,
    h: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    i: common_vendor.s("width:" + $data.width + ";" + ($data.height ? "height:" + $data.height : ""))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7636b125"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-grid-item/fui-grid-item.vue"]]);
my.createComponent(Component);
