"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-gallery",
  emits: ["change", "hide"],
  props: {
    urls: {
      type: Array,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      default: false
    },
    current: {
      type: [Number, String],
      default: 0
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 1001
    },
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    urls(newVal, oldVal) {
      this.initData(newVal);
    },
    current(newVal) {
      this.defActive = this.active;
      let val = Number(newVal);
      setTimeout(() => {
        this.defActive = val;
        this.active = val;
      }, 20);
    }
  },
  mounted() {
    let sys = common_vendor.index.getSystemInfoSync();
    this.top = sys.statusBarHeight + 20;
    this.defActive = Number(this.current);
    this.active = this.defActive;
    this.initData(this.urls);
    this.getDescr(this.active);
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      imgUrls: [],
      active: 0,
      defActive: 0,
      top: 20,
      descr: "",
      iphoneX: false
    };
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === "string") {
          vals = vals.map((item) => {
            return {
              src: item
            };
          });
        }
        this.imgUrls = vals;
      }
    },
    change(e) {
      this.active = e.detail.current;
      this.getDescr(this.active);
      this.$emit("change", {
        index: this.active
      });
    },
    getDescr(index) {
      let item = this.imgUrls[index];
      if (item) {
        this.descr = item.descr || "";
      }
    },
    hideGallery() {
      this.$emit("hide", {});
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.show || !$data.isNvue
  }, $props.show || !$data.isNvue ? common_vendor.e({
    b: common_vendor.f($data.imgUrls, (item, index, i0) => {
      return {
        a: item.src,
        b: index
      };
    }),
    c: common_vendor.o((...args) => $options.change && $options.change(...args)),
    d: $data.defActive,
    e: common_vendor.t($data.active + 1),
    f: common_vendor.t($data.imgUrls.length),
    g: $data.top + "px",
    h: $data.descr
  }, $data.descr ? common_vendor.e({
    i: $data.descr
  }, $data.descr ? {
    j: common_vendor.t($data.descr),
    k: $props.ellipsis ? 1 : ""
  } : {}, {
    l: $data.iphoneX && $props.safeArea ? 1 : ""
  }) : {}, {
    m: $props.zIndex,
    n: common_vendor.n($props.show ? "fui-gallery__show" : "fui-gallery__hidden"),
    o: common_vendor.o((...args) => $options.hideGallery && $options.hideGallery(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f7494b34"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-gallery/fui-gallery.vue"]]);
my.createComponent(Component);
