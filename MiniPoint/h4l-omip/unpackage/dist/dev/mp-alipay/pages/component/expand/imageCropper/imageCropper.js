"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "",
      urls: [],
      show: false
    };
  },
  onLoad(e) {
    if (e.src) {
      this.src = e.src;
    }
  },
  methods: {
    hideGallery() {
      this.show = false;
    },
    chooseImage(e) {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          this.src = res.tempFilePaths[0];
        }
      });
    },
    rotate() {
      this.$refs.cropper && this.$refs.cropper.rotate();
    },
    cutting() {
      if (this.$refs.cropper) {
        this.$refs.cropper.cutting((filePath) => {
          console.log(filePath);
          common_vendor.index.previewImage({
            urls: [filePath]
          });
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_image_cropper2 = common_vendor.resolveComponent("fui-image-cropper");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_image_cropper2 + _easycom_fui_icon2)();
}
const _easycom_fui_image_cropper = () => "../../../../components/firstui/fui-image-cropper/fui-image-cropper.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_image_cropper + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.src
    }),
    b: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args)),
    c: common_vendor.p({
      name: "rotate",
      color: "#fff",
      size: "52"
    }),
    d: common_vendor.o((...args) => $options.rotate && $options.rotate(...args)),
    e: common_vendor.o((...args) => $options.cutting && $options.cutting(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/imageCropper/imageCropper.vue"]]);
my.createPage(MiniProgramPage);
