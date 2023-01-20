"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiCalendar_index = require("./index.js");
const _sfc_main = {
  name: "fui-calendar",
  emits: ["change"],
  props: {
    type: {
      type: [Number, String],
      default: 1
    },
    value: {
      type: [Array, String],
      default() {
        return [];
      }
    },
    minDate: {
      type: String,
      default: "2010-01-01"
    },
    maxDate: {
      type: String,
      default: "2030-12-31"
    },
    showLunar: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: "cn"
    },
    vertical: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: "#FFFFFF"
    },
    name: {
      type: String,
      default: "roundright-fill"
    },
    arrowSize: {
      type: [Number, String],
      default: 40
    },
    arrowColor: {
      type: String,
      default: "#7F7F7F"
    },
    yearsWidth: {
      type: [Number, String],
      default: 200
    },
    yearsSize: {
      type: [Number, String],
      default: 32
    },
    yearsColor: {
      type: String,
      default: "#181818"
    },
    titleColor: {
      type: String,
      default: "#181818"
    },
    lineColor: {
      type: String,
      default: "#EEEEEE"
    },
    color: {
      type: String,
      default: "#181818"
    },
    activeColor: {
      type: String,
      default: "#FFFFFF"
    },
    activeBackground: {
      type: String,
      default: "#465CFF"
    },
    rangeColor: {
      type: String,
      default: "#465CFF"
    },
    rangeBackground: {
      type: String,
      default: "#F1F4FA"
    },
    start: {
      type: String,
      default: "\u5F00\u59CB"
    },
    end: {
      type: String,
      default: "\u7ED3\u675F"
    },
    isToday: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showBtn: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    btnBackground: {
      type: String,
      default: "#465CFF"
    },
    btnColor: {
      type: String,
      default: "#FFFFFF"
    }
  },
  data() {
    return {
      lang: [],
      header: [],
      monthArr: [],
      dateWidth: "100%",
      title: "",
      year: 2010,
      month: 1,
      today: "",
      minArr: [],
      maxArr: [],
      values: [],
      defCurrent: 0,
      btnDisabled: false
    };
  },
  computed: {
    initChange() {
      return `${this.type}-${this.minDate}-${this.maxDate}-${this.value}`;
    },
    itemWidth() {
      return "14.2857%";
    }
  },
  watch: {
    width(val) {
      this.getWidth(val);
    },
    language(val) {
      this.setLang(val);
    },
    values(vals) {
      this._btnDisabled(vals);
    },
    initChange(vals) {
      this.init();
    }
  },
  created() {
    this.setLang(this.language);
    this.getWidth(this.width);
    this.init();
    this._btnDisabled(this.values);
  },
  methods: {
    _btnDisabled(vals) {
      if (this.type == 3 && vals.length < 2) {
        this.btnDisabled = true;
      } else {
        this.btnDisabled = false;
      }
    },
    setLang(val) {
      this.header = components_firstui_fuiCalendar_index.lunar.lang[`h_${val}`] || components_firstui_fuiCalendar_index.lunar.lang.h_cn;
      this.setTitle();
    },
    getWidth(val) {
      let dw = Number(val);
      if (dw && dw >= 600) {
        dw = common_vendor.index.upx2px(dw);
      } else {
        let sys = common_vendor.index.getSystemInfoSync();
        dw = sys.windowWidth;
      }
      this.dateWidth = val ? dw + "px" : "100%";
    },
    swiperChange(e) {
      let current = e.detail.current;
      let month = current + 1;
      this.title = this.language === "en" ? `${components_firstui_fuiCalendar_index.lunar.lang.m_en[month - 1]} ${this.year}` : `${this.year}\u5E74${month}\u6708`;
    },
    getLunar(month, day) {
      let obj = components_firstui_fuiCalendar_index.lunar.solarTolunar(this.year, month, day);
      return obj.IDayCn;
    },
    initDate(date) {
      if (!date || date === true || date === "true")
        return "";
      let fdate = date.replace(/\-/g, "/").split("/");
      return [Number(fdate[0] || -1), Number(fdate[1] || -1), Number(fdate[2] || -1)];
    },
    formatNum(num) {
      num = Number(num);
      return num < 10 ? "0" + Math.abs(num) : num + "";
    },
    compareDate(arr) {
      if (!arr && arr.length === 0)
        return -1;
      let timestamp = [];
      let indexs = {};
      arr.forEach((item, index) => {
        let d = item.replace(/\-/g, "/");
        d = `${d} 00:00:00`;
        let stamp = new Date(d).getTime();
        timestamp.push(stamp);
        indexs[stamp.toString()] = index;
      });
      let newArr = [];
      while (timestamp.length > 0) {
        let min = Math.min(...timestamp);
        let index = indexs[min.toString()];
        newArr.push(arr[index]);
        timestamp.splice(timestamp.indexOf(min), 1);
      }
      return newArr;
    },
    toArray(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    getMonthDay(year, month) {
      let days = new Date(year, month, 0).getDate();
      return days;
    },
    getWeekday(year, month) {
      let date = new Date(`${year}/${month}/01 00:00:00`);
      return date.getDay();
    },
    _isSection(date, start, end) {
      let ts = new Date(date.replace(/\-/g, "/")).getTime();
      let s = new Date(start.replace(/\-/g, "/")).getTime();
      let e = new Date(end.replace(/\-/g, "/")).getTime();
      return ts > s && ts < e;
    },
    getColor(index, idx, values) {
      let color = this.color;
      if (!values || values.length === 0)
        return color;
      let month = this.formatNum(index + 1);
      let day = this.formatNum(idx + 1);
      let date = `${this.year}-${month}-${day}`;
      let type = this.type;
      if (type == 3) {
        if (~values.indexOf(date)) {
          color = this.activeColor;
        } else if (values[1] && this._isSection(date, values[0], values[1])) {
          color = this.rangeColor;
        }
      } else {
        if (~values.indexOf(date)) {
          color = this.activeColor;
        }
      }
      return color;
    },
    getBackground(index, idx, values) {
      let background = "transparent";
      if (!values || values.length === 0)
        return background;
      let month = this.formatNum(index + 1);
      let day = this.formatNum(idx + 1);
      let date = `${this.year}-${month}-${day}`;
      let type = this.type;
      if (type == 3) {
        if (~values.indexOf(date)) {
          background = this.activeBackground;
        } else if (values[1] && this._isSection(date, values[0], values[1])) {
          background = this.rangeBackground;
        }
      } else {
        if (~values.indexOf(date)) {
          background = this.activeBackground;
        }
      }
      return background;
    },
    getText(index, idx) {
      let month = index + 1;
      let day = idx + 1;
      let text = "";
      let date = `${this.year}-${this.formatNum(month)}-${this.formatNum(day)}`;
      if (this.type == 3) {
        let values = this.values;
        if (values.length > 0) {
          if (values[0] == date && values[0] != values[1]) {
            let st = this.start;
            text = st && st !== "true" && st !== true ? st : "";
          } else if (values[1] == date) {
            let et = this.end;
            text = et && et !== "true" && et !== true ? et : "";
          }
        }
      }
      if (!text) {
        text = this.showLunar ? this.getLunar(month, day) : "";
        if (this.isToday) {
          let td = this.language === "en" ? "Today" : "\u4ECA\u5929";
          text = this.today === date ? td : text;
        }
      }
      return text;
    },
    _isRadius(index, idx, start) {
      let radius = this.type != 3 ? true : false;
      if (this.type == 3 && this.values && this.values.length > 0) {
        let month = index + 1;
        let day = idx + 1;
        let date = `${this.year}-${this.formatNum(month)}-${this.formatNum(day)}`;
        if (start) {
          radius = date === this.values[0];
        } else {
          radius = date === this.values[1];
        }
      }
      return radius;
    },
    getMonthsArr(year) {
      let monthArr = [];
      for (let i = 0; i < 12; i++) {
        let month = i + 1;
        let daysArr = this.toArray(1, this.getMonthDay(year, month));
        let weekdayArr = this.toArray(1, this.getWeekday(year, month));
        weekdayArr = weekdayArr.map((item) => {
          return `week_${i}_${item}`;
        });
        monthArr.push({
          key: `m_${month}`,
          weekdayArr,
          daysArr
        });
      }
      return monthArr;
    },
    _isDisAbled(index, idx) {
      let bool = false;
      let date = `${this.year}/${index + 1}/${idx + 1}`;
      let min = this.minArr.join("/");
      let max = this.maxArr.join("/");
      let ts = new Date(date).getTime();
      if (ts < new Date(min).getTime() || ts > new Date(max).getTime()) {
        bool = true;
      }
      return bool;
    },
    setTitle() {
      this.title = this.language === "en" ? `${components_firstui_fuiCalendar_index.lunar.lang.m_en[this.month - 1]} ${this.year}` : `${this.year}\u5E74${this.month}\u6708`;
    },
    init() {
      const now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      this.minArr = this.initDate(this.minDate) || [2010, 1, 1];
      this.maxArr = this.initDate(this.maxDate) || [2030, 12, 31];
      this.today = `${year}-${this.formatNum(month)}-${this.formatNum(day)}`;
      let value = this.value;
      let def = [-1];
      if (value && value.length > 0) {
        if (typeof value === "string") {
          def = this.initDate(value) || [-1, -1, -1];
          value = [value];
        } else {
          const len = value.length;
          if (len > 1) {
            value = this.compareDate(value);
          }
          if (this.type == 3 && value.length > 2) {
            value = [value[0], value[1]];
          }
          def = this.initDate(value[len - 1]) || [-1, -1, -1];
          if (def[0] !== -1) {
            year = def[0];
            month = def[1];
          }
        }
        value = value.map((item) => {
          let arr = this.initDate(item);
          return `${arr[0]}-${this.formatNum(arr[1])}-${this.formatNum(arr[2])}`;
        });
        this.values = value;
      }
      this.year = year;
      this.month = month;
      this.setTitle();
      this.monthArr = this.getMonthsArr(year);
      this.$nextTick(() => {
        setTimeout(() => {
          this.defCurrent = month - 1;
        }, 20);
      });
    },
    changeYear(num) {
      let year = num + this.year;
      if (year < this.minArr[0] || year > this.maxArr[0]) {
        common_vendor.index.showToast({
          title: "\u65E5\u671F\u5DF2\u8D85\u51FA\u53EF\u5207\u6362\u8303\u56F4\uFF01",
          icon: "none"
        });
      } else {
        this.year = year;
        this.month = 1;
        this.defCurrent = 0;
        this.setTitle();
        this.monthArr = this.getMonthsArr(year);
      }
    },
    getWeekText(date) {
      date = new Date(`${date.replace(/\-/g, "/")} 00:00:00`);
      let week = date.getDay();
      let weeks = ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"];
      if (this.language === "en") {
        weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      }
      return weeks[week];
    },
    dateClick(index, day) {
      if (this.disabled)
        return;
      if (!this._isDisAbled(index, day - 1)) {
        let month = this.formatNum(index + 1);
        let date = `${this.year}-${month}-${this.formatNum(day)}`;
        let type = this.type;
        let values = [...this.values];
        if (type == 3) {
          let start = values[0];
          let sts = -1;
          if (start) {
            sts = new Date(start.replace(/\-/g, "/")).getTime();
          }
          let ets = new Date(date.replace(/\-/g, "/")).getTime();
          if (start && values.length === 1 && sts <= ets) {
            values.push(date);
          } else {
            values = [date];
          }
        } else {
          let idx = values.indexOf(date);
          if (idx != -1) {
            values.splice(idx, 1);
          } else {
            if (type == 2) {
              values.push(date);
            } else {
              values = [date];
            }
          }
        }
        this.values = values;
        setTimeout(() => {
          if (!this.showBtn) {
            this._change();
          }
        }, 0);
      }
    },
    _change() {
      let values = this.values;
      let type = this.type;
      if (type == 3 && values.length < 2)
        return;
      let value = "";
      let week = "";
      let lunarArr = {};
      if (type == 1) {
        value = values[0] || "";
        if (value) {
          week = this.getWeekText(value);
          if (this.showLunar && this.language !== "en") {
            let d = this.initDate(value);
            lunarArr = components_firstui_fuiCalendar_index.lunar.solarTolunar(d[0], d[1], d[2]);
          }
        }
      } else {
        value = values;
        week = [];
        lunarArr = [];
        value.forEach((item) => {
          week.push(this.getWeekText(item));
          if (this.showLunar && this.language !== "en") {
            let d = this.initDate(item);
            lunarArr.push(components_firstui_fuiCalendar_index.lunar.solarTolunar(d[0], d[1], d[2]));
          }
        });
      }
      this.$emit("change", {
        value,
        week,
        today: this.today,
        lunar: lunarArr
      });
    },
    handleClick() {
      if (this.btnDisabled)
        return;
      this._change();
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  _easycom_fui_icon2();
}
const _easycom_fui_icon = () => "../fui-icon/fui-icon.js";
if (!Math) {
  _easycom_fui_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: $props.name,
      color: $props.arrowColor,
      size: $props.arrowSize
    }),
    b: common_vendor.o(($event) => $options.changeYear(-1)),
    c: common_vendor.t($data.title),
    d: $props.yearsWidth + "rpx",
    e: $props.yearsSize + "rpx",
    f: $props.yearsSize + "rpx",
    g: $props.yearsColor,
    h: common_vendor.p({
      name: $props.name,
      color: $props.arrowColor,
      size: $props.arrowSize
    }),
    i: common_vendor.o(($event) => $options.changeYear(1)),
    j: common_vendor.f($data.header, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    k: $props.titleColor,
    l: $options.itemWidth,
    m: $props.lineColor,
    n: $props.lineColor,
    o: common_vendor.f($data.monthArr, (item, index, i0) => {
      return {
        a: common_vendor.f(item.weekdayArr, (week, i, i1) => {
          return {
            a: week
          };
        }),
        b: common_vendor.f(item.daysArr, (sub, idx, i1) => {
          return common_vendor.e({
            a: common_vendor.t(sub),
            b: $options.getColor(index, idx, $data.values)
          }, $props.showLunar && $props.language !== "en" ? {
            c: common_vendor.t($options.getText(index, idx)),
            d: $options.getColor(index, idx, $data.values)
          } : {}, !$props.showLunar || $props.language === "en" ? {
            e: common_vendor.t($options.getText(index, idx)),
            f: $options.getColor(index, idx, $data.values)
          } : {}, {
            g: $options._isDisAbled(index, idx) ? 1 : "",
            h: $options._isRadius(index, idx, true) ? 1 : "",
            i: $options._isRadius(index, idx) ? 1 : "",
            j: idx,
            k: common_vendor.o(($event) => $options.dateClick(index, sub)),
            l: $options.getBackground(index, idx, $data.values)
          });
        }),
        c: item.key
      };
    }),
    p: $options.itemWidth,
    q: $props.showLunar && $props.language !== "en",
    r: !$props.showLunar || $props.language === "en",
    s: $options.itemWidth,
    t: $data.defCurrent,
    v: $props.vertical,
    w: common_vendor.o((...args) => $options.swiperChange && $options.swiperChange(...args)),
    x: $props.showBtn
  }, $props.showBtn ? {
    y: common_vendor.t($props.btnText),
    z: !$data.btnDisabled ? 1 : "",
    A: $props.btnColor,
    B: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    C: !$props.btnBackground ? 1 : "",
    D: $data.btnDisabled ? 1 : "",
    E: $props.btnBackground
  } : {}, {
    F: $data.dateWidth,
    G: $props.background
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-114ad746"], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/components/firstui/fui-calendar/fui-calendar.vue"]]);
my.createComponent(Component);
