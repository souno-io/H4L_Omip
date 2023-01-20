"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      val: "1",
      radioItems: [
        {
          name: "\u5C0F\u4E8E18\u5C81",
          value: "1",
          checked: true
        },
        {
          name: "18~28\u5C81",
          value: "2",
          checked: false
        },
        {
          name: "29~40\u5C81",
          value: "3",
          checked: false
        }
      ]
    };
  },
  methods: {
    change(e) {
      console.log("change:" + e.detail.value);
    }
  }
};
if (!Array) {
  const _easycom_fui_radio2 = common_vendor.resolveComponent("fui-radio");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_radio_group2 = common_vendor.resolveComponent("fui-radio-group");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_radio2 + _easycom_fui_label2 + _easycom_fui_radio_group2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_radio = () => "../../../../components/firstui/fui-radio/fui-radio.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
const _easycom_fui_radio_group = () => "../../../../components/firstui/fui-radio-group/fui-radio-group.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_radio + _easycom_fui_label + _easycom_fui_radio_group + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: "1"
    }),
    b: common_vendor.p({
      value: "2"
    }),
    c: common_vendor.p({
      margin: ["0", "0", "0", "40rpx"]
    }),
    d: common_vendor.o($options.change),
    e: common_vendor.o(($event) => $data.val = $event),
    f: common_vendor.p({
      name: "radio",
      modelValue: $data.val
    }),
    g: common_vendor.f($data.radioItems, (item, index, i0) => {
      return {
        a: "72288a1e-8-" + i0 + "," + ("72288a1e-7-" + i0),
        b: common_vendor.p({
          checked: item.checked,
          value: item.value,
          color: "#FFB703",
          borderColor: "#B2B2B2"
        }),
        c: common_vendor.t(item.name),
        d: "72288a1e-7-" + i0 + "," + ("72288a1e-6-" + i0),
        e: index,
        f: "72288a1e-6-" + i0 + ",72288a1e-5"
      };
    }),
    h: common_vendor.f($data.radioItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: "72288a1e-12-" + i0 + "," + ("72288a1e-11-" + i0),
        c: common_vendor.p({
          checked: item.checked,
          value: item.value
        }),
        d: "72288a1e-11-" + i0 + "," + ("72288a1e-10-" + i0),
        e: index,
        f: "72288a1e-10-" + i0 + ",72288a1e-9"
      };
    }),
    i: common_vendor.f($data.radioItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: "72288a1e-16-" + i0 + "," + ("72288a1e-15-" + i0),
        c: common_vendor.p({
          isCheckMark: true,
          checkMarkColor: "#FF2B2B",
          scaleRatio: 1.3,
          checked: item.checked,
          value: item.value
        }),
        d: "72288a1e-15-" + i0 + "," + ("72288a1e-14-" + i0),
        e: index,
        f: "72288a1e-14-" + i0 + ",72288a1e-13"
      };
    }),
    j: common_vendor.f($data.radioItems, (item, index, i0) => {
      return {
        a: "72288a1e-20-" + i0 + "," + ("72288a1e-19-" + i0),
        b: common_vendor.p({
          checked: item.checked,
          value: item.value,
          color: "#FFB703",
          borderColor: "#B2B2B2",
          borderRadius: "8rpx"
        }),
        c: common_vendor.t(item.name),
        d: "72288a1e-19-" + i0 + "," + ("72288a1e-18-" + i0),
        e: index,
        f: "72288a1e-18-" + i0 + ",72288a1e-17"
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/radio/radio.vue"]]);
my.createPage(MiniProgramPage);
