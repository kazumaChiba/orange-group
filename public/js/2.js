webpackJsonp([2],{

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(438)
  __webpack_require__(440)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(442)
/* template */
var __vue_template__ = __webpack_require__(466)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e3a27224"
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
Component.options.__file = "resources/assets/pages/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3a27224", Component.options)
  } else {
    hotAPI.reload("data-v-e3a27224", Component.options)
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

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(439);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("c420dc4c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#fullpage[data-v-e3a27224] {\n  -webkit-transition-duration: .8s !important;\n          transition-duration: .8s !important;\n  -webkit-transition-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;\n          transition-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;\n}\n#burger-menu[data-v-e3a27224] {\n  width: 0px;\n  height: 25px;\n  text-align: center;\n  overflow: hidden;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  position: absolute;\n  right: 30px;\n  top: 53px;\n  z-index: 9999999;\n}\n#burger-menu[data-v-e3a27224]:before {\n    content: \"|||\";\n    color: #f26c23;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    display: inline-block;\n    font-weight: bold;\n}\n#burger-menu[data-v-e3a27224]:hover {\n    cursor: pointer;\n}\n#burger-menu.menu-close[data-v-e3a27224] {\n    width: 25px;\n}\n#app .logo[data-v-e3a27224] {\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(441);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("648b341c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#fp-nav.fp-right {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  visibility: hidden;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n  right: 0;\n  width: unset;\n}\n#fp-nav.fp-right.active {\n    visibility: visible;\n    opacity: 1;\n}\n#fp-nav.fp-right ul li {\n    width: 100%;\n    height: 25px;\n    margin: 5px 0;\n}\n#fp-nav.fp-right ul li:last-child {\n      display: none;\n}\n#fp-nav.fp-right ul li span {\n      display: none;\n}\n#fp-nav.fp-right ul li .fp-tooltip.fp-right {\n      color: #ccc;\n      opacity: 1;\n      width: auto;\n      font-size: 14px;\n      letter-spacing: 0px;\n      font-style: italic;\n      right: 0;\n      overflow: visible;\n      position: relative;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0 50px;\n      font-weight: 300;\n}\n#fp-nav.fp-right ul li:hover div, #fp-nav.fp-right ul li a.active + div {\n      cursor: pointer;\n      background: #f26c23;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      color: white !important;\n}\n#fp-nav.fp-right ul li a {\n      position: absolute;\n      top: 0;\n      left: 0;\n}\n#app .fp-scroller {\n  min-height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_experience__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_block_brands__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_block_news__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_block_foods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_block_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_fullpage_js__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue2_scrollbar__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue2_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue2_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_perfect_scrollbar__ = __webpack_require__(465);
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
        // https://github.com/alvarotrigo/fullPage.js/
        return {
            options: {
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                sectionSelector: '.section',
                scrollOverflow: false,
                navigation: true,
                navigationTooltips: ['橘色體驗', '橘色價值', '橘色版圖', '橘色新訊'],
                afterLoad: this.afterLoad,
                slidesNavigation: true,
                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                lazyLoading: true
            },
            sectionIndex: 0,
            sectionPosition: 'section-1',
            closeMenu: false,
            textShadow: false,
            display_fullpage: true,
            api: undefined,
            ps: undefined
        };
    },
    mounted: function mounted() {
        var _this = this;

        jQuery(document).ready(function () {

            var container = document.querySelector('#block-news-scroll');

            _this.ps = new __WEBPACK_IMPORTED_MODULE_8_perfect_scrollbar__["a" /* default */](container, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
            });

            container.addEventListener('ps-y-reach-start', function () {
                setTimeout(function () {
                    fullpage_api.setAllowScrolling(true);
                }, 10);
            });
            container.addEventListener('ps-y-reach-end', function () {
                setTimeout(function () {
                    fullpage_api.setAllowScrolling(true);
                }, 10);
            });

            window.addEventListener('resize', _this.handleResize());
        });
    },

    methods: {
        afterLoad: function afterLoad(originSection, activeSection) {
            if (this.ps) {
                this.ps.update();
            }

            if (activeSection.index == 3) {
                fullpage_api.setAllowScrolling(false);
            }

            if (!activeSection.isFirst && !activeSection.isLast) {
                //this.options.navigation = true
                jQuery("#fp-nav").addClass("active");
            } else {
                //this.options.navigation = false
                jQuery("#fp-nav").removeClass("active");
            }
            this.sectionIndex = activeSection.index;
            this.sectionPosition = 'section-' + activeSection.index;

            if (activeSection.isFirst) {
                this.closeMenu = false;
            } else {
                this.closeMenu = true;
            }

            if (activeSection.index == 1 || activeSection.index == 3) {
                this.textShadow = true;
            } else {
                this.textShadow = false;
            }
        },
        handleMaxScroll: function handleMaxScroll(direction) {
            console.log(direction);
            //fullpage_api.setAllowScrolling(true)
            //console.log(direction);
        },
        handleResize: function handleResize() {
            console.log("resize");
            fullpage_api.reBuild();
        }
    },
    components: {
        VueScrollbar: __WEBPACK_IMPORTED_MODULE_7_vue2_scrollbar___default.a,
        VueFullPage: __WEBPACK_IMPORTED_MODULE_6_vue_fullpage_js___default.a,
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default.a,
        BlockExperience: __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default.a,
        BlockBrands: __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default.a,
        BlockNews: __WEBPACK_IMPORTED_MODULE_3_components_block_news___default.a,
        BlockFoods: __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_5_components_block_footer___default.a
    }

});

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(444)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(446)
/* template */
var __vue_template__ = __webpack_require__(447)
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
Component.options.__file = "resources/assets/components/block-experience.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51cbfe2f", Component.options)
  } else {
    hotAPI.reload("data-v-51cbfe2f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(445);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("b9557f26", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-51cbfe2f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-experience.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-51cbfe2f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-experience.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#loading-circle .loading-bar {\n  stroke: #732A0A;\n  stroke-width: 9px;\n  stroke-linecap: square;\n  fill: none;\n  -webkit-transform-origin: center center 0px;\n          transform-origin: center center 0px;\n  -webkit-clip-path: url(#circle2);\n          clip-path: url(#circle2);\n  opacity: 0.5;\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n  -webkit-transition: stroke-dasharray 0.3s linear, stroke 5s linear;\n  transition: stroke-dasharray 0.3s linear, stroke 5s linear;\n}\n#loading-circle .loading-bar.run {\n    stroke: #732A0A;\n}\n#loading-circle .loading-bar.rotate {\n    stroke: #f26d23;\n    -webkit-transition: stroke-dasharray 0.3s, stroke-opacity 1.2s;\n    transition: stroke-dasharray 0.3s, stroke-opacity 1.2s;\n}\n#block-experience {\n  background-size: cover;\n}\n#block-experience:before {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    background: black;\n    content: \"\";\n    left: 0;\n    opacity: 0.5;\n    top: calc(50% - 50vh);\n    z-index: 4;\n    content: \"\";\n    word-break: keep-all;\n}\n#block-experience.active .bg-transition.bg-left .bg-inner, #block-experience.active .bg-transition.bg-right .bg-inner, #block-experience.active .bg-transition.active .bg-inner {\n    background-position-y: 0;\n    -webkit-transition: all .8s;\n    transition: all .8s;\n}\n#block-experience .bg-transition.bg-left .bg-inner, #block-experience .bg-transition.bg-right .bg-inner {\n    background-position-y: -100vh;\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n}\n#block-experience .bg-transition.bg-left .bg-inner.active, #block-experience .bg-transition.bg-right .bg-inner.active {\n      background-position-y: 0;\n      opacity: 1;\n}\n#block-experience .bg-transition.bg-right {\n    z-index: 2;\n    right: 0;\n}\n#block-experience .bg-transition.bg-right .bg-inner {\n      right: 0;\n      background-position-y: 100vh;\n}\n#block-experience .bg-transition.bg-right:before {\n      width: 100%;\n      opacity: 0.4;\n}\n#block-experience .bg-transition.bg-right .bg-inner.active {\n      background-position-y: 100vh;\n      opacity: 0;\n}\n#block-experience .bg-transition.bg-left {\n    z-index: 3;\n}\n#block-experience .bg-transition.bg-left:before {\n      width: 100%;\n}\n#block-experience .bg-transition.bg-left .bg-inner {\n      left: 0;\n}\n#block-experience .bg-transition.bg-left .bg-inner.active {\n        background-position-y: -100vh;\n        opacity: 0;\n}\n#block-experience .fp-scroller {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#block-experience #content-experience {\n    z-index: 4;\n}\n#block-experience #content-experience .big_title {\n      font-size: 200px;\n      letter-spacing: 30px;\n      color: rgba(255, 255, 255, 0.2);\n      position: absolute;\n      left: 0;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 50%;\n      white-space: nowrap;\n      pointer-events: none;\n}\n#block-experience #content-experience .experience-inner {\n      width: 350px;\n      margin: 0 auto;\n      text-align: left;\n      font-weight: 300;\n}\n#block-experience #content-experience .experience-inner .experience-item {\n        -webkit-transition: opacity .5s;\n        transition: opacity .5s;\n}\n#block-experience #content-experience .experience-inner h5 {\n        letter-spacing: 4px;\n        font-weight: 300;\n}\n#block-experience #content-experience .experience-inner h5 span {\n          letter-spacing: 7px;\n          line-height: 25px;\n          font-size: 22px;\n}\n#block-experience #content-experience .experience-inner .left-line:before {\n        content: \"\";\n        display: inline-block;\n        width: 20px;\n        height: 5px;\n        background: #f26d23;\n        margin-right: 10px;\n        vertical-align: middle;\n}\n#block-experience #content-experience .experience-circle {\n      position: absolute;\n      top: calc(50% - 250px);\n      left: calc(50% - 250px);\n}\n#block-experience #content-experience .experience-circle .circle-option {\n        position: absolute;\n        width: 500px;\n        height: 500px;\n}\n#block-experience #content-experience .experience-circle .circle-body {\n        width: 500px;\n        opacity: 0.75;\n}\n#block-experience #content-experience .experience-circle .circle-body.active .circle-line.left:after {\n          -webkit-transform: rotate(320deg);\n                  transform: rotate(320deg);\n          -webkit-transition: all .8s;\n          transition: all .8s;\n          opacity: 1;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line {\n          position: absolute;\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line:before, #block-experience #content-experience .experience-circle .circle-body .circle-line.left:after {\n            content: \"\";\n            display: block;\n            width: 200%;\n            height: 100%;\n            border: 28px solid rgba(242, 109, 35, 0.8);\n            border-radius: 100%;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.left {\n            left: 0;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.left:before, #block-experience #content-experience .experience-circle .circle-body .circle-line.left:after {\n              border-bottom-color: transparent;\n              border-left-color: transparent;\n              -webkit-transform: rotate(-40deg);\n                      transform: rotate(-40deg);\n              -webkit-clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%);\n                      clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%);\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.right {\n            right: 0;\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg);\n}\n#block-experience #content-experience .experience-circle .circle-option {\n        -webkit-transition: all 2s;\n        transition: all 2s;\n        -webkit-transform: rotate(0) scale(1.2);\n                transform: rotate(0) scale(1.2);\n        top: 0;\n}\n#block-experience #content-experience .experience-circle .circle-option.active {\n          opacity: 0;\n          -webkit-transition: opacity .3s;\n          transition: opacity .3s;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option {\n          position: absolute;\n          width: 36px;\n          height: 36px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option:hover {\n            cursor: pointer;\n            color: #f26d23;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.top {\n            top: calc(-40px - 18px);\n            left: calc(50% - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.bottom {\n            bottom: calc(-40px - 18px);\n            left: calc(50% - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.right {\n            top: calc(50% - 18px);\n            right: calc(-40px - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.left {\n            top: calc(50% - 18px);\n            left: calc(-40px - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option a {\n            word-break: keep-all;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.active {\n            opacity: 0;\n            -webkit-transition: opacity 1s;\n            transition: opacity 1s;\n            -webkit-transition-delay: .5s;\n                    transition-delay: .5s;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 {\n          -webkit-transform: rotate(0deg) scale(1.05);\n                  transform: rotate(0deg) scale(1.05);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(0deg) !important;\n                    transform: rotate(0deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 {\n          -webkit-transform: rotate(-90deg) scale(1.05);\n                  transform: rotate(-90deg) scale(1.05);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(90deg) !important;\n                    transform: rotate(90deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 {\n          -webkit-transform: rotate(-180deg) scale(1.05);\n                  transform: rotate(-180deg) scale(1.05);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(180deg) !important;\n                    transform: rotate(180deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 {\n          -webkit-transform: rotate(-270deg) scale(1.05);\n                  transform: rotate(-270deg) scale(1.05);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(270deg) !important;\n                    transform: rotate(270deg) !important;\n}\n@media only screen and (max-width: 767px) {\n#block-experience #content-experience {\n    -webkit-transform: scale(0.55);\n            transform: scale(0.55);\n}\n#block-experience #content-experience .experience-inner h5 span {\n      font-size: 28px;\n      line-height: 45px;\n}\n#block-experience #content-experience .experience-inner a {\n      font-size: 23px !important;\n      letter-spacing: 3px;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option a {\n      font-size: 22px;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.top {\n      top: calc(-10px - 18px - 20px);\n      left: calc(50% - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.bottom {\n      bottom: calc(-10px - 18px - 20px);\n      left: calc(50% - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.right {\n      top: calc(50% - 18px);\n      right: calc(-10px - 18px - 20px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.left {\n      top: calc(50% - 18px);\n      left: calc(-10px - 18px - 20px);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 a {\n      -webkit-transform: rotate(0deg) scale(1.7) !important;\n              transform: rotate(0deg) scale(1.7) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 a {\n      -webkit-transform: rotate(90deg) scale(1.7) !important;\n              transform: rotate(90deg) scale(1.7) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 a {\n      -webkit-transform: rotate(180deg) scale(1.7) !important;\n              transform: rotate(180deg) scale(1.7) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 a {\n      -webkit-transform: rotate(270deg) scale(1.7) !important;\n              transform: rotate(270deg) scale(1.7) !important;\n}\n}\n@media only screen and (max-width: 420px) {\n#block-experience #content-experience {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 446:
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
            bgTransition: false,
            experience_view: 'ex',
            experience: [{
                'url': '/images/home1_ex.png',
                'title': '橘色體驗'
            }, {
                'url': '/images/home1_pot.png',
                'title': '橘色鍋物'
            }, {
                'url': '/images/home1_coffee.png',
                'title': '橘色咖啡'
            }, {
                'url': '/images/home1_spa.png',
                'title': '橘色舒體'
            }],
            experience_index: 0,
            experience_index_old: 0,
            is_run: false,
            is_rotate: false,
            circle_stop: false,
            circle_dasharray: 0
        };
    },
    components: {
        'ex': {
            template: '<div>' + '<h2 class="mb-2 mb-md-4 text-center"><span class="fs-inherit text-orange">橘色</span> 體驗</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>' + '</div>'
        },
        'pot': {
            template: '<div>' + '<h2 class="mb-2 mb-md-4  text-center"><span class="fs-inherit text-orange">橘色</span> 鍋物</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>' + '</div>'
        },
        'coffee': {
            template: '<div>' + '<h2 class="mb-2 mb-md-4 text-center"><span class="fs-inherit text-orange">橘色</span> 咖啡</h2>' + '<h5 class="mb-4"><span class="fs-inheri">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色咖啡</router-link>' + '</div>'
        },
        'spa': {
            template: '<div>' + '<h2 class="mb-2 mb-md-4 "><span class="fs-inherit text-orange">橘色</span> 舒體</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色舒體</router-link>' + '</div>'
        }
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            setInterval(function () {
                _this.is_run = true;
                //this.onPlusStep()
            }, 300);
        }, 1300);
    },

    methods: {
        bgAnimated: function bgAnimated(time) {
            var _this2 = this;

            this.bgTransition = true;
            setTimeout(function () {
                _this2.bgTransition = false;
            }, parseInt(time));
            setTimeout(function () {
                _this2.experience_index_old = _this2.experience_index;
            }, parseInt(time) + 800);
        },
        onClickCircleItem: function onClickCircleItem(index, view) {
            this.experience_view = view;
            this.experience_index = index;
            this.bgAnimated(800);

            this.onStartRotate();
        },
        onPlusStep: function onPlusStep() {
            if (!this.is_rotate && !this.circle_stop) {
                this.circle_dasharray = this.circle_dasharray + 19;
            }

            if (this.circle_dasharray > 320 && !this.is_rotate && !this.circle_stop) {

                this.onStartRotate();

                if (this.experience_index == 0) {
                    this.onClickCircleItem(1, 'pot');
                } else if (this.experience_index == 1) {
                    this.onClickCircleItem(2, 'coffee');
                } else if (this.experience_index == 2) {
                    this.onClickCircleItem(3, 'spa');
                } else {
                    this.onClickCircleItem(0, 'ex');
                }
            }
        },
        onStopStep: function onStopStep() {
            this.circle_stop = true;
        },
        onContinueStep: function onContinueStep() {
            this.circle_stop = false;
        },
        onStartRotate: function onStartRotate() {
            var _this3 = this;

            this.is_rotate = true;

            setTimeout(function () {
                _this3.circle_dasharray = 0;
            }, 600);

            setTimeout(function () {
                _this3.is_rotate = false;
            }, 1200);
        }
    }
});

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "position-relative section text-white text-center h-100",
      style:
        "background-image:url(" +
        _vm.experience[_vm.experience_index_old].url +
        ")",
      attrs: { id: "block-experience" }
    },
    [
      _c(
        "div",
        {
          staticClass: "bg-transition bg-left",
          class: { active: _vm.bgTransition }
        },
        [
          _c("div", {
            staticClass: "bg-inner position-absolute",
            class: { active: _vm.bgTransition },
            style:
              "background-image:url(" +
              _vm.experience[_vm.experience_index].url +
              ")"
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bg-transition bg-right" }, [
        _c("div", {
          staticClass: "bg-inner position-absolute",
          class: { active: _vm.bgTransition },
          style:
            "background-image:url(" +
            _vm.experience[_vm.experience_index].url +
            ")"
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "position-relative",
          attrs: { id: "content-experience" }
        },
        [
          _c("h1", { staticClass: "big_title d-none d-lg-block" }, [
            _vm._v(_vm._s(_vm.experience[_vm.experience_index].title))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "experience-inner position-relative" },
            [
              _c(
                "transition",
                { attrs: { name: "fade", mode: "out-in" } },
                [
                  _c(_vm.experience_view, {
                    tag: "component",
                    staticClass: "experience-item"
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "experience-circle",
              on: {
                mouseenter: function($event) {
                  _vm.onStopStep()
                },
                mouseleave: function($event) {
                  _vm.onContinueStep()
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "circle-body position-relative",
                  class: { active: _vm.bgTransition }
                },
                [
                  _c(
                    "svg",
                    {
                      attrs: {
                        id: "loading-circle",
                        x: "0px",
                        y: "0px",
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 150 150",
                        "enable-background": "new 0 0 150 150",
                        "xml:space": "preserve"
                      }
                    },
                    [
                      _c("rect", {
                        staticStyle: { "clip-path": "url(#circle)" },
                        attrs: {
                          x: "0",
                          y: "0",
                          width: "100%",
                          height: "100%",
                          fill: "#f26e22"
                        }
                      }),
                      _vm._v(" "),
                      _c("circle", {
                        staticClass: "loading-bar",
                        class: { run: _vm.is_run, rotate: _vm.is_rotate },
                        attrs: {
                          "stroke-dasharray": _vm.circle_dasharray + ",471",
                          "stroke-opacity": _vm.circle_dasharray / 300,
                          cx: "75",
                          cy: "75",
                          r: "70.5"
                        }
                      }),
                      _vm._v(" "),
                      _c("clipPath", { attrs: { id: "circle" } }, [
                        _c("path", {
                          attrs: {
                            fill: "#f26e22",
                            d:
                              "M75.1-0.1c-20.7,0-39.5,8.4-53.1,22l2.8,9.7C37,17.5,55,8.6,75,8.6c36.7,0,66.4,29.8,66.4,66.4\n\t\tc0,36.7-29.8,66.4-66.4,66.4c-6.5,0-12.8-1-18.8-2.7l2.8,9.7c5.1,1.1,10.5,1.7,15.9,1.7c41.5,0,75.1-33.6,75.1-75.1\n\t\tC150.2,33.5,116.6-0.1,75.1-0.1L75.1-0.1z"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "clipPath",
                        {
                          staticStyle: {
                            transform: "rotate(135deg)",
                            "transform-origin": "center"
                          },
                          attrs: { id: "circle2" }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "#f26e22",
                              d:
                                "M75.1-0.1c-20.7,0-39.5,8.4-53.1,22l2.8,9.7C37,17.5,55,8.6,75,8.6c36.7,0,66.4,29.8,66.4,66.4\n\t\tc0,36.7-29.8,66.4-66.4,66.4c-6.5,0-12.8-1-18.8-2.7l2.8,9.7c5.1,1.1,10.5,1.7,15.9,1.7c41.5,0,75.1-33.6,75.1-75.1\n\t\tC150.2,33.5,116.6-0.1,75.1-0.1L75.1-0.1z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "circle-option position-absolute",
                  class: "e_index_" + _vm.experience_index
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-circle-option left",
                      class: _vm.experience_index == 0 ? "active" : "",
                      on: {
                        mouseenter: function($event) {
                          _vm.onStopStep()
                        },
                        mouseleave: function($event) {
                          _vm.onContinueStep()
                        },
                        click: function($event) {
                          _vm.onClickCircleItem(0, "ex")
                        }
                      }
                    },
                    [_vm._v("體驗")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "text-circle-option top",
                      class: _vm.experience_index == 1 ? "active" : "",
                      on: {
                        mouseenter: function($event) {
                          _vm.onStopStep()
                        },
                        mouseleave: function($event) {
                          _vm.onContinueStep()
                        },
                        click: function($event) {
                          _vm.onClickCircleItem(1, "pot")
                        }
                      }
                    },
                    [_vm._v("鍋物")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "text-circle-option right",
                      class: _vm.experience_index == 2 ? "active" : "",
                      on: {
                        mouseenter: function($event) {
                          _vm.onStopStep()
                        },
                        mouseleave: function($event) {
                          _vm.onContinueStep()
                        },
                        click: function($event) {
                          _vm.onClickCircleItem(2, "coffee")
                        }
                      }
                    },
                    [_vm._v("咖啡")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "text-circle-option bottom",
                      class: _vm.experience_index == 3 ? "active" : "",
                      on: {
                        mouseenter: function($event) {
                          _vm.onStopStep()
                        },
                        mouseleave: function($event) {
                          _vm.onContinueStep()
                        },
                        click: function($event) {
                          _vm.onClickCircleItem(3, "spa")
                        }
                      }
                    },
                    [_vm._v("舒體")]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51cbfe2f", module.exports)
  }
}

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(449)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(451)
/* template */
var __vue_template__ = __webpack_require__(452)
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
Component.options.__file = "resources/assets/components/block-brands.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36606811", Component.options)
  } else {
    hotAPI.reload("data-v-36606811", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(450);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("7b45937c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36606811\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-brands.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-36606811\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-brands.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#app #block-brands #slide-brands-mobile {\n  margin-top: 30px;\n}\n#app #block-brands #slide-brands-mobile .content-brands .info-brands {\n    width: 300px;\n    height: 300px;\n    border: 1px solid white;\n    padding: 60px 40px;\n    font-size: 30px;\n    background-size: 100px;\n    background-repeat: no-repeat;\n    background-position: center 50px;\n}\n#app #block-brands #slide-brands-mobile .content-brands .info-brands:before {\n      content: \"\";\n      position: absolute;\n      background: rgba(242, 108, 35, 0.4);\n      width: 100%;\n      height: 100%;\n      background: rgba(242, 108, 35, 0.4);\n      border-radius: 100%;\n      left: 0;\n      z-index: -1;\n      bottom: 0;\n}\n#app #block-brands #slide-brands-mobile .content-brands .info-brands a, #app #block-brands #slide-brands-mobile .content-brands .info-brands span {\n      font-size: 16px;\n}\n#app #block-brands .fp-controlArrow.fp-next, #app #block-brands .fp-controlArrow.fp-prev {\n  border: 3px solid white;\n  width: 20px;\n  height: 20px;\n  border-radius: 5px 0 5px 0px;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n  position: absolute;\n  bottom: 90px;\n  top: unset;\n}\n#app #block-brands .fp-controlArrow.fp-prev {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#app #block-brands .bg-black-cover {\n  width: 0;\n  height: 100vh;\n  -webkit-transition: width 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: width 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  background-position: center;\n}\n#app #block-brands .bg-black-cover.select {\n    -webkit-transition: width 1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: width 1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    width: 105vw;\n}\n#app #block-brands .container {\n  z-index: 2;\n  padding: 0 15px;\n}\n#app #block-brands .container .row {\n    padding: 100px 0;\n}\n#app #block-brands .container .row .slick-slide .content-brands {\n      width: 150px;\n      height: 50px;\n      border: 1px solid white;\n      margin: 0 auto;\n      -webkit-transition: all .5s;\n      transition: all .5s;\n}\n#app #block-brands .container .row .slick-slide .content-brands .info-brands {\n        display: none !important;\n}\n#app #block-brands .container .row .slick-slide.slick-current .content-brands {\n      width: 300px;\n      height: 300px;\n      border-radius: 100%;\n}\n#app #block-brands .container .text-brands {\n    font-size: 30px;\n    letter-spacing: 20px;\n    line-height: 45px;\n    font-weight: lighter;\n}\n#app #block-brands .container .text-brands .text-orange {\n      letter-spacing: 20px;\n}\n@media only screen and (max-width: 768px) {\n#app #block-brands .fp-slides {\n    height: calc(100vh - 200px);\n}\n#app #block-brands .fp-tableCell {\n    height: 100% !important;\n}\n#app #block-brands .container #slide-brands-mobile .content-brands .info-brands {\n    width: 250px;\n    height: 250px;\n    margin-bottom: 30px;\n}\n#app #block-brands .container #slide-brands-mobile .content-brands .slick-brand-text {\n    width: 250px;\n}\n#app #block-brands .container #slide-brands-mobile .content-brands .slick-brand-text .text-brand-info {\n      line-height: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slick__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_slick__);
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
            addTransition: false,
            brandIndex: 0,
            brandIndex_old: 0,
            brandItems: [{
                url: '/images/bg_brand_1.png',
                title: 'EXTENSION by 橘色',
                text: '美食不孤單，小鍋新<span class="text-orange">新</span>食尚！<br>享受一個人的自在、兩個人的美好、一群人的熱鬧！',
                logo: '/images/home3_icon1.png',
                contact: '#',
                book: '#'
            }, {
                url: '/images/slideshow_1.jpg',
                title: 'M One Cafe',
                text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！',
                logo: '/images/home3_icon2.png',
                contact: '#',
                book: '#'
            }, {
                url: '/images/slideshow_1.jpg',
                title: '橘色鍋物',
                text: '<span class="text-orange">橘色</span>鍋物<br>不管多少人都能吃得精彩！',
                logo: '/images/icon_cafe.png',
                contact: '#',
                book: '#'
            }, {
                url: '/images/slideshow_1.jpg',
                title: '橘色舒體',
                text: '<span class="text-orange">橘色</span>舒體',
                logo: '/images/icon_m1spa.png',
                contact: '#',
                book: '#'
            }],
            slickOptions: {
                slidesToScroll: 1,
                slidesToShow: 3,
                centerMode: true,
                asNavFor: '#slide-brands'
            }
        };
    },
    methods: {
        startAnimate: function startAnimate(time) {
            var _this = this;

            this.addTransition = true;
            setTimeout(function () {
                _this.addTransition = false;
                _this.brandIndex_old = _this.brandIndex;
            }, parseInt(time));
        }
    },
    mounted: function mounted() {
        // jQuery(document).ready(function(){
        //     jQuery("#slide-brands").slick({
        //         slidesToScroll: 1,
        //         slidesToShow: 3,
        //         centerMode: true,
        //         asNavFor: '',
        //     });
        // });
    },
    components: {
        Slick: __WEBPACK_IMPORTED_MODULE_0_vue_slick___default.a
    }
});

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "section text-white position-relative text-center",
      attrs: { id: "block-brands" }
    },
    [
      _c("div", {
        staticClass: "bg-transition -old bg-black-cover",
        class: { active: _vm.addTransition, select: _vm.brandIndex == 0 },
        staticStyle: { right: "auto", left: "0" },
        style: "background-image: url(" + _vm.brandItems[0].url + ")"
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "bg-transition -new bg-black-cover",
        class: { active: _vm.addTransition, select: _vm.brandIndex == 1 },
        staticStyle: { right: "0", left: "auto" },
        style: "background-image: url(" + _vm.brandItems[1].url + ")"
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "container position-relative m-auto h-100 justify-content-center d-flex align-items-center"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "row h-100 w-100 flex-column align-items-center justify-content-between d-md-flex d-none"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "slick",
                {
                  staticClass:
                    "content-brands w-100 d-flex align-items-center justify-content-between mt-5 mb-5",
                  attrs: { id: "slide-brands", options: _vm.slickOptions }
                },
                _vm._l(_vm.brandItems, function(item, $index) {
                  return _c(
                    "div",
                    { key: $index, staticClass: "slick-brands" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "content-brands position-relative d-flex flex-column align-items-center justify-content-center"
                        },
                        [
                          _c("span", { staticClass: "brand-title" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.title) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "info-brands align-items-end position-relative d-flex justify-content-center text-left",
                              style: "background-image: url(" + item.logo + ")"
                            },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.brandItems[_vm.brandIndex].contact
                                  }
                                },
                                [_vm._v("聯絡我們")]
                              ),
                              _vm._v(" "),
                              _c("span", [_vm._v("・")]),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.brandItems[_vm.brandIndex].book
                                  }
                                },
                                [_vm._v("線上訂位")]
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
              _c("p", {
                staticClass: "text-brands",
                class: { fade: _vm.addTransition },
                domProps: {
                  innerHTML: _vm._s(_vm.brandItems[_vm.brandIndex].text)
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "d-md-none d-block　position-relative",
              attrs: { id: "slide-brands-mobile" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.brandItems, function(item, $index) {
                return _c(
                  "div",
                  { key: $index, staticClass: "slide slick-brands" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "content-brands position-relative d-flex flex-column align-items-center justify-content-center"
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "info-brands align-items-end position-relative border-radius-100 d-flex justify-content-center text-left",
                            style: "background-image: url(" + item.logo + ")"
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.brandItems[_vm.brandIndex].contact
                                }
                              },
                              [_vm._v("聯絡我們")]
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("・")]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.brandItems[_vm.brandIndex].book
                                }
                              },
                              [_vm._v("線上訂位")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "slick-brand-text" }, [
                          _c("p", { staticClass: "text-title" }, [
                            _vm._v(_vm._s(item.title))
                          ]),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "text-brand-info",
                            domProps: { innerHTML: _vm._s(item.text) }
                          })
                        ])
                      ]
                    )
                  ]
                )
              })
            ],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h3", { staticClass: "main-title text-uppercase" }, [
        _c("span", { staticClass: "fs-inherit text-orange" }, [
          _vm._v("\n                        橘色")
        ]),
        _vm._v("版圖"),
        _c("br")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "sub-title" }, [_vm._v("orange brands")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h3", { staticClass: "main-title text-uppercase" }, [
        _c("span", { staticClass: "fs-inherit text-orange" }, [
          _vm._v("\n                        橘色")
        ]),
        _vm._v("版圖"),
        _c("br")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "sub-title" }, [_vm._v("orange brands")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-36606811", module.exports)
  }
}

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(454)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(456)
/* template */
var __vue_template__ = __webpack_require__(457)
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
Component.options.__file = "resources/assets/components/block-news.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e9078d8", Component.options)
  } else {
    hotAPI.reload("data-v-1e9078d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("125a11db", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e9078d8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-news.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e9078d8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-news.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#block-news .fp-tableCell {\n  height: auto !important;\n}\n#block-news > div {\n  z-index: 3;\n  position: relative;\n}\n#block-news .news-list {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#block-news .news-list .block-list {\n    width: 20%;\n}\n#block-news .news-list .block-list.center {\n      width: 50%;\n}\n@media only screen and (max-width: 991px) {\n.section-pd {\n    padding: 0;\n}\n#app #block-news {\n    padding: 80px 0px;\n}\n#app #block-news .main-title .text-orange {\n      color: #f26e22 !important;\n}\n#app #block-news .news-categories {\n      margin-top: 0 !important;\n      display: none !important;\n}\n#app #block-news .news-list .block-list {\n      width: auto;\n}\n#app #block-news .news-list .block-list:last-child {\n        display: none;\n}\n#app #block-news .news-list .block-list.beside .news-item {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#app #block-news .news-list .block-list.beside .news-item:first-child {\n          margin-right: 5px;\n}\n#app #block-news .news-list .block-list.beside .news-item:last-child {\n          margin-left: 5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 456:
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
            newsItems: [{
                background: '/images/news_v1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: true
            }, {
                background: '/images/news_v3.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '橘色公告－員工旅遊<br>謝謝辛勤付出的每一位夥伴<br>2018/05/20(日)',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v5.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v2.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v4.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v2.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '橘色公告－員工旅遊<br>謝謝辛勤付出的每一位夥伴<br>2018/05/20(日)～2018/05/24(四)<br>員工旅遊 暫停營業',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v3.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v4.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }, {
                background: '/images/news_v5.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/',
                feature: false
            }],
            newsCategories: ['全部新訊', '橘色涮涮屋', 'Extension 1 by 橘色'],
            newsIndex: 0,
            viewIndex: 0
        };
    },
    methods: {}
});

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "news-body w-100" },
    [
      _c(
        "div",
        {
          staticClass:
            "news-categories d-flex justify-content-center text-size-2 mt-5 mb-3"
        },
        _vm._l(_vm.newsCategories, function(item, $index) {
          return _c(
            "div",
            {
              key: $index,
              staticClass: "category-items mr-4 ml-4",
              class: _vm.newsIndex == $index ? "active" : "",
              on: {
                click: function($event) {
                  _vm.newsIndex = $index
                }
              }
            },
            [_vm._v("\n            " + _vm._s(item) + "\n        ")]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "transition-group",
        {
          staticClass:
            "news-list-outer d-flex flex-column flex-wrap align-items-center",
          attrs: { name: "fade", tag: "div" }
        },
        _vm._l(_vm.viewIndex + 1, function(n, $groupIndex) {
          return _c(
            "div",
            {
              key: $groupIndex,
              staticClass:
                "news-list d-flex flex-lg-row flex-column-reverse justify-content-between w-100 "
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "block-list beside flex-row flex-lg-column d-flex justify-content-between justify-content-lg-start"
                },
                _vm._l(
                  _vm.newsItems.slice(_vm.viewIndex, _vm.viewIndex + 2),
                  function(item, $index) {
                    return _vm.newsCategories[_vm.newsIndex] == item.category ||
                      _vm.newsIndex == 0
                      ? _c(
                          "div",
                          { key: $index + "a", staticClass: "news-item" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "news-head d-flex align-items-center justify-content-center position-relative",
                                style:
                                  "background-image: url(" +
                                  item.background +
                                  ")"
                              },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn-border",
                                    attrs: { to: "/news/detail" }
                                  },
                                  [_vm._v("了解更多")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "news-content" }, [
                              _c("div", { staticClass: "news-info" }, [
                                _c(
                                  "span",
                                  { staticClass: "text-black text-size-1" },
                                  [_vm._v(_vm._s(item.date))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "text-orange text-size-1" },
                                  [_vm._v(_vm._s(item.category))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("a", {
                                staticClass: "news-title",
                                attrs: { href: item.link },
                                domProps: { innerHTML: _vm._s(item.title) }
                              })
                            ])
                          ]
                        )
                      : _vm._e()
                  }
                )
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "block-list center flex-column justify-content-between"
                },
                [
                  _vm.newsCategories[_vm.newsIndex] ==
                    _vm.newsItems[_vm.viewIndex + 2].category ||
                  _vm.newsIndex == 0
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "news-item d-flex flex-column h-100 w-100"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "news-head d-flex align-items-center justify-content-center position-relative",
                              style:
                                "background-image: url(" +
                                _vm.newsItems[_vm.viewIndex + 2].background +
                                ")"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn-border",
                                  attrs: { to: "/news/detail" }
                                },
                                [_vm._v("了解更多")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "news-content" }, [
                            _c("div", { staticClass: "news-info" }, [
                              _c(
                                "span",
                                { staticClass: "text-black text-size-1" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.newsItems[_vm.viewIndex + 2].date
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-orange text-size-1" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.newsItems[_vm.viewIndex + 2].category
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("a", {
                              staticClass: "news-title",
                              attrs: {
                                href: _vm.newsItems[_vm.viewIndex + 2].link
                              },
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.newsItems[_vm.viewIndex + 2].title
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("p", { staticClass: "mt-3" }, [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(
                                    _vm.newsItems[_vm.viewIndex + 2].intro
                                  ) +
                                  "\n                                "
                              )
                            ])
                          ])
                        ]
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "block-list beside flex-column justify-content-between"
                },
                _vm._l(
                  _vm.newsItems.slice(_vm.viewIndex + 3, _vm.viewIndex + 5),
                  function(item, $index) {
                    return _vm.newsCategories[_vm.newsIndex] == item.category ||
                      _vm.newsIndex == 0
                      ? _c("div", { key: $index, staticClass: "news-item" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "news-head d-flex align-items-center justify-content-center position-relative",
                              style:
                                "background-image: url(" + item.background + ")"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn-border",
                                  attrs: { to: "/news/detail" }
                                },
                                [_vm._v("了解更多")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "news-content" }, [
                            _c("div", { staticClass: "news-info" }, [
                              _c(
                                "span",
                                { staticClass: "text-black text-size-1" },
                                [_vm._v(_vm._s(item.date))]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-orange text-size-1" },
                                [_vm._v(_vm._s(item.category))]
                              )
                            ]),
                            _vm._v(" "),
                            _c("a", {
                              staticClass: "news-title",
                              attrs: { href: item.link },
                              domProps: { innerHTML: _vm._s(item.title) }
                            })
                          ])
                        ])
                      : _vm._e()
                  }
                )
              )
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e9078d8", module.exports)
  }
}

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(459)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(461)
/* template */
var __vue_template__ = __webpack_require__(462)
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
Component.options.__file = "resources/assets/components/block-foods.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-630800a0", Component.options)
  } else {
    hotAPI.reload("data-v-630800a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(460);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(204)("e8adc522", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-630800a0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-foods.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-630800a0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-foods.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#block-foods {\n  background-size: cover;\n  background-position: 0;\n}\n#block-foods.active .block-food-body .content-food.left-content, #block-foods.active .block-food-body .content-food.right-content {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n}\n#block-foods.active .block-food-body .bg-left .bg-inner {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n    background-position-y: center;\n}\n#block-foods .line-top:before {\n    content: \"\";\n    background: #f46f1b;\n    width: 60px;\n    height: 1px;\n    display: block;\n    margin-bottom: 20px;\n}\n#block-foods .block-food-body {\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n}\n#block-foods .block-food-body:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.6);\n}\n#block-foods .block-food-body .bg-left .bg-inner {\n      background-position: center;\n      background-size: cover;\n      background-position-y: 100vh;\n      -webkit-transition: all .5s;\n      transition: all .5s;\n}\n#block-foods .block-food-body .bg-left .bg-inner.active {\n        background-position-y: 100vh;\n        -webkit-transition: initial;\n        transition: initial;\n}\n#block-foods .block-food-body .content-food {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding: 0 100px;\n      overflow: hidden;\n      z-index: 2;\n}\n#block-foods .block-food-body .content-food .big_title {\n        font-size: 140px;\n        font-weight: 600;\n}\n#block-foods .block-food-body .content-food .more-food-info {\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n        border-radius: 100%;\n        background-position: center;\n        background-size: cover;\n        cursor: pointer;\n        margin-right: 25px;\n        -webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n}\n#block-foods .block-food-body .content-food .more-food-info.active, #block-foods .block-food-body .content-food .more-food-info:hover {\n          opacity: 0.8;\n          -webkit-box-shadow: 0px 0px 20px black;\n                  box-shadow: 0px 0px 20px black;\n          -webkit-transition: all .3s;\n          transition: all .3s;\n}\n#block-foods .block-food-body .content-food > div {\n        position: relative;\n        z-index: 2;\n}\n#block-foods .block-food-body .content-food.left-content, #block-foods .block-food-body .content-food.right-content {\n        -webkit-transition: opacity 1s, -webkit-transform 1s;\n        transition: opacity 1s, -webkit-transform 1s;\n        transition: transform 1s, opacity 1s;\n        transition: transform 1s, opacity 1s, -webkit-transform 1s;\n        opacity: 0;\n}\n#block-foods .block-food-body .content-food.left-content {\n        background: transparent;\n        padding: 100px;\n}\n#block-foods .block-food-body .content-food.left-content .line-top {\n          line-height: 25px;\n}\n#block-foods .block-food-body .content-food.right-content {\n        background: white;\n        z-index: 2;\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n}\n#block-foods .block-food-body .content-food.right-content:before, #block-foods .block-food-body .content-food.right-content:after {\n          content: \"\";\n          position: absolute;\n          border-radius: 100%;\n}\n#block-foods .block-food-body .content-food.right-content:before {\n          width: 850px;\n          height: 850px;\n          background: rgba(242, 108, 35, 0.1);\n          right: -540px;\n          bottom: -480px;\n}\n#block-foods .block-food-body .content-food.right-content:after {\n          width: 100px;\n          height: 100px;\n          background: rgba(0, 0, 0, 0.22);\n          right: -70px;\n          bottom: 300px;\n}\n#block-foods .block-food-body .content-food.right-content .food-info-inner {\n          height: 500px;\n          width: 500px;\n          background: #f26d23;\n          border-radius: 100%;\n          -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n          -webkit-transition: all .5s;\n          transition: all .5s;\n}\n#block-foods .block-food-body .content-food.right-content .food-info-inner .text-food-info {\n            font-weight: 300;\n            letter-spacing: 2px;\n}\n#block-foods .block-food-body .content-food.right-content .loader {\n          position: absolute;\n          width: 50vw;\n          height: 100vh;\n          stroke-linecap: round;\n          stroke-width: 5;\n          fill: none;\n          left: 0;\n}\n#block-foods .block-food-body .content-food.right-content .loader .internal-circle {\n            stroke: #f26c23;\n            stroke-dasharray: 55%,10%,25%;\n            opacity: .4;\n            -webkit-transform-origin: 30% 55%;\n                    transform-origin: 30% 55%;\n}\n#block-foods .block-food-body .content-food.right-content .loader.active .internal-circle {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg);\n            -webkit-transition: all .5s ease-in-out;\n            transition: all .5s ease-in-out;\n}\n#block-foods .block-food-body .content-food.right-content .more-food-info {\n          display: none;\n}\n@media only screen and (max-width: 991px) {\n#app #block-foods .bg-transition {\n    width: 100vw;\n}\n#app #block-foods .block-food-body .content-food h3, #app #block-foods .block-food-body .content-food span {\n    color: white !important;\n    letter-spacing: 5px;\n    text-align: center;\n}\n#app #block-foods .block-food-body .content-food h3 {\n    font-size: 28px;\n    z-index: 2;\n}\n#app #block-foods .block-food-body .content-food .sub-title {\n    font-size: 12px;\n}\n#app #block-foods .block-food-body .content-food.left-content {\n    display: none !important;\n}\n#app #block-foods .block-food-body .content-food.right-content {\n    background: transparent;\n    padding: 90px 20px 23px 20px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#app #block-foods .block-food-body .content-food.right-content .more-food-info {\n      display: block;\n}\n#app #block-foods .block-food-body .content-food.right-content .food-info-inner {\n      height: 300px;\n      width: 300px;\n      background: rgba(242, 109, 35, 0.8);\n}\n#app #block-foods .block-food-body .content-food.right-content .food-info-inner .text-food-title {\n        font-size: 21px;\n}\n#app #block-foods .block-food-body .content-food.right-content .food-info-inner .text-food-info {\n        font-size: 12px;\n}\n#app #block-foods .block-food-body .content-food .more-food-info {\n    margin: 0 20px;\n    width: 68px;\n    height: 68px;\n    border: 1px solid #f26b23;\n}\n#app #block-foods .block-food-body .content-food .more-food-info:last-child {\n      margin-right: 0;\n}\n#app #block-foods .block-food-body .content-food .more-food-info span {\n      left: 0;\n      bottom: -25px;\n      font-size: 12px;\n      letter-spacing: 2px;\n}\n#app #block-foods .block-food-body .content-food .loader {\n    width: 100vw;\n    left: 15%;\n}\n}\n@media only screen and (max-width: 420px) {\n#app #block-foods .block-food-body .content-food.right-content {\n    padding: 25px 20px;\n}\n#app #block-foods .block-food-body .content-food .loader circle {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n}\n#app #block-foods .block-food-body .content-food .loader.active circle {\n    -webkit-transform: rotate(180deg) scale(0.6);\n            transform: rotate(180deg) scale(0.6);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 461:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            bgTransition: false,
            addTransition: false,
            foodItems: [{
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '顧客導向',
                url: '/images/bg_food_1.png',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }, {
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '優雅空間',
                url: '/images/bg_brand_1.png',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }, {
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '專業服務',
                url: '/images/slideshow_1.jpg',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }],
            food_index: 0,
            food_index_old: 0

        };
    },
    methods: {
        bgAnimated: function bgAnimated(time) {
            var _this = this;

            this.bgTransition = true;
            setTimeout(function () {
                _this.bgTransition = false;
            }, parseInt(time));
            setTimeout(function () {
                _this.food_index_old = _this.food_index;
            }, parseInt(time) + 800);
        },
        startAnimate: function startAnimate(time) {
            var _this2 = this;

            this.addTransition = true;
            setTimeout(function () {
                _this2.addTransition = false;
            }, parseInt(time));
        }
    }
});

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "section text-white position-relative",
      style:
        "background-image:url(" + _vm.foodItems[_vm.food_index_old].url + ")",
      attrs: { id: "block-foods" }
    },
    [
      _c("div", { staticClass: "block-food-body d-flex bg-black-filter" }, [
        _c("div", { staticClass: "bg-transition bg-left" }, [
          _c("div", {
            staticClass: "bg-inner",
            class: { active: _vm.bgTransition },
            style:
              "background-image:url(" + _vm.foodItems[_vm.food_index].url + ")"
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "content-food left-content d-md-flex flex-column justify-content-between justify-content-md-center position-relative m-auto"
          },
          [
            _c(
              "div",
              { staticClass: "mb-5", class: { fade: _vm.addTransition } },
              [
                _c("p", {
                  staticClass: "line-top text-size-2",
                  domProps: {
                    innerHTML: _vm._s(_vm.foodItems[_vm.food_index].subTitle)
                  }
                }),
                _vm._v(" "),
                _c("h1", { staticClass: "big_title" }, [
                  _vm._v(_vm._s(_vm.foodItems[_vm.food_index].title))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "align-self-end mt-5" },
              [
                _c("p", { staticClass: "text-size-2" }, [
                  _vm._v("探索更多橘色價值")
                ]),
                _vm._v(" "),
                _vm._l(_vm.foodItems, function(item, $index) {
                  return _c("div", {
                    key: $index,
                    staticClass: "more-food-info",
                    class: _vm.food_index == $index ? "active" : "",
                    style: "background-image:url(" + item.url + ")",
                    on: {
                      click: function($event) {
                        _vm.food_index = $index
                        _vm.bgAnimated(100)
                        _vm.startAnimate(500)
                      }
                    }
                  })
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "content-food right-content d-flex flex-column justify-content-center position-relative text-md-left text-center"
          },
          [
            _c(
              "svg",
              { staticClass: "loader", class: { active: _vm.addTransition } },
              [
                _c("circle", {
                  staticClass: "internal-circle",
                  attrs: { cx: "30%", cy: "55%", r: "450" }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("span", { staticClass: "sub-title text-black w-100" }, [
              _vm._v("about value")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "food-info-circle" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "food-info-inner d-flex flex-column justify-content-center p-5"
              },
              [
                _c("div", {
                  class: { fade: _vm.addTransition },
                  domProps: {
                    innerHTML: _vm._s(_vm.foodItems[_vm.food_index].content)
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex mt-5 w-100 justify-content-between justify-content-md-center"
              },
              _vm._l(_vm.foodItems, function(item, $index) {
                return _c(
                  "div",
                  {
                    key: $index,
                    staticClass: "more-food-info position-relative",
                    class: _vm.food_index == $index ? "active" : "",
                    style: "background-image:url(" + item.url + ")",
                    on: {
                      click: function($event) {
                        _vm.food_index = $index
                        _vm.bgAnimated(100)
                        _vm.startAnimate(500)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "position-absolute w-100 text-center" },
                      [_vm._v(_vm._s(item.title))]
                    )
                  ]
                )
              })
            )
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
    return _c(
      "h3",
      { staticClass: "main-title text-black text-uppercase w-100" },
      [
        _c("span", { staticClass: "fs-inherit text-orange" }, [_vm._v("橘色")]),
        _vm._v("價值\n            ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-630800a0", module.exports)
  }
}

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-fullpage.js v0.0.4
 * (c) 2018 Alvaro Trigo
 * Released under the MIT License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullpageJs"] = factory();
	else
		root["VueFullpageJs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.2
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function( root, window, document, factory, undefined) {
    if( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            root.fullpage = factory(window, document);
            return root.fullpage;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if( typeof exports === 'object' ) {
        // Node. Does not work with strict CommonJS.
        module.exports = factory(window, document);
    } else {
        // Browser globals.
        window.fullpage = factory(window, document);
    }
}(this, window, document, function(window, document){
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.' + AUTO_HEIGHT;
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.' + NORMAL_SCROLL;

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    function initialise(containerSelector, options) {
        var isLicenseValid = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE').test(options.licenseKey) || document.domain.indexOf('alvarotrigo.com') > -1;

        //only once my friend!
        if(hasClass($('html'), ENABLED)){ displayWarnings(); return; }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body')[0];

        var FP = {};

        // Creating some defaults, extending them with any options that were provided
        options = deepExtend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            v2compatible: false,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;
        var windowsHeight = getWindowHeight();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };
        var scrollBarHandler;

        // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = deepExtend({}, options); //deep copy
        var activeAnimation;

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        window.fp_easings = deepExtend(window.fp_easings, {
            easeInOutCubic: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
            }
        });

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL)[0];

            if(options.autoScrolling && !options.scrollBar){
                css($htmlBody, {
                    'overflow': 'hidden',
                    'height': '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element != null){
                    //moving the container up
                    silentScroll(element.offsetTop);
                }

            }else{
                css($htmlBody, {
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                css(container, {
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element != null) {
                    var scrollSettings = getScrollSettings(element.offsetTop);
                    scrollSettings.element.scrollTo(0, scrollSettings.options);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function (direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else{
                setIsScrollAllowed(value, 'all', 'm');

                if(value){
                    setMouseWheelScrolling(true);
                    addTouchHandler();
                }else{
                    setMouseWheelScrolling(false);
                    removeTouchHandler();
                }
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function(direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev && (options.loopTop || options.continuousVertical)) {
                prev = last($(SECTION_SEL));
            }

            if (prev != null) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL)[0];
            }

            if(next != null){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny != null){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(hasClass(container, DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = getWindowHeight();  //updating global var

            var sections = $(SECTION_SEL);
            for (var i = 0; i < sections.length; ++i) {
                var section = sections[i];
                var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
                var slides = $(SLIDE_SEL, section);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    css($(TABLE_CELL_SEL, section), {'height': getTableHeight(section) + 'px'});
                }

                css(section, {'height': windowsHeight + 'px'});

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
                }
            }

            if(options.scrollOverflow){
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL)[0];
            var sectionIndex = index(activeSection, SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            if(isFunction( options.afterResize ) && resizing){
                options.afterResize.call(container, window.innerWidth, window.innerHeight);
            }
            if(isFunction( options.afterReBuild ) && !resizing){
                options.afterReBuild.call(container);
            }
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = hasClass($body, RESPONSIVE);

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    hide($(SECTION_NAV_SEL));
                    addClass($body, RESPONSIVE);
                    if(isFunction( options.afterResponsive )){
                        options.afterResponsive.call( container, active);
                    }
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                show($(SECTION_NAV_SEL));
                removeClass($body, RESPONSIVE);
                if(isFunction( options.afterResponsive )){
                    options.afterResponsive.call( container, active);
                }
            }
        }

        if(container){
            //public functions
            FP.version = '3.0.2';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.getFullpageData = options;
            FP.destroy = destroy;
            FP.getActiveSection = getActiveSection;
            FP.getActiveSlide = getActiveSlide;

            FP.test = {
                top: '0px',
                translate3d: 'translate3d(0px, 0px, 0px)',
                translate3dH: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push('translate3d(0px, 0px, 0px)');
                    }
                    return a;
                })(),
                left: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push(0);
                    }
                    return a;
                })(),
                options: options,
                setAutoScrolling: setAutoScrolling
            };

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared = {
                afterRenderActions: afterRenderActions
            };

            window.fullpage_api = FP;

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            window.addEventListener('load', scrollToAnchor);
        }

        function bindEvents(){

            //when scrolling...
            window.addEventListener('scroll', scrollHandler);

            //detecting any change on the URL to scroll to the given anchor link
            //(a way to detect back history button as we play with the hashes on the URL)
            window.addEventListener('hashchange', hashChangeHandler);

            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
            window.addEventListener('blur', blurHandler);

            //when resizing the site, we adjust the heights of the sections, slimScroll...
            window.addEventListener('resize', resizeHandler);

            //Sliding with arrow keys, both, vertical and horizontal
            document.addEventListener('keydown', keydownHandler);

            //to prevent scrolling while zooming
            document.addEventListener('keyup', keyUpHandler);

            //Scrolls to the section when clicking the navigation bullet
            //simulating the jQuery .on('click') event using delegation
            ['click', 'touchstart'].forEach(function(eventName){
                document.addEventListener(eventName, function(e){
                    var target = e.target;

                    if(target && closest(target, SECTION_NAV_SEL + ' a')){
                        sectionBulletHandler.call(target, e);
                    }
                    else if(matches(target, SECTION_NAV_TOOLTIP_SEL)){
                        tooltipTextHandler.call(target);
                    }
                    else if(matches(target, SLIDES_ARROW_SEL)){
                        slideArrowHandler.call(target, e);
                    }
                    else if(matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null){
                        slideBulletHandler.call(target, e);
                    }
                });
            });

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                ['mouseenter', 'touchstart'].forEach(function(eventName){
                    forMouseLeaveOrTOuch(eventName, false);
                });

                ['mouseleave', 'touchend'].forEach(function(eventName){
                   forMouseLeaveOrTOuch(eventName, true);
                });
            }
        }

        function forMouseLeaveOrTOuch(eventName, allowScrolling){
            //a way to pass arguments to the onMouseEnterOrLeave function
            document['fp_' + eventName] = allowScrolling;
            document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
        }

        function onMouseEnterOrLeave(e) {
            if(e.target == document){
                return;
            }
            var normalSelectors = options.normalScrollElements.split(',');
            normalSelectors.forEach(function(normalSelector){
                if(matches(e.target, normalSelector)){
                    setAllowScrolling(document['fp_' + e.type]); //e.type = eventName
                }
            });
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                var attrName = '[data-anchor]';
                var anchors = $(options.sectionSelector.split(',').join(attrName + ',') + attrName, container);
                if(anchors.length){
                    anchors.forEach(function(item){
                        options.anchors.push(item.getAttribute('data-anchor').toString());
                    });
                }
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                var attrName = '[data-tooltip]';
                var tooltips = $(options.sectionSelector.split(',').join(attrName + ',') + attrName, container);
                if(tooltips.length){
                    tooltips.forEach(function(item){
                        options.navigationTooltips.push(item.getAttribute('data-tooltip').toString());
                    });
                }
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            css(container, {
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            addClass(container, WRAPPER);
            addClass($('html'), ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = getWindowHeight();

            removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

            var sections = $(SECTION_SEL);

            //styling the sections / slides / menu
            for(var i = 0; i<sections.length; i++){
                var sectionIndex = i;
                var section = sections[i];
                var slides = $(SLIDE_SEL, section);
                var numSlides = slides.length;

                //caching the original styles to add them back on destroy('all')
                section.setAttribute('data-fp-styles', section.getAttribute('style'));

                styleSection(section, sectionIndex);
                styleMenu(section, sectionIndex);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            }

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).forEach(function(item){
                    $body.appendChild(item);
                });
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            }else{
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            var slidesWrapper = document.createElement('div');
            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
            wrapAll(slides, slidesWrapper);

            var slidesContainer = document.createElement('div');
            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
            wrapAll(slides, slidesContainer);

            css($(SLIDES_CONTAINER_SEL, section), {'width': sliderWidth + '%'});

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.forEach(function(slide) {
                css(slide, {'width': slideWidth + '%'});

                if(options.verticalCentered){
                    addTableClass(slide);
                }
            });

            var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0];

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || (index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                addClass(slides[0], ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL)[0] == null) {
                addClass(section, ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL)[0];

            css(section, {'height': windowsHeight + 'px'});

            if(options.paddingTop){
                css(section, {'padding-top': options.paddingTop});
            }

            if(options.paddingBottom){
                css(section, {'padding-bottom': options.paddingBottom});
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                css(section, {'background-color': options.sectionsColor[index]});
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.setAttribute('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(hasClass(section, ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null){
                $body.appendChild($(options.menu)[0]);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            addClass($(options.sectionSelector, container), SECTION);
            addClass($(options.slideSelector, container), SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
            after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

            if(options.controlArrowColor !== '#fff'){
                css($(SLIDES_ARROW_NEXT_SEL, section), {'border-color': 'transparent transparent transparent '+options.controlArrowColor});
                css($(SLIDES_ARROW_PREV_SEL, section), {'border-color': 'transparent '+ options.controlArrowColor + ' transparent transparent'});
            }

            if(!options.loopHorizontal){
                hide($(SLIDES_ARROW_PREV_SEL, section));
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            var navigation = document.createElement('div');
            navigation.setAttribute('id', SECTION_NAV);

            var divUl = document.createElement('ul');
            navigation.appendChild(divUl);

            appendTo(navigation, $body);
            var nav = $(SECTION_NAV_SEL)[0];

            addClass(nav, 'fp-' + options.navigationPosition);

            if(options.showActiveTooltip){
                addClass(nav, SHOW_ACTIVE_TOOLTIP);
            }

            var li = '';

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                li += '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';
            }
            $('ul', nav)[0].innerHTML = li;

            //centering it vertically
            css($(SECTION_NAV_SEL), {'margin-top': '-' + ($(SECTION_NAV_SEL)[0].offsetHeight/2) + 'px'});

            //activating the current active section

            var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
            addClass($('a', bullet), ACTIVE);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            $('iframe[src*="youtube.com/embed/"]', container).forEach(function(item){
                addURLParam(item, 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.getAttribute('src');
            element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL)[0];

            addClass(section, COMPLETELY);

            lazyLoad(section);
            playMedia(section);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(isDestinyTheStartingSection() && isFunction(options.afterLoad) ){
                fireCallback('afterLoad', {
                    activeSection: null,
                    element: section,
                    direction: null,

                    //for backwards compatibility callback (to be removed in a future!)
                    anchorLink: section.getAttribute('data-anchor'),
                    sectionIndex: index(section, SECTION_SEL)
                });
            }

            if(isFunction(options.afterRender)){
                fireCallback('afterRender');
            }
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var destinationSection = getSectionByAnchor(getAnchorsURL().section);
            return !destinationSection || typeof destinationSection !=='undefined' && index(destinationSection) === index(startingSection);
        }

        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = getScrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + (getWindowHeight() / 2.0);
                var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
                var sections =  $(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)){
                        addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
                        removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = sections[visibleSectionIndex];

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!hasClass(currentSection, ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL)[0];
                    var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.getAttribute('data-anchor');
                    var sectionIndex = index(currentSection, SECTION_SEL) + 1;
                    var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
                    var slideIndex;
                    var slideAnchorLink;
                    var callbacksParams = {
                        activeSection: leavingSection,
                        sectionIndex: sectionIndex -1,
                        anchorLink: anchorLink,
                        element: currentSection,
                        leavingSection: leavingSectionIndex,
                        direction: yMovement
                    };

                    if(activeSlide){
                        slideAnchorLink = activeSlide.getAttribute('data-anchor');
                        slideIndex = index(activeSlide);
                    }

                    if(canScroll){
                        addClass(currentSection, ACTIVE);
                        removeClass(siblings(currentSection), ACTIVE);

                        if(isFunction( options.onLeave )){
                            fireCallback('onLeave', callbacksParams);
                        }
                        if(isFunction( options.afterLoad )){
                            fireCallback('afterLoad', callbacksParams);
                        }

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection &&

                            //is the destination element bigger than the viewport?
                            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight
                        ){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL)[0]);
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
            var bottom = top + getWindowHeight();

            if(movement == 'up'){
                return bottom >= (getScrollTop() + getWindowHeight());
            }
            return top <= getScrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type){
            if (!isScrollAllowed.m[type]){
                return;
            }

            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(options.scrollOverflow){
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
                var check = (type === 'down') ? 'bottom' : 'top';

                if(scrollable != null ){
                    //is the scrollbar at the start/end of the scroll?
                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                        scrollSection();
                    }else{
                        return true;
                    }
                }else{
                    // moved up/down
                    scrollSection();
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(e){
            if(options.autoScrolling && isReallyTouch(e)){
                //preventing the easing on iOS devices
                preventDefault(e);
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(e){
            var activeSection = closest(e.target, SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    preventDefault(e);
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > (window.innerWidth / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(e){

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                activeAnimation = false;
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                   preventDefault(e);
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                        //scrolling up?
                        }else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                activeAnimation = false;
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
            var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0];

            // more than one slide needed and nothing should be sliding
            if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
                return;
            }

            var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
            var destiny = null;

            if(direction === 'left'){
                destiny = prevUntil(currentSlide, SLIDE_SEL);
            }else{
                destiny = nextUntil(currentSlide, SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(destiny == null){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                var slideSiblings = siblings(currentSlide);
                if(direction === 'left'){
                    destiny = slideSiblings[slideSiblings.length - 1]; //last
                }else{
                    destiny = slideSiblings[0]; //first
                }
            }

            slideMoving = true && !FP.test.isTesting;
            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            var activeSlides = $(SLIDE_ACTIVE_SEL);
            for( var i =0; i<activeSlides.length; i++){
                silentLandscapeScroll(activeSlides[i], 'internal');
            }
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elementHeight = element.offsetHeight;
            var elementTop = element.offsetTop;

            //top of the desination will be at the top of the viewport
            var position = elementTop;
            var isScrollingDown =  elementTop > previousDestTop;
            var sectionBottom = position - windowsHeight + elementHeight;
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(elementHeight > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && next(element) == null) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(element == null){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.getAttribute('data-anchor'),
                sectionIndex: index(element, SECTION_SEL),
                activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
                activeSection: $(SECTION_ACTIVE_SEL)[0],
                leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection == element && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT) )){ return; }

            if(v.activeSlide != null){
                slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
                slideIndex = index(v.activeSlide);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if(isFunction(options.onLeave) && !v.localIsResizing){
                var direction = v.yMovement;

                //required for continousVertical
                if(typeof isMovementUp !== 'undefined'){
                    direction = isMovementUp ? 'up' : 'down';
                }

                //for the callback
                v.direction = direction;

                if(fireCallback('onLeave', v) === false){
                    return;
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.beforeLeave();
            }

            addClass(element, ACTIVE);
            removeClass(siblings(element), ACTIVE);
            lazyLoad(element);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false || FP.test.isTesting;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Dispatch events & callbacks making sure it does it on the right format, depending on
        * whether v2compatible is being used or not.
        */
        function fireCallback(eventName, v){
            var eventData = getEventData(eventName, v);

            if(!options.v2compatible){
                trigger(container, eventName, eventData);

                if(options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false){
                    return false;
                }
            }
            else{
                if(options[eventName].apply(eventData[0], eventData.slice(1)) === false){
                    return false;
                }
            }

            return true;
        }

        /**
        * Makes sure to only create a Panel object if the element exist
        */
        function nullOrSection(el){
            return el ? new Section(el) : null;
        }

        function nullOrSlide(el){
            return el ? new Slide(el) : null;
        }

        /**
        * Gets the event's data for the given event on the right format. Depending on whether
        * v2compatible is being used or not.
        */
        function getEventData(eventName, v){
            var paramsPerEvent;

            if(!options.v2compatible){

                //using functions to run only the necessary bits within the object
                paramsPerEvent = {
                    afterRender: function(){
                        return {
                            section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
                            slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
                        };
                    },
                    onLeave: function(){
                        return {
                            origin: nullOrSection(v.activeSection),
                            destination: nullOrSection(v.element),
                            direction: v.direction
                        };
                    },

                    afterLoad: function(){
                        return paramsPerEvent.onLeave();
                    },

                    afterSlideLoad: function(){
                        return {
                            section: nullOrSection(v.section),
                            origin: nullOrSlide(v.prevSlide),
                            destination: nullOrSlide(v.destiny),
                            direction: v.direction
                        };
                    },

                    onSlideLeave: function(){
                        return paramsPerEvent.afterSlideLoad();
                    }
                };
            }
            else{
                paramsPerEvent = {
                    afterRender: function(){ return [container]; },
                    onLeave: function(){ return [v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.direction]; },
                    afterLoad: function(){ return [v.element, v.anchorLink, (v.sectionIndex + 1)]; },
                    afterSlideLoad: function(){ return [v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex]; },
                    onSlideLeave: function(){ return [v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex]; },
                };
            }

            return paramsPerEvent[eventName]();
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using JS to animate
            else{
                var scrollSettings = getScrollSettings(v.dtop);
                FP.test.top = -v.dtop + 'px';

                scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function(){
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(top){
            var scroll = {};

            //top property animation
            if(options.autoScrolling && !options.scrollBar){
                scroll.options = -top;
                scroll.element = $(WRAPPER_SEL)[0];
            }

            //window real scrolling
            else{
                scroll.options = top;
                scroll.element = window;
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.offsetTop;
            v.yMovement = getYmovement(v.element);

            //sections will temporally have another position in the DOM
            //updating this values in case we need them
            v.leavingSection = index(v.activeSection, SECTION_SEL) + 1;
            v.sectionIndex = index(v.element, SECTION_SEL);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (v.wrapAroundElements == null) {
                return;
            }

            if (v.isMovementUp) {
                before($(SECTION_SEL)[0], v.wrapAroundElements);
            }
            else {
                after($(SECTION_SEL)[$(SECTION_SEL).length-1], v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }


        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            if(isFunction(options.afterLoad) && !v.localIsResizing){
                fireCallback('afterLoad', v);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            addClass(v.element, COMPLETELY);
            removeClass(siblings(v.element), COMPLETELY);

            canScroll = true;

            if(isFunction(v.callback)){
                v.callback();
            }
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element.setAttribute(attribute, element.getAttribute('data-' + attribute));
            element.removeAttribute('data-' + attribute);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);

            $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element){
                ['src', 'srcset'].forEach(function(type){
                    var attribute = element.getAttribute('data-' + type);
                    if(attribute != null && attribute){
                        setSrc(element, type);
                    }
                });

                if(matches(element, 'source')){
                    var elementToPlay =  closest(element, 'video, audio');
                    if(elementToPlay){
                        elementToPlay.load();
                    }
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if( /youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')){
                    element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = $(SLIDE_ACTIVE_SEL, destiny);
            if( slide.length ) {
                destiny = slide[0];
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            var anchors =  getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);

                if(sectionAnchor && sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove
                        || isFirstScrollMove
                        || (!slideMoving && lastScrolledSlide != slideAnchor )){

                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL(){
            var section;
            var slide;
            var hash = window.location.hash;

            if(hash.length){
                //getting the anchor link in the URL and deleting the `#`
                var anchorsParts =  hash.replace('#', '').split('/');

                //using / for visual reasons and not as a section/slide separator #2803
                var isFunkyAnchor = hash.indexOf('#/') > -1;

                section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);

                var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                if(slideAnchor && slideAnchor.length){
                    slide = decodeURIComponent(slideAnchor);
                }
            }

            return {
                section: section,
                slide: slide
            };
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = document.activeElement;
            var keyCode = e.keyCode;

            //tab?
            if(keyCode === 9){
                onTab(e);
            }

            else if(!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') &&
                activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if(keyControls.indexOf(keyCode) > -1){
                    preventDefault(e);
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            /*jshint validthis:true */
            trigger(prev(this), 'click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.addEventListener('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.removeEventListener('mousemove', mouseMoveHandler);
            }
        }

        /**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */
        function onTab(e){
            var isShiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var activeSection = $(SECTION_ACTIVE_SEL)[0];
            var activeSlide = $(SLIDE_ACTIVE_SEL, activeSection)[0];
            var focusableWrapper = activeSlide ? activeSlide : activeSection;
            var focusableElements = $(focusableElementsString + ':not([tabindex="-1"])', focusableWrapper);

            function preventAndFocusFirst(e){
                preventDefault(e);
                return focusableElements[0].focus();
            }

            //is there an element with focus?
            if(activeElement){
                if(closest(activeElement, SECTION_ACTIVE_SEL + ',' + SLIDE_ACTIVE_SEL) == null){
                    activeElement = preventAndFocusFirst(e);
                }
            }

            //no element if focused? Let's focus the first one of the section/slide
            else{
                preventAndFocusFirst(e);
            }

            //when reached the first or last focusable element of the section/slide
            //we prevent the tab action to keep it in the last focusable element
            if(!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] ||
                isShiftPressed && activeElement == focusableElements[0]
            ){
                preventDefault(e);
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            /*jshint validthis:true */
            var section = closest(this, SECTION_SEL);

            /*jshint validthis:true */
            if (hasClass(this, SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
            scrollPage($(SECTION_SEL)[indexBullet]);
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
            var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.keyCode) < 0){
                return;
            }

            switch (e.keyCode) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar
                    if(shiftPressed && isScrollAllowed.k.up){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = closest(slides, SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: {left: destiny.offsetLeft},
                slideIndex: index(destiny),
                section: section,
                sectionIndex: index(section, SECTION_SEL),
                anchorLink: section.getAttribute('data-anchor'),
                slidesNav: $(SLIDES_NAV_SEL, section)[0],
                slideAnchor: getAnchor(destiny),
                prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
                prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if(isFunction( options.onSlideLeave )){
                        if( fireCallback('onSlideLeave', v) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            addClass(destiny, ACTIVE);
            removeClass(siblings(destiny), ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(hasClass(section, ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                if(isFunction( options.afterSlideLoad )){
                    fireCallback('afterSlideLoad', v);
                }

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                FP.test.translate3dH[v.sectionIndex] = translate3d;
                css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                }, options.scrollingSpeed);
            }else{
                FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);

                scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            if(options.slidesNavigation && slidesNav != null){
                removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
                addClass( $('a', $('li', slidesNav)[slideIndex] ), ACTIVE);
            }
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler(){
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = document.activeElement;

                //if the keyboard is NOT visible
                if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
                    var currentHeight = getWindowHeight();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }else{
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function(){
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
            var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            removeClass(element, NO_TRANSITION);
            return css(element, {
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return addClass(element, NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation && $(SECTION_NAV_SEL)[0] != null){
                    removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);
                if(name){
                    addClass( $('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
                }else{
                    addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            var menu = $(options.menu)[0];
            if(options.menu && menu != null){
                removeClass($(ACTIVE_SEL, menu), ACTIVE);
                addClass($('[data-menuanchor="'+name+'"]', menu), ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
            var toIndex = index(destiny, SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!hasClass(element, TABLE)){
                var wrapper = document.createElement('div');
                wrapper.className = TABLE_CELL;
                wrapper.style.height = getTableHeight(element) + 'px';

                addClass(element, TABLE);
                wrapInner(element, wrapper);
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!hasClass(section, SECTION)){
                    section = closest(element, SECTION_SEL);
                }

                var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            css(container, getTransforms(translate3d));
            FP.test.translate3d = translate3d;

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                removeClass(container, NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]', container)[0];
            if(!section){
                var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor -1 : 0;
                section = $(SECTION_SEL)[sectionIndex];
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slide = $(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]', section)[0];
            if(slide == null){
                slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
                slide = $(SLIDE_SEL, section)[slideAnchor];
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(sectionAnchor, slideAnchor){
            var section = getSectionByAnchor(sectionAnchor);

            //do nothing if there's no section with the given anchor name
            if(section == null) return;

            var slide = getSlideByAnchor(slideAnchor, section);

            //we need to scroll to the section and then to the slide
            if (sectionAnchor !== lastScrolledDestiny && !hasClass(section, ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(slide){
            if(slide != null){
                landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
            var nav = $(SLIDES_NAV_SEL, section)[0];

            //top or bottom
            addClass(nav, 'fp-' + options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                appendTo(createElementFromHTML('<li><a href="#"><span></span></a></li>'), $('ul', nav)[0] );
            }

            //centering it
            css(nav, {'margin-left': '-' + (nav.innerWidth/2) + 'px'});

            addClass($('a', $('li', nav)[0] ), ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(anchorLink != null){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(slideAnchor == null){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(slideIndex != null){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            if(!element){
                return null;
            }
            var anchor = element.getAttribute('data-anchor');
            var elementIndex = index(element);

            //Slide without anchor link? We take the index instead.
            if(anchor == null){
                anchor = elementIndex;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL)[0];
            var slide = $(SLIDE_ACTIVE_SEL, section)[0];

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body.className = $body.className.replace(classRe, '');

            //adding the current anchor
            addClass($body, VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            //preventing the style p:empty{display: none;} from returning the wrong result
            el.style.display = 'block'

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

             // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, false);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container.addEventListener('mousedown', mouseDownHandler);
            container.addEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container.removeEventListener('mousedown', mouseDownHandler);
            container.removeEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                    $body.addEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                $(WRAPPER_SEL)[0].removeEventListener(events.touchstart, touchStartHandler);
                $(WRAPPER_SEL)[0].removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

                $(WRAPPER_SEL)[0].addEventListener(events.touchstart, touchStartHandler);
                $(WRAPPER_SEL)[0].addEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                // normalScrollElements requires it off #2691
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                $(WRAPPER_SEL)[0].removeEventListener(events.touchstart, touchStartHandler);
                $(WRAPPER_SEL)[0].removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined'){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed(0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                css(container, {'top': -roundedTop + 'px'});
                FP.test.top = -roundedTop + 'px';
            }
            else{
                var scrollSettings = getScrollSettings(roundedTop);
                setScrolling(scrollSettings.element, scrollSettings.options);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            //up, down, left, right
            if(direction !== 'all'){
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else{
                Object.keys(isScrollAllowed[type]).forEach(function(key){
                    isScrollAllowed[type][key] = value;
                });
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            addClass(container, DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);


            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('hashchange', hashChangeHandler);
            window.removeEventListener('resize', resizeHandler);

            document.removeEventListener('keydown', keydownHandler);
            document.removeEventListener('keyup', keyUpHandler);

            var clickTouchEvents = [sectionBulletHandler, tooltipTextHandler, slideArrowHandler, slideBulletHandler];
            ['click', 'touchstart'].forEach(function(eventName){
                clickTouchEvents.forEach(function(foo){
                    document.removeEventListener(eventName, foo);
                });
            });

            ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){
                document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
            });

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function(item){
                setSrc(item, 'src');
            });

            $('img[data-srcset]').forEach(function(item){
                setSrc(item, 'srcset');
            });

            remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL));

            //removing inline styles
            css($(SECTION_SEL), {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            css($(SLIDE_SEL), {
                'width': ''
            });

            css(container, {
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            css($htmlBody, {
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            removeClass($('html'), ENABLED);

            // remove .fp-responsive class
            removeClass($body, RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $body.className.split(/\s+/).forEach(function (className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    removeClass($body, className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function(item){
                if(options.scrollOverflowHandler){
                    options.scrollOverflowHandler.remove(item);
                }
                removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
                var previousStyles = item.getAttribute('data-fp-styles');
                if(previousStyles){
                    item.setAttribute('style', item.getAttribute('data-fp-styles'));
                }
            });

            //removing the applied transition from the fullpage wrapper
            removeAnimation(container);

            //Unwrapping content
            [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){
                $(selector, container).forEach(function(item){
                    //unwrap not being use in case there's no child element inside and its just text
                    item.outerHTML = item.innerHTML;
                });
            });

            //removing the applied transition from the fullpage wrapper
            css(container, {
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            $('html')[0].scrollTo(0, 0);
            $('body')[0].scrollTo(0, 0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            usedSelectors.forEach(function(item){
                removeClass($('.' + item), item);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            if(!isLicenseValid){
                showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');
                showError('error', 'https://github.com/alvarotrigo/fullPage.js#options.');
            }

            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];
            if(hasClass($('html'), ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollBar && options.scrollOverflow){
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow && options.scrollOverflowHandler == null){
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            extensions.forEach(function(extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            options.anchors.forEach(function(name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr =  [].slice.call($('[name]')).filter(function(item) {
                    return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr =  [].slice.call($('[id]')).filter(function(item) {
                    return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    if(idAttr.length){
                        showError('error', '"' + name + '" is is being used by another element `id` property');
                    }
                    if(nameAttr.length){
                        showError('error', '"' + name + '" is is being used by another element `name` property');
                    }
                }
            });
        }

        /**
        * Getting the position of the element to scroll when using jQuery animations
        */
        function getScrolledPosition(element){
            var position;

            //is not the window element and is a slide?
            if(element.self != window && hasClass(element, SLIDES_WRAPPER)){
                position = element.scrollLeft;
            }
            else if(!options.autoScrolling  || options.scrollBar){
                position = getScrollTop();
            }
            else{
                position = element.offsetTop;
            }

            //gets the top property of the wrapper
            return position;
        }

        /**
        * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
        * http://stackoverflow.com/a/16136789/1081396
        */
        function scrollTo(element, to, duration, callback) {
            var start = getScrolledPosition(element);
            var change = to - start;
            var currentTime = 0;
            var increment = 20;
            activeAnimation = true;

            var animateScroll = function(){
                if(activeAnimation){ //in order to stope it from other function whenever we want
                    var val = to;

                    currentTime += increment;

                    if(duration){
                        val = window.fp_easings[options.easing](currentTime, start, change, duration);
                    }

                    setScrolling(element, val);

                    if(currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }else if(typeof callback !== 'undefined'){
                        callback();
                    }
                }else if (currentTime < duration){
                    callback();
                }
            };

            animateScroll();
        }

        /**
        * Scrolls the page / slider the given number of pixels.
        * It will do it one or another way dependiong on the library's config.
        */
        function setScrolling(element, val){
            if(!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))){

                //scrolling horizontally through the slides?
                if(element.self != window  && hasClass(element, SLIDES_WRAPPER)){
                    element.scrollLeft = val;
                }
                //vertical scroll
                else{
                    element.scrollTo(0, val);
                }
            }else{
                 element.style.top = val + 'px';
            }
        }

        /**
        * Gets the active slide.
        */
        function getActiveSlide(){
            var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
            return nullOrSlide(activeSlide);
        }

        /**
        * Gets the active section.
        */
        function getActiveSection(){
            return new Section($(SECTION_ACTIVE_SEL)[0]);
        }

        /**
        * Item. Slide or Section objects share the same properties.
        */
        function Item(el, selector){
            this.anchor = el.getAttribute('data-anchor');
            this.item = el;
            this.index = index(el, selector);
            this.isLast = this.index === $(selector).length -1;
            this.isFirst = !this.index;
        }

        /**
        * Section object
        */
        function Section(el){
            Item.call(this, el, SECTION_SEL);
        }

        /**
        * Slide object
        */
        function Slide(el){
            Item.call(this, el, SLIDE_SEL);
        }

        return FP;
    } //end of $.fn.fullpage


    //utils
    /**
    * Shows a message in the console of the given type.
    */
    function showError(type, text){
        window.console && window.console[type] && window.console[type]('fullPage: ' + text);
    }

    /**
    * Equivalent or jQuery function $().
    */
    function $(selector, context){
        context = arguments.length > 1 ? context : document;
        return context ? context.querySelectorAll(selector) : null;
    }

    /**
    * Extends a given Object properties and its childs.
    */
    function deepExtend(out) {
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj)
          continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] != null)
              out[key] = deepExtend(out[key], obj[key]);
            else
              out[key] = obj[key];
          }
        }
      }

      return out;
    }

    /**
    * Checks if the passed element contains the passed class.
    */
    function hasClass(el, className){
        if(el == null){
            return false;
        }
        if (el.classList){
            return el.classList.contains(className);
        }
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    /**
    * Gets the window height. Crossbrowser.
    */
    function getWindowHeight(){
        return  'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    }

    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement} items
    * @param {Object} props css properties and values.
    */
    function css(items, props) {
        items = getList(items);

        var key;
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                if (key !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.style[key] = props[key];
                    }
                }
            }
        }

        return items;
    }

    /**
    * Generic function to get the previous or next element.
    */
    function until(item, selector, fn){
        var sibling = item[fn];
        while(sibling && !matches(sibling, selector)){
            sibling = sibling[fn];
        }

        return sibling;
    }

    /**
    * Gets the previous element to the passed element that matches the passed selector.
    */
    function prevUntil(item, selector){
        return until(item, selector, 'previousElementSibling');
    }

    /**
    * Gets the next element to the passed element that matches the passed selector.
    */
    function nextUntil(item, selector){
        return until(item, selector, 'nextElementSibling');
    }

    /**
    * Gets the previous element to the passed element.
    */
    function prev(item){
        return item.previousElementSibling;
    }

    /**
    * Gets the next element to the passed element.
    */
    function next(item){
        return item.nextElementSibling;
    }

    /**
    * Gets the last element from the passed list of elements.
    */
    function last(item){
        return item[item.length-1];
    }

    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */
    function index(item, selector) {
        item = isArrayOrList(item) ? item[0] : item;
        var children = selector != null? $(selector, item.parentNode) : item.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
             if (children[i] == item) return num;
             if (children[i].nodeType==1) num++;
        }
        return -1;
    }

    /**
    * Gets an iterable element for the passed element/s
    */
    function getList(item){
        return !isArrayOrList(item) ? [item] : item;
    }

    /**
    * Adds the display=none property for the passed element/s
    */
    function hide(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'none';
        }
        return el;
    }

    /**
    * Adds the display=block property for the passed element/s
    */
    function show(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'block';
        }
        return el;
    }

    /**
    * Checks if the passed element is an iterable element or not
    */
    function isArrayOrList(el){
        return Object.prototype.toString.call( el ) === '[object Array]' ||
            Object.prototype.toString.call( el ) === '[object NodeList]';
    }

    /**
    * Adds the passed class to the passed element/s
    */
    function addClass(el, className) {
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            var item = el[i];
            if (item.classList){
                item.classList.add(className);
            }
            else{
              item.className += ' ' + className;
            }
        }
        return el;
    }

    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */
    function removeClass(el, className){
        el = getList(el);

        var classNames = className.split(' ');

        for(var a = 0; a<classNames.length; a++){
            className = classNames[a];
            for(var i = 0; i<el.length; i++){
                var item = el[i];
                if (item.classList){
                    item.classList.remove(className);
                }
                else{
                    item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
        return el;
    }

    /**
    * Appends the given element ot the given parent.
    */
    function appendTo(el, parent){
        parent.appendChild(el);
    }

    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */
    function wrap(toWrap, wrapper, isWrapAll) {
        var newParent;
        wrapper = wrapper || document.createElement('div');
        for(var i = 0; i < toWrap.length; i++){
            var item = toWrap[i];
            if(isWrapAll && !i || !isWrapAll){
                newParent = wrapper.cloneNode(true);
                item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
        }
        return toWrap;
    }

    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */
    function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }

    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */
    function wrapInner(parent, wrapper) {
        if (typeof wrapper === "string"){
            wrapper = createElementFromHTML(wrapper);
        }

        parent.appendChild(wrapper);

        while(parent.firstChild !== wrapper){
            wrapper.appendChild(parent.firstChild);
       }
    }

    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */
    function closest(el, selector) {
        if(el && el.nodeType === 1){
            if(matches(el, selector)){
                return el;
            }
            return closest(el.parentNode, selector);
        }
        return null;
    }

    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function after(reference, el) {
        insertBefore(reference, reference.nextSibling, el);
    }

    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function before(reference, el) {
        insertBefore(reference, reference, el);
    }

    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */
    function insertBefore(reference, beforeElement, el){
        if(!isArrayOrList(el)){
            if(typeof el == 'string'){
                el = createElementFromHTML(el);
            }
            el = [el];
        }

        for(var i = 0; i<el.length; i++){
            reference.parentNode.insertBefore(el[i], beforeElement);
        }
    }

    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(){
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }

    /**
    * Gets the siblings of the passed element
    */
    function siblings(el){
        return Array.prototype.filter.call(el.parentNode.children, function(child){
          return child !== el;
        });
    }

    //for IE 9 ?
    function preventDefault(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue = false;
        }
    }

    /**
    * Determines whether the passed item is of function type.
    */
    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }
      var type = Object.prototype.toString(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }

    /**
    * Trigger custom events
    */
    function trigger(el, eventName, data){
        var event;
        data = typeof data === 'undefined' ? {} : data;

        // Native
        if(typeof window.CustomEvent === "function" ){
            event = new CustomEvent(eventName, {detail: data});
        }
        else{
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }

        el.dispatchEvent(event);
    }

    /**
    * Polyfill of .matches()
    */
    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }

    /**
    * Toggles the visibility of the passed element el.
    */
    function toggle(el, value){
        if(typeof value === "boolean"){
            for(var i = 0; i<el.length; i++){
                el[i].style.display = value ? 'block' : 'none';
            }
        }
        //we don't use it in other way, so no else :)

        return el;
    }

    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    /**
    * Removes the passed item/s from the DOM.
    */
    function remove(items){
        items = getList(items);
        for(var i = 0; i<items.length; i++){
            var item = items[i];
            if(item && item.parentElement) {
                item.parentNode.removeChild(item);
            }
        }
    }

    /**
    * Filters an array by the passed filter funtion.
    */
    function filter(el, filterFn){
        Array.prototype.filter.call(el, filterFn);
    }

    //https://jsfiddle.net/w1rktecz/
    function untilAll(item, selector, fn){
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if(matches(sibling, selector) || selector == null) {
                siblings.push(sibling);
            }
            sibling = sibling[fn];
        }

        return siblings;
    }

    /**
    * Gets all next elements matching the passed selector.
    */
    function nextAll(item, selector){
        return untilAll(item, selector, 'nextElementSibling');
    }

    /**
    * Gets all previous elements matching the passed selector.
    */
    function prevAll(item, selector){
        return untilAll(item, selector, 'previousElementSibling');
    }

    /**
    * Converts an object to an array.
    */
    function toArray(objectData){
        return Object.keys(objectData).map(function(key) {
           return objectData[key];
        });
    }

    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    //utils are public, so we can use it wherever we want
    window.fp_utils = {
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        css: css,
        until: until,
        prevUntil: prevUntil,
        nextUntil: nextUntil,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        filter: filter,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll
    };

    return initialise;
}));

/**
 * jQuery adapter for fullPage.js 3.0.0
 */
if(window.jQuery && window.fullpage){
    (function ($, fullpage) {
        'use strict';

        // No jQuery No Go
        if (!$ || !fullpage) {
            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            var FP = new fullpage('#' + $(this).attr('id'), options);

            //Static API
            Object.keys(FP).forEach(function (key) {
                $.fn.fullpage[key] = FP[key];
            });
        };
    })(jQuery, fullpage);
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Library/WebServer/Documents/vue-fullpage/src/FullPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c4c6a356", Component.options)
  } else {
    hotAPI.reload("data-v-c4c6a356", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fullpage = __webpack_require__(0);

var _fullpage2 = _interopRequireDefault(_fullpage);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.default = {
  methods: {
    build: function build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      var activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      var activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      var activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;

      this.destroy();

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }

      this.init();
    },
    destroy: function destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent: function emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name)].concat(_toConsumableArray(args)));

      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init: function init() {
      this.api = new _fullpage2.default(this.$refs.fullpage, this.options);
    }
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  },
  data: function data() {
    var _this = this;

    return {
      events: constants.EVENTS.reduce(function (eventsHandlers, event) {
        return _extends({}, eventsHandlers, _defineProperty({}, event, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.emitEvent(event, args);
        }));
      }, {}),
      api: undefined
    };
  },

  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler() {
        this.build();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = ['afterLoad', 'onLeave', 'afterRender', 'afterResize', 'afterResponsive', 'afterSlideLoad', 'onSlideLeave'];

var METHODS = exports.METHODS = ['moveSectionUp', 'moveSectionDown', 'moveTo', 'silentMoveTo', 'moveSlideRight', 'moveSlideLeft', 'setAutoScrolling', 'setFitToSection', 'fitToSection', 'setLockAnchors', 'setAllowScrolling', 'setKeyboardScrolling', 'setRecordHistory', 'setScrollingSpeed', 'destroy', 'reBuild', 'setResponsive', 'responsiveSlidesToSections', 'responsiveSlidesToSlides'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.FullPage = undefined;

var _fullpage = __webpack_require__(0);

var _fullpage2 = _interopRequireDefault(_fullpage);

var _FullPage = __webpack_require__(1);

var _FullPage2 = _interopRequireDefault(_FullPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('full-page', _FullPage2.default);
}

// Install by default if using the script tag

/* import jQuery from 'jquery';*/
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
  /* if(!window.$)
  {
    window.$ = jQuery
  }*/
}
if (!window.fullpage_api) {
  window.fullpage = _fullpage2.default;
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.FullPage = _FullPage2.default;
exports.version = version;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "fullpage"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c4c6a356", module.exports)
  }
}

/***/ })
/******/ ]);
});

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Scrollbar @ Version 0.0.2,
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue2Scrollbar"] = factory();
	else
		root["Vue2Scrollbar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ec59f76_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_scrollbar_vue__ = __webpack_require__(9);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ec59f76_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vue_scrollbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/vue-scrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vue-scrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ec59f76", Component.options)
  } else {
    hotAPI.reload("data-v-7ec59f76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {

  props: {
    draggingFromParent: Boolean,
    scrolling: Number,
    wrapper: Object,
    area: Object,
    onChangePosition: Function,
    onDragging: Function,
    onStopDrag: Function
  },

  data: function data() {
    return {
      width: 0,
      dragging: false,
      start: 0
    };
  },


  watch: {
    'wrapper.width': function wrapperWidth(val, old) {
      this.calculateSize(this);
    },
    'area.width': function areaWidth(val, old) {
      this.calculateSize(this);
    }
  },

  methods: {
    startDrag: function startDrag(e) {

      e.preventDefault();
      e.stopPropagation();

      e = e.changedTouches ? e.changedTouches[0] : e;

      // Prepare To Drag
      this.dragging = true;
      this.start = e.clientX;
    },
    onDrag: function onDrag(e) {

      if (this.dragging) {

        // Make The Parent being in the Dragging State
        this.onDragging();

        e.preventDefault();
        e.stopPropagation();

        e = e.changedTouches ? e.changedTouches[0] : e;

        var xMovement = e.clientX - this.start;
        var xMovementPercentage = xMovement / this.wrapper.width * 100;

        // Update the last e.clientX
        this.start = e.clientX;

        // The next Horizontal Value will be
        var next = this.scrolling + xMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'horizontal');
      }
    },
    stopDrag: function stopDrag(e) {
      if (this.dragging) {
        // Parent Should Change the Dragging State
        this.onStopDrag();
        this.dragging = false;
      }
    },
    jump: function jump(e) {

      var isContainer = e.target === this.$refs.container;

      if (isContainer) {

        // Get the Element Position
        var position = this.$refs.scrollbar.getBoundingClientRect();

        // Calculate the horizontal Movement
        var xMovement = e.clientX - position.left;
        var centerize = this.width / 2;
        var xMovementPercentage = xMovement / this.wrapper.width * 100 - centerize;

        // Update the last e.clientX
        this.start = e.clientX;

        // The next Horizontal Value will be
        var next = this.scrolling + xMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'horizontal');
      }
    },
    calculateSize: function calculateSize(source) {
      // Scrollbar Width
      this.width = source.wrapper.width / source.area.width * 100;
    }
  },

  mounted: function mounted() {
    this.calculateSize(this);

    // Put the Listener
    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("touchmove", this.onDrag);
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchend", this.stopDrag);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove the Listener
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("touchmove", this.onDrag);
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchend", this.stopDrag);
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {

  props: {
    draggingFromParent: Boolean,
    scrolling: Number,
    wrapper: Object,
    area: Object,
    onChangePosition: Function,
    onDragging: Function,
    onStopDrag: Function
  },

  data: function data() {
    return {
      height: 0,
      dragging: false,
      start: 0
    };
  },


  watch: {
    'wrapper.height': function wrapperHeight(val, old) {
      this.calculateSize(this);
    },
    'area.height': function areaHeight(val, old) {
      this.calculateSize(this);
    }
  },

  methods: {
    startDrag: function startDrag(e) {

      e.preventDefault();
      e.stopPropagation();

      e = e.changedTouches ? e.changedTouches[0] : e;

      // Prepare to drag
      this.dragging = true, this.start = e.clientY;
    },
    onDrag: function onDrag(e) {

      if (this.dragging) {

        // Make The Parent being in the Dragging State
        this.onDragging();

        e.preventDefault();
        e.stopPropagation();

        e = e.changedTouches ? e.changedTouches[0] : e;

        var yMovement = e.clientY - this.start;
        var yMovementPercentage = yMovement / this.wrapper.height * 100;

        // Update the last e.clientY
        this.start = e.clientY;

        // The next Vertical Value will be
        var next = this.scrolling + yMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'vertical');
      }
    },
    stopDrag: function stopDrag(e) {
      if (this.dragging) {
        // Parent Should Change the Dragging State
        this.onStopDrag();
        this.dragging = false;
      }
    },
    jump: function jump(e) {

      var isContainer = e.target === this.$refs.container;

      if (isContainer) {

        // Get the Element Position
        var position = this.$refs.scrollbar.getBoundingClientRect();

        // Calculate the vertical Movement
        var yMovement = e.clientY - position.top;
        var centerize = this.height / 2;
        var yMovementPercentage = yMovement / this.wrapper.height * 100 - centerize;

        // Update the last e.clientY
        this.start = e.clientY;

        // The next Vertical Value will be
        var next = this.scrolling + yMovementPercentage;

        // Tell the parent to change the position
        this.onChangePosition(next, 'vertical');
      }
    },
    calculateSize: function calculateSize(source) {
      // Scrollbar Height
      this.height = source.wrapper.height / source.area.height * 100;
    },
    getSize: function getSize() {
      // The Elements
      var $scrollArea = this.$refs.container.parentElement;
      var $scrollWrapper = $scrollArea.parentElement;

      // Get new Elements Size
      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,

        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    }
  },

  mounted: function mounted() {
    this.calculateSize(this);

    // Put the Listener
    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("touchmove", this.onDrag);
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchend", this.stopDrag);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove the Listener
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("touchmove", this.onDrag);
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchend", this.stopDrag);
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _verticalScrollbar = __webpack_require__(7);

var _verticalScrollbar2 = _interopRequireDefault(_verticalScrollbar);

var _horizontalScrollbar = __webpack_require__(6);

var _horizontalScrollbar2 = _interopRequireDefault(_horizontalScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


exports.default = {

  props: {
    classes: String,
    styles: Object,
    speed: {
      type: Number,
      default: 53
    },
    onMaxScroll: Function
  },

  components: {
    VerticalScrollbar: _verticalScrollbar2.default,
    HorizontalScrollbar: _horizontalScrollbar2.default
  },

  data: function data() {
    return {
      ready: false,
      top: 0,
      left: 0,
      scrollAreaHeight: null,
      scrollAreaWidth: null,
      scrollWrapperHeight: null,
      scrollWrapperWidth: null,
      vMovement: 0,
      hMovement: 0,
      dragging: false,
      start: { y: 0, x: 0 },
      allowBodyScroll: false
    };
  },


  methods: {
    scroll: function scroll(e) {
      var _this = this;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Set the wheel step
        var num = _this.speed;

        // DOM events
        var shifted = e.shiftKey;
        var scrollY = e.deltaY > 0 ? num : -num;
        var scrollX = e.deltaX > 0 ? num : -num;

        // Fix Mozilla Shifted Wheel~
        if (shifted && e.deltaX == 0) scrollX = e.deltaY > 0 ? num : -num;

        // Next Value
        var nextY = _this.top + scrollY;
        var nextX = _this.left + scrollX;

        // Is it Scrollable?
        var canScrollY = _this.scrollAreaHeight > _this.scrollWrapperHeight;
        var canScrollX = _this.scrollAreaWidth > _this.scrollWrapperWidth;

        // Vertical Scrolling
        if (canScrollY && !shifted) _this.normalizeVertical(nextY);

        // Horizontal Scrolling
        if (shifted && canScrollX) _this.normalizeHorizontal(nextX);
      });

      // prevent Default only if scrolled content is not at the top/bottom
      if (!this.allowBodyScroll) {
        e.preventDefault();
        e.stopPropagation();
      }
    },


    // DRAG EVENT JUST FOR TOUCH DEVICE~
    startDrag: function startDrag(e) {
      var _this2 = this;

      this.touchEvent = e;

      var evt = e.changedTouches ? e.changedTouches[0] : e;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Prepare to drag
        _this2.dragging = true, _this2.start = { y: evt.pageY, x: evt.pageX };
      });
    },
    onDrag: function onDrag(e) {
      if (this.dragging) {
        e.preventDefault();
        e.stopPropagation();

        // Prevent Click Event When it dragging
        if (this.touchEvent) {
          this.touchEvent.preventDefault();
          this.touchEvent.stopPropagation();
        }

        var evt = e.changedTouches ? e.changedTouches[0] : e;

        // Invers the Movement
        var yMovement = this.start.y - evt.clientY;
        var xMovement = this.start.x - evt.clientX;

        // Update the last e.client
        this.start = { y: evt.clientY, x: evt.clientX

          // The next Vertical Value will be
        };var nextY = this.top + yMovement;
        var nextX = this.left + xMovement;

        this.normalizeVertical(nextY);
        this.normalizeHorizontal(nextX);
      }
    },
    stopDrag: function stopDrag(e) {
      this.dragging = false;
      this.touchEvent = false;
    },
    scrollToY: function scrollToY(y) {
      this.normalizeVertical(y);
    },
    scrollToX: function scrollToX(x) {
      this.normalizeHorizontal(x);
    },
    normalizeVertical: function normalizeVertical(next) {
      var elementSize = this.getSize();

      // Vertical Scrolling
      var lowerEnd = elementSize.scrollAreaHeight - elementSize.scrollWrapperHeight;

      // Max Scroll Down
      var maxBottom = next > lowerEnd;
      if (maxBottom) next = lowerEnd;

      // Max Scroll Up
      var maxTop = next < 0;
      if (maxTop) next = 0;

      // Update the Vertical Value if it's needed
      var shouldScroll = this.top !== next;
      this.allowBodyScroll = !shouldScroll;
      if (shouldScroll) {
        this.top = next, this.vMovement = next / elementSize.scrollAreaHeight * 100;

        if (this.onMaxScroll && (maxTop || maxBottom)) {
          this.onMaxScroll({ top: maxTop, bottom: maxBottom, right: false, left: false });
        }
      }
    },
    normalizeHorizontal: function normalizeHorizontal(next) {
      var elementSize = this.getSize();

      // Horizontal Scrolling
      var rightEnd = elementSize.scrollAreaWidth - this.scrollWrapperWidth;

      // Max Scroll Right
      var maxRight = next > rightEnd;
      if (maxRight) next = rightEnd;

      // Max Scroll Left
      var maxLeft = next < 0;
      if (next < 0) next = 0;

      // Update the Horizontal Value
      var shouldScroll = this.left !== next;
      this.allowBodyScroll = !shouldScroll;
      if (shouldScroll) {
        this.left = next, this.hMovement = next / elementSize.scrollAreaWidth * 100;

        if (this.onMaxScroll && (maxRight || maxLeft)) {
          this.onMaxScroll({ right: maxRight, left: maxLeft, top: false, bottom: false });
        }
      }
    },
    handleChangePosition: function handleChangePosition(movement, orientation) {
      var _this3 = this;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Convert Percentage to Pixel
        var next = movement / 100;
        if (orientation == 'vertical') _this3.normalizeVertical(next * _this3.scrollAreaHeight);
        if (orientation == 'horizontal') _this3.normalizeHorizontal(next * _this3.scrollAreaWidth);
      });
    },
    handleScrollbarDragging: function handleScrollbarDragging() {
      this.dragging = true;
    },
    handleScrollbarStopDrag: function handleScrollbarStopDrag() {
      this.dragging = false;
    },
    getSize: function getSize() {
      // The Elements
      var $scrollArea = this.$refs.scrollArea;
      var $scrollWrapper = this.$refs.scrollWrapper;

      // Get new Elements Size
      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,

        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    },
    calculateSize: function calculateSize(cb) {
      if (typeof cb !== 'function') cb = null;

      var elementSize = this.getSize();

      if (elementSize.scrollWrapperHeight !== this.scrollWrapperHeight || elementSize.scrollWrapperWidth !== this.scrollWrapperWidth || elementSize.scrollAreaHeight !== this.scrollAreaHeight || elementSize.scrollAreaWidth !== this.scrollAreaWidth) {

        // Scroll Area Height and Width
        this.scrollAreaHeight = elementSize.scrollAreaHeight, this.scrollAreaWidth = elementSize.scrollAreaWidth,

        // Scroll Wrapper Height and Width
        this.scrollWrapperHeight = elementSize.scrollWrapperHeight, this.scrollWrapperWidth = elementSize.scrollWrapperWidth,

        // Make sure The wrapper is Ready, then render the scrollbar
        this.ready = true;

        return cb ? cb() : false;
      } else return cb ? cb() : false;
    }
  },

  mounted: function mounted() {
    this.calculateSize();

    // Attach The Event for Responsive View~
    window.addEventListener('resize', this.calculateSize);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove Event
    window.removeEventListener('resize', this.calculateSize);
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueScrollbar = __webpack_require__(1);

var _vueScrollbar2 = _interopRequireDefault(_vueScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _vueScrollbar2.default;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03d7e587_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_horizontal_scrollbar_vue__ = __webpack_require__(8);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_horizontal_scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03d7e587_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_horizontal_scrollbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/horizontal-scrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] horizontal-scrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03d7e587", Component.options)
  } else {
    hotAPI.reload("data-v-03d7e587", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fd7644e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vertical_scrollbar_vue__ = __webpack_require__(10);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vertical_scrollbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fd7644e_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vertical_scrollbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/js/components/vertical-scrollbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vertical-scrollbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fd7644e", Component.options)
  } else {
    hotAPI.reload("data-v-9fd7644e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.width < 100) ? _c('div', {
    ref: "container",
    staticClass: "vue-scrollbar__scrollbar-horizontal",
    on: {
      "click": _vm.jump
    }
  }, [_c('div', {
    ref: "scrollbar",
    class: 'scrollbar' + (_vm.dragging || _vm.draggingFromParent ? '' : ' vue-scrollbar-transition'),
    style: ({
      width: this.width + '%',
      left: this.scrolling + '%'
    }),
    on: {
      "touchstart": _vm.startDrag,
      "mousedown": _vm.startDrag
    }
  })]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03d7e587", esExports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "scrollWrapper",
    class: 'vue-scrollbar__wrapper' + (this.classes ? ' ' + this.classes : ''),
    style: (this.styles),
    on: {
      "click": _vm.calculateSize
    }
  }, [_c('div', {
    ref: "scrollArea",
    class: 'vue-scrollbar__area' + (this.dragging ? ' ' : ' vue-scrollbar-transition'),
    style: ({
      marginTop: this.top * -1 + 'px',
      marginLeft: this.left * -1 + 'px'
    }),
    on: {
      "wheel": _vm.scroll,
      "touchstart": _vm.startDrag,
      "touchmove": _vm.onDrag,
      "touchend": _vm.stopDrag
    }
  }, [_vm._t("default"), _vm._v(" "), (_vm.ready) ? _c('vertical-scrollbar', {
    attrs: {
      "area": {
        height: _vm.scrollAreaHeight
      },
      "wrapper": {
        height: _vm.scrollWrapperHeight
      },
      "scrolling": _vm.vMovement,
      "dragging-from-parent": _vm.dragging,
      "on-change-position": _vm.handleChangePosition,
      "on-dragging": _vm.handleScrollbarDragging,
      "on-stop-drag": _vm.handleScrollbarStopDrag
    }
  }) : _vm._e(), _vm._v(" "), (_vm.ready) ? _c('horizontal-scrollbar', {
    attrs: {
      "area": {
        width: _vm.scrollAreaWidth
      },
      "wrapper": {
        width: _vm.scrollWrapperWidth
      },
      "scrolling": _vm.hMovement,
      "dragging-from-parent": _vm.dragging,
      "on-change-position": _vm.handleChangePosition,
      "on-dragging": _vm.handleScrollbarDragging,
      "on-stop-drag": _vm.handleScrollbarStopDrag
    }
  }) : _vm._e()], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7ec59f76", esExports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.height < 100) ? _c('div', {
    ref: "container",
    staticClass: "vue-scrollbar__scrollbar-vertical",
    on: {
      "click": _vm.jump
    }
  }, [_c('div', {
    ref: "scrollbar",
    class: 'scrollbar' + (_vm.dragging || _vm.draggingFromParent ? '' : ' vue-scrollbar-transition'),
    style: ({
      height: _vm.height + '%',
      top: _vm.scrolling + '%'
    }),
    on: {
      "touchstart": _vm.startDrag,
      "mousedown": _vm.startDrag
    }
  })]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9fd7644e", esExports)
  }
}

/***/ })
/******/ ]);
});

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["a"] = (PerfectScrollbar);


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "block-main" } }, [
    _c(
      "div",
      {
        class: _vm.closeMenu ? "active" : "" + _vm.sectionPosition,
        attrs: { id: "header" }
      },
      [
        _c(
          "div",
          { staticClass: "d-flex" },
          [
            _c(
              "router-link",
              {
                staticClass: "logo",
                class: _vm.sectionIndex != 0 ? "fade" : "",
                attrs: { to: "/", exact: "" }
              },
              [
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
                      staticStyle: { fill: "#ed6c00", "fill-rule": "evenodd" },
                      attrs: {
                        d:
                          "M80.85,86.49a17.85,17.85,0,0,0-1.36,2.69,14.72,14.72,0,0,1-.81,1.64c-.79,1.29-1.44,2.68-2.2,4-.61,1-1.36,2-2,3-.41.68-1,1.24-1.36,1.93a5.76,5.76,0,0,1-.77.9c-.33.36-.58.84-.92,1.21-.63.68-1,1.62-1.75,2.17-.29.2-.42.66-.64,1a14,14,0,0,1-.92,1.35c-.56.63-.7,1.53-1.21,2.18a1.74,1.74,0,0,0-.2,1c0,1.26-.18,2.53-.17,3.8,0,1,0,2,0,2.94,0,.66-.06,1.32-.07,2a4.59,4.59,0,0,1-.17,1.53,3.93,3.93,0,0,0-.11,1.53c0,.72,0,1.47.05,2.19a8.1,8.1,0,0,1-.07,2.14,9.11,9.11,0,0,1-.5,1.34,1.73,1.73,0,0,1-.64.9.77.77,0,0,1-.73.17c-.78-.21-1.19-.9-1.59-1.57-.53-.9-1-1.81-1.51-2.74s-1-1.88-1.4-2.85a4.56,4.56,0,0,1-.21-4.08,9.61,9.61,0,0,0,.6-1.3,3.67,3.67,0,0,0,.08-1.4c0-.32-.73-.5-1-.28-.47.34-1,.66-1.38,1a15.17,15.17,0,0,0-1.28.88,24.09,24.09,0,0,1-2,1.5,21.37,21.37,0,0,1-2,1.31,14.75,14.75,0,0,1-1.82,1.08,4,4,0,0,1-2.43.59,1.76,1.76,0,0,1-1.53-1.45,12.21,12.21,0,0,0-.8-1.57c-.31-.59-.67-1.16-1-1.75a1,1,0,0,1,0-.92c.36-.84.68-1.71,1-2.58a40,40,0,0,1,1.41-3.8c.64-1.29.93-2.73,1.5-4s.88-2.62,1.5-3.85A6.4,6.4,0,0,0,50.9,99a8.12,8.12,0,0,1,.5-1.32,19.31,19.31,0,0,0,1-2.33,3.51,3.51,0,0,1,.26-.75,10.69,10.69,0,0,0,.51-1.37A6.07,6.07,0,0,1,54.35,91a7.21,7.21,0,0,0,.76-1.18,9.74,9.74,0,0,1,.72-1,9.09,9.09,0,0,0,.84-1.12c.22-.43.48-.82.7-1.24s.23-.7.42-1a2.47,2.47,0,0,0,.17-.84c.13-.8-.21-1.13-.94-1.06a4.05,4.05,0,0,0-1.72.8,8.53,8.53,0,0,1-2.47,1.23,8.23,8.23,0,0,0-.86.19,4.55,4.55,0,0,1-1.25.34,4.88,4.88,0,0,1-2-.53,2.87,2.87,0,0,1-1.29-1.4C46.78,83,45.15,82.85,44.11,82a1.39,1.39,0,0,1-.25-1.36A1.17,1.17,0,0,1,45,79.69c.63,0,1.26-.06,1.88-.08a6.38,6.38,0,0,0,2.16-.89c1.25-.55,2.4-1.32,3.63-1.91.61-.29,1.16-.71,1.76-1a10.16,10.16,0,0,1,1-.53c.58-.27,1.1-.63,1.65-1a1.26,1.26,0,0,1,.26-.13,5.73,5.73,0,0,0,1.83-.92c.75-.6,1.63-1,2.4-1.55a8.83,8.83,0,0,0,1.26-1.26,2.29,2.29,0,0,0,.49-1.71c0-.39.05-.79,0-1.18-.07-.61,0-1.22,0-1.8,0-1.29,0-2.57,0-3.85a3.54,3.54,0,0,1,.16-.62,9,9,0,0,1,1.17-2.91,8.33,8.33,0,0,0,1-1.84c.07-.27.4-.31.53-.56a9.68,9.68,0,0,1,1.83-2.45,2.17,2.17,0,0,1,1.82-.6c.33.05.8.07,1,.41a4.41,4.41,0,0,1,.5,2,8.19,8.19,0,0,0,.53,3.6,4.34,4.34,0,0,1,.25.82,1.43,1.43,0,0,0,.32.73,1,1,0,0,1,.18.56.32.32,0,0,1-.16.34.3.3,0,0,1-.36,0,4.53,4.53,0,0,1-1.54-2A.84.84,0,0,0,69.26,59a2.58,2.58,0,0,0-.81,1.6c-.2.93-.36,1.87-.64,2.78a5.64,5.64,0,0,0,0,2.28,3.11,3.11,0,0,0,.3,1.07c.41.91,1.19,1,1.7.2a3.82,3.82,0,0,1,2-1.44c.65-.28,1.33-.5,2-.81.36-.16.69-.39,1.11-.25.18.05.34-.14.51-.16a12,12,0,0,1,2.24-.33,6.91,6.91,0,0,1,1.59.53c.08,0,.14.09.22.13a1.18,1.18,0,0,1,.76,1.36,6.13,6.13,0,0,1-.27,1.34c-.17.46-.59.63-.87,1-.09.1-.19.19-.29.31-.64.8-1.11,1.74-1.81,2.48-.54.59-1.16,1.1-1.74,1.64-.89.82-1.94,1.4-2.89,2.12-.19.15-.42.14-.62.23-.82.38-1.64.74-2.44,1.18a5.43,5.43,0,0,0-1.37,1.25,2.48,2.48,0,0,0-.51,1.33,12.77,12.77,0,0,0-.22,1.63,5.47,5.47,0,0,1-.3,1.24,6.06,6.06,0,0,0-.2.92c-.09.62.06,1.26-.08,1.88a6.32,6.32,0,0,0-.12,1.15c0,.33-.13.59-.13.93,0,.58,0,1.15,0,1.73s-.05,1.48-.15,2.16A11.82,11.82,0,0,0,66,91.56c0,.19,0,.38,0,.57,0,.4,0,.79-.08,1.21,0,.81,0,1.64-.1,2.45a17.26,17.26,0,0,0,.21,2.4,2.66,2.66,0,0,0,.36,1c.11.23.33.23.55.2a4.57,4.57,0,0,0,3.13-2.18c.71-.94,1.54-1.75,2.32-2.61.59-.65,1.27-1.19,1.85-1.86s1-1.31,1.55-1.91a9.8,9.8,0,0,0,.88-1.23c.21-.28.46-.57.64-.86.27-.45.57-.79.8-1.27A11.73,11.73,0,0,1,78.91,86a1.59,1.59,0,0,0,.18-.37c.24-.56.48-.73,1.06-.68.28,0,.36,0,.31-.37a3.57,3.57,0,0,1,.74-3.09c.32-.36.53-.34,1-.46a11.87,11.87,0,0,0,1.24-.61c.24-.09.49,0,.75-.14a3.73,3.73,0,0,1,1-.12A10.58,10.58,0,0,1,86.32,80a2.81,2.81,0,0,0,.9-.21c.4-.13.6-.52.87-.8a13.7,13.7,0,0,1,1.14-1c.19-.16.31-.42.51-.6.46-.43,1-.82,1.4-1.25s1.12-1.19,1.71-1.75c.41-.39.87-.75,1.27-1.17s1-1,1.52-1.54a21,21,0,0,1,2.46-2.35l.22-.21a12.06,12.06,0,0,1,1.28-1.3,17.41,17.41,0,0,0,2.27-2.2,1,1,0,0,0,.19-1c-.24-.7-1.08-1.08-1.64-1.48s-.84-.12-1.27-.23-.5-.5-.59-.82a4.77,4.77,0,0,1-.48-1.8c0-.27.1-.55.11-.81s0-.31,0-.47a9.53,9.53,0,0,1,.47-1.55c.26-.88.49-1.78.77-2.66a13.26,13.26,0,0,0,.37-2c.07-.63.4-1.2.45-1.83a2.31,2.31,0,0,0-.08-1.05c-.29-.71-1.16.11-1.48.34a4.23,4.23,0,0,1-.91.39,3,3,0,0,1-.91.18c-.19,0-.38.06-.58.06a3.57,3.57,0,0,1-.84-.21,2.12,2.12,0,0,1-.89-.58,1.58,1.58,0,0,1-.3-1.88c.1-.18.22-.32.43-.31A5.24,5.24,0,0,0,97,47.35a3.93,3.93,0,0,0,1.31-1.08,1.19,1.19,0,0,1,1-.52,5.76,5.76,0,0,0,1.46-.55,14.18,14.18,0,0,1,1.64-.18,7.27,7.27,0,0,1,2.59-.17,8.35,8.35,0,0,1,3.33,1.2c.2.13.25.4.34.62s.15.49.22.75a.55.55,0,0,1,0,.31c-.37.59-.37,1.36-.91,1.87a8.61,8.61,0,0,0-1.46,2.17,21.46,21.46,0,0,1-1.38,2,5.78,5.78,0,0,0-1.19,2.29,20.3,20.3,0,0,0-.52,3c0,1.93,1.64,1.75,2.86,2.55a5.75,5.75,0,0,1,2.52,3,2.16,2.16,0,0,1-1.26,2.66,13.87,13.87,0,0,1-2.17.65,2.7,2.7,0,0,0-1.16.69c-.64.55-1.3,1.08-1.93,1.66-.83.77-1.7,1.5-2.54,2.26s-1.84,1.74-2.84,2.5a7.47,7.47,0,0,0-1.76,1.66,1.18,1.18,0,0,1-.25.25c-.65.53-1.28,1.08-1.9,1.64-.2.18-.54.67,0,.41s1-.67,1.6-.9c.33-.15.66-.28,1-.44.63-.31,1.23-.79,1.83-1.16a20.29,20.29,0,0,1,1.94-.93c1.33-.62,2.66-1.24,4-1.84a11.1,11.1,0,0,1,2.46-.87c.42-.08.78-.37,1.22-.45.61-.11,1.2-.32,1.8-.48s1-.1,1.45-.27A22.47,22.47,0,0,1,113,71.1a10.48,10.48,0,0,1,2.8-.18c.44,0,.89,0,1.33,0a1.77,1.77,0,0,1,.69.13,17.3,17.3,0,0,1,1.67.46,1.87,1.87,0,0,1,.77.53c.17.21.19.65.34.79.6.57.47,1.4.62,2.13a3.64,3.64,0,0,1-1.56,3.86c-.59.4-1.2.77-1.79,1.2-.38.28-.84.46-1.25.72-.82.53-1.67,1-2.48,1.55s-1.48.72-2.14,1.21a13.51,13.51,0,0,0-1.48,1.07c-.81.78-1.71,1.44-2.58,2.17-.48.4-1,.76-1.46,1.21a17.22,17.22,0,0,1-1.48,1.2c-.06,0-.15.06-.18.12-.43.75-1,.43-1.55.22-.1,0-.18-.1-.27-.12-.38-.1-.47-.56-.9-.33a3.44,3.44,0,0,0-.79.78,15.42,15.42,0,0,0-1,1.37,7.73,7.73,0,0,1-1.58,1.39c-.7.52-1.3,1.19-2,1.72-.33.26-.56.61-.87.89a4.5,4.5,0,0,1-.81.56,7.16,7.16,0,0,0-.61.48,8.57,8.57,0,0,0-.75.6c-.22.19-.45.36-.67.53s-.39.49-.73.52a1.31,1.31,0,0,0-1,1.69,1.94,1.94,0,0,0,1.28,1.33.94.94,0,0,1,.3.15,2.19,2.19,0,0,0,2.2.45,11.43,11.43,0,0,0,3.12-1.13A19,19,0,0,1,101,99.2a22.54,22.54,0,0,0,3.08-1.09,6.49,6.49,0,0,0,1.38-.72,1.91,1.91,0,0,0,.59-.68c.23-.52.12-.82-.33-1a5.44,5.44,0,0,1-2.27-2.12c-.18-.27,0-.4.24-.44A9,9,0,0,1,105.1,93a6.82,6.82,0,0,1,2.81.47,2.78,2.78,0,0,1,1.25,1,.65.65,0,0,0,.6.21,6.7,6.7,0,0,0,1.47-.35c.57-.14,1.17-.22,1.73-.41a5.67,5.67,0,0,1,2.42-.26,12.88,12.88,0,0,1,1.52.06,34.39,34.39,0,0,0,3.47.47,12,12,0,0,1,1.88.57,3.62,3.62,0,0,1,1.9,1.37,5.36,5.36,0,0,0,.82.76,4.2,4.2,0,0,1,.84,1.16c.27.39.58.74.84,1.13a15.29,15.29,0,0,1,1.38,2.2,8.8,8.8,0,0,1,.6,3.48,24.51,24.51,0,0,1-.42,4.37c-.2,1.08-.23,2.17-.36,3.25a16.57,16.57,0,0,1-.51,2.78,25,25,0,0,1-.68,2.43c-.28.64-.42,1.33-.71,2-.19.42-.29.88-.52,1.28-.64,1.17-1,2.51-2.17,3.29a5.86,5.86,0,0,0-1.18,1c-.52.59-.91,1.28-1.39,1.9-.23.3-.42.62-.66.91-.41.5-.91.93-1.31,1.43a4.8,4.8,0,0,1-1.21,1.25,3.42,3.42,0,0,0-1.12,1.26,2.17,2.17,0,0,1-.55.49,10.58,10.58,0,0,0-.83.93,9.1,9.1,0,0,1-2.25,1.66,7,7,0,0,0-1.25.84,6.3,6.3,0,0,1-1.55.84c-.51.2-1.06.26-1.56.45a4.26,4.26,0,0,1-2.71-.06c-.1,0-.11-.12-.14-.21-.11-.34-.2-.7-.33-1a3.94,3.94,0,0,1-.57-2.23,19.92,19.92,0,0,0-1.69-4,3.42,3.42,0,0,1-.34-.89c-.07-.26,0-.48.34-.46a13.87,13.87,0,0,1,2.15.15,11.85,11.85,0,0,0,3.3.19,4.22,4.22,0,0,0,3.13-1.62,30.15,30.15,0,0,1,2.11-2.27,15.19,15.19,0,0,0,1.52-2.1,39.68,39.68,0,0,1,2.31-3.25,9.15,9.15,0,0,0,.84-1.49c.31-.59.62-1.19.9-1.8s.69-1.51,1-2.27c.15-.36.28-.72.46-1.06a8.67,8.67,0,0,0,.31-.9c.14-.37.21-.71.33-1.08a6.4,6.4,0,0,0,.12-1,18.1,18.1,0,0,0,.15-1.94c0-.57.13-1.13.13-1.71a7.39,7.39,0,0,0-.13-2,22.33,22.33,0,0,0-.66-2.43,7.56,7.56,0,0,0-.79-1.45,2,2,0,0,0-1.41-.83,21.45,21.45,0,0,0-3.4-.06,12.28,12.28,0,0,0-2.19.42.92.92,0,0,0-.68.49c-.17.33-.51.43-.73.67a13.46,13.46,0,0,0-1.3,1.61c-.3.42-.73.74-1,1.15a16.31,16.31,0,0,0-1.29,1.55c-.3.51-.83.82-1.19,1.3s-.72.9-1.08,1.33a16,16,0,0,1-1.65,1.83,5.54,5.54,0,0,0-.77.89c-.41.54-.88,1-1.31,1.53a4.12,4.12,0,0,0-.69,1.5c-.1.33.13.37.32.39a6.55,6.55,0,0,0,1.32-.18c.44-.06.77-.4,1.2-.49a.63.63,0,0,1,.45,0,9.42,9.42,0,0,1,1.51.84,4.43,4.43,0,0,0,1.09.54A12.71,12.71,0,0,1,109,115.9c.53.35.54.88.64,1.44a8.08,8.08,0,0,1-.07,3.06,2,2,0,0,1-.82,1.1,14.92,14.92,0,0,0-1.31.94c-.32.34-.64.68-.93,1s-.45.83-.81,1c-.12.06-.26,0-.38.1a2.38,2.38,0,0,0-.49.34,7,7,0,0,1-1.32.63c-.52.21-.92.58-1.43.83a5.66,5.66,0,0,1-1.42.6c-.54.09-.44-.24-.27-.59a2.46,2.46,0,0,0,.17-.63,2.27,2.27,0,0,1,.47-.86,6.56,6.56,0,0,0,1.07-3.85c0-.37-.09-.57-.51-.55-.81.05-1.61.16-2.42.18-.37,0-.73.34-1.11.47a15,15,0,0,0-1.74.76,9.48,9.48,0,0,1-2,.72,1.69,1.69,0,0,1-1.25,0,1.94,1.94,0,0,1-.59-.74,4,4,0,0,1-.59-3.06,13,13,0,0,0,.39-1.75,3.66,3.66,0,0,1,.25-1.4,5.27,5.27,0,0,1,1.51-.94,14.84,14.84,0,0,1,1.7-.83,1.84,1.84,0,0,0,1.08-1.49c0-.23-.08-.3-.23-.37a3.08,3.08,0,0,0-2.52-.09c-.38.16-.61.06-.84-.3a3.59,3.59,0,0,0-2.54-1.75,3.44,3.44,0,0,0-1.59.26,2.73,2.73,0,0,0-1.06.67c-.46.4-1,.73-1.47,1.18a16.72,16.72,0,0,1-1.22,1.16c-.84.7-1.6,1.51-2.41,2.26a19.84,19.84,0,0,0-1.66,2.23,9.09,9.09,0,0,0-1.21,3.19c-.42,1.3-2,.85-2.84.14a8.3,8.3,0,0,1-2.33-3.25c-.19-.59-.29-1.21-.43-1.82a7,7,0,0,1,0-1.37,11.46,11.46,0,0,1,0-1.55c0-.55.32-1,.32-1.59a2.86,2.86,0,0,1,1-1.89c.4-.45.76-.94,1.18-1.38.59-.62,1.19-1.24,1.76-1.91,1-1.18,2.27-2.06,3.33-3.2a14,14,0,0,1,1.22-1.08c.41-.36.81-.75,1.23-1.08.71-.57,1.41-1.18,2.12-1.77s1.91-1.17,2.43-2.32a.94.94,0,0,1,1-.51c.33,0,1.12.12,1.15-.38,0-.21-.17-.33-.16-.53a2.27,2.27,0,0,1,.36-.71,11.28,11.28,0,0,1,1.09-1.48c.32-.41.52-.87.85-1.25a8,8,0,0,0,.68-1c.48-.81,1-1.58,1.46-2.41.23-.42.48-.84.73-1.26a9.75,9.75,0,0,0,1.15-2.19A5.5,5.5,0,0,1,97.57,84c.26-.54.7-1.1,1.36-1a7.39,7.39,0,0,0,1.75.25,8.34,8.34,0,0,0,1.12-.28,1.83,1.83,0,0,1,2.2,1.15,7.45,7.45,0,0,1,.51,1.39c0,.31.24.33.44.19s.54-.43.81-.66c.93-.77,1.89-1.5,2.88-2.18.38-.27.68-.68,1.07-.94s.69-.54,1-.81c.61-.5,1.29-.93,1.9-1.43s1.37-1.1,2-1.72,1.36-.94,1.63-1.66-.5-1.21-1-1.41a3.65,3.65,0,0,0-1.77-.1c-.39,0-.76.17-1.16.2a13.5,13.5,0,0,0-1.77.45,14.28,14.28,0,0,0-2.74.93,16,16,0,0,0-2.06,1c-.46.27-1,.44-1.44.71-.84.49-1.71.93-2.56,1.4-.59.32-1.16.7-1.79,1A9.67,9.67,0,0,0,99,81a37,37,0,0,0-4.69,2.52c-.74.57-1.64.92-2.42,1.44a17.92,17.92,0,0,1-2.22,1.24,19.23,19.23,0,0,0-2.8,1.49,6.5,6.5,0,0,0-1.16,1.06,5.59,5.59,0,0,0-.52.66c-.11.2-.15.42-.28.62-.28.46-.54.56-1,.34s-.82-.18-1.17-.44c-.52-.39-1.26-.78-1.51-1.41a4.78,4.78,0,0,1-.2-.83C81,87.42,80.72,86.7,80.85,86.49ZM53,110.81c.78.1,1.29-.48,1.83-.9a26.5,26.5,0,0,1,2.55-2.07c.61-.36,1.07-.94,1.7-1.29,1.29-.73,1.48-2,1.48-3.32,0-.47,0-.92,0-1.39a29.92,29.92,0,0,1,0-3.14c0-.9-.21-1.72-.14-2.62,0-.37-.21-.55-.51-.4a1.16,1.16,0,0,0-.42.43c-.25.41-.33.92-.59,1.3-.41.61-.65,1.31-1,1.93-.25.41-.45.88-.71,1.28A26.48,26.48,0,0,0,55.82,103c-.25.51-.51,1-.77,1.5s-.59,1.23-.93,1.82-.65,1.39-1,2.07a5.61,5.61,0,0,0-.64,1.27C52.3,110.29,52.56,110.79,53,110.81Zm36.19-10.06c-.78,0-1.23.47-1.71.91s-1.08,1-1.59,1.51-1,.68-1.49,1.17-.8.6-1.13,1-.84.59-1.2,1c-.56.65-1.15,1.27-1.73,1.91a2.68,2.68,0,0,0-.36.56c-.21.49-.15.57.36.57a1.35,1.35,0,0,0,.56-.13,17.92,17.92,0,0,0,2.62-1.56c.5-.34,1.06-.57,1.54-1a5.6,5.6,0,0,1,1.24-.64c.36-.17.71-.33,1.07-.52a17,17,0,0,0,1.77-1.18c.59-.44,1.44-.72,1.51-1.53a2.5,2.5,0,0,0-.92-2C89.53,100.66,89.43,100.76,89.21,100.75Zm12.59,3.54a3,3,0,0,0-.63-.06,2.15,2.15,0,0,0-1.3.32,5.33,5.33,0,0,0-1.16,1.35c-.33.46-.78.75-1.15,1.18-.7.81-.1,1.6-.32,2.47a.29.29,0,0,0,.17.29c.12,0,.15-.1.21-.19.28-.39.57-.78.85-1.18a15.76,15.76,0,0,0,1.42-1.91,5.11,5.11,0,0,1,1.22-1.58A2.27,2.27,0,0,0,101.8,104.29Z",
                        transform: "translate(-43.78 -44.8)"
                      }
                    }),
                    _c("path", {
                      staticStyle: { fill: "#ed6c00", "fill-rule": "evenodd" },
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
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-end align-items-center",
                attrs: { id: "main-menu" }
              },
              [
                _c("menu-header", {
                  class: _vm.closeMenu
                    ? "menu-close"
                    : "" || _vm.textShadow
                      ? "menu-shadow"
                      : ""
                })
              ],
              1
            )
          ],
          1
        )
      ]
    ),
    _vm._v(" "),
    _c("span", {
      class: _vm.sectionIndex != 0 ? "menu-close" : "",
      attrs: { id: "burger-menu" },
      on: {
        click: function($event) {
          _vm.closeMenu = !_vm.closeMenu
        }
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      [
        _vm.display_fullpage
          ? _c(
              "full-page",
              {
                ref: "fullpage",
                attrs: { id: "fullpage", options: _vm.options }
              },
              [
                _c("block-experience"),
                _vm._v(" "),
                _c("block-foods"),
                _vm._v(" "),
                _c("block-brands"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "section text-black position-relative text-center",
                    attrs: { id: "block-news" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: { height: "100vh", position: "relative" },
                        attrs: { id: "block-news-scroll" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "container position-relative m-auto section-pd"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "row flex-column align-items-center justify-content-center flex-nowrap"
                              },
                              [
                                _c(
                                  "h3",
                                  { staticClass: "main-title text-uppercase" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "fs-inherit text-orange" },
                                      [_vm._v("橘色")]
                                    ),
                                    _vm._v("新訊\n                            ")
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "sub-title" }, [
                                  _vm._v("events & news")
                                ]),
                                _vm._v(" "),
                                _c("block-news"),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn-load-more btn-orange fat",
                                    attrs: { to: "/news" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                更多橘色新訊\n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("block-footer")
              ],
              1
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e3a27224", module.exports)
  }
}

/***/ })

});