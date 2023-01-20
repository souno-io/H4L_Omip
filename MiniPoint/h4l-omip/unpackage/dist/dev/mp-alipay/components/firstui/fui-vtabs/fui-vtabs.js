"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-vtabs",
  emits: ["click", "change"],
  props: {
    vtabs: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String],
      default: "0"
    },
    height: {
      type: [Number, String],
      default: "0"
    },
    tabWidth: {
      type: [Number, String],
      default: 220
    },
    tabHeight: {
      type: [Number, String],
      default: 110
    },
    size: {
      type: [Number, String],
      default: 26
    },
    activeSize: {
      type: [Number, String],
      default: 26
    },
    color: {
      type: String,
      default: "#333333"
    },
    activeColor: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    activeFontWeight: {
      type: [Number, String],
      default: "normal"
    },
    background: {
      type: String,
      default: "#eeeeee"
    },
    activeBgColor: {
      type: String,
      default: "#ffffff"
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: ""
    },
    activeTab: {
      type: [Number, String],
      default: 0
    },
    animation: {
      type: Boolean,
      default: true
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
    linkage: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      vtabs: this
    };
  },
  data() {
    return {
      vals: [],
      scrollInto: "",
      current: 0,
      contentScrollTop: 0,
      heightRecords: [],
      contentHeight: {},
      vtabsW: "320px",
      vtabsH: "600px",
      isTap: false
    };
  },
  watch: {
    vtabs(vals) {
      this.initData(vals);
    },
    activeTab(newVal, oldVal) {
      if (this.linkage) {
        this.setDefaultTab(newVal);
      } else {
        this.switchTab(newVal, true);
      }
    },
    current(val) {
      this.scrollTabBar(val);
    },
    height(val) {
      this.setHeight(val);
    },
    width(val) {
      this.setWidth(val);
    }
  },
  created() {
    this.children = [];
    this.setWidth(this.width);
    this.setHeight(this.height);
    this.calcHeightTimer = null;
    this.scrollTimer = null;
    this.initData(this.vtabs);
  },
  methods: {
    setWidth(width) {
      let res = common_vendor.index.getSystemInfoSync();
      if (width == 0 || width == "0px" || width == "0rpx") {
        this.vtabsW = res.windowWidth + "px";
      } else {
        this.vtabsW = width;
      }
    },
    setHeight(height) {
      let res = common_vendor.index.getSystemInfoSync();
      if (height == 0 || height == "0px" || height == "0rpx") {
        this.vtabsH = res.windowHeight + "px";
      } else {
        this.vtabsH = height;
      }
    },
    setDefaultTab(index, idx = 0) {
      let len = this.vtabs.length;
      if (this.heightRecords.length === len && len > 0) {
        this.switchTab(index, true);
      } else {
        if (idx >= 100)
          return;
        idx++;
        setTimeout(() => {
          this.setDefaultTab(index, idx);
        }, 250);
      }
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              name: item
            };
          });
        }
        this.vals = vals;
        this.$nextTick(() => {
          if (this.linkage) {
            setTimeout(() => {
              this.setDefaultTab(this.activeTab);
            }, 50);
          } else {
            this.switchTab(this.activeTab, true);
          }
        });
      }
    },
    scrollTabBar(index) {
      let len = this.vtabs.length;
      if (len === 0)
        return;
      index = index < 6 ? 0 : index - 5;
      if (index >= len)
        index = len - 1;
      this.scrollInto = `fui_vtabs_bar_${index}`;
    },
    switchTab(index, init) {
      index = Number(index);
      const item = {
        ...this.vals[index]
      };
      if (item.disable)
        return;
      if (this.linkage) {
        this.contentScrollTop = this.heightRecords[this.current - 1] || 0;
        this.$nextTick(() => {
          setTimeout(() => {
            this.current = index;
            this.contentScrollTop = this.heightRecords[index - 1] || 0;
          }, 50);
        });
      } else {
        this.current = index;
      }
      if (!init) {
        this.isTap = true;
        this.$emit("click", {
          index,
          ...item
        });
      }
    },
    calcHeight() {
      let len = this.vtabs.length;
      let _heightRecords = [];
      let temp = 0;
      for (let i = 0; i < len; i++) {
        _heightRecords[i] = temp + (this.contentHeight[i] || 0);
        temp = _heightRecords[i];
      }
      this.heightRecords = _heightRecords;
    },
    contentScroll(e) {
      if (!this.linkage)
        return;
      if (this.isTap) {
        if (this.scrollTimer) {
          clearTimeout(this.scrollTimer);
        }
        this.scrollTimer = setTimeout(() => {
          this.isTap = false;
        }, 50);
        return;
      }
      let _heightRecords = this.heightRecords;
      if (_heightRecords.length === 0)
        return;
      let len = this.vtabs.length;
      let scrollTop = e.detail.scrollTop + (len - 1) * 0.19;
      let index = 0;
      if (scrollTop >= _heightRecords[0]) {
        for (let i = 1; i < len; i++) {
          if (scrollTop >= _heightRecords[i - 1] && scrollTop < _heightRecords[i]) {
            index = i;
            break;
          }
        }
      }
      if (index != this.current) {
        const item = {
          ...this.vals[index]
        };
        this.$emit("change", {
          index,
          ...item
        });
        this.current = index;
      }
    },
    getCalcHeight(height, index) {
      this.contentHeight[index] = height;
      if (this.calcHeightTimer) {
        clearTimeout(this.calcHeightTimer);
      }
      this.calcHeightTimer = setTimeout(() => {
        this.calcHeight();
      }, 150);
    },
    uninstall(tabIndex, target) {
      this.children.forEach((item, index) => {
        if (item === target) {
          this.children.splice(index, 1);
        }
      });
      delete this.contentHeight[tabIndex];
      this.calcHeight();
    },
    reset() {
      if (this.linkage) {
        this.children.forEach((item, index) => {
          item.calcHeight((height) => {
            this.getCalcHeight(height, Number(item.tabIndex));
          });
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.vals, (item, index, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: (item.iconWidth || 40) + "rpx",
        c: (item.iconHeight || 40) + "rpx",
        d: $data.current === index && item.activeIcon ? item.activeIcon : item.icon
      } : {}, {
        e: common_vendor.t(item.name),
        f: item.badge
      }, item.badge ? {
        g: common_vendor.t($props.isDot ? "" : item.badge),
        h: !$props.badgeBackground ? 1 : "",
        i: $props.isDot ? 1 : "",
        j: !$props.isDot ? 1 : "",
        k: $props.badgeColor,
        l: $props.badgeBackground
      } : {}, {
        m: !$props.activeColor && $data.current === index ? 1 : "",
        n: ($data.current === index ? $props.activeSize : $props.size) + "rpx",
        o: $data.current === index ? $props.activeColor : $props.color,
        p: $data.current === index ? $props.activeFontWeight : $props.fontWeight,
        q: !item.disable ? 1 : "",
        r: item.disable ? 1 : "",
        s: !$props.borderColor && $data.current === index && $props.isBorder ? 1 : "",
        t: "fui_vtabs_bar_" + index,
        v: index,
        w: $data.current === index ? $props.activeBgColor : $props.background,
        x: $data.current === index && $props.isBorder ? $props.borderColor : "transparent",
        y: common_vendor.o(($event) => $options.switchTab(index))
      });
    }),
    b: $props.isBorder ? 1 : "",
    c: $props.tabWidth + "rpx",
    d: $props.tabHeight + "rpx",
    e: $props.tabWidth + "rpx",
    f: $props.tabWidth + "rpx",
    g: $data.scrollInto,
    h: $data.isTap,
    i: $props.tabWidth + "rpx",
    j: $props.background,
    k: $data.contentScrollTop,
    l: $props.animation,
    m: common_vendor.o((...args) => $options.contentScroll && $options.contentScroll(...args)),
    n: $data.vtabsW,
    o: $data.vtabsH
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fa192436"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-vtabs/fui-vtabs.vue"]]);
my.createComponent(Component);
