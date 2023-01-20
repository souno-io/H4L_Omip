"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-tabs",
  emits: ["change"],
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    scroll: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 96
    },
    background: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    selectedSize: {
      type: [Number, String],
      default: 32
    },
    selectedColor: {
      type: String,
      default: ""
    },
    selectedFontWeight: {
      type: [Number, String],
      default: 500
    },
    scale: {
      type: [Number, String],
      default: 1.2
    },
    badgeColor: {
      type: String,
      default: "#fff"
    },
    badgeBackground: {
      type: String,
      default: ""
    },
    isDot: {
      type: Boolean,
      default: false
    },
    isSlider: {
      type: Boolean,
      default: true
    },
    sliderHeight: {
      type: [Number, String],
      default: 5
    },
    sliderBackground: {
      type: String,
      default: ""
    },
    sliderRadius: {
      type: [Number, String],
      default: -1
    },
    padding: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    short: {
      type: Boolean,
      default: true
    },
    isFixed: {
      type: Boolean,
      default: false
    },
    isSticky: {
      type: Boolean,
      default: false
    },
    top: {
      type: [Number, String],
      default: 0
    },
    alignLeft: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "row"
    },
    zIndex: {
      type: [Number, String],
      default: 996
    }
  },
  watch: {
    tabs(vals) {
      this.initData(vals);
    },
    current(newVal, oldVal) {
      this.switchTab(newVal);
    }
  },
  created() {
    this.initData(this.tabs);
  },
  data() {
    let isNvue = false;
    return {
      vals: [],
      scrollInto: "",
      tabIndex: 0,
      isNvue
    };
  },
  methods: {
    getId() {
      return `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === "object") {
          vals.map((item) => {
            const scrollId = this.getId();
            item.fui_s_id = scrollId;
          });
        } else {
          vals = vals.map((item) => {
            const scrollId = this.getId();
            return {
              name: item,
              fui_s_id: scrollId
            };
          });
        }
        this.vals = vals;
        this.$nextTick(() => {
          setTimeout(() => {
            this.switchTab(this.current);
          }, 50);
        });
      }
    },
    switchTab(index) {
      const item = {
        ...this.vals[index]
      };
      if (this.tabIndex === index || item.disabled)
        return;
      this.tabIndex = index;
      let scrollIndex = index - 1 < 0 ? 0 : index - 1;
      this.scrollInto = this.vals[scrollIndex].fui_s_id;
      delete item.fui_s_id;
      this.$emit("change", {
        index,
        ...item
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.vals, (tab, index, i0) => {
      return common_vendor.e($props.isSlider ? {
        a: $props.short ? 1 : "",
        b: !$props.sliderBackground ? 1 : "",
        c: $props.sliderHeight + "rpx",
        d: $props.sliderBackground,
        e: $props.sliderRadius == -1 ? $props.sliderHeight + "rpx" : $props.sliderRadius + "rpx",
        f: $props.bottom + "rpx",
        g: `-${$props.padding}rpx`,
        h: `-${$props.padding}rpx`,
        i: `scale(${$data.tabIndex === index ? $data.isNvue ? 1 : $props.scale : $data.isNvue ? 1e-5 : 0})`
      } : {}, {
        j: tab.icon
      }, tab.icon ? {
        k: $props.direction === "column" ? 1 : "",
        l: $data.tabIndex === index && tab.selectedIcon ? tab.selectedIcon : tab.icon
      } : {}, {
        m: common_vendor.t(tab.name),
        n: tab.badge
      }, tab.badge ? {
        o: common_vendor.t($props.isDot ? "" : tab.badge),
        p: !$props.badgeBackground ? 1 : "",
        q: $props.isDot ? 1 : "",
        r: !$props.isDot ? 1 : "",
        s: $props.badgeColor,
        t: $props.badgeBackground
      } : {}, {
        v: !$props.selectedColor && $data.tabIndex === index ? 1 : "",
        w: !$props.color && $data.tabIndex !== index ? 1 : "",
        x: ($data.tabIndex === index && $data.isNvue ? $props.selectedSize : $props.size) + "rpx",
        y: $data.tabIndex === index ? $props.selectedColor : $props.color,
        z: $data.tabIndex === index ? $props.selectedFontWeight : $props.fontWeight,
        A: `scale(${$data.tabIndex === index && !$data.isNvue ? $props.scale : 1})`,
        B: tab.disabled ? 1 : "",
        C: $props.direction === "column" && tab.icon ? 1 : "",
        D: index,
        E: tab.fui_s_id,
        F: common_vendor.o(($event) => $options.switchTab(index))
      });
    }),
    b: $props.isSlider,
    c: $props.height + "rpx",
    d: !$props.alignLeft ? 1 : "",
    e: !$props.alignLeft ? 1 : "",
    f: $props.isFixed && !$props.isSticky ? 1 : "",
    g: $props.isSticky ? 1 : "",
    h: $props.scroll,
    i: $data.scrollInto,
    j: $props.background,
    k: $props.isFixed || $props.isSticky ? $props.zIndex : 1,
    l: $props.isFixed || $props.isSticky ? $props.top + "px" : "auto"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c7263488"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-tabs/fui-tabs.vue"]]);
my.createComponent(Component);
