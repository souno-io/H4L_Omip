"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-preview",
  emits: ["click"],
  props: {
    previewData: {
      type: Object,
      default() {
        return {};
      }
    },
    fields: {
      type: Object,
      default() {
        return {};
      }
    },
    background: {
      type: String,
      default: ""
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    padding: {
      type: [Number, String],
      default: 32
    },
    labelWidth: {
      type: [Number, String],
      default: 0
    },
    labelAlign: {
      type: String,
      default: "left"
    },
    labelColor: {
      type: String,
      default: ""
    },
    hdLabelSize: {
      type: [Number, String],
      default: 32
    },
    hdValSize: {
      type: [Number, String],
      default: 36
    },
    hdValColor: {
      type: String,
      default: ""
    },
    bdSize: {
      type: [Number, String],
      default: 28
    },
    bdColor: {
      type: String,
      default: ""
    },
    btnSize: {
      type: [Number, String],
      default: 32
    },
    highlight: {
      type: Boolean,
      default: true
    },
    hdLeft: {
      type: [Number, String],
      default: 32
    },
    hdRight: {
      type: [Number, String],
      default: 0
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    borderColor: {
      type: String,
      default: ""
    }
  },
  watch: {
    previewData(val) {
      this.initData(val);
    },
    fields(val) {
      this.handleFileds();
    }
  },
  created() {
    this.initData(this.previewData);
  },
  data() {
    return {
      pvd: {},
      label: "label",
      value: "value",
      list: "list",
      lColor: "labelColor",
      valueColor: "valueColor",
      buttons: "buttons",
      text: "text",
      color: "color"
    };
  },
  methods: {
    handleFileds() {
      if (this.fields && typeof this.fields === "object") {
        this.label = this.fields.label || "label";
        this.value = this.fields.value || "value";
        this.list = this.fields.list || "list";
        this.lColor = this.fields.labelColor || "labelColor";
        this.valueColor = this.fields.valueColor || "valueColor";
        this.buttons = this.fields.buttons || "buttons";
        this.text = this.fields.text || "text";
        this.color = this.fields.color || "color";
      }
    },
    initData(val) {
      this.handleFileds();
      val = val || {};
      val[this.list] = val[this.list] || [];
      val[this.buttons] = val[this.buttons] || [];
      this.pvd = val;
    },
    handleClick(idx) {
      let params = this.pvd[this.buttons][idx] || {};
      this.$emit("click", {
        index: idx,
        ...params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.pvd[$data.label] || $data.pvd[$data.value]
  }, $data.pvd[$data.label] || $data.pvd[$data.value] ? {
    b: common_vendor.t($data.pvd[$data.label] || ""),
    c: !$props.labelColor ? 1 : "",
    d: $props.labelColor,
    e: $props.hdLabelSize + "rpx",
    f: common_vendor.t($data.pvd[$data.value] || ""),
    g: !$props.hdValColor ? 1 : "",
    h: $props.hdValColor,
    i: $props.hdValSize + "rpx",
    j: $props.borderColor,
    k: $props.hdLeft + "rpx",
    l: $props.hdRight + "rpx",
    m: !$props.borderColor ? 1 : "",
    n: $props.padding + "rpx",
    o: $props.padding + "rpx"
  } : {}, {
    p: $data.pvd[$data.list] && $data.pvd[$data.list].length > 0
  }, $data.pvd[$data.list] && $data.pvd[$data.list].length > 0 ? {
    q: common_vendor.f($data.pvd[$data.list], (item, index, i0) => {
      return {
        a: common_vendor.t(item[$data.label]),
        b: common_vendor.n(!$props.labelColor && !item[$data.lColor] ? "fui-preview__gray" : ""),
        c: item[$data.lColor] || $props.labelColor,
        d: common_vendor.t(item[$data.value]),
        e: !$props.bdColor && !item[$data.valueColor] ? 1 : "",
        f: item[$data.valueColor] || $props.bdColor,
        g: index
      };
    }),
    r: common_vendor.n("fui-preview__label-" + $props.labelAlign),
    s: $props.bdSize + "rpx",
    t: $props.labelWidth > 0 ? $props.labelWidth + "rpx" : "auto",
    v: $props.bdSize + "rpx",
    w: $props.padding + "rpx",
    x: $props.padding + "rpx"
  } : {}, {
    y: $data.pvd[$data.buttons] && $data.pvd[$data.buttons].length > 0
  }, $data.pvd[$data.buttons] && $data.pvd[$data.buttons].length > 0 ? {
    z: common_vendor.f($data.pvd[$data.buttons], (btn, idx, i0) => {
      return {
        a: common_vendor.t(btn[$data.text]),
        b: btn[$data.color] || "#465CFF",
        c: !btn[$data.color] ? 1 : "",
        d: idx !== $data.pvd[$data.buttons].length - 1 ? $props.borderColor : "transparent",
        e: common_vendor.n(idx !== $data.pvd[$data.buttons].length - 1 ? "fui-preview__btn-def" : "fui-preview__btn"),
        f: idx,
        g: common_vendor.o(($event) => $options.handleClick(idx))
      };
    }),
    A: $props.btnSize + "rpx",
    B: common_vendor.n($props.highlight ? "fui-preview__hover-weex" : ""),
    C: $props.highlight ? "fui-preview_hover" : "",
    D: $props.borderColor
  } : {}, {
    E: !$props.isBorder ? 1 : "",
    F: !$props.background ? 1 : "",
    G: $props.borderColor,
    H: $props.borderColor,
    I: $props.marginTop + "rpx",
    J: $props.marginBottom + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eec1b2db"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-preview/fui-preview.vue"]]);
my.createComponent(Component);
