"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-modal",
  emits: ["click", "cancel"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 34
    },
    color: {
      type: String,
      default: "#333"
    },
    descr: {
      type: String,
      default: ""
    },
    descrSize: {
      type: [Number, String],
      default: 28
    },
    descrColor: {
      type: String,
      default: "#7F7F7F"
    },
    buttons: {
      type: Array,
      default() {
        return [{
          text: "\u53D6\u6D88",
          plain: true
        }, {
          text: "\u786E\u5B9A"
        }];
      }
    },
    direction: {
      type: String,
      default: "row"
    },
    radius: {
      type: [Number, String],
      default: 16
    },
    width: {
      type: [Number, String],
      default: 640
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    boxRadius: {
      type: [Number, String],
      default: 16
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 1001
    }
  },
  data() {
    let isNvue = false;
    return {
      isShow: false,
      isNvue,
      vals: []
    };
  },
  computed: {
    getWidth() {
      return "width:" + (Number(this.width) - 60) + "rpx";
    }
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true
    },
    buttons(newVal) {
      this.initData(newVal);
    }
  },
  created() {
    this.initData(this.buttons);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              text: item
            };
          });
        }
        this.vals = vals;
      }
    },
    stop() {
    },
    closeModal() {
      if (!this.maskClosable)
        return;
      this.$emit("cancel", {});
    },
    handleClick(e, index) {
      if (!this.isShow)
        return;
      this.$emit("click", {
        index: Number(index),
        ...this.vals[index]
      });
    },
    open() {
      this.isShow = true;
    },
    close(type) {
      this.isShow = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? common_vendor.e({
    b: $props.title && $props.title !== true
  }, $props.title && $props.title !== true ? {
    c: common_vendor.t($props.title),
    d: $props.size + "rpx",
    e: $props.color
  } : {}, {
    f: $props.descr && $props.descr !== true
  }, $props.descr && $props.descr !== true ? {
    g: common_vendor.t($props.descr),
    h: $props.descrSize + "rpx",
    i: $props.descrColor,
    j: !$props.title ? 1 : ""
  } : {}, {
    k: $data.vals.length > 0
  }, $data.vals.length > 0 ? {
    l: common_vendor.f($data.vals, (entity, index, i0) => {
      return {
        a: common_vendor.t(entity.text),
        b: !entity.color && entity.plain ? 1 : "",
        c: entity.color || (entity.plain ? "#465CFF" : "#fff"),
        d: $props.direction === "column" && index !== $data.vals.length - 1 ? 1 : "",
        e: !entity.plain && !entity.background ? 1 : "",
        f: entity.plain ? 1 : "",
        g: entity.plain && !entity.background ? 1 : "",
        h: entity.plain ? "transparent" : entity.background || "#465CFF",
        i: entity.plain ? entity.background || "#465CFF" : "transparent",
        j: index,
        k: common_vendor.o(($event) => $options.handleClick($event, index))
      };
    }),
    m: $props.radius + "rpx",
    n: common_vendor.s($options.getWidth),
    o: $props.direction === "row" ? 1 : ""
  } : {}, {
    p: $props.width + "rpx",
    q: $props.background,
    r: $props.boxRadius + "rpx",
    s: $props.maskBackground,
    t: $props.zIndex,
    v: $data.isShow ? 1 : "",
    w: common_vendor.o((...args) => $options.closeModal && $options.closeModal(...args)),
    x: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca6399ed"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-modal/fui-modal.vue"]]);
my.createComponent(Component);
