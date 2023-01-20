"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: "https://ffa.firstui.cn/api/example/upload-file",
      status: "",
      urls: [],
      status2: "",
      fileList: ["https://res.firstui.cn/static/images/common/logo.png"],
      urls2: []
    };
  },
  onLoad() {
    this.urls2 = this.fileList;
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    success(e) {
      console.log(e);
      let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}");
      this.status = e.status;
      if (res.data.url) {
        this.$refs.upload.result(res.data.url, e.index);
      }
    },
    error(e) {
      this.status = e.status;
    },
    complete(e) {
      this.status = e.status;
      this.urls = e.urls;
      if (this.status === "success" && e.action === "upload") {
        this.fui.toast("\u4E0A\u4F20\u5B8C\u6210\uFF01");
        console.log(this.urls);
      }
    },
    preview(e) {
    },
    hideGallery() {
      this.show = false;
    },
    success2(e) {
      console.log(e);
      let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}");
      this.status = e.status;
      if (res.data.url) {
        this.$refs.upload2.result(res.data.url, e.index);
      }
    },
    error2(e) {
      this.status2 = e.status;
      common_vendor.index.showModal({
        content: JSON.stringify(e)
      });
    },
    complete2(e) {
      this.status2 = e.status;
      this.urls2 = e.urls;
      if (this.status2 === "success" && e.action === "upload") {
        this.fui.toast("\u4E0A\u4F20\u5B8C\u6210\uFF01");
        console.log(this.urls);
      }
    },
    startUpload() {
      if (!this.status2 || this.status2 !== "preupload") {
        this.fui.toast("\u8BF7\u9009\u62E9\u9700\u8981\u4E0A\u4F20\u7684\u56FE\u7247\uFF01");
        return;
      }
      this.$refs.upload2.start();
    }
  }
};
if (!Array) {
  const _easycom_fui_upload2 = common_vendor.resolveComponent("fui-upload");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_upload2 + _easycom_fui_button2)();
}
const _easycom_fui_upload = () => "../../../../components/firstui/fui-upload/fui-upload.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_upload + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.success),
    c: common_vendor.o($options.error),
    d: common_vendor.o($options.complete),
    e: common_vendor.o($options.preview),
    f: common_vendor.p({
      max: 5,
      immediate: true,
      url: $data.url
    }),
    g: common_vendor.o($options.startUpload),
    h: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5F00\u59CB\u4E0A\u4F20",
      bold: true
    }),
    i: common_vendor.o($options.success2),
    j: common_vendor.o($options.error2),
    k: common_vendor.o($options.complete2),
    l: common_vendor.o($options.preview),
    m: common_vendor.p({
      background: "#333",
      addColor: "#d1d1d1",
      fileList: $data.fileList,
      url: $data.url
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/upload/upload.vue"]]);
my.createPage(MiniProgramPage);
