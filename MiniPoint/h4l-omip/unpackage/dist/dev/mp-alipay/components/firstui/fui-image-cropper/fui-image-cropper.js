"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiImageCropper_mpjs = require("./mpjs.js");
const components_firstui_fuiImageCropper_bindingx = require("./bindingx.js");
const _sfc_main = {
  name: "fui-image-cropper",
  mixins: [components_firstui_fuiImageCropper_mpjs.mpjs, components_firstui_fuiImageCropper_bindingx.bindingx],
  props: {
    src: {
      type: String,
      default: ""
    },
    height: {
      type: [Number, String],
      default: 280
    },
    width: {
      type: [Number, String],
      default: 280
    },
    round: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "#B2B2B2"
    },
    scaleRatio: {
      type: [Number, String],
      default: 2
    },
    quality: {
      type: Number,
      default: 0.8
    },
    fileType: {
      type: String,
      default: "png"
    },
    network: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    src(val) {
      this.initVal && this.handleImage(val);
    },
    ani(val) {
      clearTimeout(this.aniTimer);
      if (val) {
        this.aniTimer = setTimeout(() => {
          this.ani = false;
        }, 220);
      }
    }
  },
  data() {
    return {
      windowHeight: 600,
      windowWidth: 400,
      cutX: 0,
      cutY: 0,
      imgWidth: 0,
      imgHeight: 0,
      scale: 1,
      angle: 0,
      ani: false,
      imgTop: 0,
      imgLeft: 0,
      changeval: "",
      initVal: false,
      naturalWidth: 0,
      naturalHeight: 0,
      picturePath: "",
      rotateAngle: 0
    };
  },
  created() {
    this.cutTimer = null;
    this.aniTimer = null;
    this.ctx = null;
  },
  mounted() {
    let sys = common_vendor.index.getSystemInfoSync();
    this.windowHeight = sys.windowHeight;
    this.windowWidth = sys.windowWidth;
    this.imgTop = sys.windowHeight / 2;
    this.imgLeft = sys.windowWidth / 2;
    this.ctx = common_vendor.index.createCanvasContext("fui_image_cropper", this);
    this.$nextTick(() => {
      setTimeout(() => {
        this.changeval = `1_${this.getRandom()}`;
        this.initVal = true;
        this.src && this.handleImage(this.src);
      }, 220);
    });
  },
  methods: {
    stop() {
    },
    getRandom() {
      return Math.ceil(Math.random() * 1e6).toString(36);
    },
    loading() {
      common_vendor.index.showLoading({
        title: "\u8BF7\u7A0D\u5019..."
      });
    },
    reset() {
      this.scale = 1;
      this.angle = 0;
      let sys = common_vendor.index.getSystemInfoSync();
      this.imgTop = sys.windowHeight / 2;
      this.imgLeft = sys.windowWidth / 2;
      this.changeval = `4_${this.getRandom()}`;
    },
    calcSize(width, height) {
      let imgWidth = width, imgHeight = height;
      if (imgWidth > 0 && imgHeight > 0) {
        if (imgWidth / imgHeight > this.width / this.height) {
          imgHeight = this.height;
          imgWidth = width / height * imgHeight;
        } else {
          imgWidth = this.width;
          imgHeight = height / width * imgWidth;
        }
      } else {
        imgWidth = common_vendor.index.getSystemInfoSync().windowWidth;
        imgHeight = 0;
      }
      this.imgWidth = imgWidth;
      this.imgHeight = imgHeight;
      this.changeval = `2_${this.getRandom()}`;
      common_vendor.index.hideLoading();
    },
    handleImage(src) {
      this.reset();
      this.loading();
      common_vendor.index.getImageInfo({
        src,
        success: (res) => {
          let width = res.width;
          let height = res.height;
          this.naturalWidth = width;
          this.naturalHeight = height;
          let orientation = res.orientation;
          if (orientation && orientation != "up") {
            width = orientation == "down" ? res.width : res.height;
            height = orientation == "down" ? res.height : res.width;
          }
          this.calcSize(width, height);
          this.changeval = `3_${this.getRandom()}`;
        },
        fail: (err) => {
          this.calcSize(0, 0);
          this.changeval = `3_${this.getRandom()}`;
        }
      });
    },
    change(e) {
      this.cutX = e.cutX || 0;
      this.cutY = e.cutY || 0;
      this.imgWidth = e.imgWidth || this.imgWidth;
      this.imgHeight = e.imgHeight || this.imgHeight;
      this.scale = e.scale || 1;
      this.angle = e.angle || 0;
      this.imgTop = e.imgTop || 0;
      this.imgLeft = e.imgLeft || 0;
    },
    async getLocalImage(src) {
      return await new Promise((resolve, reject) => {
        common_vendor.index.downloadFile({
          url: src,
          success: (res) => {
            resolve(res.tempFilePath);
          },
          fail: (res) => {
            reject(false);
          }
        });
      });
    },
    moveStop() {
      clearTimeout(this.cutTimer);
      this.cutTimer = setTimeout(() => {
        this.changeval = `5_${this.getRandom()}`;
      }, 600);
    },
    moveDuring() {
      clearTimeout(this.cutTimer);
    },
    rotate() {
      if (!this.src) {
        this.toast("\u8BF7\u9009\u62E9\u8981\u88C1\u526A\u7684\u56FE\u7247\uFF01");
        return;
      }
      this.ani = true;
      let angle = this.angle + 90;
      if (angle % 90) {
        angle = Math.round(angle / 90) * 90;
      }
      this.angle = angle;
      this.moveStop();
      this.changeval = `3_${this.getRandom()}`;
    },
    toast(text) {
      common_vendor.index.showToast({
        title: text,
        icon: "none"
      });
    },
    cutting(callback) {
      if (!this.src) {
        this.toast("\u8BF7\u9009\u62E9\u8981\u88C1\u526A\u7684\u56FE\u7247\uFF01");
        return;
      }
      this.loading();
      let draw = async () => {
        let imgWidth = this.imgWidth * this.scale * this.scaleRatio;
        let imgHeight = this.imgHeight * this.scale * this.scaleRatio;
        let xpos = this.imgLeft - this.cutX;
        let ypos = this.imgTop - this.cutY;
        this.ctx.translate(xpos * this.scaleRatio, ypos * this.scaleRatio);
        this.ctx.rotate(this.angle * Math.PI / 180);
        let src = this.src;
        if (this.network) {
          src = await this.getLocalImage(this.src);
        }
        this.ctx.drawImage(src, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
        this.ctx.draw(false, () => {
          let params = {
            width: this.width * this.scaleRatio,
            height: Math.round(this.height * this.scaleRatio),
            destWidth: this.width * this.scaleRatio,
            destHeight: Math.round(this.height) * this.scaleRatio,
            fileType: this.fileType,
            quality: this.quality
          };
          setTimeout(() => {
            this.ctx.toTempFilePath({
              ...params,
              success: (res) => {
                common_vendor.index.hideLoading();
                this.ctx.rotate((360 - this.angle % 360) * Math.PI / 180);
                this.ctx.translate(-xpos * this.scaleRatio, -ypos * this.scaleRatio);
                this.ctx.clearRect(0, 0, this.width * this.scaleRatio, this.height * this.scaleRatio);
                this.ctx.draw();
                callback && callback(res.apFilePath);
              }
            });
          }, 80);
        });
      };
      draw();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.touchstart && _ctx.touchstart(...args)),
    b: common_vendor.o((...args) => _ctx.touchmove && _ctx.touchmove(...args)),
    c: common_vendor.o((...args) => _ctx.touchend && _ctx.touchend(...args)),
    d: !$props.src ? 1 : "",
    e: $props.src,
    f: ($data.imgWidth ? $data.imgWidth : $props.width) + "px",
    g: $data.imgHeight ? $data.imgHeight + "px" : "auto",
    h: $data.ani ? "0.25s" : "0s",
    i: _ctx.getTransform,
    j: $props.round ? "50%" : "0",
    k: $props.borderColor,
    l: $props.width + "px",
    m: $props.height + "px",
    n: $props.round ? "50%" : "0",
    o: $props.width * $props.scaleRatio + "px",
    p: $props.height * $props.scaleRatio + "px",
    q: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10c6f7fc"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-image-cropper/fui-image-cropper.vue"]]);
my.createComponent(Component);
