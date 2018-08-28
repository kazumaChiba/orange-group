webpackJsonp([10],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(309)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(311)
/* template */
var __vue_template__ = __webpack_require__(332)
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(237)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(239)
/* template */
var __vue_template__ = __webpack_require__(240)
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
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

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#footer .container {\n  padding: 60px 0 20px 0;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n  margin-bottom: 60px;\n}\n#footer:before {\n  background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n  position: relative;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n    letter-spacing: 6px;\n    font-weight: 500;\n    font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n  font-size: 20px;\n}\n#footer .footer .footer-info {\n  margin-bottom: 100px;\n  line-height: 25px;\n  font-size: 14px;\n  font-weight: 100;\n}\n#footer .footer .footer-info p {\n    margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n    font-size: 18px;\n    font-weight: 100;\n    line-height: 30px;\n}\n#footer .footer.footer-join:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: calc(100% + 150px);\n  background: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n  top: -100px;\n}\n", ""]);

// exports


/***/ }),

/***/ 239:
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
        return {};
    }
});

/***/ }),

/***/ 240:
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
        _c("div", { staticClass: "footer-text-left" }, [
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
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "logo",
          attrs: { src: "/images/index_logo.png" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "footer-text-right align-self-baseline" }, [
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

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
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

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n#burger-menu {\n  width: 0px;\n  height: 25px;\n  text-align: center;\n  overflow: hidden;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  position: absolute;\n  right: 30px;\n  top: 48px;\n  z-index: 9999999;\n}\n#burger-menu:before {\n    content: \"|||\";\n    color: #f26c23;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    display: inline-block;\n    font-weight: bold;\n}\n#burger-menu:hover {\n    cursor: pointer;\n}\n#burger-menu.menu-close {\n    width: 25px;\n}\n#fp-nav.fp-right {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  visibility: hidden;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n  right: 0;\n  width: unset;\n}\n#fp-nav.fp-right.active {\n    visibility: visible;\n    opacity: 1;\n}\n#fp-nav.fp-right ul li {\n    width: 100%;\n    height: 25px;\n    margin: 5px 0;\n}\n#fp-nav.fp-right ul li:last-child {\n      display: none;\n}\n#fp-nav.fp-right ul li span {\n      display: none;\n}\n#fp-nav.fp-right ul li .fp-tooltip.fp-right {\n      color: #ccc;\n      opacity: 1;\n      width: auto;\n      font-size: 17px;\n      letter-spacing: 0px;\n      font-style: italic;\n      right: 0;\n      overflow: visible;\n      position: relative;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0 50px;\n      font-weight: 300;\n}\n#fp-nav.fp-right ul li:hover div, #fp-nav.fp-right ul li a.active + div {\n      cursor: pointer;\n      background: #f26c23;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      color: white !important;\n}\n#fp-nav.fp-right ul li a {\n      position: absolute;\n      top: 0;\n      left: 0;\n}\n#app .fp-scroller {\n  min-height: 100%;\n}\n#app .logo {\n  position: absolute;\n  height: 220px;\n}\n#app .main-title {\n  line-height: 35px;\n}\n#app .main-title .sub-title {\n    letter-spacing: 10px;\n    font-weight: 200;\n    font-size: 16px;\n    font-family: \"PingFang SC\",微軟正黑體;\n}\n", ""]);

// exports


/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_experience__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_block_brands__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_block_news__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_block_foods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_block_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullpage_js_vendors_scrolloverflow_js__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullpage_js_vendors_scrolloverflow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fullpage_js_vendors_scrolloverflow_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            textShadow: false,
            display_fullpage: false
        };
    },
    mounted: function mounted() {
        // setTimeout(()=>{
        this.display_fullpage = true;
        //},2000)
    },

    methods: {
        afterLoad: function afterLoad(originSection, activeSection) {
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

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(313)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(315)
/* template */
var __vue_template__ = __webpack_require__(316)
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

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(314);
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

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#block-experience {\n  background-size: cover;\n}\n#block-experience.active .bg-transition.bg-left .bg-inner, #block-experience.active .bg-transition.bg-right .bg-inner, #block-experience.active .bg-transition.active .bg-inner {\n    background-position-y: 0;\n}\n#block-experience .bg-transition.bg-left:before, #block-experience .bg-transition.bg-right:before {\n    position: absolute;\n    width: 50%;\n    height: 100vh;\n    background: black;\n    content: \"\";\n    left: 0;\n    opacity: 0.8;\n    top: calc(50% - 50vh);\n    z-index: 4;\n    content: \"\";\n    word-break: keep-all;\n}\n#block-experience .bg-transition.bg-right:before {\n    width: 100%;\n    opacity: 0.4;\n}\n#block-experience .bg-transition.bg-left .bg-inner, #block-experience .bg-transition.bg-right .bg-inner {\n    background-position-y: -100vh;\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n}\n#block-experience .bg-transition.bg-left .bg-inner.active, #block-experience .bg-transition.bg-right .bg-inner.active {\n      background-position-y: 0;\n      opacity: 1;\n}\n#block-experience .bg-transition.bg-right .bg-inner.active {\n    background-position-y: 100vh;\n    opacity: 0;\n}\n#block-experience .bg-transition.bg-left {\n    z-index: 3;\n}\n#block-experience .bg-transition.bg-left:before {\n      width: 100%;\n}\n#block-experience .bg-transition.bg-left .bg-inner {\n      left: 0;\n}\n#block-experience .bg-transition.bg-left .bg-inner.active {\n        background-position-y: -100vh;\n        opacity: 0;\n}\n#block-experience .bg-transition.bg-right {\n    z-index: 2;\n    right: 0;\n}\n#block-experience .bg-transition.bg-right .bg-inner {\n      right: 0;\n      background-position-y: 100vh;\n}\n#block-experience .fp-scroller {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#block-experience #content-experience {\n    z-index: 4;\n}\n#block-experience #content-experience .big_title {\n      font-size: 200px;\n      letter-spacing: 30px;\n      color: rgba(255, 255, 255, 0.2);\n      position: absolute;\n      left: 0;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 50%;\n      word-break: keep-all;\n      overflow: hidden;\n}\n#block-experience #content-experience .experience-inner {\n      width: 350px;\n      margin: 0 auto;\n      text-align: left;\n      font-weight: 300;\n}\n#block-experience #content-experience .experience-inner .experience-item {\n        -webkit-transition: opacity .5s;\n        transition: opacity .5s;\n}\n#block-experience #content-experience .experience-inner h5 {\n        letter-spacing: 4px;\n        font-weight: 300;\n}\n#block-experience #content-experience .experience-inner h5 span {\n          letter-spacing: 7px;\n          line-height: 25px;\n          font-size: 22px;\n}\n#block-experience #content-experience .experience-inner .left-line:before {\n        content: \"\";\n        display: inline-block;\n        width: 20px;\n        height: 5px;\n        background: #f26d23;\n        margin-right: 10px;\n        vertical-align: middle;\n}\n#block-experience #content-experience .experience-circle {\n      position: absolute;\n      top: calc(50% - 250px);\n      left: calc(50% - 250px);\n}\n#block-experience #content-experience .experience-circle .circle-option {\n        position: absolute;\n        width: 500px;\n        height: 500px;\n}\n#block-experience #content-experience .experience-circle .circle-body {\n        -webkit-transform: rotate(12deg);\n                transform: rotate(12deg);\n        width: 500px;\n        height: 500px;\n}\n#block-experience #content-experience .experience-circle .circle-body.active .circle-line.left:after {\n          -webkit-transform: rotate(320deg);\n                  transform: rotate(320deg);\n          -webkit-transition: all .8s;\n          transition: all .8s;\n          opacity: 1;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line {\n          position: absolute;\n          width: 50%;\n          height: 100%;\n          overflow: hidden;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line:before, #block-experience #content-experience .experience-circle .circle-body .circle-line.left:after {\n            content: \"\";\n            display: block;\n            width: 200%;\n            height: 100%;\n            border: 28px solid rgba(242, 109, 35, 0.8);\n            border-radius: 100%;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.left {\n            left: 0;\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.left:before, #block-experience #content-experience .experience-circle .circle-body .circle-line.left:after {\n              border-bottom-color: transparent;\n              border-left-color: transparent;\n              -webkit-transform: rotate(-40deg);\n                      transform: rotate(-40deg);\n              -webkit-clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%);\n                      clip-path: polygon(50% -18%, 100% 20%, 50% 100%, 0% 60%);\n}\n#block-experience #content-experience .experience-circle .circle-body .circle-line.right {\n            right: 0;\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg);\n}\n#block-experience #content-experience .experience-circle .circle-option {\n        -webkit-transition: all 2s;\n        transition: all 2s;\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n        top: 0;\n}\n#block-experience #content-experience .experience-circle .circle-option.active {\n          opacity: 0;\n          -webkit-transition: opacity .3s;\n          transition: opacity .3s;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option {\n          position: absolute;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option:hover {\n            cursor: pointer;\n            color: #f26d23;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.top {\n            top: -50px;\n            left: 50%;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.bottom {\n            bottom: -50px;\n            left: 50%;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.right {\n            top: 50%;\n            right: -50px;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.left {\n            top: 50%;\n            left: -50px;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option a {\n            word-break: keep-all;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.active {\n            opacity: 0;\n            -webkit-transition: opacity 1s;\n            transition: opacity 1s;\n            -webkit-transition-delay: .5s;\n                    transition-delay: .5s;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 {\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(0deg) !important;\n                    transform: rotate(0deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 {\n          -webkit-transform: rotate(-90deg);\n                  transform: rotate(-90deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(90deg) !important;\n                    transform: rotate(90deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 {\n          -webkit-transform: rotate(-180deg);\n                  transform: rotate(-180deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(180deg) !important;\n                    transform: rotate(180deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 {\n          -webkit-transform: rotate(-270deg);\n                  transform: rotate(-270deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 a {\n            -webkit-transition: all .3s;\n            transition: all .3s;\n            -webkit-transform: rotate(270deg) !important;\n                    transform: rotate(270deg) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 315:
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
                'url': '/images/bg_food_1.png',
                'title': '橘色舒體'
            }],
            experience_index: 0,
            experience_index_old: 0
        };
    },
    components: {
        'ex': {
            template: '<div>' + '<h2 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 體驗</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>' + '</div>'
        },
        'pot': {
            template: '<div>' + '<h2 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 鍋物</h2>' + '<h5 class="mb-4"><span class="fs-inherit">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>' + '</div>'
        },
        'coffee': {
            template: '<div>' + '<h3 class="mb-4"><span class="fs-inherit text-orange">橘色</span> 咖啡</h3>' + '<h5 class="mb-4"><span class="fs-inheri">獨一無二的橘色價值<br>創造獨一無二的體驗</span></h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色咖啡</router-link>' + '</div>'
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

/***/ 316:
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
                _c("div", { staticClass: "circle-line left" }),
                _vm._v(" "),
                _c("div", { staticClass: "circle-line right" })
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
                    staticClass: "text-circle-option top",
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
                    staticClass: "text-circle-option right",
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
                    staticClass: "text-circle-option bottom",
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

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(318)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(320)
/* template */
var __vue_template__ = __webpack_require__(321)
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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
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

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#app #block-brands .bg-transition {\n  width: 100%;\n  background-position-x: 0;\n  -webkit-transition: background-position-x .5s;\n  transition: background-position-x .5s;\n}\n#app #block-brands .bg-transition.-new {\n    background-position-x: -100vw;\n    opacity: 0;\n}\n#app #block-brands .bg-transition.-new.active {\n      background-position-x: 0;\n      opacity: 1;\n}\n#app #block-brands .container {\n  z-index: 2;\n}\n#app #block-brands .container .content-brands .info-brands {\n    width: 300px;\n    height: 300px;\n    background: rgba(242, 108, 35, 0.4);\n    border: 1px solid white;\n    padding: 0 40px;\n    font-size: 30px;\n}\n#app #block-brands .container .text-brands {\n    font-size: 30px;\n    letter-spacing: 20px;\n    line-height: 45px;\n    font-weight: lighter;\n}\n#app #block-brands .container .text-brands .text-orange {\n      letter-spacing: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 320:
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

/***/ 321:
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

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(325)
/* template */
var __vue_template__ = __webpack_require__(326)
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

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
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

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#block-news > div {\n  z-index: 3;\n  position: relative;\n}\n#block-news .news-list {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#block-news .news-list .block-list {\n    width: 20%;\n}\n#block-news .news-list .block-list.-center {\n      width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 325:
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

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "news-body w-100" }, [
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
      "div",
      { staticClass: "news-list d-flex justify-content-between w-100" },
      [
        _c(
          "div",
          {
            staticClass:
              "block-list beside d-flex flex-column justify-content-between"
          },
          _vm._l(
            _vm.newsItems.slice(_vm.viewIndex + 3, _vm.viewIndex + 5),
            function(item, $index) {
              return _c("div", { key: $index, staticClass: "news-item" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "news-head d-flex align-items-center justify-content-center position-relative",
                    style: "background-image: url(" + item.background + ")"
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
                    _c("span", { staticClass: "text-black text-size-1" }, [
                      _vm._v(_vm._s(item.date))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-orange text-size-1" }, [
                      _vm._v(_vm._s(item.category))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("a", {
                    staticClass: "news-title",
                    attrs: { href: item.link },
                    domProps: { innerHTML: _vm._s(item.title) }
                  })
                ])
              ])
            }
          )
        )
      ]
    )
  ])
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

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(330)
/* template */
var __vue_template__ = __webpack_require__(331)
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

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#block-foods {\n  background-size: cover;\n  background-position: 0;\n}\n#block-foods.active .block-food-body .content-food.left-content, #block-foods.active .block-food-body .content-food.right-content {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n}\n#block-foods.active .block-food-body .bg-left .bg-inner {\n    -webkit-transition-delay: .3s;\n            transition-delay: .3s;\n    background-position-y: center;\n}\n#block-foods .line-top:before {\n    content: \"\";\n    background: #f46f1b;\n    width: 60px;\n    height: 1px;\n    display: block;\n    margin-bottom: 20px;\n}\n#block-foods .block-food-body {\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 100vh;\n}\n#block-foods .block-food-body:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.6);\n}\n#block-foods .block-food-body .bg-left .bg-inner {\n      background-position: center;\n      background-size: cover;\n      background-position-y: 100vh;\n      -webkit-transition: all .5s;\n      transition: all .5s;\n}\n#block-foods .block-food-body .bg-left .bg-inner.active {\n        background-position-y: 100vh;\n        -webkit-transition: initial;\n        transition: initial;\n}\n#block-foods .block-food-body .content-food {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding: 0 100px;\n      overflow: hidden;\n      z-index: 2;\n}\n#block-foods .block-food-body .content-food .big_title {\n        font-size: 140px;\n        font-weight: 300;\n}\n#block-foods .block-food-body .content-food .more-food-info {\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n        border-radius: 100%;\n        background-position: center;\n        background-size: cover;\n        cursor: pointer;\n        margin-right: 25px;\n}\n#block-foods .block-food-body .content-food .more-food-info.active {\n          opacity: 0.8;\n          -webkit-box-shadow: 0 0 15px rgba(255, 255, 255, 0.21);\n                  box-shadow: 0 0 15px rgba(255, 255, 255, 0.21);\n          -webkit-transition: all .3s;\n          transition: all .3s;\n}\n#block-foods .block-food-body .content-food > div {\n        position: relative;\n        z-index: 2;\n}\n#block-foods .block-food-body .content-food.left-content, #block-foods .block-food-body .content-food.right-content {\n        -webkit-transition: opacity 1s, -webkit-transform 1s;\n        transition: opacity 1s, -webkit-transform 1s;\n        transition: transform 1s, opacity 1s;\n        transition: transform 1s, opacity 1s, -webkit-transform 1s;\n        opacity: 0;\n}\n#block-foods .block-food-body .content-food.left-content {\n        background: transparent;\n        padding: 100px;\n}\n#block-foods .block-food-body .content-food.left-content .line-top {\n          line-height: 25px;\n}\n#block-foods .block-food-body .content-food.right-content {\n        background: white;\n        z-index: 2;\n        -webkit-transform: translateY(-100%);\n                transform: translateY(-100%);\n}\n#block-foods .block-food-body .content-food.right-content:before, #block-foods .block-food-body .content-food.right-content:after {\n          content: \"\";\n          position: absolute;\n          border-radius: 100%;\n}\n#block-foods .block-food-body .content-food.right-content:before {\n          width: 850px;\n          height: 850px;\n          background: rgba(242, 108, 35, 0.1);\n          right: -540px;\n          bottom: -480px;\n}\n#block-foods .block-food-body .content-food.right-content:after {\n          width: 100px;\n          height: 100px;\n          background: rgba(0, 0, 0, 0.22);\n          right: -70px;\n          bottom: 300px;\n}\n#block-foods .block-food-body .content-food.right-content .food-info-inner {\n          height: 500px;\n          width: 500px;\n          background: #f26d23;\n          border-radius: 100%;\n          -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n          -webkit-transition: all .5s;\n          transition: all .5s;\n}\n#block-foods .block-food-body .content-food.right-content .food-info-inner .text-food-info {\n            font-weight: 300;\n            letter-spacing: 2px;\n}\n#block-foods .block-food-body .content-food.right-content .loader {\n          position: absolute;\n          width: 50vw;\n          height: 100vh;\n          stroke-linecap: round;\n          stroke-width: 5;\n          fill: none;\n          left: 0;\n}\n#block-foods .block-food-body .content-food.right-content .loader .internal-circle {\n            stroke: #f26c23;\n            stroke-dasharray: 55%,10%,25%;\n            opacity: .4;\n            -webkit-transform-origin: 30% 55%;\n                    transform-origin: 30% 55%;\n}\n#block-foods .block-food-body .content-food.right-content .loader.active .internal-circle {\n            -webkit-transform: rotate(180deg);\n                    transform: rotate(180deg);\n            -webkit-transition: all .5s ease-in-out;\n            transition: all .5s ease-in-out;\n}\n", ""]);

