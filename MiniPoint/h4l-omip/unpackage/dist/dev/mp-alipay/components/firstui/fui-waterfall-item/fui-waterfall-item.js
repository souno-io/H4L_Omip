"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-waterfall-item",
  emits: ["click"],
  inject: ["waterfall"],
  props: {
    background: {
      type: String,
      default: "#FFFFFF"
    },
    radius: {
      type: [Number, String],
      default: 16
    },
    src: {
      type: String,
      default: ""
    },
    imgWidth: {
      type: [Number, String],
      default: 0
    },
    webp: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: true
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  created() {
    this.src && (this.isSrc = true);
    if (this.waterfall) {
      this.waterfall.childrenArr.push(this);
      if (this.waterfall.itemWidth) {
        this.width = this.waterfall.itemWidth;
      } else {
        this.waterfall.initParam((width) => {
          this.width = width;
        });
      }
    }
  },
  mounted() {
    if (!this.src) {
      this.$nextTick(() => {
        this.getWaterfallItemInfo();
      });
    }
  },
  data() {
    const elId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elId,
      width: 0,
      height: 0,
      transform: "",
      isShow: false,
      isLoaded: true,
      isSrc: false
    };
  },
  methods: {
    getWaterfallItemInfo() {
      this.getItemHeight((res) => {
        if (this.waterfall) {
          this.waterfall.loadedArr.push("ok");
          if (this.waterfall.childrenArr.length === this.waterfall.loadedArr.length) {
            this.waterfall.startSorting();
          }
        }
      });
    },
    getItemHeight(callback, index = 0) {
      common_vendor.index.createSelectorQuery().select(`#${this.elId}`).fields({
        size: true
      }, (data) => {
        if (index >= 20)
          return;
        if (data && data.height) {
          this.height = data.height;
          callback && callback(data.height);
        } else {
          index++;
          setTimeout(() => {
            this.getItemHeight(index);
          }, 50);
          return;
        }
      }).exec();
    },
    handleLoad(e) {
      setTimeout(() => {
        this.getWaterfallItemInfo();
      }, 50);
    },
    handleError(e) {
      this.isLoaded = false;
      setTimeout(() => {
        this.getWaterfallItemInfo();
      }, 50);
    },
    handleTap() {
      this.$emit("click", {
        param: this.param
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isSrc
  }, $data.isSrc ? common_vendor.e({
    b: $data.isLoaded
  }, $data.isLoaded ? {
    c: $props.src,
    d: $props.webp,
    e: $props.draggable,
    f: common_vendor.o((...args) => $options.handleLoad && $options.handleLoad(...args)),
    g: common_vendor.o((...args) => $options.handleError && $options.handleError(...args)),
    h: $props.imgWidth != 0 ? $props.imgWidth + "rpx" : $data.width + "px",
    i: `${$props.radius}rpx ${$props.radius}rpx 0 0`
  } : {}, {
    j: !$data.isLoaded ? 1 : "",
    k: $props.imgWidth != 0 ? $props.imgWidth + "rpx" : $data.width + "px",
    l: $data.isLoaded ? "auto" : $data.width + "px"
  }) : {}, {
    m: $data.elId,
    n: $data.isShow ? 1 : "",
    o: $data.width + "px",
    p: $props.background,
    q: $props.radius + "rpx",
    r: $data.transform,
    s: common_vendor.o((...args) => $options.handleTap && $options.handleTap(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb2bbb40"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-waterfall-item/fui-waterfall-item.vue"]]);
my.createComponent(Component);
