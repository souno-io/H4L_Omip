"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_layout_topTab_index = require("./index.js");
const fNewsItem = () => "./fNewsItem.js";
const MAX_CACHE_PAGEINDEX = 3;
const MAX_CACHE_PAGE = 3;
const _sfc_main = {
  components: {
    fNewsItem
  },
  data() {
    return {
      isIos: false,
      newsList: [],
      cacheTab: [],
      tabIndex: 0,
      tabs: ["\u63A8\u8350", "\u70ED\u699C", "\u65B0\u65F6\u4EE3", "\u79D1\u6280", "\u61C2\u8F66\u5E1D", "\u4F53\u80B2", "\u5065\u5EB7", "NBA", "\u6BCF\u65E5\u5FC5\u770B"],
      pulling: false,
      refreshIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABRBAMAAABYoVcFAAAAKlBMVEUAAACXl5eZmZmfn5+YmJiXl5eampqZmZmYmJiYmJiZmZmYmJiZmZmZmZl02B9kAAAADXRSTlMAQKAQ0GAsUN+wz5CA21ow0AAAAM5JREFUSMftzLEJAkEQheFR4WzjGji4wC5E0A7E0OgaEIwF4RqwJEEODKcX1114yQ/uhsLtY6Lh57NZ7Dz1heXd27Kwcb+WlQv3Vy1rWcta1rKW/1Q2R8PWt8FYdhPLi79ZLt33KB/hibJzH1E+PaAqRfqAcuMBVSlyMmy1C6hKka0CoCpBAlUJEmgsQQJVCRKoSpBAU0mSaCpJEk0lSSMaS5JG9FuK/IkeQkmSaEjikSSaRpJoHEmiIvOoyCwqMo+KzKMi8+hoZTtte5vDPrSGI5zJ/Z1kAAAAAElFTkSuQmCC"
    };
  },
  onLoad() {
    setTimeout(() => {
      this.newsList = this.initData();
      common_vendor.index.getSystemInfo({
        success: (res) => {
          this.isIos = "ios" == res.platform.toLocaleLowerCase();
        }
      });
    }, 200);
  },
  methods: {
    initData() {
      let ary = [];
      for (let i = 0, length = this.tabs.length; i < length; i++) {
        let aryItem = {
          loadingText: "\u6B63\u5728\u52A0\u8F7D...",
          refreshing: false,
          refreshText: "",
          data: [],
          isLoading: false,
          pageIndex: 1
        };
        if (i === this.tabIndex) {
          aryItem.pageIndex = 2;
          aryItem.data = aryItem.data.concat(pages_layout_topTab_index.newsData);
        }
        ary.push(aryItem);
      }
      return ary;
    },
    getList(index, refresh) {
      let activeTab = this.newsList[index];
      let list = pages_layout_topTab_index.newsData || [];
      if (refresh) {
        activeTab.data = [];
        activeTab.loadingText = "\u6B63\u5728\u52A0\u8F7D...";
        activeTab.pageIndex = 2;
        activeTab.data = list || [];
      } else {
        activeTab.data = activeTab.data.concat(list);
        activeTab.pageIndex++;
        activeTab.isLoading = false;
        if (activeTab.pageIndex > 3) {
          activeTab.loadingText = "\u6CA1\u6709\u66F4\u591A\u4E86";
        }
      }
    },
    detail(e) {
      common_vendor.index.showToast({
        title: "\u8BE6\u60C5~",
        icon: "none"
      });
    },
    loadMore(e) {
      let index = this.tabIndex;
      let activeTab = this.newsList[index];
      if (activeTab.pageIndex < 4 && !activeTab.isLoading) {
        activeTab.isLoading = true;
        setTimeout(() => {
          this.getList(index);
        }, 300);
      }
    },
    change(e) {
      this.switchTab(e.index);
    },
    tabChange(e) {
      console.log(e);
      if (e.detail.source == "touch" || e.detail.source == "autoplay") {
        let index = e.target.current || e.detail.current;
        this.switchTab(index);
      }
    },
    switchTab(index) {
      if (this.tabIndex === index)
        return;
      if (this.newsList[index].data.length === 0) {
        this.getList(index);
      }
      if (this.newsList[this.tabIndex].pageIndex > MAX_CACHE_PAGEINDEX) {
        let isExist = this.cacheTab.indexOf(this.tabIndex);
        if (isExist < 0) {
          this.cacheTab.push(this.tabIndex);
        }
      }
      this.tabIndex = index;
      if (this.cacheTab.length > MAX_CACHE_PAGE) {
        let cacheIndex = this.cacheTab[0];
        this.clearTabData(cacheIndex);
        this.cacheTab.splice(0, 1);
      }
    },
    clearTabData(e) {
      this.newsList[e].data.length = 0;
      this.newsList[e].loadingText = "\u52A0\u8F7D\u66F4\u591A...";
    },
    onrefresh(e) {
      let index = this.tabIndex;
      var tab = this.newsList[index];
      if (tab.refreshing) {
        return;
      }
      tab.refreshing = true;
      tab.refreshText = "\u6B63\u5728\u5237\u65B0...";
      setTimeout(() => {
        this.getList(index, true);
        this.pulling = true;
        tab.refreshing = false;
        tab.refreshFlag = false;
        tab.refreshText = "\u5237\u65B0\u6210\u529F";
        common_vendor.index.showToast({
          title: "\u5237\u65B0\u6210\u529F",
          icon: "none"
        });
        setTimeout(() => {
          this.pulling = false;
        }, 500);
      }, 1e3);
    },
    onpullingdown(e) {
      var tab = this.newsList[this.tabIndex];
      if (tab.refreshing || this.pulling) {
        return;
      }
      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {
        tab.refreshFlag = true;
        tab.refreshText = "\u91CA\u653E\u7ACB\u5373\u5237\u65B0";
      } else {
        tab.refreshFlag = false;
        tab.refreshText = "\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0";
      }
    }
  }
};
if (!Array) {
  const _easycom_fui_tabs2 = common_vendor.resolveComponent("fui-tabs");
  const _component_f_news_item = common_vendor.resolveComponent("f-news-item");
  const _easycom_fui_loadmore2 = common_vendor.resolveComponent("fui-loadmore");
  const _easycom_fui_divider2 = common_vendor.resolveComponent("fui-divider");
  (_easycom_fui_tabs2 + _component_f_news_item + _easycom_fui_loadmore2 + _easycom_fui_divider2)();
}
const _easycom_fui_tabs = () => "../../../components/firstui/fui-tabs/fui-tabs.js";
const _easycom_fui_loadmore = () => "../../../components/firstui/fui-loadmore/fui-loadmore.js";
const _easycom_fui_divider = () => "../../../components/firstui/fui-divider/fui-divider.js";
if (!Math) {
  (_easycom_fui_tabs + _easycom_fui_loadmore + _easycom_fui_divider)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      tabs: $data.tabs,
      scroll: true,
      alignLeft: true,
      current: $data.tabIndex
    }),
    c: common_vendor.f($data.newsList, (tab, index, i0) => {
      return common_vendor.e({
        a: common_vendor.f(tab.data, (item, idx, i1) => {
          return {
            a: common_vendor.o(($event) => $options.detail(item)),
            b: "9176b89e-1-" + i0 + "-" + i1,
            c: common_vendor.p({
              item
            }),
            d: idx
          };
        }),
        b: tab.isLoading
      }, tab.isLoading ? {
        c: "9176b89e-2-" + i0
      } : {}, {
        d: !tab.isLoading && tab.pageIndex > 3
      }, !tab.isLoading && tab.pageIndex > 3 ? {
        e: "9176b89e-3-" + i0,
        f: common_vendor.p({
          text: "\u5DF2\u52A0\u8F7D\u5168\u90E8\u6570\u636E"
        })
      } : {}, {
        g: tab.refreshing,
        h: common_vendor.o(($event) => $options.loadMore(index)),
        i: index
      });
    }),
    d: common_vendor.o((...args) => $options.onrefresh && $options.onrefresh(...args)),
    e: $data.tabIndex,
    f: common_vendor.o((...args) => $options.tabChange && $options.tabChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/topTab/topTab.nvue"]]);
my.createPage(MiniProgramPage);
