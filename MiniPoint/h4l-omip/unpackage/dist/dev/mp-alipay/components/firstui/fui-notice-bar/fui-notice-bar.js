"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-notice-bar",
  emits: ["click", "leftClick", "rightClick"],
  props: {
    height: {
      type: [Number, String],
      default: 72
    },
    content: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: ""
    },
    bold: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "rgba(255, 43, 43, .05)"
    },
    padding: {
      type: Array,
      default() {
        return [];
      }
    },
    single: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    speed: {
      type: [Number, String],
      default: 100
    },
    activeMode: {
      type: String,
      default: "backwards"
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    const elId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    const elId_box = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    let isNvue = false;
    return {
      elId,
      elId_box,
      noticeWidth: 0,
      boxWidth: 0,
      wrapWidth: "",
      webviewHide: false,
      isNvue,
      animationDuration: "none",
      animationPlayState: "paused",
      animationDelay: "0s"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimation();
    });
  },
  watch: {
    scrollable(val) {
      if (val) {
        this.$nextTick(() => {
          this.initAnimation();
        });
      }
    },
    content(val) {
      this.$nextTick(() => {
        this.initAnimation();
      });
    }
  },
  methods: {
    initAnimation() {
      if (!this.content || this.content == "")
        return;
      if (this.scrollable) {
        let query = [];
        let noticeQuery = new Promise((resolve, reject) => {
          common_vendor.index.createSelectorQuery().select(`#${this.elId}`).boundingClientRect().exec((ret) => {
            this.noticeWidth = ret[0].width;
            resolve();
          });
        });
        if (this.activeMode === "forwards") {
          let boxQuery = new Promise((resolve, reject) => {
            common_vendor.index.createSelectorQuery().select(`#${this.elId_box}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(boxQuery);
        }
        query.push(noticeQuery);
        Promise.all(query).then(() => {
          this.animationDuration = `${this.noticeWidth / Number(this.speed)}s`;
          if (this.activeMode === "forwards") {
            this.animationDelay = `-${this.boxWidth / Number(this.speed)}s`;
          }
          setTimeout(() => {
            this.animationPlayState = "running";
          }, 1e3);
        });
      }
    },
    loopAnimation() {
    },
    onClick() {
      this.$emit("click", {
        param: this.param
      });
    },
    leftClick() {
      this.$emit("leftClick", {
        param: this.param
      });
    },
    rightClick() {
      this.$emit("rightClick", {
        param: this.param
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args)),
    b: common_vendor.t($props.content),
    c: $data.elId,
    d: $props.color,
    e: $props.size + "rpx",
    f: $props.scrollable && !$data.isNvue ? $props.size + "rpx" : "normal",
    g: $props.bold ? "bold" : "normal",
    h: $data.wrapWidth + "px",
    i: $data.animationDuration,
    j: $data.animationDuration,
    k: $data.webviewHide ? "paused" : $data.animationPlayState,
    l: $data.webviewHide ? "paused" : $data.animationPlayState,
    m: $data.animationDelay,
    n: $data.animationDelay,
    o: !$props.scrollable && $props.single ? 1 : "",
    p: $props.scrollable ? 1 : "",
    q: !$props.color && !$data.isNvue ? 1 : "",
    r: $data.elId_box,
    s: $props.scrollable ? 1 : "",
    t: !$props.scrollable && $props.single ? 1 : "",
    v: $props.scrollable ? 1 : "",
    w: $props.scrollable && !$data.isNvue ? $props.size + "rpx" : "auto",
    x: common_vendor.o((...args) => $options.rightClick && $options.rightClick(...args)),
    y: $props.background,
    z: $props.padding[0] || 0,
    A: $props.padding[1] || 0,
    B: $props.padding[2] || $props.padding[0] || 0,
    C: $props.padding[3] || $props.padding[1] || 0,
    D: $props.scrollable || $props.single ? $props.height + "rpx" : "auto",
    E: common_vendor.o((...args) => $options.onClick && $options.onClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ea375ab4"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-notice-bar/fui-notice-bar.vue"]]);
my.createComponent(Component);
