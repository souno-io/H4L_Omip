"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-share-sheet",
  emits: ["click", "cancel"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String],
      default: 108
    },
    itemBackground: {
      type: String,
      default: "transparent"
    },
    radius: {
      type: Boolean,
      default: true
    },
    background: {
      type: String,
      default: "#EAEAEA"
    },
    title: {
      type: String,
      default: "\u5206\u4EAB\u5230"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: "#7f7f7f"
    },
    btnText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    btnSize: {
      type: [Number, String],
      default: 32
    },
    btnColor: {
      type: String,
      default: "#181818"
    },
    btnBackground: {
      type: String,
      default: "transparent"
    },
    lineColor: {
      type: String,
      default: "#ddd"
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
      default: 1001
    },
    isFull: {
      type: Boolean,
      default: false
    },
    padding: {
      type: [Number, String],
      default: 20
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      items: [],
      iphoneX: false
    };
  },
  created() {
    this.initData(this.itemList);
  },
  computed: {
    getStyle() {
      return `background:${this.maskBackground};z-index:${Number(this.zIndex - 10)};`;
    }
  },
  watch: {
    itemList(val) {
      this.initData(val);
    }
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (Array.isArray(vals[0])) {
          vals = vals.map((item, index) => {
            return {
              id: "fui_s0" + index,
              data: item
            };
          });
          this.items = vals;
        } else {
          this.items = [{
            id: "fui_s01",
            data: vals
          }];
        }
      }
    },
    maskClick(e) {
      if (!this.maskClosable)
        return;
      this.cancel(e);
    },
    cancel(e) {
      this.$emit("cancel", {});
    },
    handleClick(e, index, idx) {
      if (Array.isArray(this.itemList[0])) {
        this.$emit("click", {
          index,
          subIndex: idx,
          item: this.itemList[index][idx]
        });
      } else {
        this.$emit("click", {
          index: idx,
          item: this.itemList[idx]
        });
      }
    },
    stop(e) {
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
  return {
    a: common_vendor.s($options.getStyle),
    b: $props.show ? 1 : "",
    c: common_vendor.o((...args) => $options.maskClick && $options.maskClick(...args)),
    d: common_vendor.t(!$props.title || $props.title === "true" || $props.title === true ? "" : $props.title),
    e: $props.size + "rpx",
    f: $props.color,
    g: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: common_vendor.f(item.data, (obj, idx, i1) => {
          return common_vendor.e({
            a: obj.name
          }, obj.name ? {
            b: "22d34b15-0-" + i0 + "-" + i1,
            c: common_vendor.p({
              name: obj.name,
              size: obj.size || 120,
              color: obj.color || "#181818"
            })
          } : {}, {
            d: obj.src
          }, obj.src ? {
            e: (obj.width || 96) + "rpx",
            f: (obj.width || 96) + "rpx",
            g: obj.src
          } : {}, {
            h: obj.background || $props.itemBackground,
            i: common_vendor.t(obj.text),
            j: (obj.textSize || 24) + "rpx",
            k: obj.textColor || "#7f7f7f",
            l: common_vendor.o(($event) => $options.handleClick($event, index, idx)),
            m: idx
          });
        }),
        b: item.id
      };
    }),
    h: $props.width + "rpx",
    i: $props.width + "rpx",
    j: $props.isFull ? 1 : "",
    k: $props.padding + "rpx",
    l: $props.padding + "rpx",
    m: common_vendor.t($props.btnText),
    n: $data.iphoneX && $props.safeArea ? 1 : "",
    o: $props.btnSize + "rpx",
    p: $props.btnColor,
    q: common_vendor.o((...args) => $options.cancel && $options.cancel(...args)),
    r: $props.lineColor,
    s: $data.iphoneX && $props.safeArea ? 1 : "",
    t: $props.btnBackground,
    v: $props.radius ? 1 : "",
    w: !$props.show ? 1 : "",
    x: $props.show ? 1 : "",
    y: $props.zIndex,
    z: $props.background,
    A: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-22d34b15"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-share-sheet/fui-share-sheet.vue"]]);
my.createComponent(Component);
