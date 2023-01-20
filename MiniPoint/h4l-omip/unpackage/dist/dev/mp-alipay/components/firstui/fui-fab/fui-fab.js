"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-fab",
  emits: ["click", "change"],
  props: {
    fabs: {
      type: Array,
      default() {
        return [];
      }
    },
    position: {
      type: String,
      default: "right"
    },
    distance: {
      type: [Number, String],
      default: 80
    },
    bottom: {
      type: [Number, String],
      default: 120
    },
    width: {
      type: [Number, String],
      default: 108
    },
    background: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  computed: {
    getStyles() {
      let styles = `bottom:${this.bottom}rpx;z-index:${this.zIndex};`;
      if (this.position === "left") {
        styles += `left:${this.distance}rpx;`;
      } else {
        styles += `right:${this.distance}rpx;`;
      }
      return styles;
    },
    getStyle() {
      return `background:${this.maskBackground};z-index:${Number(this.zIndex) - 10};`;
    }
  },
  watch: {
    isShow(val) {
      this.$emit("change", {
        isShow: val
      });
    }
  },
  data() {
    return {
      isShow: false,
      isHidden: true,
      timer: null
    };
  },
  beforeUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  methods: {
    stop() {
    },
    handleClick: function(e, index) {
      this.isHidden = false;
      clearTimeout(this.timer);
      this.$nextTick(() => {
        if (index === -1 && this.fabs.length > 0) {
          this.isShow = !this.isShow;
        } else {
          this.$emit("click", {
            index
          });
          this.isShow = false;
        }
        if (!this.isShow) {
          this.timer = setTimeout(() => {
            this.isHidden = true;
          }, 250);
        }
      });
    },
    maskClick(e) {
      if (!this.maskClosable)
        return;
      this.isShow = false;
      this.timer = setTimeout(() => {
        this.isHidden = true;
      }, 250);
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
    a: $props.mask
  }, $props.mask ? {
    b: $data.isShow ? 1 : "",
    c: common_vendor.s($options.getStyle),
    d: common_vendor.o((...args) => $options.maskClick && $options.maskClick(...args))
  } : {}, {
    e: common_vendor.f($props.fabs, (btn, idx, i0) => {
      return common_vendor.e({
        a: btn.text
      }, btn.text ? {
        b: common_vendor.t(btn.text),
        c: (btn.size || 32) + "rpx",
        d: btn.color || "#fff",
        e: $props.position === "left" ? "left" : "right"
      } : {}, {
        f: btn.name
      }, btn.name ? {
        g: "3014da5e-0-" + i0,
        h: common_vendor.p({
          name: btn.name,
          color: btn.abbrColor || "#fff",
          size: btn.abbrSize || 64
        })
      } : {}, {
        i: !btn.name && btn.src
      }, !btn.name && btn.src ? {
        j: btn.src,
        k: (btn.width || 56) + "rpx",
        l: (btn.height || 56) + "rpx",
        m: (btn.radius || 0) + "rpx"
      } : {}, {
        n: !btn.name && !btn.src && btn.abbr
      }, !btn.name && !btn.src && btn.abbr ? {
        o: common_vendor.t(btn.abbr),
        p: (btn.abbrSize || 36) + "rpx",
        q: (btn.abbrSize || 36) + "rpx",
        r: btn.abbrColor || "#fff"
      } : {}, {
        s: !$props.background && !btn.background ? 1 : "",
        t: btn.background || $props.background,
        v: idx,
        w: common_vendor.o(($event) => $options.handleClick($event, idx))
      });
    }),
    f: $props.width + "rpx",
    g: $props.width + "rpx",
    h: common_vendor.n($props.position === "left" ? "fui-fab__button-left" : "fui-fab__button-right"),
    i: $data.isHidden ? 1 : "",
    j: $data.isShow ? 1 : "",
    k: $props.position === "left" ? 1 : "",
    l: $props.position === "right" ? 1 : "",
    m: common_vendor.p({
      name: "plus",
      color: $props.color,
      size: 80
    }),
    n: $data.isShow ? 1 : "",
    o: !$props.background ? 1 : "",
    p: $props.width + "rpx",
    q: $props.width + "rpx",
    r: $props.background,
    s: common_vendor.o(($event) => $options.handleClick($event, -1)),
    t: common_vendor.n($props.position === "left" ? "fui-fab__wrap-left" : "fui-fab__wrap-right"),
    v: common_vendor.s($options.getStyles),
    w: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3014da5e"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-fab/fui-fab.vue"]]);
my.createComponent(Component);
