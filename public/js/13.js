webpackJsonp([13],{

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(596)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(598)
/* template */
var __vue_template__ = __webpack_require__(599)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/pages/Family.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1290fd9a", Component.options)
  } else {
    hotAPI.reload("data-v-1290fd9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(366)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(368)
/* template */
var __vue_template__ = __webpack_require__(369)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/block-footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38157860", Component.options)
  } else {
    hotAPI.reload("data-v-38157860", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(367);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("b8d6fad2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38157860\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-footer.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38157860\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#footer {\n  height: 100vh;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n    margin-bottom: 60px;\n}\n#footer:before {\n    background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n    font-size: 20px;\n}\n#footer .footer {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n#footer .footer .footer-info {\n      margin-bottom: 100px;\n      line-height: 25px;\n      font-size: 14px;\n      font-weight: 100;\n}\n#footer .footer .footer-info div {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#footer .footer .footer-info p {\n        margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n        font-size: 18px;\n        font-weight: 100;\n        line-height: 30px;\n}\n#footer .footer.footer-join {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#footer .footer.footer-join:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.8);\n        top: 0px;\n}\n#footer .footer .btn-orange:hover {\n      background: white;\n      color: #f26d23 !important;\n      font-weight: 500;\n}\n@media only screen and (max-width: 991px) {\n#app #footer .footer .col-contact-us {\n    -webkit-box-flex: 100%;\n        -ms-flex: 100%;\n            flex: 100%;\n}\n#app #footer .container .join-us-slogan {\n    line-height: 45px;\n    margin-bottom: 50px;\n}\n#app #footer .container .join-us-slogan span {\n      font-size: 28px;\n}\n#app #footer .logo {\n    height: 100px;\n}\n#app .btn-orange.fat {\n    padding: 20px 45px;\n}\n}\n@media only screen and (max-width: 420px) {\n#app #footer {\n    height: auto;\n}\n#app #footer .container .join-us-slogan {\n      font-size: 16px;\n      line-height: 20px;\n      margin-bottom: 30px;\n      text-align: center !important;\n      padding: 0px 28px;\n}\n#app #footer .container .join-us-slogan span {\n        font-size: 16px;\n}\n#app #footer #copyright, #app #footer #copyright a {\n      white-space: normal;\n}\n#app #footer .footer {\n      margin-bottom: 0 !important;\n}\n#app #footer .footer .col p {\n        font-size: 13px !important;\n}\n#app #footer .btn-orange.fat {\n      padding: 12px 30px;\n      font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "section text-white text-center bg-black-cover position-relative d-flex flex-column justify-content-center",
      staticStyle: { "background-image": "url('/images/footer.png')" },
      attrs: { id: "footer" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "footer footer-join position-relative d-flex align-items-center justify-content-between w-100"
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass:
                  "row d-flex justify-content-between align-items-center flex-column flex-lg-row"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "btn-orange fat", attrs: { to: "/" } },
                  [_vm._v("馬上加入我們")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "footer container" }, [
        _c(
          "div",
          { staticClass: "d-flex flex-column justify-content-end h-100" },
          [
            _c(
              "div",
              {
                staticClass: "row mb-lg-5 pb-lg-5 flex-wrap-reverse flex-lg-row"
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "logo",
                      attrs: {
                        id: "footer-logo",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 117.97 127.6"
                      }
                    },
                    [
                      _c("title", [_vm._v("橘色總公司logo_oi")]),
                      _c("path", {
                        staticStyle: {
                          fill: "#ed6c00",
                          "fill-rule": "evenodd"
                        },
                        attrs: {
                          d:
                            "M80.85,86.49a17.85,17.85,0,0,0-1.36,2.69,14.72,14.72,0,0,1-.81,1.64c-.79,1.29-1.44,2.68-2.2,4-.61,1-1.36,2-2,3-.41.68-1,1.24-1.36,1.93a5.76,5.76,0,0,1-.77.9c-.33.36-.58.84-.92,1.21-.63.68-1,1.62-1.75,2.17-.29.2-.42.66-.64,1a14,14,0,0,1-.92,1.35c-.56.63-.7,1.53-1.21,2.18a1.74,1.74,0,0,0-.2,1c0,1.26-.18,2.53-.17,3.8,0,1,0,2,0,2.94,0,.66-.06,1.32-.07,2a4.59,4.59,0,0,1-.17,1.53,3.93,3.93,0,0,0-.11,1.53c0,.72,0,1.47.05,2.19a8.1,8.1,0,0,1-.07,2.14,9.11,9.11,0,0,1-.5,1.34,1.73,1.73,0,0,1-.64.9.77.77,0,0,1-.73.17c-.78-.21-1.19-.9-1.59-1.57-.53-.9-1-1.81-1.51-2.74s-1-1.88-1.4-2.85a4.56,4.56,0,0,1-.21-4.08,9.61,9.61,0,0,0,.6-1.3,3.67,3.67,0,0,0,.08-1.4c0-.32-.73-.5-1-.28-.47.34-1,.66-1.38,1a15.17,15.17,0,0,0-1.28.88,24.09,24.09,0,0,1-2,1.5,21.37,21.37,0,0,1-2,1.31,14.75,14.75,0,0,1-1.82,1.08,4,4,0,0,1-2.43.59,1.76,1.76,0,0,1-1.53-1.45,12.21,12.21,0,0,0-.8-1.57c-.31-.59-.67-1.16-1-1.75a1,1,0,0,1,0-.92c.36-.84.68-1.71,1-2.58a40,40,0,0,1,1.41-3.8c.64-1.29.93-2.73,1.5-4s.88-2.62,1.5-3.85A6.4,6.4,0,0,0,50.9,99a8.12,8.12,0,0,1,.5-1.32,19.31,19.31,0,0,0,1-2.33,3.51,3.51,0,0,1,.26-.75,10.69,10.69,0,0,0,.51-1.37A6.07,6.07,0,0,1,54.35,91a7.21,7.21,0,0,0,.76-1.18,9.74,9.74,0,0,1,.72-1,9.09,9.09,0,0,0,.84-1.12c.22-.43.48-.82.7-1.24s.23-.7.42-1a2.47,2.47,0,0,0,.17-.84c.13-.8-.21-1.13-.94-1.06a4.05,4.05,0,0,0-1.72.8,8.53,8.53,0,0,1-2.47,1.23,8.23,8.23,0,0,0-.86.19,4.55,4.55,0,0,1-1.25.34,4.88,4.88,0,0,1-2-.53,2.87,2.87,0,0,1-1.29-1.4C46.78,83,45.15,82.85,44.11,82a1.39,1.39,0,0,1-.25-1.36A1.17,1.17,0,0,1,45,79.69c.63,0,1.26-.06,1.88-.08a6.38,6.38,0,0,0,2.16-.89c1.25-.55,2.4-1.32,3.63-1.91.61-.29,1.16-.71,1.76-1a10.16,10.16,0,0,1,1-.53c.58-.27,1.1-.63,1.65-1a1.26,1.26,0,0,1,.26-.13,5.73,5.73,0,0,0,1.83-.92c.75-.6,1.63-1,2.4-1.55a8.83,8.83,0,0,0,1.26-1.26,2.29,2.29,0,0,0,.49-1.71c0-.39.05-.79,0-1.18-.07-.61,0-1.22,0-1.8,0-1.29,0-2.57,0-3.85a3.54,3.54,0,0,1,.16-.62,9,9,0,0,1,1.17-2.91,8.33,8.33,0,0,0,1-1.84c.07-.27.4-.31.53-.56a9.68,9.68,0,0,1,1.83-2.45,2.17,2.17,0,0,1,1.82-.6c.33.05.8.07,1,.41a4.41,4.41,0,0,1,.5,2,8.19,8.19,0,0,0,.53,3.6,4.34,4.34,0,0,1,.25.82,1.43,1.43,0,0,0,.32.73,1,1,0,0,1,.18.56.32.32,0,0,1-.16.34.3.3,0,0,1-.36,0,4.53,4.53,0,0,1-1.54-2A.84.84,0,0,0,69.26,59a2.58,2.58,0,0,0-.81,1.6c-.2.93-.36,1.87-.64,2.78a5.64,5.64,0,0,0,0,2.28,3.11,3.11,0,0,0,.3,1.07c.41.91,1.19,1,1.7.2a3.82,3.82,0,0,1,2-1.44c.65-.28,1.33-.5,2-.81.36-.16.69-.39,1.11-.25.18.05.34-.14.51-.16a12,12,0,0,1,2.24-.33,6.91,6.91,0,0,1,1.59.53c.08,0,.14.09.22.13a1.18,1.18,0,0,1,.76,1.36,6.13,6.13,0,0,1-.27,1.34c-.17.46-.59.63-.87,1-.09.1-.19.19-.29.31-.64.8-1.11,1.74-1.81,2.48-.54.59-1.16,1.1-1.74,1.64-.89.82-1.94,1.4-2.89,2.12-.19.15-.42.14-.62.23-.82.38-1.64.74-2.44,1.18a5.43,5.43,0,0,0-1.37,1.25,2.48,2.48,0,0,0-.51,1.33,12.77,12.77,0,0,0-.22,1.63,5.47,5.47,0,0,1-.3,1.24,6.06,6.06,0,0,0-.2.92c-.09.62.06,1.26-.08,1.88a6.32,6.32,0,0,0-.12,1.15c0,.33-.13.59-.13.93,0,.58,0,1.15,0,1.73s-.05,1.48-.15,2.16A11.82,11.82,0,0,0,66,91.56c0,.19,0,.38,0,.57,0,.4,0,.79-.08,1.21,0,.81,0,1.64-.1,2.45a17.26,17.26,0,0,0,.21,2.4,2.66,2.66,0,0,0,.36,1c.11.23.33.23.55.2a4.57,4.57,0,0,0,3.13-2.18c.71-.94,1.54-1.75,2.32-2.61.59-.65,1.27-1.19,1.85-1.86s1-1.31,1.55-1.91a9.8,9.8,0,0,0,.88-1.23c.21-.28.46-.57.64-.86.27-.45.57-.79.8-1.27A11.73,11.73,0,0,1,78.91,86a1.59,1.59,0,0,0,.18-.37c.24-.56.48-.73,1.06-.68.28,0,.36,0,.31-.37a3.57,3.57,0,0,1,.74-3.09c.32-.36.53-.34,1-.46a11.87,11.87,0,0,0,1.24-.61c.24-.09.49,0,.75-.14a3.73,3.73,0,0,1,1-.12A10.58,10.58,0,0,1,86.32,80a2.81,2.81,0,0,0,.9-.21c.4-.13.6-.52.87-.8a13.7,13.7,0,0,1,1.14-1c.19-.16.31-.42.51-.6.46-.43,1-.82,1.4-1.25s1.12-1.19,1.71-1.75c.41-.39.87-.75,1.27-1.17s1-1,1.52-1.54a21,21,0,0,1,2.46-2.35l.22-.21a12.06,12.06,0,0,1,1.28-1.3,17.41,17.41,0,0,0,2.27-2.2,1,1,0,0,0,.19-1c-.24-.7-1.08-1.08-1.64-1.48s-.84-.12-1.27-.23-.5-.5-.59-.82a4.77,4.77,0,0,1-.48-1.8c0-.27.1-.55.11-.81s0-.31,0-.47a9.53,9.53,0,0,1,.47-1.55c.26-.88.49-1.78.77-2.66a13.26,13.26,0,0,0,.37-2c.07-.63.4-1.2.45-1.83a2.31,2.31,0,0,0-.08-1.05c-.29-.71-1.16.11-1.48.34a4.23,4.23,0,0,1-.91.39,3,3,0,0,1-.91.18c-.19,0-.38.06-.58.06a3.57,3.57,0,0,1-.84-.21,2.12,2.12,0,0,1-.89-.58,1.58,1.58,0,0,1-.3-1.88c.1-.18.22-.32.43-.31A5.24,5.24,0,0,0,97,47.35a3.93,3.93,0,0,0,1.31-1.08,1.19,1.19,0,0,1,1-.52,5.76,5.76,0,0,0,1.46-.55,14.18,14.18,0,0,1,1.64-.18,7.27,7.27,0,0,1,2.59-.17,8.35,8.35,0,0,1,3.33,1.2c.2.13.25.4.34.62s.15.49.22.75a.55.55,0,0,1,0,.31c-.37.59-.37,1.36-.91,1.87a8.61,8.61,0,0,0-1.46,2.17,21.46,21.46,0,0,1-1.38,2,5.78,5.78,0,0,0-1.19,2.29,20.3,20.3,0,0,0-.52,3c0,1.93,1.64,1.75,2.86,2.55a5.75,5.75,0,0,1,2.52,3,2.16,2.16,0,0,1-1.26,2.66,13.87,13.87,0,0,1-2.17.65,2.7,2.7,0,0,0-1.16.69c-.64.55-1.3,1.08-1.93,1.66-.83.77-1.7,1.5-2.54,2.26s-1.84,1.74-2.84,2.5a7.47,7.47,0,0,0-1.76,1.66,1.18,1.18,0,0,1-.25.25c-.65.53-1.28,1.08-1.9,1.64-.2.18-.54.67,0,.41s1-.67,1.6-.9c.33-.15.66-.28,1-.44.63-.31,1.23-.79,1.83-1.16a20.29,20.29,0,0,1,1.94-.93c1.33-.62,2.66-1.24,4-1.84a11.1,11.1,0,0,1,2.46-.87c.42-.08.78-.37,1.22-.45.61-.11,1.2-.32,1.8-.48s1-.1,1.45-.27A22.47,22.47,0,0,1,113,71.1a10.48,10.48,0,0,1,2.8-.18c.44,0,.89,0,1.33,0a1.77,1.77,0,0,1,.69.13,17.3,17.3,0,0,1,1.67.46,1.87,1.87,0,0,1,.77.53c.17.21.19.65.34.79.6.57.47,1.4.62,2.13a3.64,3.64,0,0,1-1.56,3.86c-.59.4-1.2.77-1.79,1.2-.38.28-.84.46-1.25.72-.82.53-1.67,1-2.48,1.55s-1.48.72-2.14,1.21a13.51,13.51,0,0,0-1.48,1.07c-.81.78-1.71,1.44-2.58,2.17-.48.4-1,.76-1.46,1.21a17.22,17.22,0,0,1-1.48,1.2c-.06,0-.15.06-.18.12-.43.75-1,.43-1.55.22-.1,0-.18-.1-.27-.12-.38-.1-.47-.56-.9-.33a3.44,3.44,0,0,0-.79.78,15.42,15.42,0,0,0-1,1.37,7.73,7.73,0,0,1-1.58,1.39c-.7.52-1.3,1.19-2,1.72-.33.26-.56.61-.87.89a4.5,4.5,0,0,1-.81.56,7.16,7.16,0,0,0-.61.48,8.57,8.57,0,0,0-.75.6c-.22.19-.45.36-.67.53s-.39.49-.73.52a1.31,1.31,0,0,0-1,1.69,1.94,1.94,0,0,0,1.28,1.33.94.94,0,0,1,.3.15,2.19,2.19,0,0,0,2.2.45,11.43,11.43,0,0,0,3.12-1.13A19,19,0,0,1,101,99.2a22.54,22.54,0,0,0,3.08-1.09,6.49,6.49,0,0,0,1.38-.72,1.91,1.91,0,0,0,.59-.68c.23-.52.12-.82-.33-1a5.44,5.44,0,0,1-2.27-2.12c-.18-.27,0-.4.24-.44A9,9,0,0,1,105.1,93a6.82,6.82,0,0,1,2.81.47,2.78,2.78,0,0,1,1.25,1,.65.65,0,0,0,.6.21,6.7,6.7,0,0,0,1.47-.35c.57-.14,1.17-.22,1.73-.41a5.67,5.67,0,0,1,2.42-.26,12.88,12.88,0,0,1,1.52.06,34.39,34.39,0,0,0,3.47.47,12,12,0,0,1,1.88.57,3.62,3.62,0,0,1,1.9,1.37,5.36,5.36,0,0,0,.82.76,4.2,4.2,0,0,1,.84,1.16c.27.39.58.74.84,1.13a15.29,15.29,0,0,1,1.38,2.2,8.8,8.8,0,0,1,.6,3.48,24.51,24.51,0,0,1-.42,4.37c-.2,1.08-.23,2.17-.36,3.25a16.57,16.57,0,0,1-.51,2.78,25,25,0,0,1-.68,2.43c-.28.64-.42,1.33-.71,2-.19.42-.29.88-.52,1.28-.64,1.17-1,2.51-2.17,3.29a5.86,5.86,0,0,0-1.18,1c-.52.59-.91,1.28-1.39,1.9-.23.3-.42.62-.66.91-.41.5-.91.93-1.31,1.43a4.8,4.8,0,0,1-1.21,1.25,3.42,3.42,0,0,0-1.12,1.26,2.17,2.17,0,0,1-.55.49,10.58,10.58,0,0,0-.83.93,9.1,9.1,0,0,1-2.25,1.66,7,7,0,0,0-1.25.84,6.3,6.3,0,0,1-1.55.84c-.51.2-1.06.26-1.56.45a4.26,4.26,0,0,1-2.71-.06c-.1,0-.11-.12-.14-.21-.11-.34-.2-.7-.33-1a3.94,3.94,0,0,1-.57-2.23,19.92,19.92,0,0,0-1.69-4,3.42,3.42,0,0,1-.34-.89c-.07-.26,0-.48.34-.46a13.87,13.87,0,0,1,2.15.15,11.85,11.85,0,0,0,3.3.19,4.22,4.22,0,0,0,3.13-1.62,30.15,30.15,0,0,1,2.11-2.27,15.19,15.19,0,0,0,1.52-2.1,39.68,39.68,0,0,1,2.31-3.25,9.15,9.15,0,0,0,.84-1.49c.31-.59.62-1.19.9-1.8s.69-1.51,1-2.27c.15-.36.28-.72.46-1.06a8.67,8.67,0,0,0,.31-.9c.14-.37.21-.71.33-1.08a6.4,6.4,0,0,0,.12-1,18.1,18.1,0,0,0,.15-1.94c0-.57.13-1.13.13-1.71a7.39,7.39,0,0,0-.13-2,22.33,22.33,0,0,0-.66-2.43,7.56,7.56,0,0,0-.79-1.45,2,2,0,0,0-1.41-.83,21.45,21.45,0,0,0-3.4-.06,12.28,12.28,0,0,0-2.19.42.92.92,0,0,0-.68.49c-.17.33-.51.43-.73.67a13.46,13.46,0,0,0-1.3,1.61c-.3.42-.73.74-1,1.15a16.31,16.31,0,0,0-1.29,1.55c-.3.51-.83.82-1.19,1.3s-.72.9-1.08,1.33a16,16,0,0,1-1.65,1.83,5.54,5.54,0,0,0-.77.89c-.41.54-.88,1-1.31,1.53a4.12,4.12,0,0,0-.69,1.5c-.1.33.13.37.32.39a6.55,6.55,0,0,0,1.32-.18c.44-.06.77-.4,1.2-.49a.63.63,0,0,1,.45,0,9.42,9.42,0,0,1,1.51.84,4.43,4.43,0,0,0,1.09.54A12.71,12.71,0,0,1,109,115.9c.53.35.54.88.64,1.44a8.08,8.08,0,0,1-.07,3.06,2,2,0,0,1-.82,1.1,14.92,14.92,0,0,0-1.31.94c-.32.34-.64.68-.93,1s-.45.83-.81,1c-.12.06-.26,0-.38.1a2.38,2.38,0,0,0-.49.34,7,7,0,0,1-1.32.63c-.52.21-.92.58-1.43.83a5.66,5.66,0,0,1-1.42.6c-.54.09-.44-.24-.27-.59a2.46,2.46,0,0,0,.17-.63,2.27,2.27,0,0,1,.47-.86,6.56,6.56,0,0,0,1.07-3.85c0-.37-.09-.57-.51-.55-.81.05-1.61.16-2.42.18-.37,0-.73.34-1.11.47a15,15,0,0,0-1.74.76,9.48,9.48,0,0,1-2,.72,1.69,1.69,0,0,1-1.25,0,1.94,1.94,0,0,1-.59-.74,4,4,0,0,1-.59-3.06,13,13,0,0,0,.39-1.75,3.66,3.66,0,0,1,.25-1.4,5.27,5.27,0,0,1,1.51-.94,14.84,14.84,0,0,1,1.7-.83,1.84,1.84,0,0,0,1.08-1.49c0-.23-.08-.3-.23-.37a3.08,3.08,0,0,0-2.52-.09c-.38.16-.61.06-.84-.3a3.59,3.59,0,0,0-2.54-1.75,3.44,3.44,0,0,0-1.59.26,2.73,2.73,0,0,0-1.06.67c-.46.4-1,.73-1.47,1.18a16.72,16.72,0,0,1-1.22,1.16c-.84.7-1.6,1.51-2.41,2.26a19.84,19.84,0,0,0-1.66,2.23,9.09,9.09,0,0,0-1.21,3.19c-.42,1.3-2,.85-2.84.14a8.3,8.3,0,0,1-2.33-3.25c-.19-.59-.29-1.21-.43-1.82a7,7,0,0,1,0-1.37,11.46,11.46,0,0,1,0-1.55c0-.55.32-1,.32-1.59a2.86,2.86,0,0,1,1-1.89c.4-.45.76-.94,1.18-1.38.59-.62,1.19-1.24,1.76-1.91,1-1.18,2.27-2.06,3.33-3.2a14,14,0,0,1,1.22-1.08c.41-.36.81-.75,1.23-1.08.71-.57,1.41-1.18,2.12-1.77s1.91-1.17,2.43-2.32a.94.94,0,0,1,1-.51c.33,0,1.12.12,1.15-.38,0-.21-.17-.33-.16-.53a2.27,2.27,0,0,1,.36-.71,11.28,11.28,0,0,1,1.09-1.48c.32-.41.52-.87.85-1.25a8,8,0,0,0,.68-1c.48-.81,1-1.58,1.46-2.41.23-.42.48-.84.73-1.26a9.75,9.75,0,0,0,1.15-2.19A5.5,5.5,0,0,1,97.57,84c.26-.54.7-1.1,1.36-1a7.39,7.39,0,0,0,1.75.25,8.34,8.34,0,0,0,1.12-.28,1.83,1.83,0,0,1,2.2,1.15,7.45,7.45,0,0,1,.51,1.39c0,.31.24.33.44.19s.54-.43.81-.66c.93-.77,1.89-1.5,2.88-2.18.38-.27.68-.68,1.07-.94s.69-.54,1-.81c.61-.5,1.29-.93,1.9-1.43s1.37-1.1,2-1.72,1.36-.94,1.63-1.66-.5-1.21-1-1.41a3.65,3.65,0,0,0-1.77-.1c-.39,0-.76.17-1.16.2a13.5,13.5,0,0,0-1.77.45,14.28,14.28,0,0,0-2.74.93,16,16,0,0,0-2.06,1c-.46.27-1,.44-1.44.71-.84.49-1.71.93-2.56,1.4-.59.32-1.16.7-1.79,1A9.67,9.67,0,0,0,99,81a37,37,0,0,0-4.69,2.52c-.74.57-1.64.92-2.42,1.44a17.92,17.92,0,0,1-2.22,1.24,19.23,19.23,0,0,0-2.8,1.49,6.5,6.5,0,0,0-1.16,1.06,5.59,5.59,0,0,0-.52.66c-.11.2-.15.42-.28.62-.28.46-.54.56-1,.34s-.82-.18-1.17-.44c-.52-.39-1.26-.78-1.51-1.41a4.78,4.78,0,0,1-.2-.83C81,87.42,80.72,86.7,80.85,86.49ZM53,110.81c.78.1,1.29-.48,1.83-.9a26.5,26.5,0,0,1,2.55-2.07c.61-.36,1.07-.94,1.7-1.29,1.29-.73,1.48-2,1.48-3.32,0-.47,0-.92,0-1.39a29.92,29.92,0,0,1,0-3.14c0-.9-.21-1.72-.14-2.62,0-.37-.21-.55-.51-.4a1.16,1.16,0,0,0-.42.43c-.25.41-.33.92-.59,1.3-.41.61-.65,1.31-1,1.93-.25.41-.45.88-.71,1.28A26.48,26.48,0,0,0,55.82,103c-.25.51-.51,1-.77,1.5s-.59,1.23-.93,1.82-.65,1.39-1,2.07a5.61,5.61,0,0,0-.64,1.27C52.3,110.29,52.56,110.79,53,110.81Zm36.19-10.06c-.78,0-1.23.47-1.71.91s-1.08,1-1.59,1.51-1,.68-1.49,1.17-.8.6-1.13,1-.84.59-1.2,1c-.56.65-1.15,1.27-1.73,1.91a2.68,2.68,0,0,0-.36.56c-.21.49-.15.57.36.57a1.35,1.35,0,0,0,.56-.13,17.92,17.92,0,0,0,2.62-1.56c.5-.34,1.06-.57,1.54-1a5.6,5.6,0,0,1,1.24-.64c.36-.17.71-.33,1.07-.52a17,17,0,0,0,1.77-1.18c.59-.44,1.44-.72,1.51-1.53a2.5,2.5,0,0,0-.92-2C89.53,100.66,89.43,100.76,89.21,100.75Zm12.59,3.54a3,3,0,0,0-.63-.06,2.15,2.15,0,0,0-1.3.32,5.33,5.33,0,0,0-1.16,1.35c-.33.46-.78.75-1.15,1.18-.7.81-.1,1.6-.32,2.47a.29.29,0,0,0,.17.29c.12,0,.15-.1.21-.19.28-.39.57-.78.85-1.18a15.76,15.76,0,0,0,1.42-1.91,5.11,5.11,0,0,1,1.22-1.58A2.27,2.27,0,0,0,101.8,104.29Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: {
                          fill: "#ed6c00",
                          "fill-rule": "evenodd"
                        },
                        attrs: {
                          d:
                            "M131.66,138.36a3.08,3.08,0,0,0,1.45-.51,7.47,7.47,0,0,0,1.67-1.08c.45-.37.94-.7,1.38-1.08.28-.24.6-.45.84-.68s1-.66.85-1.38c-.08-.54.2-1,1-.92a1.92,1.92,0,0,0,1.88-.58,2,2,0,0,1,.51-.39,1,1,0,0,0,.45-.46.41.41,0,0,1,.66-.19,1.16,1.16,0,0,1,.31.22,1.7,1.7,0,0,0,1.07.54,4.36,4.36,0,0,1,.58.19,2,2,0,0,0,.81,0,2.69,2.69,0,0,1,1.23.21.9.9,0,0,1,.49.47,1.42,1.42,0,0,1,.07,1.4,8.76,8.76,0,0,1-1.9,2.34,16.64,16.64,0,0,1-1.35,1.17,4.35,4.35,0,0,0-1.55,1.61,3.72,3.72,0,0,1-.16.51c-.12.2-.34.34-.45.54a4.09,4.09,0,0,0-.32.79,15.42,15.42,0,0,1-.83,1.74,10.87,10.87,0,0,0-1.12,2.45,1.73,1.73,0,0,1-.14.31.52.52,0,0,0,0,.56,14.43,14.43,0,0,0,1.18,1.5,1.6,1.6,0,0,0,.89.54,3.19,3.19,0,0,1,1.67.85,3.26,3.26,0,0,1,1.09,1.29,1,1,0,0,1,.06.6c-.1.37-.07.77-.19,1.14a2.39,2.39,0,0,1-.31.57c-.22.3-.28.7-.6,1a2,2,0,0,1-.74.47,3.39,3.39,0,0,1-2.56,0,1.36,1.36,0,0,1-.63-.55,1.26,1.26,0,0,0-.77-.66,2.9,2.9,0,0,0-2-.11.19.19,0,0,0-.16.15c-.16.5-.31,1-.46,1.49-.27.89-.54,1.76-.79,2.64-.19.67-.42,1.33-.55,2-.05.31,0,.63-.08.94a8.23,8.23,0,0,0-.1,1,9.13,9.13,0,0,0,.09,2.34,3.49,3.49,0,0,0,1.3,2.42,6.33,6.33,0,0,0,2.7,1.18,8.9,8.9,0,0,0,2.31.09c1-.11,1.93-.12,2.88-.25a6.41,6.41,0,0,0,1.57-.18,1.72,1.72,0,0,1,.78,0c.52,0,1-.07,1.55-.09a16.19,16.19,0,0,0,1.95-.23,28.29,28.29,0,0,0,3.19-.53c.89-.25,1.8-.64,1.79-1.72a8.72,8.72,0,0,1,0-1.77,1.75,1.75,0,0,0-.29-1.32,11.86,11.86,0,0,0-.86-.88,3.65,3.65,0,0,1-.64-1.33,5.53,5.53,0,0,1-.17-1.34,6.46,6.46,0,0,0,.08-1.23c0-.15-.08-.32.1-.38s.25.1.34.22c.63.89,1.44,1.68,2,2.59a7,7,0,0,0,1,1.46c.39.38.6.86,1.09,1.13a4.08,4.08,0,0,1,1.29.87c.41.47,1,.72,1.36,1.25a.89.89,0,0,0,.47.31,4.87,4.87,0,0,1,1.48.93,1,1,0,0,1,.25,1.07,2.13,2.13,0,0,1-.14.35,9.07,9.07,0,0,0-.73,1.87,1.18,1.18,0,0,1-.91.76,5.06,5.06,0,0,0-1.94.93,6.53,6.53,0,0,1-1.57.92,9.66,9.66,0,0,1-1.81.34c-.6.12-1.2.24-1.79.4a15.34,15.34,0,0,1-1.82.49,31.17,31.17,0,0,0-4.86.57,7.63,7.63,0,0,1-2.23.24l-4.23-.13a1.61,1.61,0,0,0-.38,0c-.78.11-1.57-.06-2.36,0a2,2,0,0,1-1.15-.23,10.58,10.58,0,0,0-1.63-.59,7.83,7.83,0,0,1-.91-.47,3,3,0,0,1-1.37-.83,4.78,4.78,0,0,1-.92-1.61,9.61,9.61,0,0,0-.35-1,2.65,2.65,0,0,1-.21-1.2,12.33,12.33,0,0,0-.18-1.83,2.41,2.41,0,0,0-.5-1.1c-.17-.45-.36-.88-.56-1.3a4.28,4.28,0,0,1-.18-2.19,6.11,6.11,0,0,1,.22-1.55,8.61,8.61,0,0,1,.49-1.54,5.33,5.33,0,0,0,.31-1c.31-1,.64-1.91.9-2.89a11.1,11.1,0,0,0,.3-1.39,10.27,10.27,0,0,1,.32-1.08,3,3,0,0,0,.22-1.1,2.46,2.46,0,0,0-1.23-2,8.1,8.1,0,0,0-1-.53,2.19,2.19,0,0,0-1.79.1l-1.49.6c-.29.11-.55.28-.83.4a15.07,15.07,0,0,0-1.93.85,2.11,2.11,0,0,1-.95.43,1,1,0,0,1-.8-.2,3.2,3.2,0,0,1-1.07-1.7,3.08,3.08,0,0,1,.39-2.09c.3-.75.84-1.41,1.21-2.14a6.33,6.33,0,0,1,1.27-1.63c.37-.36.59-.83.95-1.21.59-.63,1.16-1.28,1.69-2s1.18-1.59,1.76-2.39a5,5,0,0,0,.74-1c.17-.42.33-.86.46-1.29a2.78,2.78,0,0,1,.81-1.17,24.11,24.11,0,0,0,2-1.68c.36-.4.68-.81,1-1.23a14.32,14.32,0,0,0,1.46-2.13c.41-.84.91-1.64,1.33-2.48a4.27,4.27,0,0,0,.63-2.27,1.57,1.57,0,0,1,0-.3,1.1,1.1,0,0,0-.46-1.2,1.73,1.73,0,0,1-.28-.26c-.44-.45-1-.78-1.45-1.18a2.08,2.08,0,0,1-.78-1.16,11.22,11.22,0,0,1-.28-2c0-.31,0-.62,0-.93a9.87,9.87,0,0,1,.44-2.91,18,18,0,0,1,1-2.59c.25-.55.51-1.11.81-1.64.2-.38.28-.85.48-1.25.31-.68.63-1.35.88-2a1.3,1.3,0,0,0-.1-.88c-.14-.36-.33-.72-.49-1.08a.38.38,0,0,1,.22-.53,2.92,2.92,0,0,1,1.87-.41,4.94,4.94,0,0,1,1.94.57c.23.14.48.24.72.37.73.38.84.58.75,1.41,0,.24.07.52-.08.71a7.05,7.05,0,0,1-.94,1.3c-.08,0-.17.1-.2.19-.24.63-.73,1.11-1,1.72a10.39,10.39,0,0,1-.91,1.71c-.78,1.12-1.54,2.3-2.25,3.46a2.44,2.44,0,0,0-.33,2.19,1.45,1.45,0,0,0,.83.78,4.53,4.53,0,0,1,1.87,1.3.21.21,0,0,0,.11.07,3.58,3.58,0,0,1,1.31,1c.29.28.63.51.93.79a5.47,5.47,0,0,1,.8.86,6.57,6.57,0,0,0,.58,1c.13.13.1.32.11.48,0,.44.15.85.15,1.29a3.76,3.76,0,0,1-.55,1.37,12.35,12.35,0,0,1-1.32,2.1c-.35.55-.84,1-1.21,1.59a23.32,23.32,0,0,1-1.46,2c-.79.93-1.56,1.89-2.27,2.87a23.62,23.62,0,0,1-1.82,2.28l-1.5,1.66a2.31,2.31,0,0,0-.14.19C132.15,137.81,132.05,138.2,131.66,138.36Zm1.9,5.06a1.65,1.65,0,0,0-1.26.43,1,1,0,0,1-.2.12,1.24,1.24,0,0,0-.35,1.23s0,.08.07.08c.27.09.56.23.84.05a3.3,3.3,0,0,0,.86-.72,4.1,4.1,0,0,0,.53-.64c.13-.22.08-.38-.16-.46A2.44,2.44,0,0,0,133.56,143.42Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M155.25,68.25a3.63,3.63,0,0,1-3.81-4,3.57,3.57,0,0,1,3.72-3.79,3.76,3.76,0,0,1,3.84,3.9A3.61,3.61,0,0,1,155.25,68.25Zm3.25-3.92c0-1.35-1.26-2.07-3.08-2.07-1.33,0-3.48.47-3.48,2.25,0,1.43,1.4,2,3.17,2S158.5,65.68,158.5,64.33Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M154.51,69.54c.44,0,.57,0,.7-.21l.1-.15a.29.29,0,0,1,.33,0,7.2,7.2,0,0,0,.65,1.6.22.22,0,0,1-.1.2,4,4,0,0,0-.47,0c-.07,0-.1,0-.13.11.19.3.55.61.55,1.07a.61.61,0,0,1-.65.6.66.66,0,0,1-.71-.7.61.61,0,0,1,.2-.42c.21-.25.22-.35.22-.42S155,71,154.55,71h-1.67c-.76,0-.85.05-.88.41l0,.35a.3.3,0,0,1-.37,0c0-.53,0-1,0-1.48s0-.93,0-1.29a.28.28,0,0,1,.37,0l0,.21c0,.36.13.4.89.4Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M153.11,76.74c-.74,0-.94.27-.94.49a.75.75,0,0,0,.13.41.19.19,0,0,1-.25.13,1.79,1.79,0,0,1-.59-1.26,1.29,1.29,0,0,1,.38-.92c.07-.08.09-.12.09-.17s0-.12-.12-.24a1.59,1.59,0,0,1-.35-.92A1.13,1.13,0,0,1,152.61,73c.56,0,.9.34,1.14,1.14.13.41.22.72.3,1s.13.25.22.26l.37,0c.42,0,.94-.16.94-.63,0-.27-.15-.49-.62-.57a.47.47,0,0,1-.35-.19,1.83,1.83,0,0,1-.25-.78.24.24,0,0,1,.27-.26,1.3,1.3,0,0,1,.84.53,3.07,3.07,0,0,1,.67,1.84c0,.91-.46,1.45-1.59,1.39Zm.28-1.31c.18,0,.21,0,.2-.08-.06-.49-.25-.92-.76-.92a.63.63,0,0,0-.66.56c0,.34.2.4.54.41Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M154.53,78.45c.44,0,.57,0,.7-.21l.1-.15a.26.26,0,0,1,.33,0,8.32,8.32,0,0,0,.63,1.61.21.21,0,0,1-.1.2l-.49,0c-.06,0-.08,0-.08,0a1,1,0,0,0,.08.21,2.69,2.69,0,0,1,.44,1.25,1.29,1.29,0,0,1-1.38,1.37h-1.88c-.76,0-.85,0-.89.44l0,.17a.28.28,0,0,1-.37,0c0-.34,0-.8,0-1.32s0-.86,0-1.18a.28.28,0,0,1,.37,0l0,.2c0,.25.12.29.72.29h1.85a.7.7,0,0,0,.77-.76.79.79,0,0,0-.26-.62.7.7,0,0,0-.41-.08h-1.95c-.6,0-.7,0-.73.32l0,.17a.28.28,0,0,1-.37,0c0-.34,0-.69,0-1.21s0-.91,0-1.29a.28.28,0,0,1,.37,0l0,.17c0,.39.13.44.89.44Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M155.74,88.92a.34.34,0,0,1-.28.1.51.51,0,0,1-.43-.17V88a1.33,1.33,0,0,1-.39,0c-.86,0-1.91-.52-1.91-2.24,0-.18,0-.33,0-.45a.27.27,0,0,0-.26-.19c-.24,0-.39.24-.39.56s0,.82,0,1.33c0,.82-.22,1.7-1.32,1.7a2,2,0,0,1-1.65-1,3.77,3.77,0,0,1-.48-1.91c0-1.57.72-2.14,1.39-2.14a.64.64,0,0,1,.55.35c.13.22.27.42.34.54s.13.1.15,0A1,1,0,0,1,152,84a.31.31,0,0,1,.23.08,6.19,6.19,0,0,0,.51.7c.08.09.14.14.24.08a1.49,1.49,0,0,1,1.41-.93c.9,0,1.76.72,1.76,2.13a3.59,3.59,0,0,1-.4,1.63ZM151,85.84a1,1,0,0,0-.15-.61.46.46,0,0,0-.38-.15,1.24,1.24,0,0,0-1.22,1.41c0,.69.33,1.15.86,1.15s.89-.47.89-1.07Zm2.21.24c0,.34.32.62,1.12.62s1.3-.31,1.3-.71-.33-.67-1.07-.67S153.22,85.64,153.22,86.08Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M154.21,90.75c0-.25,0-.27-.2-.27A1.52,1.52,0,0,0,152.39,92a1.09,1.09,0,0,0,.57,1,.25.25,0,0,1-.25.29,2.11,2.11,0,0,1-1.25-1.92,2.15,2.15,0,0,1,2.23-2.27,2.35,2.35,0,0,1,2.45,2.36,1.58,1.58,0,0,1-1.57,1.75c-.21,0-.36,0-.36-.39Zm.48.72a1,1,0,0,0,.09.45A.35.35,0,0,0,155,92a.55.55,0,0,0,.6-.58.9.9,0,0,0-.79-.86c-.15,0-.16.16-.16.5Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M147.78,67.11a14,14,0,0,0-1.7.13.29.29,0,0,1-.08-.41,2,2,0,0,0,1.56-2.06c0-1.21-1-2.51-3.21-2.51S141,63.52,141,64.83a2.37,2.37,0,0,0,1.69,2.23.3.3,0,0,1-.08.41,5,5,0,0,1-1.71-.41,8.3,8.3,0,0,1-.41-2.22,5,5,0,0,1,.83-2.94,3.44,3.44,0,0,1,2.87-1.39,3.61,3.61,0,0,1,2.89,1.32,4.79,4.79,0,0,1,1,3A13.44,13.44,0,0,1,147.78,67.11Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M142.78,68a2.38,2.38,0,0,1,2.42,2.51,2.34,2.34,0,1,1-4.67-.06A2.23,2.23,0,0,1,142.78,68Zm.24,1.57c-1.15,0-2,.36-2,1s.71.82,1.69.82,2-.32,2-.94S144.21,69.52,143,69.52Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      }),
                      _c("path", {
                        staticStyle: { fill: "#fff" },
                        attrs: {
                          d:
                            "M141.41,73.79a.89.89,0,1,1,0,1.77.85.85,0,0,1-.88-.89A.88.88,0,0,1,141.41,73.79Z",
                          transform: "translate(-43.78 -44.8)"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]
            ),
            _vm._v(" "),
            _vm._m(3)
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "join-us-slogan text-left" }, [
      _vm._v("\n                    持續創造價值並帶領團隊實現目標和理想"),
      _c("br"),
      _vm._v(" "),
      _c("span", { staticClass: "text-orange" }, [
        _vm._v("以前瞻眼光、宏觀策略成為產業先驅")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col col-contact-us" }, [
      _c(
        "div",
        { staticClass: "footer-text-left text-center text-lg-left pt-5" },
        [
          _c("div", { staticClass: "d-inline-block text-center" }, [
            _c("p", { staticClass: "text-orange footer-info-title mb-4" }, [
              _vm._v("聯絡我們")
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("台北市大安區仁愛路四段37號3樓之B")]),
            _vm._v(" "),
            _c("p", [
              _vm._v("Email:  service@orange.co"),
              _c("br"),
              _vm._v("Phone:  02-2711-4636"),
              _c("br"),
              _vm._v("Fax:  02-2711-4638")
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c(
        "div",
        {
          staticClass:
            "footer-text-right text-center text-lg-right pt-0 pt-lg-5"
        },
        [
          _c("div", { staticClass: "d-inline-block text-center" }, [
            _c("p", { staticClass: "text-orange footer-info-title mb-4" }, [
              _vm._v("橘色精神")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "footer-info-subtitle" }, [
              _vm._v("用心 · 貼心 · 安心"),
              _c("br"),
              _vm._v("信心 · 一心 · 同理心")
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "position-relative d-flex flex-column align-items-center justify-content-center w-100 pt-4"
      },
      [
        _c(
          "p",
          {
            staticClass:
              "footer mb-5 position-relative w-100 text-size-1 d-flex align-items-end justify-content-center",
            attrs: { id: "copyright" }
          },
          [
            _c("span", [
              _vm._v("\n                        2018 "),
              _c("a", { staticClass: "link-orange" }, [_vm._v(" 橘色涮涮屋 ")]),
              _vm._v(" 版權所有."),
              _c("br", { staticClass: "d-md-none" }),
              _vm._v(" Designed by "),
              _c(
                "a",
                {
                  staticClass: "link-orange",
                  attrs: { href: "www.daydream-lab.com" }
                },
                [_vm._v("Daydream Lab")]
              )
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38157860", module.exports)
  }
}

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(383)
/* template */
var __vue_template__ = __webpack_require__(385)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-slick/slickCarousel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14c5b163", Component.options)
  } else {
    hotAPI.reload("data-v-14c5b163", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
//
//
//
//
//




// Check if the request came from the browser and is not server rendered
if (typeof window !== 'undefined') {
  var slick = __webpack_require__(384);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  mounted: function mounted() {
    this.create();
  },

  destroyed: function destroyed() {
    __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('unslick');
  },

  methods: {
    create: function create() {
      var $slick = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el);

      $slick.on('afterChange', this.onAfterChange);
      $slick.on('beforeChange', this.onBeforeChange);
      $slick.on('breakpoint', this.onBreakpoint);
      $slick.on('destroy', this.onDestroy);
      $slick.on('edge', this.onEdge);
      $slick.on('init', this.onInit);
      $slick.on('reInit', this.onReInit);
      $slick.on('setPosition', this.onSetPosition);
      $slick.on('swipe', this.onSwipe);
      $slick.on('lazyLoaded', this.onLazyLoaded);
      $slick.on('lazyLoadError', this.onLazyLoadError);

      $slick.slick(this.options);
    },

    destroy: function destroy() {
      var $slick = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el);

      $slick.off('afterChange', this.onAfterChange);
      $slick.off('beforeChange', this.onBeforeChange);
      $slick.off('breakpoint', this.onBreakpoint);
      $slick.off('destroy', this.onDestroy);
      $slick.off('edge', this.onEdge);
      $slick.off('init', this.onInit);
      $slick.off('reInit', this.onReInit);
      $slick.off('setPosition', this.onSetPosition);
      $slick.off('swipe', this.onSwipe);
      $slick.off('lazyLoaded', this.onLazyLoaded);
      $slick.off('lazyLoadError', this.onLazyLoadError);
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('unslick');
    },

    reSlick: function reSlick() {
      this.destroy();
      this.create();
    },

    next: function next() {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickNext');
    },

    prev: function prev() {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickPrev');
    },

    pause: function pause() {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickPause');
    },

    play: function play() {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickPlay');
    },

    goTo: function goTo(index, dontAnimate) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickGoTo', index, dontAnimate);
    },

    currentSlide: function currentSlide() {
      return __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickCurrentSlide');
    },

    add: function add(element, index, addBefore) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickAdd', element, index, addBefore);
    },

    remove: function remove(index, removeBefore) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickRemove', index, removeBefore);
    },

    filter: function filter(filterData) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickFilter', filterData);
    },

    unfilter: function unfilter() {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickUnfilter');
    },

    getOption: function getOption(option) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickGetOption', option);
    },

    setOption: function setOption(option, value, refresh) {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('slickSetOption', option, value, refresh);
    },

    setPosition: function setPosition() {
      __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this.$el).slick('setPosition');
    },

    // Events
    onAfterChange: function onAfterChange(event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide);
    },

    onBeforeChange: function onBeforeChange(event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide);
    },

    onBreakpoint: function onBreakpoint(event, slick, breakpoint) {
      this.$emit('breakpoint', event, slick, breakpoint);
    },

    onDestroy: function onDestroy(event, slick) {
      this.$emit('destroy', event, slick);
    },

    onEdge: function onEdge(event, slick, direction) {
      this.$emit('edge', event, slick, direction);
    },

    onInit: function onInit(event, slick) {
      this.$emit('init', event, slick);
    },

    onReInit: function onReInit(event, slick) {
      this.$emit('reInit', event, slick);
    },

    onSetPosition: function onSetPosition(event, slick) {
      this.$emit('setPosition', event, slick);
    },

    onSwipe: function onSwipe(event, slick, direction) {
      this.$emit('swipe', event, slick, direction);
    },

    onLazyLoaded: function onLazyLoaded(event, slick, image, imageSource) {
      this.$emit('lazyLoaded', event, slick, image, imageSource);
    },

    onLazyLoadError: function onLazyLoadError(event, slick, image, imageSource) {
      this.$emit('lazyLoadError', event, slick, image, imageSource);
    }
  }

});

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(50)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14c5b163", module.exports)
  }
}

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(597);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("05c7039f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1290fd9a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Family.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1290fd9a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Family.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css);", ""]);

// module
exports.push([module.i, "\n@charset \"UTF-8\";\n#block-family .fadein {\n  top: 0 !important;\n  opacity: 1 !important;\n  -webkit-transition: all .5s ease-out;\n  transition: all .5s ease-out;\n}\n#block-family .fadein .big_title {\n    -webkit-transform: translateY(0) !important;\n            transform: translateY(0) !important;\n    -webkit-transition: all .5s ease-out;\n    transition: all .5s ease-out;\n}\n#block-family .fadein img {\n    -webkit-transform: translateY(0) !important;\n            transform: translateY(0) !important;\n    -webkit-transition: all .5s ease-out;\n    transition: all .5s ease-out;\n}\n#block-family .slideshow:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: url(/images/family_bg_back.png);\n  top: 0;\n  left: 0;\n  background-repeat: no-repeat;\n  background-position: bottom;\n}\n#block-family .slideshow .slider {\n  position: relative;\n  overflow: hidden;\n  height: 90vh;\n  -webkit-clip-path: ellipse(80vw 55vh at 50vw 30vh);\n          clip-path: ellipse(80vw 55vh at 50vw 30vh);\n  z-index: 2;\n  background-size: cover;\n}\n#block-family .slideshow .slider:before {\n    background: rgba(74, 31, 12, 0.5);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n#block-family .slideshow .slider p {\n    z-index: 2;\n}\n#block-family .slideshow .slider .slide-title {\n    font-size: 10vw;\n    font-weight: 600;\n}\n#block-family .slideshow .slider .slide-subtitle {\n    font-size: 42px;\n    font-weight: 500;\n}\n#block-family .slideshow .slider .slide-text {\n    font-size: 18px;\n    bottom: 18vh;\n    cursor: pointer;\n}\n#block-family .slideshow .slider .slide-text:before, #block-family .slideshow .slider .slide-text:after {\n      content: \"\";\n      position: absolute;\n      width: 2px;\n      height: calc(11vh + 60px);\n      background: white;\n      left: 50%;\n      top: 50px;\n}\n#block-family .slideshow .slider .slide-text:before {\n      opacity: 0.6;\n}\n#block-family .slideshow .slider .slide-text:after {\n      height: 30px;\n      -webkit-animation: scrolling 1.5s infinite ease-in-out;\n              animation: scrolling 1.5s infinite ease-in-out;\n      background: #f3621d;\n}\n#block-family .slideshow .slider:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(56, 26, 2, 0.16);\n}\n@-webkit-keyframes scrolling {\n100% {\n    top: calc(10vh + 30px);\n}\n}\n@keyframes scrolling {\n100% {\n    top: calc(10vh + 30px);\n}\n}\n#block-family #family-intro .family-title {\n  font-size: 45px;\n  padding-right: 10vw;\n  line-height: 67px;\n  position: relative;\n  margin-top: 80px;\n  padding-right: 80px;\n  top: 100px;\n  opacity: 0;\n  -webkit-transition: all .3s ease-out;\n  transition: all .3s ease-out;\n}\n#block-family #family-intro .family-title:before {\n    content: \"\";\n    position: absolute;\n    width: 1.6px;\n    height: 50px;\n    background: #f26e22;\n    top: 14px;\n    right: 65px;\n}\n#block-family #family-intro .family-step-list #step-0:before {\n  background-image: url(/images/family_bg1.png);\n  left: 0;\n  top: -150%;\n}\n#block-family #family-intro .family-step-list #step-1:before {\n  background-image: url(/images/family_bg2.png);\n  background-position: right;\n  top: -80%;\n}\n#block-family #family-intro .family-step-list #step-2:before {\n  background-image: url(/images/family_bg3.png);\n  top: -50%;\n}\n#block-family #family-intro .family-step-list .family-step {\n  margin-bottom: 350px;\n  position: relative;\n}\n#block-family #family-intro .family-step-list .family-step:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    padding-top: 95%;\n}\n#block-family #family-intro .family-step-list .family-step .left {\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6;\n    opacity: 0;\n    -webkit-transition: all .6s ease-out;\n    transition: all .6s ease-out;\n}\n#block-family #family-intro .family-step-list .family-step .left .big_title {\n      z-index: 1;\n      -webkit-transform: translateY(350px);\n              transform: translateY(350px);\n}\n#block-family #family-intro .family-step-list .family-step .left img {\n      -webkit-transform: translateY(150px);\n              transform: translateY(150px);\n      -webkit-box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);\n              box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);\n}\n#block-family #family-intro .family-step-list .family-step .right {\n    top: 300px;\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n    opacity: 0;\n    -webkit-transition: all .6s ease-out;\n    transition: all .6s ease-out;\n}\n#block-family #family-intro .family-step-list .family-step .right .big_title {\n      z-index: 1;\n      -webkit-transform: translateY(350px);\n              transform: translateY(350px);\n}\n#block-family #family-intro .family-step-list .family-step .right img {\n      -webkit-transform: translateY(150px);\n              transform: translateY(150px);\n}\n#block-family #family-intro .family-step-list .family-step:nth-child(2n) {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n#block-family #family-intro .family-step-list .family-step:nth-child(2n) .big_title {\n      text-align: right;\n}\n#block-family #family-intro .family-step-list .family-step:nth-child(2n) .big_title, #block-family #family-intro .family-step-list .family-step:nth-child(2n) .step-title, #block-family #family-intro .family-step-list .family-step:nth-child(2n) .subtitle, #block-family #family-intro .family-step-list .family-step:nth-child(2n) .desc {\n      margin-right: 0;\n      margin-left: auto;\n}\n#block-family #family-intro .family-step-list .family-step .big_title, #block-family #family-intro .family-step-list .family-step .step-title, #block-family #family-intro .family-step-list .family-step .subtitle, #block-family #family-intro .family-step-list .family-step .desc {\n    font-weight: 500;\n    width: 60%;\n}\n#block-family #family-intro .family-step-list .family-step .big_title {\n    opacity: 0.6;\n    font-size: 250px;\n    top: -210px;\n    font-weight: 600;\n    width: 100%;\n    padding: 0 80px;\n}\n#block-family #family-intro .family-step-list .family-step .step-title {\n    font-size: 35px;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-bottom: 25px;\n    padding-right: 45px;\n    border-right: 1px solid;\n    line-height: 45px;\n}\n#block-family #family-intro .family-step-list .family-step .subtitle {\n    font-size: 23px;\n    margin-bottom: 40px;\n}\n#block-family #family-intro .family-step-list .family-step .desc {\n    color: gray;\n}\n#block-family #teams-say .team-content {\n  background-position: center;\n  background-size: cover;\n}\n#block-family #teams-say .team-content .team-content-texts:before {\n    content: \"\";\n    position: absolute;\n    background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(transparent));\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);\n    width: 100vw;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n}\n#block-family #teams-say .teams-view {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#block-family #teams-say .teams-view .team-content-texts {\n    width: 60%;\n    height: 700px;\n    padding: 20vw 0 20vw 20vw;\n}\n#block-family #teams-say .teams-view:after {\n    content: \"\";\n    position: absolute;\n    top: calc(50% - 215px);\n    left: 180px;\n    background-image: url(/images/q.png);\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 332px;\n    height: 430px;\n}\n#block-family #teams-say .teams-view h3 {\n    margin-bottom: 50px;\n    font-size: 40px;\n    z-index: 2;\n}\n#block-family #teams-say .teams-view .team-desc {\n    line-height: 40px;\n    font-size: 18px;\n    margin-bottom: 30px;\n    padding-left: 100px;\n    z-index: 2;\n}\n#block-family #teams-say .teams-view .team-desc:before {\n      content: '\\201C';\n      font-size: 150px;\n      position: absolute;\n      left: auto;\n      top: 20px;\n      color: #f26d22;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n}\n#block-family #teams-say .teams-view .team-name {\n    font-size: 20px;\n    z-index: 2;\n}\n#block-family #teams-say .teams .slick-current .team-item .team-title {\n  color: white;\n}\n#block-family #teams-say .teams .slick-current .team-item:before {\n  background: rgba(242, 108, 36, 0.85);\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#block-family #teams-say .teams .team-item {\n  height: 25vw;\n  cursor: pointer;\n  -webkit-box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.15);\n          box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.15);\n  background-size: cover;\n  background-position: center;\n}\n#block-family #teams-say .teams .team-item:nth-child(1) {\n    z-index: 3;\n}\n#block-family #teams-say .teams .team-item:nth-child(2) {\n    z-index: 2;\n}\n#block-family #teams-say .teams .team-item:nth-child(3) {\n    z-index: 1;\n}\n#block-family #teams-say .teams .team-item:nth-child(4) {\n    z-index: 0;\n}\n#block-family #teams-say .teams .team-item .team-title {\n    font-size: 35px;\n    color: #f26c24;\n    z-index: 1;\n}\n#block-family #teams-say .teams .team-item:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: white;\n}\n#block-family #teams-say .teams .team-item:hover .team-title {\n    color: white;\n}\n#block-family #teams-say .teams .team-item:hover:before {\n    background: rgba(242, 108, 36, 0.85);\n    -webkit-transition: all .5s;\n    transition: all .5s;\n}\n@-webkit-keyframes swichAnimate {\n100% {\n    opacity: 0;\n}\n}\n@keyframes swichAnimate {\n100% {\n    opacity: 0;\n}\n}\n@media only screen and (max-width: 991px) {\n#block-family .slideshow:after {\n    display: none;\n}\n#block-family .slideshow .slider {\n    -webkit-clip-path: none;\n            clip-path: none;\n    height: 220px;\n    padding-bottom: 10px;\n}\n#block-family .slideshow .slider .slide-title {\n      font-size: 32px;\n      letter-spacing: 5px;\n      font-weight: 500;\n      margin-bottom: 5px;\n}\n#block-family .slideshow .slider .slide-subtitle {\n      font-size: 16px;\n      text-align: center !important;\n}\n#block-family #family-intro .family-step-list .family-step {\n    margin: 50px 0 0 0;\n}\n#block-family #family-intro .family-step-list .family-step .left .big_title {\n      font-size: 23px;\n      top: 0;\n      white-space: nowrap;\n      padding: 0;\n      font-weight: 400;\n      opacity: 1;\n      position: relative !important;\n      text-align: center;\n      margin-bottom: 25px;\n}\n#block-family #family-intro .family-step-list .family-step .left img {\n      padding: 0 20px;\n}\n#block-family #family-intro .family-step-list .family-step .right {\n      padding: 20px !important;\n}\n#block-family #family-intro .family-step-list .family-step .step-title, #block-family #family-intro .family-step-list .family-step .subtitle, #block-family #family-intro .family-step-list .family-step .desc {\n      font-size: 16px;\n      width: 100%;\n}\n#block-family #family-intro .family-step-list .family-step .step-title {\n      padding: 0;\n      margin: 0;\n      border: none;\n}\n#block-family #family-intro .family-step-list .family-step .subtitle {\n      margin-bottom: 15px;\n}\n#block-family #family-intro .family-step-list .family-step .desc {\n      font-size: 14px;\n}\n#block-family #teams-say {\n    margin-top: 50px;\n}\n#block-family #teams-say h3 {\n      font-size: 21px;\n      color: #f26e22;\n      text-align: center;\n      margin-bottom: 22px;\n}\n#block-family #teams-say .teams-content {\n      padding: 0;\n      min-height: unset;\n}\n#block-family #teams-say .teams-content .team-content-texts {\n        width: 100%;\n        height: 300px;\n        padding: 40px 20px;\n        background-size: cover;\n        background-position: center;\n}\n#block-family #teams-say .teams-content .team-content-texts:before {\n          content: \"\";\n          position: absolute;\n          background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(transparent));\n          background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);\n          width: 100vw;\n          height: 100%;\n          left: 0;\n          top: 0;\n          z-index: 1;\n}\n#block-family #teams-say .teams-content .team-desc {\n        padding: 0;\n        width: 60%;\n        line-height: 20px;\n        font-size: 14px;\n        letter-spacing: 1px;\n        z-index: 2;\n}\n#block-family #teams-say .teams-content .team-desc:before {\n          display: none;\n}\n#block-family #teams-say .teams-content:after {\n        display: none;\n}\n#block-family #teams-say .slick-dotted.slick-slider {\n      margin-bottom: 0;\n}\n#block-family #teams-say .slick-dots {\n      bottom: 8px;\n}\n#block-family #teams-say .slick-dots li button:before {\n        opacity: 1;\n        color: white;\n}\n#block-family #teams-say .slick-dots li.slick-active button:before {\n        opacity: 1;\n        color: #eb5e00;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_footer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slick__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_slick__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            family_steps: [{
                img: '/images/family_1.png',
                bigTitle: '培育',
                title: '堅實踏入餐飲的第一步',
                subtitle: '要學，就像向最好的學習',
                desc: '測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字'
            }, {
                img: '/images/family_2.png',
                bigTitle: '家庭',
                title: '堅實踏入餐飲的第一步',
                subtitle: '要學，就像向最好的學習',
                desc: '測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字'
            }, {
                img: '/images/family_3.png',
                bigTitle: '夢想',
                title: '堅實踏入餐飲的第一步',
                subtitle: '要學，就像向最好的學習',
                desc: '測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字'
            }],
            teamsOption: {
                slidesToShow: 4,
                slidesToScroll: 4,
                asNavFor: '.teams-view',
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }]
            },
            teamsOptionView: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.teams'
            },
            slick_teams: [{
                team: '橘色公關團隊1',
                member: '某某某',
                text: '「測試描述文試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s1.png',
                img_big: '/images/family_b1.png'
            }, {
                team: '橘色公關團隊2',
                member: '某某某',
                text: '「測試描述文試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s2.png',
                img_big: '/images/family_b2.png'
            }, {
                team: '橘色公關團隊3',
                member: '某某某',
                text: '「測試描述文試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s3.png',
                img_big: '/images/family_b3.png'
            }, {
                team: '橘色公關團隊4',
                member: '某某某',
                text: '「測試描述文試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s4.png',
                img_big: '/images/family_b4.png'
            }],
            teamIndex: 0
        };
    },
    components: {
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_1_components_block_footer___default.a,
        Slick: __WEBPACK_IMPORTED_MODULE_2_vue_slick___default.a
    },
    methods: {
        next: function next() {
            this.$refs.slick.next();
        },
        prev: function prev() {
            this.$refs.slick.prev();
        },
        reInit: function reInit() {
            var _this = this;

            console.log("reinit");
            this.$nextTick(function () {
                _this.$refs.slick.reSlick();
            });
        },
        onScolldown: function onScolldown() {
            $('html, body').animate({
                scrollTop: 900
            }, 600);
        },
        handleInit: function handleInit(event, slick) {
            console.log('handleInit', event, slick);
        }
    },
    mounted: function mounted() {
        jQuery(document).ready(function () {
            fadein();
            jQuery(window).scroll(function () {
                fadein();
            });

            jQuery(window).resize(function () {
                jQuery(".slick-slider").slick('resize');
            });

            function fadein() {
                var nowp = jQuery(window).scrollTop();
                if (nowp >= 200) {
                    jQuery(".family-title").addClass("fadein");
                } else {
                    jQuery(".family-title").removeClass("fadein");
                }
                for (var i = 0; i <= 2; i++) {
                    if (jQuery("#step-" + i).length > 0) {
                        var nowb = jQuery("#step-" + i);
                        if (nowp >= nowb.offset().top - 700) {
                            nowb.find(".left , .right").addClass("fadein");
                        } else if (nowp < nowb.offset().top - 1200) {
                            nowb.find(".left , .right").removeClass("fadein");
                        }
                    }
                }
            }
        });
    }
});

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "block-family" } },
    [
      _c("div", { staticClass: "slideshow position-relative" }, [
        _c(
          "div",
          {
            staticClass:
              "slider position-relative d-flex flex-column align-items-center justify-content-end justify-content-lg-center",
            staticStyle: { "background-image": "url('/images/family_bg.png')" }
          },
          [
            _c("p", { staticClass: "slide-title text-white" }, [
              _vm._v("實現你未來的夢想")
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "p",
              {
                staticClass:
                  "slide-text text-white position-absolute d-none d-lg-block",
                on: { click: _vm.onScolldown }
              },
              [_vm._v("讓我們帶你實現夢想！")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "family-intro" } }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "family-step-list" },
          _vm._l(_vm.family_steps, function(item, $index) {
            return _c(
              "div",
              {
                key: $index,
                staticClass: "family-step d-flex flex-column flex-lg-row",
                class: { "flex-lg-row-reverse": $index == 1 },
                attrs: { id: "step-" + $index }
              },
              [
                _c("div", { staticClass: "left position-relative" }, [
                  _c(
                    "h1",
                    { staticClass: "big_title text-orange position-absolute" },
                    [_vm._v(_vm._s(item.bigTitle))]
                  ),
                  _vm._v(" "),
                  _c("img", { staticClass: "w-100", attrs: { src: item.img } })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "right position-relative p-5 d-flex flex-column justify-content-center"
                  },
                  [
                    _c("div", { staticClass: "family-content" }, [
                      _c("p", { staticClass: "step-title text-orange" }, [
                        _vm._v(_vm._s(item.title))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "subtitle" }, [
                        _vm._v(_vm._s(item.subtitle))
                      ]),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "desc",
                        domProps: { innerHTML: _vm._s(item.desc) }
                      })
                    ])
                  ]
                )
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-none d-lg-block", attrs: { id: "teams-say" } },
        [
          _c(
            "slick",
            {
              ref: "slick",
              staticClass: "teams-view",
              attrs: { options: _vm.teamsOptionView }
            },
            _vm._l(_vm.slick_teams, function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass: "team-content",
                  style: "background-image:url(" + item.img_big + ")"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "team-content-texts position-relative d-flex flex-column justify-content-center text-white"
                    },
                    [
                      _c("h3", { staticClass: " position-relative" }, [
                        _vm._v("看看我們的夥伴們怎麼說")
                      ]),
                      _vm._v(" "),
                      _c("p", {
                        staticClass: "team-desc position-relative",
                        domProps: { innerHTML: _vm._s(item.text) }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "team-name d-block text-right  position-relative"
                        },
                        [
                          _vm._v(
                            "- " + _vm._s(item.team) + " " + _vm._s(item.member)
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            })
          ),
          _vm._v(" "),
          _c(
            "slick",
            {
              ref: "slick",
              staticClass: "teams",
              attrs: { options: _vm.teamsOption }
            },
            _vm._l(_vm.slick_teams, function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass:
                    "team-item position-relative d-flex flex-column align-items-center justify-content-center",
                  class: { active: $index == 0 },
                  style: "background-image:url(" + item.img + ")",
                  on: {
                    click: function($event) {
                      _vm.teamIndex = $index
                    }
                  }
                },
                [
                  _c("p", { staticClass: "team-title text-center" }, [
                    _vm._v(_vm._s(item.team)),
                    _c("br"),
                    _vm._v(_vm._s(item.member))
                  ])
                ]
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-block d-lg-none", attrs: { id: "teams-say" } },
        [
          _c("h3", [_vm._v("看看我們的夥伴們怎麼說")]),
          _vm._v(" "),
          _c(
            "slick",
            {
              ref: "slick",
              staticClass: "teams",
              attrs: { options: _vm.teamsOption }
            },
            _vm._l(_vm.slick_teams, function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass:
                    "d-flex teams-content text-white position-relative align-items-center"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "team-content-texts position-relative",
                      style: "background-image:url(" + item.img_big + ")"
                    },
                    [
                      _c("p", {
                        staticClass: "team-desc position-relative",
                        domProps: { innerHTML: _vm._s(item.text) }
                      })
                    ]
                  )
                ]
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("block-footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "slide-subtitle text-white" }, [
      _vm._v("\n                踏足餐飲業的堅實第一步"),
      _c("br"),
      _vm._v("\n                橘色大家庭為你實現\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h2",
      { staticClass: "family-title text-orange text-right d-none d-lg-block" },
      [
        _vm._v("橘色"),
        _c("br"),
        _vm._v("引領你築夢踏實"),
        _c("br"),
        _vm._v("一步一步達成夢想")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1290fd9a", module.exports)
  }
}

/***/ })

});