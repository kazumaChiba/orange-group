webpackJsonp([1],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(247)
/* template */
var __vue_template__ = __webpack_require__(268)
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

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(231)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(233)
/* template */
var __vue_template__ = __webpack_require__(234)
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

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("b8d6fad2", content, false, {});
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

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n#footer {\n  height: 700px;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n    margin-bottom: 60px;\n}\n#footer:before {\n    background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n    font-size: 20px;\n}\n#footer .footer .footer-info {\n    margin-bottom: 100px;\n    line-height: 25px;\n    font-size: 14px;\n    font-weight: 100;\n}\n#footer .footer .footer-info div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#footer .footer .footer-info p {\n      margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n      font-size: 18px;\n      font-weight: 100;\n      line-height: 30px;\n}\n#footer .footer.footer-join:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: calc(100% + 150px);\n    background: rgba(0, 0, 0, 0.8);\n    top: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ 233:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "section text-white text-center bg-black-cover position-relative",
      staticStyle: { "background-image": "url('/images/bg_footer.png')" },
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
                  "row d-flex justify-content-between align-items-center"
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
          { staticClass: "row d-flex flex-column justify-content-between" },
          [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "footer position-relative d-flex flex-column align-items-center justify-content-center w-100"
              },
              [
                _c("div", { staticClass: "footer-social" }, [
                  _c(
                    "a",
                    {
                      staticClass: "footer-icons mr-3 ml-3",
                      attrs: { href: "#" }
                    },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fab", "facebook-f"] }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "footer-icons mr-3 ml-3",
                      attrs: { href: "#" }
                    },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fab", "twitter"] }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]
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
    return _c("div", { staticClass: "join-us-slogan text-left" }, [
      _vm._v("\n                    不僅僅只是台灣最棒的餐飲集團"),
      _c("br"),
      _vm._v(" "),
      _c("span", { staticClass: "text-orange" }, [
        _vm._v("還是實現自我未來的大家庭")
      ])
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
          "footer-info position-relative d-flex justify-content-between align-items-center w-100"
      },
      [
        _c("div", { staticClass: "footer-text-left text-left" }, [
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
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "logo",
          attrs: { src: "/images/index_logo.png" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "footer-text-right text-right" }, [
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
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "footer position-relative w-100 text-size-1 d-flex align-items-end justify-content-center",
        attrs: { id: "copyright" }
      },
      [
        _vm._v("2018 "),
        _c("a", { staticClass: "link-orange" }, [_vm._v(" 橘色涮涮屋 ")]),
        _vm._v(" 版權所有. Designed by "),
        _c(
          "a",
          {
            staticClass: "link-orange",
            attrs: { href: "www.daydream-lab.com" }
          },
          [_vm._v(" Daydream Lab")]
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(246);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("66f7d9da", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n#fullpage {\n  -webkit-transition-duration: .8s !important;\n          transition-duration: .8s !important;\n  -webkit-transition-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;\n          transition-timing-function: cubic-bezier(0.5, 0, 0, 1) !important;\n}\n#burger-menu {\n  width: 0px;\n  height: 25px;\n  text-align: center;\n  overflow: hidden;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  position: absolute;\n  right: 30px;\n  top: 48px;\n  z-index: 9999999;\n}\n#burger-menu:before {\n    content: \"|||\";\n    color: #f26c23;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    display: inline-block;\n    font-weight: bold;\n}\n#burger-menu:hover {\n    cursor: pointer;\n}\n#burger-menu.menu-close {\n    width: 25px;\n}\n#fp-nav.fp-right {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  visibility: hidden;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n  right: 0;\n  width: unset;\n}\n#fp-nav.fp-right.active {\n    visibility: visible;\n    opacity: 1;\n}\n#fp-nav.fp-right ul li {\n    width: 100%;\n    height: 25px;\n    margin: 5px 0;\n}\n#fp-nav.fp-right ul li:last-child {\n      display: none;\n}\n#fp-nav.fp-right ul li span {\n      display: none;\n}\n#fp-nav.fp-right ul li .fp-tooltip.fp-right {\n      color: #ccc;\n      opacity: 1;\n      width: auto;\n      font-size: 14px;\n      letter-spacing: 0px;\n      font-style: italic;\n      right: 0;\n      overflow: visible;\n      position: relative;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0 50px;\n      font-weight: 300;\n}\n#fp-nav.fp-right ul li:hover div, #fp-nav.fp-right ul li a.active + div {\n      cursor: pointer;\n      background: #f26c23;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      color: white !important;\n}\n#fp-nav.fp-right ul li a {\n      position: absolute;\n      top: 0;\n      left: 0;\n}\n#app .fp-scroller {\n  min-height: 100%;\n}\n#app .logo {\n  position: absolute;\n  height: 220px;\n}\n#app .main-title {\n  line-height: 35px;\n}\n#app .main-title .sub-title {\n    letter-spacing: 10px;\n    font-weight: 200;\n    font-size: 16px;\n    font-family: \"PingFang SC\",微軟正黑體;\n}\n", ""]);

// exports


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_experience__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_block_brands__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_block_news__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_block_foods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_block_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            options: {
                // https://github.com/alvarotrigo/fullPage.js/
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                scrollOverflow: true,
                navigation: true,
                navigationTooltips: ['橘色體驗', '橘色價值', '橘色版圖', '橘色新訊'],
                afterLoad: this.afterLoad,
                slidesNavigation: true,
                easing: 'easeInOutCubic',
                easingcss3: 'ease'
            },
            sectionIndex: 0,
            sectionPosition: 'section-1',
            closeMenu: false,
            textShadow: false
        };
    },
    mounted: function mounted() {
        jQuery(document).ready(function () {}); // END jquery ready
    },
    methods: {
        afterLoad: function afterLoad(originSection, activeSection) {
            if (!activeSection.isFirst && !activeSection.isLast) {
                jQuery("#fp-nav").addClass("active");
            } else {
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
        }
    },
    components: {
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default.a,
        BlockExperience: __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default.a,
        BlockBrands: __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default.a,
        BlockNews: __WEBPACK_IMPORTED_MODULE_3_components_block_news___default.a,
        BlockFoods: __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_5_components_block_footer___default.a
    }

});

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(251)
/* template */
var __vue_template__ = __webpack_require__(252)
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

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("b9557f26", content, false, {});
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

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n#block-experience {\n  background-size: cover;\n}\n#block-experience.active .bg-transition.bg-left .bg-inner, #block-experience.active .bg-transition.bg-right .bg-inner, #block-experience.active .bg-transition.active .bg-inner {\n    background-position-y: 0;\n}\n#block-experience .bg-transition.bg-left:before, #block-experience .bg-transition.bg-right:before {\n    position: absolute;\n    width: 50%;\n    height: 100vh;\n    background: black;\n    content: \"\";\n    left: 0;\n    opacity: 0.8;\n    top: calc(50% - 50vh);\n    z-index: 4;\n    content: \"\";\n    word-break: keep-all;\n}\n#block-experience .bg-transition.bg-right:before {\n    width: 100%;\n    opacity: 0.4;\n}\n#block-experience .bg-transition.bg-left .bg-inner, #block-experience .bg-transition.bg-right .bg-inner {\n    background-position-y: -100vh;\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n}\n#block-experience .bg-transition.bg-left .bg-inner.active, #block-experience .bg-transition.bg-right .bg-inner.active {\n      background-position-y: 0;\n      opacity: 1;\n}\n#block-experience .bg-transition.bg-right .bg-inner.active {\n    background-position-y: 100vh;\n    opacity: 0;\n}\n#block-experience .bg-transition.bg-left {\n    z-index: 3;\n}\n#block-experience .bg-transition.bg-left:before {\n      width: 100%;\n}\n#block-experience .bg-transition.bg-left .bg-inner {\n      left: 0;\n}\n#block-experience .bg-transition.bg-left .bg-inner.active {\n        background-position-y: -100vh;\n        opacity: 0;\n}\n#block-experience .bg-transition.bg-right {\n    z-index: 2;\n    right: 0;\n}\n#block-experience .bg-transition.bg-right .bg-inner {\n      right: 0;\n      background-position-y: 100vh;\n}\n#block-experience .fp-scroller {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#block-experience #content-experience {\n    z-index: 4;\n}\n#block-experience #content-experience .big_title {\n      font-size: 200px;\n      letter-spacing: 30px;\n      color: rgba(255, 255, 255, 0.2);\n      position: absolute;\n      left: 0;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 50%;\n      word-break: keep-all;\n      overflow: hidden;\n}\n#block-experience #content-experience .experience-inner {\n      width: 350px;\n      margin: 0 auto;\n      text-align: left;\n      font-weight: 300;\n}\n#block-experience #content-experience .experience-inner .experience-item {\n        -webkit-transition: opacity .5s;\n        transition: opacity .5s;\n}\n#block-experience #content-experience .experience-inner h5 {\n        letter-spacing: 4px;\n        font-weight: 300;\n}\n#block-experience #content-experience .experience-inner h5 span {\n          letter-spacing: 7px;\n          line-height: 25px;\n          font-size: 22px;\n}\n#block-experience #content-experience .experience-inner .left-line:before {\n        content: \"\";\n        display: inline-block;\n        width: 20px;\n        height: 5px;\n        background: #f26d23;\n        margin-right: 10px;\n        vertical-align: middle;\n}\n#block-experience #content-experience .experience-circle {\n      position: absolute;\n      top: calc(50% - 250px);\n      left: calc(50% - 250px);\n}\n#block-experience #content-experience .experience-circle .circle-option {\n        position: absolute;\n        width: 500px;\n        height: 500px;\n}\n#block-experience #content-experience .experience-circle .circle-body {\n        -webkit-transform: rotate(12deg);\n                transform: rotate(12deg);\n        width: 500px;\n        height: 500px;\n}\n#block-experience #content-experience .experience-circle .circle-body.active .circle-line.-left:after {\n          -webkit-transform: rotate(320deg);\n                  transform: rotate(320deg);\n          -webkit-transition: all .8s;\n          transition: all .8s;\n          opacity: 1;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line {\n          position: absolute;\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line:before, #block-experience #content-experience .experience-circle .circle-body .circle-line.-left:after {\n            content: \"\";\n            display: block;\n            width: 200%;\n            height: 100%;\n            border: 28px solid rgba(242, 109, 35, 0.8);\n            border-radius: 100%;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.-left {\n            left: 0;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.-left:before, #block-experience #content-experience .experience-circle .circle-body .circle-line.-left:after {\n              border-bottom-color: transparent;\n              border-left-color: transparent;\n              -webkit-transform: rotate(-40deg);\n                      transform: rotate(-40deg);\n              -webkit-clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%);\n                      clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%);\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.-right {\n            right: 0;\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg);\n}\n#block-experience #content-experience .experience-circle .circle-option {\n        -webkit-transition: all 2s;\n        transition: all 2s;\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n        top: 0;\n}\n#block-experience #content-experience .experience-circle .circle-option.active {\n          opacity: 0;\n          -webkit-transition: opacity .3s;\n          transition: opacity .3s;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option {\n          position: absolute;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option:hover {\n            cursor: pointer;\n            color: #f26d23;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-top {\n            top: calc(-40px - 12px);\n            left: calc(50% - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-bottom {\n            bottom: calc(-40px - 12px);\n            left: calc(50% - 18px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-right {\n            top: calc(50% - 18px);\n            right: calc(-40px - 12px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-left {\n            top: calc(50% - 18px);\n            left: calc(-40px - 12px);\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option a {\n            word-break: keep-all;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.active {\n            opacity: 0;\n            -webkit-transition: opacity 1s;\n            transition: opacity 1s;\n            -webkit-transition-delay: .5s;\n                    transition-delay: .5s;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 {\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(0deg) !important;\n                    transform: rotate(0deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 {\n          -webkit-transform: rotate(-90deg);\n                  transform: rotate(-90deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(90deg) !important;\n                    transform: rotate(90deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 {\n          -webkit-transform: rotate(-180deg);\n                  transform: rotate(-180deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(180deg) !important;\n                    transform: rotate(180deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 {\n          -webkit-transform: rotate(-270deg);\n                  transform: rotate(-270deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(270deg) !important;\n                    transform: rotate(270deg) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 251:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            bgTransition: false,
            experience_view: 'ex',
            experience: [{
                'url': '/images/slideshow_1.jpg',
                'title': '橘色體驗'
            }, {
                'url': '/images/bg_food_1.png',
                'title': '橘色鍋物'
            }, {
                'url': '/images/bg_brand_1.png',
                'title': '橘色咖啡'
            }, {
                'url': '/images/bg_footer.png',
                'title': '橘色舒體'
            }],
            experience_index: 0,
            experience_index_old: 0
        };
    },
    components: {
        'ex': {
            template: '<div>' + '<h2 class="mb-4 text-center"><span class="fs-inherit text-orange">橘色</span> 體驗</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>' + '</div>'
        },
        'pot': {
            template: '<div>' + '<h2 class="mb-4 text-center"><span class="fs-inherit text-orange">橘色</span> 鍋物</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>' + '</div>'
        },
        'coffee': {
            template: '<div>' + '<h2 class="mb-4 text-center"><span class="fs-inherit text-orange">橘色</span> 咖啡</h2>' + '<h5 class="mb-4"><span class="fs-inheri">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色咖啡</router-link>' + '</div>'
        },
        'spa': {
            template: '<div>' + '<h2 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 舒體</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色舒體</router-link>' + '</div>'
        }
    },
    methods: {
        bgAnimated: function bgAnimated(time) {
            var _this = this;

            this.bgTransition = true;
            setTimeout(function () {
                _this.bgTransition = false;
            }, parseInt(time));
            setTimeout(function () {
                _this.experience_index_old = _this.experience_index;
            }, parseInt(time) + 800);
        }
    }
});

/***/ }),

/***/ 252:
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
          _c("h1", { staticClass: "big_title" }, [
            _vm._v(_vm._s(_vm.experience[_vm.experience_index].title))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "experience-circle" }, [
            _c(
              "div",
              {
                staticClass: "circle-body position-relative",
                class: { active: _vm.bgTransition }
              },
              [
                _c("div", { staticClass: "circle-line -left" }),
                _vm._v(" "),
                _c("div", { staticClass: "circle-line -right" })
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
                    staticClass: "text-circle-option -left",
                    class: _vm.experience_index == 0 ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.experience_view = "ex"
                        _vm.experience_index = 0
                        _vm.bgAnimated(800)
                      }
                    }
                  },
                  [_vm._v("體驗")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-circle-option -top",
                    class: _vm.experience_index == 1 ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.experience_view = "pot"
                        _vm.experience_index = 1
                        _vm.bgAnimated(800)
                      }
                    }
                  },
                  [_vm._v("鍋物")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-circle-option -right",
                    class: _vm.experience_index == 2 ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.experience_view = "coffee"
                        _vm.experience_index = 2
                        _vm.bgAnimated(800)
                      }
                    }
                  },
                  [_vm._v("咖啡")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-circle-option -bottom",
                    class: _vm.experience_index == 3 ? "active" : "",
                    on: {
                      click: function($event) {
                        _vm.experience_view = "spa"
                        _vm.experience_index = 3
                        _vm.bgAnimated(800)
                      }
                    }
                  },
                  [_vm._v("舒體")]
                )
              ]
            )
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(254)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(256)
/* template */
var __vue_template__ = __webpack_require__(257)
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

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("7b45937c", content, false, {});
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

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n#app #block-brands .bg-transition {\n  width: 100%;\n  background-position-x: 0;\n  -webkit-transition: background-position-x .5s;\n  transition: background-position-x .5s;\n}\n#app #block-brands .bg-transition.-new {\n    background-position-x: -100vw;\n    opacity: 0;\n}\n#app #block-brands .bg-transition.-new.active {\n      background-position-x: 0;\n      opacity: 1;\n}\n#app #block-brands .container {\n  z-index: 2;\n}\n#app #block-brands .container .content-brands .info-brands {\n    width: 300px;\n    height: 300px;\n    background: rgba(242, 108, 35, 0.4);\n    border: 1px solid white;\n    padding: 0 40px;\n    font-size: 30px;\n}\n#app #block-brands .container .text-brands {\n    font-size: 30px;\n    letter-spacing: 20px;\n    line-height: 45px;\n    font-weight: lighter;\n}\n#app #block-brands .container .text-brands .text-orange {\n      letter-spacing: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 256:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            addTransition: false,
            brandIndex: 0,
            brandIndex_old: 0,
            brandBg: [{
                url: '/images/bg_brand_1.png',
                title: 'EXTENSION1 by 橘色',
                contact: '/',
                book: '/',
                text: '小鍋<span class="text-orange">新</span>時尚<br>不管多少人都能吃得精彩！'
            }, {
                url: '/images/bg_food_1.png',
                title: 'M One Cafe',
                contact: '/',
                book: '/',
                text: 'M<span class="text-orange">One</span>Cafe<br>不管多少人都能吃得精彩！'
            }]
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
            setTimeout(function () {}, parseInt(time) - 300);
        }
    }
});

