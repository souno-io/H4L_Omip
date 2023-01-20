"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-actionsheet",
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
    itemSize: {
      type: [Number, String],
      default: 32
    },
    tips: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    size: {
      type: [Number, String],
      default: 26
    },
    radius: {
      type: Boolean,
      default: true
    },
    isCancel: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: "light"
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 1001
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    return {
      iphoneX: false,
      vals: [],
      isNvue,
      isShow: false
    };
  },
  computed: {
    getStyle() {
      return `z-index:${Number(this.zIndex) - 10};`;
    }
  },
  watch: {
    itemList(newVal) {
      this.initData(newVal);
    }
  },
  created() {
    this.initData(this.itemList);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              text: item
            };
          });
        }
        this.vals = vals;
      }
    },
    handleClickMask() {
      if (!this.maskClosable)
        return;
      this.handleClickCancel();
    },
    handleClickItem(index) {
      if (!this.show)
        return;
      this.$emit("click", {
        index,
        ...this.vals[index]
      });
    },
    handleClickCancel() {
      this.$emit("cancel");
    },
    stop() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? common_vendor.e({
    b: $props.show ? 1 : "",
    c: common_vendor.o((...args) => $options.handleClickMask && $options.handleClickMask(...args)),
    d: common_vendor.s($options.getStyle),
    e: $props.tips
  }, $props.tips ? {
    f: common_vendor.t($props.tips),
    g: $props.radius ? 1 : "",
    h: $props.theme === "light" ? 1 : "",
    i: $props.theme === "dark" ? 1 : "",
    j: $props.size + "rpx",
    k: $props.color
  } : {}, {
    l: common_vendor.f($data.vals, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: $props.theme === "dark" ? item.darkColor || "#D1D1D1" : item.color || "#181818",
        c: !$props.isCancel && index == $data.vals.length - 1 ? 1 : "",
        d: !$props.isCancel && index == $data.vals.length - 1 && $data.iphoneX && $props.safeArea ? 1 : "",
        e: $props.radius && !$props.tips && index === 0 ? 1 : "",
        f: (index !== 0 || $props.tips) && $props.theme === "light" ? 1 : "",
        g: (index !== 0 || $props.tips) && $props.theme === "dark" ? 1 : "",
        h: index,
        i: common_vendor.o(($event) => $options.handleClickItem(index))
      };
    }),
    m: $props.itemSize + "rpx",
    n: $props.theme === "light" ? 1 : "",
    o: $props.theme === "dark" ? 1 : "",
    p: $props.isCancel ? 1 : "",
    q: $props.isCancel
  }, $props.isCancel ? {
    r: $props.theme === "dark" ? "#D1D1D1" : "#181818",
    s: $props.itemSize + "rpx",
    t: $data.iphoneX && $props.safeArea ? 1 : "",
    v: $props.theme === "light" ? 1 : "",
    w: $props.theme === "dark" ? 1 : "",
    x: common_vendor.o((...args) => $options.handleClickCancel && $options.handleClickCancel(...args))
  } : {}, {
    y: $props.show ? 1 : "",
    z: $props.radius ? 1 : "",
    A: $props.theme === "light" ? 1 : "",
    B: $props.theme === "dark" ? 1 : "",
    C: $props.zIndex,
    D: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-afd32c58"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-actionsheet/fui-actionsheet.vue"]]);
my.createComponent(Component);
