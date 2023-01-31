"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-digital-roller",
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 32
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 32
    },
    duration: {
      type: [Number, String],
      default: 1.2
    }
  },
  computed: {
    getStyles() {
      let styles = `height:${this.rollHeight}px;`;
      if (this.width && this.width != 0) {
        styles += `width:${this.width}rpx;`;
      }
      return styles;
    }
  },
  watch: {
    value(val) {
      this.initColumn(this.value);
    },
    height(val) {
      this.initHeight(val);
    }
  },
  data() {
    return {
      columns: [],
      keys: [],
      rollHeight: 0,
      rows: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    };
  },
  created() {
    this.initHeight(this.height);
    this.initColumn(this.value);
  },
  methods: {
    initHeight(val) {
      let height = Math.floor(common_vendor.index.upx2px(val || 0));
      height = height % 2 === 0 ? height : height + 1;
      this.rollHeight = height;
    },
    initColumn(val) {
      val = val + "";
      let vals = val.split("");
      let digit = vals.length, arr = [];
      for (let i = 0; i < digit; i++) {
        if (~this.rows.indexOf(vals[i])) {
          arr.push(this.rows);
        } else {
          arr.push([vals[i]]);
        }
      }
      this.columns = arr;
      this.startRoll(vals);
    },
    startRoll(vals) {
      let lengths = this.columns.length, indexs = [];
      while (vals.length) {
        let num = vals.pop();
        if (~this.rows.indexOf(num)) {
          indexs.unshift(Number(num));
        } else {
          indexs.unshift(0);
        }
      }
      while (indexs.length < lengths) {
        indexs.unshift(0);
      }
      this.keys = indexs;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.columns, (items, index, i0) => {
      return {
        a: common_vendor.f(items, (item, idx, i1) => {
          return {
            a: common_vendor.t(item),
            b: idx
          };
        }),
        b: `translate3d(0, -${($data.keys[index] || 0) * $data.rollHeight}px, 0)`,
        c: index
      };
    }),
    b: !$props.color ? 1 : "",
    c: $props.color,
    d: $props.size + "rpx",
    e: $props.size + "rpx",
    f: $props.fontWeight,
    g: $data.rollHeight + "px",
    h: `${$props.duration}s`,
    i: common_vendor.s($options.getStyles)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74a7f4e8"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-digital-roller/fui-digital-roller.vue"]]);
my.createComponent(Component);