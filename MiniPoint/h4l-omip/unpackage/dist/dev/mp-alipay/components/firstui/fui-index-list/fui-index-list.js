"use strict";
const common_vendor = require("../../../common/vendor.js");
const fIndexListItem = () => "./f-index-list-item.js";
const _sfc_main = {
  name: "fui-index-list",
  emits: ["click", "init"],
  components: {
    fIndexListItem
  },
  props: {
    listData: {
      type: Array,
      default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 64
    },
    color: {
      type: String,
      default: "#181818"
    },
    background: {
      type: String,
      default: ""
    },
    keyColor: {
      type: String,
      default: "#7F7F7F"
    },
    activeColor: {
      type: String,
      default: "#FFFFFF"
    },
    activeBackground: {
      type: String,
      default: ""
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "#ccc"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    isSrc: {
      type: Boolean,
      default: false
    },
    subRight: {
      type: Boolean,
      default: true
    },
    custom: {
      type: Boolean,
      default: false
    },
    isHeader: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    listData(val) {
      this.initData();
    }
  },
  data() {
    let isNvue = false;
    return {
      lists: [],
      idtHeight: 0,
      winOffsetY: 0,
      winHeight: 0,
      styles: "",
      indicators: [],
      top: -1,
      start: 0,
      touching: false,
      touchmoveIndex: -1,
      scrollViewId: "",
      touchmovable: true,
      loaded: false,
      isPC: false,
      nvueAndroid: false,
      isNvue
    };
  },
  mounted() {
    setTimeout(() => {
      this.initData();
    }, 50);
  },
  methods: {
    getIndex(y) {
      let index = -1;
      index = Math.floor((y - this.start) / common_vendor.index.upx2px(40));
      return index;
    },
    initData() {
      this.lists = [];
      let height = 0;
      let lists = [];
      let tempArr = [...this.listData || []];
      for (let i = 0, len = tempArr.length; i < len; i++) {
        let model = tempArr[i];
        if (!model.data || model.data.length === 0) {
          continue;
        }
        height += 40;
        model.originalIndex = i;
        model.key = `fui_key_${Math.ceil(Math.random() * 1e6).toString(36)}`;
        lists.push(model);
      }
      this.idtHeight = height;
      this.styles = `height:${height}rpx;`;
      this.lists = lists;
      common_vendor.index.createSelectorQuery().select("#fui_index_list").boundingClientRect().exec((ret) => {
        this.winOffsetY = ret[0].top;
        this.winHeight = ret[0].height;
        this.setStyles();
      });
      this.$nextTick(() => {
        this.$emit("init");
      });
    },
    setStyles() {
      this.indicators = [];
      this.styles = `height:${this.idtHeight}rpx;top:${this.winHeight / 2}px;-webkit-transform: translateY(-${this.idtHeight / 2}rpx);transform: translateY(-${this.idtHeight / 2}rpx)`;
      let start = this.winHeight / 2 - common_vendor.index.upx2px(this.idtHeight) / 2;
      this.start = start;
      this.lists.forEach((item, index) => {
        const top = start + common_vendor.index.upx2px(index * 40 + 20 - 50);
        this.indicators.push(top);
      });
    },
    startEmits(idx, index) {
      let item = this.lists[idx];
      let data = item.data[index] || {};
      this.$emit("click", {
        index: item.originalIndex,
        letter: item.letter,
        subIndex: index,
        ...data
      });
    },
    onTap(idx, index) {
      this.startEmits(idx, index);
    },
    onClick(e) {
      const {
        idx,
        index
      } = e;
      this.startEmits(idx, index);
    },
    touchStart(e) {
      this.touching = true;
      let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
      let index = this.getIndex(pageY - this.winOffsetY);
      let item = this.lists[index];
      if (item) {
        this.scrollViewId = `fui_il_letter_${index}`;
        this.touchmoveIndex = index;
      }
    },
    touchMove(e) {
      let pageY = this.isPC ? e.pageY : e.touches[0].pageY;
      let index = this.getIndex(pageY - this.winOffsetY);
      if (this.touchmoveIndex === index)
        return false;
      let item = this.lists[index];
      if (item) {
        this.scrollViewId = `fui_il_letter_${index}`;
        this.touchmoveIndex = index;
      }
    },
    touchEnd() {
      this.touching = false;
      this.touchmoveIndex = -1;
    },
    mousedown(e) {
      if (!this.isPC)
        return;
      this.touchStart(e);
    },
    mousemove(e) {
      if (!this.isPC)
        return;
      this.touchMove(e);
    },
    mouseleave(e) {
      if (!this.isPC)
        return;
      this.touchEnd(e);
    }
  }
};
if (!Array) {
  const _component_f_index_list_item = common_vendor.resolveComponent("f-index-list-item");
  _component_f_index_list_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.lists, (list, idx, i0) => {
      return common_vendor.e({
        a: common_vendor.t(list.descr || list.letter)
      }, $props.custom ? {
        b: common_vendor.f(list.data, (model, index, i1) => {
          return {
            a: "item-" + i0 + "-" + i1,
            b: common_vendor.r("item", {
              model,
              idx,
              index,
              last: list.data.length - 1 === index,
              isSelect: $props.isSelect,
              isSrc: $props.isSrc,
              subRight: $props.subRight
            }, i0 + "-" + i1),
            c: index,
            d: common_vendor.o(($event) => $options.onTap(idx, index))
          };
        })
      } : {
        c: common_vendor.f(list.data, (model, index, i1) => {
          return {
            a: index,
            b: "597dcecb-0-" + i0 + "-" + i1,
            c: common_vendor.p({
              model,
              idx,
              index,
              last: list.data.length - 1 === index,
              isSelect: $props.isSelect,
              borderColor: $props.borderColor,
              selectedColor: $props.selectedColor,
              isSrc: $props.isSrc,
              subRight: $props.subRight
            })
          };
        }),
        d: common_vendor.o($options.onClick)
      }, {
        e: "fui_il_letter_" + idx,
        f: list.key
      });
    }),
    b: $props.color,
    c: !$props.background ? 1 : "",
    d: $props.background,
    e: $props.custom,
    f: $data.scrollViewId,
    g: $data.touching && $data.touchmoveIndex !== -1
  }, $data.touching && $data.touchmoveIndex !== -1 ? {
    h: common_vendor.t($data.lists[$data.touchmoveIndex] && $data.lists[$data.touchmoveIndex].letter),
    i: $data.nvueAndroid ? 1 : "",
    j: $data.indicators[$data.touchmoveIndex] + "px"
  } : {}, {
    k: !$data.isNvue || $data.styles
  }, !$data.isNvue || $data.styles ? {
    l: common_vendor.f($data.lists, (item, i, i0) => {
      return {
        a: common_vendor.t(item.letter),
        b: i === $data.touchmoveIndex && !$props.activeBackground ? 1 : "",
        c: i === $data.touchmoveIndex ? $props.activeBackground : "transparent",
        d: i === $data.touchmoveIndex ? $props.activeColor : $props.keyColor,
        e: i
      };
    }),
    m: common_vendor.s($data.styles),
    n: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    o: common_vendor.o((...args) => $options.touchMove && $options.touchMove(...args)),
    p: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args)),
    q: common_vendor.o((...args) => $options.mousedown && $options.mousedown(...args)),
    r: common_vendor.o((...args) => $options.mousemove && $options.mousemove(...args)),
    s: common_vendor.o((...args) => $options.mouseleave && $options.mouseleave(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-597dcecb"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-index-list/fui-index-list.vue"]]);
my.createComponent(Component);
