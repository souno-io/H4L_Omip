"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiPoster_index = require("./index.js");
const _sfc_main = {
  name: "fui-poster",
  emits: ["ready"],
  props: {
    width: {
      type: [Number, String],
      default: 750
    },
    height: {
      type: [Number, String],
      default: 1024
    },
    pixelRatio: {
      type: [Number, String],
      default: 3
    }
  },
  data() {
    const canvasId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      canvasId,
      w: 375,
      h: 512
    };
  },
  watch: {
    width(val) {
      this.w = this._toPx(val);
    },
    height(val) {
      this.h = this._toPx(val);
    }
  },
  created() {
    this.w = this._toPx(this.width);
    this.h = this._toPx(this.height);
  },
  mounted() {
    components_firstui_fuiPoster_index.poster.create(Number(this.pixelRatio), this.canvasId, this);
    setTimeout(() => {
      this.$emit("ready");
    }, 50);
  },
  methods: {
    _toPx(rpx) {
      return common_vendor.index.upx2px(Number(rpx) * Number(this.pixelRatio));
    },
    _getPosterData(texts, blocks, lines, imgs) {
      let queue = [].concat(texts.map((item) => {
        item.type = "text";
        item.zIndex = item.zIndex || 0;
        return item;
      })).concat(blocks.map((item) => {
        item.type = "block";
        item.zIndex = item.zIndex || 0;
        return item;
      })).concat(lines.map((item) => {
        item.type = "line";
        item.zIndex = item.zIndex || 0;
        return item;
      })).concat(imgs.map((item) => {
        item.type = "image";
        item.zIndex = item.zIndex || 0;
        return item;
      }));
      queue.sort((a, b) => a.zIndex - b.zIndex);
      return queue;
    },
    generatePoster(params, callback) {
      let {
        texts = [],
        imgs = [],
        blocks = [],
        lines = []
      } = params;
      if (imgs.length > 0) {
        let funcArr = [];
        let idxArr = [];
        imgs.forEach((item, index) => {
          if (item.type == 2) {
            funcArr.push(components_firstui_fuiPoster_index.poster.getImage(item.imgResource));
            idxArr.push(index);
          }
        });
        if (funcArr.length > 0) {
          Promise.all(funcArr).then((res) => {
            res.forEach((imgRes, idx) => {
              let item = imgs[idxArr[idx]];
              item.imgResource = imgRes;
            });
            const queue = this._getPosterData(texts, blocks, lines, imgs);
            components_firstui_fuiPoster_index.poster.generatePoster(this.width, this.height, queue, callback);
          }).catch((err) => {
            common_vendor.index.showToast({
              title: "\u56FE\u7247\u8D44\u6E90\u5904\u7406\u5931\u8D25",
              icon: "none"
            });
          });
        } else {
          const queue = this._getPosterData(texts, blocks, lines, imgs);
          components_firstui_fuiPoster_index.poster.generatePoster(this.width, this.height, queue, callback);
        }
      } else {
        const queue = this._getPosterData(texts, blocks, lines, imgs);
        components_firstui_fuiPoster_index.poster.generatePoster(this.width, this.height, queue, callback);
      }
    },
    saveImage(filePath) {
      components_firstui_fuiPoster_index.poster.saveImage(filePath);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.w + "px",
    b: $data.h + "px",
    c: $data.canvasId,
    d: $data.canvasId
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cd821dbc"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-poster/fui-poster.vue"]]);
my.createComponent(Component);
