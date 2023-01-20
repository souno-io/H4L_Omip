"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-tabbar",
  emits: ["init", "click"],
  props: {
    tabBar: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 24
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    color: {
      type: String,
      default: "#333333"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    isFixed: {
      type: Boolean,
      default: true
    },
    badgeColor: {
      type: String,
      default: "#FFFFFF"
    },
    badgeBackground: {
      type: String,
      default: ""
    },
    zIndex: {
      type: [Number, String],
      default: 980
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    tabBar(vals) {
      this.initData(vals);
    }
  },
  data() {
    let isNvue = false;
    return {
      tabs: [],
      safeAreaH: 0,
      isNvue
    };
  },
  created() {
    this.$emit("init", {
      height: common_vendor.index.upx2px(100) + this.safeAreaH
    });
    this.initData(this.tabBar);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === "string") {
          vals = vals.map((item) => {
            return {
              text: item
            };
          });
        }
        this.tabs = vals;
      }
    },
    getWidth(value, dot) {
      return dot ? "16rpx" : String(value).length * 12 + 20 + "rpx";
    },
    itemClick(index) {
      this.$emit("click", {
        index,
        ...this.tabs[index]
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.tabs, (item, index, i0) => {
      return common_vendor.e({
        a: item.iconPath
      }, item.iconPath ? common_vendor.e({
        b: !item.midButton
      }, !item.midButton ? {
        c: $props.current == index ? item.selectedIconPath : item.iconPath
      } : {}, {
        d: item.badge
      }, item.badge ? {
        e: common_vendor.t(item.dot ? "" : item.badge),
        f: common_vendor.n(item.dot ? "fui-tabbar__dot" : "fui-tabbar__badge"),
        g: common_vendor.n($props.badgeBackground ? "" : "fui-tabbar__badge-color"),
        h: $props.badgeBackground,
        i: $props.badgeColor,
        j: $options.getWidth(item.badge, item.dot)
      } : {}, {
        k: ($data.isNvue && item.midButton && item.width ? item.width : 56) + "rpx",
        l: ($data.isNvue && item.midButton && item.height ? item.height : 56) + "rpx"
      }) : {}, {
        m: item.text
      }, item.text ? {
        n: common_vendor.t(item.text),
        o: !$props.selectedColor && $props.current == index ? 1 : "",
        p: $props.size + "rpx",
        q: $props.fontWeight,
        r: $props.current == index ? $props.selectedColor : item.midButton ? item.color || $props.color : $props.color
      } : {}, {
        s: item.midButton
      }, item.midButton ? {
        t: item.center ? 1 : "",
        v: item.iconPath,
        w: (item.width || 56) + "rpx",
        x: (item.height || 56) + "rpx",
        y: item.bottom + "rpx"
      } : {}, {
        z: index,
        A: common_vendor.o(($event) => $options.itemClick(index))
      });
    }),
    b: $props.isBorder ? 1 : "",
    c: $props.isBorder && $data.isNvue ? $props.borderColor : "transparent",
    d: ($data.safeAreaH > 0 || !$data.isNvue) && $props.isFixed
  }, ($data.safeAreaH > 0 || !$data.isNvue) && $props.isFixed ? {
    e: $data.safeAreaH > 0 ? 1 : ""
  } : {}, {
    f: $props.isFixed ? 1 : "",
    g: $props.background,
    h: $props.zIndex
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f2c36c0e"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-tabbar/fui-tabbar.vue"]]);
my.createComponent(Component);
