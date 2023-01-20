"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-spin",
  props: {
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.width ? $props.width + "rpx" : "auto",
    b: $props.height ? $props.height + "rpx" : "auto"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7ccf9a5d"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-spin/fui-spin.vue"]]);
my.createComponent(Component);
