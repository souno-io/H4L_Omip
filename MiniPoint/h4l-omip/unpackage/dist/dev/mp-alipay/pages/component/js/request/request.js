"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    get(brief) {
      this.http.get("/api/example/info", {
        brief
      }).then((res) => {
        console.log(res);
        if (brief) {
          if (res.succeeded) {
            this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
          }
        } else {
          const d = res.data;
          if (d.succeeded) {
            this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
          }
        }
      }).catch((e) => {
        console.log(e);
      });
    },
    get2() {
      this.http.get("/api/example/info", {
        data: {
          id: 1
        }
      }).then((res) => {
        console.log(res);
        const d = res.data;
        if (d.succeeded) {
          this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
        }
      }).catch((e) => {
        console.log(e);
      });
    },
    post(brief) {
      this.http.post("/api/example/info", {
        brief,
        data: {
          Id: 2,
          Name: "\u5F20\u4E09"
        }
      }).then((res) => {
        console.log(res);
        if (brief) {
          if (res.succeeded) {
            this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
          }
        } else {
          const d = res.data;
          if (d.succeeded) {
            this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
          }
        }
      }).catch((e) => {
        console.log(e);
      });
    },
    changeHost() {
      this.http.get("/api/example/info", {
        host: "https://ffa.firstui.cn"
      }).then((res) => {
        console.log(res);
        const d = res.data;
        if (d.succeeded) {
          this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
        }
      }).catch((e) => {
        console.log(e);
      });
    },
    all() {
      let func1 = this.http.get("/api/example/info");
      let func2 = this.http.get("/api/example/info", {
        data: {
          id: 3
        }
      });
      this.http.all([func1, func2]).then((res) => {
        console.log(res);
        this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
      }).catch((e) => {
      });
    },
    async sync() {
      console.log("\u540C\u6B65\u8BF7\u6C42start...");
      let res = await this.http.get("/api/example/info");
      console.log(res);
      console.log("\u540C\u6B65\u8BF7\u6C42end...");
      this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
    },
    request() {
      this.http.request({
        url: "/api/example/info",
        method: "GET",
        data: {
          id: "100"
        }
      }).then((res) => {
        console.log(res);
        const d = res.data;
        if (d.succeeded) {
          this.fui.toast("\u8BF7\u6C42\u6210\u529F\uFF01");
        }
      }).catch((e) => {
      });
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.get(false)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "GET \u8FD4\u56DE\u5168\u90E8\u6570\u636E",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.get(true)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "GET \u8FD4\u56DE\u7B80\u6D01\u6570\u636E",
      bold: true
    }),
    f: common_vendor.o($options.get2),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "GET \u4F20\u53C2\u6570{id}",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.post(false)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "POST \u8FD4\u56DE\u5168\u90E8\u6570\u636E",
      bold: true
    }),
    j: common_vendor.o(($event) => $options.post(true)),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "POST \u8FD4\u56DE\u7B80\u6D01\u6570\u636E",
      bold: true,
      margin: ["24rpx"]
    }),
    l: common_vendor.o($options.changeHost),
    m: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u63A5\u53E3\u57DF\u540D",
      bold: true
    }),
    n: common_vendor.o($options.all),
    o: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5408\u5E76\u591A\u4E2A\u8BF7\u6C42",
      bold: true,
      margin: ["24rpx"]
    }),
    p: common_vendor.o($options.sync),
    q: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u540C\u6B65\u8BF7\u6C42",
      bold: true
    }),
    r: common_vendor.o($options.request),
    s: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4F7F\u7528request\u65B9\u6CD5\u8BF7\u6C42",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/js/request/request.vue"]]);
my.createPage(MiniProgramPage);
