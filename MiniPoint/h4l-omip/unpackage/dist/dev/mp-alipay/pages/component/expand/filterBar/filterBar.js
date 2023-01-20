"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      itemList: ["\u7EFC\u5408", "\u4FE1\u7528"],
      filters: [{
        title: "\u54C1\u724C",
        data: [{
          text: "\u5357\u6781\u4EBA",
          value: 1
        }, {
          text: "\u6613\u6587",
          value: 2
        }, {
          text: "\u5BBF\u4E91\u6708",
          value: 3
        }, {
          text: "RAMPO/\u4E71\u6B65\u4E71\u6B65",
          value: 4
        }]
      }],
      brands: [],
      items: [{
        text: "\u7EFC\u5408",
        value: "",
        type: "dropdown",
        active: false
      }, {
        text: "\u4EF7\u683C",
        type: "sort",
        sort: 1
      }, {
        text: "\u9500\u91CF",
        type: "text",
        active: false
      }, {
        type: "switch",
        switch: 1
      }, {
        text: "\u7B5B\u9009",
        value: "",
        type: "filter"
      }],
      items2: [{
        text: "\u7EFC\u5408",
        value: "",
        type: "dropdown",
        active: false
      }, {
        text: "\u4EF7\u683C",
        type: "sort",
        active: false,
        sort: 1
      }, {
        text: "\u8BC4\u8BBA",
        type: "sort",
        sort: 1
      }],
      items3: [{
        text: "Updated",
        value: "",
        type: "dropdown",
        active: false
      }, {
        text: "Forks",
        type: "text",
        active: false,
        sort: 1
      }, {
        text: "Stars",
        type: "sort",
        value: "asc",
        sort: 1
      }, {
        text: "\u7B5B\u9009",
        value: "",
        type: "filter"
      }]
    };
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP\u4E13\u5C5E\u5185\u5BB9");
    },
    isActive(val) {
      return ~this.brands.indexOf(val);
    },
    attrClick(val) {
      let attrs = [...this.brands];
      let index = attrs.indexOf(val);
      if (index !== -1) {
        attrs.splice(index, 1);
      } else {
        attrs.push(val);
      }
      this.brands = attrs;
      let items = [...this.items];
      let vals = this.brands.join(",");
      items[4].value = vals;
      this.fui.toast(`\u7B5B\u9009\uFF1A${vals ? vals : "\u5168\u90E8"}`);
      this.items = items;
    },
    changeData(items, idx) {
      items.forEach((item, index) => {
        if (index !== idx && item.type !== "filter" && item.type !== "switch") {
          if (item.type === "sort") {
            item.sort = 1;
          }
          item.active = false;
          item.value = "";
        }
      });
      return items;
    },
    itemClick(e) {
      console.log(e);
      let items = [...this.items];
      let item = items[0];
      item.text = e.text;
      item.value = e.text;
      item.active = false;
      this.items = this.changeData(items, 0);
    },
    closeDrawer(e) {
      this.show = false;
    },
    change(e) {
      console.log(e);
      this.items = e.items;
      let item = this.items[e.index];
      if (item.type === "dropdown") {
        if (item.active) {
          this.$refs.ddm.show();
        } else {
          this.$refs.ddm.close();
        }
      } else if (item.type === "sort") {
        this.fui.toast(item.text + " " + item.value);
        this.changeData(this.items, e.index);
      } else if (item.type === "text") {
        this.fui.toast(item.text);
        this.changeData(this.items, e.index);
      } else if (item.type === "switch") {
        this.fui.toast("\u5207\u6362\u4E3A\uFF1A" + (item.switch === 1 ? "\u5927\u56FE" : "\u5217\u8868"));
      } else if (item.type === "filter") {
        this.show = true;
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_filter_bar2 = common_vendor.resolveComponent("fui-filter-bar");
  const _easycom_fui_dropdown_menu2 = common_vendor.resolveComponent("fui-dropdown-menu");
  const _easycom_fui_drawer2 = common_vendor.resolveComponent("fui-drawer");
  (_easycom_fui_filter_bar2 + _easycom_fui_dropdown_menu2 + _easycom_fui_drawer2)();
}
const _easycom_fui_filter_bar = () => "../../../../components/firstui/fui-filter-bar/fui-filter-bar.js";
const _easycom_fui_dropdown_menu = () => "../../../../components/firstui/fui-dropdown-menu/fui-dropdown-menu.js";
const _easycom_fui_drawer = () => "../../../../components/firstui/fui-drawer/fui-drawer.js";
if (!Math) {
  (_easycom_fui_filter_bar + _easycom_fui_dropdown_menu + _easycom_fui_drawer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      items: $data.items
    }),
    d: common_vendor.o($options.itemClick),
    e: common_vendor.p({
      isMask: false,
      options: $data.itemList,
      left: "0",
      minWidth: "750",
      splitLine: true
    }),
    f: common_vendor.p({
      items: $data.items2
    }),
    g: common_vendor.p({
      items: $data.items3,
      background: "#222",
      color: "#A3A3A3",
      lineColor: "#333",
      activeColor: "#465CFF"
    }),
    h: common_vendor.f($data.filters, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.f(item.data, (modal, idx, i1) => {
          return {
            a: common_vendor.t(modal.text),
            b: $options.isActive(modal.value) ? 1 : "",
            c: common_vendor.o(($event) => $options.attrClick(modal.value)),
            d: idx
          };
        }),
        c: index
      };
    }),
    i: common_vendor.o($options.closeDrawer),
    j: common_vendor.p({
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/component/expand/filterBar/filterBar.vue"]]);
my.createPage(MiniProgramPage);
