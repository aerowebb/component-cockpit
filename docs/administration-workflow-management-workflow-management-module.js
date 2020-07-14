(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['administration-workflow-management-workflow-management-module'],
  {
    /***/ './node_modules/file-saver/dist/FileSaver.min.js':
      /*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(a, b) {
          if (true)
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = b),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          else {
          }
        })(this, function() {
          'use strict';
          function b(a, b) {
            return (
              'undefined' == typeof b
                ? (b = { autoBom: !1 })
                : 'object' != typeof b &&
                  (console.warn('Deprecated: Expected third argument to be a object'), (b = { autoBom: !b })),
              b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)
                ? new Blob(['\uFEFF', a], { type: a.type })
                : a
            );
          }
          function c(b, c, d) {
            var e = new XMLHttpRequest();
            e.open('GET', b),
              (e.responseType = 'blob'),
              (e.onload = function() {
                a(e.response, c, d);
              }),
              (e.onerror = function() {
                console.error('could not download file');
              }),
              e.send();
          }
          function d(a) {
            var b = new XMLHttpRequest();
            return b.open('HEAD', a, !1), b.send(), 200 <= b.status && 299 >= b.status;
          }
          function e(a) {
            try {
              a.dispatchEvent(new MouseEvent('click'));
            } catch (c) {
              var b = document.createEvent('MouseEvents');
              b.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
            }
          }
          var f =
              'object' == typeof window && window.window === window
                ? window
                : 'object' == typeof self && self.self === self
                ? self
                : 'object' == typeof global && global.global === global
                ? global
                : void 0,
            a =
              f.saveAs ||
              ('object' != typeof window || window !== f
                ? function() {}
                : 'download' in HTMLAnchorElement.prototype
                ? function(b, g, h) {
                    var i = f.URL || f.webkitURL,
                      j = document.createElement('a');
                    (g = g || b.name || 'download'),
                      (j.download = g),
                      (j.rel = 'noopener'),
                      'string' == typeof b
                        ? ((j.href = b),
                          j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, (j.target = '_blank')))
                        : ((j.href = i.createObjectURL(b)),
                          setTimeout(function() {
                            i.revokeObjectURL(j.href);
                          }, 4e4),
                          setTimeout(function() {
                            e(j);
                          }, 0));
                  }
                : 'msSaveOrOpenBlob' in navigator
                ? function(f, g, h) {
                    if (((g = g || f.name || 'download'), 'string' != typeof f)) navigator.msSaveOrOpenBlob(b(f, h), g);
                    else if (d(f)) c(f, g, h);
                    else {
                      var i = document.createElement('a');
                      (i.href = f),
                        (i.target = '_blank'),
                        setTimeout(function() {
                          e(i);
                        });
                    }
                  }
                : function(a, b, d, e) {
                    if (
                      ((e = e || open('', '_blank')),
                      e && (e.document.title = e.document.body.innerText = 'downloading...'),
                      'string' == typeof a)
                    )
                      return c(a, b, d);
                    var g = 'application/octet-stream' === a.type,
                      h = /constructor/i.test(f.HTMLElement) || f.safari,
                      i = /CriOS\/[\d]+/.test(navigator.userAgent);
                    if ((i || (g && h)) && 'object' == typeof FileReader) {
                      var j = new FileReader();
                      (j.onloadend = function() {
                        var a = j.result;
                        (a = i ? a : a.replace(/^data:[^;]*;/, 'data:attachment/file;')),
                          e ? (e.location.href = a) : (location = a),
                          (e = null);
                      }),
                        j.readAsDataURL(a);
                    } else {
                      var k = f.URL || f.webkitURL,
                        l = k.createObjectURL(a);
                      e ? (e.location = l) : (location.href = l),
                        (e = null),
                        setTimeout(function() {
                          k.revokeObjectURL(l);
                        }, 4e4);
                    }
                  });
          (f.saveAs = a.saveAs = a), true && (module.exports = a);
        });

        //# sourceMappingURL=FileSaver.min.js.map

        /***/
      },

    /***/ './src/app/shared/utils/file-utils.ts':
      /*!********************************************!*\
  !*** ./src/app/shared/utils/file-utils.ts ***!
  \********************************************/
      /*! exports provided: FileUtils */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'FileUtils', function() {
          return FileUtils;
        });
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! file-saver */ './node_modules/file-saver/dist/FileSaver.min.js'
        );
        /* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          file_saver__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _number_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./number-utils */ './src/app/shared/utils/number-utils.ts'
        );

        var FileUtils = /** @class */ (function() {
          function FileUtils() {}
          FileUtils.downloadFile = function(file, fileName) {
            if (!!file && !!fileName) {
              var byteCharacters = atob(file.toString());
              var byteNumbers = new Array(byteCharacters.length);
              for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              file_saver__WEBPACK_IMPORTED_MODULE_0__['saveAs'](new Blob([new Uint8Array(byteNumbers)]), fileName);
            }
          };
          FileUtils.getExtension = function(fileName) {
            return !!fileName && fileName.includes('.') ? fileName.substring(fileName.lastIndexOf('.') + 1) : '';
          };
          FileUtils.getFileContentAsBase64 = function(file, callback) {
            if (!!file) {
              var reader_1 = new FileReader();
              reader_1.onloadend = function() {
                var fileContent = reader_1.result; // tslint:disable-line:no-any
                fileContent = fileContent.substring(fileContent.indexOf(',') + 1); // Remove data:*/*;base64,
                callback(fileContent);
              };
              reader_1.readAsDataURL(file);
            }
          };
          FileUtils.getFormattedSize = function(size) {
            if (!!size) {
              return size / FileUtils.KILOOCTET < FileUtils.KILOOCTET
                ? _number_utils__WEBPACK_IMPORTED_MODULE_1__['NumberUtils'].roundNumber(size / FileUtils.KILOOCTET) +
                    ' Ko'
                : _number_utils__WEBPACK_IMPORTED_MODULE_1__['NumberUtils'].roundNumber(
                    size / FileUtils.KILOOCTET / FileUtils.KILOOCTET
                  ) + ' Mo';
            } else {
              return '';
            }
          };
          FileUtils.KIBIOCTET = 1024;
          FileUtils.KILOOCTET = 1000;
          return FileUtils;
        })();

        /***/
      }
  }
]);
//# sourceMappingURL=administration-workflow-management-workflow-management-module.js.map
