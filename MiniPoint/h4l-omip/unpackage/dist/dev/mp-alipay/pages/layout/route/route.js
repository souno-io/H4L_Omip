"use strict";
const common_vendor = require("../../../common/vendor.js");
const static_libs_qqmapWxJssdk_min = require("../../../static/libs/qqmap-wx-jssdk.min.js");
const key = "I4OBZ-YWVWU-MENVE-4Z3TZ-GEAJT-IWBX3";
const map = new static_libs_qqmapWxJssdk_min.QQMapWX({
  key
});
const _sfc_main = {
  data() {
    return {
      latitude: 22.616917615026814,
      longitude: 114.02557368550984,
      mapHeight: 0,
      markers: [{
        iconPath: "/static/images/layout/img_rider_3x.png",
        id: 1,
        latitude: 22.611359108097293,
        longitude: 114.03014980402233,
        width: 48,
        height: 48
      }],
      circles: [{
        latitude: 22.616917615026814,
        longitude: 114.02557368550984,
        color: "#00AE8F11",
        fillColor: "#00AE8F30",
        radius: 200
      }, {
        latitude: 22.616917615026814,
        longitude: 114.02557368550984,
        color: "#FFFFFF",
        fillColor: "#FFFFFF",
        radius: 60
      }, {
        latitude: 22.616917615026814,
        longitude: 114.02557368550984,
        color: "#00AE8F",
        fillColor: "#00AE8F",
        radius: 24
      }],
      polyline: [],
      distance: 0,
      time: 0
    };
  },
  onLoad() {
    const sys = common_vendor.index.getSystemInfoSync();
    this.mapHeight = sys.windowHeight - common_vendor.index.upx2px(300);
  },
  onReady() {
    setTimeout(() => {
      this.getPolyline();
    }, 50);
  },
  methods: {
    getDirection(routes) {
      let coors = routes.polyline, pl = [];
      let kr = 1e6;
      for (var i = 2; i < coors.length; i++) {
        coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
      }
      for (var i = 0; i < coors.length; i += 2) {
        pl.push({
          latitude: coors[i],
          longitude: coors[i + 1]
        });
      }
      this.markers[0].latitude = pl[0].latitude;
      this.markers[0].longitude = pl[0].longitude;
      this.polyline = [{
        points: pl,
        color: "#00AE8F",
        width: 4
      }];
      this.distance = routes.distance < 1e3 ? `${routes.distance}m` : `${(routes.distance / 1e3).toFixed(1)}km`;
      this.time = routes.duration;
    },
    getPolyline() {
      const from = {
        latitude: this.markers[0].latitude,
        longitude: this.markers[0].longitude
      };
      const to = {
        latitude: this.circles[0].latitude,
        longitude: this.circles[0].longitude
      };
      map.direction({
        mode: "bicycling",
        from,
        to,
        success: (res) => {
          console.log(res);
          if (res.result && res.result.routes && res.result.routes[0]) {
            this.getDirection(res.result.routes[0]);
          }
        },
        fail: (error) => {
          console.error(error);
        }
      });
    },
    back() {
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  const _easycom_fui_lazyload2 = common_vendor.resolveComponent("fui-lazyload");
  const _easycom_fui_list2 = common_vendor.resolveComponent("fui-list");
  (_easycom_fui_text2 + _easycom_fui_lazyload2 + _easycom_fui_list2)();
}
const _easycom_fui_text = () => "../../../components/firstui/fui-text/fui-text.js";
const _easycom_fui_lazyload = () => "../../../components/firstui/fui-lazyload/fui-lazyload.js";
const _easycom_fui_list = () => "../../../components/firstui/fui-list/fui-list.js";
if (!Math) {
  (_easycom_fui_text + _easycom_fui_lazyload + _easycom_fui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.latitude,
    b: $data.longitude,
    c: $data.mapHeight + "px",
    d: $data.polyline,
    e: $data.markers,
    f: $data.circles,
    g: common_vendor.p({
      text: "\u9884\u8BA1",
      size: "36",
      fontWeight: "500"
    }),
    h: common_vendor.p({
      text: `${$data.time}\u5206\u949F\u540E`,
      size: "36",
      fontWeight: "500",
      color: "#465CFF"
    }),
    i: common_vendor.p({
      text: "\u9001\u8FBE",
      size: "36",
      fontWeight: "500"
    }),
    j: common_vendor.p({
      text: `\u8DDD\u4F60\u8FD8\u6709${$data.distance}\uFF0C\u7531FirstUI\u4E13\u9001\u914D\u9001`,
      size: "24",
      color: "#7F7F7F",
      padding: ["12rpx", 0, "24rpx"]
    }),
    k: common_vendor.p({
      src: "/static/images/layout/icon_tel_3x.png",
      background: "transparent",
      width: "26",
      height: "26"
    }),
    l: common_vendor.p({
      text: "\u8054\u7CFB\u5546\u5BB6",
      size: "26",
      padding: [0, 0, 0, "16rpx"]
    }),
    m: common_vendor.p({
      block: true,
      src: "/static/images/layout/icon_tel_3x.png",
      background: "transparent",
      width: "26",
      height: "26"
    }),
    n: common_vendor.p({
      text: "\u8054\u7CFB\u9A91\u624B",
      size: "26",
      padding: [0, 0, 0, "16rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/layout/route/route.nvue"]]);
my.createPage(MiniProgramPage);
