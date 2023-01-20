"use strict";
const common_vendor = require("../../../common/vendor.js");
const icons = {
  "addressbook": "\uE80C",
  "addfriends-fill": "\uE80A",
  "addfriends": "\uE80B",
  "backspace-fill": "\uE808",
  "backspace": "\uE809",
  "bankcard-fill": "\uE806",
  "bankcard": "\uE807",
  "camera-fill": "\uE804",
  "camera": "\uE805",
  "captcha-fill": "\uE802",
  "captcha": "\uE803",
  "cart-fill": "\uE800",
  "cart": "\uE801",
  "classify": "\uE7FE",
  "classify-fill": "\uE7FF",
  "comment-fill": "\uE7FC",
  "comment": "\uE7FD",
  "community-fill": "\uE7FA",
  "community": "\uE7FB",
  "coupon-fill": "\uE7F8",
  "coupon": "\uE7F9",
  "delete": "\uE7F6",
  "delete-fill": "\uE7F7",
  "edit": "\uE7F4",
  "edit-fill": "\uE7F5",
  "fabulous-fill": "\uE7F2",
  "fabulous": "\uE7F3",
  "find": "\uE7F0",
  "find-fill": "\uE7F1",
  "help-fill": "\uE7EE",
  "help": "\uE7EF",
  "home-fill": "\uE7EC",
  "home": "\uE7ED",
  "idcard-fill": "\uE7EA",
  "idcard": "\uE7EB",
  "info": "\uE7E8",
  "info-fill": "\uE7E9",
  "invite-fill": "\uE7E6",
  "invite": "\uE7E7",
  "kefu-fill": "\uE7E4",
  "kefu": "\uE7E5",
  "like-fill": "\uE7E2",
  "like": "\uE7E3",
  "location": "\uE7E0",
  "location-fill": "\uE7E1",
  "lock": "\uE7DE",
  "lock-fill": "\uE7DF",
  "mail-fill": "\uE7DC",
  "mail": "\uE7DD",
  "message": "\uE7DA",
  "message-fill": "\uE7DB",
  "mobile-fill": "\uE7D8",
  "mobile": "\uE7D9",
  "more": "\uE7D6",
  "more-fill": "\uE7D7",
  "my-fill": "\uE7D4",
  "my": "\uE7D5",
  "principal": "\uE80D",
  "notice-fill": "\uE7D2",
  "notice": "\uE7D3",
  "order": "\uE7D0",
  "order-fill": "\uE7D1",
  "picture": "\uE7CE",
  "picture-fill": "\uE7CF",
  "setup-fill": "\uE7CC",
  "setup": "\uE7CD",
  "share": "\uE7CA",
  "share-fill": "\uE7CB",
  "shop": "\uE7C8",
  "shop-fill": "\uE7C9",
  "star-fill": "\uE7C5",
  "star": "\uE7C6",
  "starhalf": "\uE7C7",
  "stepon-fill": "\uE7C3",
  "stepon": "\uE7C4",
  "wait-fill": "\uE7C1",
  "wait": "\uE7C2",
  "warning": "\uE7BF",
  "warning-fill": "\uE7C0",
  "plus": "\uE7BC",
  "plussign-fill": "\uE7BD",
  "plussign": "\uE7BE",
  "minus": "\uE7B9",
  "minussign": "\uE7BA",
  "minussign-fill": "\uE7BB",
  "close": "\uE7B8",
  "clear": "\uE7B6",
  "clear-fill": "\uE7B7",
  "checkbox-fill": "\uE7B5",
  "checkround": "\uE7B4",
  "checkbox": "\uE7B3",
  "check": "\uE7B2",
  "pulldown-fill": "\uE7AE",
  "pullup": "\uE7AF",
  "pullup-fill": "\uE7B0",
  "pulldown": "\uE7B1",
  "roundright-fill": "\uE7AC",
  "roundright": "\uE7AD",
  "arrowright": "\uE7A9",
  "arrowleft": "\uE7AA",
  "arrowdown": "\uE7AB",
  "left": "\uE7A6",
  "up": "\uE7A7",
  "right": "\uE7A8",
  "back": "\uE7A3",
  "top": "\uE7A4",
  "dropdown": "\uE7A5",
  "turningleft": "\uE79F",
  "turningup": "\uE7A0",
  "turningright": "\uE7A1",
  "turningdown": "\uE7A2",
  "refresh": "\uE79C",
  "loading": "\uE79D",
  "search": "\uE79E",
  "rotate": "\uE79B",
  "screen": "\uE79A",
  "signin": "\uE799",
  "calendar": "\uE798",
  "scan": "\uE797",
  "qrcode": "\uE796",
  "wallet": "\uE795",
  "telephone": "\uE794",
  "visible": "\uE793",
  "invisible": "\uE792",
  "menu": "\uE78E",
  "operate": "\uE78F",
  "slide": "\uE790",
  "list": "\uE791",
  "nonetwork": "\uE78D",
  "partake": "\uE78C",
  "qa": "\uE78B",
  "barchart": "\uE788",
  "piechart": "\uE789",
  "linechart": "\uE78A",
  "at": "\uE787",
  "face": "\uE77F",
  "redpacket": "\uE780",
  "suspend": "\uE781",
  "link": "\uE782",
  "keyboard": "\uE783",
  "play": "\uE784",
  "video": "\uE785",
  "voice": "\uE786",
  "sina": "\uE77A",
  "browser": "\uE77B",
  "moments": "\uE77C",
  "qq": "\uE77D",
  "wechat": "\uE77E",
  "balance": "\uE779",
  "bankcardpay": "\uE778",
  "wxpay": "\uE777",
  "alipay": "\uE776",
  "payment": "\uE818",
  "receive": "\uE817",
  "sendout": "\uE816",
  "evaluate": "\uE815",
  "aftersale": "\uE814",
  "warehouse": "\uE813",
  "transport": "\uE812",
  "delivery": "\uE811",
  "switch": "\uE810",
  "goods": "\uE80F",
  "goods-fill": "\uE80E"
};
const _sfc_main = {
  name: "fui-icon",
  emits: ["click"],
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    params: {
      type: [Number, String],
      default: 0
    },
    customPrefix: {
      type: String,
      default: ""
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSize() {
      const size = common_vendor.index.$fui && common_vendor.index.$fui.fuiIcon && common_vendor.index.$fui.fuiIcon.size || 64;
      const unit = common_vendor.index.$fui && common_vendor.index.$fui.fuiIcon && common_vendor.index.$fui.fuiIcon.unit || "rpx";
      return (this.size || size) + (this.unit || unit);
    }
  },
  data() {
    return {
      icons
    };
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      this.$emit("click", {
        params: this.params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.icons[$props.name] || ""),
    b: $props.color,
    c: $options.getSize,
    d: $props.fontWeight,
    e: common_vendor.n(!$props.color && !$props.primary ? "fui-icon__color" : ""),
    f: common_vendor.n($props.primary && !$props.color ? "fui-icon__active-color" : ""),
    g: common_vendor.n($props.disabled ? "fui-icon__not-allowed" : ""),
    h: common_vendor.n($props.customPrefix),
    i: common_vendor.n($props.customPrefix ? $props.name : ""),
    j: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-665e11e9"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-icon/fui-icon.vue"]]);
my.createComponent(Component);