// exports


/***/ }),

/***/ 330:
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
                title: '頂級食材',
                url: '/images/bg_food_1.png',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }, {
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '頂級食材',
                url: '/images/bg_brand_1.png',
                content: '<p class="text-size-2 mb-2">橘色美食背後的秘密</p><h4 class="text-food-title mb-4">食材的<span class="text-black">秘密</span></h4><p class="text-food-info">測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字</p>'
            }, {
                subTitle: '頂級食材源自產地與挑選<br>只願意提供最美好的食材給每位客戶',
                title: '頂級食材',
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

/***/ 331:
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
              "content-food left-content d-flex flex-column justify-content-between position-relative m-auto"
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
              "content-food right-content d-flex flex-column justify-content-center position-relative"
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

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "block-main" } }, [
    _c(
      "div",
      {
        staticClass: "position-fixed",
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
              staticClass: "d-flex justify-content-end align-items-start",
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
                                _vm._v("新訊"),
                                _c("br"),
                                _c("span", { staticClass: "sub-title" }, [
                                  _vm._v("events & news")
                                ])
                              ]
                            ),
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
                                  "\n                            更多橘色新訊\n                        "
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

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
* Customized version of iScroll.js 0.0.9
* It fixes bugs affecting its integration with fullpage.js
* @license
*/
/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
var rAF = window.requestAnimationFrame  ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    function (callback) { window.setTimeout(callback, 1000 / 60); };

var utils = (function () {
    var me = {};

    var _elementStyle = document.createElement('div').style;
    var _vendor = (function () {
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;

        for ( ; i < l; i++ ) {
            transform = vendors[i] + 'ransform';
            if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
        }

        return false;
    })();

    function _prefixStyle (style) {
        if ( _vendor === false ) return false;
        if ( _vendor === '' ) return style;
        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }

    me.getTime = Date.now || function getTime () { return new Date().getTime(); };

    me.extend = function (target, obj) {
        for ( var i in obj ) {
            target[i] = obj[i];
        }
    };

    me.addEvent = function (el, type, fn, capture) {
        el.addEventListener(type, fn, !!capture);
    };

    me.removeEvent = function (el, type, fn, capture) {
        el.removeEventListener(type, fn, !!capture);
    };

    me.prefixPointerEvent = function (pointerEvent) {
        return window.MSPointerEvent ?
            'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
            pointerEvent;
    };

    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
        var distance = current - start,
            speed = Math.abs(distance) / time,
            destination,
            duration;

        deceleration = deceleration === undefined ? 0.0006 : deceleration;

        destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
        duration = speed / deceleration;

        if ( destination < lowerMargin ) {
            destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
            distance = Math.abs(destination - current);
            duration = distance / speed;
        } else if ( destination > 0 ) {
            destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
            distance = Math.abs(current) + destination;
            duration = distance / speed;
        }

        return {
            destination: Math.round(destination),
            duration: duration
        };
    };

    var _transform = _prefixStyle('transform');

    me.extend(me, {
        hasTransform: _transform !== false,
        hasPerspective: _prefixStyle('perspective') in _elementStyle,
        hasTouch: 'ontouchstart' in window,
        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
        hasTransition: _prefixStyle('transition') in _elementStyle
    });

    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S3 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S4 is badAndroid (stock brower, webview)
     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
   - galaxy S5 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
   - galaxy S6 is OK
     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
  */
    me.isBadAndroid = (function() {
        var appVersion = window.navigator.appVersion;
        // Android browser is not a chrome browser.
        if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
            if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
                return parseFloat(safariVersion[1]) < 535.19;
            } else {
                return true;
            }
        } else {
            return false;
        }
    })();

    me.extend(me.style = {}, {
        transform: _transform,
        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
        transitionDuration: _prefixStyle('transitionDuration'),
        transitionDelay: _prefixStyle('transitionDelay'),
        transformOrigin: _prefixStyle('transformOrigin')
    });

    me.hasClass = function (e, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
        return re.test(e.className);
    };

    me.addClass = function (e, c) {
        if ( me.hasClass(e, c) ) {
            return;
        }

        var newclass = e.className.split(' ');
        newclass.push(c);
        e.className = newclass.join(' ');
    };

    me.removeClass = function (e, c) {
        if ( !me.hasClass(e, c) ) {
            return;
        }

        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
        e.className = e.className.replace(re, ' ');
    };

    me.offset = function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;

        // jshint -W084
        while (el = el.offsetParent) {
            left -= el.offsetLeft;
            top -= el.offsetTop;
        }
        // jshint +W084

        return {
            left: left,
            top: top
        };
    };

    me.preventDefaultException = function (el, exceptions) {
        for ( var i in exceptions ) {
            if ( exceptions[i].test(el[i]) ) {
                return true;
            }
        }

        return false;
    };

    me.extend(me.eventType = {}, {
        touchstart: 1,
        touchmove: 1,
        touchend: 1,

        mousedown: 2,
        mousemove: 2,
        mouseup: 2,

        pointerdown: 3,
        pointermove: 3,
        pointerup: 3,

        MSPointerDown: 3,
        MSPointerMove: 3,
        MSPointerUp: 3
    });

    me.extend(me.ease = {}, {
        quadratic: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (k) {
                return k * ( 2 - k );
            }
        },
        circular: {
            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',   // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
            fn: function (k) {
                return Math.sqrt( 1 - ( --k * k ) );
            }
        },
        back: {
            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fn: function (k) {
                var b = 4;
                return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
            }
        },
        bounce: {
            style: '',
            fn: function (k) {
                if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
                    return 7.5625 * k * k;
                } else if ( k < ( 2 / 2.75 ) ) {
                    return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
                } else if ( k < ( 2.5 / 2.75 ) ) {
                    return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
                } else {
                    return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
                }
            }
        },
        elastic: {
            style: '',
            fn: function (k) {
                var f = 0.22,
                    e = 0.4;

                if ( k === 0 ) { return 0; }
                if ( k == 1 ) { return 1; }

                return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
            }
        }
    });

    me.tap = function (e, eventName) {
        var ev = document.createEvent('Event');
        ev.initEvent(eventName, true, true);
        ev.pageX = e.pageX;
        ev.pageY = e.pageY;
        e.target.dispatchEvent(ev);
    };

    me.click = function (e) {
        var target = e.target,
            ev;

        if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
            // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
            // initMouseEvent is deprecated.
            ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
            ev.initEvent('click', true, true);
            ev.view = e.view || window;
            ev.detail = 1;
            ev.screenX = target.screenX || 0;
            ev.screenY = target.screenY || 0;
            ev.clientX = target.clientX || 0;
            ev.clientY = target.clientY || 0;
            ev.ctrlKey = !!e.ctrlKey;
            ev.altKey = !!e.altKey;
            ev.shiftKey = !!e.shiftKey;
            ev.metaKey = !!e.metaKey;
            ev.button = 0;
            ev.relatedTarget = null;
            ev._constructed = true;
            target.dispatchEvent(ev);
        }
    };

    return me;
})();
function IScroll (el, options) {
    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style;       // cache style for better performance

    this.options = {

        resizeScrollbars: true,

        mouseWheelSpeed: 20,

        snapThreshold: 0.334,

// INSERT POINT: OPTIONS
        disablePointer : !utils.hasPointer,
        disableTouch : utils.hasPointer || !utils.hasTouch,
        disableMouse : utils.hasPointer || utils.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: true,
        directionLockThreshold: 5,
        momentum: true,

        bounce: true,
        bounceTime: 600,
        bounceEasing: '',

        preventDefault: true,
        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/ },

        HWCompositing: true,
        useTransition: true,
        useTransform: true,
        bindToWrapper: typeof window.onmousedown === "undefined"
    };

    for ( var i in options ) {
        this.options[i] = options[i];
    }

    // Normalize options
    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;

    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

    if ( this.options.tap === true ) {
        this.options.tap = 'tap';
    }

    // https://github.com/cubiq/iscroll/issues/1029
    if (!this.options.useTransition && !this.options.useTransform) {
        if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
            this.scrollerStyle.position = "relative";
        }
    }

    if ( this.options.shrinkScrollbars == 'scale' ) {
        this.options.useTransition = false;
    }

    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

