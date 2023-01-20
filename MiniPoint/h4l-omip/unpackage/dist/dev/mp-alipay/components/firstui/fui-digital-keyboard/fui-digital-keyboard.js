"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-digital-keyboard",
  emits: ["click", "backspace", "confirm", "spare"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: "\u786E\u5B9A"
    },
    background: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [Number, String],
      default: 32
    },
    fontWeight: {
      type: [Number, String],
      default: 600
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "backspace-fill"
    },
    decimal: {
      type: Boolean,
      default: false
    },
    spareKey: {
      type: String,
      default: ""
    },
    spareSize: {
      type: [Number, String],
      default: 32
    },
    theme: {
      type: String,
      default: "light"
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
  watch: {
    decimal(val) {
      this.initData();
    },
    spareKey(val) {
      this.initData();
    }
  },
  data() {
    return {
      iphoneX: false,
      items: [{
        id: "dk_1",
        keys: ["1", "2", "3"]
      }, {
        id: "dk_2",
        keys: ["4", "5", "6"]
      }, {
        id: "dk_3",
        keys: ["7", "8", "9"]
      }, {
        id: "dk_4",
        keys: ["", "0", ""]
      }]
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      let keyArr = [...this.items];
      let sk = this.spareKey.toString();
      keyArr[3].keys[0] = sk && sk !== "true" && sk !== "undefined" ? sk : "";
      keyArr[3].keys[2] = this.decimal ? "." : "";
      this.items = keyArr;
    },
    keyClick(index, idx, val) {
      if (!this.show || !val)
        return;
      if (index === 3 && idx === 0) {
        this.$emit("spare", {
          value: val
        });
      } else {
        this.$emit("click", {
          value: val
        });
      }
    },
    backspace() {
      if (!this.show)
        return;
      this.$emit("backspace", {});
    },
    confirm() {
      if (this.disabled || !this.show)
        return;
      this.$emit("confirm", {});
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
    a: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: common_vendor.f(item.keys, (val, idx, i1) => {
          return {
            a: common_vendor.t(val),
            b: `${index === 3 && idx === 0 ? $props.spareSize : 40}rpx`,
            c: $props.theme === "dark" && val ? 1 : "",
            d: $props.theme === "light" && val ? 1 : "",
            e: common_vendor.o(($event) => $options.keyClick(index, idx, val)),
            f: idx
          };
        }),
        b: item.id
      };
    }),
    b: $props.theme === "dark" ? 1 : "",
    c: common_vendor.p({
      name: $props.name,
      size: 56,
      color: $props.theme === "dark" ? "#d1d1d1" : "#333"
    }),
    d: $props.theme === "dark" ? 1 : "",
    e: $props.theme === "dark" ? 1 : "",
    f: common_vendor.o((...args) => $options.backspace && $options.backspace(...args)),
    g: common_vendor.t($props.text),
    h: $props.color,
    i: $props.size + "rpx",
    j: $props.fontWeight,
    k: !$props.disabled ? 1 : "",
    l: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    m: !$props.background ? 1 : "",
    n: $props.disabled ? 1 : "",
    o: $props.background,
    p: $props.show ? 1 : "",
    q: $props.theme === "light" ? 1 : "",
    r: $props.theme === "dark" ? 1 : "",
    s: $data.iphoneX && $props.safeArea ? 1 : "",
    t: $props.zIndex
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0c79ec00"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-digital-keyboard/fui-digital-keyboard.vue"]]);
my.createComponent(Component);
