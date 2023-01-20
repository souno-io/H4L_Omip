"use strict";
let itemList = [{
  "date": "2022-09-01",
  "name": "FirstUI 1",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"
}, {
  "date": "2022-09-02",
  "name": "FirstUI 2",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"
}, {
  "date": "2022-09-03",
  "name": "FirstUI 3",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"
}, {
  "date": "2022-09-04",
  "name": "FirstUI 4",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"
}, {
  "date": "2022-09-05",
  "name": "FirstUI 5",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"
}, {
  "date": "2022-09-06",
  "name": "FirstUI 6",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"
}, {
  "date": "2022-09-07",
  "name": "FirstUI 7",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"
}, {
  "date": "2022-09-08",
  "name": "FirstUI 8",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"
}, {
  "date": "2022-09-09",
  "name": "FirstUI 9",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"
}, {
  "date": "2022-09-10",
  "name": "FirstUI 10",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"
}, {
  "date": "2022-09-11",
  "name": "FirstUI 11",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"
}, {
  "date": "2022-09-12",
  "name": "FirstUI 12",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"
}, {
  "date": "2022-09-13",
  "name": "FirstUI 13",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"
}, {
  "date": "2022-09-14",
  "name": "FirstUI 14",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"
}, {
  "date": "2022-09-15",
  "name": "FirstUI 15",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"
}, {
  "date": "2022-09-16",
  "name": "FirstUI 16",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"
}, {
  "date": "2022-09-01",
  "name": "FirstUI 17",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"
}, {
  "date": "2022-09-02",
  "name": "FirstUI 18",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"
}, {
  "date": "2022-09-03",
  "name": "FirstUI 19",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04"
}, {
  "date": "2022-09-04",
  "name": "FirstUI 20",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04"
}, {
  "date": "2022-09-05",
  "name": "FirstUI 21",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04"
}, {
  "date": "2022-09-06",
  "name": "FirstUI 22",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A",
  "address": "\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04"
}];
let table = [{
  "name": "FirstUI 1",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A"
}, {
  "name": "FirstUI 2",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A"
}, {
  "name": "FirstUI 3",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A"
}, {
  "name": "FirstUI 4",
  "province": "\u4E0A\u6D77",
  "city": "\u666E\u9640\u533A"
}];
const data = {
  table,
  itemList
};
exports.data = data;