// INSERT POINT: NORMALIZATION

    // Some defaults
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {};

// INSERT POINT: DEFAULTS

    this._init();
    this.refresh();

    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
}

IScroll.prototype = {
    version: '5.2.0',

    _init: function () {
        this._initEvents();

        if ( this.options.scrollbars || this.options.indicators ) {
            this._initIndicators();
        }

        if ( this.options.mouseWheel ) {
            this._initWheel();
        }

        if ( this.options.snap ) {
            this._initSnap();
        }

        if ( this.options.keyBindings ) {
            this._initKeys();
        }

// INSERT POINT: _init

    },

    destroy: function () {
        this._initEvents(true);
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = null;
        this._execEvent('destroy');
    },

    _transitionEnd: function (e) {
        if ( e.target != this.scroller || !this.isInTransition ) {
            return;
        }

        this._transitionTime();
        if ( !this.resetPosition(this.options.bounceTime) ) {
            this.isInTransition = false;
            this._execEvent('scrollEnd');
        }
    },

    _start: function (e) {
        // React to left mouse button only
        if ( utils.eventType[e.type] != 1 ) {
          // for button property
          // http://unixpapa.com/js/mouse.html
          var button;
        if (!e.which) {
          /* IE case */
          button = (e.button < 2) ? 0 :
                   ((e.button == 4) ? 1 : 2);
        } else {
          /* All others */
          button = e.button;
        }
            if ( button !== 0 ) {
                return;
            }
        }

        if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
            return;
        }

        if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
            e.preventDefault();
        }

        var point = e.touches ? e.touches[0] : e,
            pos;

        this.initiated  = utils.eventType[e.type];
        this.moved      = false;
        this.distX      = 0;
        this.distY      = 0;
        this.directionX = 0;
        this.directionY = 0;
        this.directionLocked = 0;

        this.startTime = utils.getTime();

        if ( this.options.useTransition && this.isInTransition ) {
            this._transitionTime();
            this.isInTransition = false;
            pos = this.getComputedPosition();
            this._translate(Math.round(pos.x), Math.round(pos.y));
            this._execEvent('scrollEnd');
        } else if ( !this.options.useTransition && this.isAnimating ) {
            this.isAnimating = false;
            this._execEvent('scrollEnd');
        }

        this.startX    = this.x;
        this.startY    = this.y;
        this.absStartX = this.x;
        this.absStartY = this.y;
        this.pointX    = point.pageX;
        this.pointY    = point.pageY;

        this._execEvent('beforeScrollStart');
    },

    _move: function (e) {
        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
            return;
        }

        if ( this.options.preventDefault ) {    // increases performance on Android? TODO: check!
            e.preventDefault();
        }

        var point       = e.touches ? e.touches[0] : e,
            deltaX      = point.pageX - this.pointX,
            deltaY      = point.pageY - this.pointY,
            timestamp   = utils.getTime(),
            newX, newY,
            absDistX, absDistY;

        this.pointX     = point.pageX;
        this.pointY     = point.pageY;

        this.distX      += deltaX;
        this.distY      += deltaY;
        absDistX        = Math.abs(this.distX);
        absDistY        = Math.abs(this.distY);

        // We need to move at least 10 pixels for the scrolling to initiate
        if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
            return;
        }

        // If you are scrolling in one direction lock the other
        if ( !this.directionLocked && !this.options.freeScroll ) {
            if ( absDistX > absDistY + this.options.directionLockThreshold ) {
                this.directionLocked = 'h';     // lock horizontally
            } else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
                this.directionLocked = 'v';     // lock vertically
            } else {
                this.directionLocked = 'n';     // no lock
            }
        }

        if ( this.directionLocked == 'h' ) {
            if ( this.options.eventPassthrough == 'vertical' ) {
                e.preventDefault();
            } else if ( this.options.eventPassthrough == 'horizontal' ) {
                this.initiated = false;
                return;
            }

            deltaY = 0;
        } else if ( this.directionLocked == 'v' ) {
            if ( this.options.eventPassthrough == 'horizontal' ) {
                e.preventDefault();
            } else if ( this.options.eventPassthrough == 'vertical' ) {
                this.initiated = false;
                return;
            }

            deltaX = 0;
        }

        deltaX = this.hasHorizontalScroll ? deltaX : 0;
        deltaY = this.hasVerticalScroll ? deltaY : 0;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        // Slow down if outside of the boundaries
        if ( newX > 0 || newX < this.maxScrollX ) {
            newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
        }
        if ( newY > 0 || newY < this.maxScrollY ) {
            newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
        }

        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

        if ( !this.moved ) {
            this._execEvent('scrollStart');
        }

        this.moved = true;

        this._translate(newX, newY);

