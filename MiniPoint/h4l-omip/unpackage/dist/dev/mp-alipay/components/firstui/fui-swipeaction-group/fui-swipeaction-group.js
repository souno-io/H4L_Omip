"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-swipeaction-group",
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  methods: {
    reset() {
      this.children.forEach((child) => {
        child.init();
      });
    },
    close() {
      this.children.forEach((child) => {
        child.close();
      });
    },
    closeAuto(child) {
      if (this.openItem && this.openItem !== child) {
        this.openItem.close();
      }
      this.openItem = child;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-swipeaction-group/fui-swipeaction-group.vue"]]);
my.createComponent(Component);
