"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-picker",
  emits: ["change", "cancel"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    layer: {
      type: [Number, String],
      default: 1
    },
    show: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String],
      default() {
        return [];
      }
    },
    linkage: {
      type: Boolean,
      default: false
    },
    fields: {
      type: Array,
      default() {
        return ["text", "value", "children"];
      }
    },
    radius: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 520
    },
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    titleSize: {
      type: [Number, String],
      default: 28
    },
    titleColor: {
      type: String,
      default: ""
    },
    confirmText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    confirmColor: {
      type: String,
      default: ""
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    cancelColor: {
      type: String,
      default: ""
    },
    btnSize: {
      type: [Number, String],
      default: 32
    },
    background: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "light"
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    zIndex: {
      type: [Number, String],
      default: 1001
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  created() {
    this.initialize();
    this.isShow = this.show;
  },
  computed: {
    cancelStyl() {
      let styles = `fontSize:${this.btnSize}rpx;`;
      if (this.cancelColor) {
        styles += `color:${this.cancelColor};`;
      }
      return styles;
    },
    confrimStyl() {
      let styles = `font-size:${this.btnSize}rpx;`;
      if (this.confirmColor) {
        styles += `color:${this.confirmColor};`;
      }
      return styles;
    },
    titleStyl() {
      let styles = `font-size:${this.titleSize}rpx;`;
      if (this.titleColor) {
        styles += `color:${this.titleColor};`;
      }
      return styles;
    },
    contentStyl() {
      let styles = `font-size:${this.size}px;`;
      if (this.color) {
        styles += `color:${this.color};`;
      } else {
        styles += `color:${this.theme === "dark" ? "#d1d1d1" : "#181818"};`;
      }
      return styles;
    },
    headerStyl() {
      let styles = "";
      if (this.background) {
        styles += `background:${this.background};`;
      }
      return styles;
    },
    maskStyl() {
      return `background:${this.maskBackground};z-index:${Number(this.zIndex - 10)};`;
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.setDefaultOptions();
      }
    },
    options(val) {
      this.reset();
      setTimeout(() => {
        this.initialize();
      }, 50);
    },
    fields(val) {
      this.reset();
      setTimeout(() => {
        this.initialize();
      }, 50);
    },
    show(val) {
      this.isShow = val;
    }
  },
  data() {
    return {
      firstArr: [],
      secondArr: [],
      thirdArr: [],
      fourthArr: [],
      vals: [0],
      darkStyle: "background-image: -webkit-linear-gradient(top, rgba(35, 35, 35, .95), rgba(35, 35, 35, .6)), -webkit-linear-gradient(bottom, rgba(35, 35, 35, .95), rgba(35, 35, 35, .6));",
      indicatorStyl: "border-color: #333;height: 44px;",
      tKey: "text",
      vKey: "value",
      cKey: "children",
      isEnd: true,
      isShow: false
    };
  },
  methods: {
    initialize() {
      if (this.linkage) {
        this.getFields(this.fields);
        this.setLayerData(-1, 0, 0, 0);
      } else {
        this.initData();
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.setDefaultOptions();
        }, 50);
      });
    },
    getFields(vals) {
      if (!vals || vals.length === 0)
        return;
      this.tKey = vals[0] || "text";
      this.vKey = vals[1] || "value";
      this.cKey = vals[2] || "children";
    },
    btnCancel(e) {
      this.isShow = false;
      this.$emit("cancel", {
        param: this.param
      });
    },
    maskClick(e) {
      if (!this.maskClosable)
        return;
      this.btnCancel(e);
    },
    getValue(layer = 1) {
      let vals = this.vals;
      let result = {};
      if (this.linkage) {
        let data = this.options;
        const cKey = this.cKey;
        if (layer == 1) {
          result = data[vals[0]];
        } else if (layer == 2) {
          if (data[vals[0]][cKey])
            result = data[vals[0]][cKey][vals[1]];
        } else if (layer == 3) {
          if (data[vals[0]][cKey] && data[vals[0]][cKey][vals[1]][cKey])
            result = data[vals[0]][cKey][vals[1]][cKey][vals[2]];
        } else {
          if (data[vals[0]][cKey] && data[vals[0]][cKey][vals[1]][cKey] && data[vals[0]][cKey][vals[1]][cKey][vals[2]][cKey])
            result = data[vals[0]][cKey][vals[1]][cKey][vals[2]][cKey][vals[3]];
        }
      } else {
        if (layer == 1) {
          result = this.firstArr[vals[0]] || "";
        } else if (layer == 2) {
          result = this.secondArr[vals[1]] || "";
        } else if (layer == 3) {
          result = this.thirdArr[vals[2]] || "";
        } else {
          result = this.fourthArr[vals[3]] || "";
        }
      }
      return result;
    },
    checkChildrenData(data, layer, first, second, third) {
      let arr = [];
      const children = this.cKey;
      if (layer == 1) {
        if (data[first])
          arr = data[first][children] || [];
      } else if (layer == 2) {
        if (data[first] && data[first][children] && data[first][children][second])
          arr = data[first][children][second][children] || [];
      } else {
        if (data[first] && data[first][children] && data[first][children][second] && data[first][children][second][children] && data[first][children][second][children][third])
          arr = data[first][children][second][children][third][children] || [];
      }
      return arr;
    },
    handleData(data, tKey) {
      tKey = tKey || this.tKey;
      let arr = [];
      if (data && data.length > 0) {
        for (let item of data) {
          arr.push(item[tKey]);
        }
      }
      return arr;
    },
    initData() {
      let data = this.options;
      if (!data || data.length === 0)
        return;
      if (this.layer == 1 && !Array.isArray(data[0])) {
        this.firstArr = data;
      } else {
        this.firstArr = data[0];
      }
      if (this.layer == 2) {
        this.secondArr = data[1];
      } else if (this.layer == 3) {
        this.secondArr = data[1];
        this.thirdArr = data[2];
      } else if (this.layer == 4) {
        this.secondArr = data[1];
        this.thirdArr = data[2];
        this.fourthArr = data[3];
      }
    },
    setLayerData(reset, first, second, third) {
      let data = this.options;
      if (!data || data.length === 0)
        return;
      if (this.layer == 1) {
        this.firstArr = this.handleData(data);
      } else if (this.layer == 2) {
        if (reset == -1)
          this.firstArr = this.handleData(data);
        this.secondArr = this.handleData(this.checkChildrenData(data, 1, first));
      } else if (this.layer == 3) {
        if (reset == -1)
          this.firstArr = this.handleData(data);
        if (reset == 1 || reset == -1)
          this.secondArr = this.handleData(this.checkChildrenData(data, 1, first));
        this.thirdArr = this.handleData(this.checkChildrenData(data, 2, first, second));
      } else {
        if (reset == -1)
          this.firstArr = this.handleData(data);
        if (reset == 1 || reset == -1)
          this.secondArr = this.handleData(this.checkChildrenData(data, 1, first));
        if (reset == 1 || reset == -1 || reset == 2)
          this.thirdArr = this.handleData(this.checkChildrenData(data, 2, first, second));
        this.fourthArr = this.handleData(this.checkChildrenData(data, 3, first, second, third));
      }
    },
    reset() {
      this.vals = [
        [0],
        [0, 0],
        [0, 0, 0],
        [0, 0, 0, 0]
      ][Number(this.layer) - 1];
    },
    open() {
      this.isShow = true;
    },
    setDefaultOptions() {
      let values = this.value;
      if (this.layer == 1 && !Array.isArray(values)) {
        values = [values];
      }
      let vals = [];
      let txtArr = this.firstArr;
      const len = values.length;
      const index = txtArr.indexOf(values[0]);
      if (len > 0 && index !== -1) {
        vals.push(index);
        for (let i = 1; i < len; i++) {
          if (i === 1) {
            if (this.linkage) {
              this.secondArr = this.handleData(this.checkChildrenData(this.options, 1, vals[0]));
            }
            vals.push(this.secondArr.indexOf(values[i]));
          } else if (i === 2) {
            if (this.linkage) {
              this.thirdArr = this.handleData(this.checkChildrenData(
                this.options,
                2,
                vals[0],
                vals[1]
              ));
            }
            vals.push(this.thirdArr.indexOf(values[i]));
          } else {
            if (this.linkage) {
              this.fourthArr = this.handleData(this.checkChildrenData(
                this.options,
                3,
                vals[0],
                vals[1],
                vals[2]
              ));
            }
            vals.push(this.fourthArr.indexOf(values[i]));
          }
        }
        this.vals = vals;
      } else {
        this.reset();
      }
    },
    setOneLayers(value) {
      if (this.vals[0] != value[0]) {
        this.vals = value;
      }
    },
    setTwoLayers(value) {
      if (this.vals[0] != value[0]) {
        this.setLayerData(0, value[0]);
        this.vals = [value[0], 0];
      } else {
        this.vals = value;
      }
    },
    setThreeLayers(value) {
      if (this.vals[0] != value[0]) {
        this.setLayerData(1, value[0], 0);
        this.vals = [value[0], 0, 0];
      } else if (this.vals[1] != value[1]) {
        this.setLayerData(0, value[0], value[1]);
        this.vals = [value[0], value[1], 0];
      } else {
        this.vals = value;
      }
    },
    setFourLayers(value) {
      if (this.vals[0] != value[0]) {
        this.setLayerData(1, value[0], 0, 0);
        this.vals = [value[0], 0, 0, 0];
      } else if (this.vals[1] != value[1]) {
        this.setLayerData(2, value[0], value[1], 0);
        this.vals = [value[0], value[1], 0, 0];
      } else if (this.vals[2] != value[2]) {
        this.setLayerData(0, value[0], value[1], value[2]);
        this.vals = [value[0], value[1], value[2], 0];
      } else {
        this.vals = value;
      }
    },
    emitChange() {
      let text = [];
      let value = [];
      let result = "";
      if (this.options.length > 0) {
        if (this.layer == 1) {
          const vals = this.getValue();
          if (this.linkage) {
            text = vals[this.tKey];
            value = vals[this.vKey];
          } else {
            text = vals;
            value = vals;
          }
          result = text;
        } else if (this.layer == 2) {
          const vals = this.getValue();
          const vals2 = this.getValue(2);
          if (this.linkage) {
            text = [vals[this.tKey], vals2[this.tKey] || ""];
            value = [vals[this.vKey], vals2[this.vKey] || ""];
          } else {
            text = [vals, vals2 || ""];
            value = [vals, vals2 || ""];
          }
          result = text.join("");
        } else if (this.layer == 3) {
          const vals = this.getValue();
          const vals2 = this.getValue(2);
          const vals3 = this.getValue(3);
          if (this.linkage) {
            text = [vals[this.tKey], vals2[this.tKey] || "", vals3[this.tKey] || ""];
            value = [vals[this.vKey], vals2[this.vKey] || "", vals3[this.vKey] || ""];
          } else {
            text = [vals, vals2 || "", vals3 || ""];
            value = [vals, vals2 || "", vals3 || ""];
          }
          result = text.join("");
        } else {
          const vals = this.getValue();
          const vals2 = this.getValue(2);
          const vals3 = this.getValue(3);
          const vals4 = this.getValue(4);
          if (this.linkage) {
            text = [
              vals[this.tKey],
              vals2[this.tKey] || "",
              vals3[this.tKey] || "",
              vals4[this.tKey] || ""
            ];
            value = [
              vals[this.vKey],
              vals2[this.vKey] || "",
              vals3[this.vKey] || "",
              vals4[this.vKey] || ""
            ];
          } else {
            text = [vals, vals2 || "", vals3 || "", vals4 || ""];
            value = [vals, vals2 || "", vals3 || "", vals4 || ""];
          }
          result = text.join("");
        }
      }
      this.$emit("change", {
        text,
        value,
        index: this.vals,
        result,
        param: this.param
      });
    },
    waitForTrigger(index = 0) {
      if (this.isEnd) {
        this.emitChange();
      } else {
        index++;
        if (index >= 20) {
          this.isEnd = true;
        }
        setTimeout(() => {
          this.waitForTrigger(index);
        }, 50);
      }
    },
    btnConfirm(e) {
      setTimeout(() => {
        this.isShow = false;
        this.waitForTrigger();
      }, 50);
    },
    pickerChange(e) {
      if (!this.isShow)
        return;
      let value = e.detail.value;
      if (this.linkage) {
        if (this.layer == 1) {
          this.setOneLayers(value);
        } else if (this.layer == 2) {
          this.setTwoLayers(value);
        } else if (this.layer == 3) {
          this.setThreeLayers(value);
        } else {
          this.setFourLayers(value);
        }
      } else {
        this.vals = value;
      }
      this.isEnd = true;
    },
    pickerstart() {
      this.isEnd = false;
    },
    stop(e) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    b: $data.isShow ? 1 : "",
    c: common_vendor.s($options.maskStyl),
    d: common_vendor.o((...args) => $options.maskClick && $options.maskClick(...args)),
    e: common_vendor.n($props.theme === "dark" ? "fui-pk__cancel-color_dark" : "fui-pk__cancel-color"),
    f: common_vendor.s($options.cancelStyl),
    g: common_vendor.o((...args) => $options.btnCancel && $options.btnCancel(...args)),
    h: common_vendor.t($props.title),
    i: common_vendor.n($props.theme === "dark" ? "fui-pk__title-color_dark" : "fui-pk__title-color"),
    j: common_vendor.s($options.titleStyl),
    k: common_vendor.s($options.confrimStyl),
    l: common_vendor.o((...args) => $options.btnConfirm && $options.btnConfirm(...args)),
    m: $props.theme === "dark" ? 1 : "",
    n: $props.radius ? 1 : "",
    o: common_vendor.s($options.headerStyl),
    p: $props.layer == 1
  }, $props.layer == 1 ? {
    q: common_vendor.f($data.firstArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    r: common_vendor.s($options.contentStyl),
    s: $props.theme === "dark" ? 1 : "",
    t: $props.theme === "dark" ? $data.darkStyle : "",
    v: $props.theme === "dark" ? "fui-picker__indicator" : "",
    w: $props.height + "rpx",
    x: $data.vals,
    y: common_vendor.o((...args) => $options.pickerChange && $options.pickerChange(...args))
  } : {}, {
    z: $props.layer == 2
  }, $props.layer == 2 ? {
    A: common_vendor.f($data.firstArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    B: common_vendor.s($options.contentStyl),
    C: $props.theme === "dark" ? 1 : "",
    D: common_vendor.f($data.secondArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    E: common_vendor.s($options.contentStyl),
    F: $props.theme === "dark" ? 1 : "",
    G: $props.theme === "dark" ? $data.darkStyle : "",
    H: $props.theme === "dark" ? "fui-picker__indicator" : "",
    I: $props.height + "rpx",
    J: $data.vals,
    K: common_vendor.o((...args) => $options.pickerChange && $options.pickerChange(...args))
  } : {}, {
    L: $props.layer == 3
  }, $props.layer == 3 ? {
    M: common_vendor.f($data.firstArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    N: common_vendor.s($options.contentStyl),
    O: $props.theme === "dark" ? 1 : "",
    P: common_vendor.f($data.secondArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    Q: common_vendor.s($options.contentStyl),
    R: $props.theme === "dark" ? 1 : "",
    S: common_vendor.f($data.thirdArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    T: common_vendor.s($options.contentStyl),
    U: $props.theme === "dark" ? 1 : "",
    V: $props.theme === "dark" ? $data.darkStyle : "",
    W: $props.theme === "dark" ? "fui-picker__indicator" : "",
    X: $props.height + "rpx",
    Y: $data.vals,
    Z: common_vendor.o((...args) => $options.pickerChange && $options.pickerChange(...args))
  } : {}, {
    aa: $props.layer == 4
  }, $props.layer == 4 ? {
    ab: common_vendor.f($data.firstArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    ac: common_vendor.s($options.contentStyl),
    ad: $props.theme === "dark" ? 1 : "",
    ae: common_vendor.f($data.secondArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    af: common_vendor.s($options.contentStyl),
    ag: $props.theme === "dark" ? 1 : "",
    ah: common_vendor.f($data.thirdArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    ai: common_vendor.s($options.contentStyl),
    aj: $props.theme === "dark" ? 1 : "",
    ak: common_vendor.f($data.fourthArr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    al: common_vendor.s($options.contentStyl),
    am: $props.theme === "dark" ? 1 : "",
    an: $props.theme === "dark" ? $data.darkStyle : "",
    ao: $props.theme === "dark" ? "fui-picker__indicator" : "",
    ap: $props.height + "rpx",
    aq: $data.vals,
    ar: common_vendor.o((...args) => $options.pickerChange && $options.pickerChange(...args))
  } : {}, {
    as: common_vendor.o((...args) => $options.pickerstart && $options.pickerstart(...args)),
    at: $props.theme === "dark" ? 1 : "",
    av: $data.isShow ? 1 : "",
    aw: $props.radius ? 1 : "",
    ax: $props.zIndex,
    ay: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c2a7b7e5"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-picker/fui-picker.vue"]]);
my.createComponent(Component);
