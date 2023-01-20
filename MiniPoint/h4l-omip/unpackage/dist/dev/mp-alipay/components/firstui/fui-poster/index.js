"use strict";
const common_vendor = require("../../../common/vendor.js");
/*!
 * 生成海报
 * poster - v1.0.0 (2021/7/19, 16:52:14 PM)
 *
 * 官网地址：https://firstui.cn/
 * 文档地址：https://doc.firstui.cn/
 */
const poster = {
  _pixelRatio: 2,
  _ctx: null,
  _canvasId: null,
  _this: null,
  create(pixelRatio, canvasId, _this) {
    poster._pixelRatio = pixelRatio;
    poster._canvasId = canvasId;
    poster._this = _this;
    poster._ctx = common_vendor.index.createCanvasContext(canvasId, _this);
  },
  _toPx(rpx) {
    return common_vendor.index.upx2px(rpx * poster._pixelRatio);
  },
  _getTextWidth(context, text, fontSize) {
    let width = 0;
    let sum = 0;
    for (let i = 0, len = text.length; i < len; i++) {
      if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 255)
        sum = sum + 1;
      else
        sum = sum + 2;
    }
    width = sum / 2 * poster._toPx(fontSize);
    return width;
  },
  _wrapText(text, fontSize, textWidth, width, context, rows = 2) {
    let textArr = [];
    if (textWidth > width) {
      let fillText = "";
      let lines = 1;
      let arr = text.split("");
      for (let i = 0, len = arr.length; i < len; i++) {
        fillText = fillText + arr[i];
        if (poster._getTextWidth(context, fillText, fontSize) >= width) {
          if (lines === rows && rows !== -1) {
            if (i !== arr.length - 1) {
              fillText = fillText.substring(0, fillText.length - 1) + "...";
            }
            textArr.push(fillText);
            break;
          }
          textArr.push(fillText);
          fillText = "";
          lines++;
        } else if (i === arr.length - 1) {
          textArr.push(fillText);
        }
      }
    } else {
      textArr.push(text);
    }
    return textArr;
  },
  _drawText(context, params) {
    let {
      x,
      y,
      fontSize,
      color,
      baseLine = "normal",
      textAlign = "left",
      frontText,
      frontSize,
      spacing,
      text,
      opacity = 1,
      lineThrough = false,
      width = 500,
      rows = 1,
      lineHeight = 0,
      fontWeight = "normal",
      fontStyle = "normal",
      fontFamily = "sans-serif"
    } = params;
    context.save();
    context.beginPath();
    context.font = fontStyle + " " + fontWeight + " " + poster._toPx(fontSize) + "px " + fontFamily;
    context.setGlobalAlpha(opacity);
    context.setFillStyle(color);
    context.setTextBaseline(baseLine);
    context.setTextAlign(textAlign);
    let textWidth = poster._getTextWidth(context, text, fontSize);
    width = poster._toPx(width);
    let textArr = poster._wrapText(text, fontSize, textWidth, width, context, rows);
    if (frontText) {
      context.setFontSize(poster._toPx(frontSize));
      x = poster._getTextWidth(context, frontText, frontSize) + poster._toPx(x + spacing);
      context.setFontSize(poster._toPx(fontSize));
    } else {
      x = poster._toPx(x);
    }
    textArr.forEach((item, index) => {
      context.fillText(item, x, poster._toPx(y + (lineHeight || fontSize) * index));
    });
    context.restore();
    if (lineThrough) {
      let lineY = y;
      switch (baseLine) {
        case "top":
          lineY += fontSize / 2 + 4;
          break;
        case "middle":
          break;
        case "bottom":
          lineY -= fontSize / 2 + 4;
          break;
        default:
          lineY -= fontSize / 2 - 4;
          break;
      }
      context.save();
      context.moveTo(x, poster._toPx(lineY));
      context.lineTo(x + textWidth + 2, poster._toPx(lineY));
      context.setStrokeStyle(color);
      context.stroke();
      context.restore();
    }
  },
  _drawRadiusRect(context, params) {
    let {
      x,
      y,
      width,
      height,
      borderRadius
    } = params;
    let r = poster._toPx(borderRadius / 2);
    x = poster._toPx(x);
    y = poster._toPx(y);
    width = poster._toPx(width);
    height = poster._toPx(height);
    context.beginPath();
    context.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);
    context.moveTo(x + r, y);
    context.lineTo(x + width - r, y);
    context.lineTo(x + width, y + r);
    context.arc(x + width - r, y + r, r, Math.PI * 1.5, Math.PI * 2);
    context.lineTo(x + width, y + height - r);
    context.lineTo(x + width - r, y + height);
    context.arc(x + width - r, y + height - r, r, 0, Math.PI * 0.5);
    context.lineTo(x + r, y + height);
    context.lineTo(x, y + height - r);
    context.arc(x + r, y + height - r, r, Math.PI * 0.5, Math.PI);
    context.lineTo(x, y + r);
    context.lineTo(x + r, y);
  },
  _drawImage(context, params) {
    let {
      imgResource,
      x,
      y,
      width,
      height,
      sx,
      sy,
      sw,
      sh,
      borderRadius = 0,
      borderWidth = 0,
      borderColor
    } = params;
    context.save();
    if (borderRadius > 0) {
      this._drawRadiusRect(context, params);
      context.strokeStyle = "rgba(255,255,255,0)";
      context.stroke();
      context.clip();
    }
    if (sw && sh) {
      context.drawImage(
        imgResource,
        poster._toPx(sx),
        poster._toPx(sy),
        poster._toPx(sw),
        poster._toPx(sh),
        poster._toPx(x),
        poster._toPx(y),
        poster._toPx(width),
        poster._toPx(height)
      );
    } else {
      context.drawImage(imgResource, poster._toPx(x), poster._toPx(y), poster._toPx(width), poster._toPx(
        height
      ));
    }
    if (borderWidth && borderWidth > 0) {
      context.setStrokeStyle(borderColor);
      context.setLineWidth(poster._toPx(borderWidth));
      context.stroke();
    }
    context.restore();
  },
  _drawBlock(context, params) {
    let {
      width,
      height,
      x,
      y,
      borderWidth,
      backgroundColor,
      gradientColor,
      gradientType = 1,
      borderColor,
      borderRadius = 0,
      opacity = 1,
      shadow
    } = params;
    if (backgroundColor) {
      context.save();
      context.setGlobalAlpha(opacity);
      if (gradientColor) {
        let grd = null;
        if (gradientType == 1) {
          grd = context.createLinearGradient(0, 0, poster._toPx(width), poster._toPx(height));
        } else {
          grd = context.createLinearGradient(0, poster._toPx(width), poster._toPx(height), 0);
        }
        grd.addColorStop(0, backgroundColor);
        grd.addColorStop(1, gradientColor);
        context.setFillStyle(grd);
      } else {
        context.setFillStyle(backgroundColor);
      }
      if (shadow) {
        const {
          offsetX,
          offsetY,
          blur,
          color
        } = shadow;
        context.shadowOffsetX = poster._toPx(offsetX);
        context.shadowOffsetY = poster._toPx(offsetY);
        context.shadowBlur = blur;
        context.shadowColor = color;
      }
      if (borderRadius > 0) {
        poster._drawRadiusRect(context, params);
        context.fill();
      } else {
        context.fillRect(poster._toPx(x), poster._toPx(y), poster._toPx(width), poster._toPx(height));
      }
      context.restore();
    }
    if (borderWidth) {
      context.save();
      context.setGlobalAlpha(opacity);
      context.setStrokeStyle(borderColor);
      context.setLineWidth(poster._toPx(borderWidth));
      if (borderRadius > 0) {
        poster._drawRadiusRect(context, params);
        context.stroke();
      } else {
        context.strokeRect(poster._toPx(x), poster._toPx(y), poster._toPx(width), poster._toPx(height));
      }
      context.restore();
    }
  },
  _drawLine(context, params) {
    let {
      x,
      y,
      endX,
      endY,
      color,
      width = 1
    } = params;
    context.save();
    context.beginPath();
    context.setStrokeStyle(color);
    context.setLineWidth(poster._toPx(width));
    context.moveTo(poster._toPx(x), poster._toPx(y));
    context.lineTo(poster._toPx(endX), poster._toPx(endY));
    context.stroke();
    context.closePath();
    context.restore();
  },
  _judgeIosPermissionPhotoLibrary() {
  },
  _requestAndroidPermission(permissionID) {
  },
  _gotoAppPermissionSetting(isAndroid) {
  },
  _modal: function(callback, confirmColor, confirmText) {
    common_vendor.index.showModal({
      title: "\u63D0\u793A",
      content: "\u60A8\u8FD8\u6CA1\u6709\u5F00\u542F\u76F8\u518C\u6743\u9650\uFF0C\u662F\u5426\u7ACB\u5373\u8BBE\u7F6E\uFF1F",
      showCancel: true,
      cancelColor: "#B2B2B2",
      confirmColor: confirmColor || "#181818",
      confirmText: confirmText || "\u786E\u5B9A",
      success(res) {
        if (res.confirm) {
          callback && callback(true);
        } else {
          callback && callback(false);
        }
      }
    });
  },
  _judgePermissionPhotoLibrary: async function(callback) {
    callback && callback(true);
  },
  getImage(url) {
    return new Promise((resolve, reject) => {
      common_vendor.index.downloadFile({
        url,
        success: (res) => {
          resolve(res.tempFilePath);
        },
        fail: (res) => {
          reject(false);
        }
      });
    });
  },
  getImagebyBase64(base64) {
    `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return new Promise((resolve, reject) => {
      reject(false);
    });
  },
  generatePoster(cw, ch, queue, callback) {
    const context = poster._ctx;
    if (context) {
      context.clearRect(0, 0, poster._toPx(cw), poster._toPx(ch));
      queue.forEach((params) => {
        if (params.type === "image") {
          poster._drawImage(context, params);
        } else if (params.type === "text") {
          poster._drawText(context, params);
        } else if (params.type === "block") {
          poster._drawBlock(context, params);
        } else if (params.type === "line") {
          poster._drawLine(context, params);
        }
      });
      const platform = common_vendor.index.getSystemInfoSync().platform;
      let time = 50;
      if (platform === "android") {
        time = 300;
      }
      setTimeout(() => {
        context.draw(false, () => {
          setTimeout(() => {
            context.toTempFilePath({
              success: (res) => {
                callback && callback(res.apFilePath);
              },
              fail: (err) => {
                callback && callback(false);
              }
            });
          }, time);
        });
      }, 50);
    } else {
      callback && callback(false);
    }
  },
  saveImage(file) {
    poster._judgePermissionPhotoLibrary((res) => {
      if (res) {
        common_vendor.index.saveImageToPhotosAlbum({
          filePath: file,
          success(res2) {
            common_vendor.index.showToast({
              title: "\u56FE\u7247\u4FDD\u5B58\u6210\u529F",
              icon: "none"
            });
          },
          fail(res2) {
            common_vendor.index.showToast({
              title: "\u56FE\u7247\u4FDD\u5B58\u5931\u8D25",
              icon: "none"
            });
          }
        });
      }
    });
  }
};
const poster$1 = {
  create: poster.create,
  generatePoster: poster.generatePoster,
  getImage: poster.getImage,
  getImagebyBase64: poster.getImagebyBase64,
  saveImage: poster.saveImage
};
exports.poster = poster$1;
