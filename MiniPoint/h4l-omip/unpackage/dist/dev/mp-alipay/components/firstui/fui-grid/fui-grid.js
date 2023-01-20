"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-grid",
  emits: ["click"],
  props: {
    columns: {
      type: Number,
      default: 3
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    square: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elemId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elemId,
      width: 0,
      height: 0,
      isShow: false
    };
  },
  created() {
    this.children = [];
    let sys = common_vendor.index.getSystemInfoSync();
    this.width = 100 / this.columns + "%";
    if (this.square) {
      this.height = (sys.windowWidth - 1) / this.columns + "px";
    }
  },
  watch: {
    columns(val) {
      this.$nextTick(() => {
        this.init();
      });
    },
    showBorder(val) {
      this.childChange();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this.getWidth((width, height) => {
          this.children.forEach((item, index) => {
            item.width = width;
            item.height = height;
          });
          this.isShow = true;
        });
      }, 50);
    },
    childChange() {
      this.children.forEach((item, index) => {
        item.showBorder = this.showBorder;
      });
    },
    handleClick(e) {
      this.$emit("click", e);
    },
    getWidth(fn) {
      let isNoSupported = false;
      this.width = 100 / this.columns + "%";
      if (this.square || isNoSupported) {
        common_vendor.index.createSelectorQuery().select(`#${this.elemId}`).boundingClientRect().exec((ret) => {
          const width = Number((ret[0].width - 1) / this.columns) + "px";
          if (this.square)
            this.height = width;
          fn(this.width, this.height);
        });
      } else {
        fn(this.width, this.height);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.elemId,
    b: $props.showBorder ? 1 : "",
    c: $props.borderColor,
    d: $props.borderColor,
    e: common_vendor.n($data.isShow ? "fui-grid__wrap-show" : "fui-grid__wrap-hidden")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a018aeb"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-grid/fui-grid.vue"]]);
my.createComponent(Component);
