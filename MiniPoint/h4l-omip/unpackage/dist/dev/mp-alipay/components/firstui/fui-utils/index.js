"use strict";
/*!
 * 工具类：常用数据处理工具
 * Utils - v1.0.0 (2021/7/9, 11:07:14 AM)
 * https://github.com/FirstUI/FirstUI | Released under Apache License 2.0
 *
 * 官网地址：https://firstui.cn/
 * 文档地址：https://doc.firstui.cn/
 */
const utils = {
  titleCase(value) {
    if (value == null || value.length === 0)
      return value;
    return value.replace(/^[a-z]/, (matchStr) => {
      return matchStr.toLocaleUpperCase();
    });
  },
  compressLetter(value, ignoreCase) {
    let pattern = new RegExp("([a-zA-Z])\\1+", ignoreCase ? "ig" : "g");
    return value.replace(pattern, (matchStr, group_1) => {
      return matchStr.length + group_1;
    });
  },
  sleep(millisecond) {
    let now = new Date();
    let exitTime = now.getTime() + millisecond;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime)
        return;
    }
  },
  trim(value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimAll(value) {
    return value.replace(/\s+/g, "");
  },
  replaceAll(text, repstr, newstr) {
    return text.replace(new RegExp(repstr, "gm"), newstr);
  },
  numberFormatter(num) {
    return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
  },
  moneyFormatter(money) {
    return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
      /\,$/,
      ""
    ).split("").reverse().join("");
  },
  dateFormatter(date, format, type = 1, isMs = true) {
    let formatDate = "";
    if (type === 3) {
      formatDate = utils._formatTimeStr(date, format);
    } else {
      formatDate = utils._formatDate(format, date, type, isMs);
    }
    return formatDate;
  },
  _formatDate(formatStr, fdate, type = 1, isMs) {
    if (!fdate)
      return "";
    let fTime, fStr = "ymdhis";
    if (type === 4) {
      fTime = fdate;
    } else {
      fdate = fdate.toString();
      if (~fdate.indexOf(".")) {
        fdate = fdate.substring(0, fdate.indexOf("."));
      }
      fdate = fdate.replace("T", " ").replace(/\-/g, "/");
      if (!formatStr)
        formatStr = "y-m-d h:i:s";
      if (fdate) {
        if (type === 2) {
          fdate = isMs ? Number(fdate) : Number(fdate) * 1e3;
        }
        fTime = new Date(fdate);
      } else {
        fTime = new Date();
      }
    }
    let month = fTime.getMonth() + 1;
    let day = fTime.getDate();
    let hours = fTime.getHours();
    let minu = fTime.getMinutes();
    let second = fTime.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hours = hours < 10 ? "0" + hours : hours;
    minu = minu < 10 ? "0" + minu : minu;
    second = second < 10 ? "0" + second : second;
    let formatArr = [
      fTime.getFullYear().toString(),
      month.toString(),
      day.toString(),
      hours.toString(),
      minu.toString(),
      second.toString()
    ];
    for (let i = 0; i < formatArr.length; i++) {
      formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
    }
    return formatStr;
  },
  _formatTimeStr(timeStr, formatStr) {
    if (!timeStr)
      return;
    timeStr = timeStr.toString();
    if (timeStr.length === 14) {
      let timeArr = timeStr.split("");
      let fStr = "ymdhis";
      if (!formatStr) {
        formatStr = "y-m-d h:i:s";
      }
      let formatArr = [
        [...timeArr].splice(0, 4).join(""),
        [...timeArr].splice(4, 2).join(""),
        [...timeArr].splice(6, 2).join(""),
        [...timeArr].splice(8, 2).join(""),
        [...timeArr].splice(10, 2).join(""),
        [...timeArr].splice(12, 2).join("")
      ];
      for (let i = 0; i < formatArr.length; i++) {
        formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
      }
      return formatStr;
    }
    return timeStr;
  },
  rgbToHex(r, g, b) {
    return "#" + utils._toHex(r) + utils._toHex(g) + utils._toHex(b);
  },
  _toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n))
      return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
  },
  hexToRGB(hex) {
    if (hex.length === 4) {
      let text = hex.substring(1, 4);
      hex = "#" + text + text;
    }
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  },
  unique(n) {
    n = n || 6;
    let rnd = "";
    for (let i = 0; i < n; i++)
      rnd += Math.floor(Math.random() * 10);
    return "firstui_" + new Date().getTime() + rnd;
  },
  getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      return (c === "x" ? Math.random() * 16 | 0 : "r&0x3" | "0x8").toString(16);
    });
  },
  distinctArray(arr1, arr2) {
    arr1 = arr1 || [];
    arr2 = arr2 || [];
    return [.../* @__PURE__ */ new Set([...arr1, ...arr2])];
  },
  getDateTimeSlot(type) {
    let now = new Date();
    let start = now.toDateString();
    let end = now.toDateString();
    switch (type) {
      case 1:
        start = `${start} 00:00:00`;
        end = `${end} 23:59:59`;
        break;
      case 2:
        now.setTime(now.getTime() - 3600 * 1e3 * 24 * 1);
        start = `${now.toDateString()} 00:00:00`;
        end = `${now.toDateString()} 23:59:59`;
        break;
      case 3:
        let weekday = now.getDay() || 7;
        now.setDate(now.getDate() - weekday + 1);
        start = `${now.toDateString()} 00:00:00`;
        end = `${end} 23:59:59`;
        break;
      case 4:
        start = `${now.getFullYear()}-${now.getMonth() + 1}-01 00:00:00`;
        end = `${end} 23:59:59`;
        break;
      case 5:
        start = `${now.getFullYear()}-01-01 00:00:00`;
        end = `${end} 23:59:59`;
        break;
    }
    return {
      start: new Date(start.replace(/\-/g, "/")),
      end: new Date(end.replace(/\-/g, "/"))
    };
  },
  getUrlParam(url) {
    let arrObj = url.split("?");
    let params = {};
    if (arrObj.length > 1) {
      arrObj = arrObj[1].split("&");
      arrObj.forEach((item) => {
        item = item.split("=");
        params[item[0]] = item[1];
      });
    }
    return params;
  },
  debounce(func, wait = 1e3, immediate = true) {
    let timer;
    return function() {
      let context = this, args = arguments;
      if (timer)
        clearTimeout(timer);
      if (immediate) {
        let callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        if (callNow)
          func.apply(context, args);
      } else {
        timer = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      }
    };
  },
  throttle(func, wait = 1e3, type = 1) {
    let previous = 0;
    let timeout;
    return function() {
      let context = this;
      let args = arguments;
      if (type === 1) {
        let now = Date.now();
        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        }
      }
    };
  }
};
const utils$1 = {
  titleCase: utils.titleCase,
  compressLetter: utils.compressLetter,
  sleep: utils.sleep,
  trim: utils.trim,
  trimAll: utils.trimAll,
  replaceAll: utils.replaceAll,
  numberFormatter: utils.numberFormatter,
  moneyFormatter: utils.moneyFormatter,
  dateFormatter: utils.dateFormatter,
  rgbToHex: utils.rgbToHex,
  hexToRGB: utils.hexToRGB,
  unique: utils.unique,
  distinctArray: utils.distinctArray,
  getDateTimeSlot: utils.getDateTimeSlot,
  getUrlParam: utils.getUrlParam,
  getUUID: utils.getUUID,
  debounce: utils.debounce,
  throttle: utils.throttle
};
exports.utils = utils$1;
