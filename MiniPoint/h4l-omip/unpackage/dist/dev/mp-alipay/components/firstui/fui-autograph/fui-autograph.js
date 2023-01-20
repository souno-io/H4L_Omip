"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-autograph",
  emits: ["ready"],
  props: {
    width: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 400
    },
    background: {
      type: String,
      default: "#ffffff"
    },
    lineWidth: {
      type: [Number, String],
      default: 5
    },
    color: {
      type: String,
      default: "#181818"
    },
    tips: {
      type: String,
      default: "\u8BF7\u7B7E\u540D\uFF01"
    }
  },
  watch: {
    width(val) {
      if (val) {
        this.w = common_vendor.index.upx2px(Number(val));
      }
    },
    height(val) {
      if (val) {
        this.h = common_vendor.index.upx2px(Number(val));
      }
    }
  },
  data() {
    const canvasId = `fui_ag_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      canvasId,
      w: 300,
      h: 200,
      completed: false,
      autograph: false
    };
  },
  created() {
    let sys = common_vendor.index.getSystemInfoSync();
    this.w = this.width == 0 ? sys.windowWidth : common_vendor.index.upx2px(Number(this.width));
    this.h = common_vendor.index.upx2px(Number(this.height) || 400);
    this.ctx = null;
    this.touchs = null;
  },
  mounted() {
    setTimeout(() => {
      this.ctx = common_vendor.index.createCanvasContext(this.canvasId, this);
      this.$emit("ready", {
        canvasId: this.canvasId
      });
    }, 50);
  },
  beforeUnmount() {
    this.ctx = null;
    this.touchs = null;
  },
  methods: {
    isPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      var flag = true;
      for (let v = 0; v < Agents.length - 1; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    onTouchstart(e) {
      if (this.completed)
        return;
      let point = {};
      point = {
        x: e.touches[0].x,
        y: e.touches[0].y
      };
      this.ctx.setStrokeStyle(this.color);
      this.ctx.setLineWidth(this.lineWidth);
      this.ctx.setLineCap("round");
      this.touchs = [point];
    },
    mousedown(e) {
    },
    onTouchmove(e) {
      if (this.completed)
        return;
      let point = null;
      point = {
        x: e.touches[0].x,
        y: e.touches[0].y
      };
      point && this.touchs.push(point);
      if (this.touchs.length >= 2) {
        this.startDraw();
      }
    },
    mousemove(e) {
    },
    onTouchend(e) {
      if (this.completed)
        return;
      this.touchs = null;
    },
    mouseup(e) {
    },
    mouseleave(e) {
    },
    onTouchCancel(e) {
      if (this.completed)
        return;
    },
    startDraw() {
      this.autograph = true;
      const point1 = this.touchs[0];
      const point2 = this.touchs[1];
      this.touchs.shift();
      this.ctx.moveTo(point1.x, point1.y);
      this.ctx.lineTo(point2.x, point2.y);
      this.ctx.stroke();
      this.ctx.draw(true);
    },
    redraw() {
      this.completed = false;
      this.touchs = null;
      this.autograph = false;
      this.ctx.clearRect(0, 0, this.w, this.h);
      this.ctx.beginPath();
      this.ctx.draw();
    },
    drawComplete(callback) {
      if (!this.autograph && this.tips && this.tips !== true && this.tips !== "true") {
        common_vendor.index.showToast({
          title: this.tips,
          icon: "none"
        });
        return;
      }
      this.completed = true;
      const platform = common_vendor.index.getSystemInfoSync().platform;
      let time = 50;
      if (platform === "android") {
        time = 200;
      }
      setTimeout(() => {
        this.ctx.toTempFilePath({
          success: (res) => {
            callback && callback(res.apFilePath);
          },
          fail: (err) => {
            callback && callback(false);
          }
        });
      }, time);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: !$data.completed,
    b: $data.canvasId,
    c: $data.canvasId,
    d: common_vendor.o((...args) => $options.onTouchstart && $options.onTouchstart(...args)),
    e: common_vendor.o((...args) => $options.onTouchmove && $options.onTouchmove(...args)),
    f: common_vendor.o((...args) => $options.onTouchend && $options.onTouchend(...args)),
    g: common_vendor.o((...args) => $options.onTouchCancel && $options.onTouchCancel(...args)),
    h: $data.w + "px",
    i: $data.h + "px",
    j: common_vendor.o((...args) => $options.mousedown && $options.mousedown(...args)),
    k: common_vendor.o((...args) => $options.mousemove && $options.mousemove(...args)),
    l: common_vendor.o((...args) => $options.mouseup && $options.mouseup(...args)),
    m: common_vendor.o((...args) => $options.mouseleave && $options.mouseleave(...args)),
    n: $data.w + "px",
    o: $data.h + "px",
    p: $props.background
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-autograph/fui-autograph.vue"]]);
my.createComponent(Component);