/***/ }),

/***/ 257:
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
        class: { active: _vm.addTransition },
        style:
          "background-image: url(" + _vm.brandBg[_vm.brandIndex_old].url + ")"
      }),
      _vm._v(" "),
      _c("div", {
        staticClass: "bg-transition -new bg-black-cover",
        class: { active: _vm.addTransition },
        style: "background-image: url(" + _vm.brandBg[_vm.brandIndex].url + ")"
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container position-relative m-auto h-100 " }, [
        _c(
          "div",
          {
            staticClass:
              "row h-100 flex-column align-items-center justify-content-center"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "content-brands d-flex align-items-center justify-content-between w-100 mt-5 mb-5"
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "btn-orange",
                    on: {
                      click: function($event) {
                        _vm.brandIndex = 0
                        _vm.startAnimate("500")
                      }
                    }
                  },
                  [_vm._v("橘色涮涮屋")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "info-brands border-radius-100 d-flex flex-column justify-content-center text-left"
                  },
                  [
                    _c("p", { class: { fade: _vm.addTransition } }, [
                      _vm._v(_vm._s(_vm.brandBg[_vm.brandIndex].title))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "d-flex text-size-3",
                        class: { fade: _vm.addTransition }
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "brands-link",
                            attrs: { to: _vm.brandBg[_vm.brandIndex].contact }
                          },
                          [_vm._v("聯絡我們")]
                        ),
                        _vm._v(" "),
                        _c("span", [_vm._v("・")]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "brands-link",
                            attrs: { to: _vm.brandBg[_vm.brandIndex].book }
                          },
                          [_vm._v("線上訂位")]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "btn-orange",
                    on: {
                      click: function($event) {
                        _vm.brandIndex = 1
                        _vm.startAnimate("500")
                      }
                    }
                  },
                  [_vm._v("M One Cafe")]
                )
              ]
            ),
            _vm._v(" "),
            _c("p", {
              staticClass: "text-brands",
              class: { fade: _vm.addTransition },
              domProps: { innerHTML: _vm._s(_vm.brandBg[_vm.brandIndex].text) }
            })
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
    return _c("h3", { staticClass: "main-title text-uppercase" }, [
      _c("span", { staticClass: "fs-inherit text-orange" }, [_vm._v("橘色")]),
      _vm._v("版圖"),
      _c("br"),
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

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(261)
/* template */
var __vue_template__ = __webpack_require__(262)
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

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("125a11db", content, false, {});
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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n#block-news > div {\n  z-index: 3;\n  position: relative;\n}\n#block-news .news-list {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#block-news .news-list .block-list {\n    width: 20%;\n}\n#block-news .news-list .block-list.-center {\n      width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 261:
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
            newsItems: [{
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/'
            }],
            newsCategories: ['全部新訊', '橘色涮涮屋', 'Extension 1 by 橘色', 'M One Cafe', 'M One Spa', 'Sakura Spa'],
            newsIndex: 0,
            viewIndex: 0
        };
    },
    methods: {}
});

