"use strict";
const common_vendor = require("../../../common/vendor.js");
const mpjs = {
  data() {
    return {
      context: null,
      start: 0
    };
  },
  watch: {
    percent(val) {
      setTimeout(() => {
        this.init();
      }, 50);
    },
    w(val) {
      setTimeout(() => {
        this.init();
      }, 50);
    },
    strokeWidth(val) {
      setTimeout(() => {
        this.init();
      }, 50);
    }
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 50);
  },
  methods: {
    init(init) {
      let start = this.activeMode === "backwards" ? 0 : this.start;
      start = start > this.percent ? 0 : start;
      this.drawCircle(start);
    },
    drawDefaultCircle(ctx) {
      let sw = Number(this.strokeWidth);
      sw = sw * 4;
      ctx.setLineWidth(sw);
      ctx.setStrokeStyle(this.background);
      let eAngle = Math.PI * 2 + this.sAngle;
      this.drawArc(ctx, eAngle, true);
    },
    drawCircle(start) {
      let ctx = this.context;
      if (!ctx) {
        ctx = common_vendor.index.createCanvasContext(this.circleId, this);
        this.context = ctx;
      }
      this.defaultShow && this.drawDefaultCircle(ctx);
      let sw = Number(this.strokeWidth);
      sw = sw * 4;
      ctx.setLineWidth(sw);
      ctx.setStrokeStyle(this.foreground);
      let percentage = Number(this.percent);
      if (percentage > 0) {
        start += Number(this.speed);
        start = start > percentage ? percentage : start;
      }
      if (this.show) {
        let si = Number(this.size);
        si = si * 4;
        ctx.setFontSize(si);
        ctx.setFillStyle(this.color);
        ctx.setTextAlign("center");
        ctx.setTextBaseline("middle");
        let percent = `${this.counterclockwise ? 100 - start : start}%`;
        let radius = this.w / 2;
        radius = radius * 4;
        ctx.fillText(percent, radius, radius);
      }
      if (percentage == 0 || this.counterclockwise && start == 100) {
        ctx.draw();
      } else {
        let eAngle = 2 * Math.PI / 100 * start + this.sAngle;
        this.drawArc(ctx, eAngle);
      }
      let time = 1e3 / 60;
      time = time / 2;
      setTimeout(() => {
        this.start = start;
        if (start == percentage) {
          this.$emit("end", {
            canvasId: this.circleId,
            percent: start
          });
        } else {
          this.drawCircle(start);
        }
        this.$emit("change", {
          percent: start
        });
      }, time);
    },
    drawArc(ctx, eAngle, def) {
      ctx.setLineCap(this.lineCap);
      ctx.beginPath();
      let radius = this.w / 2;
      let sw = Number(this.strokeWidth);
      radius = radius * 4;
      sw = sw * 4;
      ctx.arc(radius, radius, radius - sw, this.sAngle, eAngle, this.counterclockwise);
      ctx.stroke();
      !def && ctx.draw();
    }
  }
};
exports.mpjs = mpjs;
