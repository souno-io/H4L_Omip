"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-table",
  emits: ["click"],
  props: {
    header: {
      type: Array,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    fontWeight: {
      type: [Number, String],
      default: 600
    },
    headerBgColor: {
      type: String,
      default: "#fff"
    },
    fixed: {
      type: Boolean,
      default: false
    },
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    full: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 0
    },
    gap: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    horBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#eee"
    },
    background: {
      type: String,
      default: "#fff"
    },
    stripe: {
      type: Boolean,
      default: false
    },
    stripeColor: {
      type: String,
      default: "#F8F8F8"
    },
    textSize: {
      type: [Number, String],
      default: 28
    },
    textColor: {
      type: String,
      default: "#333"
    },
    align: {
      type: String,
      default: "center"
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    padding: {
      type: [Number, String],
      default: 20
    }
  },
  watch: {
    header(val) {
      this.handleHeader(this.header);
    }
  },
  data() {
    let isNvue = false;
    return {
      width: 0,
      divideW: 0,
      hData: [],
      tableData: [],
      totalW: 0,
      isNvue,
      scrollH: 0
    };
  },
  created() {
    this.handleHeader(this.header);
  },
  methods: {
    getPx(value) {
      let val = parseInt(common_vendor.index.upx2px(Number(value)));
      return val % 2 === 0 ? val : val + 1;
    },
    getId(index) {
      return `${index}_tr_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    },
    handleHeader(vals) {
      if (!vals || vals.length === 0)
        return;
      vals = JSON.parse(JSON.stringify(vals));
      let winWidth = common_vendor.index.getSystemInfoSync().windowWidth;
      let width = 0, left = 0, right = 0;
      let len = vals.length;
      vals.map((item, index) => {
        item.tdId = this.getId(index);
        item.width = this.getPx(item.width || 200);
        width += item.width;
        if (item.fixed) {
          item.left = item.fixed !== "right" ? left : 0;
          left += item.width;
        }
        if (item.type === 3 && item.buttons) {
          item.buttons.map((btn, idx) => {
            btn.bId = this.getId(index);
          });
        }
      });
      for (let i = 0; i < len; i++) {
        let item = vals[len - i - 1];
        if (item && item.fixed) {
          item.right = item.fixed === "right" ? right : 0;
          right += item.width;
        }
      }
      let gap = this.gap == 0 ? 0 : this.getPx(Number(this.gap) * 2);
      this.totalW = width;
      let totalWidth = winWidth - gap;
      this.width = width > totalWidth ? totalWidth : width;
      if (this.full && totalWidth > this.width) {
        this.divideW = Math.floor((totalWidth - this.width) / len);
        let lastW = (totalWidth - this.width) % len;
        let item = vals[len - 1];
        item.width += lastW;
        let dw = this.divideW * len + lastW;
        this.width += dw;
        this.totalW += dw;
      }
      this.hData = vals;
    },
    handleTap(index, j) {
      let item = this.itemList[index];
      this.$emit("click", {
        item,
        index,
        buttonIndex: j
      });
    },
    trClick(index) {
      let item = this.itemList[index];
      this.$emit("rowClick", {
        item,
        index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.show
  }, $props.show ? {
    b: common_vendor.f($data.hData, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.label || item.prop),
        b: item.width + $data.divideW + "px",
        c: item.color || $props.color,
        d: (item.size || $props.size) + "rpx",
        e: $props.border && item.fixed === "right"
      }, $props.border && item.fixed === "right" ? {
        f: $props.borderColor
      } : {}, {
        g: $props.border && index === 0 ? 1 : "",
        h: item.fixed && !$data.isNvue ? 1 : "",
        i: $props.border && index === 0 ? $props.borderColor : "transparent",
        j: item.background || $props.headerBgColor,
        k: item.width + $data.divideW + "px",
        l: item.fixed && item.fixed !== "right" && !$data.isNvue ? item.left + "px" : "auto",
        m: item.fixed === "right" && !$data.isNvue ? item.right + "px" : "auto",
        n: index
      });
    }),
    c: $props.align === "center" ? 1 : "",
    d: $props.align === "right" ? 1 : "",
    e: $props.ellipsis ? 1 : "",
    f: $props.fontWeight,
    g: $props.border ? 1 : "",
    h: $props.align === "center" ? 1 : "",
    i: $props.align === "right" ? 1 : "",
    j: $props.border ? $props.borderColor : "transparent",
    k: $props.padding + "rpx",
    l: $props.padding + "rpx",
    m: $props.horBorder ? 1 : "",
    n: $props.horBorder && $props.show ? 1 : "",
    o: $props.fixed ? 1 : "",
    p: $props.horBorder ? $props.borderColor : "transparent",
    q: $props.horBorder && $props.show ? $props.borderColor : "transparent"
  } : {}, {
    r: common_vendor.f($props.itemList, (item, index, i0) => {
      return {
        a: common_vendor.f($data.hData, (model, idx, i1) => {
          return common_vendor.e({
            a: model.type !== 3
          }, model.type !== 3 ? common_vendor.e({
            b: model.type === 2
          }, model.type === 2 ? {
            c: item[model.prop] || "",
            d: (model.imgWidth || 120) + "rpx",
            e: model.imgHeight ? model.imgHeight + "rpx" : "auto"
          } : {
            f: common_vendor.t(item[model.prop] || ""),
            g: $props.align === "center" ? 1 : "",
            h: $props.align === "right" ? 1 : "",
            i: $props.ellipsis ? 1 : "",
            j: !$props.ellipsis ? 1 : "",
            k: model.textColor || $props.textColor,
            l: (model.textSize || $props.textSize) + "rpx",
            m: model.width + $data.divideW + "px"
          }) : {
            n: common_vendor.f(model.buttons, (btn, j, i2) => {
              return {
                a: common_vendor.t(btn.text),
                b: j > 0 ? 1 : "",
                c: (btn.size || $props.textSize) + "rpx",
                d: btn.color,
                e: btn.fontWeight || "normal",
                f: btn.bId,
                g: common_vendor.o(($event) => $options.handleTap(index, j))
              };
            })
          }, {
            o: $props.border && model.fixed === "right"
          }, $props.border && model.fixed === "right" ? {
            p: $props.borderColor
          } : {}, {
            q: $props.border && idx === 0 ? 1 : "",
            r: model.type === 3 ? 1 : "",
            s: model.fixed && !$data.isNvue ? 1 : "",
            t: model.tdId,
            v: $props.border && idx === 0 ? $props.borderColor : "transparent",
            w: model.width + $data.divideW + "px",
            x: model.fixed && model.fixed !== "right" && !$data.isNvue ? model.left + "px" : "auto",
            y: model.fixed === "right" && !$data.isNvue ? model.right + "px" : "auto"
          });
        }),
        b: item.background || ((index + 1) % 2 === 0 && $props.stripe ? $props.stripeColor : $props.background),
        c: $props.horBorder && !$props.show && index === 0 ? 1 : "",
        d: $props.horBorder && !$props.show && index === 0 ? $props.borderColor : "transparent",
        e: index,
        f: common_vendor.o(($event) => $options.trClick(index))
      };
    }),
    s: $props.border ? 1 : "",
    t: $props.align === "center" ? 1 : "",
    v: $props.align === "right" ? 1 : "",
    w: $props.border ? $props.borderColor : "transparent",
    x: $props.padding + "rpx",
    y: $props.padding + "rpx",
    z: $props.horBorder ? 1 : "",
    A: $props.horBorder ? $props.borderColor : "transparent",
    B: $data.totalW + "px",
    C: $props.height > 0 && $props.height != 0,
    D: $data.width + "px",
    E: $props.height > 0 || $props.height != 0 ? $props.height + "rpx" : "auto",
    F: !$props.height || $props.height == 0 ? 1 : "",
    G: $props.height > 0 || $props.height != 0 ? $props.height + "rpx" : "auto",
    H: $data.width + "px"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c7860bf"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-table/fui-table.vue"]]);
my.createComponent(Component);
