"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-upload-video",
  emits: ["success", "error", "complete"],
  props: {
    width: {
      type: [Number, String],
      default: 640
    },
    height: {
      type: [Number, String],
      default: 320
    },
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    max: {
      type: [Number, String],
      default: 1
    },
    addColor: {
      type: String,
      default: "#333"
    },
    background: {
      type: String,
      default: "#eee"
    },
    isView: {
      type: Boolean,
      default: false
    },
    progressColor: {
      type: String,
      default: "#465CFF"
    },
    delColor: {
      type: String,
      default: "#eee"
    },
    confirmDel: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    },
    immediate: {
      type: Boolean,
      default: false
    },
    compressed: {
      type: Boolean,
      default: true
    },
    sourceType: {
      type: Array,
      default() {
        return ["album", "camera"];
      }
    },
    maxDuration: {
      type: Number,
      default: 60
    },
    camera: {
      type: String,
      default: "back"
    },
    extension: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      type: [Number, String],
      default: 20
    },
    name: {
      type: String,
      default: "file"
    },
    header: {
      type: Object,
      default() {
        return {};
      }
    },
    formData: {
      type: Object,
      default() {
        return {};
      }
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      urls: [],
      status: [],
      progress: []
    };
  },
  created() {
    this.initData(this.fileList);
  },
  watch: {
    fileList(vals) {
      this.initData(vals);
    }
  },
  computed: {
    showAdd() {
      let show = true;
      let len = this.urls.length;
      if (this.isView || len >= Number(this.max)) {
        show = false;
      }
      return show;
    }
  },
  methods: {
    getVideoSrc(src) {
      return !src || !src.startsWith("https") ? "" : src;
    },
    getStatusText(progress) {
      let text = "\u4E0A\u4F20\u4E2D...";
      if (progress === -1) {
        text = "\u7B49\u5F85\u4E0A\u4F20";
      } else if (progress === -99) {
        text = "\u4E0A\u4F20\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u4E0A\u4F20";
      } else if (progress === 100) {
        text = "\u5DF2\u4E0A\u4F20";
      }
      return text;
    },
    initData(urls) {
      urls = urls || [];
      this.status = [];
      this.progress = [];
      let status = [];
      let progress = [];
      urls.forEach((item) => {
        status.push("success");
        progress.push(100);
      });
      this.urls = [...urls];
      this.status = status;
      this.progress = progress;
    },
    reUpload(index) {
      if (this.progress[index] !== -99)
        return;
      this.$set(this.status, index, "uploading");
      this.$set(this.progress, index, 0);
      this.uploadVideo(index, this.urls[index]).then((res) => {
        this._success(res);
      }).catch((res) => {
        this._error(res);
      });
    },
    getStatus() {
      if (this.status.length === 0)
        return "";
      let status = "preupload";
      if (this.status.indexOf("preupload") === -1) {
        status = ~this.status.indexOf("uploading") ? "uploading" : "success";
        if (status !== "uploading" && ~this.status.indexOf("error")) {
          status = "error";
        }
      }
      return status;
    },
    onComplete(action) {
      let status = this.getStatus();
      this.$emit("complete", {
        status,
        urls: this.urls,
        action,
        param: this.param
      });
    },
    _success(res) {
      let status = this.getStatus();
      this.$emit("success", {
        status,
        ...res,
        param: this.param
      });
    },
    _error(res) {
      let status = this.getStatus();
      this.$emit("error", {
        status,
        ...res,
        param: this.param
      });
    },
    result(url, index) {
      if (!url || index === void 0)
        return;
      this.$set(this.urls, index, url);
      setTimeout(() => {
        this.onComplete("upload");
      }, 0);
    },
    toast(text) {
      text && common_vendor.index.showToast({
        title: text,
        icon: "none"
      });
    },
    chooseVideo() {
      common_vendor.index.chooseVideo({
        sourceType: this.sourceType,
        compressed: this.compressed,
        maxDuration: this.maxDuration,
        camera: this.camera,
        success: (e) => {
          const path = e.tempFilePath;
          if (this.extension.length > 0) {
            const format = path.split(".")[path.split(".").length - 1];
            if (format && this.extension.indexOf(format) == -1) {
              let text = `\u53EA\u80FD\u4E0A\u4F20 ${this.extension.join(",")} \u683C\u5F0F\u89C6\u9891\uFF01`;
              this.toast(text);
              return;
            }
          }
          if (Number(this.size) * 1024 * 1024 < e.size) {
            let err = `\u5355\u4E2A\u89C6\u9891\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7\uFF1A${this.size}MB`;
            this.toast(err);
            return;
          }
          this.urls.push(path);
          this.status.push(this.immediate ? "uploading" : "preupload");
          this.progress.push(this.immediate ? 0 : -1);
          this.onComplete("choose");
          if (this.immediate) {
            this.uploadVideo(this.urls.length - 1, path).then((res) => {
              this._success(res);
            }).catch((res) => {
              this._error(res);
            });
          }
        }
      });
    },
    uploadVideo(index, videoUrl, url) {
      return new Promise((resolve, reject) => {
        const uploadTask = common_vendor.index.uploadFile({
          url: this.url || url,
          name: this.name,
          header: this.header,
          formData: this.formData,
          filePath: videoUrl,
          success: (res) => {
            if (res.statusCode === 200) {
              this.$set(this.status, index, "success");
              this.$set(this.progress, index, 100);
              resolve({
                res,
                index
              });
            } else {
              this.$set(this.status, index, "error");
              this.$set(this.progress, index, -99);
              reject({
                res,
                index
              });
            }
          },
          fail: (res) => {
            this.$set(this.status, index, "error");
            this.$set(this.progress, index, -99);
            reject({
              res,
              index
            });
          }
        });
        uploadTask.onProgressUpdate((res) => {
          this.$set(this.progress, index, res.progress);
        });
      });
    },
    deleteVideo(index) {
      let status = this.getStatus();
      if (status === "uploading") {
        this.toast("\u8BF7\u7B49\u5F85\u4E0A\u4F20\u7ED3\u675F\u518D\u8FDB\u884C\u5220\u9664\uFF01");
      } else {
        if (this.confirmDel) {
          let _this = this;
          common_vendor.index.showModal({
            content: "\u786E\u5B9A\u5C06\u8BE5\u89C6\u9891\u5220\u9664\u5417\uFF1F",
            showCancel: true,
            confirmText: "\u786E\u5B9A",
            success(res) {
              if (res.confirm) {
                _this.urls.splice(index, 1);
                _this.status.splice(index, 1);
                this.progress.splice(index, 1);
                _this.onComplete("delete");
              }
            }
          });
        } else {
          this.urls.splice(index, 1);
          this.status.splice(index, 1);
          this.progress.splice(index, 1);
          this.onComplete("delete");
        }
      }
    },
    start() {
      if (!this.url) {
        this.toast("\u8BF7\u4F20\u5165\u670D\u52A1\u5668\u63A5\u53E3\u5730\u5740\uFF01");
        return;
      }
      let urls = [...this.urls];
      const len = urls.length;
      for (let i = 0; i < len; i++) {
        if (urls[i].startsWith("https")) {
          continue;
        } else {
          this.$set(this.status, i, "uploading");
          this.$set(this.progress, i, 0);
          this.uploadVideo(i, urls[i], this.url).then((res) => {
            this._success(res);
          }).catch((error) => {
            this._error(error);
          });
        }
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  _easycom_fui_icon2();
}
const _easycom_fui_icon = () => "../fui-icon/fui-icon.js";
if (!Math) {
  _easycom_fui_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.urls, (item, index, i0) => {
      return common_vendor.e({
        a: $options.getVideoSrc(item)
      }, !$props.isView ? common_vendor.e({
        b: $data.progress[index] === 100
      }, $data.progress[index] === 100 ? {
        c: "7167cf30-0-" + i0,
        d: common_vendor.p({
          name: "checkbox",
          color: "#fff",
          size: 32
        })
      } : {}, {
        e: $data.progress[index] < 0
      }, $data.progress[index] < 0 ? {
        f: "7167cf30-1-" + i0,
        g: common_vendor.p({
          name: $data.progress[index] === -99 ? "clear" : "wait",
          color: "#fff",
          size: 32
        })
      } : {}, {
        h: common_vendor.t($options.getStatusText($data.progress[index])),
        i: $data.progress[index] === 100 || $data.progress[index] < 0 ? 1 : "",
        j: $data.progress[index] >= 0 && $data.progress[index] < 100
      }, $data.progress[index] >= 0 && $data.progress[index] < 100 ? {
        k: common_vendor.t($data.progress[index])
      } : {}, {
        l: common_vendor.o(($event) => $options.reUpload(index)),
        m: "7167cf30-2-" + i0,
        n: common_vendor.p({
          name: "close",
          color: "#fff",
          size: 28
        }),
        o: common_vendor.o(($event) => $options.deleteVideo(index)),
        p: $data.progress[index] < 100 && $data.progress[index] > 0
      }, $data.progress[index] < 100 && $data.progress[index] > 0 ? {
        q: $props.progressColor,
        r: $data.progress[index]
      } : {}, {
        s: $props.width + "rpx"
      }) : {}, {
        t: index
      });
    }),
    b: $props.width + "rpx",
    c: $props.height - ($props.isView ? 0 : 40) + "rpx",
    d: !$props.isView,
    e: $props.width + "rpx",
    f: $props.height + "rpx",
    g: $options.showAdd
  }, $options.showAdd ? {
    h: common_vendor.p({
      name: "plus",
      size: 88,
      color: $props.addColor
    }),
    i: $props.width + "rpx",
    j: $props.height + "rpx",
    k: $props.background,
    l: common_vendor.o((...args) => $options.chooseVideo && $options.chooseVideo(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7167cf30"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-upload-video/fui-upload-video.vue"]]);
my.createComponent(Component);
