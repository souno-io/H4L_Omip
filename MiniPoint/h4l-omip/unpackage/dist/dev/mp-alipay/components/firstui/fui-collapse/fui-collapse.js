"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-collapse",
  emits: ["change"],
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    collapseChange(obj, isOpen, idx) {
      if (this.accordion && isOpen) {
        this.children.forEach((item, index) => {
          if (item !== obj) {
            item.isOpen = false;
          }
        });
      }
      this.$emit("change", {
        index: idx,
        isOpen
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-90b150a9"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-collapse/fui-collapse.vue"]]);
my.createComponent(Component);