/* REPLACE START: _move */

        if ( timestamp - this.startTime > 300 ) {
            this.startTime = timestamp;
            this.startX = this.x;
            this.startY = this.y;
        }

/* REPLACE END: _move */

    },

    _end: function (e) {
        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
            return;
        }

        if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
            e.preventDefault();
        }

        var point = e.changedTouches ? e.changedTouches[0] : e,
            momentumX,
            momentumY,
            duration = utils.getTime() - this.startTime,
            newX = Math.round(this.x),
            newY = Math.round(this.y),
            distanceX = Math.abs(newX - this.startX),
            distanceY = Math.abs(newY - this.startY),
            time = 0,
            easing = '';

        this.isInTransition = 0;
        this.initiated = 0;
        this.endTime = utils.getTime();

        // reset if we are outside of the boundaries
        if ( this.resetPosition(this.options.bounceTime) ) {
            return;
        }

        this.scrollTo(newX, newY);  // ensures that the last position is rounded

        // we scrolled less than 10 pixels
        if ( !this.moved ) {
            if ( this.options.tap ) {
                utils.tap(e, this.options.tap);
            }

            if ( this.options.click ) {
                utils.click(e);
            }

            this._execEvent('scrollCancel');
            return;
        }

        if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
            this._execEvent('flick');
            return;
        }

        // start momentum animation if needed
        if ( this.options.momentum && duration < 300 ) {
            momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
            momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
            newX = momentumX.destination;
            newY = momentumY.destination;
            time = Math.max(momentumX.duration, momentumY.duration);
            this.isInTransition = 1;
        }


        if ( this.options.snap ) {
            var snap = this._nearestSnap(newX, newY);
            this.currentPage = snap;
            time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(newX - snap.x), 1000),
                        Math.min(Math.abs(newY - snap.y), 1000)
                    ), 300);
            newX = snap.x;
            newY = snap.y;

            this.directionX = 0;
            this.directionY = 0;
            easing = this.options.bounceEasing;
        }

// INSERT POINT: _end

        if ( newX != this.x || newY != this.y ) {
            // change easing function when scroller goes out of the boundaries
            if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
                easing = utils.ease.quadratic;
            }

            this.scrollTo(newX, newY, time, easing);
            return;
        }

        this._execEvent('scrollEnd');
    },

    _resize: function () {
        var that = this;

        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(function () {
            that.refresh();
        }, this.options.resizePolling);
    },

    resetPosition: function (time) {
        var x = this.x,
            y = this.y;

        time = time || 0;

        if ( !this.hasHorizontalScroll || this.x > 0 ) {
            x = 0;
        } else if ( this.x < this.maxScrollX ) {
            x = this.maxScrollX;
        }

        if ( !this.hasVerticalScroll || this.y > 0 ) {
            y = 0;
        } else if ( this.y < this.maxScrollY ) {
            y = this.maxScrollY;
        }

        if ( x == this.x && y == this.y ) {
            return false;
        }

        this.scrollTo(x, y, time, this.options.bounceEasing);

        return true;
    },

    disable: function () {
        this.enabled = false;
    },

    enable: function () {
        this.enabled = true;
    },

    refresh: function () {
        var rf = this.wrapper.offsetHeight;     // Force reflow

        this.wrapperWidth   = this.wrapper.clientWidth;
        this.wrapperHeight  = this.wrapper.clientHeight;

/* REPLACE START: refresh */

        this.scrollerWidth  = this.scroller.offsetWidth;
        this.scrollerHeight = this.scroller.offsetHeight;

        this.maxScrollX     = this.wrapperWidth - this.scrollerWidth;
        this.maxScrollY     = this.wrapperHeight - this.scrollerHeight;

/* REPLACE END: refresh */

        this.hasHorizontalScroll    = this.options.scrollX && this.maxScrollX < 0;
        this.hasVerticalScroll      = this.options.scrollY && this.maxScrollY < 0;

        if ( !this.hasHorizontalScroll ) {
            this.maxScrollX = 0;
            this.scrollerWidth = this.wrapperWidth;
        }

        if ( !this.hasVerticalScroll ) {
            this.maxScrollY = 0;
            this.scrollerHeight = this.wrapperHeight;
        }

        this.endTime = 0;
        this.directionX = 0;
        this.directionY = 0;

        this.wrapperOffset = utils.offset(this.wrapper);

        this._execEvent('refresh');

        this.resetPosition();

// INSERT POINT: _refresh

    },

    on: function (type, fn) {
        if ( !this._events[type] ) {
            this._events[type] = [];
        }

        this._events[type].push(fn);
    },

    off: function (type, fn) {
        if ( !this._events[type] ) {
            return;
        }

        var index = this._events[type].indexOf(fn);

        if ( index > -1 ) {
            this._events[type].splice(index, 1);
        }
    },

    _execEvent: function (type) {
        if ( !this._events[type] ) {
            return;
        }

        var i = 0,
            l = this._events[type].length;

        if ( !l ) {
            return;
        }

        for ( ; i < l; i++ ) {
            this._events[type][i].apply(this, [].slice.call(arguments, 1));
        }
    },

    scrollBy: function (x, y, time, easing) {
        x = this.x + x;
        y = this.y + y;
        time = time || 0;

        this.scrollTo(x, y, time, easing);
    },

    scrollTo: function (x, y, time, easing) {
        easing = easing || utils.ease.circular;

        this.isInTransition = this.options.useTransition && time > 0;
        var transitionType = this.options.useTransition && easing.style;
        if ( !time || transitionType ) {
                if(transitionType) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                }
            this._translate(x, y);
        } else {
            this._animate(x, y, time, easing.fn);
        }
    },

    scrollToElement: function (el, time, offsetX, offsetY, easing) {
        el = el.nodeType ? el : this.scroller.querySelector(el);

        if ( !el ) {
            return;
        }

        var pos = utils.offset(el);

        pos.left -= this.wrapperOffset.left;
        pos.top  -= this.wrapperOffset.top;

        // if offsetX/Y are true we center the element to the screen
        if ( offsetX === true ) {
            offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
        }
        if ( offsetY === true ) {
            offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
        }

        pos.left -= offsetX || 0;
        pos.top  -= offsetY || 0;

        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
        pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

        this.scrollTo(pos.left, pos.top, time, easing);
    },

    _transitionTime: function (time) {
        if (!this.options.useTransition) {
            return;
        }
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }

        this.scrollerStyle[durationProp] = time + 'ms';

        if ( !time && utils.isBadAndroid ) {
            this.scrollerStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            var self = this;
            rAF(function() {
                if(self.scrollerStyle[durationProp] === '0.0001ms') {
                    self.scrollerStyle[durationProp] = '0s';
                }
            });
        }


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].transitionTime(time);
            }
        }


