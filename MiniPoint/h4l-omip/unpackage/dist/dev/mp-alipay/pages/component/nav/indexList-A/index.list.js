"use strict";
const lists = [{
  letter: "\u2605",
  descr: "\u2605 \u661F\u6807\u670B\u53CB",
  data: [{
    text: "FirstUI",
    src: "/static/images/common/img_logo.png"
  }, {
    text: "\u7238\u7238",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u5988\u5988",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "A",
  data: [{
    text: "\u963F\u6770",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "A \u751C\u5FC3",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u963F\u5A01",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "Aaron",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "B",
  data: [{
    text: "\u7238\u7238",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u6BD5\u679C",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u522B\u4EA6\u96BE",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u658C\u658C",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u51B0\u51B0",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u5175\u5175\u5175",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "C",
  data: [{
    text: "c.",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "Carry",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u6D4B\u8BD5-\u5C0F\u5F20",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u4EA7\u54C1\u7ECF\u7406",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "CoCo",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "D",
  data: [{
    text: "\u5927\u6CB3\u9A6C",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "Daisy",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u53EE\u53EE",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "E",
  data: [{
    text: "emmi",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "eqq",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "F",
  data: [{
    text: "Fast",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u98CE\u5C45",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "FirstUI",
    src: "/static/images/common/img_logo.png"
  }]
}, {
  letter: "G",
  data: [{
    text: "\u611F\u6069",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u5E72\u996D\u4EBA",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u516C\u5BD3\u5C0F\u533A",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "H",
  data: [{
    text: "\u54C8\u54C8",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u6D77\u7EF5",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u539A\u5FB7\u8F7D\u7269",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "I",
  data: []
}, {
  letter: "J",
  data: [{
    text: "Jennie",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u6C5F\u6708\u660E",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u7ECF\u7406",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "K",
  data: [{
    text: "\u5F00\u5B66\u4E86",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "Kevin",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u7A7A\u8C37\u5E7D\u5170",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "L",
  data: [{
    text: "L-Zz",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u8001\u8D39",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u674E\u7F8E\u4E3D",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "M",
  data: [{
    text: "\u5988\u5988",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u8292\u679C\u5473\u7684\u6A59\u5B50",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "Me",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "N",
  data: [{
    text: "NeiL",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u725B\u6C14\u51B2\u5929",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u8BFA\u8A00",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "O",
  data: [{
    text: "\u6B27\u5927\u5927",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u6B27-HR",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "P",
  data: [{
    text: "Peter",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u84B2\u516C\u82F1",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "Q",
  data: [{
    text: "\u4E03\u8BED",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u5168\u7403\u65F6\u523B",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "R",
  data: [{
    text: "\u5189\u4E0D\u4E09",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "Rose",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "S",
  data: [{
    text: "sandy",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u65F6\u5149\u5306\u5306",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "T",
  data: [{
    text: "\u8C2D\u4E94",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "\u7530\u516D",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "U",
  data: []
}, {
  letter: "V",
  data: []
}, {
  letter: "W",
  data: [{
    text: "\u738B\u4E0D\u4F11",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "X",
  data: [{
    text: "\u897F\u7EA2\u67FF\u7092\u9E21\u86CB",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "Y",
  data: [{
    text: "\u70DF\u82B1\u6613\u51B7",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "Z",
  data: [{
    text: "\u4E2D\u56FD\u7535\u4FE1",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}, {
  letter: "#",
  data: [{
    text: "69\u53F7\u516C\u5BD3",
    src: "/static/images/common/icon_tabbar_2x.png"
  }, {
    text: "2513",
    src: "/static/images/common/icon_tabbar_2x.png"
  }]
}];
exports.lists = lists;
