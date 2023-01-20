"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-landscape",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "cancel"
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: [Number, String],
      default: 28
    },
    position: {
      type: [Number, String],
      default: 3
    },
    distance: {
      type: [Number, String],
      default: 120
    },
    absolute: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    zIndex: {
      type: Number,
      default: 1001
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getStyles() {
      let distance = Math.abs(Number(this.distance));
      let styles = `bottom: -${distance}rpx;`;
      if (this.position != 3) {
        styles = `top: -${distance}rpx;`;
      }
      return styles;
    }
  },
  data() {
    let isNvue = false;
    return {
      isShow: false,
      src: "",
      text: "",
      isNvue
    };
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.isShow = false;
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.show) {
      this.open();
    }
  },
  methods: {
    closeWin(e) {
      if (!this.maskClosable)
        return;
      this.close(e);
    },
    open() {
      this.isShow = true;
    },
    close(e) {
      this.$emit("close", {
        param: this.param
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? common_vendor.e({
    b: $props.closable
  }, $props.closable ? {
    c: $props.type,
    d: $props.size,
    e: $props.color,
    f: common_vendor.o((...args) => $options.close && $options.close(...args)),
    g: $props.position == 2 ? 1 : "",
    h: $props.position == 3 ? 1 : "",
    i: common_vendor.s($options.getStyles)
  } : {}, {
    j: !$props.absolute ? 1 : "",
    k: $props.absolute ? 1 : "",
    l: $data.isShow ? 1 : "",
    m: $props.maskBackground,
    n: $props.zIndex,
    o: common_vendor.o((...args) => $options.closeWin && $options.closeWin(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-685b24c6"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-landscape/fui-landscape.vue"]]);
my.createComponent(Component);
