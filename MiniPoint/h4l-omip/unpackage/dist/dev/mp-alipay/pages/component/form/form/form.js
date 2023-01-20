"use strict";
const common_vendor = require("../../../../common/vendor.js");
function checkWxNo(value) {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(value);
}
function checkAgree(agree) {
  return agree;
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
  name: "code",
  rule: ["required"],
  msg: ["\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"]
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
}, {
  name: "agree",
  validator: [{
    msg: "\u8BF7\u52FE\u9009\u5E76\u540C\u610F\u300AFirstUI \u76F8\u5173\u6761\u6B3E\u300B",
    method: checkAgree
  }]
}];
const _sfc_main = {
  data() {
    return {
      formData: {
        name: "",
        mobile: "",
        code: "",
        password: "",
        confirmPwd: "",
        age: "",
        idCard: "",
        email: "",
        url: "",
        amount: "",
        wechatNo: "",
        text: "",
        ageRange: "1",
        motion: "1",
        switchRes: false,
        area: "",
        dateTime: "",
        score: 0,
        img: "",
        agree: false
      },
      radioItems: [
        {
          name: "18~28\u5C81",
          value: "1",
          checked: true
        },
        {
          name: "29~40\u5C81",
          value: "2",
          checked: false
        }
      ],
      checkboxItems: [{
        name: "\u7BEE\u7403",
        value: "1",
        checked: true
      }, {
        name: "\u4E52\u4E53\u7403",
        value: "2",
        checked: false
      }],
      areaOptions: ["\u4E2D\u56FD", "\u7F8E\u56FD", "\u4FC4\u7F57\u65AF", "\u65E5\u672C"],
      show: false,
      dateShow: false,
      uploadUrl: "https://ffa.firstui.cn/api/example/upload-file"
    };
  },
  methods: {
    submit() {
      console.log(this.formData);
      this.$refs.form.validator(this.formData, rules).then((res) => {
        console.log(res);
        if (res.isPassed) {
          this.fui.toast("\u6821\u9A8C\u901A\u8FC7\uFF01");
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    checkboxChange(e) {
      console.log(e);
      this.$set(this.formData, "motion", e.detail.value.join(","));
    },
    switchChange(e) {
      console.log(e.detail);
      this.$set(this.formData, "switchRes", e.detail.value);
    },
    areaPicker() {
      this.show = true;
    },
    change(e) {
      console.log(e);
      this.$set(this.formData, "area", e.value);
      this.areaCancel();
    },
    areaCancel() {
      this.show = false;
    },
    datePicker() {
      this.dateShow = true;
    },
    dateChange(e) {
      console.log(e);
      this.$set(this.formData, "dateTime", e.result);
      this.dateCancel();
    },
    dateCancel() {
      this.dateShow = false;
    },
    rateChange(e) {
      console.log(e);
      this.$set(this.formData, "score", e.score);
    },
    success(e) {
      console.log(e);
      let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}");
      if (res.data.url) {
        this.$refs.upload.result(res.data.url, e.index);
      }
    },
    complete(e) {
      if (e.status === "success" && e.action === "upload") {
        this.fui.toast("\u4E0A\u4F20\u5B8C\u6210\uFF01");
        console.log(e.urls);
        this.$set(this.formData, "img", e.urls.join(","));
      }
    },
    agreeChange(e) {
      console.log(e);
      this.$set(this.formData, "agree", e.checked);
    },
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    }
  }
};
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_textarea2 = common_vendor.resolveComponent("fui-textarea");
  const _easycom_fui_radio2 = common_vendor.resolveComponent("fui-radio");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_radio_group2 = common_vendor.resolveComponent("fui-radio-group");
  const _easycom_fui_checkbox2 = common_vendor.resolveComponent("fui-checkbox");
  const _easycom_fui_checkbox_group2 = common_vendor.resolveComponent("fui-checkbox-group");
  const _easycom_fui_switch2 = common_vendor.resolveComponent("fui-switch");
  const _easycom_fui_rate2 = common_vendor.resolveComponent("fui-rate");
  const _easycom_fui_upload2 = common_vendor.resolveComponent("fui-upload");
  const _easycom_fui_form2 = common_vendor.resolveComponent("fui-form");
  const _easycom_fui_picker2 = common_vendor.resolveComponent("fui-picker");
  const _easycom_fui_date_picker2 = common_vendor.resolveComponent("fui-date-picker");
  (_easycom_fui_input2 + _easycom_fui_button2 + _easycom_fui_textarea2 + _easycom_fui_radio2 + _easycom_fui_list_cell2 + _easycom_fui_label2 + _easycom_fui_radio_group2 + _easycom_fui_checkbox2 + _easycom_fui_checkbox_group2 + _easycom_fui_switch2 + _easycom_fui_rate2 + _easycom_fui_upload2 + _easycom_fui_form2 + _easycom_fui_picker2 + _easycom_fui_date_picker2)();
}
const _easycom_fui_input = () => "../../../../components/firstui/fui-input/fui-input.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_textarea = () => "../../../../components/firstui/fui-textarea/fui-textarea.js";
const _easycom_fui_radio = () => "../../../../components/firstui/fui-radio/fui-radio.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
const _easycom_fui_radio_group = () => "../../../../components/firstui/fui-radio-group/fui-radio-group.js";
const _easycom_fui_checkbox = () => "../../../../components/firstui/fui-checkbox/fui-checkbox.js";
const _easycom_fui_checkbox_group = () => "../../../../components/firstui/fui-checkbox-group/fui-checkbox-group.js";
const _easycom_fui_switch = () => "../../../../components/firstui/fui-switch/fui-switch.js";
const _easycom_fui_rate = () => "../../../../components/firstui/fui-rate/fui-rate.js";
const _easycom_fui_upload = () => "../../../../components/firstui/fui-upload/fui-upload.js";
const _easycom_fui_form = () => "../../../../components/firstui/fui-form/fui-form.js";
const _easycom_fui_picker = () => "../../../../components/firstui/fui-picker/fui-picker.js";
const _easycom_fui_date_picker = () => "../../../../components/firstui/fui-date-picker/fui-date-picker.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_button + _easycom_fui_textarea + _easycom_fui_radio + _easycom_fui_list_cell + _easycom_fui_label + _easycom_fui_radio_group + _easycom_fui_checkbox + _easycom_fui_checkbox_group + _easycom_fui_switch + _easycom_fui_rate + _easycom_fui_upload + _easycom_fui_form + _easycom_fui_picker + _easycom_fui_date_picker)();
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
    f: common_vendor.p({
      type: "gray",
      bold: true,
      width: "200rpx",
      height: "64rpx",
      size: 28,
      text: "\u83B7\u53D6\u9A8C\u8BC1\u7801"
    }),
    g: common_vendor.o(($event) => $data.formData.code = $event),
    h: common_vendor.p({
      required: true,
      padding: ["20rpx", "32rpx"],
      label: "\u9A8C\u8BC1\u7801",
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801",
      modelValue: $data.formData.code
    }),
    i: common_vendor.o(($event) => $data.formData.password = $event),
    j: common_vendor.p({
      required: true,
      label: "\u5BC6\u7801",
      password: true,
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      modelValue: $data.formData.password
    }),
    k: common_vendor.o(($event) => $data.formData.confirmPwd = $event),
    l: common_vendor.p({
      required: true,
      label: "\u786E\u8BA4\u5BC6\u7801",
      password: true,
      placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
      modelValue: $data.formData.confirmPwd
    }),
    m: common_vendor.o(($event) => $data.formData.age = $event),
    n: common_vendor.p({
      label: "\u5E74\u9F84",
      placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84",
      modelValue: $data.formData.age
    }),
    o: common_vendor.o(($event) => $data.formData.idCard = $event),
    p: common_vendor.p({
      label: "\u8EAB\u4EFD\u8BC1",
      placeholder: "\u8BF7\u8F93\u5165\u8EAB\u4EFD\u8BC1\u53F7\u7801",
      modelValue: $data.formData.idCard
    }),
    q: common_vendor.o(($event) => $data.formData.email = $event),
    r: common_vendor.p({
      label: "\u90AE\u7BB1",
      placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1",
      modelValue: $data.formData.email
    }),
    s: common_vendor.o(($event) => $data.formData.url = $event),
    t: common_vendor.p({
      label: "\u4E2A\u4EBA\u4E3B\u9875",
      placeholder: "\u8BF7\u8F93\u5165\u4E2A\u4EBA\u4E3B\u9875",
      modelValue: $data.formData.url
    }),
    v: common_vendor.o(($event) => $data.formData.amount = $event),
    w: common_vendor.p({
      label: "\u5546\u54C1\u91D1\u989D",
      placeholder: "\u8BF7\u8F93\u5165\u5546\u54C1\u91D1\u989D",
      modelValue: $data.formData.amount
    }),
    x: common_vendor.o(($event) => $data.formData.wechatNo = $event),
    y: common_vendor.p({
      label: "\u5FAE\u4FE1\u53F7",
      bottomLeft: 0,
      placeholder: "\u81EA\u5B9A\u4E49\u6821\u9A8C\uFF0C6\u81F320\u4F4D\uFF0C\u5B57\u6BCD\uFF0C\u6570\u5B57...",
      modelValue: $data.formData.wechatNo
    }),
    z: common_vendor.o(($event) => $data.formData.text = $event),
    A: common_vendor.p({
      isCounter: true,
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      modelValue: $data.formData.text
    }),
    B: common_vendor.f($data.radioItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: "033051b9-17-" + i0 + "," + ("033051b9-16-" + i0),
        c: common_vendor.p({
          isCheckMark: true,
          checkMarkColor: "#465CFF",
          scaleRatio: 1.3,
          checked: item.checked,
          value: item.value
        }),
        d: "033051b9-16-" + i0 + "," + ("033051b9-15-" + i0),
        e: index,
        f: "033051b9-15-" + i0 + ",033051b9-14"
      };
    }),
    C: common_vendor.o(($event) => $data.formData.ageRange = $event),
    D: common_vendor.p({
      modelValue: $data.formData.ageRange
    }),
    E: common_vendor.f($data.checkboxItems, (item, index, i0) => {
      return {
        a: "033051b9-21-" + i0 + "," + ("033051b9-20-" + i0),
        b: common_vendor.p({
          checked: item.checked,
          value: item.value
        }),
        c: common_vendor.t(item.name),
        d: "033051b9-20-" + i0 + "," + ("033051b9-19-" + i0),
        e: index,
        f: "033051b9-19-" + i0 + ",033051b9-18"
      };
    }),
    F: common_vendor.o($options.checkboxChange),
    G: common_vendor.o($options.switchChange),
    H: common_vendor.p({
      scaleRatio: 0.8
    }),
    I: common_vendor.p({
      highlight: false
    }),
    J: common_vendor.p({
      textRight: true,
      padding: [0],
      borderBottom: false,
      backgroundColor: "transparent",
      disabled: true,
      value: $data.formData.area
    }),
    K: common_vendor.o($options.areaPicker),
    L: common_vendor.p({
      arrow: true
    }),
    M: common_vendor.p({
      placeholder: "\u8BF7\u9009\u62E9",
      textRight: true,
      padding: [0],
      borderBottom: false,
      backgroundColor: "transparent",
      disabled: true,
      value: $data.formData.dateTime
    }),
    N: common_vendor.o($options.datePicker),
    O: common_vendor.p({
      arrow: true
    }),
    P: common_vendor.o($options.rateChange),
    Q: common_vendor.p({
      highlight: false
    }),
    R: common_vendor.o($options.success),
    S: common_vendor.o($options.complete),
    T: common_vendor.p({
      max: 2,
      immediate: true,
      url: $data.uploadUrl
    }),
    U: common_vendor.p({
      padding: ["32rpx", "32rpx", "12rpx", "32rpx"],
      highlight: false
    }),
    V: common_vendor.o($options.agreeChange),
    W: common_vendor.p({
      scaleRatio: 0.8
    }),
    X: common_vendor.o($options.submit),
    Y: common_vendor.p({
      text: "Submit",
      bold: true
    }),
    Z: common_vendor.p({
      top: "0"
    }),
    aa: common_vendor.o($options.change),
    ab: common_vendor.o($options.areaCancel),
    ac: common_vendor.p({
      options: $data.areaOptions,
      show: $data.show
    }),
    ad: common_vendor.o($options.dateChange),
    ae: common_vendor.o($options.dateCancel),
    af: common_vendor.p({
      type: 5,
      show: $data.dateShow
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/form/form.vue"]]);
my.createPage(MiniProgramPage);
