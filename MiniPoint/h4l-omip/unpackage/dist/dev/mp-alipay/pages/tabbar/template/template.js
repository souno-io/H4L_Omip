"use strict";
const pages_tabbar_template_index = require("./index.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      resUrl: this.fui.resUrl(),
      templateData: pages_tabbar_template_index.templateData
    };
  },
  computed: common_vendor.mapState(["status"]),
  onLoad() {
    this.getStatus().then((res) => {
    });
  },
  methods: {
    ...common_vendor.mapActions(["getStatus"]),
    href(page) {
      if (this.status == 1) {
        this.fui.modal("FirstUI\u793A\u4F8B", '\u8BF7\u524D\u5F80\u5FAE\u4FE1\u641C\u7D22 "FirstUI\u793A\u4F8B" \u5C0F\u7A0B\u5E8F\u9884\u89C8');
      } else {
        this.fui.href("/pages/common/coding/coding");
      }
    }
  },
  onShareAppMessage() {
    return {
      title: "First UI\u7EC4\u4EF6\u5E93"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.templateData, (item, index, i0) => {
      return {
        a: `${$data.resUrl}/template/light/icon_${item.src}_3x.png`,
        b: common_vendor.t(item.cn),
        c: common_vendor.t(item.en),
        d: item.background,
        e: common_vendor.o(($event) => $options.href(item.page)),
        f: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/tabbar/template/template.vue"]]);
_sfc_main.__runtimeHooks = 2;
my.createPage(MiniProgramPage);