// INSERT POINT: _transitionTime

    },

    _transitionTimingFunction: function (easing) {
        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;


        if ( this.indicators ) {
            for ( var i = this.indicators.length; i--; ) {
                this.indicators[i].transitionTimingFunction(easing);
            }
        }


// INSERT POINT: _transitionTimingFunction

    },

    _translate: function (x, y) {
        if ( this.options.useTransform ) {

/* REPLACE START: _translate */

            this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

/* REPLACE END: _translate */

        } else {
            x = Math.round(x);
            y = Math.round(y);
            this.scrollerStyle.left = x + 'px';
            this.scrollerStyle.top = y + 'px';
        }

        this.x = x;
        this.y = y;


    if ( this.indicators ) {
        for ( var i = this.indicators.length; i--; ) {
            this.indicators[i].updatePosition();
        }
    }


// INSERT POINT: _translate

    },

    _initEvents: function (remove) {
        var eventType = remove ? utils.removeEvent : utils.addEvent,
            target = this.options.bindToWrapper ? this.wrapper : window;

        eventType(window, 'orientationchange', this);
        eventType(window, 'resize', this);

        if ( this.options.click ) {
            eventType(this.wrapper, 'click', this, true);
        }

        if ( !this.options.disableMouse ) {
            eventType(this.wrapper, 'mousedown', this);
            eventType(target, 'mousemove', this);
            eventType(target, 'mousecancel', this);
            eventType(target, 'mouseup', this);
        }

        if ( utils.hasPointer && !this.options.disablePointer ) {
            eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
            eventType(target, utils.prefixPointerEvent('pointermove'), this);
            eventType(target, utils.prefixPointerEvent('pointercancel'), this);
            eventType(target, utils.prefixPointerEvent('pointerup'), this);
        }

        if ( utils.hasTouch && !this.options.disableTouch ) {
            eventType(this.wrapper, 'touchstart', this);
            eventType(target, 'touchmove', this);
            eventType(target, 'touchcancel', this);
            eventType(target, 'touchend', this);
        }

        eventType(this.scroller, 'transitionend', this);
        eventType(this.scroller, 'webkitTransitionEnd', this);
        eventType(this.scroller, 'oTransitionEnd', this);
        eventType(this.scroller, 'MSTransitionEnd', this);
    },

    getComputedPosition: function () {
        var matrix = window.getComputedStyle(this.scroller, null),
            x, y;

        if ( this.options.useTransform ) {
            matrix = matrix[utils.style.transform].split(')')[0].split(', ');
            x = +(matrix[12] || matrix[4]);
            y = +(matrix[13] || matrix[5]);
        } else {
            x = +matrix.left.replace(/[^-\d.]/g, '');
            y = +matrix.top.replace(/[^-\d.]/g, '');
        }

        return { x: x, y: y };
    },
    _initIndicators: function () {
        var interactive = this.options.interactiveScrollbars,
            customStyle = typeof this.options.scrollbars != 'string',
            indicators = [],
            indicator;

        var that = this;

        this.indicators = [];

        if ( this.options.scrollbars ) {
            // Vertical scrollbar
            if ( this.options.scrollY ) {
                indicator = {
                    el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                    interactive: interactive,
                    defaultScrollbars: true,
                    customStyle: customStyle,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }

            // Horizontal scrollbar
            if ( this.options.scrollX ) {
                indicator = {
                    el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                    interactive: interactive,
                    defaultScrollbars: true,
                    customStyle: customStyle,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: false
                };

                this.wrapper.appendChild(indicator.el);
                indicators.push(indicator);
            }
        }

        if ( this.options.indicators ) {
            // TODO: check concat compatibility
            indicators = indicators.concat(this.options.indicators);
        }

        for ( var i = indicators.length; i--; ) {
            this.indicators.push( new Indicator(this, indicators[i]) );
        }

        // TODO: check if we can use array.map (wide compatibility and performance issues)
        function _indicatorsMap (fn) {
            if (that.indicators) {
                for ( var i = that.indicators.length; i--; ) {
                    fn.call(that.indicators[i]);
                }
            }
        }

        if ( this.options.fadeScrollbars ) {
            this.on('scrollEnd', function () {
                _indicatorsMap(function () {
                    this.fade();
                });
            });

            this.on('scrollCancel', function () {
                _indicatorsMap(function () {
                    this.fade();
                });
            });

            this.on('scrollStart', function () {
                _indicatorsMap(function () {
                    this.fade(1);
                });
            });

            this.on('beforeScrollStart', function () {
                _indicatorsMap(function () {
                    this.fade(1, true);
                });
            });
        }


        this.on('refresh', function () {
            _indicatorsMap(function () {
                this.refresh();
            });
        });

        this.on('destroy', function () {
            _indicatorsMap(function () {
                this.destroy();
            });

            delete this.indicators;
        });
    },

    _initWheel: function () {
        utils.addEvent(this.wrapper, 'wheel', this);
        utils.addEvent(this.wrapper, 'mousewheel', this);
        utils.addEvent(this.wrapper, 'DOMMouseScroll', this);

        this.on('destroy', function () {
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = null;
            utils.removeEvent(this.wrapper, 'wheel', this);
            utils.removeEvent(this.wrapper, 'mousewheel', this);
            utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
        });
    },

    _wheel: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var wheelDeltaX, wheelDeltaY,
            newX, newY,
            that = this;

        if ( this.wheelTimeout === undefined ) {
            that._execEvent('scrollStart');
        }

        // Execute the scrollEnd event after 400ms the wheel stopped scrolling
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = setTimeout(function () {
            if(!that.options.snap) {
                that._execEvent('scrollEnd');
            }
            that.wheelTimeout = undefined;
        }, 400);

        if ( 'deltaX' in e ) {
            if (e.deltaMode === 1) {
                wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
            } else {
                wheelDeltaX = -e.deltaX;
                wheelDeltaY = -e.deltaY;
            }
        } else if ( 'wheelDeltaX' in e ) {
            wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
            wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
        } else if ( 'wheelDelta' in e ) {
            wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
        } else if ( 'detail' in e ) {
            wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
        } else {
            return;
        }

        wheelDeltaX *= this.options.invertWheelDirection;
        wheelDeltaY *= this.options.invertWheelDirection;

        if ( !this.hasVerticalScroll ) {
            wheelDeltaX = wheelDeltaY;
            wheelDeltaY = 0;
        }

        if ( this.options.snap ) {
            newX = this.currentPage.pageX;
            newY = this.currentPage.pageY;

            if ( wheelDeltaX > 0 ) {
                newX--;
            } else if ( wheelDeltaX < 0 ) {
                newX++;
            }

            if ( wheelDeltaY > 0 ) {
                newY--;
            } else if ( wheelDeltaY < 0 ) {
                newY++;
            }

            this.goToPage(newX, newY);

            return;
        }

        newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
        newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

        this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
        this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

        if ( newX > 0 ) {
            newX = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
        }

        if ( newY > 0 ) {
            newY = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
        }

        this.scrollTo(newX, newY, 0);

// INSERT POINT: _wheel
    },

    _initSnap: function () {
        this.currentPage = {};

        if ( typeof this.options.snap == 'string' ) {
            this.options.snap = this.scroller.querySelectorAll(this.options.snap);
        }

        this.on('refresh', function () {
            var i = 0, l,
                m = 0, n,
                cx, cy,
                x = 0, y,
                stepX = this.options.snapStepX || this.wrapperWidth,
                stepY = this.options.snapStepY || this.wrapperHeight,
                el;

            this.pages = [];

            if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
                return;
            }

            if ( this.options.snap === true ) {
                cx = Math.round( stepX / 2 );
                cy = Math.round( stepY / 2 );

                while ( x > -this.scrollerWidth ) {
                    this.pages[i] = [];
                    l = 0;
                    y = 0;

                    while ( y > -this.scrollerHeight ) {
                        this.pages[i][l] = {
                            x: Math.max(x, this.maxScrollX),
                            y: Math.max(y, this.maxScrollY),
                            width: stepX,
                            height: stepY,
                            cx: x - cx,
                            cy: y - cy
                        };

                        y -= stepY;
                        l++;
                    }

                    x -= stepX;
                    i++;
                }
            } else {
                el = this.options.snap;
                l = el.length;
                n = -1;

                for ( ; i < l; i++ ) {
                    if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
                        m = 0;
                        n++;
                    }

                    if ( !this.pages[m] ) {
                        this.pages[m] = [];
                    }

                    x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                    y = Math.max(-el[i].offsetTop, this.maxScrollY);
                    cx = x - Math.round(el[i].offsetWidth / 2);
                    cy = y - Math.round(el[i].offsetHeight / 2);

                    this.pages[m][n] = {
                        x: x,
                        y: y,
                        width: el[i].offsetWidth,
                        height: el[i].offsetHeight,
                        cx: cx,
                        cy: cy
                    };

                    if ( x > this.maxScrollX ) {
                        m++;
                    }
                }
            }

            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);

            // Update snap threshold if needed
            if ( this.options.snapThreshold % 1 === 0 ) {
                this.snapThresholdX = this.options.snapThreshold;
                this.snapThresholdY = this.options.snapThreshold;
            } else {
                this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
            }
        });

        this.on('flick', function () {
            var time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(this.x - this.startX), 1000),
                        Math.min(Math.abs(this.y - this.startY), 1000)
                    ), 300);

            this.goToPage(
                this.currentPage.pageX + this.directionX,
                this.currentPage.pageY + this.directionY,
                time
            );
        });
    },

    _nearestSnap: function (x, y) {
        if ( !this.pages.length ) {
            return { x: 0, y: 0, pageX: 0, pageY: 0 };
        }

        var i = 0,
            l = this.pages.length,
            m = 0;

        // Check if we exceeded the snap threshold
        if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
            Math.abs(y - this.absStartY) < this.snapThresholdY ) {
            return this.currentPage;
        }

        if ( x > 0 ) {
            x = 0;
        } else if ( x < this.maxScrollX ) {
            x = this.maxScrollX;
        }

        if ( y > 0 ) {
            y = 0;
        } else if ( y < this.maxScrollY ) {
            y = this.maxScrollY;
        }

        for ( ; i < l; i++ ) {
            if ( x >= this.pages[i][0].cx ) {
                x = this.pages[i][0].x;
                break;
            }
        }

        l = this.pages[i].length;

        for ( ; m < l; m++ ) {
            if ( y >= this.pages[0][m].cy ) {
                y = this.pages[0][m].y;
                break;
            }
        }

        if ( i == this.currentPage.pageX ) {
            i += this.directionX;

            if ( i < 0 ) {
                i = 0;
            } else if ( i >= this.pages.length ) {
                i = this.pages.length - 1;
            }

            x = this.pages[i][0].x;
        }

        if ( m == this.currentPage.pageY ) {
            m += this.directionY;

            if ( m < 0 ) {
                m = 0;
            } else if ( m >= this.pages[0].length ) {
                m = this.pages[0].length - 1;
            }

            y = this.pages[0][m].y;
        }

        return {
            x: x,
            y: y,
            pageX: i,
            pageY: m
        };
    },

    goToPage: function (x, y, time, easing) {
        easing = easing || this.options.bounceEasing;

        if ( x >= this.pages.length ) {
            x = this.pages.length - 1;
        } else if ( x < 0 ) {
            x = 0;
        }

        if ( y >= this.pages[x].length ) {
            y = this.pages[x].length - 1;
        } else if ( y < 0 ) {
            y = 0;
        }

        var posX = this.pages[x][y].x,
            posY = this.pages[x][y].y;

        time = time === undefined ? this.options.snapSpeed || Math.max(
            Math.max(
                Math.min(Math.abs(posX - this.x), 1000),
                Math.min(Math.abs(posY - this.y), 1000)
            ), 300) : time;

        this.currentPage = {
            x: posX,
            y: posY,
            pageX: x,
            pageY: y
        };

        this.scrollTo(posX, posY, time, easing);
    },

    next: function (time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x++;

        if ( x >= this.pages.length && this.hasVerticalScroll ) {
            x = 0;
            y++;
        }

        this.goToPage(x, y, time, easing);
    },

    prev: function (time, easing) {
        var x = this.currentPage.pageX,
            y = this.currentPage.pageY;

        x--;

        if ( x < 0 && this.hasVerticalScroll ) {
            x = 0;
            y--;
        }

        this.goToPage(x, y, time, easing);
    },

    _initKeys: function (e) {
        // default key bindings
        var keys = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        var i;

        // if you give me characters I give you keycode
        if ( typeof this.options.keyBindings == 'object' ) {
            for ( i in this.options.keyBindings ) {
                if ( typeof this.options.keyBindings[i] == 'string' ) {
                    this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                }
            }
        } else {
            this.options.keyBindings = {};
        }

        for ( i in keys ) {
            this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
        }

        utils.addEvent(window, 'keydown', this);

        this.on('destroy', function () {
            utils.removeEvent(window, 'keydown', this);
        });
    },

    _key: function (e) {
        if ( !this.enabled ) {
            return;
        }

        var snap = this.options.snap,   // we are using this alot, better to cache it
            newX = snap ? this.currentPage.pageX : this.x,
            newY = snap ? this.currentPage.pageY : this.y,
            now = utils.getTime(),
            prevTime = this.keyTime || 0,
            acceleration = 0.250,
            pos;

        if ( this.options.useTransition && this.isInTransition ) {
            pos = this.getComputedPosition();

            this._translate(Math.round(pos.x), Math.round(pos.y));
            this.isInTransition = false;
        }

        this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;

        switch ( e.keyCode ) {
            case this.options.keyBindings.pageUp:
                if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
                    newX += snap ? 1 : this.wrapperWidth;
                } else {
                    newY += snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.pageDown:
                if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
                    newX -= snap ? 1 : this.wrapperWidth;
                } else {
                    newY -= snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.end:
                newX = snap ? this.pages.length-1 : this.maxScrollX;
                newY = snap ? this.pages[0].length-1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                newX = 0;
                newY = 0;
                break;
            case this.options.keyBindings.left:
                newX += snap ? -1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.up:
                newY += snap ? 1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.right:
                newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
                break;
            case this.options.keyBindings.down:
                newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
                break;
            default:
                return;
        }

        if ( snap ) {
            this.goToPage(newX, newY);
            return;
        }

        if ( newX > 0 ) {
            newX = 0;
            this.keyAcceleration = 0;
        } else if ( newX < this.maxScrollX ) {
            newX = this.maxScrollX;
            this.keyAcceleration = 0;
        }

        if ( newY > 0 ) {
            newY = 0;
            this.keyAcceleration = 0;
        } else if ( newY < this.maxScrollY ) {
            newY = this.maxScrollY;
            this.keyAcceleration = 0;
        }

        this.scrollTo(newX, newY, 0);

        this.keyTime = now;
    },

    _animate: function (destX, destY, duration, easingFn) {
        var that = this,
            startX = this.x,
            startY = this.y,
            startTime = utils.getTime(),
            destTime = startTime + duration;

        function step () {
            var now = utils.getTime(),
                newX, newY,
                easing;

            if ( now >= destTime ) {
                that.isAnimating = false;
                that._translate(destX, destY);

                if ( !that.resetPosition(that.options.bounceTime) ) {
                    that._execEvent('scrollEnd');
                }

                return;
            }

            now = ( now - startTime ) / duration;
            easing = easingFn(now);
            newX = ( destX - startX ) * easing + startX;
            newY = ( destY - startY ) * easing + startY;
            that._translate(newX, newY);

            if ( that.isAnimating ) {
                rAF(step);
            }
        }

        this.isAnimating = true;
        step();
    },
    handleEvent: function (e) {
        switch ( e.type ) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                this._wheel(e);
                break;
            case 'keydown':
                this._key(e);
                break;
            case 'click':
                if ( this.enabled && !e._constructed ) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
        }
    }
};
function createDefaultScrollbar (direction, interactive, type) {
    var scrollbar = document.createElement('div'),
        indicator = document.createElement('div');

    if ( type === true ) {
        scrollbar.style.cssText = 'position:absolute;z-index:9999';
        indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
    }

    indicator.className = 'iScrollIndicator';

    if ( direction == 'h' ) {
        if ( type === true ) {
            scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
            indicator.style.height = '100%';
        }
        scrollbar.className = 'iScrollHorizontalScrollbar';
    } else {
        if ( type === true ) {
            scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
            indicator.style.width = '100%';
        }
        scrollbar.className = 'iScrollVerticalScrollbar';
    }

    scrollbar.style.cssText += ';overflow:hidden';

    if ( !interactive ) {
        scrollbar.style.pointerEvents = 'none';
    }

    scrollbar.appendChild(indicator);

    return scrollbar;
}

