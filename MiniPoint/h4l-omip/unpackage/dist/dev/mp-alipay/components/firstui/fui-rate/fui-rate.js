"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  emits: ["change"],
  name: "fui-rate",
  props: {
    max: {
      type: [Number, String],
      default: 5
    },
    score: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: "#CCCCCC"
    },
    activeColor: {
      type: String,
      default: "#FFB703"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 56
    },
    spacing: {
      type: [Number, String],
      default: 0
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    halfRate: {
      type: [Number, String],
      default: 0.2
    },
    touchable: {
      type: Boolean,
      default: true
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  watch: {
    max(newValue, oldValue) {
      this.initData(newValue);
    },
    score(newValue, oldValue) {
      this.initRateScore(newValue);
    }
  },
  data() {
    return {
      stars: [],
      pageX: 0,
      intScore: 0,
      decimalScore: 0,
      isPC: false,
      rated: false
    };
  },
  created() {
    this.initData(this.max);
    this.initRateScore(this.score);
  },
  mounted() {
    setTimeout(() => {
      this._getSize();
    }, 100);
  },
  methods: {
    getName(index, iScore, dScore) {
      let name = "star";
      if (index < iScore) {
        name += "-fill";
      }
      if (index === iScore && dScore > 0) {
        name += "half";
      }
      return name;
    },
    initData(vals) {
      vals = Number(vals);
      if (isNaN(vals)) {
        vals = 5;
      }
      vals = Math.ceil(vals);
      this.stars = Array.from(new Array(vals + 1).keys()).slice(1);
    },
    initRateScore(val) {
      val = Number(val);
      let intVal = parseInt(val);
      let decimalVal = val % 1;
      if (!this.allowHalf) {
        intVal = decimalVal > 0 ? intVal + 1 : intVal;
        decimalVal = 0;
      }
      this.intScore = intVal;
      this.decimalScore = decimalVal;
    },
    _getSize() {
      common_vendor.index.createSelectorQuery().select(".fui-rate__wrap").boundingClientRect().exec((ret) => {
        if (ret) {
          this.pageX = ret[0].left || 0;
        }
      });
    },
    _getRateScore(clientX) {
      const distance = clientX - this.pageX;
      let score = 0;
      if (distance > 0) {
        let width = common_vendor.index.upx2px(Number(this.size) + Number(this.spacing));
        score = distance / width;
        let decimalScore = score % 1;
        if (!this.allowHalf) {
          decimalScore = decimalScore > 0 ? 1 : 0;
        } else {
          if (decimalScore > Number(this.halfRate)) {
            decimalScore = decimalScore <= 0.5 ? 0.5 : 1;
          } else {
            decimalScore = 0;
          }
        }
        score = parseInt(score) + decimalScore;
        let max = Number(this.max);
        score = score > max ? max : score;
      }
      this.initRateScore(score);
      this.$emit("change", {
        score,
        param: this.param
      });
    },
    touchstart(e) {
      if (this.disabled)
        return;
      const {
        clientX,
        screenX
      } = e.changedTouches[0];
      this._getRateScore(clientX || screenX);
    },
    touchmove(e) {
      if (this.disabled || !this.touchable)
        return;
      const {
        clientX,
        screenX
      } = e.changedTouches[0];
      this._getRateScore(clientX || screenX);
    },
    mousedown(e) {
    },
    mousemove(e) {
    },
    mouseup(e) {
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
  return {
    a: common_vendor.f($data.stars, (item, index, i0) => {
      return {
        a: "f0f43538-0-" + i0,
        b: common_vendor.p({
          disabled: $props.disabled,
          name: $options.getName(index, $data.intScore, $data.decimalScore),
          size: $props.size,
          color: index < $data.intScore || index == $data.intScore && $data.decimalScore > 0 ? $props.activeColor : $props.color
        }),
        c: index
      };
    }),
    b: $props.disabled ? 1 : "",
    c: $props.spacing + "rpx",
    d: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    e: common_vendor.o((...args) => $options.touchmove && $options.touchmove(...args)),
    f: common_vendor.o((...args) => $options.mousedown && $options.mousedown(...args)),
    g: common_vendor.o((...args) => $options.mousemove && $options.mousemove(...args)),
    h: common_vendor.o((...args) => $options.mouseup && $options.mouseup(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f0f43538"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-rate/fui-rate.vue"]]);
my.createComponent(Component);
