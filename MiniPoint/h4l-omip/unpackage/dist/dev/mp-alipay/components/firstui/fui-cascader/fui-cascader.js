"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-cascader",
  emits: ["change", "complete"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultKey: {
      type: String,
      default: "value"
    },
    stepLoading: {
      type: Boolean,
      default: false
    },
    showBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: "#eee"
    },
    headHeight: {
      type: [Number, String],
      default: 88
    },
    headBackground: {
      type: String,
      default: "#FFFFFF"
    },
    text: {
      type: String,
      default: "\u8BF7\u9009\u62E9"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    color: {
      type: String,
      default: "#181818"
    },
    activeColor: {
      type: String,
      default: ""
    },
    showLine: {
      type: Boolean,
      default: true
    },
    height: {
      type: [Number, String],
      default: 600
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    checkMarkColor: {
      type: String,
      default: ""
    },
    imgWidth: {
      type: [Number, String],
      default: 48
    },
    imgHeight: {
      type: [Number, String],
      default: 48
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    textSize: {
      type: [Number, String],
      default: 26
    },
    textColor: {
      type: String,
      default: "#181818"
    },
    textActiveColor: {
      type: String,
      default: "#181818"
    }
  },
  data() {
    return {
      current: 0,
      defCurrent: 0,
      selectedArr: [],
      scrollViewId: "fui_cr__0",
      isShow: true
    };
  },
  watch: {
    options(vals) {
      this.setDefaultOptions(this.value);
    },
    value(vals) {
      this.setDefaultOptions(vals);
    }
  },
  created() {
    this.setDefaultOptions(this.value);
  },
  methods: {
    reset() {
      this.initData(this.options, -1);
    },
    setRequestData(data, layer) {
      this.subLevelData(data, layer);
    },
    end(layer) {
      this.subLevelData([], layer);
    },
    subLevelData(data, layer) {
      if (!data || data.length === 0) {
        if (layer == -1)
          return;
        let arr = this.selectedArr;
        if (layer < arr.length - 1) {
          let newArr = arr.slice(0, layer + 1);
          this.selectedArr = newArr;
        }
        let result = JSON.parse(JSON.stringify(this.selectedArr));
        result[result.length - 1] || {};
        let text = [];
        let value = [];
        let src = [];
        result.map((item) => {
          text.push(item.text);
          value.push(item.value);
          src.push(item.src);
          delete item["data"];
          delete item["index"];
          delete item["scrollViewId"];
          return item;
        });
        this.$emit("complete", {
          result,
          value,
          text,
          src
        });
        setTimeout(() => {
          this.scrollViewId = `fui_cr_${layer}`;
        }, 50);
      } else {
        let item = [{
          text: this.text,
          value: "",
          src: "",
          index: -1,
          scrollViewId: "fui_c__0",
          data
        }];
        if (layer == -1) {
          this.selectedArr = item;
        } else {
          let retainArr = this.selectedArr.slice(0, layer + 1) || [];
          this.selectedArr = retainArr.concat(item);
        }
        let current = this.selectedArr.length - 1;
        if (current >= this.current) {
          this.defCurrent = this.current;
        }
        this.$nextTick(() => {
          setTimeout(() => {
            this.defCurrent = current;
            this.current = current;
            this.scrollViewId = `fui_cr_${this.current > 1 ? this.current - 1 : 0}`;
          }, 50);
        });
      }
    },
    getDefaultIndex(arr, val) {
      if (!arr || arr.length === 0 || val === void 0)
        return -1;
      let key = this.defaultKey || "value";
      let index = -1;
      for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i][key] == val) {
          index = i;
          break;
        }
      }
      return index;
    },
    removeChildren(data) {
      let list = data.map((item) => {
        delete item["children"];
        return item;
      });
      return list;
    },
    getItemList(layer, index, selectedArr) {
      let list = [];
      let arr = JSON.parse(JSON.stringify(this.options));
      selectedArr = selectedArr || this.selectedArr;
      if (layer == -1) {
        list = this.removeChildren(arr);
      } else {
        let subi = selectedArr[0].index;
        subi = subi === void 0 || subi == -1 ? index : subi;
        if (arr[subi] && arr[subi].children) {
          list = arr[subi].children;
        }
        if (layer > 0) {
          for (let i = 1; i < layer + 1; i++) {
            let val = layer === i ? index : selectedArr[i].index;
            list = val === -1 ? [] : list[val].children || [];
            if (list.length === 0)
              break;
          }
        }
        list = this.removeChildren(list);
      }
      return list;
    },
    setDefaultOptions(vals) {
      let options = this.options || [];
      if (!options || options.length === 0)
        return;
      vals = vals || [];
      let selectedArr = [];
      if (vals.length > 0) {
        if (this.stepLoading) {
          options.forEach((item, index) => {
            let subi = this.getDefaultIndex(item, vals[index]);
            let obj = item[subi] || {};
            selectedArr.push({
              text: obj.text || this.text,
              value: obj.value || "",
              src: obj.src || "",
              index: subi,
              scrollViewId: `fui_c_${subi}`,
              data: item
            });
          });
        } else {
          let subi = -1;
          for (let j = 0, len = vals.length; j < len; j++) {
            let item = vals[j];
            let list = [];
            let obj = {};
            if (j === 0) {
              list = this.getItemList(-1);
            } else {
              list = this.getItemList(j - 1, subi, selectedArr);
            }
            subi = this.getDefaultIndex(list, item);
            if (subi !== -1) {
              obj = list[subi];
            }
            selectedArr.push({
              text: obj.text || this.text,
              value: obj.value || "",
              src: obj.src || "",
              index: subi,
              scrollViewId: `fui_c_${subi}`,
              data: list
            });
            if (subi === -1)
              break;
          }
        }
        this.selectedArr = selectedArr;
        this.defCurrent = this.current;
        let current = selectedArr.length - 1;
        this.$nextTick(() => {
          setTimeout(() => {
            this.defCurrent = current;
            this.current = current;
            this.checkTabs();
          }, 20);
        });
      } else {
        this.initData(options, -1);
      }
    },
    initData(data, layer) {
      if (!data || data.length === 0)
        return;
      if (this.stepLoading) {
        if (Array.isArray(data[0])) {
          data = data[0];
        }
        this.subLevelData(data, layer);
      } else {
        this.subLevelData(this.getItemList(layer, -1), layer);
      }
    },
    swichTabs(current) {
      if (this.current != current) {
        this.defCurrent = this.current;
        setTimeout(() => {
          this.defCurrent = current;
          this.current = current;
        }, 20);
      }
    },
    checkTabs() {
      let current = this.current;
      let item = this.selectedArr[current] || {};
      item.scrollViewId = "fui_c__0";
      this.$nextTick(() => {
        setTimeout(() => {
          let index = Number(item.index);
          let val = index < 2 ? 0 : index - 2;
          item.scrollViewId = `fui_c_${val}`;
        }, 20);
      });
      this.scrollViewId = `fui_cr_${current > 1 ? current - 1 : 0}`;
    },
    switchTab(e) {
      this.current = e.detail.current;
      this.checkTabs();
    },
    change(index, subi, sub) {
      let item = this.selectedArr[index];
      if (item.index == subi)
        return;
      item.index = subi;
      item.text = sub.text;
      item.value = sub.value;
      item.src = sub.src || "";
      this.$emit("change", {
        layer: index,
        index: subi,
        ...sub
      });
      if (!this.stepLoading) {
        let data = this.getItemList(index, subi);
        this.subLevelData(data, index);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.selectedArr, (item, idx, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.text),
        b: item.text.length > 6 ? 1 : "",
        c: idx === $data.current && !$props.activeColor ? 1 : "",
        d: idx === $data.current ? $props.activeColor : $props.color,
        e: idx === $data.current ? "bold" : "normal",
        f: idx === $data.current && $props.showLine
      }, idx === $data.current && $props.showLine ? {
        g: !$props.activeColor ? 1 : "",
        h: $props.activeColor
      } : {}, {
        i: `fui_cr_${idx}`,
        j: idx,
        k: common_vendor.o(($event) => $options.swichTabs(idx))
      });
    }),
    b: $props.size + "rpx",
    c: $props.headHeight + "rpx",
    d: $data.scrollViewId,
    e: $props.headBackground,
    f: $props.showBorder
  }, $props.showBorder ? {
    g: $props.borderColor
  } : {}, {
    h: common_vendor.f($data.selectedArr, (item, index, i0) => {
      return {
        a: common_vendor.f(item.data, (sub, subi, i1) => {
          return common_vendor.e({
            a: item.index === subi
          }, item.index === subi ? {
            b: !$props.activeColor ? 1 : "",
            c: $props.checkMarkColor || $props.activeColor,
            d: $props.checkMarkColor || $props.activeColor
          } : {}, {
            e: sub.src
          }, sub.src ? {
            f: sub.src,
            g: $props.imgWidth + "rpx",
            h: $props.imgHeight + "rpx",
            i: $props.radius + "rpx"
          } : {}, {
            j: common_vendor.t(sub.text),
            k: item.index === subi ? $props.textActiveColor : $props.textColor,
            l: item.index === subi ? "bold" : "normal",
            m: `fui_c_${subi}`,
            n: subi,
            o: common_vendor.o(($event) => $options.change(index, subi, sub))
          });
        }),
        b: item.scrollViewId,
        c: index
      };
    }),
    i: $props.textSize + "rpx",
    j: $props.height + "rpx",
    k: $props.background,
    l: $data.defCurrent,
    m: common_vendor.o((...args) => $options.switchTab && $options.switchTab(...args)),
    n: $props.height + "rpx",
    o: $props.background
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c036b4b"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-cascader/fui-cascader.vue"]]);
my.createComponent(Component);
