"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-dropdown-list",
  emits: ["click", "close"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    isCheckbox: {
      type: Boolean,
      default: true
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
      default: false
    },
    lineColor: {
      type: String,
      default: "#eee"
    },
    iconWidth: {
      type: [Number, String],
      default: 48
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#181818"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0, 0, 0, 0.6)"
    },
    zIndex: {
      type: Number,
      default: 1001
    }
  },
  computed: {
    getStyles() {
      let styles = "";
      let height = Number(this.height || 0);
      let width = Number(this.width || 0);
      if (height > 0) {
        styles += `height:${height}rpx;`;
      }
      if (width > 0) {
        styles += `width:${width}rpx;`;
      }
      return styles;
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      itemList: [],
      isShow: false
    };
  },
  watch: {
    options(newVal) {
      this.initData(newVal);
    }
  },
  created() {
    this.initData(this.options);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              text: item,
              checked: false
            };
          });
        } else {
          vals.map((item) => {
            item.checked = item.checked || false;
          });
        }
        this.itemList = vals;
      }
    },
    itemClick(e, index) {
      let item = this.itemList[index];
      let vals = [...this.itemList];
      vals.forEach((item2, idx) => {
        if (index === idx) {
          item2.checked = true;
        } else {
          item2.checked = false;
        }
      });
      this.itemList = vals;
      this.$emit("click", {
        index,
        ...item
      });
      this.close(2);
    },
    close(type) {
      this.isShow = false;
      if (type === 1 && this.maskClosable) {
        this.$emit("close", {});
      }
    },
    show() {
      this.isShow = true;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? {
    b: common_vendor.f($data.itemList, (model, index, i0) => {
      return common_vendor.e($props.isCheckbox ? common_vendor.e({
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
        l: !$props.isReverse && $props.isCheckbox ? 1 : "",
        m: $props.isReverse ? 1 : "",
        n: $props.iconWidth + "rpx",
        o: $props.iconWidth + "rpx"
      } : {}, {
        p: common_vendor.t(model.text),
        q: !$props.isReverse && ($props.isCheckbox || model.src) ? 1 : "",
        r: $props.isReverse && ($props.isCheckbox || model.src) ? 1 : "",
        s: $props.selectedColor && model.checked ? $props.selectedColor : $props.color,
        t: $props.splitLine && $data.itemList.length - 1 !== index ? 1 : "",
        v: index,
        w: common_vendor.o(($event) => $options.itemClick($event, index))
      });
    }),
    c: $props.isCheckbox,
    d: $props.size + "rpx",
    e: $props.background,
    f: $props.padding[0] || 0,
    g: $props.padding[1] || 0,
    h: $props.padding[2] || $props.padding[0] || 0,
    i: $props.padding[3] || $props.padding[1] || 0,
    j: $props.lineColor,
    k: $props.isReverse ? 1 : "",
    l: common_vendor.s($options.getStyles),
    m: $props.radius + "rpx",
    n: $props.background,
    o: $data.isShow ? 1 : "",
    p: $props.maskBackground,
    q: $props.zIndex,
    r: common_vendor.o(($event) => $options.close(1))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6bed1d61"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-dropdown-list/fui-dropdown-list.vue"]]);
my.createComponent(Component);