/***/ }),

/***/ 262:
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
            "news-list d-flex flex-column flex-wrap align-items-center",
          attrs: { name: "fade", tag: "div" }
        },
        _vm._l(_vm.viewIndex + 1, function(n, $groupIndex) {
          return _c(
            "div",
            {
              key: $groupIndex,
              staticClass: "news-list d-flex justify-content-between w-100"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "block-list -beside d-flex flex-column justify-content-between"
                },
                _vm._l(
                  _vm.newsItems.slice(_vm.viewIndex, _vm.viewIndex + 2),
                  function(item, $index) {
                    return _c(
                      "div",
                      { key: $index, staticClass: "news-item" },
                      [
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
                              { staticClass: "btn-border", attrs: { to: "/" } },
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
                  }
                )
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "block-list -center d-flex flex-column justify-content-between"
                },
                [
                  _c(
                    "div",
                    { staticClass: "news-item d-flex flex-column h-100 w-100" },
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
                            { staticClass: "btn-border", attrs: { to: "/" } },
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
                                _vm._s(_vm.newsItems[_vm.viewIndex + 2].date)
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
                        })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "block-list -beside d-flex flex-column justify-content-between"
                },
                _vm._l(
                  _vm.newsItems.slice(_vm.viewIndex + 3, _vm.viewIndex + 5),
                  function(item, $index) {
                    return _c(
                      "div",
                      { key: $index, staticClass: "news-item" },
                      [
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
                              { staticClass: "btn-border", attrs: { to: "/" } },
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

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(266)
/* template */
var __vue_template__ = __webpack_require__(267)
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

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("e8adc522", content, false, {});
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

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n#block-foods {\n  background-size: cover;\n  background-position: 0;\n}\n#block-foods.active .block-food-body .content-food.-left, #block-foods.active .block-food-body .content-food.-right {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n}\n#block-foods.active .block-food-body .bg-left .bg-inner {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n    background-position-y: center;\n}\n#block-foods .line-top:before {\n    content: \"\";\n    background: #f46f1b;\n    width: 60px;\n    height: 1px;\n    display: block;\n    margin-bottom: 20px;\n}\n#block-foods .block-food-body {\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n}\n#block-foods .block-food-body:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.6);\n}\n#block-foods .block-food-body .bg-left .bg-inner {\n      background-position: center;\n      background-size: cover;\n      background-position-y: 100vh;\n      -webkit-transition: all .5s;\n      transition: all .5s;\n}\n#block-foods .block-food-body .bg-left .bg-inner.active {\n        background-position-y: 100vh;\n        -webkit-transition: initial;\n        transition: initial;\n}\n#block-foods .block-food-body .content-food {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding: 0 100px;\n      overflow: hidden;\n      z-index: 2;\n}\n#block-foods .block-food-body .content-food .big_title {\n        font-size: 140px;\n        font-weight: 300;\n}\n#block-foods .block-food-body .content-food .more-food-info {\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n        border-radius: 100%;\n        background-position: center;\n        background-size: cover;\n        cursor: pointer;\n        margin-right: 25px;\n}\n#block-foods .block-food-body .content-food .more-food-info.active {\n          opacity: 0.8;\n          -webkit-box-shadow: 0 0 15px rgba(255, 255, 255, 0.21);\n                  box-shadow: 0 0 15px rgba(255, 255, 255, 0.21);\n          -webkit-transition: all .3s;\n          transition: all .3s;\n}\n#block-foods .block-food-body .content-food > div {\n        position: relative;\n        z-index: 2;\n}\n#block-foods .block-food-body .content-food.-left, #block-foods .block-food-body .content-food.-right {\n        -webkit-transition: all 1s;\n        transition: all 1s;\n        opacity: 0;\n}\n#block-foods .block-food-body .content-food.-left {\n        background: transparent;\n        -webkit-transform: translateY(100%);\n                transform: translateY(100%);\n        padding: 100px;\n}\n#block-foods .block-food-body .content-food.-left .line-top {\n          line-height: 25px;\n}\n#block-foods .block-food-body .content-food.-right {\n        background: white;\n        z-index: 2;\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n}\n#block-foods .block-food-body .content-food.-right:before, #block-foods .block-food-body .content-food.-right:after {\n          content: \"\";\n          position: absolute;\n          border-radius: 100%;\n}\n#block-foods .block-food-body .content-food.-right:before {\n          width: 850px;\n          height: 850px;\n          background: rgba(242, 108, 35, 0.1);\n          right: -540px;\n          bottom: -480px;\n}\n#block-foods .block-food-body .content-food.-right:after {\n          width: 100px;\n          height: 100px;\n          background: rgba(0, 0, 0, 0.22);\n          right: -70px;\n          bottom: 300px;\n}\n#block-foods .block-food-body .content-food.-right .food-info-inner {\n          height: 500px;\n          width: 500px;\n          background: #f26d23;\n          border-radius: 100%;\n          -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);\n                  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);\n          -webkit-transition: all .5s;\n          transition: all .5s;\n}\n#block-foods .block-food-body .content-food.-right .food-info-inner .text-food-info {\n            font-weight: 300;\n            letter-spacing: 2px;\n}\n#block-foods .block-food-body .content-food.-right .loader {\n          position: absolute;\n          width: 50vw;\n          height: 100vh;\n          stroke-linecap: round;\n          stroke-width: 5;\n          fill: none;\n          left: 0;\n}\n#block-foods .block-food-body .content-food.-right .loader .internal-circle {\n            stroke: #f26c23;\n            stroke-dasharray: 55%,10%,25%;\n            opacity: .4;\n            -webkit-transform-origin: 30% 55%;\n                    transform-origin: 30% 55%;\n}\n#block-foods .block-food-body .content-food.-right .loader.active .internal-circle {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg);\n            -webkit-transition: all .5s ease-in-out;\n            transition: all .5s ease-in-out;\n}\n", ""]);

// exports


/***/ }),

/***/ 266:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            bgTransition: false,
            addTransition: false,
            foodItems: [{
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '頂級食材1',
                url: '/images/bg_food_1.png',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }, {
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '頂級食材2',
                url: '/images/bg_brand_1.png',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }, {
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '頂級食材3',
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

/***/ 267:
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
              "content-food -left d-flex flex-column justify-content-between position-relative m-auto"
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
                        _vm.startAnimate("500")
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
              "content-food -right d-flex flex-column justify-content-center position-relative"
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
    return _c("h3", { staticClass: "main-title text-black text-uppercase" }, [
      _c("span", { staticClass: "fs-inherit text-orange" }, [_vm._v("橘色 ")]),
      _vm._v("價值"),
      _c("br"),
      _c("span", { staticClass: "sub-title" }, [_vm._v("about value")])
    ])
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

/***/ 268:
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
        _c("div", { staticClass: "d-flex" }, [
          _c(
            "div",
            { staticClass: "logo", class: _vm.sectionIndex != 0 ? "fade" : "" },
            [_c("img", { attrs: { src: "/images/index_logo.png" } })]
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
        ])
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
        _c(
          "full-page",
          { ref: "fullpage", attrs: { id: "fullpage", options: _vm.options } },
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
                staticClass: "section text-black position-relative text-center",
                attrs: { id: "block-news" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "container position-relative m-auto section-pd"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "row flex-column align-items-center justify-content-center flex-nowrap"
                      },
                      [
                        _c("h3", { staticClass: "main-title text-uppercase" }, [
                          _c(
                            "span",
                            { staticClass: "fs-inherit text-orange" },
                            [_vm._v("橘色")]
                          ),
                          _vm._v("新訊"),
                          _c("br"),
                          _c("span", { staticClass: "sub-title" }, [
                            _vm._v("events & news")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("block-news"),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn-load-more btn-orange  fat",
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
            ),
            _vm._v(" "),
            _c("block-footer")
          ],
          1
        )
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