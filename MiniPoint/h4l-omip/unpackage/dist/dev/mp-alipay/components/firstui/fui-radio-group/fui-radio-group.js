"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-radio-group",
  emits: ["change", "input", "update:modelValue"],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      val: ""
    };
  },
  watch: {
    modelValue(val) {
      this.modelChange(val);
    },
    value(val) {
      this.modelChange(val);
    }
  },
  created() {
    this.childrens = [];
  },
  methods: {
    radioChange(e) {
      this.$emit("change", e);
      this.$emit("input", e.detail.value);
      this.$emit("update:modelValue", e.detail.value);
    },
    changeValue(value, target) {
      this.val = value;
      this.childrens.forEach((item) => {
        if (item !== target) {
          item.val = false;
        }
      });
      let e = {
        detail: {
          value
        }
      };
      this.radioChange(e);
    },
    modelChange(val) {
      this.childrens.forEach((item) => {
        if (item.value === val) {
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-radio-group/fui-radio-group.vue"]]);
my.createComponent(Component);
