"use strict";
const components_firstui_fuiSwipeAction_mpwxs = require("./mpwxs.js");
const components_firstui_fuiSwipeAction_mpjs = require("./mpjs.js");
const components_firstui_fuiSwipeAction_bindingx = require("./bindingx.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-swipe-action",
  mixins: [components_firstui_fuiSwipeAction_mpwxs.mpwxs, components_firstui_fuiSwipeAction_mpjs.mpjs, components_firstui_fuiSwipeAction_bindingx.bindingx],
  emits: ["click", "change"],
  props: {
    buttons: {
      type: Array,
      default() {
        return [{
          text: "\u5220\u9664",
          background: "#FF2B2B"
        }];
      }
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#fff"
    },
    show: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: [Number, String],
      default: 30
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  beforeUnmount() {
    this.__beforeUnmount = true;
    this.unInstall();
  },
  methods: {
    unInstall() {
      if (this.group) {
        this.group.children.forEach((item, index) => {
          if (item === this) {
            this.group.children.splice(index, 1);
          }
        });
      }
    },
    getParent(name = "fui-swipeaction-group") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.buttons, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: (item.size || $props.size) + "rpx",
        c: item.color || $props.color,
        d: item.background,
        e: index,
        f: common_vendor.o(($event) => _ctx.appTouchEnd($event, index, item))
      };
    }),
    b: common_vendor.o((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
    c: common_vendor.n(_ctx.elClass),
    d: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    e: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    f: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    g: _ctx.moveLeft,
    h: _ctx.ani ? 1 : ""
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4ee5af7"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-swipe-action/fui-swipe-action.vue"]]);
my.createComponent(Component);
