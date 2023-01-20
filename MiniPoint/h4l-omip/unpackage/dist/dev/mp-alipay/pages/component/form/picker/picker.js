"use strict";
const common_vendor = require("../../../../common/vendor.js");
const options = ["7:00-8:30", "8:30-10:00", "10:00-11:30", "2:00-3:30", "3:30-5:00"];
const options2 = [
  ["2021-11-01", "2021-11-02", "2021-11-03", "2021-11-04", "2021-11-05"],
  ["\u4E0A\u5348", "\u4E0B\u5348"]
];
const options3 = [
  ["A\u6821\u533A", "B\u6821\u533A", "C\u6821\u533A", "D\u6821\u533A", "E\u6821\u533A"],
  ["50\u73ED", "60\u73ED", "70\u73ED", "80\u73ED", "90\u73ED"],
  ["A\u7EC4", "B\u7EC4", "C\u7EC4", "D\u7EC4", "E\u7EC4"]
];
const options4 = [
  ["2020", "2021", "2022", "2023", "2024"],
  ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
  ["05", "10", "15", "20", "25"],
  ["9:00", "10:00", "11:00", "2:00", "3:00", "4:00"]
];
const options5 = [{
  text: "\u5317\u4EAC\u5E02",
  value: "100000",
  children: [{
    text: "\u5317\u4EAC\u5E02",
    value: "110000"
  }]
}, {
  text: "\u5E7F\u4E1C\u7701",
  value: "440000",
  children: [{
    text: "\u5E7F\u5DDE\u5E02",
    value: "440100"
  }, {
    text: "\u97F6\u5173\u5E02",
    value: "440200"
  }, {
    text: "\u6DF1\u5733\u5E02",
    value: "440300"
  }, {
    text: "\u73E0\u6D77\u5E02",
    value: "440400"
  }, {
    text: "\u6C55\u5934\u5E02",
    value: "440500"
  }]
}];
const options6 = [{
  text: "\u5317\u4EAC\u5E02",
  value: "100000",
  children: [{
    text: "\u5317\u4EAC\u5E02",
    value: "100100",
    children: [{
      text: "\u4E1C\u57CE\u533A",
      value: "100101"
    }, {
      text: "\u897F\u57CE\u533A",
      value: "100102"
    }, {
      text: "\u671D\u9633\u533A",
      value: "100103"
    }, {
      text: "\u4E30\u53F0\u533A",
      value: "100104"
    }, {
      text: "\u77F3\u666F\u5C71\u533A",
      value: "100105"
    }]
  }]
}, {
  text: "\u5E7F\u4E1C\u7701",
  value: "440000",
  children: [{
    text: "\u5E7F\u5DDE\u5E02",
    value: "440100",
    children: [{
      text: "\u8354\u6E7E\u533A",
      value: "440101"
    }, {
      text: "\u8D8A\u79C0\u533A",
      value: "440102"
    }, {
      text: "\u6D77\u73E0\u533A",
      value: "440103"
    }, {
      text: "\u5929\u6CB3\u533A",
      value: "440104"
    }, {
      text: "\u767D\u4E91\u533A",
      value: "440105"
    }]
  }, {
    text: "\u97F6\u5173\u5E02",
    value: "440200",
    children: [{
      text: "\u6B66\u6C5F\u533A",
      value: "440201"
    }, {
      text: "\u6D48\u6C5F\u533A",
      value: "440202"
    }, {
      text: "\u66F2\u6C5F\u533A",
      value: "440203"
    }, {
      text: "\u59CB\u5174\u53BF",
      value: "440204"
    }, {
      text: "\u4EC1\u5316\u53BF",
      value: "440205"
    }]
  }]
}];
const options7 = [{
  text: "\u5317\u4EAC\u5E02",
  value: "100000",
  children: [{
    text: "\u5317\u4EAC\u5E02",
    value: "100100",
    children: [{
      text: "\u4E1C\u57CE\u533A",
      value: "100101",
      children: [{
        text: "\u4E1C\u82B1\u5E02\u8857\u9053",
        value: "10010101"
      }, {
        text: "\u9F99\u6F6D\u8857\u9053",
        value: "10010102"
      }, {
        text: "\u4F53\u80B2\u9986\u8DEF\u8857\u9053",
        value: "10010103"
      }, {
        text: "\u5929\u575B\u8857\u9053",
        value: "10010104"
      }]
    }, {
      text: "\u897F\u57CE\u533A",
      value: "100102",
      children: [{
        text: "\u9676\u7136\u4EAD\u8857\u9053",
        value: "10010201"
      }, {
        text: "\u5E7F\u5B89\u95E8\u5185\u8857\u9053",
        value: "10010202"
      }, {
        text: "\u725B\u8857\u8857\u9053",
        value: "10010203"
      }, {
        text: "\u767D\u7EB8\u574A\u8857\u9053",
        value: "10010204"
      }]
    }, {
      text: "\u671D\u9633\u533A",
      value: "100103",
      children: [{
        text: "\u9ED1\u5E84\u6237\u5730\u533A",
        value: "10010301"
      }, {
        text: "\u8C46\u5404\u5E84\u5730\u533A",
        value: "10010302"
      }, {
        text: "\u738B\u56DB\u8425\u5730\u533A",
        value: "10010303"
      }, {
        text: "\u4E1C\u6E56\u8857\u9053",
        value: "10010304"
      }, {
        text: "\u9996\u90FD\u673A\u573A\u8857\u9053",
        value: "10010305"
      }]
    }]
  }]
}, {
  text: "\u5E7F\u4E1C\u7701",
  value: "440000",
  children: [{
    text: "\u5E7F\u5DDE\u5E02",
    value: "440100",
    children: [{
      text: "\u8354\u6E7E\u533A",
      value: "440101",
      children: [{
        text: "\u8336\u6ED8\u8857\u9053",
        value: "44010101"
      }, {
        text: "\u4E1C\u6F16\u8857\u9053",
        value: "44010102"
      }, {
        text: "\u6D77\u9F99\u8857\u9053",
        value: "44010103"
      }, {
        text: "\u4E1C\u6C99\u8857\u9053",
        value: "44010104"
      }, {
        text: "\u4E2D\u5357\u8857\u9053",
        value: "44010105"
      }]
    }, {
      text: "\u8D8A\u79C0\u533A",
      value: "440102",
      children: [{
        text: "\u73E0\u5149\u8857\u9053",
        value: "44010201"
      }, {
        text: "\u5927\u4E1C\u8857\u9053",
        value: "44010202"
      }, {
        text: "\u767D\u4E91\u8857\u9053",
        value: "44010203"
      }, {
        text: "\u767B\u5CF0\u8857\u9053",
        value: "44010204"
      }, {
        text: "\u77FF\u6CC9\u8857\u9053",
        value: "44010205"
      }]
    }]
  }, {
    text: "\u97F6\u5173\u5E02",
    value: "440200",
    children: [{
      text: "\u6B66\u6C5F\u533A",
      value: "440201",
      children: [{
        text: "\u897F\u8054\u9547",
        value: "44020101"
      }, {
        text: "\u897F\u6CB3\u9547",
        value: "44020102"
      }, {
        text: "\u9F99\u5F52\u9547",
        value: "44020103"
      }, {
        text: "\u6C5F\u6E7E\u9547",
        value: "44020104"
      }, {
        text: "\u91CD\u9633\u9547",
        value: "44020105"
      }]
    }, {
      text: "\u6D48\u6C5F\u533A",
      value: "440202",
      children: [{
        text: "\u5341\u91CC\u4EAD\u9547",
        value: "44020201"
      }, {
        text: "\u7281\u5E02\u9547",
        value: "44020202"
      }, {
        text: "\u82B1\u576A\u9547",
        value: "44020203"
      }, {
        text: "\u7530\u87BA\u51B2\u529E\u4E8B\u5904",
        value: "44020204"
      }, {
        text: "\u66F2\u4EC1\u529E\u4E8B\u5904",
        value: "44020205"
      }]
    }]
  }]
}];
const pkData = {
  options,
  options2,
  options3,
  options4,
  options5,
  options6,
  options7
};
const _sfc_main = {
  data() {
    return {
      value: ["10:00-11:30"],
      result: "",
      layer: 1,
      items: [],
      linkage: false,
      show: false,
      options: pkData.options,
      options2: pkData.options2,
      options3: pkData.options3,
      options4: pkData.options4,
      options5: pkData.options5,
      options6: pkData.options6,
      options7: pkData.options7
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    btnClick(type) {
      this.show = false;
      switch (type) {
        case 1:
          this.layer = 1;
          this.linkage = false;
          this.items = this.options;
          break;
        case 2:
          this.layer = 2;
          this.linkage = false;
          this.items = this.options2;
          break;
        case 3:
          this.layer = 3;
          this.linkage = false;
          this.items = this.options3;
          break;
        case 4:
          this.layer = 4;
          this.linkage = false;
          this.items = this.options4;
          break;
        case 5:
          this.layer = 2;
          this.linkage = true;
          this.items = this.options5;
          break;
        case 6:
          this.layer = 3;
          this.linkage = true;
          this.items = this.options6;
          break;
        case 7:
          this.layer = 4;
          this.linkage = true;
          this.items = this.options7;
          break;
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.show = true;
        }, 50);
      });
    },
    change(e) {
      this.show = false;
      this.onChange(e);
    },
    onChange(e) {
      console.log(e);
      this.result = JSON.stringify(e || {});
    },
    cancel() {
      this.show = false;
    },
    pickerShow() {
      this.$refs.picker.open();
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_picker2 = common_vendor.resolveComponent("fui-picker");
  (_easycom_fui_button2 + _easycom_fui_picker2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_picker = () => "../../../../components/firstui/fui-picker/fui-picker.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_picker)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o(($event) => $options.btnClick(1)),
    c: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4E00\u7EA7\u9009\u62E9",
      bold: true,
      margin: ["24rpx"]
    }),
    d: common_vendor.o(($event) => $options.btnClick(2)),
    e: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4E8C\u7EA7\u9009\u62E9 - \u4E0D\u8054\u52A8",
      bold: true
    }),
    f: common_vendor.o(($event) => $options.btnClick(3)),
    g: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4E09\u7EA7\u9009\u62E9 - \u4E0D\u8054\u52A8",
      bold: true,
      margin: ["24rpx"]
    }),
    h: common_vendor.o(($event) => $options.btnClick(4)),
    i: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u56DB\u7EA7\u9009\u62E9 - \u4E0D\u8054\u52A8",
      bold: true
    }),
    j: common_vendor.o(($event) => $options.btnClick(5)),
    k: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4E8C\u7EA7\u9009\u62E9 - \u8054\u52A8",
      bold: true,
      margin: ["24rpx"]
    }),
    l: common_vendor.o(($event) => $options.btnClick(6)),
    m: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u4E09\u7EA7\u9009\u62E9 - \u8054\u52A8",
      bold: true
    }),
    n: common_vendor.o(($event) => $options.btnClick(7)),
    o: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u56DB\u7EA7\u9009\u62E9 - \u8054\u52A8",
      bold: true,
      margin: ["24rpx"]
    }),
    p: common_vendor.o($options.pickerShow),
    q: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "\u8BBE\u7F6E\u9ED8\u8BA4\u503C / \u6697\u9ED1",
      bold: true
    }),
    r: common_vendor.t($data.result),
    s: common_vendor.o($options.change),
    t: common_vendor.o($options.cancel),
    v: common_vendor.p({
      layer: $data.layer,
      options: $data.items,
      linkage: $data.linkage,
      show: $data.show
    }),
    w: common_vendor.o($options.onChange),
    x: common_vendor.p({
      theme: "dark",
      title: "\u8BF7\u9009\u62E9\u65F6\u95F4",
      value: $data.value,
      param: "dark",
      options: $data.options
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/form/picker/picker.vue"]]);
my.createPage(MiniProgramPage);
