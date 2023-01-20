"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-cubic-bezier",
  emits: ["click"],
  props: {
    direction: {
      type: String,
      default: "lb"
    },
    top: {
      type: [Number, String],
      default: 100
    },
    bottom: {
      type: [Number, String],
      default: 100
    },
    left: {
      type: [Number, String],
      default: 60
    },
    right: {
      type: [Number, String],
      default: 60
    },
    navbar: {
      type: Boolean,
      default: true
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      time: 0,
      animate: false,
      width: 375,
      height: 1334,
      style_x: "",
      style_y: "",
      navH: 0,
      android: false
    };
  },
  created() {
    let sys = common_vendor.index.getSystemInfoSync();
    this.width = sys.windowWidth;
    this.height = sys.windowHeight;
  },
  methods: {
    handleClick(e) {
      if (new Date().getTime() - this.time <= 550)
        return;
      this.time = new Date().getTime();
      setTimeout(() => {
        this.time = 0;
      }, 540);
      this.cbAni(e);
      this.$emit("click", {
        param: this.param
      });
    },
    cbAni(e) {
      let touch = null;
      touch = e.detail;
      let diff = {
        x: 0,
        y: 0
      };
      switch (this.direction) {
        case "rt":
          diff.x = this.width - touch.clientX - common_vendor.index.upx2px(Number(this.right));
          diff.y = common_vendor.index.upx2px(Number(this.top)) - touch.clientY;
          break;
        case "rb":
          diff.x = this.width - touch.clientX - common_vendor.index.upx2px(Number(this.right));
          diff.y = this.height - touch.clientY - common_vendor.index.upx2px(Number(this.bottom));
          break;
        case "lb":
          diff.x = common_vendor.index.upx2px(Number(this.left)) - touch.clientX;
          diff.y = this.height - touch.clientY - common_vendor.index.upx2px(Number(this.bottom));
          break;
        case "lt":
          diff.x = common_vendor.index.upx2px(Number(this.left)) - touch.clientX;
          diff.y = common_vendor.index.upx2px(Number(this.top)) - touch.clientY;
          break;
      }
      this.animate = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.style_x = `transform:translate3d(${diff.x}px,0,0)`;
          this.style_y = `transform:translate3d(0,${diff.y}px,0)`;
          setTimeout(() => {
            this.animate = false;
            this.style_x = "";
            this.style_y = "";
          }, 540);
        }, 50);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.animate
  }, $data.animate ? {
    b: $data.android ? 1 : "",
    c: common_vendor.s($data.style_y),
    d: common_vendor.s($data.style_x)
  } : {}, {
    e: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-70b0a325"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-cubic-bezier/fui-cubic-bezier.vue"]]);
my.createComponent(Component);
