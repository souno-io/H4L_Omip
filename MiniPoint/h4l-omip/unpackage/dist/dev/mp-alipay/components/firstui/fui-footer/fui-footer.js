"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-footer",
  props: {
    navigate: {
      type: Array,
      default: function() {
        return [];
      }
    },
    text: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#B2B2B2"
    },
    size: {
      type: [Number, String],
      default: 24
    },
    background: {
      type: String,
      default: "transparent"
    },
    borderColor: {
      type: String,
      default: "#B2B2B2"
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      iphoneX: false
    };
  },
  created() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.navigate.length > 0
  }, $props.navigate.length > 0 ? {
    b: common_vendor.f($props.navigate, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index === $props.navigate.length - 1 ? 1 : "",
        c: item.color || "#465CFF",
        d: (item.size || 28) + "rpx",
        e: (item.size || 28) + "rpx",
        f: index,
        g: !item.color ? 1 : "",
        h: item.openType || "navigate",
        i: item.url,
        j: item.delta
      };
    }),
    c: $props.borderColor
  } : {}, {
    d: common_vendor.t($props.text),
    e: $props.color,
    f: $props.size + "rpx",
    g: $data.iphoneX && $props.safeArea ? 1 : "",
    h: common_vendor.n($props.isFixed ? "fui-footer__fixed-bottom" : ""),
    i: $props.background
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4e283cba"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-footer/fui-footer.vue"]]);
my.createComponent(Component);
