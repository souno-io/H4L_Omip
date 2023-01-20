"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-lazyload",
  emits: ["error", "load", "click"],
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: 320
    },
    height: {
      type: [String, Number],
      default: 320
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    placeholder: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#EEEEEE"
    },
    mode: {
      type: String,
      default: "widthFix"
    },
    webp: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    },
    marginTop: {
      type: [String, Number],
      default: 0
    },
    marginRight: {
      type: [String, Number],
      default: 0
    },
    marginBottom: {
      type: [String, Number],
      default: 0
    },
    marginLeft: {
      type: [String, Number],
      default: 0
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      show: false,
      visible: false,
      elId: `fui_lazy_${Math.ceil(Math.random() * 1e6).toString(36)}`
    };
  },
  created() {
    this.visible = this.placeholder ? true : false;
    this.observer = null;
  },
  mounted() {
    setTimeout(() => {
      this.startObserver();
    }, 50);
  },
  beforeUnmount() {
    this.endObserver();
  },
  methods: {
    handleFade() {
      setTimeout(() => {
        this.show = true;
      }, 200);
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
      }, 500);
    },
    endObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
    startObserver() {
      if (this.observer || this.show)
        return;
      try {
        const observer = common_vendor.index.createIntersectionObserver(this);
        observer.relativeToViewport({
          bottom: 50
        }).observe(`#${this.elId}`, (res) => {
          if (res.intersectionRatio > 0 && !this.show) {
            this.handleFade();
            this.endObserver();
          }
        });
        this.observer = observer;
      } catch (e) {
        this.handleFade();
        this.endObserver();
      }
    },
    handleAppear(e) {
      if (this.observer || this.show)
        return;
      this.handleFade();
    },
    handleError(e) {
      if (!this.show)
        return;
      this.$emit("error", {
        detail: e.detail,
        param: this.param
      });
    },
    handleLoad(e) {
      if (!this.show)
        return;
      this.$emit("load", {
        detail: e.detail,
        param: this.param
      });
    },
    handleTap() {
      this.$emit("click", {
        param: this.param
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.visible ? "fui-lazyload__visible" : "fui-lazyload__hidden"),
    b: $props.width + "rpx",
    c: $props.height == 0 ? "rpx" : $props.height + "rpx",
    d: $props.radius + "rpx",
    e: $data.show ? $props.src : $props.placeholder,
    f: $props.height == 0 ? "widthFix" : $props.mode,
    g: $props.webp,
    h: $props.draggable,
    i: common_vendor.o((...args) => $options.handleLoad && $options.handleLoad(...args)),
    j: common_vendor.o((...args) => $options.handleError && $options.handleError(...args)),
    k: $data.elId,
    l: common_vendor.o((...args) => $options.handleAppear && $options.handleAppear(...args)),
    m: $props.background,
    n: $props.width + "rpx",
    o: $props.height == 0 ? "auto" : $props.height + "rpx",
    p: $props.radius + "rpx",
    q: $props.marginTop + "rpx",
    r: $props.marginRight + "rpx",
    s: $props.marginBottom + "rpx",
    t: $props.marginLeft + "rpx",
    v: common_vendor.o((...args) => $options.handleTap && $options.handleTap(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7ec47b47"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-lazyload/fui-lazyload.vue"]]);
my.createComponent(Component);
