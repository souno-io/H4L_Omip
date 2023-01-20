"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-filter-bar",
  emits: ["change"],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 88
    },
    background: {
      type: String,
      default: "#fff"
    },
    isLine: {
      type: Boolean,
      default: true
    },
    lineColor: {
      type: String,
      default: "#eee"
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    activeColor: {
      type: String,
      default: "#181818"
    },
    size: {
      type: [Number, String],
      default: 28
    }
  },
  watch: {
    items(val) {
      this.itemList = val;
    }
  },
  data() {
    return {
      itemList: []
    };
  },
  created() {
    this.itemList = this.items;
  },
  methods: {
    handleData(index) {
      this.itemList.forEach((item, idx) => {
        if (index !== idx && item.type !== "filter" && item.type !== "switch") {
          if (item.type === "sort") {
            item.sort = 1;
          }
          item.active = false;
          item.value = "";
        }
      });
    },
    handleClick(index) {
      let item = this.itemList[index];
      let type = item.type;
      if (type === "dropdown") {
        this.$set(item, "active", !item.active);
        item.value && this.handleData(index);
      } else if (type === "text") {
        if (item.active)
          return;
        this.$set(item, "active", true);
        this.$set(item, "value", item.text);
        this.handleData(index);
      } else if (type === "switch") {
        this.$set(item, "switch", item.switch === 2 ? 1 : 2);
        this.$set(item, "active", false);
      } else if (type === "sort") {
        if (item.value && item.sort) {
          this.$set(item, "sort", item.sort === 2 ? 1 : 2);
        } else {
          this.$set(item, "sort", 1);
        }
        this.$set(item, "value", item.sort === 1 ? "asc" : "desc");
        this.handleData(index);
      }
      setTimeout(() => {
        this.$emit("change", {
          index,
          items: this.itemList
        });
      }, 0);
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  _easycom_fui_icon2();
}
const _easycom_fui_icon = () => "../fui-icon/fui-icon.js";
if (!Math) {
  _easycom_fui_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.itemList, (item, index, i0) => {
      return common_vendor.e({
        a: item.type !== "switch"
      }, item.type !== "switch" ? {
        b: common_vendor.t(item.text),
        c: item.text.length > 4 ? 1 : "",
        d: $props.size + "rpx",
        e: $props.size + "rpx",
        f: item.value ? $props.activeColor : $props.color
      } : {}, {
        g: item.type === "dropdown"
      }, item.type === "dropdown" ? {
        h: "0d9d0c56-0-" + i0,
        i: common_vendor.p({
          name: "arrowdown",
          color: item.value ? $props.activeColor : $props.color,
          size: item.size || 32
        }),
        j: item.active ? 1 : ""
      } : {}, {
        k: item.type === "filter"
      }, item.type === "filter" ? {
        l: "0d9d0c56-1-" + i0,
        m: common_vendor.p({
          name: "screen",
          size: item.size || 28,
          color: item.value ? $props.activeColor : $props.color
        })
      } : {}, {
        n: item.type === "switch"
      }, item.type === "switch" ? {
        o: "0d9d0c56-2-" + i0,
        p: common_vendor.p({
          name: item.switch === 1 ? "classify" : "list",
          size: item.size || (item.switch === 1 ? 46 : 60),
          color: item.active ? $props.activeColor : $props.color
        })
      } : {}, {
        q: item.type === "sort"
      }, item.type === "sort" ? {
        r: "0d9d0c56-3-" + i0,
        s: common_vendor.p({
          name: item.sort === 1 ? "turningup" : "turningdown",
          color: item.value ? $props.activeColor : $props.color,
          size: item.size || 28
        })
      } : {}, {
        t: common_vendor.o(($event) => $options.handleClick(index)),
        v: index
      });
    }),
    b: $props.height + "rpx",
    c: $props.isLine
  }, $props.isLine ? {
    d: $props.lineColor
  } : {}, {
    e: $props.height + "rpx",
    f: $props.background
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d9d0c56"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-filter-bar/fui-filter-bar.vue"]]);
my.createComponent(Component);
