"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-skeleton",
  emits: ["change"],
  props: {
    outerClass: {
      type: String,
      default: "fui-skeleton"
    },
    selector: {
      type: Array,
      default() {
        return ["fui-round", "fui-rect"];
      }
    },
    background: {
      type: String,
      default: "transparent"
    },
    preloadList: {
      type: Array,
      default() {
        return [];
      }
    },
    active: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: "light"
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      elList: [],
      height: 0
    };
  },
  created() {
    const res = common_vendor.index.getSystemInfoSync();
    this.height = res.windowHeight;
    if (this.preloadList && this.preloadList.length > 0) {
      this.elList = this.preloadList;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.nodesRef(this.outerClass).then((res) => {
        if (res && res[0]) {
          this.height = res[0].height;
        }
      });
      if (!this.preloadList || this.preloadList.length === 0) {
        this.selectorQuery();
      }
    });
  },
  methods: {
    async selectorQuery() {
      let selector = this.selector || [];
      let nodes = [];
      for (let item of selector) {
        await this.nodesRef(item).then((res) => {
          res.map((d) => {
            d.type = item.indexOf("round") === -1 ? "rect" : "round";
          });
          nodes = nodes.concat(res);
        });
      }
      this.elList = nodes;
      this.$emit("change", {
        nodes
      });
    },
    async nodesRef(name) {
      return await new Promise((resolve, reject) => {
        common_vendor.index.createSelectorQuery().selectAll(`.${name}`).boundingClientRect((res) => {
          if (res) {
            resolve(res);
          } else {
            reject(res);
          }
        }).exec();
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.elList, (item, index, i0) => {
      return {
        a: item.width + "px",
        b: item.height + "px",
        c: item.left + "px",
        d: item.top + "px",
        e: item.type === "round" ? $data.isNvue ? item.width / 2 + "px" : "50%" : "6rpx",
        f: index
      };
    }),
    b: $props.theme === "dark" ? 1 : "",
    c: $props.active && $props.theme === "dark" ? 1 : "",
    d: $props.active && $props.theme !== "dark" ? 1 : "",
    e: $props.background,
    f: $data.height + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca85d907"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-skeleton/fui-skeleton.vue"]]);
my.createComponent(Component);
