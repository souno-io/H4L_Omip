"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      init: false,
      show: false,
      value: "",
      background: "",
      decimal: false,
      spareKey: "",
      theme: "light",
      visible: false,
      value2: ""
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    keyClick(e) {
      console.log(e);
      let val = e.value;
      let text = this.value;
      if (text.length === 4) {
        this.fui.toast("\u5DF2\u5B8C\u6210\u8F93\u5165\uFF01");
        return;
      } else if (text.includes(".") && val === ".") {
        this.fui.toast("\u5C0F\u6570\u70B9\u4E0D\u53EF\u91CD\u590D\u8F93\u5165\uFF01");
        return;
      }
      if (!text && val === ".") {
        this.value = "0.";
      } else {
        this.value += val;
      }
    },
    confirm(e) {
      let text = this.value;
      let vals = text.split("");
      if (text.length < 4) {
        this.fui.toast("\u8BF7\u5148\u8F93\u5165\u5B8C\u6210\uFF01");
        return;
      } else if (vals[vals.length - 1] === ".") {
        this.fui.toast("\u6700\u540E\u4E00\u4F4D\u4E0D\u53EF\u8F93\u5165\u5C0F\u6570\u70B9\uFF01");
        return;
      }
      this.fui.toast("\u60A8\u8F93\u5165\u7684\u503C\u4E3A\uFF1A" + text);
      this.show = false;
      this.$refs.fui_si.initFocus(false);
    },
    backspace(e) {
      let val = this.value;
      if (val) {
        this.value = val.substring(0, val.length - 1);
      }
    },
    spare(e) {
      console.log(e);
      if (this.spareKey === "\u6E05\u7A7A") {
        this.value = "";
      } else if (this.spareKey === "X") {
        if (this.value.length === 4) {
          this.fui.toast("\u5DF2\u5B8C\u6210\u8F93\u5165\uFF01");
          return;
        } else if (~this.value.indexOf("X")) {
          this.fui.toast("X\u4E0D\u53EF\u91CD\u590D\u8F93\u5165\uFF01");
          return;
        }
        this.value += e.value;
      } else {
        this.show = false;
        this.$refs.fui_si.initFocus(false);
      }
    },
    onFocus(e) {
      setTimeout(() => {
        this.show = true;
        if (this.init) {
          this.init = false;
        }
      }, this.init ? 200 : 0);
    },
    btnTap(type) {
      switch (type) {
        case 0:
          this.theme = "light";
          this.background = "#465CFF";
          this.spareKey = "";
          this.decimal = false;
          break;
        case 1:
          this.background = "#FFB703";
          break;
        case 2:
          this.decimal = true;
          break;
        case 3:
          this.spareKey = "\u53D6\u6D88";
          break;
        case 4:
          this.spareKey = "\u6E05\u7A7A";
          break;
        case 5:
          this.theme = "dark";
          break;
        case 6:
          this.spareKey = "X";
          this.decimal = false;
          break;
      }
      if (!this.show) {
        this.show = true;
        this.$refs.fui_si.initFocus(true);
      }
    },
    btnClick() {
      this.value2 = "";
      this.visible = true;
      this.$refs.fui_si2.initFocus(true);
    },
    keyClick2(e) {
      console.log(e);
      if (this.value2.length === 6)
        return;
      this.value2 += e.value;
    },
    confirm2(e) {
      let text = this.value2;
      if (text.length < 6) {
        this.fui.toast("\u8BF7\u8F93\u51656\u4F4D\u6570\u5BC6\u7801\uFF01");
        return;
      }
      this.fui.toast("\u60A8\u8F93\u5165\u7684\u5BC6\u7801\u4E3A\uFF1A" + text);
      this.visible = false;
      this.$refs.fui_si2.initFocus(false);
    },
    backspace2(e) {
      let val = this.value2;
      if (val) {
        this.value2 = val.substring(0, val.length - 1);
      }
    },
    spare2(e) {
      this.value2 = "";
      this.visible = false;
      this.$refs.fui_si2.initFocus(false);
    }
  }
};
if (!Array) {
  const _easycom_fui_single_input2 = common_vendor.resolveComponent("fui-single-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_digital_keyboard2 = common_vendor.resolveComponent("fui-digital-keyboard");
  const _easycom_fui_backdrop2 = common_vendor.resolveComponent("fui-backdrop");
  (_easycom_fui_single_input2 + _easycom_fui_button2 + _easycom_fui_digital_keyboard2 + _easycom_fui_backdrop2)();
}
const _easycom_fui_single_input = () => "../../../../components/firstui/fui-single-input/fui-single-input.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_digital_keyboard = () => "../../../../components/firstui/fui-digital-keyboard/fui-digital-keyboard.js";
const _easycom_fui_backdrop = () => "../../../../components/firstui/fui-backdrop/fui-backdrop.js";
if (!Math) {
  (_easycom_fui_single_input + _easycom_fui_button + _easycom_fui_digital_keyboard + _easycom_fui_backdrop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.onFocus),
    c: common_vendor.p({
      native: false,
      isFocus: true,
      borderColor: "#ccc",
      value: $data.value
    }),
    d: common_vendor.o(($event) => $options.btnTap(0)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u9ED8\u8BA4\u952E\u76D8",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.btnTap(1)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6539\u53D8\u6309\u94AE\u80CC\u666F\u8272",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.btnTap(2)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E26\u5C0F\u6570\u70B9",
      bold: true
    }),
    j: common_vendor.o(($event) => $options.btnTap(3)),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E26\u53D6\u6D88\u6309\u94AE",
      bold: true,
      margin: ["24rpx"]
    }),
    l: common_vendor.o(($event) => $options.btnTap(4)),
    m: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u5E26\u6E05\u7A7A\u6309\u94AE",
      bold: true
    }),
    n: common_vendor.o(($event) => $options.btnTap(5)),
    o: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u6697\u9ED1\u6A21\u5F0F",
      bold: true,
      margin: ["24rpx"]
    }),
    p: common_vendor.o(($event) => $options.btnTap(6)),
    q: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8EAB\u4EFD\u8BC1\u952E\u76D8",
      bold: true
    }),
    r: common_vendor.o($options.btnClick),
    s: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u81EA\u5B9A\u4E49\u63D2\u69FD\u5185\u5BB9",
      margin: ["24rpx"],
      bold: true
    }),
    t: common_vendor.o($options.keyClick),
    v: common_vendor.o($options.confirm),
    w: common_vendor.o($options.backspace),
    x: common_vendor.o($options.spare),
    y: common_vendor.p({
      show: $data.show,
      background: $data.background,
      decimal: $data.decimal,
      spareKey: $data.spareKey,
      theme: $data.theme
    }),
    z: common_vendor.p({
      zIndex: 9,
      show: $data.visible
    }),
    A: common_vendor.p({
      native: false,
      borderColor: "#ccc",
      border: "1",
      borderWidth: "1",
      radius: "16",
      activeColor: "#09BE4F",
      cursorHeight: "40",
      cursorColor: "#09BE4F",
      length: 6,
      width: "80",
      height: "80",
      size: "24",
      password: true,
      isFocus: true,
      value: $data.value2
    }),
    B: common_vendor.o($options.keyClick2),
    C: common_vendor.o($options.confirm2),
    D: common_vendor.o($options.backspace2),
    E: common_vendor.o($options.spare2),
    F: common_vendor.p({
      zIndex: 10,
      show: $data.visible,
      spareKey: "\u53D6\u6D88",
      background: "#09BE4F"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/digitalKeyboard/digitalKeyboard.vue"]]);
my.createPage(MiniProgramPage);
