"use strict";
const common_vendor = require("../../../common/vendor.js");
const keys = [{
  id: "f_p1",
  keys: [{
    cn: "\u4EAC",
    en: "1"
  }, {
    cn: "\u6D25",
    en: "2"
  }, {
    cn: "\u6CAA",
    en: "3"
  }, {
    cn: "\u6E1D",
    en: "4"
  }, {
    cn: "\u5180",
    en: "5"
  }, {
    cn: "\u8C6B",
    en: "6"
  }, {
    cn: "\u4E91",
    en: "7"
  }, {
    cn: "\u8FBD",
    en: "8"
  }, {
    cn: "\u9ED1",
    en: "9"
  }, {
    cn: "\u6E58",
    en: "0"
  }]
}, {
  id: "f_p2",
  keys: [{
    cn: "\u7696",
    en: "Q"
  }, {
    cn: "\u9C81",
    en: "W"
  }, {
    cn: "\u65B0",
    en: "E"
  }, {
    cn: "\u82CF",
    en: "R"
  }, {
    cn: "\u6D59",
    en: "T"
  }, {
    cn: "\u8D63",
    en: "Y"
  }, {
    cn: "\u9102",
    en: "U"
  }, {
    cn: "\u6842",
    en: "I"
  }, {
    cn: "\u7518",
    en: "O"
  }, {
    cn: "\u664B",
    en: "P"
  }]
}, {
  id: "f_p3",
  keys: [{
    cn: "\u8499",
    en: "A"
  }, {
    cn: "\u9655",
    en: "S"
  }, {
    cn: "\u5409",
    en: "D"
  }, {
    cn: "\u95FD",
    en: "F"
  }, {
    cn: "\u8D35",
    en: "G"
  }, {
    cn: "\u7CA4",
    en: "H"
  }, {
    cn: "\u9752",
    en: "J"
  }, {
    cn: "\u85CF",
    en: "K"
  }, {
    cn: "\u5DDD",
    en: "L"
  }, {
    cn: "\u5B81",
    en: ""
  }]
}, {
  id: "f_p4",
  keys: [{
    cn: "ABC",
    en: "\u8FD4\u56DE"
  }, {
    cn: "\u743C",
    en: "Z"
  }, {
    cn: "\u4F7F",
    en: "X"
  }, {
    cn: "\u9886",
    en: "C"
  }, {
    cn: "\u5B66",
    en: "V"
  }, {
    cn: "\u8B66",
    en: "B"
  }, {
    cn: "\u6E2F",
    en: "N"
  }, {
    cn: "\u6FB3",
    en: "M"
  }]
}];
const _sfc_main = {
  name: "fui-license-plate",
  emits: ["click", "backspace", "complete"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    toolbar: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: "\u5B8C\u6210"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 30
    },
    fontWeight: {
      type: [Number, String],
      default: 500
    },
    name: {
      type: String,
      default: "backspace-fill"
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
  watch: {},
  data() {
    return {
      iphoneX: false,
      keyList: [],
      type: 1
    };
  },
  created() {
    this.keyList = keys;
  },
  methods: {
    keyClick(index, idx, val) {
      let text = this.type === 1 ? val.cn : val.en;
      if (!this.show || !text)
        return;
      if (index === 3 && idx === 0) {
        this.type = this.type === 1 ? 2 : 1;
      } else {
        this.$emit("click", {
          value: text
        });
      }
    },
    backspace() {
      if (!this.show)
        return;
      this.$emit("backspace", {});
    },
    onComplete() {
      if (!this.toolbar || !this.show)
        return;
      this.$emit("complete", {});
    },
    changeKeyboard(type = "en") {
      this.type = type === "en" ? 2 : 1;
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
    a: $props.toolbar
  }, $props.toolbar ? {
    b: common_vendor.t($props.text),
    c: !$props.color ? 1 : "",
    d: $props.color,
    e: $props.size + "rpx",
    f: $props.fontWeight,
    g: common_vendor.o((...args) => $options.onComplete && $options.onComplete(...args)),
    h: common_vendor.n($props.theme === "light" ? "fui-lp__btnwrap-light" : "fui-lp__btnwrap-dark")
  } : {}, {
    i: common_vendor.f($data.keyList, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.f(item.keys, (val, idx, i1) => {
          return {
            a: common_vendor.t($data.type === 1 ? val.cn : val.en),
            b: `${index === 3 && idx === 0 ? 28 : $data.type === 1 ? 32 : 36}rpx`,
            c: $props.theme === "dark" && val ? 1 : "",
            d: $props.theme === "light" && val ? 1 : "",
            e: common_vendor.o(($event) => $options.keyClick(index, idx, val)),
            f: index === 3 && idx === 0 ? 1 : "",
            g: !($data.type === 1 ? val.cn : val.en) ? 1 : "",
            h: idx
          };
        }),
        b: index === 3
      }, index === 3 ? {
        c: "2e3cc9ac-0-" + i0,
        d: common_vendor.p({
          name: $props.name,
          size: 48,
          color: $props.theme === "dark" ? "#d1d1d1" : "#333"
        }),
        e: $props.theme === "dark" ? 1 : "",
        f: $props.theme === "dark" ? 1 : "",
        g: $props.theme === "light" ? 1 : "",
        h: common_vendor.o((...args) => $options.backspace && $options.backspace(...args))
      } : {}, {
        i: item.id
      });
    }),
    j: $props.theme === "dark" ? 1 : "",
    k: $props.show ? 1 : "",
    l: $props.theme === "light" ? 1 : "",
    m: $props.theme === "dark" ? 1 : "",
    n: $data.iphoneX && $props.safeArea ? 1 : "",
    o: $props.zIndex
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2e3cc9ac"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-license-plate/fui-license-plate.vue"]]);
my.createComponent(Component);
