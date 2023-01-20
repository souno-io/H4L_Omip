"use strict";
const components_firstui_fuiValidator_fuiValidator = require("../../../../components/firstui/fui-validator/fui-validator.js");
const common_vendor = require("../../../../common/vendor.js");
function checkWxNo(value) {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
}
const rules = [{
  name: "name",
  rule: ["required", "isChinese", "minLength:2", "maxLength:6"],
  msg: ["\u8BF7\u8F93\u5165\u59D3\u540D", "\u59D3\u540D\u5FC5\u987B\u5168\u90E8\u4E3A\u4E2D\u6587", "\u59D3\u540D\u5FC5\u987B2\u4E2A\u6216\u4EE5\u4E0A\u5B57\u7B26", "\u59D3\u540D\u4E0D\u80FD\u8D85\u8FC76\u4E2A\u5B57\u7B26"]
}, {
  name: "mobile",
  rule: ["required", "isMobile"],
  msg: ["\u8BF7\u8F93\u5165\u624B\u673A\u53F7", "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"]
}, {
  name: "password",
  rule: ["required", "isEnAndNo"],
  msg: ["\u8BF7\u8F93\u5165\u5BC6\u7801", "\u5BC6\u7801\u4E3A4~30\u4F4D\u6570\u5B57\u548C\u5B57\u6BCD\u7EC4\u5408"]
}, {
  name: "confirmPwd",
  rule: ["required", "isSame:password"],
  msg: ["\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801", "\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4"]
}, {
  name: "age",
  rule: ["isNum", "range:[1,149]"],
  msg: ["\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5E74\u9F84", "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5E74\u9F84\u8303\u56F4\uFF1A1~149"]
}, {
  name: "idCard",
  rule: ["isIdCard"],
  msg: ["\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801"]
}, {
  name: "email",
  rule: ["isEmail"],
  msg: ["\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1"]
}, {
  name: "url",
  rule: ["isUrl"],
  msg: ["\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u5730\u5740"]
}, {
  name: "amount",
  rule: ["isAmount"],
  msg: ["\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u91D1\u989D\uFF0C\u5141\u8BB8\u4FDD\u7559\u4E24\u4F4D\u5C0F\u6570"]
}, {
  name: "wechatNo",
  validator: [{
    msg: "\u5FAE\u4FE1\u53F7\u4E0D\u6B63\u786E\uFF01\u8BF7\u8F93\u51656~20\u4F4D\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u51CF\u53F7\u3001\u4E0B\u5212\u7EBF\u7EC4\u5408\u7684\u5FAE\u4FE1\u53F7",
    method: checkWxNo
  }]
}];
const _sfc_main = {
  data() {
    return {
      formData: {
        name: "",
        mobile: "",
        password: "",
        confirmPwd: "",
        age: "",
        idCard: "",
        email: "",
        url: "",
        amount: "",
        wechatNo: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.formData);
      let res = components_firstui_fuiValidator_fuiValidator.form.validator(this.formData, rules);
      console.log(res);
      if (res.isPassed) {
        this.fui.toast("\u6821\u9A8C\u901A\u8FC7\uFF01");
      } else {
        this.fui.toast(res.errorMsg);
      }
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_input2 + _easycom_fui_button2)();
}
const _easycom_fui_input = () => "../../../../components/firstui/fui-input/fui-input.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $data.formData.name = $event),
    c: common_vendor.p({
      required: true,
      label: "\u59D3\u540D",
      borderTop: true,
      placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
      modelValue: $data.formData.name
    }),
    d: common_vendor.o(($event) => $data.formData.mobile = $event),
    e: common_vendor.p({
      required: true,
      label: "\u624B\u673A\u53F7",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",
      modelValue: $data.formData.mobile
    }),
    f: common_vendor.o(($event) => $data.formData.password = $event),
    g: common_vendor.p({
      required: true,
      label: "\u5BC6\u7801",
      password: true,
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      modelValue: $data.formData.password
    }),
    h: common_vendor.o(($event) => $data.formData.confirmPwd = $event),
    i: common_vendor.p({
      required: true,
      label: "\u786E\u8BA4\u5BC6\u7801",
      password: true,
      placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
      modelValue: $data.formData.confirmPwd
    }),
    j: common_vendor.o(($event) => $data.formData.age = $event),
    k: common_vendor.p({
      label: "\u5E74\u9F84",
      placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84",
      modelValue: $data.formData.age
    }),
    l: common_vendor.o(($event) => $data.formData.idCard = $event),
    m: common_vendor.p({
      label: "\u8EAB\u4EFD\u8BC1",
      placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7\u7801",
      modelValue: $data.formData.idCard
    }),
    n: common_vendor.o(($event) => $data.formData.email = $event),
    o: common_vendor.p({
      label: "\u90AE\u7BB1",
      placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1",
      modelValue: $data.formData.email
    }),
    p: common_vendor.o(($event) => $data.formData.url = $event),
    q: common_vendor.p({
      label: "\u4E2A\u4EBA\u4E3B\u9875",
      placeholder: "\u8BF7\u8F93\u5165\u4E2A\u4EBA\u4E3B\u9875",
      modelValue: $data.formData.url
    }),
    r: common_vendor.o(($event) => $data.formData.amount = $event),
    s: common_vendor.p({
      label: "\u5546\u54C1\u91D1\u989D",
      placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u91D1\u989D",
      modelValue: $data.formData.amount
    }),
    t: common_vendor.o(($event) => $data.formData.wechatNo = $event),
    v: common_vendor.p({
      label: "\u5FAE\u4FE1\u53F7",
      bottomLeft: 0,
      placeholder: "\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C6\u81F320\u4F4D\uFF0C\u5B57\u6BCD\uFF0C\u6570\u5B57...",
      modelValue: $data.formData.wechatNo
    }),
    w: common_vendor.o($options.submit),
    x: common_vendor.p({
      text: "Submit",
      bold: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/js/validator/validator.vue"]]);
my.createPage(MiniProgramPage);
