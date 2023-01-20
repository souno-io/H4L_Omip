"use strict";
const common_vendor = require("../../../common/vendor.js");
const tabs = [
  {
    id: "ip-address",
    name: "IP\u5730\u5740",
    data: [{
      icon: "color",
      name: "IP\u5730\u5740\u7533\u8BF7",
      vip: false,
      page: "color"
    }, {
      icon: "searchbar",
      name: "IP\u5730\u5740\u67E5\u8BE2",
      vip: false,
      page: "text"
    }, {
      icon: "chart",
      name: "IP\u4F7F\u7528\u7EDF\u8BA1",
      vip: false,
      page: "icon"
    }]
  },
  {
    id: "terminal",
    name: "\u4FE1\u606F\u7EC8\u7AEF",
    data: [{
      icon: "color",
      name: "\u65B0\u589E\u7EC8\u7AEF",
      vip: false,
      page: "color"
    }, {
      icon: "searchbar",
      name: "\u7EC8\u7AEF\u67E5\u8BE2",
      vip: false,
      page: "text"
    }, {
      icon: "chart",
      name: "\u7EC8\u7AEF\u7EDF\u8BA1",
      vip: false,
      page: "icon"
    }]
  },
  {
    id: "server",
    name: "\u670D\u52A1\u5668",
    data: [{
      icon: "color",
      name: "\u65B0\u589E\u7EC8\u7AEF",
      vip: false,
      page: "color"
    }, {
      icon: "searchbar",
      name: "\u7EC8\u7AEF\u67E5\u8BE2",
      vip: false,
      page: "text"
    }, {
      icon: "chart",
      name: "\u7EC8\u7AEF\u7EDF\u8BA1",
      vip: false,
      page: "icon"
    }]
  },
  {
    id: "switch",
    name: "\u4EA4\u6362\u673A",
    data: [{
      icon: "color",
      name: "\u65B0\u589E\u7EC8\u7AEF",
      vip: false,
      page: "color"
    }, {
      icon: "searchbar",
      name: "\u7EC8\u7AEF\u67E5\u8BE2",
      vip: false,
      page: "text"
    }, {
      icon: "chart",
      name: "\u7EC8\u7AEF\u7EDF\u8BA1",
      vip: false,
      page: "icon"
    }]
  },
  {
    id: "other",
    name: "\u5176\u4ED6\u8BBE\u5907",
    data: [{
      icon: "color",
      name: "\u65B0\u589E\u7EC8\u7AEF",
      vip: false,
      page: "color"
    }, {
      icon: "searchbar",
      name: "\u7EC8\u7AEF\u67E5\u8BE2",
      vip: false,
      page: "text"
    }, {
      icon: "chart",
      name: "\u7EC8\u7AEF\u7EDF\u8BA1",
      vip: false,
      page: "icon"
    }]
  }
];
const _sfc_main = {
  data() {
    return {
      tabs,
      scrollInto: "",
      tabIndex: 0,
      height: 0,
      resUrl: this.fui.resUrl()
    };
  },
  computed: common_vendor.mapState(["status"]),
  onLoad() {
    setTimeout(() => {
      let height = common_vendor.index.getSystemInfoSync().windowHeight - common_vendor.index.upx2px(538);
      this.height = height;
      this.getStatus().then((res) => {
      });
    }, 1150);
  },
  methods: {
    ...common_vendor.mapActions(["getStatus"]),
    tabClick(index) {
      this.switchTab(index);
    },
    tabChange(e) {
      if (e.detail.source == "touch") {
        let index = e.target.current || e.detail.current;
        this.switchTab(index);
      }
    },
    switchTab(index) {
      if (this.tabIndex === index)
        return;
      this.tabIndex = index;
      let scrollIndex = index - 1 < 0 ? 0 : index - 1;
      this.scrollInto = this.tabs[scrollIndex].id;
    },
    href(type, page) {
      if (page) {
        this.fui.href(`/pages/component/${type}/${page}/${page}`);
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
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  _easycom_fui_list_cell2();
}
const _easycom_fui_list_cell = () => "../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  _easycom_fui_list_cell();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabs, (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.name),
        b: $data.tabIndex === index ? 1 : "",
        c: index,
        d: $data.tabIndex === index ? 1 : "",
        e: tab.id,
        f: common_vendor.o(($event) => $options.tabClick(index))
      };
    }),
    b: $data.scrollInto,
    c: common_vendor.f($data.tabs, (tab, index, i0) => {
      return {
        a: common_vendor.f(tab.data, (item, idx, i1) => {
          return common_vendor.e({
            a: `${$data.resUrl}/index/light/icon_${item.icon}_3x.png`,
            b: common_vendor.t(item.name),
            c: item.vip
          }, item.vip ? {} : {}, {
            d: idx,
            e: common_vendor.o(($event) => $options.href(tab.id, item.page)),
            f: "f3e1e5b2-0-" + i0 + "-" + i1
          });
        }),
        b: tab.id
      };
    }),
    d: common_vendor.p({
      arrow: true,
      padding: [0, "32rpx"],
      bottomBorder: false,
      radius: "16rpx",
      marginTop: "24"
    }),
    e: $data.height + "px",
    f: $data.tabIndex,
    g: common_vendor.o((...args) => $options.tabChange && $options.tabChange(...args)),
    h: $data.height + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/tabbar/index/index.vue"]]);
_sfc_main.__runtimeHooks = 2;
my.createPage(MiniProgramPage);
