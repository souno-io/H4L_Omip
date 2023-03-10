"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      version: "",
      date: "",
      logList: {
        "V1.0.0": [
          "First UI \u6B63\u5F0F\u4E0A\u7EBF\uFF0C\u672C\u6B21\u66F4\u65B0\u5982\u4E0B\uFF1A",
          "\u65B0\u589E Color \u8272\u5F69\uFF0CFirst UI\u7528\u8272\u6307\u5357",
          "\u65B0\u589E Icon \u56FE\u6807\u7EC4\u4EF6\uFF0CFirst UI\u5B57\u4F53\u56FE\u6807\u5E93",
          "\u65B0\u589E Button \u6309\u94AE\u7EC4\u4EF6",
          "\u65B0\u589E Footer \u9875\u811A\u7EC4\u4EF6",
          "\u65B0\u589E Animation \u52A8\u753B\u7EC4\u4EF6",
          "\u65B0\u589E StatusBar \u72B6\u6001\u680F\u5360\u4F4D\u7EC4\u4EF6",
          "\u65B0\u589E Layout \u6805\u683C\u5E03\u5C40\u7EC4\u4EF6\uFF08fui-row\u548Cfui-col\uFF09",
          "\u65B0\u589E Grid \u5BAB\u683C\u7EC4\u4EF6\uFF08fui-grid\u548Cfui-grid-item\uFF09",
          "\u65B0\u589E List \u5217\u8868\u7EC4\u4EF6\uFF08fui-list\u548Cfui-list-cell\uFF09",
          "\u65B0\u589E Card \u5361\u7247\u7EC4\u4EF6",
          "\u65B0\u589E Input \u8F93\u5165\u6846\u7EC4\u4EF6",
          "\u65B0\u589E InputNumber \u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6",
          "\u65B0\u589E Label \u6807\u7B7E\u7EC4\u4EF6",
          "\u65B0\u589E FormField \u8868\u5355\u6570\u636E\u4F20\u9012\u7EC4\u4EF6",
          "\u65B0\u589E Radio \u5355\u9009\u6846\u7EC4\u4EF6",
          "\u65B0\u589E Checkbox \u590D\u9009\u6846\u7EC4\u4EF6",
          "\u65B0\u589E Switch \u5F00\u5173\u7EC4\u4EF6",
          "\u65B0\u589E Textarea \u591A\u884C\u8F93\u5165\u6846\u7EC4\u4EF6",
          "\u65B0\u589E Loading \u52A0\u8F7D\u7EC4\u4EF6",
          "\u65B0\u589E LoadAni \u52A0\u8F7D\u52A8\u753B\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Badge \u5FBD\u7AE0\u7EC4\u4EF6",
          "\u65B0\u589E Alert \u8B66\u544A\u6846\u7EC4\u4EF6",
          "\u65B0\u589E Divider \u5206\u5272\u7EBF\u7EC4\u4EF6",
          "\u65B0\u589E LoadMore \u52A0\u8F7D\u66F4\u591A\u7EC4\u4EF6",
          "\u65B0\u589E Clipboard \u590D\u5236\u6587\u672C\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Request \u7F51\u7EDC\u8BF7\u6C42\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Utils \u5DE5\u5177\u7C7B\u7EC4\u4EF6",
          "\u65B0\u589E Poster \u7ED8\u5236\u5206\u4EAB\u6D77\u62A5\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09"
        ],
        "V1.1.0": [
          "\u8C03\u6574\u7EC4\u4EF6\u5BF9vue3\u652F\u6301\u4E0Euni-app\u5B98\u65B9\u4E00\u81F4",
          "\u65B0\u589E Panel \u9762\u677F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Preview \u8868\u5355\u9884\u89C8 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Empty \u7F3A\u7701\u9875 \u7EC4\u4EF6",
          "\u65B0\u589E SegmentedControl \u5206\u6BB5\u5668 \u7EC4\u4EF6",
          "\u65B0\u589E Pagination \u5206\u9875\u5668 \u7EC4\u4EF6",
          "\u65B0\u589E NavBar \u5BFC\u822A\u680F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Tabs \u6807\u7B7E\u9875 \u7EC4\u4EF6",
          "\u65B0\u589E Tag \u6807\u7B7E \u7EC4\u4EF6",
          "\u65B0\u589E Backdrop \u906E\u7F69\u5C42 \u7EC4\u4EF6",
          "\u65B0\u589E Result \u7ED3\u679C\u9875 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Avatar \u5934\u50CF \u7EC4\u4EF6",
          "\u65B0\u589E Form \u8868\u5355\u6821\u9A8C \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Validator \u8868\u5355\u9A8C\u8BC1\uFF08JS\uFF09\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SingleInput \u5355\u8F93\u5165\u6846 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E IndexList \u7D22\u5F15\u5217\u8868 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SearchBar \u641C\u7D22\u680F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E \u767B\u5F55\uFF08A\uFF09\u6A21\u677F\uFF08\u7269\u6599\uFF09",
          "\u65B0\u589E \u767B\u5F55\uFF08B\uFF09\u6A21\u677F\uFF08\u7269\u6599\uFF09",
          "\u65B0\u589E \u767B\u5F55\uFF08C\uFF09\u6A21\u677F\uFF08\u7269\u6599\uFF09",
          "\u65B0\u589E \u767B\u5F55\uFF08D\uFF09\u6A21\u677F\uFF08\u7269\u6599\uFF09",
          "\u4F18\u5316\u82E5\u5E72\u5DF2\u77E5\u95EE\u9898"
        ],
        "V1.2.0": [
          "\u65B0\u589E Tabbar \u6807\u7B7E\u680F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E ActionSheet \u4E0A\u62C9\u83DC\u5355 \u7EC4\u4EF6",
          "\u65B0\u589E Toast \u8F7B\u63D0\u793A \u7EC4\u4EF6",
          "\u65B0\u589E Dialog \u5BF9\u8BDD\u6846 \u7EC4\u4EF6",
          "\u65B0\u589E DropdownMenu \u4E0B\u62C9\u83DC\u5355 \u7EC4\u4EF6",
          "\u65B0\u589E DropdownList \u4E0B\u62C9\u83DC\u5355 \u7EC4\u4EF6",
          "\u65B0\u589E Modal \u6A21\u6001\u6846 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Landscape \u538B\u5C4F\u7A97 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Message \u6D88\u606F\u63D0\u793A \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E BottomPopup \u5E95\u90E8\u5F39\u51FA\u5C42 \u7EC4\u4EF6",
          "\u65B0\u589E TopPopup \u9876\u90E8\u5F39\u51FA\u5C42 \u7EC4\u4EF6",
          "\u65B0\u589E Drawer \u62BD\u5C49 \u7EC4\u4EF6",
          "\u65B0\u589E NoticeBar \u901A\u544A\u680F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E TimeAxis \u65F6\u95F4\u8F74 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Steps \u6B65\u9AA4\u6761 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Progress \u8FDB\u5EA6\u6761 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Collapse \u6298\u53E0\u9762\u677F \u7EC4\u4EF6",
          "\u65B0\u589E SwiperDot \u8F6E\u64AD\u56FE\u6307\u793A\u70B9 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E DigitalRoller \u6570\u5B57\u6EDA\u8F6E \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E DigitalKeyboard \u6570\u5B57\u952E\u76D8 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E LicensePlate \u8F66\u724C\u53F7\u952E\u76D8 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E CountdownVerify \u9A8C\u8BC1\u7801\u5012\u8BA1\u65F6 \u7EC4\u4EF6(VIP\u7EC4\u4EF6)",
          "\u65B0\u589E Sticky \u5438\u9876\u5BB9\u5668 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Fab \u6D6E\u52A8\u6309\u94AE \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E ShareSheet  \u5206\u4EAB\u9762\u677F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E FilterBar \u7B5B\u9009\u680F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SwipeAction \u6ED1\u52A8\u83DC\u5355 \u7EC4\u4EF6",
          "\u65B0\u589E Picker \u9009\u62E9\u5668 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E DatePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E \u95E8\u6237\u6A21\u677F\uFF08\u7269\u6599\uFF09",
          "\u4F18\u5316\u6389\u90E8\u5206\u7EC4\u4EF6\u4E2D\u5BF9\u5934\u6761\u5C0F\u7A0B\u5E8F\u505A\u517C\u5BB9\u7684\u5197\u4F59\u4EE3\u7801",
          "\u4F18\u5316\u82E5\u5E72\u5DF2\u77E5\u95EE\u9898"
        ],
        "V1.3.0": [
          "\u65B0\u589E Calendar \u65E5\u5386 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Cascader \u7EA7\u8054\u9009\u62E9\u5668 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Slider \u6ED1\u5757 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Rate \u8BC4\u5206 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Select \u9009\u62E9\u5668 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Upload \u56FE\u7247\u4E0A\u4F20 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Gallery \u753B\u5ECA \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E BubbleBox \u6C14\u6CE1\u6846 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E BottomNavbar \u5E95\u90E8\u5BFC\u822A\u680F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E CountDown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E CopyText \u957F\u6309\u590D\u5236 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Timer \u8BA1\u65F6\u5668 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Qrcode \u4E8C\u7EF4\u7801 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Barcode \u6761\u5F62\u7801 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Autograph \u624B\u5199\u7B7E\u540D \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u4FEE\u590D Textarea \u591A\u884C\u8F93\u5165\u6846 \u7EC4\u4EF6\u56DE\u8F66\u65E0\u6CD5\u6362\u884C\u7684\u95EE\u9898",
          "\u4F18\u5316 Request \u7F51\u7EDC\u8BF7\u6C42 \u7EC4\u4EF6\uFF0C\u65B0\u589E\u52A0\u8F7D\u4E2D\u63D0\u793A\u4FE1\u606F\u914D\u7F6E\u9879",
          "\u4F18\u5316 Icon \u56FE\u6807 \u7EC4\u4EF6\uFF0C\u65B0\u589E\u90E8\u5206\u56FE\u6807",
          "\u4F18\u5316\u82E5\u5E72\u5DF2\u77E5\u95EE\u9898"
        ],
        "V1.4.0": [
          "\u65B0\u589E Circle \u5706\u5F62\u8FDB\u5EA6\u6761 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Skeleton \u9AA8\u67B6\u5C4F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E CubicBezier \u8D1D\u585E\u5C14\u66F2\u7EBF \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SlideVerify \u6ED1\u52A8\u9A8C\u8BC1 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E RotateVerify \u65CB\u8F6C\u9A8C\u8BC1 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SliderCaptcha \u6ED1\u5757\u62FC\u56FE\u9A8C\u8BC1 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E OverflowHidden \u5185\u5BB9\u8D85\u51FA\u9690\u85CF \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Backtop \u56DE\u5230\u9876\u90E8 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Lazyload \u56FE\u7247\u61D2\u52A0\u8F7D \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Waterfall \u7011\u5E03\u6D41 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u4F18\u5316\u90E8\u5206\u7EC4\u4EF6\u5728vue3\u4E0B\u663E\u793A\u5F02\u5E38\uFF0C\u63A7\u5236\u53F0\u62A5\u51FA\u8B66\u544A\u7684\u95EE\u9898",
          "\u4F18\u5316 Upload \u4E0A\u4F20 \u7EC4\u4EF6\u3002\u65B0\u589E\u5C5E\u6027\u8BBE\u7F6E\u5220\u9664\u56FE\u7247\u65F6\u662F\u5426\u5F39\u6846\u786E\u8BA4\uFF1B\u56FE\u7247\u4E0A\u4F20\u6570\u5230\u8FBE\u9650\u5236\u6570max\u65F6\u9690\u85CF\u9009\u62E9\u6846",
          "\u4FEE\u590D Preview \u8868\u5355\u9884\u89C8 \u7EC4\u4EF6\u6539\u53D8\u6570\u636E\u9875\u9762\u4E0D\u66F4\u65B0\u7684bug",
          "\u4F18\u5316 Button \u6309\u94AE \u7EC4\u4EF6\u5728Nvue\u4EE5\u53CAPC\u4E2D\u7684\u70B9\u51FB\u6548\u679C",
          "\u4F18\u5316 Card \u5361\u7247 \u7EC4\u4EF6\u5728Nvue\u4E2D\u6837\u5F0F\u663E\u793A\u4E0D\u6B63\u786E\u7684\u95EE\u9898",
          "\u4F18\u5316 Message \u6D88\u606F\u63D0\u793A \u7EC4\u4EF6\uFF0C\u90E8\u5206props\u5C5E\u6027\u53EF\u5728show\u65B9\u6CD5\u4E2D\u4F20\u503C\u8986\u76D6",
          "\u4F18\u5316 Select \u9009\u62E9\u5668 \u7EC4\u4EF6\uFF0C\u4FEE\u590D\u5355\u9009\u65F6\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u9879\u65E0\u6548\u7684\u95EE\u9898",
          "\u4F18\u5316 CountDown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\uFF0C\u4FEE\u590D\u521D\u59CB\u5316\u4F200\u89E6\u53D1\u5012\u8BA1\u65F6\u7ED3\u675F\u4E8B\u4EF6\u7684\u95EE\u9898",
          "\u4FEE\u590D Layout \u6805\u683C\u5E03\u5C40 \u7EC4\u4EF6\u5C5E\u6027gutter\u4E0D\u751F\u6548\u7684bug",
          "\u4FEE\u590D InputNumber \u6570\u5B57\u8F93\u5165\u6846 \u7EC4\u4EF6\u5728vue3\u4E0B blur \u4E8B\u4EF6\u672A\u5728emits\u4E2D\u7533\u660E\u7684\u95EE\u9898",
          "\u4F18\u5316\u82E5\u5E72\u5DF2\u77E5\u95EE\u9898"
        ],
        "V1.5.0": [
          "\u65B0\u589E Vtabs \u7EB5\u5411\u9009\u9879\u5361 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E PuzzleVerify \u6ED1\u5757\u62FC\u56FE\u9A8C\u8BC1 \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09\uFF0C\u6B64\u7EC4\u4EF6\u4E3A SliderCaptcha \u6ED1\u5757\u62FC\u56FE\u9A8C\u8BC1 \u7EC4\u4EF6\u7684\u529F\u80FD\u8865\u5145\u3002[\u8BE6\u89C1](https://forum.firstui.cn/d/48)",
          "\u65B0\u589E Drag \u62D6\u62FD\u6392\u5E8F \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E ImageCropper \u56FE\u7247\u88C1\u526A \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E Table \u8868\u683C \u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "Utils \u5DE5\u5177 \u7C7B\u7EC4\u4EF6\u65B0\u589E\u51FD\u6570\u8282\u6D41\u65B9\u6CD5\u4F7F\u7528\u6848\u4F8B",
          "Badge \u5FBD\u7AE0 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589Emax\u5C5E\u6027\uFF0C\u5F53\u503C\u8D85\u8FC7max\u65F6\u4F7F\u7528+\u53F7\u4EE3\u66FF\uFF0C\u4EC5\u4E3A\u6570\u5B57\u65F6\u6709\u6548",
          "SingleInput \u5355\u8F93\u5165\u6846\u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u6E05\u7A7A\u65B9\u6CD5\u91CD\u7F6E\u8F93\u5165\u503C\uFF08\u7ED3\u5408\u539F\u751F\u952E\u76D8\u65F6\u4F7F\u7528\uFF09",
          "Button \u6309\u94AE \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7AEF@click\u4E8B\u4EF6\u4E2D\u8C03\u7528wx.getUserProfile\u65E0\u6548\u7684\u95EE\u9898\u4EE5\u53CA\u5728subNVue\u4E2D\u70B9\u51FB\u4E8B\u4EF6\u5931\u6548\u7684\u95EE\u9898",
          "Form \u8868\u5355\u6821\u9A8C \u793A\u4F8B\u65B0\u589E\u5176\u4ED6\u8868\u5355\u5143\u7D20\uFF0C\u6EE1\u8DB3\u66F4\u591A\u8868\u5355\u9700\u6C42",
          "Icon \u56FE\u6807 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u652F\u6301\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u8BE6\u89C1\u6587\u6863\u8BF4\u660E",
          "DropdownMenu \u4E0B\u62C9\u83DC\u5355 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u652F\u6301nvue",
          "Input \u8F93\u5165\u6846 \u7EC4\u4EF6\u4F18\u5316 \uFF0C\u65B0\u589E number \u5C5E\u6027\uFF0C\u4FEE\u590Dv-model.number\u5728\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u503C\u672A\u8F6C\u5316\u4E3ANumber\u7C7B\u578B\u95EE\u9898",
          "\u4FEE\u590D Grid \u5BAB\u683C \u7EC4\u4EF6 ref \u88AB\u8BEF\u5220\u9664\u5BFC\u81F4\u62A5\u9519\u7684\u95EE\u9898",
          "\u4FEE\u590D\u5E76\u4F18\u5316 Circle \u5706\u5F62\u8FDB\u5EA6\u6761 \u7EC4\u4EF6\u5728nvue\u7AEF\u51FA\u9519\u7684\u95EE\u9898",
          "\u4FEE\u590Dvue2\u4E0B\u4F7F\u7528wxs\u521D\u59CB\u5316\u65F6\u53EF\u80FD\u62A5\u9519\u7684\u95EE\u9898",
          "ActionSheet \u4E0A\u62C9\u83DC\u5355 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "BottomNavbar \u5E95\u90E8\u5BFC\u822A\u680F \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "BottomPopup \u5E95\u90E8\u5F39\u51FA\u5C42 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "DigitalKeyboard \u6570\u5B57\u952E\u76D8 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "Footer \u9875\u811A \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "Gallery \u753B\u5ECA \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "LicensePlate \u8F66\u724C\u53F7\u952E\u76D8 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "Select \u9009\u62E9\u5668 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "ShareSheet \u5206\u4EAB\u9762\u677F \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "Tabbar \u6807\u7B7E\u680F \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 safeArea \u63A7\u5236\u662F\u5426\u9700\u8981\u9002\u914D\u5E95\u90E8\u5B89\u5168\u533A\u57DF",
          "BottomPopup \u5E95\u90E8\u5F39\u51FA\u5C42 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4F18\u5316Nvue\u4E0B\u8BBE\u7F6E\u9876\u90E8\u5706\u89D2\u503C\u65F6IOS\u5E95\u90E8\u5076\u5C14\u51FA\u73B0\u5706\u89D2\u7684\u95EE\u9898",
          "\u4F18\u5316\u82E5\u5E72\u5DF2\u77E5\u95EE\u9898"
        ],
        "V1.6.0": [
          "\u65B0\u589E\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\uFF0C\u76EE\u524D\u4EC5\u9488\u5BF9\u90E8\u5206\u5E38\u7528\u7EC4\u4EF6\u5904\u7406\uFF0C\u8BE6\u89C1\u6587\u6863 [\u5168\u5C40\u914D\u7F6E]",
          "\u65B0\u589E Text \u6587\u672C\u7EC4\u4EF6",
          "\u65B0\u589E spin \u65CB\u8F6C\u52A8\u753B\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SafeArea \u5E95\u90E8\u5B89\u5168\u533A\u57DF\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E DataTag \u6807\u7B7E\u9009\u62E9\u7EC4\u4EF6\uFF08VIP\u7EC4\u4EF6\uFF09",
          "\u65B0\u589E SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E GoodsBar \u5546\u54C1\u5BFC\u822A\u680F \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E ChatBar \u804A\u5929\u680F \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E RollNews \u6EDA\u52A8\u6D88\u606F \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E CardSwiper \u5361\u7247\u8F6E\u64AD \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "BubbleBox \u6C14\u6CE1\u6846 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5185\u5BB9\u63D2\u69FD\uFF08content\uFF09\uFF0C\u53EF\u81EA\u5B9A\u4E49\u6C14\u6CE1\u6846\u5185\u5BB9\uFF1B\u65B0\u589E\u5C5E\u6027 padding\uFF0C\u7528\u4E8E\u8C03\u6574\u6C14\u6CE1\u6846\u5185\u7F6E\u5185\u5BB9item\u9879padding\u503C",
          "LoadMore \u52A0\u8F7D\u66F4\u591A \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027 state \u63A7\u5236\u7EC4\u4EF6\u663E\u793A\u72B6\u6001",
          "Backdrop \u906E\u7F69\u5C42 \u7EC4\u4EF6\u4F18\u5316\uFF0CNvue\u7AEF\u53BB\u9664v-if\u4F7F\u7528\uFF0C\u4FEE\u590Dfixed\u5B9A\u4F4D\u65F6\u906E\u6321\u4F4D\u7F6E\u9760\u540E\u7684fixed\u5143\u7D20\u95EE\u9898\uFF1BNvue\u7AEF\u65B0\u589E\u5C5E\u6027full\uFF0C\u5F53\u7EC4\u4EF6\u653E\u7F6E\u6839\u5143\u7D20\u4E0B\u4E14\u4E3Aabsolute\u5B9A\u4F4D\u65F6\u53EF\u8BBE\u7F6E\u906E\u7F69\u94FA\u6EE1\u5C4F\u5E55",
          "Poster \u7ED8\u5236\u5206\u4EAB\u6D77\u62A5 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u7F16\u8BD1\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u529F\u80FD\u5931\u6548\u7684\u95EE\u9898",
          "Qrcode \u4E8C\u7EF4\u7801 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u7F16\u8BD1\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u529F\u80FD\u5931\u6548\u7684\u95EE\u9898",
          "Barcode \u6761\u5F62\u7801 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u7F16\u8BD1\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u529F\u80FD\u5931\u6548\u7684\u95EE\u9898",
          "Autograph \u624B\u5199\u7B7E\u540D \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u7F16\u8BD1\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u529F\u80FD\u5931\u6548\u7684\u95EE\u9898",
          "Table \u8868\u683C \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u8BBE\u7F6E\u56FE\u7247\u7C7B\u578B\u663E\u793A\u9519\u8BEF\u7684\u95EE\u9898",
          "Textarea \u591A\u884C\u8F93\u5165\u6846\u7EC4\u4EF6\u4F18\u5316\uFF0C\u8C03\u6574maxlength\u8BBE\u4E3A-1\u65F6\uFF0C\u53CC\u5411\u7ED1\u5B9A\u4E0D\u751F\u6548\u7684\u95EE\u9898",
          "Button \u6309\u94AE \u7EC4\u4EF6\u4F18\u5316\uFF0C\u9ED8\u8BA4\u8C03\u6574\u4E3A\u7EC6\u8FB9\u6846\uFF080.5px\uFF09",
          "Picker \u9009\u62E9\u5668 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u5DF2\u77E5\u95EE\u9898",
          "DatePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u5DF2\u77E5\u95EE\u9898",
          "Badge \u5FBD\u7AE0 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590DNvue\u7AEF\u53EF\u80FD\u51FA\u73B0\u6587\u672C\u88AB\u622A\u65AD\u7684\u60C5\u51B5",
          "\u4F18\u5316\u82E5\u5E72\u5DF2\u77E5\u95EE\u9898"
        ],
        "V1.7.0": [
          "\u65B0\u589E WATERFALL \u7011\u5E03\u6D41\u52A0\u8F7D \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E TOP TAB \u9876\u90E8\u9009\u9879\u5361 \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E NEWS LIST \u65B0\u95FB\u5217\u8868 \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E PRODUCT LIST \u5546\u54C1\u5217\u8868 \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E MAP \u5730\u56FE \u5E03\u5C40\u5185\u5BB9-\u7EBF\u8DEF\u89C4\u5212\uFF08VIP\uFF09",
          "\u65B0\u589E ROLL HORIZONTAL \u6A2A\u5411\u6EDA\u52A8 \u5E03\u5C40\u5185\u5BB9\uFF08VIP\uFF09",
          "\u65B0\u589E UploadVideo \u89C6\u9891\u4E0A\u4F20 \u7EC4\u4EF6\uFF08VIP\uFF09",
          "\u65B0\u589E FormItem \u8868\u5355\u9879 \u7EC4\u4EF6\uFF08VIP\uFF09",
          "Label \u6807\u7B7E \u7EC4\u4EF6\u4F18\u5316",
          "Card \u5361\u7247 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589EfooterLine\u5C5E\u6027",
          "InputNumber \u6570\u5B57\u8F93\u5165\u6846 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u6700\u5C0F\u503C\u8BBE\u4E3A\u8D1F\u6570\u4E0D\u751F\u6548\u7684\u95EE\u9898\uFF0C\u65B0\u589Etype\u5C5E\u6027\u5F53\u8BBE\u503C\u4E3Atext\u5219\u53EF\u8F93\u5165\u8D1F\u53F7\u5C0F\u6570\u70B9\u7B49",
          "Panel \u9762\u677F \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027\u914D\u7F6E\u6570\u636E\u6E90\u952E\u503C\uFF08key\uFF09",
          "Preview \u8868\u5355\u9884\u89C8 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027\u914D\u7F6E\u6570\u636E\u6E90\u952E\u503C\uFF08key\uFF09\uFF0C\u4FEE\u590D\u90E8\u5206\u517C\u5BB9\u95EE\u9898",
          "Input \u8F93\u5165\u6846 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589Emin\u548Cmax\u5C5E\u6027\uFF0C\u5F53type=number\u3001type=digit\u3001number\u5C5E\u6027\u4E3Atrue\u65F6\u751F\u6548",
          "LicensePlate \u8F66\u724C\u53F7\u952E\u76D8 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u65B9\u6CD5 changeKeyboard \u5207\u6362\u952E\u76D8\u663E\u793A",
          "ImageCropper \u56FE\u7247\u88C1\u526A \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590D\u5DF2\u77E5bug",
          "Grid \u5BAB\u683C \u7EC4\u4EF6\u4F18\u5316",
          "Textarea \u591A\u884C\u8F93\u5165\u6846\u7EC4\u4EF6\u5DF2\u77E5\u95EE\u9898\u4F18\u5316",
          "Input \u8F93\u5165\u6846 \u7EC4\u4EF6\u5DF2\u77E5\u95EE\u9898\u4F18\u5316",
          "Text \u6587\u672C \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u90E8\u5206\u5C5E\u6027\uFF08props\uFF09",
          "Button \u6309\u94AE \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590Dnvue\u7AEF\u6837\u5F0Fbackground\u52A0!important\u62A5\u9519\u7684\u95EE\u9898",
          "Waterfall \u7011\u5E03\u6D41 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u8BF7\u53C2\u8003\u3010\u5E03\u5C40-\u7011\u5E03\u6D41\u3011\u793A\u4F8B\u505A\u52A0\u8F7D\u5237\u65B0\u64CD\u4F5C",
          "DatePicker \u65E5\u671F\u65F6\u95F4\u9009\u62E9\u5668 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590Dtype=1\u65F6\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u5931\u6548\u7684\u95EE\u9898\uFF0C\u4FEE\u590D\u533A\u95F4\u9009\u62E9\u8BBE\u7F6E\u8D77\u59CB\u65E5\u671F\u6587\u672C\u51FA\u9519\u7684\u95EE\u9898",
          "Landscape \u538B\u5C4F\u7A97 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u5C5E\u6027\u652F\u6301absolute\u5B9A\u4F4D\uFF0C\u4EE5\u4FBF\u7528\u4E8E\u5176\u4ED6\u7EC4\u4EF6\u5185",
          "Validator \u8868\u5355\u9A8C\u8BC1\uFF08JS\uFF09\u7EC4\u4EF6\u4F18\u5316\uFF0C\u652F\u6301\u6821\u9A8C\u6240\u6709\u5143\u7D20\u5E76\u8FD4\u56DE\u6240\u6709\u9519\u8BEF\u4FE1\u606F",
          "Form \u8868\u5355\u6821\u9A8C \u7EC4\u4EF6\u4F18\u5316\uFF0C\u652F\u6301\u6821\u9A8C\u6240\u6709\u5143\u7D20\u5E76\u8FD4\u56DE\u6240\u6709\u9519\u8BEF\u4FE1\u606F",
          "Radio \u5355\u9009\u6846 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590DNvue\u7AEFvue3\u4E0B\u53EF\u80FD\u663E\u793A\u4E0D\u6B63\u786E\u7684\u95EE\u9898",
          "Checkbox \u590D\u9009\u6846 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590DNvue\u7AEFvue3\u4E0B\u53EF\u80FD\u663E\u793A\u4E0D\u6B63\u786E\u7684\u95EE\u9898",
          "Switch \u5F00\u5173 \u7EC4\u4EF6\u4F18\u5316\uFF0C\u4FEE\u590DNvue\u7AEFvue3\u4E0B\u53EF\u80FD\u663E\u793A\u4E0D\u6B63\u786E\u7684\u95EE\u9898",
          "OverflowHidden \u5185\u5BB9\u8D85\u51FA\u9690\u85CF \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u90E8\u5206\u5C5E\u6027",
          "Lazyload \u56FE\u7247\u61D2\u52A0\u8F7D \u7EC4\u4EF6\u4F18\u5316\uFF0C\u65B0\u589E\u90E8\u5206\u5C5E\u6027",
          "\u4FEE\u590D\u90E8\u5206\u5DF2\u77E5\u95EE\u9898"
        ]
      },
      logs: []
    };
  },
  onLoad(e) {
    this.date = e.date || "2021-07-26";
    this.version = e.version || "V1.0.0";
    this.logs = this.logList[this.version] || ["\u5F00\u53D1\u4E2D~"];
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
    a: common_vendor.t($data.version),
    b: common_vendor.t($data.date),
    c: common_vendor.p({
      ["bottom-right"]: "32",
      highlight: false
    }),
    d: common_vendor.f($data.logs, (item, index, i0) => {
      return common_vendor.e($data.logs.length > 1 ? {} : {}, {
        a: common_vendor.t(item),
        b: index
      });
    }),
    e: $data.logs.length > 1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/H4L_Omip/MiniPoint/h4l-omip/pages/my/log/log.vue"]]);
my.createPage(MiniProgramPage);