function Indicator (scroller, options) {
    this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;

    this.options = {
        listenX: true,
        listenY: true,
        interactive: false,
        resize: true,
        defaultScrollbars: false,
        shrink: false,
        fade: false,
        speedRatioX: 0,
        speedRatioY: 0
    };

    for ( var i in options ) {
        this.options[i] = options[i];
    }

    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;

    if ( this.options.interactive ) {
        if ( !this.options.disableTouch ) {
            utils.addEvent(this.indicator, 'touchstart', this);
            utils.addEvent(window, 'touchend', this);
        }
        if ( !this.options.disablePointer ) {
            utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
            utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
        }
        if ( !this.options.disableMouse ) {
            utils.addEvent(this.indicator, 'mousedown', this);
            utils.addEvent(window, 'mouseup', this);
        }
    }

    if ( this.options.fade ) {
        this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }
        this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
        // remove 0.0001ms
        var self = this;
        if(utils.isBadAndroid) {
            rAF(function() {
                if(self.wrapperStyle[durationProp] === '0.0001ms') {
                    self.wrapperStyle[durationProp] = '0s';
                }
            });
        }
        this.wrapperStyle.opacity = '0';
    }
}

Indicator.prototype = {
    handleEvent: function (e) {
        switch ( e.type ) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
        }
    },

    destroy: function () {
        if ( this.options.fadeScrollbars ) {
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
        }
        if ( this.options.interactive ) {
            utils.removeEvent(this.indicator, 'touchstart', this);
            utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
            utils.removeEvent(this.indicator, 'mousedown', this);

            utils.removeEvent(window, 'touchmove', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
            utils.removeEvent(window, 'mousemove', this);

            utils.removeEvent(window, 'touchend', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
            utils.removeEvent(window, 'mouseup', this);
        }

        if ( this.options.defaultScrollbars ) {
            this.wrapper.parentNode.removeChild(this.wrapper);
        }
    },

    _start: function (e) {
        var point = e.touches ? e.touches[0] : e;

        e.preventDefault();
        e.stopPropagation();

        this.transitionTime();

        this.initiated = true;
        this.moved = false;
        this.lastPointX = point.pageX;
        this.lastPointY = point.pageY;

        this.startTime  = utils.getTime();

        if ( !this.options.disableTouch ) {
            utils.addEvent(window, 'touchmove', this);
        }
        if ( !this.options.disablePointer ) {
            utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
        }
        if ( !this.options.disableMouse ) {
            utils.addEvent(window, 'mousemove', this);
        }

        this.scroller._execEvent('beforeScrollStart');
    },

    _move: function (e) {
        var point = e.touches ? e.touches[0] : e,
            deltaX, deltaY,
            newX, newY,
            timestamp = utils.getTime();

        if ( !this.moved ) {
            this.scroller._execEvent('scrollStart');
        }

        this.moved = true;

        deltaX = point.pageX - this.lastPointX;
        this.lastPointX = point.pageX;

        deltaY = point.pageY - this.lastPointY;
        this.lastPointY = point.pageY;

        newX = this.x + deltaX;
        newY = this.y + deltaY;

        this._pos(newX, newY);

// INSERT POINT: indicator._move

        e.preventDefault();
        e.stopPropagation();
    },

    _end: function (e) {
        if ( !this.initiated ) {
            return;
        }

        this.initiated = false;

        e.preventDefault();
        e.stopPropagation();

        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);

        if ( this.scroller.options.snap ) {
            var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

            var time = this.options.snapSpeed || Math.max(
                    Math.max(
                        Math.min(Math.abs(this.scroller.x - snap.x), 1000),
                        Math.min(Math.abs(this.scroller.y - snap.y), 1000)
                    ), 300);

            if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
                this.scroller.directionX = 0;
                this.scroller.directionY = 0;
                this.scroller.currentPage = snap;
                this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
            }
        }

        if ( this.moved ) {
            this.scroller._execEvent('scrollEnd');
        }
    },

    transitionTime: function (time) {
        time = time || 0;
        var durationProp = utils.style.transitionDuration;
        if(!durationProp) {
            return;
        }

        this.indicatorStyle[durationProp] = time + 'ms';

        if ( !time && utils.isBadAndroid ) {
            this.indicatorStyle[durationProp] = '0.0001ms';
            // remove 0.0001ms
            var self = this;
            rAF(function() {
                if(self.indicatorStyle[durationProp] === '0.0001ms') {
                    self.indicatorStyle[durationProp] = '0s';
                }
            });
        }
    },

    transitionTimingFunction: function (easing) {
        this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },

    refresh: function () {
        this.transitionTime();

        if ( this.options.listenX && !this.options.listenY ) {
            this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
        } else if ( this.options.listenY && !this.options.listenX ) {
            this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
        } else {
            this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
        }

        if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
            utils.addClass(this.wrapper, 'iScrollBothScrollbars');
            utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');

            if ( this.options.defaultScrollbars && this.options.customStyle ) {
                if ( this.options.listenX ) {
                    this.wrapper.style.right = '8px';
                } else {
                    this.wrapper.style.bottom = '8px';
                }
            }
        } else {
            utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
            utils.addClass(this.wrapper, 'iScrollLoneScrollbar');

            if ( this.options.defaultScrollbars && this.options.customStyle ) {
                if ( this.options.listenX ) {
                    this.wrapper.style.right = '2px';
                } else {
                    this.wrapper.style.bottom = '2px';
                }
            }
        }

        var r = this.wrapper.offsetHeight;  // force refresh

        if ( this.options.listenX ) {
            this.wrapperWidth = this.wrapper.clientWidth;
            if ( this.options.resize ) {
                this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                this.indicatorStyle.width = this.indicatorWidth + 'px';
            } else {
                this.indicatorWidth = this.indicator.clientWidth;
            }

            this.maxPosX = this.wrapperWidth - this.indicatorWidth;

            if ( this.options.shrink == 'clip' ) {
                this.minBoundaryX = -this.indicatorWidth + 8;
                this.maxBoundaryX = this.wrapperWidth - 8;
            } else {
                this.minBoundaryX = 0;
                this.maxBoundaryX = this.maxPosX;
            }

            this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
        }

        if ( this.options.listenY ) {
            this.wrapperHeight = this.wrapper.clientHeight;
            if ( this.options.resize ) {
                this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                this.indicatorStyle.height = this.indicatorHeight + 'px';
            } else {
                this.indicatorHeight = this.indicator.clientHeight;
            }

            this.maxPosY = this.wrapperHeight - this.indicatorHeight;

            if ( this.options.shrink == 'clip' ) {
                this.minBoundaryY = -this.indicatorHeight + 8;
                this.maxBoundaryY = this.wrapperHeight - 8;
            } else {
                this.minBoundaryY = 0;
                this.maxBoundaryY = this.maxPosY;
            }

            this.maxPosY = this.wrapperHeight - this.indicatorHeight;
            this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
        }

        this.updatePosition();
    },

    updatePosition: function () {
        var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;

        if ( !this.options.ignoreBoundaries ) {
            if ( x < this.minBoundaryX ) {
                if ( this.options.shrink == 'scale' ) {
                    this.width = Math.max(this.indicatorWidth + x, 8);
                    this.indicatorStyle.width = this.width + 'px';
                }
                x = this.minBoundaryX;
            } else if ( x > this.maxBoundaryX ) {
                if ( this.options.shrink == 'scale' ) {
                    this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                    this.indicatorStyle.width = this.width + 'px';
                    x = this.maxPosX + this.indicatorWidth - this.width;
                } else {
                    x = this.maxBoundaryX;
                }
            } else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
                this.width = this.indicatorWidth;
                this.indicatorStyle.width = this.width + 'px';
            }

            if ( y < this.minBoundaryY ) {
                if ( this.options.shrink == 'scale' ) {
                    this.height = Math.max(this.indicatorHeight + y * 3, 8);
                    this.indicatorStyle.height = this.height + 'px';
                }
                y = this.minBoundaryY;
            } else if ( y > this.maxBoundaryY ) {
                if ( this.options.shrink == 'scale' ) {
                    this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                    this.indicatorStyle.height = this.height + 'px';
                    y = this.maxPosY + this.indicatorHeight - this.height;
                } else {
                    y = this.maxBoundaryY;
                }
            } else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
                this.height = this.indicatorHeight;
                this.indicatorStyle.height = this.height + 'px';
            }
        }

        this.x = x;
        this.y = y;

        if ( this.scroller.options.useTransform ) {
            this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
        } else {
            this.indicatorStyle.left = x + 'px';
            this.indicatorStyle.top = y + 'px';
        }
    },

    _pos: function (x, y) {
        if ( x < 0 ) {
            x = 0;
        } else if ( x > this.maxPosX ) {
            x = this.maxPosX;
        }

        if ( y < 0 ) {
            y = 0;
        } else if ( y > this.maxPosY ) {
            y = this.maxPosY;
        }

        x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
        y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;

        this.scroller.scrollTo(x, y);
    },

    fade: function (val, hold) {
        if ( hold && !this.visible ) {
            return;
        }

        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;

        var time = val ? 250 : 500,
            delay = val ? 0 : 300;

        val = val ? '1' : '0';

        this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';

        this.fadeTimeout = setTimeout((function (val) {
            this.wrapperStyle.opacity = val;
            this.visible = +val;
        }).bind(this, val), delay);
    }
};

