"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-waterfall",
  emits: ["init", "end"],
  props: {
    columnGap: {
      type: [Number, String],
      default: 24
    },
    topGap: {
      type: [Number, String],
      default: 24
    },
    leftGap: {
      type: [Number, String],
      default: 0
    },
    rightGap: {
      type: [Number, String],
      default: 0
    }
  },
  provide() {
    return {
      waterfall: this
    };
  },
  data() {
    return {
      height: 0,
      itemWidth: 0,
      leftHeight: 0,
      rightHeight: 0,
      tGap: 0,
      lGap: 0,
      x2: 0
    };
  },
  created() {
    this.childrenArr = [];
    this.loadedArr = [];
    this.initParam();
  },
  beforeUnmount() {
    this.childrenArr = null;
    this.loadedArr = null;
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    initParam(callback) {
      this.tGap = this.getPx(this.topGap);
      this.lGap = this.getPx(this.leftGap);
      const colGap = this.getPx(this.columnGap);
      const rGap = this.getPx(this.rightGap);
      const sys = common_vendor.index.getSystemInfoSync();
      const gap = colGap + this.lGap + rGap;
      this.itemWidth = (sys.windowWidth - gap) / 2;
      this.x2 = this.lGap + this.itemWidth + colGap;
      callback && callback(this.itemWidth);
      this.$emit("init", {
        itemWidth: this.itemWidth
      });
    },
    resetLoadmore() {
      this.leftHeight = 0;
      this.rightHeight = 0;
      this.height = 0;
      this.childrenArr = [];
      this.loadedArr = [];
    },
    getWaterfallInfo(itemHeight, callback) {
      if (!itemHeight)
        return;
      let x = this.lGap;
      let y = 0;
      let itemGap = 0;
      if (this.leftHeight <= this.rightHeight) {
        y = this.leftHeight;
        if (this.leftHeight === 0) {
          this.leftHeight += itemHeight;
        } else {
          itemGap = this.tGap;
          y += this.tGap;
          this.leftHeight += itemHeight + this.tGap;
        }
      } else {
        x = this.x2;
        y = this.rightHeight;
        if (this.rightHeight === 0) {
          this.rightHeight += itemHeight;
        } else {
          itemGap = this.tGap;
          y += this.tGap;
          this.rightHeight += itemHeight + this.tGap;
        }
      }
      callback && callback({
        x,
        y,
        itemGap
      });
    },
    setWaterfallHeight(itemGap) {
      this.height = Math.ceil(Math.max(this.leftHeight, this.rightHeight) + itemGap);
    },
    startSorting() {
      let clen = this.childrenArr.length;
      let llen = this.loadedArr.length;
      if (clen === llen && llen > 0) {
        let itemGap = 0;
        this.childrenArr.forEach((item, index) => {
          this.getWaterfallInfo(item.height, (res) => {
            itemGap = res.itemGap;
            item.transform = `translate3d(${res.x}px,${res.y}px,0)`;
            setTimeout(() => {
              item.isShow = true;
            }, 20);
          });
        });
        this.setWaterfallHeight(itemGap);
        this.childrenArr = [];
        this.loadedArr = [];
        this.$emit("end", {});
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.height + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3df34783"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-waterfall/fui-waterfall.vue"]]);
my.createComponent(Component);
