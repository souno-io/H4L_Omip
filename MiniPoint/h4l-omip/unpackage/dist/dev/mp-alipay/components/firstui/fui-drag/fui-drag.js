"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiDrag_bindingx = require("./bindingx.js");
const components_firstui_fuiDrag_mpjs = require("./mpjs.js");
const fDragItem = () => "./f-drag-item.js";
const _sfc_main = {
  name: "fui-drag",
  mixins: [components_firstui_fuiDrag_mpjs.mpjs, components_firstui_fuiDrag_bindingx.bindingx],
  emits: ["change", "end", "click", "delete"],
  components: {
    fDragItem
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [Number, String],
      default: 0
    },
    columns: {
      type: [Number, String],
      default: 1
    },
    itemHeight: {
      type: [Number, String],
      default: 0
    },
    square: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    isDrag: {
      type: Boolean,
      default: true
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    itemList(val) {
      this.reset();
    },
    width(val) {
      this.reset();
    },
    columns(val) {
      this.reset();
    }
  },
  data() {
    const elId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elId,
      windowHeight: 0,
      wrapWidth: 0,
      wrapHeight: 0,
      cellWidth: 0,
      cellHeight: 0,
      changeList: [],
      rows: 3,
      options: [],
      dragging: true,
      wrapTop: 0,
      wrapLeft: 0,
      list: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.reset();
    });
  },
  methods: {
    getId() {
      return `${Math.ceil(Math.random() * 1e6).toString(36)}_${new Date().getTime()}`;
    },
    getWidth(fn) {
      let width = Number(this.width);
      let sys = common_vendor.index.getSystemInfoSync();
      this.windowHeight = sys.windowHeight;
      if (width === 0) {
        width = sys.windowWidth;
      } else {
        width = common_vendor.index.upx2px(width);
      }
      this.wrapWidth = width;
      this.cellWidth = width / Number(this.columns);
      let cellHeight = common_vendor.index.upx2px(this.itemHeight);
      if (this.square) {
        cellHeight = this.cellWidth;
      }
      this.cellHeight = cellHeight;
      fn && fn();
    },
    reset() {
      this.options = [];
      this.dragging = false;
      this.getWidth(() => {
        setTimeout(() => {
          this.init();
        }, 0);
      });
    },
    getDom(callback, index = 0) {
      common_vendor.index.createSelectorQuery().select(`#${this.elId}`).boundingClientRect().exec((ret) => {
        if (index >= 10)
          return;
        if (!ret && !ret[0]) {
          index++;
          this.getDom(callback, index);
          return;
        }
        let wrapTop = ret[0].top + this.scrollTop;
        let wrapLeft = ret[0].left;
        callback && callback(wrapTop, wrapLeft);
      });
    },
    init(index = 0) {
      let options = JSON.parse(JSON.stringify(this.itemList));
      let columns = Number(this.columns);
      this.rows = Math.ceil(options.length / this.columns);
      if (options.length === 0)
        return;
      setTimeout(() => {
        this.getDom((wrapTop, wrapLeft) => {
          let list = options.map((item, index2) => {
            return {
              id: this.getId(),
              realKey: index2,
              sortKey: index2,
              transX: `${index2 % columns * this.cellWidth}px`,
              transY: `${Math.floor(index2 / columns) * this.cellHeight}px`,
              entity: item
            };
          });
          this.changeList = list;
          this.list = list;
          this.wrapTop = wrapTop;
          this.wrapLeft = wrapLeft;
          this.dragging = true;
        });
      }, 500);
    },
    sortend(e) {
      this.$emit("end", {
        itemList: e.itemList
      });
    },
    change(e) {
      this.$emit("change", {
        itemList: e.itemList
      });
    },
    itemClick(index) {
      if (!this.changeList || this.changeList.length === 0)
        return;
      let item = this.changeList[index];
      this.$emit("click", {
        index: item.realKey,
        item: item.entity
      });
    },
    deleteItem(e) {
      this.$emit("delete", {
        index: e.index
      });
    },
    listChange(e) {
      this.changeList = e.itemList;
    },
    pageScroll(e) {
      common_vendor.index.pageScrollTo({
        scrollTop: e.scrollTop,
        duration: 0
      });
    }
  }
};
if (!Array) {
  const _component_f_drag_item = common_vendor.resolveComponent("f-drag-item");
  _component_f_drag_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e($props.custom ? {
        a: "d-" + i0,
        b: common_vendor.r("d", {
          model: item.entity,
          width: $data.cellWidth,
          height: $data.cellHeight,
          index
        }, i0)
      } : {
        c: common_vendor.o($options.deleteItem),
        d: "72f99b10-0-" + i0,
        e: common_vendor.p({
          src: item.entity && item.entity.src || "",
          text: item.entity && item.entity.text,
          width: $data.cellWidth,
          height: $data.cellHeight,
          styles: $props.styles,
          index
        })
      }, {
        f: _ctx.current === index ? 1 : "",
        g: _ctx.current !== index ? 1 : "",
        h: item.id,
        i: `translate3d(${index === _ctx.current ? _ctx.transX : item.transX}, ${index === _ctx.current ? _ctx.transY : item.transY}, 0px)`,
        j: index
      });
    }),
    b: $props.custom,
    c: $data.cellWidth + "px",
    d: $data.cellHeight + "px",
    e: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    f: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    g: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    h: common_vendor.o((...args) => _ctx.longPress && _ctx.longPress(...args)),
    i: $data.elId,
    j: $data.wrapWidth + "px",
    k: $data.rows * $data.cellHeight + "px",
    l: common_vendor.n($data.dragging ? "fui-drag-item__show" : "fui-drag-item__hidden")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-72f99b10"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-drag/fui-drag.vue"]]);
my.createComponent(Component);
