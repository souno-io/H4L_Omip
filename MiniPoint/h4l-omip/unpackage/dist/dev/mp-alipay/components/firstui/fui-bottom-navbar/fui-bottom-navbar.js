"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-bottom-navbar",
  emits: ["init", "click"],
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 100
    },
    size: {
      type: [Number, String],
      default: 28
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    color: {
      type: String,
      default: "#333333"
    },
    left: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    isDivider: {
      type: Boolean,
      default: true
    },
    lineColor: {
      type: String,
      default: "#EEEEEE"
    },
    isFixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [Number, String],
      default: 900
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    return {
      tabs: [],
      iphoneX: false,
      isNvue
    };
  },
  created() {
    this.emitInit();
    this.initData(this.items);
  },
  watch: {
    items(vals) {
      this.initData(vals);
    }
  },
  methods: {
    emitInit() {
      const res = common_vendor.index.getSystemInfoSync();
      let iphonex = this.isPhoneX(res);
      let safeAreaH = iphonex ? 34 : 0;
      this.$emit("init", {
        height: common_vendor.index.upx2px(this.height) + safeAreaH,
        windowWidth: res.windowWidth
      });
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === "string") {
          vals = vals.map((item) => {
            return {
              text: item
            };
          });
        }
        this.tabs = vals;
      }
    },
    isPhoneX(res) {
      if (!this.safeArea)
        return false;
      let iphonex = false;
      let models = [
        "iphonex",
        "iphonexr",
        "iphonexsmax",
        "iphone11",
        "iphone11pro",
        "iphone11promax",
        "iphone12",
        "iphone12mini",
        "iphone12pro",
        "iphone12promax",
        "iphone13",
        "iphone13mini",
        "iphone13pro",
        "iphone13promax",
        "iphone14",
        "iphone14mini",
        "iphone14pro",
        "iphone14promax",
        "iphone15"
      ];
      const model = res.model.replace(/\s/g, "").toLowerCase();
      const newModel = model.split("<")[0];
      if (models.includes(model) || models.includes(newModel) || res.safeAreaInsets && res.safeAreaInsets.bottom > 0) {
        iphonex = true;
      }
      return iphonex;
    },
    itemClick(index) {
      this.$emit("click", {
        index,
        ...this.tabs[index]
      });
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
    a: common_vendor.f($data.tabs, (item, index, i0) => {
      return common_vendor.e({
        a: item.name
      }, item.name ? {
        b: "ba9a9bbf-0-" + i0,
        c: common_vendor.p({
          name: item.name,
          size: item.size || 24,
          color: item.color || $props.color
        })
      } : {}, {
        d: item.src && !item.name
      }, item.src && !item.name ? {
        e: item.src,
        f: (item.width || 40) + "rpx",
        g: (item.height || 40) + "rpx"
      } : {}, {
        h: common_vendor.t(item.text),
        i: (item.name || item.src ? $props.left : 0) + "rpx",
        j: index !== $data.tabs.length - 1 && $props.isDivider
      }, index !== $data.tabs.length - 1 && $props.isDivider ? {
        k: $props.lineColor
      } : {}, {
        l: index,
        m: common_vendor.o(($event) => $options.itemClick(index))
      });
    }),
    b: $props.size + "rpx",
    c: $props.color,
    d: $props.fontWeight,
    e: $props.height + "rpx",
    f: $props.isBorder ? 1 : "",
    g: $props.height + "rpx",
    h: $props.isBorder && $data.isNvue ? $props.lineColor : "transparent",
    i: ($data.iphoneX || !$data.isNvue) && $props.isFixed && $props.safeArea
  }, ($data.iphoneX || !$data.isNvue) && $props.isFixed && $props.safeArea ? {
    j: $data.iphoneX ? 1 : ""
  } : {}, {
    k: $props.isFixed ? 1 : "",
    l: $props.background,
    m: $props.zIndex
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ba9a9bbf"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-bottom-navbar/fui-bottom-navbar.vue"]]);
my.createComponent(Component);
