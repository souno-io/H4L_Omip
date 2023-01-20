"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-checkbox-group",
  emits: ["change", "input", "update:modelValue"],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      vals: ""
    };
  },
  watch: {
    modelValue(vals) {
      this.modelChange(vals);
    },
    value(vals) {
      this.modelChange(vals);
    }
  },
  created() {
    this.childrens = [];
  },
  methods: {
    checkboxChange(e) {
      this.$emit("change", e);
      this.$emit("input", e.detail.value);
      this.$emit("update:modelValue", e.detail.value);
    },
    changeValue(checked, target) {
      let vals = [];
      this.childrens.forEach((item) => {
        if (item.val) {
          vals.push(item.value);
        }
      });
      this.vals = vals;
      let e = {
        detail: {
          value: vals
        }
      };
      this.checkboxChange(e);
    },
    modelChange(vals) {
      this.childrens.forEach((item) => {
        if (vals.includes(item.value)) {
          item.val = true;
        } else {
          item.val = false;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.name
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-checkbox-group/fui-checkbox-group.vue"]]);
my.createComponent(Component);