IScroll.utils = utils;

if ( typeof module != 'undefined' && module.exports ) {
    module.exports = IScroll;
} else if ( true ) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return IScroll; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {
    window.IScroll = IScroll;
}

})(window, document, Math);


/*!
* Scrolloverflow 2.0.0 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
* @license MIT licensed
*
* Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
*/
(function (window, document) {
    window.fp_scrolloverflow = (function() {

        // check if IScroll is available in global scope
        if (!window.IScroll) {
            // otherwise create local one from module.exports
            IScroll = module.exports;
        }

        // keeping central set of classnames and selectors
        var SCROLLABLE =            'fp-scrollable';
        var SCROLLABLE_SEL =        '.' + SCROLLABLE;

        var ACTIVE =                'active';
        var ACTIVE_SEL =            '.' + ACTIVE;

        var SECTION =               'fp-section';
        var SECTION_SEL =           '.' + SECTION;
        var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;

        var SLIDE =                 'fp-slide';
        var SLIDE_SEL =             '.' + SLIDE;
        var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;

        var SLIDES_WRAPPER =        'fp-slides';
        var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;

        var TABLE_CELL =            'fp-tableCell';
        var TABLE_CELL_SEL =        '.' + TABLE_CELL;

        var RESPONSIVE =            'fp-responsive';
        var AUTO_HEIGHT_RESPONSIVE= 'fp-auto-height-responsive';

        /*
        * Turns iScroll `mousewheel` option off dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener('wheel', this);
            this.wrapper.addEventListener('mousewheel', this);
            this.wrapper.addEventListener('DOMMouseScroll', this);
        };

        /*
        * Turns iScroll `mousewheel` option on dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener('wheel', this);
            this.wrapper.removeEventListener('mousewheel', this);
            this.wrapper.removeEventListener('DOMMouseScroll', this);
        };

        /**
        * Returns an integer representing the padding dimensions in px.
        */
        function getPaddings(element){
            var section = fp_utils.closest(element, SECTION_SEL);
            if(section != null){
                return parseInt(getComputedStyle(section)['padding-bottom']) + parseInt(getComputedStyle(section)['padding-top']);
            }
            return 0;
        }

        function scrollBarHandler(){
            var self = this;
            self.options = null;

            self.init = function(options, iscrollOptions){
                self.options = options;
                self.iscrollOptions = iscrollOptions;

                if(document.readyState === 'complete'){
                    createScrollBarForAll();
                    fullpage_api.shared.afterRenderActions();
                }
                //after DOM and images are loaded
                window.addEventListener('load', function(){
                    createScrollBarForAll();
                    fullpage_api.shared.afterRenderActions();
                });

                return self;
            };

            /**
            * Creates the scrollbar for the sections and slides in the site
            */
            function createScrollBarForAll(){
                if(fp_utils.hasClass(document.body, RESPONSIVE)){
                    removeResponsiveScrollOverflows();
                }
                else{
                    forEachSectionAndSlide(createScrollBar);
                }
            }

            /**
            * Checks if the element needs scrollbar and if the user wants to apply it.
            * If so it creates it.
            *
            * @param {Object} element   jQuery object of the section or slide
            */
            function createScrollBar(element){
                //User doesn't want scrollbar here? Sayonara baby!
                if(fp_utils.hasClass(element, 'fp-noscroll')) return;

                //necessary to make `scrollHeight` work under Opera 12
                fp_utils.css(element, {'overflow': 'hidden'});

                var scrollOverflowHandler = self.options.scrollOverflowHandler;
                var wrap = scrollOverflowHandler.wrapContent();
                var section = fp_utils.closest(element, SECTION_SEL); //in case element is a slide
                var scrollable = scrollOverflowHandler.scrollable(element);
                var contentHeight;
                var paddings = getPaddings(section);

                //if there was scroll, the contentHeight will be the one in the scrollable section
                if(scrollable != null){
                    contentHeight = scrollOverflowHandler.scrollHeight(element);
                }
                else{
                    contentHeight = element.scrollHeight - paddings;
                    if(self.options.verticalCentered){
                        contentHeight = $(TABLE_CELL_SEL, element)[0].scrollHeight - paddings;
                    }
                }

                var scrollHeight = fp_utils.getWindowHeight() - paddings;

                //needs scroll?
                if ( contentHeight > scrollHeight) {
                    //did we already have an scrollbar ? Updating it
                    if(scrollable != null){
                        scrollOverflowHandler.update(element, scrollHeight);
                    }
                     //creating the scrolling
                    else{
                        if(self.options.verticalCentered){
                            fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scroller);
                            fp_utils.wrapInner($(TABLE_CELL_SEL, element)[0], wrap.scrollable);
                        }else{
                            fp_utils.wrapInner(element, wrap.scroller);
                            fp_utils.wrapInner(element, wrap.scrollable);
                        }
                        scrollOverflowHandler.create(element, scrollHeight, self.iscrollOptions);
                    }
                }

                //removing the scrolling when it is not necessary anymore
                else{
                    scrollOverflowHandler.remove(element);
                }

                //undo
                fp_utils.css(element, {'overflow': ''});
            }

            /**
            * Applies a callback function to each section in the site
            * or the slides within them
            */
            function forEachSectionAndSlide(callback){
                $(SECTION_SEL).forEach(function(section){
                    var slides = $(SLIDE_SEL, section);

                    if(slides.length){
                        slides.forEach(function(slide){
                            callback(slide);
                        });
                    }else{
                        callback(section);
                    }
                });
            }

            /**
            * Removes scrollOverflow for sections using the class `fp-auto-height-responsive`
            */
            function removeResponsiveScrollOverflows(){
                var scrollOverflowHandler = self.options.scrollOverflowHandler;
                forEachSectionAndSlide(function(element){
                    if(fp_utils.hasClass( fp_utils.closest(element, SECTION_SEL), AUTO_HEIGHT_RESPONSIVE)){
                        scrollOverflowHandler.remove(element);
                    }
                });
            }

            //public functions
            self.createScrollBarForAll = createScrollBarForAll;
        }

        /**
         * An object to handle overflow scrolling.
         * This uses jquery.slimScroll to accomplish overflow scrolling.
         * It is possible to pass in an alternate scrollOverflowHandler
         * to the fullpage.js option that implements the same functions
         * as this handler.
         *
         * @type {Object}
         */
        var $ = null;
        var iscrollHandler = {
            refreshId: null,
            iScrollInstances: [],

            // Default options for iScroll.js used when using scrollOverflow
            iscrollOptions: {
                scrollbars: true,
                mouseWheel: true,
                hideScrollbars: false,
                fadeScrollbars: false,
                disableMouse: true,
                interactiveScrollbars: true
            },

            init: function(options){
                $ = fp_utils.$;

                var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));

                //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
                iscrollHandler.iscrollOptions.click = isTouch; // see #2035

                //extending iScroll options with the user custom ones
                iscrollHandler.iscrollOptions = fp_utils.deepExtend(iscrollHandler.iscrollOptions, options.scrollOverflowOptions);

                return new scrollBarHandler().init(options, iscrollHandler.iscrollOptions);
            },

            // Enables or disables the mouse wheel for the active section or all slides in it
            toggleWheel: function(value){
                var scrollable = $(SCROLLABLE_SEL, $(SECTION_ACTIVE_SEL)[0]);
                scrollable.forEach(function(item){
                    var iScrollInstance = item.fp_iscrollInstance;
                    if(iScrollInstance != null){
                        if(value){
                            iScrollInstance.wheelOn();
                        }
                        else{
                            iScrollInstance.wheelOff();
                        }
                    }
                });
            },

            /**
            * Turns off iScroll for the destination section.
            * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
            * scroll the destination section/slide before the sections animations ends.
            */
            onLeave: function(){
                iscrollHandler.toggleWheel(false);
            },

            // Turns off iScroll for the leaving section
            beforeLeave: function(){
                iscrollHandler.onLeave()
            },

            // Turns on iScroll on section load
            afterLoad: function(){
                iscrollHandler.toggleWheel(true);
            },

            /**
             * Called when overflow scrolling is needed for a section.
             *
             * @param  {Object} element      jQuery object containing current section
             * @param  {Number} scrollHeight Current window height in pixels
             */
            create: function(element, scrollHeight, iscrollOptions) {
                var scrollable = $(SCROLLABLE_SEL, element);

                scrollable.forEach(function(item) {
                    fp_utils.css(item, {'height': scrollHeight + 'px'});

                    var iScrollInstance = item.fp_iscrollInstance;
                    if (iScrollInstance != null) {
                        iscrollHandler.iScrollInstances.forEach(function(instance){
                            instance.destroy();
                        });
                    }

                    iScrollInstance = new IScroll(item, iscrollOptions);
                    iscrollHandler.iScrollInstances.push(iScrollInstance);

                    if(!fp_utils.hasClass(fp_utils.closest(element, SECTION_SEL), ACTIVE)){
                        //off by default until the section gets active
                        iScrollInstance.wheelOff();
                    }

                    item.fp_iscrollInstance = iScrollInstance;
                });
            },

            /**
             * Return a boolean depending on whether the scrollable element is a
             * the end or at the start of the scrolling depending on the given type.
             *
             * @param  {String}  type       Either 'top' or 'bottom'
             * @param  {Object}  scrollable jQuery object for the scrollable element
             * @return {Boolean}
             */
            isScrolled: function(type, scrollable) {
                var scroller = scrollable.fp_iscrollInstance;

                //no scroller?
                if (!scroller) {
                    return true;
                }

                if (type === 'top'){
                    return scroller.y >= 0 && !fp_utils.getScrollTop(scrollable);
                } else if (type === 'bottom') {
                    return (0 - scroller.y) + fp_utils.getScrollTop(scrollable) + 1 + scrollable.offsetHeight >= scrollable.scrollHeight;
                }
            },

            /**
             * Returns the scrollable element for the given section.
             * If there are landscape slides, will only return a scrollable element
             * if it is in the active slide.
             *
             * @param  {Object}  activeSection jQuery object containing current section
             * @return {Boolean}
             */
            scrollable: function(activeSection){
                // if there are landscape slides, we check if the scrolling bar is in the current one or not
                if ($(SLIDES_WRAPPER_SEL, activeSection).length) {
                    return $(SCROLLABLE_SEL, $(SLIDE_ACTIVE_SEL, activeSection)[0] )[0];
                }
                return $(SCROLLABLE_SEL, activeSection)[0];
            },

            /**
             * Returns the scroll height of the wrapped content.
             * If this is larger than the window height minus section padding,
             * overflow scrolling is needed.
             *
             * @param  {Object} element jQuery object containing current section
             * @return {Number}
             */
            scrollHeight: function(element) {
                return $('.fp-scroller', $(SCROLLABLE_SEL, element)[0] )[0].scrollHeight;
            },

            /**
             * Called when overflow scrolling is no longer needed for a section.
             *
             * @param  {Object} element      jQuery object containing current section
             */
            remove: function(element) {
                if(element == null) return;

                var scrollable = $(SCROLLABLE_SEL, element)[0];
                if (scrollable != null) {
                    var iScrollInstance = scrollable.fp_iscrollInstance;
                    if(iScrollInstance != null){
                        iScrollInstance.destroy();
                    }

                    scrollable.fp_iscrollInstance = null;

                    //unwrapping...
                    $('.fp-scroller', element)[0].outerHTML = $('.fp-scroller', element)[0].innerHTML;
                    $(SCROLLABLE_SEL, element)[0].outerHTML = $(SCROLLABLE_SEL, element)[0].innerHTML;
                }
            },

            /**
             * Called when overflow scrolling has already been setup but the
             * window height has potentially changed.
             *
             * @param  {Object} element      jQuery object containing current section
             * @param  {Number} scrollHeight Current window height in pixels
             */
            update: function(element, scrollHeight) {
                //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
                //short period of time.
                //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
                clearTimeout(iscrollHandler.refreshId);
                iscrollHandler.refreshId = setTimeout(function(){
                    iscrollHandler.iScrollInstances.forEach(function(instance){
                        instance.refresh();

                        //ugly hack that we are forced to use due to the timeout delay
                        //otherwise done on the fullpage.js reBuild function
                        fullpage_api.silentMoveTo(fp_utils.index($(SECTION_ACTIVE_SEL)[0]) + 1);
                    });
                }, 150);

                //updating the wrappers height
                fp_utils.css($(SCROLLABLE_SEL, element)[0], {'height': scrollHeight + 'px'});
                fp_utils.css($(SCROLLABLE_SEL, element)[0].parentNode, {'height': scrollHeight + getPaddings(element) + 'px'});
            },

            /**
             * Called to get any additional elements needed to wrap the section
             * content in order to facilitate overflow scrolling.
             *
             * @return {String|Object} Can be a string containing HTML,
             *                         a DOM element, or jQuery object.
             */
            wrapContent: function() {
                var scrollable = document.createElement('div');
                scrollable.className = SCROLLABLE;

                var scroller = document.createElement('div');
                scroller.className = 'fp-scroller';

                return {
                    scrollable: scrollable,
                    scroller: scroller
                };
            }
        };

        return {
            iscrollHandler: iscrollHandler
        };
    })();
})(window, document);

/***/ })

});