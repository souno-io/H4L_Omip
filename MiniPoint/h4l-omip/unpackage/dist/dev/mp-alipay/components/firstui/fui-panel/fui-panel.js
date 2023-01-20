"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-panel",
  emits: ["click"],
  props: {
    panelData: {
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
    highlight: {
      type: Boolean,
      default: true
    },
    flexStart: {
      type: Boolean,
      default: false
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
    hdBorder: {
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
    hdBackground: {
      type: String,
      default: "#fff"
    },
    headSize: {
      type: [Number, String],
      default: 32
    },
    headColor: {
      type: String,
      default: ""
    },
    bdBorder: {
      type: Boolean,
      default: true
    },
    bdLeft: {
      type: [Number, String],
      default: 32
    },
    bdRight: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 120
    },
    height: {
      type: [Number, String],
      default: 120
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    descSize: {
      type: [Number, String],
      default: 28
    },
    descColor: {
      type: String,
      default: ""
    },
    infoSize: {
      type: [Number, String],
      default: 24
    },
    infoColor: {
      type: String,
      default: ""
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
  data() {
    return {
      listData: [],
      head: "head",
      list: "list",
      src: "src",
      title: "title",
      desc: "desc",
      source: "source",
      time: "time",
      extra: "extra"
    };
  },
  watch: {
    panelData: {
      handler(val) {
        this.initData(val);
      },
      deep: true
    },
    fields(val) {
      this.handleFileds();
    }
  },
  created() {
    this.initData(this.panelData);
  },
  methods: {
    handleFileds() {
      if (this.fields && typeof this.fields === "object") {
        this.head = this.fields.head || "head";
        this.list = this.fields.list || "list";
        this.src = this.fields.src || "src";
        this.title = this.fields.title || "title";
        this.desc = this.fields.desc || "desc";
        this.source = this.fields.source || "source";
        this.time = this.fields.time || "time";
        this.extra = this.fields.extra || "extra";
      }
    },
    initData(val) {
      this.handleFileds();
      val = val || {};
      let list = val[this.list] && [...val[this.list]];
      if (val[this.list] && Array.isArray(list)) {
        this.listData = list;
      } else {
        this.listData = [val];
      }
    },
    handleClick(index) {
      this.$emit("click", {
        index,
        ...this.listData[index]
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.panelData[$data.head]
  }, $props.panelData[$data.head] ? common_vendor.e({
    b: common_vendor.t($props.panelData[$data.head] || ""),
    c: !$props.headColor ? 1 : "",
    d: $props.headSize + "rpx",
    e: $props.headColor + "rpx",
    f: $props.hdBorder
  }, $props.hdBorder ? {
    g: $props.borderColor,
    h: $props.hdLeft + "rpx",
    i: $props.hdRight + "rpx",
    j: !$props.borderColor ? 1 : ""
  } : {}, {
    k: $props.hdBackground,
    l: $props.padding + "rpx",
    m: $props.padding + "rpx"
  }) : {}, {
    n: common_vendor.f($data.listData, (item, index, i0) => {
      return common_vendor.e({
        a: item[$data.src]
      }, item[$data.src] ? {
        b: item[$data.src],
        c: $props.width + "rpx",
        d: $props.height + "rpx",
        e: $props.radius + "rpx",
        f: $props.width + "rpx",
        g: $props.height + "rpx"
      } : {}, {
        h: item[$data.title]
      }, item[$data.title] ? {
        i: common_vendor.t(item[$data.title] || ""),
        j: !$props.color ? 1 : "",
        k: $props.color,
        l: $props.size + "rpx",
        m: $props.fontWeight
      } : {}, {
        n: item[$data.desc]
      }, item[$data.desc] ? {
        o: common_vendor.t(item[$data.desc] || ""),
        p: !$props.descColor ? 1 : "",
        q: $props.descColor,
        r: $props.descSize + "rpx"
      } : {}, {
        s: item[$data.source] || item[$data.time] || item[$data.extra]
      }, item[$data.source] || item[$data.time] || item[$data.extra] ? common_vendor.e({
        t: item[$data.source]
      }, item[$data.source] ? {
        v: common_vendor.t(item[$data.source] || ""),
        w: !$props.infoColor ? 1 : "",
        x: $props.infoColor,
        y: $props.infoSize + "rpx"
      } : {}, {
        z: item[$data.time]
      }, item[$data.time] ? {
        A: common_vendor.t(item[$data.time] || ""),
        B: !$props.infoColor ? 1 : "",
        C: $props.infoColor,
        D: $props.infoSize + "rpx"
      } : {}, {
        E: item[$data.extra]
      }, item[$data.extra] ? {
        F: common_vendor.t(item[$data.extra] || ""),
        G: !$props.infoColor ? 1 : "",
        H: !$props.infoColor ? 1 : "",
        I: $props.infoColor,
        J: $props.infoSize + "rpx",
        K: $props.infoColor
      } : {}) : {}, {
        L: $props.bdBorder && index !== $data.listData.length - 1
      }, $props.bdBorder && index !== $data.listData.length - 1 ? {
        M: $props.borderColor,
        N: $props.bdLeft + "rpx",
        O: $props.bdRight + "rpx",
        P: !$props.borderColor ? 1 : ""
      } : {}, {
        Q: index,
        R: common_vendor.o(($event) => $options.handleClick(index))
      });
    }),
    o: $props.padding + "rpx",
    p: $props.padding + "rpx",
    q: !$props.flexStart ? 1 : "",
    r: $props.highlight ? 1 : "",
    s: $props.highlight ? "fui-panel__hover" : "",
    t: $props.background,
    v: $props.borderColor,
    w: $props.borderColor,
    x: $props.marginTop + "rpx",
    y: $props.marginBottom + "rpx",
    z: !$props.isBorder ? 1 : "",
    A: !$props.background ? 1 : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0b3a90b0"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-panel/fui-panel.vue"]]);
my.createComponent(Component);
