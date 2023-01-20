"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-collapse-item",
  emits: ["change"],
  props: {
    index: {
      type: [Number, String],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "#fff"
    },
    animation: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: false
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: ""
    },
    borderLeft: {
      type: [Number, String],
      default: 0
    },
    arrow: {
      type: Boolean,
      default: true
    },
    arrowColor: {
      type: String,
      default: "#B2B2B2"
    },
    arrowRight: {
      type: [Number, String],
      default: 24
    },
    contentBg: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    const elId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      isOpen: false,
      isHeight: null,
      height: 0,
      elId
    };
  },
  watch: {
    open(val) {
      this.isOpen = val;
    }
  },
  updated(e) {
    this.$nextTick(() => {
      this.init();
    });
  },
  created() {
    this.collapse = this.getCollapse();
    if (this.collapse && this.collapse.children.indexOf(this) === -1) {
      this.collapse.children.push(this);
    }
    this.oldHeight = 0;
  },
  beforeUnmount() {
    this.uninstall();
  },
  mounted() {
    this.isOpen = this.open;
    this.init();
  },
  methods: {
    init() {
      this.getCollapseHeight();
    },
    uninstall() {
      if (this.collapse) {
        this.collapse.children.forEach((item, index) => {
          if (item === this) {
            this.collapse.children.splice(index, 1);
          }
        });
      }
    },
    onClick(isOpen) {
      if (this.disabled)
        return;
      this.isOpen = isOpen;
      if (this.collapse) {
        this.collapse.collapseChange(this, isOpen, this.index);
      } else {
        this.$emit("change", {
          index: this.index,
          isOpen
        });
      }
    },
    getCollapseHeight(index = 0) {
      common_vendor.index.createSelectorQuery().select(`#${this.elId}`).fields({
        size: true
      }, (data) => {
        if (index >= 10)
          return;
        if (!data) {
          index++;
          this.getCollapseHeight(index);
          return;
        }
        this.height = data.height;
        this.isHeight = true;
      }).exec();
    },
    getNvueHeight() {
      dom.getComponentRect(this.$refs["fui_collapse__el"], (option) => {
        if (option && option.result && option.size) {
          this.height = option.size.height;
          this.isHeight = true;
        }
      });
    },
    getCollapse(name = "fui-collapse") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.arrow
  }, $props.arrow ? {
    b: $props.arrowColor,
    c: $data.isOpen ? 1 : "",
    d: $props.animation ? 1 : "",
    e: $props.arrowRight + "rpx"
  } : {}, {
    f: $props.isBorder
  }, $props.isBorder ? {
    g: $props.borderColor,
    h: $props.borderLeft + "rpx",
    i: !$props.borderColor ? 1 : ""
  } : {}, {
    j: common_vendor.o(($event) => $options.onClick(!$data.isOpen)),
    k: $props.disabled ? 1 : "",
    l: $props.background,
    m: $data.elId,
    n: $data.isHeight ? 1 : "",
    o: $props.animation ? 1 : "",
    p: ($data.isOpen ? $data.height : 0) + "px",
    q: $props.contentBg
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a15865bc"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-collapse-item/fui-collapse-item.vue"]]);
my.createComponent(Component);
