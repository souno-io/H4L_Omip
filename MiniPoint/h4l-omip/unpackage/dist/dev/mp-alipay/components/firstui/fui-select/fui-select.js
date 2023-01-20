"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-select",
  emits: ["click", "confirm", "close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 600
    },
    type: {
      type: String,
      default: "select"
    },
    radius: {
      type: [Number, String],
      default: 24
    },
    headerBackground: {
      type: String,
      default: "#fff"
    },
    title: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    titleSize: {
      type: [Number, String],
      default: 32
    },
    titleColor: {
      type: String,
      default: "#181818"
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    multiple: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "#fff"
    },
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    checkboxColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: "#ccc"
    },
    isCheckMark: {
      type: Boolean,
      default: false
    },
    checkmarkColor: {
      type: String,
      default: "#fff"
    },
    isReverse: {
      type: Boolean,
      default: false
    },
    splitLine: {
      type: Boolean,
      default: true
    },
    lineColor: {
      type: String,
      default: "#EEEEEE"
    },
    bottomLeft: {
      type: [Number, String],
      default: 32
    },
    arrowColor: {
      type: String,
      default: "#B2B2B2"
    },
    highlight: {
      type: Boolean,
      default: true
    },
    iconWidth: {
      type: [Number, String],
      default: 48
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: "#181818"
    },
    btnText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    btnBackground: {
      type: String,
      default: ""
    },
    btnColor: {
      type: String,
      default: "#fff"
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
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getStyles() {
      return `background:${this.maskBackground};z-index:${Number(this.zIndex) - 1};`;
    }
  },
  watch: {
    options(newVal) {
      this.initData(newVal);
    }
  },
  data() {
    let isAndroid = false;
    let isNvue = false;
    return {
      isNvue,
      isAndroid,
      itemList: [],
      index: -1,
      isShow: false,
      iphoneX: false
    };
  },
  created() {
    this.initData(this.options);
  },
  methods: {
    initData(vals) {
      vals = JSON.parse(JSON.stringify(vals));
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              text: item,
              checked: false
            };
          });
        } else {
          vals.map((item, index) => {
            item.checked = item.checked || false;
            if (this.type === "select" && !this.multiple && item.checked) {
              this.index = index;
            }
          });
        }
        this.itemList = vals;
      }
    },
    itemClick(index) {
      let vals = [...this.itemList];
      let item = vals[index];
      if (this.type === "select") {
        if (this.multiple) {
          item.checked = !item.checked;
        } else {
          vals.forEach((item2, idx) => {
            if (index === idx) {
              item2.checked = true;
            } else {
              item2.checked = false;
            }
          });
          this.index = index;
        }
        this.itemList = vals;
      } else {
        this.$emit("click", {
          index,
          options: this.options[index]
        });
      }
    },
    handleClick() {
      if (this.type !== "select")
        return;
      if (this.multiple) {
        let items = [];
        this.itemList.forEach((item, idx) => {
          if (item.checked) {
            items.push(this.options[idx]);
          }
        });
        this.$emit("confirm", {
          options: items
        });
      } else {
        let index = this.index;
        this.$emit("confirm", {
          index,
          options: index === -1 ? "" : this.options[this.index]
        });
      }
    },
    maskClose() {
      if (!this.maskClosable)
        return;
      this.handleClose();
    },
    handleClose() {
      this.$emit("close", {});
    },
    stop() {
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_icon2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_icon = () => "../fui-icon/fui-icon.js";
const _easycom_fui_list_cell = () => "../fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? common_vendor.e({
    b: $props.show ? 1 : "",
    c: common_vendor.s($options.getStyles),
    d: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    e: common_vendor.t($props.title),
    f: $props.titleSize + "rpx",
    g: $props.titleColor,
    h: $props.fontWeight,
    i: common_vendor.p({
      name: "close",
      color: "#b2b2b2",
      size: 48
    }),
    j: common_vendor.o((...args) => $options.handleClose && $options.handleClose(...args)),
    k: $props.lineColor,
    l: $props.headerBackground,
    m: $props.radius + "rpx",
    n: $props.radius + "rpx",
    o: common_vendor.f($data.itemList, (model, index, i0) => {
      return common_vendor.e($props.type === "select" ? common_vendor.e({
        a: model.checked
      }, model.checked ? {
        b: $props.checkmarkColor,
        c: $props.checkmarkColor
      } : {}, {
        d: $props.isCheckMark ? 1 : "",
        e: (!$props.checkboxColor || $props.checkboxColor == "true") && model.checked && !$props.isCheckMark ? 1 : "",
        f: model.checked && !$props.isCheckMark ? $props.checkboxColor : "transparent",
        g: model.checked && !$props.isCheckMark ? $props.checkboxColor : $props.borderColor
      }) : {}, {
        h: model.src
      }, model.src ? {
        i: model.src,
        j: $props.iconWidth + "rpx",
        k: $props.iconWidth + "rpx",
        l: !$props.isReverse && $props.type === "select" ? 1 : "",
        m: $props.isReverse ? 1 : "",
        n: $props.iconWidth + "rpx",
        o: $props.iconWidth + "rpx"
      } : {}, {
        p: common_vendor.t(model.text),
        q: !$props.isReverse && ($props.type === "select" || model.src) ? 1 : "",
        r: $props.isReverse && ($props.type === "select" || model.src) ? 1 : "",
        s: index,
        t: common_vendor.o(($event) => $options.itemClick(index)),
        v: "5924aedc-1-" + i0,
        w: common_vendor.p({
          highlight: $props.highlight,
          padding: $props.padding,
          bottomBorder: $props.splitLine && $data.itemList.length - 1 !== index,
          borderColor: $props.lineColor,
          background: $props.background,
          bottomLeft: $props.bottomLeft,
          arrow: $props.type === "list",
          arrowColor: $props.arrowColor
        })
      });
    }),
    p: $props.type === "select",
    q: $props.size + "rpx",
    r: $props.color,
    s: $props.isReverse && $props.type === "select" ? 1 : "",
    t: $props.height + "rpx",
    v: $props.type === "select"
  }, $props.type === "select" ? {
    w: common_vendor.t($props.btnText),
    x: $props.btnColor,
    y: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    z: !$props.btnBackground ? 1 : "",
    A: $props.btnBackground
  } : {}, {
    B: $props.show ? 1 : "",
    C: $data.isAndroid ? 1 : "",
    D: $data.iphoneX && $props.safeArea ? 1 : "",
    E: $props.radius + "rpx",
    F: $props.radius + "rpx",
    G: $props.background,
    H: $props.zIndex,
    I: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5924aedc"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-select/fui-select.vue"]]);
my.createComponent(Component);
