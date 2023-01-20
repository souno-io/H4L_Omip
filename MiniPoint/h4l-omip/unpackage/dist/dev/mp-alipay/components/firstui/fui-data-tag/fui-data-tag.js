"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-data-tag",
  emits: ["change", "input", "update:modelValue"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    value: {
      type: [Array, String, Number],
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: -1
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    },
    padding: {
      type: Array,
      default() {
        return ["16rpx", "32rpx"];
      }
    },
    gap: {
      type: [Number, String],
      default: 20
    },
    radius: {
      type: [Number, String],
      default: 6
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: "#333"
    },
    activeColor: {
      type: String,
      default: "#465CFF"
    },
    background: {
      type: String,
      default: "#fff"
    },
    activeBgColor: {
      type: String,
      default: "#fff"
    },
    borderColor: {
      type: String,
      default: "#465CFF"
    },
    mark: {
      type: Boolean,
      default: false
    },
    markSize: {
      type: [Number, String],
      default: 52
    },
    markColor: {
      type: String,
      default: "#465CFF"
    }
  },
  watch: {
    options(vals) {
      this.initData(vals);
    },
    modelValue(vals) {
      this.modelChange(vals);
    },
    value(vals) {
      this.modelChange(vals);
    }
  },
  created() {
    this.initData(this.options);
  },
  data() {
    return {
      icon: "\uE600",
      dataList: [],
      val: "",
      vals: []
    };
  },
  methods: {
    initData(vals) {
      vals = JSON.parse(JSON.stringify(vals));
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item, index) => {
            return {
              text: item,
              value: item,
              selected: false
            };
          });
        } else {
          vals.map((item, index) => {
            item.selected = false;
            if (item.value === void 0) {
              item.value = item.text;
            }
          });
        }
        this.dataList = vals;
        this.modelChange(this.modelValue);
      }
    },
    emitsChange(e) {
      this.$emit("change", e);
      this.$emit("input", e.detail.value);
      this.$emit("update:modelValue", e.detail.value);
    },
    radioChange(index, model) {
      let min = Number(this.min);
      if (this.val === model.value && min > 0)
        return;
      let val = "";
      let i = index;
      this.dataList.forEach((item, idx) => {
        if (idx === index) {
          const bool = this.val === item.value && min <= 0;
          val = bool ? "" : item.value;
          i = bool ? -1 : index;
          item.selected = bool ? false : true;
        } else {
          item.selected = false;
        }
      });
      this.val = val;
      let e = {
        detail: {
          index: i,
          value: val
        }
      };
      this.emitsChange(e);
    },
    checkboxChange(index, model) {
      let max = Number(this.max);
      let vals = this.vals;
      let i = vals.indexOf(model.value);
      if (vals.length >= max && max !== -1 && i === -1) {
        common_vendor.index.showToast({
          title: `\u6700\u591A\u53EA\u80FD\u9009\u62E9${max}\u4E2A\u9009\u9879`,
          icon: "none"
        });
        return;
      }
      this.dataList.forEach((item, idx) => {
        if (idx === index) {
          item.selected = i !== -1 ? false : true;
          if (item.selected) {
            vals.push(item.value);
          } else {
            vals.splice(i, 1);
          }
        }
      });
      this.vals = vals;
      let e = {
        detail: {
          value: vals
        }
      };
      this.emitsChange(e);
    },
    modelChange(vals) {
      if (this.multiple) {
        this.dataList.forEach((item) => {
          if (vals.includes(item.value)) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
        this.vals = vals;
      } else {
        this.dataList.forEach((item) => {
          if (vals == item.value) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
        this.val = vals;
      }
    },
    handleClick(index) {
      let item = this.dataList[index];
      if (item.disable)
        return;
      if (this.multiple) {
        this.checkboxChange(index, item);
      } else {
        this.radioChange(index, item);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dataList, (item, index, i0) => {
      return common_vendor.e({
        a: $props.mark && item.selected
      }, $props.mark && item.selected ? {
        b: common_vendor.t($data.icon),
        c: $props.markColor,
        d: $props.markSize + "rpx",
        e: $props.markSize + "rpx"
      } : {}, {
        f: common_vendor.o(($event) => $options.handleClick(index)),
        g: common_vendor.t(item.text),
        h: item.selected ? $props.activeColor : $props.color,
        i: item.disable ? 1 : "",
        j: item.selected ? $props.activeBgColor : $props.background,
        k: item.selected ? $props.borderColor : $props.background,
        l: index
      });
    }),
    b: $props.size + "rpx",
    c: $props.width ? $props.width + "rpx" : "auto",
    d: $props.height ? $props.height + "rpx" : "auto",
    e: $props.padding[0] || 0,
    f: $props.padding[1] || 0,
    g: $props.padding[2] || $props.padding[0] || 0,
    h: $props.padding[3] || $props.padding[1] || 0,
    i: $props.radius + "rpx",
    j: $props.gap + "rpx",
    k: $props.gap + "rpx",
    l: "-" + $props.gap + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be872890"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-data-tag/fui-data-tag.vue"]]);
my.createComponent(Component);
