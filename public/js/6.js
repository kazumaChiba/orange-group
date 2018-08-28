webpackJsonp([6],{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(464)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(466)
/* template */
var __vue_template__ = __webpack_require__(467)
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

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(237)
/* template */
var __vue_template__ = __webpack_require__(238)
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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#footer {\n  height: 700px;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n    margin-bottom: 60px;\n}\n#footer:before {\n    background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n    font-size: 20px;\n}\n#footer .footer .footer-info {\n    margin-bottom: 100px;\n    line-height: 25px;\n    font-size: 14px;\n    font-weight: 100;\n}\n#footer .footer .footer-info div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#footer .footer .footer-info p {\n      margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n      font-size: 18px;\n      font-weight: 100;\n      line-height: 30px;\n}\n#footer .footer.footer-join:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: calc(100% + 150px);\n    background: rgba(0, 0, 0, 0.8);\n    top: 0px;\n}\n", ""]);

// exports


/***/ }),

/***/ 237:
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

/***/ 238:
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(269)
/* template */
var __vue_template__ = __webpack_require__(271)
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

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
//
//
//
//
//




// Check if the request came from the browser and is not server rendered
if (typeof window !== 'undefined') {
  var slick = __webpack_require__(270);
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

<<<<<<< HEAD
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
=======
exports = module.exports = __webpack_require__(49)(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css);", ""]);

// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.main-title {\n  font-size: 50px;\n  margin-bottom: 0;\n}\n.sub-title {\n  font-size: 20px;\n  letter-spacing: 10px;\n  font-family: \"PingFang SC\",微軟正黑體;\n}\n#about-tabs {\n  margin: 50px auto;\n}\n#about-tabs.position-fixed {\n    position: fixed;\n    top: 0;\n    z-index: 99999;\n    max-width: unset;\n    background: white;\n    top: 0;\n    margin-top: 0;\n}\n#about-tabs .tab {\n    color: gray;\n    font-size: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    border-bottom: 2px solid #efefef;\n    padding: 15px 0;\n    cursor: pointer;\n}\n#about-tabs .tab.active, #about-tabs .tab:hover {\n      border-bottom: 3px solid #f26c24;\n      color: #f26c24;\n}\n#block-secret {\n  margin: 70px 0 200px 0;\n}\n#block-secret .sub-title {\n    margin-bottom: 40px;\n}\n#block-secret .about-content {\n    width: 70%;\n    margin: 0 auto;\n    line-height: 30px;\n    font-weight: 500;\n}\n#block-about-service {\n  height: 1000px;\n}\n#block-about-service .service-body {\n    height: 500px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n#block-about-service .service-body:before {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: black;\n      opacity: 0.7;\n}\n#block-about-service .service-body .service-item {\n      padding: 80px;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center;\n}\n#block-about-service .service-body .service-item .service-content {\n        opacity: 0;\n}\n#block-about-service .service-body .service-item .service-content .service-title {\n          font-size: 35px;\n          margin-bottom: 5px;\n}\n#block-about-service .service-body .service-item .service-content .service-desc {\n          line-height: 35px;\n          font-size: 20px;\n}\n#block-about-service .service-body .service-item:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: #f26c23;\n        opacity: 0;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#block-about-service .service-body .service-item:hover:before {\n        opacity: 0.9;\n}\n#block-about-service .service-body .service-item:hover .service-content {\n        opacity: 1;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#block-about-service .service-body .service-left, #block-about-service .service-body .service-right {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#block-about-service .service-body .service-left {\n      top: -80px;\n}\n#block-about-service .service-body .service-left .service-item {\n        height: 750px;\n        position: relative;\n}\n#block-about-service .service-body .service-right {\n      top: -80px;\n}\n#block-about-service .service-body .service-right .service-item.-top {\n        height: 350px;\n}\n#block-about-service .service-body .service-right .service-item.-bottom {\n        height: 480px;\n        width: 90%;\n}\n#block-about-year {\n  margin-bottom: 150px;\n}\n#block-about-year .year .slick-list {\n    height: 350px;\n}\n#block-about-year .year .year-item {\n    top: 110px;\n    padding-bottom: 35px;\n}\n#block-about-year .year .year-item.active .text-year {\n      color: #f26d22;\n}\n#block-about-year .year .year-item.active .dot-year:after {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n}\n#block-about-year .year .year-item:not(.active) .dot-year:hover:after {\n      -webkit-transition: all .5s;\n      transition: all .5s;\n      -webkit-animation: yeardot 1s infinite ease-in-out;\n              animation: yeardot 1s infinite ease-in-out;\n}\n#block-about-year .year .year-item:hover {\n      color: #f26d22;\n}\n#block-about-year .year .year-item:before {\n      content: \"\";\n      background: #f26d22;\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      bottom: 0;\n      left: 0;\n}\n#block-about-year .year .year-item .dot-year {\n      width: 10px;\n      height: 10px;\n      position: absolute;\n      background: #f26d22;\n      border-radius: 100%;\n      top: 58px;\n      left: calc(50% - 5px);\n      cursor: pointer;\n}\n#block-about-year .year .year-item .dot-year:before {\n        content: \"\";\n        position: absolute;\n        width: 25px;\n        height: 25px;\n        background: rgba(255, 205, 177, 0.45);\n        border-radius: 100%;\n        left: -8px;\n        top: -8px;\n}\n#block-about-year .year .year-item .dot-year:after {\n        content: \"\";\n        position: absolute;\n        border-radius: 100%;\n        width: 180px;\n        height: 180px;\n        background: rgba(255, 205, 177, 0.1);\n        left: -85px;\n        top: -85px;\n        -webkit-transform: scale(0.7);\n                transform: scale(0.7);\n}\n#block-about-year .year .slick-arrow {\n    color: transparent;\n    background: transparent;\n    border: none;\n}\n#block-about-year .year .slick-arrow:before {\n      content: \"\\279D\";\n      display: inline-block;\n      color: gray;\n      font-size: 18px;\n}\n#block-about-year .year .slick-arrow.slick-prev:before {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n}\n#block-about-year .year .text-year {\n    font-size: 20px;\n    font-weight: 500;\n}\n#block-about-year .year-body .year-left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    border-right: 1px solid #fbc1a2;\n    padding-right: 50px;\n}\n#block-about-year .year-body .year-left p {\n      font-size: 20px;\n}\n#block-about-year .year-body .year-left p span {\n        font-size: 35px;\n}\n#block-about-year .year-body .year-right {\n    -webkit-box-flex: 5;\n        -ms-flex: 5;\n            flex: 5;\n    padding-left: 100px;\n}\n#block-about-year .year-body .year-month-list .year-month-item .left {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n#block-about-year .year-body .year-month-list .year-month-item .left .month {\n      font-size: 22px;\n}\n#block-about-year .year-body .year-month-list .year-month-item .right {\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6;\n    border-bottom: 1px solid #ececec;\n    margin-bottom: 20px;\n    padding: 0 50px;\n}\n#block-about-year .year-body .year-month-list .year-month-item .right .title {\n      font-size: 25px;\n      margin-bottom: 5px;\n}\n#block-about-year .year-body .year-month-list .year-month-item:last-child .right {\n    border-bottom: none;\n}\n#block-about-video {\n  height: 550px;\n  background-image: url(\"/images/about_create.png\");\n}\n#block-about-video:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(120deg, transparent 60%, white);\n}\n#block-about-video .btn-play {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n}\n#block-about-video .btn-play:before {\n      width: 100px;\n      height: 100px;\n      content: \"\\25B6\\FE0E\";\n      color: white;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      background: #f36f1b;\n      border-color: #f36f1b;\n}\n#block-about-video .btn-play:hover:before {\n      background: #f55701;\n      border-color: #f55701;\n}\n#block-about-video .video-content {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    color: white;\n}\n#block-about-video .video-content .sub-title {\n      font-size: 18px;\n      margin-bottom: 20px;\n}\n#block-about-video .video-content h3 {\n      font-size: 50px;\n}\n#block-about-video .video-content .video-desc {\n      margin-bottom: 40px;\n      padding-bottom: 40px;\n}\n#block-about-video .video-content .video-desc:after {\n        content: \"\";\n        position: absolute;\n        width: 50px;\n        height: 2px;\n        background: #f26c24;\n        left: 0;\n        bottom: 0;\n}\n@-webkit-keyframes yeardot {\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n}\n}\n@keyframes yeardot {\n50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n}\n100% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n}\n}\n", ""]);

// exports


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_footer__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_block_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_slick__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_slick__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









Vue.use(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            tab: '#block-secret',
            yearOptions: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            },
            yearIndex: 0,
            yearEvents: [{
                year: '2008',
                content: [{
                    month: '12月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }, {
                    month: '11月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }]
            }, {
                year: '2009',
                content: [{
                    month: '3月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }, {
                    month: '1月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }]
            }, {
                year: '2012',
                content: [{
                    month: '5月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }, {
                    month: '3月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }]
            }, {
                year: '2013',
                content: [{
                    month: '7月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }, {
                    month: '6月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }]
            }, {
                year: '2015',
                content: [{
                    month: '12月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }, {
                    month: '4月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }]
            }, {
                year: '2018',
                content: [{
                    month: '3月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }, {
                    month: '1月',
                    listTitle: '新光三越旗艦店開幕',
                    listContent: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字'
                }]
            }]

        };
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

            this.$nextTick(function () {
                _this.$refs.slick.reSlick();
            });
        }
    },
    components: {
        Banner: __WEBPACK_IMPORTED_MODULE_0_components_block_banner___default.a,
        MenuHeader: __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_2_components_block_footer___default.a,
        Slick: __WEBPACK_IMPORTED_MODULE_4_vue_slick___default.a
    },
    mounted: function mounted() {
        jQuery(document).ready(function () {

            scrollTabs();

            jQuery(".tab").click(function () {
                var target = jQuery(this).attr("data-target");
                jQuery(".tab.active").removeClass("active");
                jQuery(this).addClass("active");
                jQuery("html,body").animate({
                    scrollTop: jQuery(target).offset().top - 100
                }, 300);
            });

            jQuery(window).scroll(function () {
                scrollTabs();
            });

            function scrollTabs() {
                if (jQuery(window).scrollTop() >= jQuery("#block-secret").offset().top - 200) {
                    jQuery("#about-tabs").addClass("position-fixed");
                    jQuery("#header").addClass("hidden");
                } else {
                    jQuery("#about-tabs").removeClass("position-fixed");
                    jQuery("#header").removeClass("hidden");
                }

                var tab = [jQuery("#block-secret").offset().top - 200, jQuery("#block-about-year").offset().top - 200, jQuery("#block-about-video").offset().top - 200];
                if (jQuery(window).scrollTop() >= tab[0] && jQuery(window).scrollTop() < tab[1]) {
                    jQuery(".tab.active").removeClass("active");
                    jQuery(".tab").eq(0).addClass("active");
                } else if (jQuery(window).scrollTop() >= tab[1] && jQuery(window).scrollTop() < tab[2]) {
                    jQuery(".tab.active").removeClass("active");
                    jQuery(".tab").eq(1).addClass("active");
                } else if (jQuery(window).scrollTop() >= tab[2]) {
                    jQuery(".tab.active").removeClass("active");
                    jQuery(".tab").eq(2).addClass("active");
                }
            }
        }); // END jquery ready
    }
});

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "block-about" } },
    [
      _c("banner", {
        attrs: {
          title: "關於<span class='text-orange'>橘色</span>",
          img: "/images/slideshow_1.jpg"
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "block-about-year" } },
        [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "sub-title text-uppercase d-block text-center" },
            [_vm._v("timeline")]
          ),
          _vm._v(" "),
          _c(
            "slick",
            {
              ref: "slick",
              staticClass: "year container",
              attrs: { options: _vm.yearOptions }
            },
            _vm._l(_vm.yearEvents, function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass: "year-item text-center position-relative",
                  class: _vm.yearIndex == $index ? "active" : "",
                  on: {
                    click: function($event) {
                      _vm.yearIndex = $index
                    }
                  }
                },
                [
                  _c("p", { staticClass: "text-year mb-0" }, [
                    _vm._v(_vm._s(item.year))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "dot-year" })
                ]
              )
            })
          ),
          _vm._v(" "),
          _c("div", { staticClass: "year-body" }, [
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "year-left text-center" }, [
                  _c("p", [
                    _c("span", { staticClass: "text-orange" }, [
                      _vm._v(_vm._s(_vm.yearEvents[_vm.yearIndex].year))
                    ]),
                    _vm._v("年")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "year-right text-center" }, [
                  _c(
                    "div",
                    { staticClass: "year-month-list" },
                    _vm._l(_vm.yearEvents[_vm.yearIndex].content, function(
                      item,
                      $index
                    ) {
                      return _c(
                        "div",
                        { key: $index, staticClass: "year-month-item d-flex" },
                        [
                          _c("div", { staticClass: "left text-left" }, [
                            _c("p", { staticClass: "month" }, [
                              _vm._v(_vm._s(item.month))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "right text-left" }, [
                            _c("p", { staticClass: "title text-orange" }, [
                              _vm._v(_vm._s(item.listTitle))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "content" }, [
                              _vm._v(_vm._s(item.listContent))
                            ])
                          ])
                        ]
                      )
                    })
                  )
                ])
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(4),
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
    return _c(
      "div",
      { staticClass: "container", attrs: { id: "about-tabs" } },
      [
        _c("div", { staticClass: "row justify-content-between" }, [
          _c(
            "a",
            {
              staticClass: "tab text-center",
              attrs: { "data-target": "#block-secret" }
            },
            [_vm._v("橘色秘密")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "tab text-center",
              attrs: { "data-target": "#block-about-year" }
            },
            [_vm._v("橘色歲月")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "tab text-center",
              attrs: { "data-target": "#block-about-video" }
            },
            [_vm._v("用心創造美好的時刻")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "block-secret" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", {}, [
          _c("h3", { staticClass: "main-title text-center" }, [
            _c("span", { staticClass: "fs-inherit text-orange mb-1" }, [
              _vm._v("橘色")
            ]),
            _vm._v("秘密")
          ]),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "sub-title text-uppercase d-block text-center" },
            [_vm._v("secrects")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "about-content text-center" }, [
            _vm._v(
              "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
            )
          ])
        ])
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
        staticClass: "position-relative",
        attrs: { id: "block-about-service" }
      },
      [
        _c(
          "div",
          {
            staticClass: "service-body position-relative",
            staticStyle: {
              "background-image": "url('/images/banner_about.png')"
            }
          },
          [
            _c("div", { staticClass: "container" }, [
              _c(
                "div",
                {
                  staticClass:
                    "row d-flex justify-content-center align-items-center"
                },
                [
                  _c("div", { staticClass: "service-left position-relative" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "service-item d-flex position-relative justify-content-center align-items-center text-center",
                        staticStyle: {
                          "background-image": "url('/images/about_year_1.png')"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "service-content position-relative text-white"
                          },
                          [
                            _c("p", { staticClass: "service-title" }, [
                              _vm._v("用心服務")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "service-desc" }, [
                              _vm._v(
                                "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "service-right position-relative" },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "service-item -top d-flex position-relative justify-content-center align-items-center text-center",
                          staticStyle: {
                            "background-image":
                              "url('/images/about_year_2.png')"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "service-content position-relative text-white"
                            },
                            [
                              _c("p", { staticClass: "service-title" }, [
                                _vm._v("用心服務")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "service-desc mb-0" }, [
                                _vm._v(
                                  "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
                                )
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
                            "service-item -bottom d-flex position-relative justify-content-center align-items-center text-center",
                          staticStyle: {
                            "background-image":
                              "url('/images/about_year_3.png')"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "service-content text-white position-relative"
                            },
                            [
                              _c("p", { staticClass: "service-title" }, [
                                _vm._v("用心服務")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "service-desc" }, [
                                _vm._v(
                                  "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "main-title text-center" }, [
      _c("span", { staticClass: "fs-inherit text-orange mb-1" }, [
        _vm._v("橘色")
      ]),
      _vm._v("歲月")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "position-relative", attrs: { id: "block-about-video" } },
      [
        _c("div", { staticClass: "container h-100 position-relative" }, [
          _c("div", { staticClass: "row  align-items-center h-100" }, [
            _c("div", {
              staticClass:
                "btn-play h-100 d-flex align-items-center justify-content-center mb-0"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "video-content" }, [
              _c("h3", [
                _c("span", { staticClass: "text-orange" }, [_vm._v("用心")]),
                _vm._v("創造美好時刻")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "sub-title text-uppercase" }, [
                _vm._v("videos")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "video-desc position-relative" }, [
                _vm._v(
                  "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
                )
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "btn-orange fat", attrs: { href: "#" } }, [
                _vm._v("探索橘色版圖")
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c2f7f8e", module.exports)
  }
}

/***/ }),
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(285)
/* template */
var __vue_template__ = __webpack_require__(287)
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
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
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
  var slick = __webpack_require__(286);
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
/* 286 */
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
/* 287 */
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
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
var __assign=Object.assign||function(e){for(var a,s=1,t=arguments.length;s<t;s++)for(var r in a=arguments[s])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e};function mergeData(){for(var e,a,s={},t=arguments.length;t--;)for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++)switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]),s[e]=s[e].concat(arguments[t][e]);break;case"staticClass":if(!arguments[t][e])break;void 0===s[e]&&(s[e]=""),s[e]&&(s[e]+=" "),s[e]+=arguments[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var o=0,n=Object.keys(arguments[t][e]||{});o<n.length;o++)a=n[o],s[e][a]?s[e][a]=[].concat(s[e][a],arguments[t][e][a]):s[e][a]=arguments[t][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}),s[e]=__assign({},arguments[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments[t][e])}return s}
//# sourceMappingURL=lib.esm.js.map


/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerComponent */
/* harmony export (immutable) */ __webpack_exports__["a"] = registerComponents;
/* unused harmony export registerDirective */
/* harmony export (immutable) */ __webpack_exports__["b"] = registerDirectives;
/* harmony export (immutable) */ __webpack_exports__["c"] = vueUse;
/**
 * Register a component plugin as being loaded. returns true if compoent plugin already registered
 * @param {object} Vue
 * @param {string} Component name
 * @param {object} Component definition
 */
function registerComponent(Vue, name, def) {
  Vue._bootstrap_vue_components_ = Vue._bootstrap_vue_components_ || {};
  var loaded = Vue._bootstrap_vue_components_[name];
  if (!loaded && def && name) {
    Vue._bootstrap_vue_components_[name] = true;
    Vue.component(name, def);
  }
  return loaded;
}

/**
 * Register a group of components as being loaded.
 * @param {object} Vue
 * @param {object} Object of component definitions
 */
function registerComponents(Vue, components) {
  for (var component in components) {
    registerComponent(Vue, component, components[component]);
  }
}

/**
 * Register a directive as being loaded. returns true if directive plugin already registered
 * @param {object} Vue
 * @param {string} Directive name
 * @param {object} Directive definition
 */
function registerDirective(Vue, name, def) {
  Vue._bootstrap_vue_directives_ = Vue._bootstrap_vue_directives_ || {};
  var loaded = Vue._bootstrap_vue_directives_[name];
  if (!loaded && def && name) {
    Vue._bootstrap_vue_directives_[name] = true;
    Vue.directive(name, def);
  }
  return loaded;
}

/**
 * Register a group of directives as being loaded.
 * @param {object} Vue
 * @param {object} Object of directive definitions
 */
function registerDirectives(Vue, directives) {
  for (var directive in directives) {
    registerDirective(Vue, directive, directives[directive]);
  }
}

/**
 * Install plugin if window.Vue available
 * @param {object} Plugin definition
 */
function vueUse(VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
  }
}

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* unused harmony export getOwnPropertyNames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defineProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defineProperty; });
/* unused harmony export freeze */
/* unused harmony export getOwnPropertyDescriptor */
/* unused harmony export getOwnPropertySymbols */
/* unused harmony export getPrototypeOf */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return create; });
/* unused harmony export isFrozen */
/* unused harmony export is */
/* harmony export (immutable) */ __webpack_exports__["f"] = readonlyDescriptor;
/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2

    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill
if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      // eslint-disable-next-line no-self-compare
      return x !== x && y !== y;
    }
  };
}

var assign = Object.assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var keys = Object.keys;
var defineProperties = Object.defineProperties;
var defineProperty = Object.defineProperty;
var freeze = Object.freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
var create = Object.create;
var isFrozen = Object.isFrozen;
var is = Object.is;

function readonlyDescriptor() {
  return { enumerable: true, configurable: false, writable: false };
}

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayIncludes; });
/* unused harmony export arrayFind */
/* harmony export (immutable) */ __webpack_exports__["b"] = concat;
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T = void 0;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue = void 0;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support
if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Static
var from = Array.from;
var isArray = Array.isArray;

// Instance
var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var arrayFind = function arrayFind(array, fn, thisArg) {
  return array.find(fn, thisArg);
};
function concat() {
  return Array.prototype.concat.apply([], arguments);
}

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBCR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return eventOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventOff; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(307);


// Determine if an element is an HTML Element
var isElement = function isElement(el) {
  return el && el.nodeType === Node.ELEMENT_NODE;
};

// Determine if an HTML element is visible - Faster than CSS check
var isVisible = function isVisible(el) {
  return isElement(el) && document.body.contains(el) && el.getBoundingClientRect().height > 0 && el.getBoundingClientRect().width > 0;
};

// Determine if an element is disabled
var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || el.classList.contains('disabled') || Boolean(el.getAttribute('disabled'));
};

// Cause/wait-for an element to reflow it's content (adjusting it's height/width)
var reflow = function reflow(el) {
  // requsting an elements offsetHight will trigger a reflow of the element content
  return isElement(el) && el.offsetHeight;
};

// Select all elements matching selector. Returns [] if none found
var selectAll = function selectAll(selector, root) {
  if (!isElement(root)) {
    root = document;
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0__array__["c" /* from */])(root.querySelectorAll(selector));
};

// Select a single element, returns null if not found
var select = function select(selector, root) {
  if (!isElement(root)) {
    root = document;
  }
  return root.querySelector(selector) || null;
};

// Determine if an element matches a selector
var matches = function matches(el, selector) {
  if (!isElement(el)) {
    return false;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  // Prefer native implementations over polyfill function
  var proto = Element.prototype;
  var Matches = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector ||
  /* istanbul ignore next */
  function (sel) {
    var element = this;
    var m = selectAll(sel, element.document || element.ownerDocument);
    var i = m.length;
    // eslint-disable-next-line no-empty
    while (--i >= 0 && m.item(i) !== element) {}
    return i > -1;
  };

  return Matches.call(el, selector);
};

// Finds closest element matching selector. Returns null if not found
var closest = function closest(selector, root) {
  if (!isElement(root)) {
    return null;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  // Since we dont support IE < 10, we can use the "Matches" version of the polyfill for speed
  // Prefer native implementation over polyfill function
  var Closest = Element.prototype.closest ||
  /* istanbul ignore next */
  function (sel) {
    var element = this;
    if (!document.documentElement.contains(element)) {
      return null;
    }
    do {
      // Use our "patched" matches function
      if (matches(element, sel)) {
        return element;
      }
      element = element.parentElement;
    } while (element !== null);
    return null;
  };

  var el = Closest.call(root, selector);
  // Emulate jQuery closest and return null if match is the passed in element (root)
  return el === root ? null : el;
};

// Get an element given an ID
var getById = function getById(id) {
  return document.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
};

// Add a class to an element
var addClass = function addClass(el, className) {
  if (className && isElement(el)) {
    el.classList.add(className);
  }
};

// Remove a class from an element
var removeClass = function removeClass(el, className) {
  if (className && isElement(el)) {
    el.classList.remove(className);
  }
};

// Test if an element has a class
var hasClass = function hasClass(el, className) {
  if (className && isElement(el)) {
    return el.classList.contains(className);
  }
  return false;
};

// Set an attribute on an element
var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
};

// Remove an attribute from an element
var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
};

// Get an attribute value from an element (returns null if not found)
var getAttr = function getAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.getAttribute(attr);
  }
  return null;
};

// Determine if an attribute exists on an element (returns true or false, or null if element not found)
var hasAttr = function hasAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.hasAttribute(attr);
  }
  return null;
};

// Return the Bounding Client Rec of an element. Retruns null if not an element
var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
};

// Get computed style object for an element
var getCS = function getCS(el) {
  return isElement(el) ? window.getComputedStyle(el) : {};
};

// Return an element's offset wrt document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset
var offset = function offset(el) {
  if (isElement(el)) {
    if (!el.getClientRects().length) {
      return { top: 0, left: 0 };
    }
    var bcr = getBCR(el);
    var win = el.ownerDocument.defaultView;
    return {
      top: bcr.top + win.pageYOffset,
      left: bcr.left + win.pageXOffset
    };
  }
};

// Return an element's offset wrt to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position
var position = function position(el) {
  if (!isElement(el)) {
    return;
  }
  var parentOffset = { top: 0, left: 0 };
  var offsetSelf = void 0;
  var offsetParent = void 0;
  if (getCS(el).position === 'fixed') {
    offsetSelf = getBCR(el);
  } else {
    offsetSelf = offset(el);
    var doc = el.ownerDocument;
    offsetParent = el.offsetParent || doc.documentElement;
    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }
    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      parentOffset.top += parseFloat(getCS(offsetParent).borderTopWidth);
      parentOffset.left += parseFloat(getCS(offsetParent).borderLeftWidth);
    }
  }
  return {
    top: offsetSelf.top - parentOffset.top - parseFloat(getCS(el).marginTop),
    left: offsetSelf.left - parentOffset.left - parseFloat(getCS(el).marginLeft)
  };
};

// Attach an event listener to an element
var eventOn = function eventOn(el, evtName, handler) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler);
  }
};

// Remove an event listener from an element
var eventOff = function eventOff(el, evtName, handler) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler);
  }
};

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * SSR Safe Client Side ID attribute generation
 *
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    id: {
      type: String,
      default: null
    }
  },
  methods: {
    safeId: function safeId() {
      var suffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var id = this.id || this.localId_ || null;
      if (!id) {
        return null;
      }
      suffix = String(suffix).replace(/\s+/g, '_');
      return suffix ? id + '_' + suffix : id;
    }
  },
  computed: {
    localId_: function localId_() {
      if (!this.$isServer && !this.id && typeof this._uid !== 'undefined') {
        return '__BVID__' + this._uid;
      }
    }
  }
});

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Log a warning message to the console with bootstrap-vue formatting sugar.
 * @param {string} message
 */
/* istanbul ignore next */
function warn(message) {
  console.warn("[Bootstrap-Vue warn]: " + message);
}

/* harmony default export */ __webpack_exports__["a"] = (warn);

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = propsFactory;
/* unused harmony export props */
/* harmony export (immutable) */ __webpack_exports__["b"] = pickLinkProps;
/* unused harmony export omitLinkProps */
/* unused harmony export computed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_functional_data_merge__ = __webpack_require__(304);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */
function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    append: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String,
      default: 'active'
    },
    replace: {
      type: Boolean,
      default: false
    },
    routerTag: {
      type: String,
      default: 'a'
    },
    to: {
      type: [String, Object],
      default: null
    }
  };
}

var props = propsFactory();

function pickLinkProps(propsToPick) {
  var freshLinkProps = propsFactory();
  // Normalize everything to array.
  propsToPick = Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["b" /* concat */])(propsToPick);

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(freshLinkProps).reduce(function (memo, prop) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(propsToPick, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

function omitLinkProps(propsToOmit) {
  var freshLinkProps = propsFactory();
  // Normalize everything to array.
  propsToOmit = Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["b" /* concat */])(propsToOmit);

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(props).reduce(function (memo, prop) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(propsToOmit, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

var computed = {
  linkProps: function linkProps() {
    var linkProps = {};
    var propKeys = Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(props);

    for (var i = 0; i < propKeys.length; i++) {
      var prop = propKeys[i];
      // Computed Vue getters are bound to the instance.
      linkProps[prop] = this[prop];
    }

    return linkProps;
  }
};

function computeTag(props, parent) {
  return Boolean(parent.$router) && props.to && !props.disabled ? 'router-link' : 'a';
}

function computeHref(_ref, tag) {
  var disabled = _ref.disabled,
      href = _ref.href,
      to = _ref.to;

  // We've already checked the parent.$router in computeTag,
  // so router-link means live router.
  // When deferring to Vue Router's router-link,
  // don't use the href attr at all.
  // Must return undefined for router-link to populate href.
  if (tag === 'router-link') return void 0;
  // If href explicitly provided
  if (href) return href;
  // Reconstruct href when `to` used, but no router
  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (typeof to === 'string') return to;
    // Fallback to `to.path` prop (if `to` is an object)
    if ((typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && typeof to.path === 'string') return to.path;
  }
  // If nothing is provided use '#'
  return '#';
}

function computeRel(_ref2) {
  var target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && rel === null) {
    return 'noopener';
  }
  return rel || null;
}

function clickHandlerFactory(_ref3) {
  var disabled = _ref3.disabled,
      tag = _ref3.tag,
      href = _ref3.href,
      suppliedHandler = _ref3.suppliedHandler,
      parent = _ref3.parent;

  var isRouterLink = tag === 'router-link';

  return function onClick(e) {
    if (disabled && e instanceof Event) {
      // Stop event from bubbling up.
      e.stopPropagation();
      // Kill the event loop attached to this specific EventTarget.
      e.stopImmediatePropagation();
    } else {
      parent.$root.$emit('clicked::link', e);

      if (isRouterLink && e.target.__vue__) {
        e.target.__vue__.$emit('click', e);
      }
      if (typeof suppliedHandler === 'function') {
        suppliedHandler.apply(undefined, arguments);
      }
    }

    if (!isRouterLink && href === '#' || disabled) {
      // Stop scroll-to-top behavior or navigation.
      e.preventDefault();
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: propsFactory(),
  render: function render(h, _ref4) {
    var props = _ref4.props,
        data = _ref4.data,
        parent = _ref4.parent,
        children = _ref4.children;

    var tag = computeTag(props, parent);
    var rel = computeRel(props);
    var href = computeHref(props, tag);
    var eventType = tag === 'router-link' ? 'nativeOn' : 'on';
    var suppliedHandler = (data[eventType] || {}).click;
    var handlers = { click: clickHandlerFactory({ tag: tag, href: href, disabled: props.disabled, suppliedHandler: suppliedHandler, parent: parent }) };

    var componentData = Object(__WEBPACK_IMPORTED_MODULE_2_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: [props.active ? props.exact ? props.exactActiveClass : props.activeClass : null, { disabled: props.disabled }],
      attrs: {
        rel: rel,
        href: href,
        target: props.target,
        tabindex: props.disabled ? '-1' : data.attrs ? data.attrs.tabindex : null,
        'aria-disabled': tag === 'a' && props.disabled ? 'true' : null
      },
      props: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* assign */])(props, { tag: props.routerTag })
    });

    // If href prop exists on router-link (even undefined or null) it fails working on SSR
    if (!componentData.attrs.href) {
      delete componentData.attrs.href;
    }

    // We want to overwrite any click handler since our callback
    // will invoke the supplied handler if !props.disabled
    componentData[eventType] = Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* assign */])(componentData[eventType] || {}, handlers);

    return h(tag, componentData, children);
  }
});

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true or 'valid' for is-valid
 *  - false or 'invalid' for is-invalid
 *  - null (or empty string) for no contextual state
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    state: {
      // true/'valid', false/'invalid', '',null
      type: [Boolean, String],
      default: null
    }
  },
  computed: {
    computedState: function computedState() {
      var state = this.state;
      if (state === true || state === 'valid') {
        return true;
      } else if (state === false || state === 'invalid') {
        return false;
      }
      return null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;
      if (state === true) {
        return 'is-valid';
      } else if (state === false) {
        return 'is-invalid';
      }
      return null;
    }
  }
});

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    name: {
      type: String
    },
    id: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Key Codes (events)
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35
});

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pluckProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(334);




/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object.
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */
function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */];

  return (Object(__WEBPACK_IMPORTED_MODULE_1__array__["d" /* isArray */])(keysToPluck) ? keysToPluck.slice() : Object(__WEBPACK_IMPORTED_MODULE_0__object__["e" /* keys */])(keysToPluck)).reduce(function (memo, prop) {
    // eslint-disable-next-line no-sequences
    return memo[transformFn(prop)] = objToPluck[prop], memo;
  }, {});
}

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-" + this.size : null];
    },
    sizeBtnClass: function sizeBtnClass() {
      return [this.size ? "btn-" + this.size : null];
    }
  }
});

/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observeDOM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(308);



/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [opts={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */
function observeDOM(el, callback, opts) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var eventListenerSupported = window.addEventListener;

  // Handle case where we might be passed a vue instance
  el = el ? el.$el || el : null;
  /* istanbul ignore next: dificult to test in JSDOM */
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["l" /* isElement */])(el)) {
    // We can't observe somthing that isn't an element
    return null;
  }

  var obs = null;

  /* istanbul ignore next: dificult to test in JSDOM */
  if (MutationObserver) {
    // Define a new observer
    obs = new MutationObserver(function (mutations) {
      var changed = false;
      // A Mutation can contain several change records, so we loop through them to see what has changed.
      // We break out of the loop early if any "significant" change has been detected
      for (var i = 0; i < mutations.length && !changed; i++) {
        // The muttion record
        var mutation = mutations[i];
        // Mutation Type
        var type = mutation.type;
        // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)
        var target = mutation.target;
        if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
          // We ignore nodes that are not TEXt (i.e. comments, etc) as they don't change layout
          changed = true;
        } else if (type === 'attributes') {
          changed = true;
        } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
          // This includes HTMLElement and Text Nodes being added/removed/re-arranged
          changed = true;
        }
      }
      if (changed) {
        // We only call the callback if a change that could affect layout/size truely happened.
        callback();
      }
    });

    // Have the observer observe foo for changes in children, etc
    obs.observe(el, Object(__WEBPACK_IMPORTED_MODULE_0__object__["a" /* assign */])({ childList: true, subtree: true }, opts));
  } else if (eventListenerSupported) {
    // Legacy interface. most likely not used in modern browsers
    el.addEventListener('DOMNodeInserted', callback, false);
    el.addEventListener('DOMNodeRemoved', callback, false);
  }

  // We return a reference to the observer so that obs.disconnect() can be called if necessary
  // To reduce overhead when the root element is hiiden
  return obs;
}

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array__ = __webpack_require__(307);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */

var BVRL = '__BV_root_listeners__';

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    /**
         * Safely register event listeners on the root Vue node.
         * While Vue automatically removes listeners for individual components,
         * when a component registers a listener on root and is destroyed,
         * this orphans a callback because the node is gone,
         * but the root does not clear the callback.
         *
         * This adds a non-reactive prop to a vm on the fly
         * in order to avoid object observation and its performance costs
         * to something that needs no reactivity.
         * It should be highly unlikely there are any naming collisions.
         * @param {string} event
         * @param {function} callback
         * @chainable
         */
    listenOnRoot: function listenOnRoot(event, callback) {
      if (!this[BVRL] || !Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["d" /* isArray */])(this[BVRL])) {
        this[BVRL] = [];
      }
      this[BVRL].push({ event: event, callback: callback });
      this.$root.$on(event, callback);
      return this;
    },


    /**
         * Convenience method for calling vm.$emit on vm.$root.
         * @param {string} event
         * @param {*} args
         * @chainable
         */
    emitOnRoot: function emitOnRoot(event) {
      var _$root;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_$root = this.$root).$emit.apply(_$root, [event].concat(_toConsumableArray(args)));
      return this;
    }
  },

  beforeDestroy: function beforeDestroy() {
    if (this[BVRL] && Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["d" /* isArray */])(this[BVRL])) {
      while (this[BVRL].length > 0) {
        // shift to process in order
        var _BVRL$shift = this[BVRL].shift(),
            event = _BVRL$shift.event,
            callback = _BVRL$shift.callback;

        this.$root.$off(event, callback);
      }
    }
  }
});

/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    custom: function custom() {
      return !this.plain;
    }
  },
  props: {
    plain: {
      type: Boolean,
      default: false
    }
  }
});

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prefixPropName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upper_first__ = __webpack_require__(339);


/**
 * @param {string} prefix
 * @param {string} value
 */
function prefixPropName(prefix, value) {
  return prefix + Object(__WEBPACK_IMPORTED_MODULE_0__upper_first__["a" /* default */])(value);
}

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = copyProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(334);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





/**
 * @param {[]|{}} props
 * @param {Function} transformFn
 */
function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */];

  if (Object(__WEBPACK_IMPORTED_MODULE_0__array__["d" /* isArray */])(props)) {
    return props.map(transformFn);
  }
  // Props as an object.
  var copied = {};

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if ((typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
        copied[transformFn(prop)] = Object(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* assign */])({}, props[prop]);
      } else {
        copied[transformFn(prop)] = props[prop];
      }
    }
  }

  return copied;
}

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    bgVariant: {
      type: String,
      default: null
    },
    borderVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    }
  }
});

/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Close'
  },
  textVariant: {
    type: String,
    default: null
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        slots = _ref.slots;

    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, 'text-' + props.textVariant, props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(e) {
          // Ensure click on button HTML content is also disabled
          if (props.disabled && e instanceof Event) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      }
      // Careful not to override the slot with innerHTML
    };if (!slots().default) {
      componentData.domProps = { innerHTML: '&times;' };
    }
    return h('button', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, componentData), slots().default);
  }
});

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_dom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__link_link__ = __webpack_require__(311);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  pressed: {
    // tri-state prop: true, false or null
    // => on, off, not a toggle
    type: Boolean,
    default: null
  }
};

var linkProps = Object(__WEBPACK_IMPORTED_MODULE_5__link_link__["c" /* propsFactory */])();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["e" /* keys */])(linkProps);

var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])(linkProps, btnProps);

function handleFocus(evt) {
  if (evt.type === 'focusin') {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom__["a" /* addClass */])(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_dom__["s" /* removeClass */])(evt.target, 'focus');
  }
}

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        children = _ref.children;

    var isLink = Boolean(props.href || props.to);
    var isToggle = typeof props.pressed === 'boolean';
    var on = {
      click: function click(e) {
        if (props.disabled && e instanceof Event) {
          e.stopPropagation();
          e.preventDefault();
        } else if (isToggle) {
          // Concat will normalize the value to an array
          // without double wrapping an array value in an array.
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_array__["b" /* concat */])(listeners['update:pressed']).forEach(function (fn) {
            if (typeof fn === 'function') {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (isToggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: [props.variant ? 'btn-' + props.variant : 'btn-secondary', (_ref2 = {}, _defineProperty(_ref2, 'btn-' + props.size, Boolean(props.size)), _defineProperty(_ref2, 'btn-block', props.block), _defineProperty(_ref2, 'disabled', props.disabled), _defineProperty(_ref2, 'active', props.pressed), _ref2)],
      props: isLink ? Object(__WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__["a" /* default */])(linkPropKeys, props) : null,
      attrs: {
        type: isLink ? null : props.type,
        disabled: isLink ? null : props.disabled,
        // Data attribute not used for js logic,
        // but only for BS4 style selectors.
        'data-toggle': isToggle ? 'button' : null,
        'aria-pressed': isToggle ? String(props.pressed) : null,
        // Tab index is used when the component becomes a link.
        // Links are tabable, but don't allow disabled,
        // so we mimic that functionality by disabling tabbing.
        tabindex: props.disabled && isLink ? '-1' : data.attrs ? data.attrs['tabindex'] : null
      },
      on: on
    };

    return h(isLink ? __WEBPACK_IMPORTED_MODULE_5__link_link__["a" /* default */] : 'button', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, componentData), children);
  }
});

/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return propsFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_group_text__ = __webpack_require__(326);



var propsFactory = function propsFactory(append) {
  return {
    id: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'div'
    },
    append: {
      type: Boolean,
      default: append
    },
    isText: {
      type: Boolean,
      default: false
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: propsFactory(false),
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'input-group-' + (props.append ? 'append' : 'prepend'),
      attrs: {
        id: props.id
      }
    }), props.isText ? [h(__WEBPACK_IMPORTED_MODULE_1__input_group_text__["a" /* default */], children)] : children);
  }
});

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  tag: {
    type: String,
    default: 'div'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: props,
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'input-group-text'
    }), children);
  }
});

/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// Blank image with fill template
var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>';

function makeBlankImgSrc(width, height, color) {
  var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', String(width)).replace('%{h}', String(height)).replace('%{f}', color));
  return 'data:image/svg+xml;charset=UTF-8,' + src;
}

var props = {
  src: {
    type: String,
    default: null
  },
  alt: {
    type: String,
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  block: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fluidGrow: {
    // Gives fluid images class `w-100` to make them grow to fit container
    type: Boolean,
    default: false
  },
  rounded: {
    // rounded can be:
    //   false: no rounding of corners
    //   true: slightly rounded corners
    //   'top': top corners rounded
    //   'right': right corners rounded
    //   'bottom': bottom corners rounded
    //   'left': left corners rounded
    //   'circle': circle/oval
    //   '0': force rounding off
    type: [Boolean, String],
    default: false
  },
  thumbnail: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  blank: {
    type: Boolean,
    default: false
  },
  blankColor: {
    type: String,
    default: 'transparent'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data;

    var src = props.src;
    var width = parseInt(props.width, 10) ? parseInt(props.width, 10) : null;
    var height = parseInt(props.height, 10) ? parseInt(props.height, 10) : null;
    var align = null;
    var block = props.block;
    if (props.blank) {
      if (!height && Boolean(width)) {
        height = width;
      } else if (!width && Boolean(height)) {
        width = height;
      }
      if (!width && !height) {
        width = 1;
        height = 1;
      }
      // Make a blank SVG image
      src = makeBlankImgSrc(width, height, props.blankColor || 'transparent');
    }
    if (props.left) {
      align = 'float-left';
    } else if (props.right) {
      align = 'float-right';
    } else if (props.center) {
      align = 'mx-auto';
      block = true;
    }
    return h('img', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      attrs: {
        'src': src,
        'alt': props.alt,
        'width': width ? String(width) : null,
        'height': height ? String(height) : null
      },
      class: (_class = {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || props.fluidGrow,
        'w-100': props.fluidGrow,
        'rounded': props.rounded === '' || props.rounded === true
      }, _defineProperty(_class, 'rounded-' + props.rounded, typeof props.rounded === 'string' && props.rounded !== ''), _defineProperty(_class, align, Boolean(align)), _defineProperty(_class, 'd-block', block), _class)
    }));
  }
});

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  tag: {
    type: String,
    default: 'div'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'form-row'
    }), children);
  }
});

/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_item__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_item_button__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_header__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_divider__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_plugins__ = __webpack_require__(305);







var components = {
  bDropdown: __WEBPACK_IMPORTED_MODULE_0__dropdown__["a" /* default */],
  bDd: __WEBPACK_IMPORTED_MODULE_0__dropdown__["a" /* default */],
  bDropdownItem: __WEBPACK_IMPORTED_MODULE_1__dropdown_item__["a" /* default */],
  bDdItem: __WEBPACK_IMPORTED_MODULE_1__dropdown_item__["a" /* default */],
  bDropdownItemButton: __WEBPACK_IMPORTED_MODULE_2__dropdown_item_button__["a" /* default */],
  bDropdownItemBtn: __WEBPACK_IMPORTED_MODULE_2__dropdown_item_button__["a" /* default */],
  bDdItemButton: __WEBPACK_IMPORTED_MODULE_2__dropdown_item_button__["a" /* default */],
  bDdItemBtn: __WEBPACK_IMPORTED_MODULE_2__dropdown_item_button__["a" /* default */],
  bDropdownHeader: __WEBPACK_IMPORTED_MODULE_3__dropdown_header__["a" /* default */],
  bDdHeader: __WEBPACK_IMPORTED_MODULE_3__dropdown_header__["a" /* default */],
  bDropdownDivider: __WEBPACK_IMPORTED_MODULE_4__dropdown_divider__["a" /* default */],
  bDdDivider: __WEBPACK_IMPORTED_MODULE_4__dropdown_divider__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_5__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_5__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(306);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BvEvent = function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor.
    if (!type) {
      throw new TypeError('Failed to construct \'' + this.constructor.name + '\'. 1 argument required, ' + arguments.length + ' given.');
    }
    // Assign defaults first, the eventInit,
    // and the type last so it can't be overwritten.
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["a" /* assign */])(this, BvEvent.defaults(), eventInit, { type: type });
    // Freeze some props as readonly, but leave them enumerable.
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["c" /* defineProperties */])(this, {
      type: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      cancelable: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      nativeEvent: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      target: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      relatedTarget: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])(),
      vueTarget: Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["f" /* readonlyDescriptor */])()
    });
    // Create a private variable using closure scoping.
    var defaultPrevented = false;
    // Recreate preventDefault method. One way setter.
    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    };
    // Create 'defaultPrevented' publicly accessible prop
    // that can only be altered by the preventDefault method.
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["d" /* defineProperty */])(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: 'defaults',
    value: function defaults() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null
      };
    }
  }]);

  return BvEvent;
}();

/* harmony default export */ __webpack_exports__["a"] = (BvEvent);

/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(306);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */
function looseEqual(a, b) {
  if (a === b) return true;
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Object(__WEBPACK_IMPORTED_MODULE_0__array__["d" /* isArray */])(a);
      var isArrayB = Object(__WEBPACK_IMPORTED_MODULE_0__array__["d" /* isArray */])(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object(__WEBPACK_IMPORTED_MODULE_1__object__["e" /* keys */])(a);
        var keysB = Object(__WEBPACK_IMPORTED_MODULE_1__object__["e" /* keys */])(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (looseEqual);

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_object__ = __webpack_require__(306);



function isObject(obj) {
  return obj && {}.toString.call(obj) === '[object Object]';
}

/* harmony default export */ __webpack_exports__["a"] = ({

  props: {
    options: {
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    valueField: {
      type: String,
      default: 'value'
    },
    textField: {
      type: String,
      default: 'text'
    },
    disabledField: {
      type: String,
      default: 'disabled'
    }
  },
  computed: {
    formOptions: function formOptions() {
      var options = this.options;

      var valueField = this.valueField;
      var textField = this.textField;
      var disabledField = this.disabledField;

      if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["d" /* isArray */])(options)) {
        // Normalize flat-ish arrays to Array of Objects
        return options.map(function (option) {
          if (isObject(option)) {
            return {
              value: option[valueField],
              text: String(option[textField]),
              disabled: option[disabledField] || false
            };
          }
          return {
            value: option,
            text: String(option),
            disabled: false
          };
        });
      } else {
        // options is Object
        // Normalize Objects to Array of Objects
        return Object(__WEBPACK_IMPORTED_MODULE_1__utils_object__["e" /* keys */])(options).map(function (key) {
          var option = options[key] || {};
          if (isObject(option)) {
            var value = option[valueField];
            var text = option[textField];
            return {
              value: typeof value === 'undefined' ? key : value,
              text: typeof text === 'undefined' ? key : String(text),
              disabled: option[disabledField] || false
            };
          }
          return {
            value: key,
            text: String(option),
            disabled: false
          };
        });
      }
    }
  }
});

/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bv_event_class__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom__ = __webpack_require__(308);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var NAME = 'tooltip';
var CLASS_PREFIX = 'bs-tooltip';
var BSCLS_PREFIX_REGEX = new RegExp('\\b' + CLASS_PREFIX + '\\S+', 'g');

var TRANSITION_DURATION = 150;

// Modal $root hidden event
var MODAL_CLOSE_EVENT = 'bv::modal::hidden';
// Modal container for appending tip/popover
var MODAL_CLASS = '.modal-content';

var AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOPLEFT: 'top',
  TOPRIGHT: 'top',
  RIGHTTOP: 'right',
  RIGHTBOTTOM: 'right',
  BOTTOMLEFT: 'bottom',
  BOTTOMRIGHT: 'bottom',
  LEFTTOP: 'left',
  LEFTBOTTOM: 'left'
};

var OffsetMap = {
  AUTO: 0,
  TOPLEFT: -1,
  TOP: 0,
  TOPRIGHT: +1,
  RIGHTTOP: -1,
  RIGHT: 0,
  RIGHTBOTTOM: +1,
  BOTTOMLEFT: -1,
  BOTTOM: 0,
  BOTTOMRIGHT: +1,
  LEFTTOP: -1,
  LEFT: 0,
  LEFTBOTTOM: +1
};

var HoverState = {
  SHOW: 'show',
  OUT: 'out'
};

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  TOOLTIP: '.tooltip',
  TOOLTIP_INNER: '.tooltip-inner',
  ARROW: '.arrow'

  // ESLINT: Not used
  // const Trigger = {
  //   HOVER: 'hover',
  //   FOCUS: 'focus',
  //   CLICK: 'click',
  //   BLUR: 'blur',
  //   MANUAL: 'manual'
  // }

};var Defaults = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  placement: 'top',
  offset: 0,
  arrowPadding: 6,
  container: false,
  fallbackPlacement: 'flip',
  callbacks: {},
  boundary: 'scrollParent'

  // Transition Event names
};var TransitionEndEvents = {
  WebkitTransition: ['webkitTransitionEnd'],
  MozTransition: ['transitionend'],
  OTransition: ['otransitionend', 'oTransitionEnd'],
  transition: ['transitionend']

  // Client Side Tip ID counter for aria-describedby attribute
  // Could use Alex's uid generator util
  // Each tooltip requires a unique client side ID
};var NEXTID = 1;
/* istanbul ignore next */
function generateId(name) {
  return '__BV_' + name + '_' + NEXTID++ + '__';
}

/*
 * ToolTip Class definition
 */
/* istanbul ignore next: difficult to test in Jest/JSDOM environment */

var ToolTip = function () {
  // Main constructor
  function ToolTip(element, config, $root) {
    _classCallCheck(this, ToolTip);

    // New tooltip object
    this.$isEnabled = true;
    this.$fadeTimeout = null;
    this.$hoverTimeout = null;
    this.$visibleInterval = null;
    this.$hoverState = '';
    this.$activeTrigger = {};
    this.$popper = null;
    this.$element = element;
    this.$tip = null;
    this.$id = generateId(this.constructor.NAME);
    this.$root = $root || null;
    this.$routeWatcher = null;
    // We use a bound version of the following handlers for root/modal listeners to maintain the 'this' context
    this.$forceHide = this.forceHide.bind(this);
    this.$doHide = this.doHide.bind(this);
    this.$doShow = this.doShow.bind(this);
    this.$doDisable = this.doDisable.bind(this);
    this.$doEnable = this.doEnable.bind(this);
    // Set the configuration
    this.updateConfig(config);
  }

  // NOTE: Overridden by PopOver class


  _createClass(ToolTip, [{
    key: 'updateConfig',


    // Update config
    value: function updateConfig(config) {
      // Merge config into defaults. We use "this" here because PopOver overrides Default
      var updatedConfig = Object(__WEBPACK_IMPORTED_MODULE_2__object__["a" /* assign */])({}, this.constructor.Default, config);

      // Sanitize delay
      if (config.delay && typeof config.delay === 'number') {
        updatedConfig.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      // Title for tooltip and popover
      if (config.title && typeof config.title === 'number') {
        updatedConfig.title = config.title.toString();
      }

      // Content only for popover
      if (config.content && typeof config.content === 'number') {
        updatedConfig.content = config.content.toString();
      }

      // Hide element original title if needed
      this.fixTitle();
      // Update the config
      this.$config = updatedConfig;
      // Stop/Restart listening
      this.unListen();
      this.listen();
    }

    // Destroy this instance

  }, {
    key: 'destroy',
    value: function destroy() {
      // Stop listening to trigger events
      this.unListen();
      // Disable while open listeners/watchers
      this.setWhileOpenListeners(false);
      // Clear any timeouts
      clearTimeout(this.$hoverTimeout);
      this.$hoverTimeout = null;
      clearTimeout(this.$fadeTimeout);
      this.$fadeTimeout = null;
      // Remove popper
      if (this.$popper) {
        this.$popper.destroy();
      }
      this.$popper = null;
      // Remove tip from document
      if (this.$tip && this.$tip.parentElement) {
        this.$tip.parentElement.removeChild(this.$tip);
      }
      this.$tip = null;
      // Null out other properties
      this.$id = null;
      this.$isEnabled = null;
      this.$root = null;
      this.$element = null;
      this.$config = null;
      this.$hoverState = null;
      this.$activeTrigger = null;
      this.$forceHide = null;
      this.$doHide = null;
      this.$doShow = null;
      this.$doDisable = null;
      this.$doEnable = null;
    }
  }, {
    key: 'enable',
    value: function enable() {
      // Create a non-cancelable BvEvent
      var enabledEvt = new __WEBPACK_IMPORTED_MODULE_1__bv_event_class__["a" /* default */]('enabled', {
        cancelable: false,
        target: this.$element,
        relatedTarget: null
      });
      this.$isEnabled = true;
      this.emitEvent(enabledEvt);
    }
  }, {
    key: 'disable',
    value: function disable() {
      // Create a non-cancelable BvEvent
      var disabledEvt = new __WEBPACK_IMPORTED_MODULE_1__bv_event_class__["a" /* default */]('disabled', {
        cancelable: false,
        target: this.$element,
        relatedTarget: null
      });
      this.$isEnabled = false;
      this.emitEvent(disabledEvt);
    }

    // Click toggler

  }, {
    key: 'toggle',
    value: function toggle(event) {
      if (!this.$isEnabled) {
        return;
      }
      if (event) {
        this.$activeTrigger.click = !this.$activeTrigger.click;

        if (this.isWithActiveTrigger()) {
          this.enter(null);
        } else {
          this.leave(null);
        }
      } else {
        if (Object(__WEBPACK_IMPORTED_MODULE_4__dom__["j" /* hasClass */])(this.getTipElement(), ClassName.SHOW)) {
          this.leave(null);
        } else {
          this.enter(null);
        }
      }
    }

    // Show tooltip

  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (!document.body.contains(this.$element) || !Object(__WEBPACK_IMPORTED_MODULE_4__dom__["m" /* isVisible */])(this.$element)) {
        // If trigger element isn't in the DOM or is not visible
        return;
      }
      // Build tooltip element (also sets this.$tip)
      var tip = this.getTipElement();
      this.fixTitle();
      this.setContent(tip);
      if (!this.isWithContent(tip)) {
        // if No content, don't bother showing
        this.$tip = null;
        return;
      }

      // Set ID on tip and aria-describedby on element
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["v" /* setAttr */])(tip, 'id', this.$id);
      this.addAriaDescribedby();

      // Set animation on or off
      if (this.$config.animation) {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["a" /* addClass */])(tip, ClassName.FADE);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, ClassName.FADE);
      }

      var placement = this.getPlacement();
      var attachment = this.constructor.getAttachment(placement);
      this.addAttachmentClass(attachment);

      // Create a cancelable BvEvent
      var showEvt = new __WEBPACK_IMPORTED_MODULE_1__bv_event_class__["a" /* default */]('show', {
        cancelable: true,
        target: this.$element,
        relatedTarget: tip
      });
      this.emitEvent(showEvt);
      if (showEvt.defaultPrevented) {
        // Don't show if event cancelled
        this.$tip = null;
        return;
      }

      // Insert tooltip if needed
      var container = this.getContainer();
      if (!document.body.contains(tip)) {
        container.appendChild(tip);
      }

      // Refresh popper
      this.removePopper();
      this.$popper = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["default"](this.$element, tip, this.getPopperConfig(placement, tip));

      // Transitionend Callback
      var complete = function complete() {
        if (_this.$config.animation) {
          _this.fixTransition(tip);
        }
        var prevHoverState = _this.$hoverState;
        _this.$hoverState = null;
        if (prevHoverState === HoverState.OUT) {
          _this.leave(null);
        }
        // Create a non-cancelable BvEvent
        var shownEvt = new __WEBPACK_IMPORTED_MODULE_1__bv_event_class__["a" /* default */]('shown', {
          cancelable: false,
          target: _this.$element,
          relatedTarget: tip
        });
        _this.emitEvent(shownEvt);
      };

      // Enable while open listeners/watchers
      this.setWhileOpenListeners(true);

      // Show tip
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["a" /* addClass */])(tip, ClassName.SHOW);

      // Start the transition/animation
      this.transitionOnce(tip, complete);
    }

    // handler for periodic visibility check

  }, {
    key: 'visibleCheck',
    value: function visibleCheck(on) {
      var _this2 = this;

      clearInterval(this.$visibleInterval);
      this.$visibleInterval = null;
      if (on) {
        this.$visibleInterval = setInterval(function () {
          var tip = _this2.getTipElement();
          if (tip && !Object(__WEBPACK_IMPORTED_MODULE_4__dom__["m" /* isVisible */])(_this2.$element) && Object(__WEBPACK_IMPORTED_MODULE_4__dom__["j" /* hasClass */])(tip, ClassName.SHOW)) {
            // Element is no longer visible, so force-hide the tooltip
            _this2.forceHide();
          }
        }, 100);
      }
    }
  }, {
    key: 'setWhileOpenListeners',
    value: function setWhileOpenListeners(on) {
      // Modal close events
      this.setModalListener(on);
      // Periodic $element visibility check
      // For handling when tip is in <keepalive>, tabs, carousel, etc
      this.visibleCheck(on);
      // Route change events
      this.setRouteWatcher(on);
      // Ontouch start listeners
      this.setOnTouchStartListener(on);
      if (on && /(focus|blur)/.test(this.$config.trigger)) {
        // If focus moves between trigger element and tip container, dont close
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(this.$tip, 'focusout', this);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["c" /* eventOff */])(this.$tip, 'focusout', this);
      }
    }

    // force hide of tip (internal method)

  }, {
    key: 'forceHide',
    value: function forceHide() {
      if (!this.$tip || !Object(__WEBPACK_IMPORTED_MODULE_4__dom__["j" /* hasClass */])(this.$tip, ClassName.SHOW)) {
        return;
      }
      // Disable while open listeners/watchers
      this.setWhileOpenListeners(false);
      // Clear any hover enter/leave event
      clearTimeout(this.$hoverTimeout);
      this.$hoverTimeout = null;
      this.$hoverState = '';
      // Hide the tip
      this.hide(null, true);
    }

    // Hide tooltip

  }, {
    key: 'hide',
    value: function hide(callback, force) {
      var _this3 = this;

      var tip = this.$tip;
      if (!tip) {
        return;
      }

      // Create a canelable BvEvent
      var hideEvt = new __WEBPACK_IMPORTED_MODULE_1__bv_event_class__["a" /* default */]('hide', {
        // We disable cancelling if force is true
        cancelable: !force,
        target: this.$element,
        relatedTarget: tip
      });
      this.emitEvent(hideEvt);
      if (hideEvt.defaultPrevented) {
        // Don't hide if event cancelled
        return;
      }

      // Transitionend Callback
      /* istanbul ignore next */
      var complete = function complete() {
        if (_this3.$hoverState !== HoverState.SHOW && tip.parentNode) {
          // Remove tip from dom, and force recompile on next show
          tip.parentNode.removeChild(tip);
          _this3.removeAriaDescribedby();
          _this3.removePopper();
          _this3.$tip = null;
        }
        if (callback) {
          callback();
        }
        // Create a non-cancelable BvEvent
        var hiddenEvt = new __WEBPACK_IMPORTED_MODULE_1__bv_event_class__["a" /* default */]('hidden', {
          cancelable: false,
          target: _this3.$element,
          relatedTarget: null
        });
        _this3.emitEvent(hiddenEvt);
      };

      // Disable while open listeners/watchers
      this.setWhileOpenListeners(false);

      // If forced close, disable animation
      if (force) {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, ClassName.FADE);
      }
      // Hide tip
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, ClassName.SHOW);

      this.$activeTrigger.click = false;
      this.$activeTrigger.focus = false;
      this.$activeTrigger.hover = false;

      // Start the hide transition
      this.transitionOnce(tip, complete);

      this.$hoverState = '';
    }
  }, {
    key: 'emitEvent',
    value: function emitEvent(evt) {
      var evtName = evt.type;
      if (this.$root && this.$root.$emit) {
        // Emit an event on $root
        this.$root.$emit('bv::' + this.constructor.NAME + '::' + evtName, evt);
      }
      var callbacks = this.$config.callbacks || {};
      if (typeof callbacks[evtName] === 'function') {
        callbacks[evtName](evt);
      }
    }
  }, {
    key: 'getContainer',
    value: function getContainer() {
      var container = this.$config.container;
      var body = document.body;
      // If we are in a modal, we append to the modal instead of body, unless a container is specified
      return container === false ? Object(__WEBPACK_IMPORTED_MODULE_4__dom__["b" /* closest */])(MODAL_CLASS, this.$element) || body : Object(__WEBPACK_IMPORTED_MODULE_4__dom__["t" /* select */])(container, body) || body;
    }

    // Will be overritten by popover if needed

  }, {
    key: 'addAriaDescribedby',
    value: function addAriaDescribedby() {
      // Add aria-describedby on trigger element, without removing any other IDs
      var desc = Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(this.$element, 'aria-describedby') || '';
      desc = desc.split(/\s+/).concat(this.$id).join(' ').trim();
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["v" /* setAttr */])(this.$element, 'aria-describedby', desc);
    }

    // Will be overritten by popover if needed

  }, {
    key: 'removeAriaDescribedby',
    value: function removeAriaDescribedby() {
      var _this4 = this;

      var desc = Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(this.$element, 'aria-describedby') || '';
      desc = desc.split(/\s+/).filter(function (d) {
        return d !== _this4.$id;
      }).join(' ').trim();
      if (desc) {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["v" /* setAttr */])(this.$element, 'aria-describedby', desc);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["r" /* removeAttr */])(this.$element, 'aria-describedby');
      }
    }
  }, {
    key: 'removePopper',
    value: function removePopper() {
      if (this.$popper) {
        this.$popper.destroy();
      }
      this.$popper = null;
    }

    /* istanbul ignore next */

  }, {
    key: 'transitionOnce',
    value: function transitionOnce(tip, complete) {
      var _this5 = this;

      var transEvents = this.getTransitionEndEvents();
      var called = false;
      clearTimeout(this.$fadeTimeout);
      this.$fadeTimeout = null;
      var fnOnce = function fnOnce() {
        if (called) {
          return;
        }
        called = true;
        clearTimeout(_this5.$fadeTimeout);
        _this5.$fadeTimeout = null;
        transEvents.forEach(function (evtName) {
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["c" /* eventOff */])(tip, evtName, fnOnce);
        });
        // Call complete callback
        complete();
      };
      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom__["j" /* hasClass */])(tip, ClassName.FADE)) {
        transEvents.forEach(function (evtName) {
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(tip, evtName, fnOnce);
        });
        // Fallback to setTimeout
        this.$fadeTimeout = setTimeout(fnOnce, TRANSITION_DURATION);
      } else {
        fnOnce();
      }
    }

    // What transitionend event(s) to use? (returns array of event names)

  }, {
    key: 'getTransitionEndEvents',
    value: function getTransitionEndEvents() {
      for (var name in TransitionEndEvents) {
        if (this.$element.style[name] !== undefined) {
          return TransitionEndEvents[name];
        }
      }
      // fallback
      return [];
    }
  }, {
    key: 'update',
    value: function update() {
      if (this.$popper !== null) {
        this.$popper.scheduleUpdate();
      }
    }

    // NOTE: Overridden by PopOver class

  }, {
    key: 'isWithContent',
    value: function isWithContent(tip) {
      tip = tip || this.$tip;
      if (!tip) {
        return false;
      }
      return Boolean((Object(__WEBPACK_IMPORTED_MODULE_4__dom__["t" /* select */])(Selector.TOOLTIP_INNER, tip) || {}).innerHTML);
    }

    // NOTE: Overridden by PopOver class

  }, {
    key: 'addAttachmentClass',
    value: function addAttachmentClass(attachment) {
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["a" /* addClass */])(this.getTipElement(), CLASS_PREFIX + '-' + attachment);
    }
  }, {
    key: 'getTipElement',
    value: function getTipElement() {
      if (!this.$tip) {
        // Try and compile user supplied template, or fallback to default template
        this.$tip = this.compileTemplate(this.$config.template) || this.compileTemplate(this.constructor.Default.template);
      }
      // Add tab index so tip can be focused, and to allow it to be set as relatedTargt in focusin/out events
      this.$tip.tabIndex = -1;
      return this.$tip;
    }
  }, {
    key: 'compileTemplate',
    value: function compileTemplate(html) {
      if (!html || typeof html !== 'string') {
        return null;
      }
      var div = document.createElement('div');
      div.innerHTML = html.trim();
      var node = div.firstElementChild ? div.removeChild(div.firstElementChild) : null;
      div = null;
      return node;
    }

    // NOTE: Overridden by PopOver class

  }, {
    key: 'setContent',
    value: function setContent(tip) {
      this.setElementContent(Object(__WEBPACK_IMPORTED_MODULE_4__dom__["t" /* select */])(Selector.TOOLTIP_INNER, tip), this.getTitle());
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, ClassName.FADE);
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, ClassName.SHOW);
    }
  }, {
    key: 'setElementContent',
    value: function setElementContent(container, content) {
      if (!container) {
        // If container element doesn't exist, just return
        return;
      }
      var allowHtml = this.$config.html;
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && content.nodeType) {
        // content is a DOM node
        if (allowHtml) {
          if (content.parentElement !== container) {
            container.innerHtml = '';
            container.appendChild(content);
          }
        } else {
          container.innerText = content.innerText;
        }
      } else {
        // We have a plain HTML string or Text
        container[allowHtml ? 'innerHTML' : 'innerText'] = content;
      }
    }

    // NOTE: Overridden by PopOver class

  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = this.$config.title || '';
      if (typeof title === 'function') {
        // Call the function to get the title value
        title = title(this.$element);
      }
      if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a DOM node, but without inner content, so just return empty string
        title = '';
      }
      if (typeof title === 'string') {
        title = title.trim();
      }
      if (!title) {
        // If an explicit title is not given, try element's title atributes
        title = Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(this.$element, 'title') || Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(this.$element, 'data-original-title') || '';
        title = title.trim();
      }

      return title;
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this6 = this;

      var triggers = this.$config.trigger.trim().split(/\s+/);
      var el = this.$element;

      // Listen for global show/hide events
      this.setRootListener(true);

      // Using 'this' as the handler will get automagically directed to this.handleEvent
      // And maintain our binding to 'this'
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'click', _this6);
        } else if (trigger === 'focus') {
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'focusin', _this6);
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'focusout', _this6);
        } else if (trigger === 'blur') {
          // Used to close $tip when element looses focus
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'focusout', _this6);
        } else if (trigger === 'hover') {
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'mouseenter', _this6);
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'mouseleave', _this6);
        }
      }, this);
    }
  }, {
    key: 'unListen',
    value: function unListen() {
      var _this7 = this;

      var events = ['click', 'focusin', 'focusout', 'mouseenter', 'mouseleave'];
      // Using "this" as the handler will get automagically directed to this.handleEvent
      events.forEach(function (evt) {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["c" /* eventOff */])(_this7.$element, evt, _this7);
      }, this);

      // Stop listening for global show/hide/enable/disable events
      this.setRootListener(false);
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(e) {
      // This special method allows us to use "this" as the event handlers
      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom__["k" /* isDisabled */])(this.$element)) {
        // If disabled, don't do anything. Note: if tip is shown before element gets
        // disabled, then tip not close until no longer disabled or forcefully closed.
        return;
      }
      if (!this.$isEnabled) {
        // If not enable
        return;
      }
      var type = e.type;
      var target = e.target;
      var relatedTarget = e.relatedTarget;
      var $element = this.$element;
      var $tip = this.$tip;
      if (type === 'click') {
        this.toggle(e);
      } else if (type === 'focusin' || type === 'mouseenter') {
        this.enter(e);
      } else if (type === 'focusout') {
        // target is the element which is loosing focus
        // And relatedTarget is the element gaining focus
        if ($tip && $element && $element.contains(target) && $tip.contains(relatedTarget)) {
          // If focus moves from $element to $tip, don't trigger a leave
          return;
        }
        if ($tip && $element && $tip.contains(target) && $element.contains(relatedTarget)) {
          // If focus moves from $tip to $element, don't trigger a leave
          return;
        }
        if ($tip && $tip.contains(target) && $tip.contains(relatedTarget)) {
          // If focus moves within $tip, don't trigger a leave
          return;
        }
        if ($element && $element.contains(target) && $element.contains(relatedTarget)) {
          // If focus moves within $element, don't trigger a leave
          return;
        }
        // Otherwise trigger a leave
        this.leave(e);
      } else if (type === 'mouseleave') {
        this.leave(e);
      }
    }

    /* istanbul ignore next */

  }, {
    key: 'setRouteWatcher',
    value: function setRouteWatcher(on) {
      var _this8 = this;

      if (on) {
        this.setRouteWatcher(false);
        if (this.$root && Boolean(this.$root.$route)) {
          this.$routeWatcher = this.$root.$watch('$route', function (newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            // If route has changed, we force hide the tooltip/popover
            _this8.forceHide();
          });
        }
      } else {
        if (this.$routeWatcher) {
          // cancel the route watcher by calling hte stored reference
          this.$routeWatcher();
          this.$routeWatcher = null;
        }
      }
    }

    /* istanbul ignore next */

  }, {
    key: 'setModalListener',
    value: function setModalListener(on) {
      var modal = Object(__WEBPACK_IMPORTED_MODULE_4__dom__["b" /* closest */])(MODAL_CLASS, this.$element);
      if (!modal) {
        // If we are not in a modal, don't worry. be happy
        return;
      }
      // We can listen for modal hidden events on $root
      if (this.$root) {
        this.$root[on ? '$on' : '$off'](MODAL_CLOSE_EVENT, this.$forceHide);
      }
    }

    /* istanbul ignore next */

  }, {
    key: 'setRootListener',
    value: function setRootListener(on) {
      // Listen for global 'bv::{hide|show}::{tooltip|popover}' hide request event
      if (this.$root) {
        this.$root[on ? '$on' : '$off']('bv::hide::' + this.constructor.NAME, this.$doHide);
        this.$root[on ? '$on' : '$off']('bv::show::' + this.constructor.NAME, this.$doShow);
        this.$root[on ? '$on' : '$off']('bv::disable::' + this.constructor.NAME, this.$doDisable);
        this.$root[on ? '$on' : '$off']('bv::enable::' + this.constructor.NAME, this.$doEnable);
      }
    }
  }, {
    key: 'doHide',
    value: function doHide(id) {
      // Programmatically hide tooltip or popover
      if (!id) {
        // Close all tooltips or popovers
        this.forceHide();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Close this specific tooltip or popover
        this.hide();
      }
    }
  }, {
    key: 'doShow',
    value: function doShow(id) {
      // Programmatically show tooltip or popover
      if (!id) {
        // Open all tooltips or popovers
        this.show();
      } else if (id && this.$element && this.$element.id && this.$element.id === id) {
        // Show this specific tooltip or popover
        this.show();
      }
    }
  }, {
    key: 'doDisable',
    value: function doDisable(id) {
      // Programmatically disable tooltip or popover
      if (!id) {
        // Disable all tooltips or popovers
        this.disable();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Disable this specific tooltip or popover
        this.disable();
      }
    }
  }, {
    key: 'doEnable',
    value: function doEnable(id) {
      // Programmatically enable tooltip or popover
      if (!id) {
        // Enable all tooltips or popovers
        this.enable();
      } else if (this.$element && this.$element.id && this.$element.id === id) {
        // Enable this specific tooltip or popover
        this.enable();
      }
    }

    /* istanbul ignore next */

  }, {
    key: 'setOnTouchStartListener',
    value: function setOnTouchStartListener(on) {
      var _this9 = this;

      // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
      if ('ontouchstart' in document.documentElement) {
        Object(__WEBPACK_IMPORTED_MODULE_3__array__["c" /* from */])(document.body.children).forEach(function (el) {
          if (on) {
            Object(__WEBPACK_IMPORTED_MODULE_4__dom__["d" /* eventOn */])(el, 'mouseover', _this9._noop);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_4__dom__["c" /* eventOff */])(el, 'mouseover', _this9._noop);
          }
        });
      }
    }

    /* istanbul ignore next */

  }, {
    key: '_noop',
    value: function _noop() {
      // Empty noop handler for ontouchstart devices
    }
  }, {
    key: 'fixTitle',
    value: function fixTitle() {
      var el = this.$element;
      var titleType = _typeof(Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(el, 'data-original-title'));
      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(el, 'title') || titleType !== 'string') {
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["v" /* setAttr */])(el, 'data-original-title', Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(el, 'title') || '');
        Object(__WEBPACK_IMPORTED_MODULE_4__dom__["v" /* setAttr */])(el, 'title', '');
      }
    }

    // Enter handler
    /* istanbul ignore next */

  }, {
    key: 'enter',
    value: function enter(e) {
      var _this10 = this;

      if (e) {
        this.$activeTrigger[e.type === 'focusin' ? 'focus' : 'hover'] = true;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom__["j" /* hasClass */])(this.getTipElement(), ClassName.SHOW) || this.$hoverState === HoverState.SHOW) {
        this.$hoverState = HoverState.SHOW;
        return;
      }
      clearTimeout(this.$hoverTimeout);
      this.$hoverState = HoverState.SHOW;
      if (!this.$config.delay || !this.$config.delay.show) {
        this.show();
        return;
      }
      this.$hoverTimeout = setTimeout(function () {
        if (_this10.$hoverState === HoverState.SHOW) {
          _this10.show();
        }
      }, this.$config.delay.show);
    }

    // Leave handler
    /* istanbul ignore next */

  }, {
    key: 'leave',
    value: function leave(e) {
      var _this11 = this;

      if (e) {
        this.$activeTrigger[e.type === 'focusout' ? 'focus' : 'hover'] = false;
        if (e.type === 'focusout' && /blur/.test(this.$config.trigger)) {
          // Special case for `blur`: we clear out the other triggers
          this.$activeTrigger.click = false;
          this.$activeTrigger.hover = false;
        }
      }
      if (this.isWithActiveTrigger()) {
        return;
      }
      clearTimeout(this.$hoverTimeout);
      this.$hoverState = HoverState.OUT;
      if (!this.$config.delay || !this.$config.delay.hide) {
        this.hide();
        return;
      }
      this.$hoverTimeout = setTimeout(function () {
        if (_this11.$hoverState === HoverState.OUT) {
          _this11.hide();
        }
      }, this.$config.delay.hide);
    }
  }, {
    key: 'getPopperConfig',
    value: function getPopperConfig(placement, tip) {
      var _this12 = this;

      return {
        placement: this.constructor.getAttachment(placement),
        modifiers: {
          offset: { offset: this.getOffset(placement, tip) },
          flip: { behavior: this.$config.fallbackPlacement },
          arrow: { element: '.arrow' },
          preventOverflow: { boundariesElement: this.$config.boundary }
        },
        onCreate: function onCreate(data) {
          // Handle flipping arrow classes
          if (data.originalPlacement !== data.placement) {
            _this12.handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          // Handle flipping arrow classes
          _this12.handlePopperPlacementChange(data);
        }
      };
    }
  }, {
    key: 'getOffset',
    value: function getOffset(placement, tip) {
      if (!this.$config.offset) {
        var arrow = Object(__WEBPACK_IMPORTED_MODULE_4__dom__["t" /* select */])(Selector.ARROW, tip);
        var arrowOffset = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_4__dom__["h" /* getCS */])(arrow).width) + parseFloat(this.$config.arrowPadding);
        switch (OffsetMap[placement.toUpperCase()]) {
          case +1:
            return '+50%p - ' + arrowOffset + 'px';
          case -1:
            return '-50%p + ' + arrowOffset + 'px';
          default:
            return 0;
        }
      }
      return this.$config.offset;
    }
  }, {
    key: 'getPlacement',
    value: function getPlacement() {
      var placement = this.$config.placement;
      if (typeof placement === 'function') {
        return placement.call(this, this.$tip, this.$element);
      }
      return placement;
    }
  }, {
    key: 'isWithActiveTrigger',
    value: function isWithActiveTrigger() {
      for (var trigger in this.$activeTrigger) {
        if (this.$activeTrigger[trigger]) {
          return true;
        }
      }
      return false;
    }

    // NOTE: Overridden by PopOver class

  }, {
    key: 'cleanTipClass',
    value: function cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, cls);
        });
      }
    }
  }, {
    key: 'handlePopperPlacementChange',
    value: function handlePopperPlacementChange(data) {
      this.cleanTipClass();
      this.addAttachmentClass(this.constructor.getAttachment(data.placement));
    }
  }, {
    key: 'fixTransition',
    value: function fixTransition(tip) {
      var initConfigAnimation = this.$config.animation || false;
      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom__["e" /* getAttr */])(tip, 'x-placement') !== null) {
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_4__dom__["s" /* removeClass */])(tip, ClassName.FADE);
      this.$config.animation = false;
      this.hide();
      this.show();
      this.$config.animation = initConfigAnimation;
    }
  }], [{
    key: 'getAttachment',
    value: function getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    }
  }, {
    key: 'Default',
    get: function get() {
      return Defaults;
    }

    // NOTE: Overridden by PopOver class

  }, {
    key: 'NAME',
    get: function get() {
      return NAME;
    }
  }]);

  return ToolTip;
}();

/* harmony default export */ __webpack_exports__["a"] = (ToolTip);

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
function identity(x) {
  return x;
}

/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_link__ = __webpack_require__(336);




var props = Object(__WEBPACK_IMPORTED_MODULE_1__utils_object__["a" /* assign */])({}, __WEBPACK_IMPORTED_MODULE_2__breadcrumb_link__["b" /* props */], {
  text: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h('li', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'breadcrumb-item',
      class: { active: props.active },
      attrs: { role: 'presentation' }
    }), [h(__WEBPACK_IMPORTED_MODULE_2__breadcrumb_link__["a" /* default */], { props: props }, children)]);
  }
});

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__link_link__ = __webpack_require__(311);





var props = Object(__WEBPACK_IMPORTED_MODULE_2__utils_object__["a" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_3__link_link__["c" /* propsFactory */])(), {
  text: {
    type: String,
    default: null
  },
  active: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: '#'
  },
  ariaCurrent: {
    type: String,
    default: 'location'
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var suppliedProps = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var tag = suppliedProps.active ? 'span' : __WEBPACK_IMPORTED_MODULE_3__link_link__["a" /* default */];

    var componentData = { props: Object(__WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__["a" /* default */])(props, suppliedProps) };
    if (suppliedProps.active) {
      componentData.attrs = { 'aria-current': suppliedProps.ariaCurrent };
    } else {
      componentData.attrs = { href: suppliedProps.href };
    }

    return h(tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, componentData), children || suppliedProps.text);
  }
});

/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_group_addon__ = __webpack_require__(325);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: Object(__WEBPACK_IMPORTED_MODULE_0__input_group_addon__["b" /* propsFactory */])(false),
  render: __WEBPACK_IMPORTED_MODULE_0__input_group_addon__["a" /* default */].render
});

/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_group_addon__ = __webpack_require__(325);


/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: Object(__WEBPACK_IMPORTED_MODULE_0__input_group_addon__["b" /* propsFactory */])(true),
  render: __WEBPACK_IMPORTED_MODULE_0__input_group_addon__["a" /* default */].render
});

/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = upperFirst;
/**
 * @param {string} str
 */
function upperFirst(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_copyProps__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_card_mixin__ = __webpack_require__(322);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_2__utils_copyProps__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__mixins_card_mixin__["a" /* default */].props, __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__["a" /* default */].bind(null, 'body')), {
  bodyClass: {
    type: [String, Object, Array],
    default: null
  },
  title: {
    type: String,
    default: null
  },
  titleTag: {
    type: String,
    default: 'h4'
  },
  subTitle: {
    type: String,
    default: null
  },
  subTitleTag: {
    type: String,
    default: 'h6'
  },
  overlay: {
    type: Boolean,
    default: false
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;

    var cardBodyChildren = [];
    if (props.title) {
      cardBodyChildren.push(h(props.titleTag, {
        staticClass: 'card-title',
        domProps: { innerHTML: props.title }
      }));
    }
    if (props.subTitle) {
      cardBodyChildren.push(h(props.subTitleTag, {
        staticClass: 'card-subtitle mb-2 text-muted',
        domProps: { innerHTML: props.subTitle }
      }));
    }
    cardBodyChildren.push(slots().default);

    return h(props.bodyTag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, _defineProperty(_ref2, 'bg-' + props.bodyBgVariant, Boolean(props.bodyBgVariant)), _defineProperty(_ref2, 'border-' + props.bodyBorderVariant, Boolean(props.bodyBorderVariant)), _defineProperty(_ref2, 'text-' + props.bodyTextVariant, Boolean(props.bodyTextVariant)), _ref2), props.bodyClass || {}]
    }), cardBodyChildren);
  }
});

/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_copyProps__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_card_mixin__ = __webpack_require__(322);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_2__utils_copyProps__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__mixins_card_mixin__["a" /* default */].props, __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__["a" /* default */].bind(null, 'header')), {
  header: {
    type: String,
    default: null
  },
  headerClass: {
    type: [String, Object, Array],
    default: null
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        children = _ref.children;

    return h(props.headerTag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, 'bg-' + props.headerBgVariant, Boolean(props.headerBgVariant)), _defineProperty(_ref2, 'border-' + props.headerBorderVariant, Boolean(props.headerBorderVariant)), _defineProperty(_ref2, 'text-' + props.headerTextVariant, Boolean(props.headerTextVariant)), _ref2)]
    }), children || [h('div', { domProps: { innerHTML: props.header } })]);
  }
});

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_copyProps__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_card_mixin__ = __webpack_require__(322);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_2__utils_copyProps__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__mixins_card_mixin__["a" /* default */].props, __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__["a" /* default */].bind(null, 'footer')), {
  footer: {
    type: String,
    default: null
  },
  footerClass: {
    type: [String, Object, Array],
    default: null
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        children = _ref.children;

    return h(props.footerTag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, 'bg-' + props.footerBgVariant, Boolean(props.footerBgVariant)), _defineProperty(_ref2, 'border-' + props.footerBorderVariant, Boolean(props.footerBorderVariant)), _defineProperty(_ref2, 'text-' + props.footerTextVariant, Boolean(props.footerTextVariant)), _ref2)]
    }), children || [h('div', { domProps: { innerHTML: props.footer } })]);
  }
});

/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  src: {
    type: String,
    default: null,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;

    var staticClass = 'card-img';
    if (props.top) {
      staticClass += '-top';
    } else if (props.bottom) {
      staticClass += '-bottom';
    }

    return h('img', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: staticClass,
      class: { 'img-fluid': props.fluid },
      attrs: { src: props.src, alt: props.alt }
    }));
  }
});

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  tag: {
    type: String,
    default: 'div'
  },
  fluid: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: {
        'container': !props.fluid,
        'container-fluid': props.fluid
      }
    }), children);
  }
});

/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_toggle__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_plugins__ = __webpack_require__(305);




var components = {
  bCollapse: __WEBPACK_IMPORTED_MODULE_0__collapse__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["a" /* registerComponents */])(Vue, components);
    Vue.use(__WEBPACK_IMPORTED_MODULE_1__directives_toggle__["a" /* default */]);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggle__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_plugins__ = __webpack_require__(305);



var directives = {
  bToggle: __WEBPACK_IMPORTED_MODULE_0__toggle__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["b" /* registerDirectives */])(Vue, directives);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unbindTargets; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_object__ = __webpack_require__(306);


var allListenTypes = { hover: true, click: true, focus: true };

var BVBoundListeners = '__BV_boundEventListeners__';

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  var listener = function listener() {
    fn({ targets: targets, vnode: vnode });
  };

  Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      vnode.elm.addEventListener(type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  });

  // Return the list of targets
  return targets;
};

var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils_object__["e" /* keys */])(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];
      if (boundListeners) {
        boundListeners.forEach(function (listener) {
          return vnode.elm.removeEventListener(type, listener);
        });
        delete vnode.elm[BVBoundListeners][type];
      }
    }
  });
};



/* harmony default export */ __webpack_exports__["b"] = (bindTargets);

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clickout__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listen_on_root__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bv_event_class__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_warn__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_dom__ = __webpack_require__(308);










// Return an Array of visible items
function filterVisible(els) {
  return (els || []).filter(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["m" /* isVisible */]);
}

// Dropdown item CSS selectors
// TODO: .dropdown-form handling
var ITEM_SELECTOR = '.dropdown-item:not(.disabled):not([disabled])';

// Popper attachment positions
var AttachmentMap = {
  // DropUp Left Align
  TOP: 'top-start',
  // DropUp Right Align
  TOPEND: 'top-end',
  // Dropdown left Align
  BOTTOM: 'bottom-start',
  // Dropdown Right Align
  BOTTOMEND: 'bottom-end'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_1__clickout__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__listen_on_root__["a" /* default */]],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      // Button label
      type: String,
      default: ''
    },
    dropup: {
      // place on top if possible
      type: Boolean,
      default: false
    },
    right: {
      // Right align menu (default is left align)
      type: Boolean,
      default: false
    },
    offset: {
      // Number of pixels to offset menu, or a CSS unit value (i.e. 1px, 1rem, etc)
      type: [Number, String],
      default: 0
    },
    noFlip: {
      // Disable auto-flipping of menu from bottom<=>top
      type: Boolean,
      default: false
    },
    popperOpts: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      visible: false,
      inNavbar: null,
      visibleChangePrevented: false
    };
  },
  created: function created() {
    // Create non-reactive property
    this._popper = null;
  },
  mounted: function mounted() {
    // To keep one dropdown opened on page
    this.listenOnRoot('bv::dropdown::shown', this.rootCloseListener);
    // Hide when clicked on links
    this.listenOnRoot('clicked::link', this.rootCloseListener);
    // Use new namespaced events
    this.listenOnRoot('bv::link::clicked', this.rootCloseListener);
  },

  /* istanbul ignore next: not easy to test */
  deactivated: function deactivated() {
    // In case we are inside a `<keep-alive>`
    this.visible = false;
    this.setTouchStart(false);
    this.removePopper();
  },

  /* istanbul ignore next: not easy to test */
  beforeDestroy: function beforeDestroy() {
    this.visible = false;
    this.setTouchStart(false);
    this.removePopper();
  },

  watch: {
    visible: function visible(newValue, oldValue) {
      if (this.visibleChangePrevented) {
        this.visibleChangePrevented = false;
        return;
      }

      if (newValue !== oldValue) {
        var evtName = newValue ? 'show' : 'hide';
        var bvEvt = new __WEBPACK_IMPORTED_MODULE_6__utils_bv_event_class__["a" /* default */](evtName, {
          cancelable: true,
          vueTarget: this,
          target: this.$refs.menu,
          relatedTarget: null
        });
        this.emitEvent(bvEvt);
        if (bvEvt.defaultPrevented) {
          // Reset value and exit if canceled
          this.visibleChangePrevented = true;
          this.visible = oldValue;
          return;
        }
        if (evtName === 'show') {
          this.showMenu();
        } else {
          this.hideMenu();
        }
      }
    },
    disabled: function disabled(newValue, oldValue) {
      if (newValue !== oldValue && newValue && this.visible) {
        // Hide dropdown if disabled changes to true
        this.visible = false;
      }
    }
  },
  computed: {
    toggler: function toggler() {
      return this.$refs.toggle.$el || this.$refs.toggle;
    }
  },
  methods: {
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.emitOnRoot('bv::dropdown::' + type, bvEvt);
    },
    showMenu: function showMenu() {
      if (this.disabled) {
        return;
      }
      // Ensure other menus are closed
      this.emitOnRoot('bv::dropdown::shown', this);

      // Are we in a navbar ?
      if (this.inNavbar === null && this.isNav) {
        this.inNavbar = Boolean(Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["b" /* closest */])('.navbar', this.$el));
      }

      // Disable totally Popper.js for Dropdown in Navbar
      /* istnbul ignore next: can't test popper in JSDOM */
      if (!this.inNavbar) {
        if (typeof __WEBPACK_IMPORTED_MODULE_0_popper_js__["default"] === 'undefined') {
          Object(__WEBPACK_IMPORTED_MODULE_7__utils_warn__["a" /* default */])('b-dropdown: Popper.js not found. Falling back to CSS positioning.');
        } else {
          // for dropup with alignment we use the parent element as popper container
          var element = this.dropup && this.right || this.split ? this.$el : this.$refs.toggle;
          // Make sure we have a reference to an element, not a component!
          element = element.$el || element;
          // Instantiate popper.js
          this.createPopper(element);
        }
      }

      this.setTouchStart(true);
      this.$emit('shown');

      // Focus on the first item on show
      this.$nextTick(this.focusFirstItem);
    },
    hideMenu: function hideMenu() {
      this.setTouchStart(false);
      this.emitOnRoot('bv::dropdown::hidden', this);
      this.$emit('hidden');
      this.removePopper();
    },
    createPopper: function createPopper(element) {
      this.removePopper();
      this._popper = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["default"](element, this.$refs.menu, this.getPopperConfig());
    },
    removePopper: function removePopper() {
      if (this._popper) {
        // Ensure popper event listeners are removed cleanly
        this._popper.destroy();
      }
      this._popper = null;
    },
    getPopperConfig /* istanbul ignore next: can't test popper in JSDOM */: function getPopperConfig() {
      var placement = AttachmentMap.BOTTOM;
      if (this.dropup && this.right) {
        // dropup + right
        placement = AttachmentMap.TOPEND;
      } else if (this.dropup) {
        // dropup + left
        placement = AttachmentMap.TOP;
      } else if (this.right) {
        // dropdown + right
        placement = AttachmentMap.BOTTOMEND;
      }
      var popperConfig = {
        placement: placement,
        modifiers: {
          offset: {
            offset: this.offset || 0
          },
          flip: {
            enabled: !this.noFlip
          }
        }
      };
      if (this.boundary) {
        popperConfig.modifiers.preventOverflow = {
          boundariesElement: this.boundary
        };
      }
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_object__["a" /* assign */])(popperConfig, this.popperOpts || {});
    },
    setTouchStart: function setTouchStart(on) {
      var _this = this;

      /*
       * If this is a touch-enabled device we add extra
       * empty mouseover listeners to the body's immediate children;
       * only needed because of broken event delegation on iOS
       * https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
       */
      if ('ontouchstart' in document.documentElement) {
        var children = Object(__WEBPACK_IMPORTED_MODULE_3__utils_array__["c" /* from */])(document.body.children);
        children.forEach(function (el) {
          if (on) {
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["d" /* eventOn */])('mouseover', _this._noop);
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["c" /* eventOff */])('mouseover', _this._noop);
          }
        });
      }
    },

    /* istanbul ignore next: not easy to test */
    _noop: function _noop() {
      // Do nothing event handler (used in touchstart event handler)
    },
    rootCloseListener: function rootCloseListener(vm) {
      if (vm !== this) {
        this.visible = false;
      }
    },
    clickOutListener: function clickOutListener() {
      this.visible = false;
    },
    show: function show() {
      // Public method to show dropdown
      if (this.disabled) {
        return;
      }
      this.visible = true;
    },
    hide: function hide() {
      // Public method to hide dropdown
      if (this.disabled) {
        return;
      }
      this.visible = false;
    },
    toggle: function toggle(evt) {
      // Called only by a button that toggles the menu
      evt = evt || {};
      var type = evt.type;
      var key = evt.keyCode;
      if (type !== 'click' && !(type === 'keydown' && (key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].ENTER || key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].SPACE || key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].DOWN))) {
        // We only toggle on Click, Enter, Space, and Arrow Down
        return;
      }
      if (this.disabled) {
        this.visible = false;
        return;
      }
      this.$emit('toggle', evt);
      if (evt.defaultPrevented) {
        // Exit if canceled
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      // Toggle visibility
      this.visible = !this.visible;
    },
    click: function click(evt) {
      // Calle only in split button mode, for the split button
      if (this.disabled) {
        this.visible = false;
        return;
      }
      this.$emit('click', evt);
    },

    /* istanbul ignore next: not easy to test */
    onKeydown: function onKeydown(evt) {
      // Called from dropdown menu context
      var key = evt.keyCode;
      if (key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].ESC) {
        // Close on ESC
        this.onEsc(evt);
      } else if (key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].TAB) {
        // Close on tab out
        this.onTab(evt);
      } else if (key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].DOWN) {
        // Down Arrow
        this.focusNext(evt, false);
      } else if (key === __WEBPACK_IMPORTED_MODULE_5__utils_key_codes__["a" /* default */].UP) {
        // Up Arrow
        this.focusNext(evt, true);
      }
    },

    /* istanbul ignore next: not easy to test */
    onEsc: function onEsc(evt) {
      if (this.visible) {
        this.visible = false;
        evt.preventDefault();
        evt.stopPropagation();
        // Return focus to original trigger button
        this.$nextTick(this.focusToggler);
      }
    },

    /* istanbul ignore next: not easy to test */
    onTab: function onTab(evt) {
      if (this.visible) {
        // TODO: Need special handler for dealing with form inputs
        // Tab, if in a text-like input, we should just focus next item in the dropdown
        // Note: Inputs are in a special .dropdown-form container
        this.visible = false;
      }
    },
    onFocusOut: function onFocusOut(evt) {
      if (this.$refs.menu.contains(evt.relatedTarget)) {
        return;
      }
      this.visible = false;
    },

    /* istanbul ignore next: not easy to test */
    onMouseOver: function onMouseOver(evt) {
      // Focus the item on hover
      // TODO: Special handling for inputs? Inputs are in a special .dropdown-form container
      var item = evt.target;
      if (item.classList.contains('dropdown-item') && !item.disabled && !item.classList.contains('disabled') && item.focus) {
        item.focus();
      }
    },
    focusNext: function focusNext(evt, up) {
      var _this2 = this;

      if (!this.visible) {
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      this.$nextTick(function () {
        var items = _this2.getItems();
        if (items.length < 1) {
          return;
        }
        var index = items.indexOf(evt.target);
        if (up && index > 0) {
          index--;
        } else if (!up && index < items.length - 1) {
          index++;
        }
        if (index < 0) {
          index = 0;
        }
        _this2.focusItem(index, items);
      });
    },
    focusItem: function focusItem(idx, items) {
      var el = items.find(function (el, i) {
        return i === idx;
      });
      if (el && Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["e" /* getAttr */])(el, 'tabindex') !== '-1') {
        el.focus();
      }
    },
    getItems: function getItems() {
      // Get all items
      return filterVisible(Object(__WEBPACK_IMPORTED_MODULE_8__utils_dom__["u" /* selectAll */])(ITEM_SELECTOR, this.$refs.menu));
    },
    getFirstItem: function getFirstItem() {
      // Get the first non-disabled item
      var item = this.getItems()[0];
      return item || null;
    },
    focusFirstItem: function focusFirstItem() {
      var item = this.getFirstItem();
      if (item) {
        this.focusItem(0, [item]);
      }
    },
    focusToggler: function focusToggler() {
      var toggler = this.toggler;
      if (toggler && toggler.focus) {
        toggler.focus();
      }
    }
  }
});

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  id: {
    type: String,
    default: null
  },
  inline: {
    type: Boolean,
    default: false
  },
  novalidate: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h('form', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
});

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: 'muted'
  },
  inline: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: _defineProperty({
        'form-text': !props.inline
      }, 'text-' + props.textVariant, Boolean(props.textVariant)),
      attrs: {
        id: props.id
      }
    }), children);
  }
});

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  forceShow: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'invalid-feedback',
      class: { 'd-block': props.forceShow },
      attrs: { id: props.id }
    }), children);
  }
});

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  },
  forceShow: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'valid-feedback',
      class: { 'd-block': props.forceShow },
      attrs: { id: props.id }
    }), children);
  }
});

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_id__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_form_radio_check__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_form__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_form_size__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_form_state__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixins_form_custom__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_loose_equal__ = __webpack_require__(331);









/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_id__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_form_radio_check__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_form__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_form_size__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__mixins_form_state__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__mixins_form_custom__["a" /* default */]],
  render: function render(h) {
    var _this = this;

    var input = h('input', {
      ref: 'check',
      class: [this.is_ButtonMode ? '' : this.is_Plain ? 'form-check-input' : 'custom-control-input', this.get_StateClass],
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.computedLocalChecked,
        expression: 'computedLocalChecked'
      }],
      attrs: {
        id: this.safeId(),
        type: 'checkbox',
        name: this.get_Name,
        disabled: this.is_Disabled,
        required: this.is_Required,
        autocomplete: 'off',
        'true-value': this.value,
        'false-value': this.uncheckedValue,
        'aria-required': this.is_Required ? 'true' : null
      },
      domProps: { value: this.value, checked: this.is_Checked },
      on: {
        focus: this.handleFocus,
        blur: this.handleFocus,
        change: this.emitChange,
        __c: function __c(evt) {
          var $$a = _this.computedLocalChecked;
          var $$el = evt.target;
          if (Object(__WEBPACK_IMPORTED_MODULE_6__utils_array__["d" /* isArray */])($$a)) {
            // Multiple checkbox
            var $$v = _this.value;
            var $$i = _this._i($$a, $$v); // Vue's 'loose' Array.indexOf
            if ($$el.checked) {
              // Append value to array
              $$i < 0 && (_this.computedLocalChecked = $$a.concat([$$v]));
            } else {
              // Remove value from array
              $$i > -1 && (_this.computedLocalChecked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            // Single checkbox
            _this.computedLocalChecked = $$el.checked ? _this.value : _this.uncheckedValue;
          }
        }
      }
    });

    var description = h(this.is_ButtonMode ? 'span' : 'label', {
      class: this.is_ButtonMode ? null : this.is_Plain ? 'form-check-label' : 'custom-control-label',
      attrs: { for: this.is_ButtonMode ? null : this.safeId() }
    }, [this.$slots.default]);

    if (!this.is_ButtonMode) {
      return h('div', {
        class: [this.is_Plain ? 'form-check' : this.labelClasses, { 'form-check-inline': this.is_Plain && !this.is_Stacked }, { 'custom-control-inline': !this.is_Plain && !this.is_Stacked }]
      }, [input, description]);
    } else {
      return h('label', { class: [this.buttonClasses] }, [input, description]);
    }
  },

  props: {
    value: {
      default: true
    },
    uncheckedValue: {
      // Not applicable in multi-check mode
      default: false
    },
    indeterminate: {
      // Not applicable in multi-check mode
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelClasses: function labelClasses() {
      return ['custom-control', 'custom-checkbox', this.get_Size ? 'form-control-' + this.get_Size : '', this.get_StateClass];
    },
    is_Checked: function is_Checked() {
      var checked = this.computedLocalChecked;
      if (Object(__WEBPACK_IMPORTED_MODULE_6__utils_array__["d" /* isArray */])(checked)) {
        for (var i = 0; i < checked.length; i++) {
          if (Object(__WEBPACK_IMPORTED_MODULE_7__utils_loose_equal__["a" /* default */])(checked[i], this.value)) {
            return true;
          }
        }
        return false;
      } else {
        return Object(__WEBPACK_IMPORTED_MODULE_7__utils_loose_equal__["a" /* default */])(checked, this.value);
      }
    }
  },
  watch: {
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__utils_loose_equal__["a" /* default */])(newVal, oldVal)) {
        return;
      }
      this.$emit('input', newVal);
      this.$emit('update:indeterminate', this.$refs.check.indeterminate);
    },
    checked: function checked(newVal, oldVal) {
      if (this.is_Child || Object(__WEBPACK_IMPORTED_MODULE_7__utils_loose_equal__["a" /* default */])(newVal, oldVal)) {
        return;
      }
      this.computedLocalChecked = newVal;
    },
    indeterminate: function indeterminate(newVal, oldVal) {
      this.setIndeterminate(newVal);
    }
  },
  methods: {
    emitChange: function emitChange(_ref) {
      var checked = _ref.target.checked;

      // Change event is only fired via user interaction
      // And we only emit the value of this checkbox
      if (this.is_Child || Object(__WEBPACK_IMPORTED_MODULE_6__utils_array__["d" /* isArray */])(this.computedLocalChecked)) {
        this.$emit('change', checked ? this.value : null);
        if (this.is_Child) {
          // If we are a child of form-checkbbox-group, emit change on parent
          this.$parent.$emit('change', this.computedLocalChecked);
        }
      } else {
        // Single radio mode supports unchecked value
        this.$emit('change', checked ? this.value : this.uncheckedValue);
      }
      this.$emit('update:indeterminate', this.$refs.check.indeterminate);
    },
    setIndeterminate: function setIndeterminate(state) {
      // Indeterminate only supported in single checkbox mode
      if (this.is_Child || Object(__WEBPACK_IMPORTED_MODULE_6__utils_array__["d" /* isArray */])(this.computedLocalChecked)) {
        return;
      }
      this.$refs.check.indeterminate = state;
      // Emit update event to prop
      this.$emit('update:indeterminate', this.$refs.check.indeterminate);
    }
  },
  mounted: function mounted() {
    // Set initial indeterminate state
    this.setIndeterminate(this.indeterminate);
  }
});

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * form-radio & form-check mixin
 *
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      localChecked: this.checked,
      hasFocus: false
    };
  },

  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {},
    checked: {
      // This is the model, except when in group mode
    },
    buttonVariant: {
      // Only applicable when rendered with button style
      type: String,
      default: null
    }
  },
  computed: {
    computedLocalChecked: {
      get: function get() {
        if (this.is_Child) {
          return this.$parent.localChecked;
        } else {
          return this.localChecked;
        }
      },
      set: function set(val) {
        if (this.is_Child) {
          this.$parent.localChecked = val;
        } else {
          this.localChecked = val;
        }
      }
    },
    is_Child: function is_Child() {
      return Boolean(this.$parent && this.$parent.is_RadioCheckGroup);
    },
    is_Disabled: function is_Disabled() {
      // Child can be disabled while parent isn't
      return Boolean(this.is_Child ? this.$parent.disabled || this.disabled : this.disabled);
    },
    is_Required: function is_Required() {
      return Boolean(this.is_Child ? this.$parent.required : this.required);
    },
    is_Plain: function is_Plain() {
      return Boolean(this.is_Child ? this.$parent.plain : this.plain);
    },
    is_Custom: function is_Custom() {
      return !this.is_Plain;
    },
    get_Size: function get_Size() {
      return this.is_Child ? this.$parent.size : this.size;
    },
    get_State: function get_State() {
      // This is a tri-state prop (true, false, null)
      if (this.is_Child && typeof this.$parent.get_State === 'boolean') {
        return this.$parent.get_State;
      }
      return this.computedState;
    },
    get_StateClass: function get_StateClass() {
      // This is a tri-state prop (true, false, null)
      return typeof this.get_State === 'boolean' ? this.get_State ? 'is-valid' : 'is-invalid' : '';
    },
    is_Stacked: function is_Stacked() {
      return Boolean(this.is_Child && this.$parent.stacked);
    },
    is_Inline: function is_Inline() {
      return !this.is_Stacked;
    },
    is_ButtonMode: function is_ButtonMode() {
      return Boolean(this.is_Child && this.$parent.buttons);
    },
    get_ButtonVariant: function get_ButtonVariant() {
      // Local variant trumps parent variant
      return this.buttonVariant || (this.is_Child ? this.$parent.buttonVariant : null) || 'secondary';
    },
    get_Name: function get_Name() {
      return (this.is_Child ? this.$parent.name || this.$parent.safeId() : this.name) || null;
    },
    buttonClasses: function buttonClasses() {
      // Same for radio & check
      return ['btn', 'btn-' + this.get_ButtonVariant, this.get_Size ? 'btn-' + this.get_Size : '',
      // 'disabled' class makes "button" look disabled
      this.is_Disabled ? 'disabled' : '',
      // 'active' class makes "button" look pressed
      this.is_Checked ? 'active' : '',
      // Focus class makes button look focused
      this.hasFocus ? 'focus' : ''];
    }
  },
  methods: {
    handleFocus: function handleFocus(evt) {
      // When in buttons mode, we need to add 'focus' class to label when radio focused
      if (this.is_ButtonMode && evt.target) {
        if (evt.type === 'focus') {
          this.hasFocus = true;
        } else if (evt.type === 'blur') {
          this.hasFocus = false;
        }
      }
    }
  }
});

/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_id__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_form__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_form_state__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_form_radio_check__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_loose_equal__ = __webpack_require__(331);






/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_id__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__mixins_form_radio_check__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__mixins_form__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__mixins_form_state__["a" /* default */]],
  render: function render(h) {
    var _this = this;

    var input = h('input', {
      ref: 'radio',
      class: [this.is_ButtonMode ? '' : this.is_Plain ? 'form-check-input' : 'custom-control-input', this.get_StateClass],
      directives: [{
        name: 'model',
        rawName: 'v-model',
        value: this.computedLocalChecked,
        expression: 'computedLocalChecked'
      }],
      attrs: {
        id: this.safeId(),
        type: 'radio',
        name: this.get_Name,
        required: this.get_Name && this.is_Required,
        disabled: this.is_Disabled,
        autocomplete: 'off'
      },
      domProps: {
        value: this.value,
        checked: Object(__WEBPACK_IMPORTED_MODULE_4__utils_loose_equal__["a" /* default */])(this.computedLocalChecked, this.value)
      },
      on: {
        focus: this.handleFocus,
        blur: this.handleFocus,
        change: this.emitChange,
        __c: function __c(evt) {
          _this.computedLocalChecked = _this.value;
        }
      }
    });

    var description = h(this.is_ButtonMode ? 'span' : 'label', {
      class: this.is_ButtonMode ? null : this.is_Plain ? 'form-check-label' : 'custom-control-label',
      attrs: { for: this.is_ButtonMode ? null : this.safeId() }
    }, [this.$slots.default]);

    if (!this.is_ButtonMode) {
      return h('div', {
        class: [this.is_Plain ? 'form-check' : this.labelClasses, { 'form-check-inline': this.is_Plain && !this.is_Stacked }, { 'custom-control-inline': !this.is_Plain && !this.is_Stacked }]
      }, [input, description]);
    } else {
      return h('label', { class: [this.buttonClasses] }, [input, description]);
    }
  },

  watch: {
    // Radio Groups can only have a single value, so our watchers are simple
    checked: function checked(newVal, oldVal) {
      this.computedLocalChecked = newVal;
    },
    computedLocalChceked: function computedLocalChceked(newVal, oldVal) {
      this.$emit('input', this.computedLocalChceked);
    }
  },
  computed: {
    is_Checked: function is_Checked() {
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_loose_equal__["a" /* default */])(this.value, this.computedLocalChecked);
    },
    labelClasses: function labelClasses() {
      // Specific to radio
      return [this.get_Size ? 'form-control-' + this.get_Size : '', 'custom-control', 'custom-radio', this.get_StateClass];
    }
  },
  methods: {
    emitChange: function emitChange(_ref) {
      var checked = _ref.target.checked;

      // Change is only emitted on user interaction
      this.$emit('change', checked ? this.value : null);
      // If this is a child of form-radio-group, we emit a change event on it as well
      if (this.is_Child) {
        this.$parent.$emit('change', this.computedLocalChecked);
      }
    }
  }
});

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  tag: {
    type: String,
    default: 'div'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'media-body'
    }), children);
  }
});

/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var props = {
  tag: {
    type: String,
    default: 'div'
  },
  verticalAlign: {
    type: String,
    default: 'top'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'd-flex',
      class: _defineProperty({}, 'align-self-' + props.verticalAlign, props.verticalAlign)
    }), children);
  }
});

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_plugins__ = __webpack_require__(305);



var directives = {
  bModal: __WEBPACK_IMPORTED_MODULE_0__modal__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["b" /* registerDirectives */])(Vue, directives);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_item__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_text__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_form__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_item_dropdown__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_plugins__ = __webpack_require__(305);








var components = {
  bNav: __WEBPACK_IMPORTED_MODULE_0__nav__["a" /* default */],
  bNavItem: __WEBPACK_IMPORTED_MODULE_1__nav_item__["a" /* default */],
  bNavText: __WEBPACK_IMPORTED_MODULE_2__nav_text__["a" /* default */],
  bNavForm: __WEBPACK_IMPORTED_MODULE_3__nav_form__["a" /* default */],
  bNavItemDropdown: __WEBPACK_IMPORTED_MODULE_4__nav_item_dropdown__["a" /* default */],
  bNavItemDd: __WEBPACK_IMPORTED_MODULE_4__nav_item_dropdown__["a" /* default */],
  bNavDropdown: __WEBPACK_IMPORTED_MODULE_4__nav_item_dropdown__["a" /* default */],
  bNavDd: __WEBPACK_IMPORTED_MODULE_4__nav_item_dropdown__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_plugins__["a" /* registerComponents */])(Vue, components);
    Vue.use(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */]);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_6__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_range__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_link_link__ = __webpack_require__(311);
/*
 * Comon props, computed, data, render function, and methods for b-pagination and b-pagination-nav
 */






// Make an array of N to N+X
function makePageArray(startNum, numPages) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_range__["a" /* default */])(numPages).map(function (value, index) {
    return { number: index + startNum, className: null };
  });
}

// Threshold of limit size when we start/stop showing ellipsis
var ELLIPSIS_THRESHOLD = 3;

// Props object
var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 5
  },
  size: {
    type: String,
    default: 'md'
  },
  align: {
    type: String,
    default: 'left'
  },
  hideGotoEndButtons: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Pagination'
  },
  labelFirstPage: {
    type: String,
    default: 'Goto first page'
  },
  firstText: {
    type: String,
    default: '&laquo;'
  },
  labelPrevPage: {
    type: String,
    default: 'Goto previous page'
  },
  prevText: {
    type: String,
    default: '&lsaquo;'
  },
  labelNextPage: {
    type: String,
    default: 'Goto next page'
  },
  nextText: {
    type: String,
    default: '&rsaquo;'
  },
  labelLastPage: {
    type: String,
    default: 'Goto last page'
  },
  lastText: {
    type: String,
    default: '&raquo;'
  },
  labelPage: {
    type: String,
    default: 'Goto page'
  },
  hideEllipsis: {
    type: Boolean,
    default: false
  },
  ellipsisText: {
    type: String,
    default: '&hellip;'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: { bLink: __WEBPACK_IMPORTED_MODULE_3__components_link_link__["a" /* default */] },
  data: function data() {
    return {
      showFirstDots: false,
      showLastDots: false,
      currentPage: this.value
    };
  },

  props: props,
  render: function render(h) {
    var _this = this;

    var buttons = [];

    // Factory function for prev/next/first/last buttons
    var makeEndBtns = function makeEndBtns(linkTo, ariaLabel, btnText, pageTest) {
      var button = void 0;
      pageTest = pageTest || linkTo; // Page # to test against to disable
      if (_this.disabled || _this.isActive(pageTest)) {
        button = h('li', {
          class: ['page-item', 'disabled'],
          attrs: { role: 'none presentation', 'aria-hidden': 'true' }
        }, [h('span', {
          class: ['page-link'],
          domProps: { innerHTML: btnText }
        })]);
      } else {
        button = h('li', {
          class: ['page-item'],
          attrs: { role: 'none presentation' }
        }, [h('b-link', {
          class: ['page-link'],
          props: _this.linkProps(linkTo),
          attrs: {
            role: 'menuitem',
            tabindex: '-1',
            'aria-label': ariaLabel,
            'aria-controls': _this.ariaControls || null
          },
          on: {
            click: function click(evt) {
              _this.onClick(linkTo, evt);
            },
            keydown: function keydown(evt) {
              // Links don't normally respond to SPACE, so we add that functionality
              if (evt.keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].SPACE) {
                evt.preventDefault();
                _this.onClick(linkTo, evt);
              }
            }
          }
        }, [h('span', {
          attrs: { 'aria-hidden': 'true' },
          domProps: { innerHTML: btnText }
        })])]);
      }
      return button;
    };

    // Ellipsis factory
    var makeEllipsis = function makeEllipsis() {
      return h('li', {
        class: ['page-item', 'disabled', 'd-none', 'd-sm-flex'],
        attrs: { role: 'separator' }
      }, [h('span', {
        class: ['page-link'],
        domProps: { innerHTML: _this.ellipsisText }
      })]);
    };

    // Goto First Page button
    buttons.push(this.hideGotoEndButtons ? h(false) : makeEndBtns(1, this.labelFirstPage, this.firstText));

    // Goto Previous page button
    buttons.push(makeEndBtns(this.currentPage - 1, this.labelPrevPage, this.prevText, 1));

    // First Ellipsis Bookend
    buttons.push(this.showFirstDots ? makeEllipsis() : h(false));

    // Individual Page links
    this.pageList.forEach(function (page) {
      var inner = void 0;
      var pageNum = _this.makePage(page.number);
      if (_this.disabled) {
        inner = h('span', {
          class: ['page-link'],
          domProps: { innerHTML: pageNum }
        });
      } else {
        var active = _this.isActive(page.number);
        inner = h('b-link', {
          class: _this.pageLinkClasses(page),
          props: _this.linkProps(page.number),
          attrs: {
            role: 'menuitemradio',
            tabindex: active ? '0' : '-1',
            'aria-controls': _this.ariaControls || null,
            'aria-label': _this.labelPage + ' ' + page.number,
            'aria-checked': active ? 'true' : 'false',
            'aria-posinset': page.number,
            'aria-setsize': _this.numberOfPages
          },
          domProps: { innerHTML: pageNum },
          on: {
            click: function click(evt) {
              _this.onClick(page.number, evt);
            },
            keydown: function keydown(evt) {
              if (evt.keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].SPACE) {
                evt.preventDefault();
                _this.onClick(page.number, evt);
              }
            }
          }
        });
      }
      buttons.push(h('li', {
        key: page.number,
        class: _this.pageItemClasses(page),
        attrs: { role: 'none presentation' }
      }, [inner]));
    });

    // Last Ellipsis Bookend
    buttons.push(this.showLastDots ? makeEllipsis() : h(false));

    // Goto Next page button
    buttons.push(makeEndBtns(this.currentPage + 1, this.labelNextPage, this.nextText, this.numberOfPages));

    // Goto Last Page button
    buttons.push(this.hideGotoEndButtons ? h(false) : makeEndBtns(this.numberOfPages, this.labelLastPage, this.lastText));

    // Assemble the paginatiom buttons
    var pagination = h('ul', {
      ref: 'ul',
      class: ['pagination', 'b-pagination', this.btnSize, this.alignment],
      attrs: {
        role: 'menubar',
        'aria-disabled': this.disabled ? 'true' : 'false',
        'aria-label': this.ariaLabel || null
      },
      on: {
        keydown: function keydown(evt) {
          var keyCode = evt.keyCode;
          var shift = evt.shiftKey;
          if (keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].LEFT) {
            evt.preventDefault();
            shift ? _this.focusFirst() : _this.focusPrev();
          } else if (keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].RIGHT) {
            evt.preventDefault();
            shift ? _this.focusLast() : _this.focusNext();
          }
        }
      }
    }, buttons);

    // if we are pagination-nav, wrap in '<nav>' wrapper
    return this.isNav ? h('nav', {}, [pagination]) : pagination;
  },

  watch: {
    currentPage: function currentPage(newPage, oldPage) {
      if (newPage !== oldPage) {
        this.$emit('input', newPage);
      }
    },
    value: function value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.currentPage = newValue;
      }
    }
  },
  computed: {
    btnSize: function btnSize() {
      return this.size ? 'pagination-' + this.size : '';
    },
    alignment: function alignment() {
      if (this.align === 'center') {
        return 'justify-content-center';
      } else if (this.align === 'end' || this.align === 'right') {
        return 'justify-content-end';
      }
      return '';
    },
    pageList: function pageList() {
      // Sanity checks
      if (this.currentPage > this.numberOfPages) {
        this.currentPage = this.numberOfPages;
      } else if (this.currentPage < 1) {
        this.currentPage = 1;
      }
      // - Hide first ellipsis marker
      this.showFirstDots = false;
      // - Hide last ellipsis marker
      this.showLastDots = false;
      var numLinks = this.limit;
      var startNum = 1;
      if (this.numberOfPages <= this.limit) {
        // Special Case: Less pages available than the limit of displayed pages
        numLinks = this.numberOfPages;
      } else if (this.currentPage < this.limit - 1 && this.limit > ELLIPSIS_THRESHOLD) {
        // We are near the beginning of the page list
        if (!this.hideEllipsis) {
          numLinks = this.limit - 1;
          this.showLastDots = true;
        }
      } else if (this.numberOfPages - this.currentPage + 2 < this.limit && this.limit > ELLIPSIS_THRESHOLD) {
        // We are near the end of the list
        if (!this.hideEllipsis) {
          this.showFirstDots = true;
          numLinks = this.limit - 1;
        }
        startNum = this.numberOfPages - numLinks + 1;
      } else {
        // We are somewhere in the middle of the page list
        if (this.limit > ELLIPSIS_THRESHOLD && !this.hideEllipsis) {
          this.showFirstDots = true;
          this.showLastDots = true;
          numLinks = this.limit - 2;
        }
        startNum = this.currentPage - Math.floor(numLinks / 2);
      }
      // Sanity checks
      if (startNum < 1) {
        startNum = 1;
      } else if (startNum > this.numberOfPages - numLinks) {
        startNum = this.numberOfPages - numLinks + 1;
      }
      // Generate list of page numbers
      var pages = makePageArray(startNum, numLinks);
      // We limit to a total of 3 page buttons on small screens
      // Ellipsis will also be hidden on small screens
      if (pages.length > 3) {
        var idx = this.currentPage - startNum;
        if (idx === 0) {
          // Keep leftmost 3 buttons visible
          for (var i = 3; i < pages.length; i++) {
            pages[i].className = 'd-none d-sm-flex';
          }
        } else if (idx === pages.length - 1) {
          // Keep rightmost 3 buttons visible
          for (var _i = 0; _i < pages.length - 3; _i++) {
            pages[_i].className = 'd-none d-sm-flex';
          }
        } else {
          // hide left button(s)
          for (var _i2 = 0; _i2 < idx - 1; _i2++) {
            pages[_i2].className = 'd-none d-sm-flex';
          }
          // hide right button(s)
          for (var _i3 = pages.length - 1; _i3 > idx + 1; _i3--) {
            pages[_i3].className = 'd-none d-sm-flex';
          }
        }
      }
      return pages;
    }
  },
  methods: {
    isActive: function isActive(pagenum) {
      return pagenum === this.currentPage;
    },
    pageItemClasses: function pageItemClasses(page) {
      return ['page-item', this.disabled ? 'disabled' : '', this.isActive(page.number) ? 'active' : '', page.className];
    },
    pageLinkClasses: function pageLinkClasses(page) {
      return ['page-link', this.disabled ? 'disabled' : '',
      // Interim workaround to get better focus styling of active button
      // See https://github.com/twbs/bootstrap/issues/24838
      this.isActive(page.number) ? 'btn-primary' : ''];
    },
    getButtons: function getButtons() {
      // Return only buttons that are visible
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["u" /* selectAll */])('a.page-link', this.$el).filter(function (btn) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["m" /* isVisible */])(btn);
      });
    },
    setBtnFocus: function setBtnFocus(btn) {
      this.$nextTick(function () {
        btn.focus();
      });
    },
    focusCurrent: function focusCurrent() {
      var _this2 = this;

      var btn = this.getButtons().find(function (el) {
        return parseInt(Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["e" /* getAttr */])(el, 'aria-posinset'), 10) === _this2.currentPage;
      });
      if (btn && btn.focus) {
        this.setBtnFocus(btn);
      } else {
        // Fallback if current page is not in button list
        this.focusFirst();
      }
    },
    focusFirst: function focusFirst() {
      var btn = this.getButtons().find(function (el) {
        return !Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["k" /* isDisabled */])(el);
      });
      if (btn && btn.focus && btn !== document.activeElement) {
        this.setBtnFocus(btn);
      }
    },
    focusLast: function focusLast() {
      var btn = this.getButtons().reverse().find(function (el) {
        return !Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["k" /* isDisabled */])(el);
      });
      if (btn && btn.focus && btn !== document.activeElement) {
        this.setBtnFocus(btn);
      }
    },
    focusPrev: function focusPrev() {
      var buttons = this.getButtons();
      var idx = buttons.indexOf(document.activeElement);
      if (idx > 0 && !Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["k" /* isDisabled */])(buttons[idx - 1]) && buttons[idx - 1].focus) {
        this.setBtnFocus(buttons[idx - 1]);
      }
    },
    focusNext: function focusNext() {
      var buttons = this.getButtons();
      var idx = buttons.indexOf(document.activeElement);
      var cnt = buttons.length - 1;
      if (idx < cnt && !Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["k" /* isDisabled */])(buttons[idx + 1]) && buttons[idx + 1].focus) {
        this.setBtnFocus(buttons[idx + 1]);
      }
    }
  }
});

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_class__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom__ = __webpack_require__(308);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NAME = 'popover';
var CLASS_PREFIX = 'bs-popover';
var BSCLS_PREFIX_REGEX = new RegExp('\\b' + CLASS_PREFIX + '\\S+', 'g');

var Defaults = Object(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* assign */])({}, __WEBPACK_IMPORTED_MODULE_0__tooltip_class__["a" /* default */].Default, {
  placement: 'right',
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
});

var ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

var Selector = {
  TITLE: '.popover-header',
  CONTENT: '.popover-body'

  /* istanbul ignore next: dificult to test in Jest/JSDOM environment */
};
var PopOver = function (_ToolTip) {
  _inherits(PopOver, _ToolTip);

  function PopOver() {
    _classCallCheck(this, PopOver);

    return _possibleConstructorReturn(this, (PopOver.__proto__ || Object.getPrototypeOf(PopOver)).apply(this, arguments));
  }

  _createClass(PopOver, [{
    key: 'isWithContent',


    // Method overrides

    value: function isWithContent(tip) {
      tip = tip || this.$tip;
      if (!tip) {
        return false;
      }
      var hasTitle = Boolean((Object(__WEBPACK_IMPORTED_MODULE_2__dom__["t" /* select */])(Selector.TITLE, tip) || {}).innerHTML);
      var hasContent = Boolean((Object(__WEBPACK_IMPORTED_MODULE_2__dom__["t" /* select */])(Selector.CONTENT, tip) || {}).innerHTML);
      return hasTitle || hasContent;
    }
  }, {
    key: 'addAttachmentClass',
    value: function addAttachmentClass(attachment) {
      Object(__WEBPACK_IMPORTED_MODULE_2__dom__["a" /* addClass */])(this.getTipElement(), CLASS_PREFIX + '-' + attachment);
    }
  }, {
    key: 'setContent',
    value: function setContent(tip) {
      // we use append for html objects to maintain js events/components
      this.setElementContent(Object(__WEBPACK_IMPORTED_MODULE_2__dom__["t" /* select */])(Selector.TITLE, tip), this.getTitle());
      this.setElementContent(Object(__WEBPACK_IMPORTED_MODULE_2__dom__["t" /* select */])(Selector.CONTENT, tip), this.getContent());

      Object(__WEBPACK_IMPORTED_MODULE_2__dom__["s" /* removeClass */])(tip, ClassName.FADE);
      Object(__WEBPACK_IMPORTED_MODULE_2__dom__["s" /* removeClass */])(tip, ClassName.SHOW);
    }

    // This method may look identical to ToolTip version, but it uses a different RegEx defined above

  }, {
    key: 'cleanTipClass',
    value: function cleanTipClass() {
      var tip = this.getTipElement();
      var tabClass = tip.className.match(BSCLS_PREFIX_REGEX);
      if (tabClass !== null && tabClass.length > 0) {
        tabClass.forEach(function (cls) {
          Object(__WEBPACK_IMPORTED_MODULE_2__dom__["s" /* removeClass */])(tip, cls);
        });
      }
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = this.$config.title || '';
      if (typeof title === 'function') {
        title = title(this.$element);
      }
      if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object' && title.nodeType && !title.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        title = '';
      }
      if (typeof title === 'string') {
        title = title.trim();
      }
      if (!title) {
        // Try and grab element's title attribute
        title = Object(__WEBPACK_IMPORTED_MODULE_2__dom__["e" /* getAttr */])(this.$element, 'title') || Object(__WEBPACK_IMPORTED_MODULE_2__dom__["e" /* getAttr */])(this.$element, 'data-original-title') || '';
        title = title.trim();
      }
      return title;
    }

    // New methods

  }, {
    key: 'getContent',
    value: function getContent() {
      var content = this.$config.content || '';
      if (typeof content === 'function') {
        content = content(this.$element);
      }
      if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object' && content.nodeType && !content.innerHTML.trim()) {
        // We have a dom node, but without inner content, so just return an empty string
        content = '';
      }
      if (typeof content === 'string') {
        content = content.trim();
      }
      return content;
    }
  }], [{
    key: 'Default',

    // Getter overrides

    get: function get() {
      return Defaults;
    }
  }, {
    key: 'NAME',
    get: function get() {
      return NAME;
    }
  }]);

  return PopOver;
}(__WEBPACK_IMPORTED_MODULE_0__tooltip_class__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (PopOver);

/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ssr__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_observe_dom__ = __webpack_require__(317);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * Tooltip/Popover component mixin
 * Common props
 */






var PLACEMENTS = {
  top: 'top',
  topleft: 'topleft',
  topright: 'topright',
  right: 'right',
  righttop: 'righttop',
  rightbottom: 'rightbottom',
  bottom: 'bottom',
  bottomleft: 'bottomleft',
  bottomright: 'bottomright',
  left: 'left',
  lefttop: 'lefttop',
  leftbottom: 'leftbottom',
  auto: 'auto'
};

var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['class', 'style']
};

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    target: {
      // String ID of element, or element/component reference
      type: [String, Object, __WEBPACK_IMPORTED_MODULE_3__utils_ssr__["a" /* HTMLElement */], Function]
    },
    delay: {
      type: [Number, Object, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    },
    noFade: {
      type: Boolean,
      default: false
    },
    container: {
      // String ID of container, if null body is used (default)
      type: String,
      default: null
    },
    boundary: {
      // String: scrollParent, window, or viewport
      // Element: element reference
      type: [String, Object],
      default: 'scrollParent'
    },
    show: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show: function show(_show, old) {
      if (_show === old) {
        return;
      }
      _show ? this.onOpen() : this.onClose();
    },
    disabled: function disabled(_disabled, old) {
      if (_disabled === old) {
        return;
      }
      _disabled ? this.onDisable() : this.onEnable();
    }
  },
  created: function created() {
    // Create non-reactive property
    this._toolpop = null;
    this._obs_title = null;
    this._obs_content = null;
  },
  mounted: function mounted() {
    var _this = this;

    // We do this in a next tick to ensure DOM has rendered first
    this.$nextTick(function () {
      // Instantiate ToolTip/PopOver on target
      // The createToolpop method must exist in main component
      if (_this.createToolpop()) {
        if (_this.disabled) {
          // Initially disabled
          _this.onDisable();
        }
        // Listen to open signals from others
        _this.$on('open', _this.onOpen);
        // Listen to close signals from others
        _this.$on('close', _this.onClose);
        // Listen to disable signals from others
        _this.$on('disable', _this.onDisable);
        // Listen to disable signals from others
        _this.$on('enable', _this.onEnable);
        // Observe content Child changes so we can notify popper of possible size change
        _this.setObservers(true);
        // Set intially open state
        if (_this.show) {
          _this.onOpen();
        }
      }
    });
  },
  updated: function updated() {
    // If content/props changes, etc
    if (this._toolpop) {
      this._toolpop.updateConfig(this.getConfig());
    }
  },

  /* istanbul ignore next: not easy to test */
  activated: function activated() {
    // Called when component is inside a <keep-alive> and component brought offline
    this.setObservers(true);
  },

  /* istanbul ignore next: not easy to test */
  deactivated: function deactivated() {
    // Called when component is inside a <keep-alive> and component taken offline
    if (this._toolpop) {
      this.setObservers(false);
      this._toolpop.hide();
    }
  },

  /* istanbul ignore next: not easy to test */
  beforeDestroy: function beforeDestroy() {
    // Shutdown our local event listeners
    this.$off('open', this.onOpen);
    this.$off('close', this.onClose);
    this.$off('disable', this.onDisable);
    this.$off('enable', this.onEnable);
    this.setObservers(false);
    // bring our content back if needed
    this.bringItBack();
    if (this._toolpop) {
      this._toolpop.destroy();
      this._toolpop = null;
    }
  },

  computed: {
    baseConfig: function baseConfig() {
      var cont = this.container;
      var delay = _typeof(this.delay) === 'object' ? this.delay : parseInt(this.delay, 10) || 0;
      return {
        // Title prop
        title: (this.title || '').trim() || '',
        // Contnt prop (if popover)
        content: (this.content || '').trim() || '',
        // Tooltip/Popover placement
        placement: PLACEMENTS[this.placement] || 'auto',
        // Container curently needs to be an ID with '#' prepended, if null then body is used
        container: cont ? /^#/.test(cont) ? cont : '#' + cont : false,
        // boundariesElement passed to popper
        boundary: this.boundary,
        // Show/Hide delay
        delay: delay || 0,
        // Offset can be css distance. if no units, pixels are assumed
        offset: this.offset || 0,
        // Disable fade Animation?
        animation: !this.noFade,
        // Open/Close Trigger(s)
        trigger: Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["d" /* isArray */])(this.triggers) ? this.triggers.join(' ') : this.triggers,
        // Callbacks so we can trigger events on component
        callbacks: {
          show: this.onShow,
          shown: this.onShown,
          hide: this.onHide,
          hidden: this.onHidden,
          enabled: this.onEnabled,
          disabled: this.onDisabled
        }
      };
    }
  },
  methods: {
    getConfig: function getConfig() {
      var cfg = Object(__WEBPACK_IMPORTED_MODULE_1__utils_object__["a" /* assign */])({}, this.baseConfig);
      if (this.$refs.title && this.$refs.title.innerHTML.trim()) {
        // If slot has content, it overrides 'title' prop
        // We use the DOM node as content to allow components!
        cfg.title = this.$refs.title;
        cfg.html = true;
      }
      if (this.$refs.content && this.$refs.content.innerHTML.trim()) {
        // If slot has content, it overrides 'content' prop
        // We use the DOM node as content to allow components!
        cfg.content = this.$refs.content;
        cfg.html = true;
      }
      return cfg;
    },
    onOpen: function onOpen() {
      if (this._toolpop) {
        this._toolpop.show();
      }
    },
    onClose: function onClose(callback) {
      if (this._toolpop) {
        this._toolpop.hide(callback);
      } else if (typeof callback === 'function') {
        callback();
      }
    },
    onDisable: function onDisable() {
      if (this._toolpop) {
        this._toolpop.disable();
      }
    },
    onEnable: function onEnable() {
      if (this._toolpop) {
        this._toolpop.enable();
      }
    },
    updatePosition: function updatePosition() {
      if (this._toolpop) {
        // Instruct popper to reposition popover if necessary
        this._toolpop.update();
      }
    },
    getTarget: function getTarget() {
      var target = this.target;
      if (typeof target === 'function') {
        target = target();
      }
      if (typeof target === 'string') {
        // Assume ID of element
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["g" /* getById */])(target);
      } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["l" /* isElement */])(target.$el)) {
        // Component reference
        return target.$el;
      } else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["l" /* isElement */])(target)) {
        // Element reference
        return target;
      }
      return null;
    },
    onShow: function onShow(evt) {
      this.$emit('show', evt);
    },
    onShown: function onShown(evt) {
      this.setObservers(true);
      this.$emit('update:show', true);
      this.$emit('shown', evt);
    },
    onHide: function onHide(evt) {
      this.$emit('hide', evt);
    },
    onHidden: function onHidden(evt) {
      this.setObservers(false);
      // bring our content back if needed to keep Vue happy
      // Tooltip class will move it back to tip when shown again
      this.bringItBack();
      this.$emit('update:show', false);
      this.$emit('hidden', evt);
    },
    onEnabled: function onEnabled(evt) {
      if (!evt || evt.type !== 'enabled') {
        // Prevent possible endless loop if user mistakienly fires enabled instead of enable
        return;
      }
      this.$emit('update:disabled', false);
      this.$emit('disabled');
    },
    onDisabled: function onDisabled(evt) {
      if (!evt || evt.type !== 'disabled') {
        // Prevent possible endless loop if user mistakienly fires disabled instead of disable
        return;
      }
      this.$emit('update:disabled', true);
      this.$emit('enabled');
    },
    bringItBack: function bringItBack() {
      // bring our content back if needed to keep Vue happy
      if (this.$el && this.$refs.title) {
        this.$el.appendChild(this.$refs.title);
      }
      if (this.$el && this.$refs.content) {
        this.$el.appendChild(this.$refs.content);
      }
    },

    /* istanbul ignore next: not easy to test */
    setObservers: function setObservers(on) {
      if (on) {
        if (this.$refs.title) {
          this._obs_title = Object(__WEBPACK_IMPORTED_MODULE_4__utils_observe_dom__["a" /* default */])(this.$refs.title, this.updatePosition.bind(this), OBSERVER_CONFIG);
        }
        if (this.$refs.content) {
          this._obs_content = Object(__WEBPACK_IMPORTED_MODULE_4__utils_observe_dom__["a" /* default */])(this.$refs.content, this.updatePosition.bind(this), OBSERVER_CONFIG);
        }
      } else {
        if (this._obs_title) {
          this._obs_title.disconnect();
          this._obs_title = null;
        }
        if (this._obs_content) {
          this._obs_content.disconnect();
          this._obs_content = null;
        }
      }
    }
  }
});

/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(h) {
    var childNodes = h(false);
    if (this.$slots.default) {
      childNodes = this.$slots.default;
    } else if (this.label) {
      childNodes = h('span', { domProps: { innerHTML: this.label } });
    } else if (this.computedShowProgress) {
      childNodes = this.progress.toFixed(this.computedPrecision);
    } else if (this.computedShowValue) {
      childNodes = this.value.toFixed(this.computedPrecision);
    }
    return h('div', {
      class: this.progressBarClasses,
      style: this.progressBarStyles,
      attrs: {
        role: 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': this.computedMax.toString(),
        'aria-valuenow': this.value.toFixed(this.computedPrecision)
      }
    }, [childNodes]);
  },

  computed: {
    progressBarClasses: function progressBarClasses() {
      return ['progress-bar', this.computedVariant ? 'bg-' + this.computedVariant : '', this.computedStriped || this.computedAnimated ? 'progress-bar-striped' : '', this.computedAnimated ? 'progress-bar-animated' : ''];
    },
    progressBarStyles: function progressBarStyles() {
      return {
        width: 100 * (this.value / this.computedMax) + '%'
      };
    },
    progress: function progress() {
      var p = Math.pow(10, this.computedPrecision);
      return Math.round(100 * p * this.value / this.computedMax) / p;
    },
    computedMax: function computedMax() {
      // Prefer our max over parent setting
      return typeof this.max === 'number' ? this.max : this.$parent.max || 100;
    },
    computedVariant: function computedVariant() {
      // Prefer our variant over parent setting
      return this.variant || this.$parent.variant;
    },
    computedPrecision: function computedPrecision() {
      // Prefer our precision over parent setting
      return typeof this.precision === 'number' ? this.precision : this.$parent.precision || 0;
    },
    computedStriped: function computedStriped() {
      // Prefer our striped over parent setting
      return typeof this.striped === 'boolean' ? this.striped : this.$parent.striped || false;
    },
    computedAnimated: function computedAnimated() {
      // Prefer our animated over parent setting
      return typeof this.animated === 'boolean' ? this.animated : this.$parent.animated || false;
    },
    computedShowProgress: function computedShowProgress() {
      // Prefer our showProgress over parent setting
      return typeof this.showProgress === 'boolean' ? this.showProgress : this.$parent.showProgress || false;
    },
    computedShowValue: function computedShowValue() {
      // Prefer our showValue over parent setting
      return typeof this.showValue === 'boolean' ? this.showValue : this.$parent.showValue || false;
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: null
    },
    // $parent prop values take precedence over the following props
    // Which is why they are defaulted to null
    max: {
      type: Number,
      default: null
    },
    precision: {
      type: Number,
      default: null
    },
    variant: {
      type: String,
      default: null
    },
    striped: {
      type: Boolean,
      default: null
    },
    animated: {
      type: Boolean,
      default: null
    },
    showProgress: {
      type: Boolean,
      default: null
    },
    showValue: {
      type: Boolean,
      default: null
    }
  }
});

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_plugins__ = __webpack_require__(305);




var VuePlugin = {
  install: function install(Vue) {
    if (Vue._bootstrap_vue_installed) {
      return;
    }

    Vue._bootstrap_vue_installed = true;

    // Register component plugins
    for (var plugin in __WEBPACK_IMPORTED_MODULE_0__components__) {
      Vue.use(__WEBPACK_IMPORTED_MODULE_0__components__[plugin]);
    }

    // Register directive plugins
    for (var _plugin in __WEBPACK_IMPORTED_MODULE_1__directives__) {
      Vue.use(__WEBPACK_IMPORTED_MODULE_1__directives__[_plugin]);
    }
  }
};

Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__badge__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_group__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__button_toolbar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_group__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__collapse__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dropdown__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__embed__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__form_group__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__form_checkbox__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__form_radio__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__form_input__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__form_textarea__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_file__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__form_select__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__image__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__jumbotron__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__link__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__list_group__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__media__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modal__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__nav__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__navbar__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pagination__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pagination_nav__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__popover__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__progress__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__table__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__tabs__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__tooltip__ = __webpack_require__(467);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_0__alert__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_1__badge__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return __WEBPACK_IMPORTED_MODULE_2__breadcrumb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_3__button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return __WEBPACK_IMPORTED_MODULE_5__button_toolbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return __WEBPACK_IMPORTED_MODULE_4__button_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_7__card__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return __WEBPACK_IMPORTED_MODULE_8__carousel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return __WEBPACK_IMPORTED_MODULE_10__collapse__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_11__dropdown__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Embed", function() { return __WEBPACK_IMPORTED_MODULE_12__embed__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_13__form__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return __WEBPACK_IMPORTED_MODULE_14__form_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormInput", function() { return __WEBPACK_IMPORTED_MODULE_17__form_input__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormTextarea", function() { return __WEBPACK_IMPORTED_MODULE_18__form_textarea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormFile", function() { return __WEBPACK_IMPORTED_MODULE_19__form_file__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_15__form_checkbox__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormRadio", function() { return __WEBPACK_IMPORTED_MODULE_16__form_radio__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelect", function() { return __WEBPACK_IMPORTED_MODULE_20__form_select__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return __WEBPACK_IMPORTED_MODULE_21__image__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_6__input_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return __WEBPACK_IMPORTED_MODULE_22__jumbotron__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return __WEBPACK_IMPORTED_MODULE_9__layout__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_23__link__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return __WEBPACK_IMPORTED_MODULE_24__list_group__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return __WEBPACK_IMPORTED_MODULE_25__media__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_26__modal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return __WEBPACK_IMPORTED_MODULE_27__nav__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return __WEBPACK_IMPORTED_MODULE_28__navbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_29__pagination__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationNav", function() { return __WEBPACK_IMPORTED_MODULE_30__pagination_nav__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_31__popover__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return __WEBPACK_IMPORTED_MODULE_32__progress__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_33__table__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_34__tabs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_35__tooltip__["a"]; });







































/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_plugins__ = __webpack_require__(305);



var components = {
  bAlert: __WEBPACK_IMPORTED_MODULE_0__alert__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button_close__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_css__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__alert_css__);




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { bButtonClose: __WEBPACK_IMPORTED_MODULE_0__button_button_close__["a" /* default */] },
  render: function render(h) {
    if (!this.localShow) {
      // If not showing, render placeholder
      return h(false);
    }
    var dismissBtn = h(false);
    if (this.dismissible) {
      // Add dismiss button
      dismissBtn = h('b-button-close', { attrs: { 'aria-label': this.dismissLabel }, on: { click: this.dismiss } }, [this.$slots.dismiss]);
    }
    var alert = h('div', { class: this.classObject, attrs: { role: 'alert', 'aria-live': 'polite', 'aria-atomic': true } }, [dismissBtn, this.$slots.default]);
    return !this.fade ? alert : h('transition', { props: { name: 'fade', appear: true } }, [alert]);
  },

  model: {
    prop: 'show',
    event: 'input'
  },
  data: function data() {
    return {
      countDownTimerId: null,
      dismissed: false
    };
  },

  computed: {
    classObject: function classObject() {
      return ['alert', this.alertVariant, this.dismissible ? 'alert-dismissible' : ''];
    },
    alertVariant: function alertVariant() {
      var variant = this.variant;
      return 'alert-' + variant;
    },
    localShow: function localShow() {
      return !this.dismissed && (this.countDownTimerId || this.show);
    }
  },
  props: {
    variant: {
      type: String,
      default: 'info'
    },
    dismissible: {
      type: Boolean,
      default: false
    },
    dismissLabel: {
      type: String,
      default: 'Close'
    },
    show: {
      type: [Boolean, Number],
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show: function show() {
      this.showChanged();
    }
  },
  mounted: function mounted() {
    this.showChanged();
  },
  destroyed /* istanbul ignore next */: function destroyed() {
    this.clearCounter();
  },

  methods: {
    dismiss: function dismiss() {
      this.clearCounter();
      this.dismissed = true;
      this.$emit('dismissed');
      this.$emit('input', false);
      if (typeof this.show === 'number') {
        this.$emit('dismiss-count-down', 0);
        this.$emit('input', 0);
      } else {
        this.$emit('input', false);
      }
    },
    clearCounter: function clearCounter() {
      if (this.countDownTimerId) {
        clearInterval(this.countDownTimerId);
        this.countDownTimerId = null;
      }
    },
    showChanged: function showChanged() {
      var _this = this;

      // Reset counter status
      this.clearCounter();
      // Reset dismiss status
      this.dismissed = false;
      // No timer for boolean values
      if (this.show === true || this.show === false || this.show === null || this.show === 0) {
        return;
      }
      // Start counter
      var dismissCountDown = this.show;
      this.countDownTimerId = setInterval(function () {
        if (dismissCountDown < 1) {
          _this.dismiss();
          return;
        }
        dismissCountDown--;
        _this.$emit('dismiss-count-down', dismissCountDown);
        _this.$emit('input', dismissCountDown);
      }, 1000);
    }
  }
});

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(369);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(206)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../css-loader/index.js!./alert.css", function() {
		var newContent = require("!!../../../../css-loader/index.js!./alert.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, ".fade-enter-active, .fade-leave-active {\n    transition: opacity .15s linear;\n}\n.fade-enter, .fade-leave-to {\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__badge__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_plugins__ = __webpack_require__(305);



var components = {
  bBadge: __WEBPACK_IMPORTED_MODULE_0__badge__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__link_link__ = __webpack_require__(311);






var linkProps = Object(__WEBPACK_IMPORTED_MODULE_3__link_link__["c" /* propsFactory */])();
delete linkProps.href.default;
delete linkProps.to.default;

var props = Object(__WEBPACK_IMPORTED_MODULE_2__utils_object__["a" /* assign */])(linkProps, {
  tag: {
    type: String,
    default: 'span'
  },
  variant: {
    type: String,
    default: 'secondary'
  },
  pill: {
    type: Boolean,
    default: false
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var tag = !props.href && !props.to ? props.tag : __WEBPACK_IMPORTED_MODULE_3__link_link__["a" /* default */];

    var componentData = {
      staticClass: 'badge',
      class: [!props.variant ? 'badge-secondary' : 'badge-' + props.variant, {
        'badge-pill': Boolean(props.pill),
        active: props.active,
        disabled: props.disabled
      }],
      props: Object(__WEBPACK_IMPORTED_MODULE_1__utils_pluck_props__["a" /* default */])(linkProps, props)
    };

    return h(tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, componentData), children);
  }
});

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breadcrumb__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_item__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_link__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_plugins__ = __webpack_require__(305);





var components = {
  bBreadcrumb: __WEBPACK_IMPORTED_MODULE_0__breadcrumb__["a" /* default */],
  bBreadcrumbItem: __WEBPACK_IMPORTED_MODULE_1__breadcrumb_item__["a" /* default */],
  bBreadcrumbLink: __WEBPACK_IMPORTED_MODULE_2__breadcrumb_link__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_3__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_item__ = __webpack_require__(335);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };






var props = {
  items: {
    type: Array,
    default: null
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var childNodes = children;
    // Build child nodes from items if given.
    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["d" /* isArray */])(props.items)) {
      var activeDefined = false;
      childNodes = props.items.map(function (item, idx) {
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) !== 'object') {
          item = { text: item };
        }
        // Copy the value here so we can normalize it.
        var active = item.active;
        if (active) {
          activeDefined = true;
        }
        if (!active && !activeDefined) {
          // Auto-detect active by position in list.
          active = idx + 1 === props.items.length;
        }

        return h(__WEBPACK_IMPORTED_MODULE_3__breadcrumb_item__["a" /* default */], { props: Object(__WEBPACK_IMPORTED_MODULE_2__utils_object__["a" /* assign */])({}, item, { active: active }) });
      });
    }

    return h('ol', Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, { staticClass: 'breadcrumb' }), childNodes);
  }
});

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button_close__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_plugins__ = __webpack_require__(305);




var components = {
  bButton: __WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */],
  bBtn: __WEBPACK_IMPORTED_MODULE_0__button__["a" /* default */],
  bButtonClose: __WEBPACK_IMPORTED_MODULE_1__button_close__["a" /* default */],
  bBtnClose: __WEBPACK_IMPORTED_MODULE_1__button_close__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_group__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_plugins__ = __webpack_require__(305);



var components = {
  bButtonGroup: __WEBPACK_IMPORTED_MODULE_0__button_group__["a" /* default */],
  bBtnGroup: __WEBPACK_IMPORTED_MODULE_0__button_group__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__(307);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var props = {
  vertical: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null,
    validator: function validator(size) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(['sm', '', 'lg'], size);
    }
  },
  tag: {
    type: String,
    default: 'div'
  },
  ariaRole: {
    type: String,
    default: 'group'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      class: _defineProperty({
        'btn-group': !props.vertical,
        'btn-group-vertical': props.vertical
      }, 'btn-group-' + props.size, Boolean(props.size)),
      attrs: { 'role': props.ariaRole }
    }), children);
  }
});

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_toolbar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_plugins__ = __webpack_require__(305);



var components = {
  bButtonToolbar: __WEBPACK_IMPORTED_MODULE_0__button_toolbar__["a" /* default */],
  bBtnToolbar: __WEBPACK_IMPORTED_MODULE_0__button_toolbar__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_1__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__ = __webpack_require__(314);



var ITEM_SELECTOR = ['.btn:not(.disabled):not([disabled]):not(.dropdown-item)', '.form-control:not(.disabled):not([disabled])', 'select:not(.disabled):not([disabled])', 'input[type="checkbox"]:not(.disabled)', 'input[type="radio"]:not(.disabled)'].join(',');

/* harmony default export */ __webpack_exports__["a"] = ({
  render: function render(h) {
    return h('div', {
      class: this.classObject,
      attrs: {
        role: 'toolbar',
        tabindex: this.keyNav ? '0' : null
      },
      on: {
        focusin: this.onFocusin,
        keydown: this.onKeydown
      }
    }, [this.$slots.default]);
  },

  computed: {
    classObject: function classObject() {
      return ['btn-toolbar', this.justify && !this.vertical ? 'justify-content-between' : ''];
    }
  },
  props: {
    justify: {
      type: Boolean,
      default: false
    },
    keyNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onFocusin: function onFocusin(evt) {
      if (evt.target === this.$el) {
        evt.preventDefault();
        evt.stopPropagation();
        this.focusFirst(evt);
      }
    },
    onKeydown: function onKeydown(evt) {
      if (!this.keyNav) {
        return;
      }
      var key = evt.keyCode;
      var shift = evt.shiftKey;
      if (key === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].UP || key === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].LEFT) {
        evt.preventDefault();
        evt.stopPropagation();
        if (shift) {
          this.focusFirst(evt);
        } else {
          this.focusNext(evt, true);
        }
      } else if (key === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].DOWN || key === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].RIGHT) {
        evt.preventDefault();
        evt.stopPropagation();
        if (shift) {
          this.focusLast(evt);
        } else {
          this.focusNext(evt, false);
        }
      }
    },
    setItemFocus: function setItemFocus(item) {
      this.$nextTick(function () {
        item.focus();
      });
    },
    focusNext: function focusNext(evt, prev) {
      var items = this.getItems();
      if (items.length < 1) {
        return;
      }
      var index = items.indexOf(evt.target);
      if (prev && index > 0) {
        index--;
      } else if (!prev && index < items.length - 1) {
        index++;
      }
      if (index < 0) {
        index = 0;
      }
      this.setItemFocus(items[index]);
    },
    focusFirst: function focusFirst(evt) {
      var items = this.getItems();
      if (items.length > 0) {
        this.setItemFocus(items[0]);
      }
    },
    focusLast: function focusLast(evt) {
      var items = this.getItems();
      if (items.length > 0) {
        this.setItemFocus([items.length - 1]);
      }
    },
    getItems: function getItems() {
      var items = Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom__["u" /* selectAll */])(ITEM_SELECTOR, this.$el);
      items.forEach(function (item) {
        // Ensure tabfocus is -1 on any new elements
        item.tabIndex = -1;
      });
      return items.filter(function (el) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils_dom__["m" /* isVisible */])(el);
      });
    }
  },
  mounted: function mounted() {
    if (this.keyNav) {
      // Pre-set the tabindexes if the markup does not include tabindex="-1" on the toolbar items
      this.getItems();
    }
  }
});

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_plugins__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_group__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_group_addon__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_group_prepend__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_group_append__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_group_text__ = __webpack_require__(326);








var components = {
  bInputGroup: __WEBPACK_IMPORTED_MODULE_1__input_group__["a" /* default */],
  bInputGroupAddon: __WEBPACK_IMPORTED_MODULE_2__input_group_addon__["a" /* default */],
  bInputGroupPrepend: __WEBPACK_IMPORTED_MODULE_3__input_group_prepend__["a" /* default */],
  bInputGroupAppend: __WEBPACK_IMPORTED_MODULE_4__input_group_append__["a" /* default */],
  bInputGroupText: __WEBPACK_IMPORTED_MODULE_5__input_group_text__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_0__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_group_prepend__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_group_append__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_group_text__ = __webpack_require__(326);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var props = {
  id: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: null
  },
  prepend: {
    type: String,
    default: null
  },
  append: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots;

    var $slots = slots();

    var childNodes = [];

    // Prepend prop
    if (props.prepend) {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_1__input_group_prepend__["a" /* default */], [h(__WEBPACK_IMPORTED_MODULE_3__input_group_text__["a" /* default */], { domProps: { innerHTML: props.prepend } })]));
    }

    // Prepend slot
    if ($slots.prepend) {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_1__input_group_prepend__["a" /* default */], $slots.prepend));
    }

    // Default slot
    childNodes.push($slots.default);

    // Append prop
    if (props.append) {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_2__input_group_append__["a" /* default */], [h(__WEBPACK_IMPORTED_MODULE_3__input_group_text__["a" /* default */], { domProps: { innerHTML: props.append } })]));
    }

    // Append slot
    if ($slots.append) {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_2__input_group_append__["a" /* default */], $slots.append));
    }

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'input-group',
      class: _defineProperty({}, 'input-group-' + props.size, Boolean(props.size)),
      attrs: {
        id: props.id || null,
        role: 'group'
      }
    }), childNodes);
  }
});

/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_header__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_body__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_footer__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_img__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_group__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_plugins__ = __webpack_require__(305);








var components = {
  bCard: __WEBPACK_IMPORTED_MODULE_0__card__["a" /* default */],
  bCardHeader: __WEBPACK_IMPORTED_MODULE_1__card_header__["a" /* default */],
  bCardBody: __WEBPACK_IMPORTED_MODULE_2__card_body__["a" /* default */],
  bCardFooter: __WEBPACK_IMPORTED_MODULE_3__card_footer__["a" /* default */],
  bCardImg: __WEBPACK_IMPORTED_MODULE_4__card_img__["a" /* default */],
  bCardGroup: __WEBPACK_IMPORTED_MODULE_5__card_group__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_6__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_6__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_unprefix_prop_name__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_copyProps__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_pluck_props__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixins_card_mixin__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_body__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_header__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_footer__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__card_img__ = __webpack_require__(343);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var cardImgProps = Object(__WEBPACK_IMPORTED_MODULE_3__utils_copyProps__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_10__card_img__["b" /* props */], __WEBPACK_IMPORTED_MODULE_1__utils_prefix_prop_name__["a" /* default */].bind(null, 'img'));
cardImgProps.imgSrc.required = false;

var props = Object(__WEBPACK_IMPORTED_MODULE_5__utils_object__["a" /* assign */])({}, __WEBPACK_IMPORTED_MODULE_7__card_body__["b" /* props */], __WEBPACK_IMPORTED_MODULE_8__card_header__["b" /* props */], __WEBPACK_IMPORTED_MODULE_9__card_footer__["b" /* props */], cardImgProps, Object(__WEBPACK_IMPORTED_MODULE_3__utils_copyProps__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_6__mixins_card_mixin__["a" /* default */].props), {
  align: {
    type: String,
    default: null
  },
  noBody: {
    type: Boolean,
    default: false
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        children = _ref.children;

    // The order of the conditionals matter.
    // We are building the component markup in order.
    var childNodes = [];
    var $slots = slots();
    var img = props.imgSrc ? h(__WEBPACK_IMPORTED_MODULE_10__card_img__["a" /* default */], {
      props: Object(__WEBPACK_IMPORTED_MODULE_4__utils_pluck_props__["a" /* default */])(cardImgProps, props, __WEBPACK_IMPORTED_MODULE_2__utils_unprefix_prop_name__["a" /* default */].bind(null, 'img'))
    }) : null;

    if (img) {
      // Above the header placement.
      if (props.imgTop || !props.imgBottom) {
        childNodes.push(img);
      }
    }
    if (props.header || $slots.header) {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_8__card_header__["a" /* default */], { props: Object(__WEBPACK_IMPORTED_MODULE_4__utils_pluck_props__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_8__card_header__["b" /* props */], props) }, $slots.header));
    }
    if (props.noBody) {
      childNodes.push($slots.default);
    } else {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_7__card_body__["a" /* default */], { props: Object(__WEBPACK_IMPORTED_MODULE_4__utils_pluck_props__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_7__card_body__["b" /* props */], props) }, $slots.default));
    }
    if (props.footer || $slots.footer) {
      childNodes.push(h(__WEBPACK_IMPORTED_MODULE_9__card_footer__["a" /* default */], { props: Object(__WEBPACK_IMPORTED_MODULE_4__utils_pluck_props__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_9__card_footer__["b" /* props */], props) }, $slots.footer));
    }
    if (img && props.imgBottom) {
      // Below the footer placement.
      childNodes.push(img);
    }

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'card',
      class: (_class = {}, _defineProperty(_class, 'text-' + props.align, Boolean(props.align)), _defineProperty(_class, 'bg-' + props.bgVariant, Boolean(props.bgVariant)), _defineProperty(_class, 'border-' + props.borderVariant, Boolean(props.borderVariant)), _defineProperty(_class, 'text-' + props.textVariant, Boolean(props.textVariant)), _class)
    }), childNodes);
  }
});

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = unPrefixPropName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lower_first__ = __webpack_require__(384);


/**
 * @param {string} prefix
 * @param {string} value
 */
function unPrefixPropName(prefix, value) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__lower_first__["a" /* default */])(value.replace(prefix, ''));
}

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lowerFirst;
/**
 * @param {string} str
 */
function lowerFirst(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);


var props = {
  tag: {
    type: String,
    default: 'div'
  },
  deck: {
    type: Boolean,
    default: false
  },
  columns: {
    type: Boolean,
    default: false
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var staticClass = 'card-group';
    if (props.columns) {
      staticClass = 'card-columns';
    }
    if (props.deck) {
      staticClass = 'card-deck';
    }

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, { staticClass: staticClass }), children);
  }
});

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_slide__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_plugins__ = __webpack_require__(305);




var components = {
  bCarousel: __WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* default */],
  bCarouselSlide: __WEBPACK_IMPORTED_MODULE_1__carousel_slide__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_2__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_observe_dom__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_id__ = __webpack_require__(309);





// Slide directional classes
var DIRECTION = {
  next: {
    dirClass: 'carousel-item-left',
    overlayClass: 'carousel-item-next'
  },
  prev: {
    dirClass: 'carousel-item-right',
    overlayClass: 'carousel-item-prev'
  }

  // Fallback Transition duration (with a little buffer) in ms
};var TRANS_DURATION = 600 + 50;

// Transition Event names
var TransitionEndEvents = {
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'otransitionend oTransitionEnd',
  transition: 'transitionend'

  // Return the browser specific transitionEnd event name
};function getTransisionEndEvent(el) {
  for (var name in TransitionEndEvents) {
    if (el.style[name] !== undefined) {
      return TransitionEndEvents[name];
    }
  }
  // fallback
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_id__["a" /* default */]],
  render: function render(h) {
    var _this = this;

    // Wrapper for slides
    var inner = h('div', {
      ref: 'inner',
      class: ['carousel-inner'],
      attrs: {
        id: this.safeId('__BV_inner_'),
        role: 'list'
      }
    }, [this.$slots.default]);

    // Prev and Next Controls
    var controls = h(false);
    if (this.controls) {
      controls = [h('a', {
        class: ['carousel-control-prev'],
        attrs: { href: '#', role: 'button', 'aria-controls': this.safeId('__BV_inner_') },
        on: {
          click: function click(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            _this.prev();
          },
          keydown: function keydown(evt) {
            var keyCode = evt.keyCode;
            if (keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].SPACE || keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].ENTER) {
              evt.preventDefault();
              evt.stopPropagation();
              _this.prev();
            }
          }
        }
      }, [h('span', { class: ['carousel-control-prev-icon'], attrs: { 'aria-hidden': 'true' } }), h('span', { class: ['sr-only'] }, [this.labelPrev])]), h('a', {
        class: ['carousel-control-next'],
        attrs: { href: '#', role: 'button', 'aria-controls': this.safeId('__BV_inner_') },
        on: {
          click: function click(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            _this.next();
          },
          keydown: function keydown(evt) {
            var keyCode = evt.keyCode;
            if (keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].SPACE || keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].ENTER) {
              evt.preventDefault();
              evt.stopPropagation();
              _this.next();
            }
          }
        }
      }, [h('span', { class: ['carousel-control-next-icon'], attrs: { 'aria-hidden': 'true' } }), h('span', { class: ['sr-only'] }, [this.labelNext])])];
    }

    // Indicators
    var indicators = h('ol', {
      class: ['carousel-indicators'],
      directives: [{ name: 'show', rawName: 'v-show', value: this.indicators, expression: 'indicators' }],
      attrs: {
        id: this.safeId('__BV_indicators_'),
        'aria-hidden': this.indicators ? 'false' : 'true',
        'aria-label': this.labelIndicators,
        'aria-owns': this.safeId('__BV_inner_')
      }
    }, this.slides.map(function (slide, n) {
      return h('li', {
        key: 'slide_' + n,
        class: { active: n === _this.index },
        attrs: {
          role: 'button',
          id: _this.safeId('__BV_indicator_' + (n + 1) + '_'),
          tabindex: _this.indicators ? '0' : '-1',
          'aria-current': n === _this.index ? 'true' : 'false',
          'aria-label': _this.labelGotoSlide + ' ' + (n + 1),
          'aria-describedby': _this.slides[n].id || null,
          'aria-controls': _this.safeId('__BV_inner_')
        },
        on: {
          click: function click(evt) {
            _this.setSlide(n);
          },
          keydown: function keydown(evt) {
            var keyCode = evt.keyCode;
            if (keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].SPACE || keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].ENTER) {
              evt.preventDefault();
              evt.stopPropagation();
              _this.setSlide(n);
            }
          }
        }
      });
    }));

    // Return the carousel
    return h('div', {
      class: ['carousel', 'slide'],
      style: { background: this.background },
      attrs: {
        role: 'region',
        id: this.safeId(),
        'aria-busy': this.isSliding ? 'true' : 'false'
      },
      on: {
        mouseenter: this.pause,
        mouseleave: this.restart,
        focusin: this.pause,
        focusout: this.restart,
        keydown: function keydown(evt) {
          var keyCode = evt.keyCode;
          if (keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].LEFT || keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].RIGHT) {
            evt.preventDefault();
            evt.stopPropagation();
            _this[keyCode === __WEBPACK_IMPORTED_MODULE_1__utils_key_codes__["a" /* default */].LEFT ? 'prev' : 'next']();
          }
        }
      }
    }, [inner, controls, indicators]);
  },
  data: function data() {
    return {
      index: this.value || 0,
      isSliding: false,
      intervalId: null,
      transitionEndEvent: null,
      slides: [],
      direction: null
    };
  },

  props: {
    labelPrev: {
      type: String,
      default: 'Previous Slide'
    },
    labelNext: {
      type: String,
      default: 'Next Slide'
    },
    labelGotoSlide: {
      type: String,
      default: 'Goto Slide'
    },
    labelIndicators: {
      type: String,
      default: 'Select a slide to display'
    },
    interval: {
      type: Number,
      default: 5000
    },
    indicators: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: false
    },
    imgWidth: {
      // Sniffed by carousel-slide
      type: [Number, String]
    },
    imgHeight: {
      // Sniffed by carousel-slide
      type: [Number, String]
    },
    background: {
      type: String
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isCycling: function isCycling() {
      return Boolean(this.intervalId);
    }
  },
  methods: {
    // Set slide
    setSlide: function setSlide(slide) {
      var _this2 = this;

      // Don't animate when page is not visible
      if (typeof document !== 'undefined' && document.visibilityState && document.hidden) {
        return;
      }
      var len = this.slides.length;
      // Don't do anything if nothing to slide to
      if (len === 0) {
        return;
      }
      // Don't change slide while transitioning, wait until transition is done
      if (this.isSliding) {
        // Schedule slide after sliding complete
        this.$once('sliding-end', function () {
          return _this2.setSlide(slide);
        });
        return;
      }
      // Make sure we have an integer (you never know!)
      slide = Math.floor(slide);
      // Set new slide index. Wrap around if necessary
      this.index = slide >= len ? 0 : slide >= 0 ? slide : len - 1;
    },

    // Previous slide
    prev: function prev() {
      this.direction = 'prev';
      this.setSlide(this.index - 1);
    },

    // Next slide
    next: function next() {
      this.direction = 'next';
      this.setSlide(this.index + 1);
    },

    // Pause auto rotation
    pause: function pause() {
      if (this.isCycling) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        if (this.slides[this.index]) {
          // Make current slide focusable for screen readers
          this.slides[this.index].tabIndex = 0;
        }
      }
    },

    // Start auto rotate slides
    start: function start() {
      var _this3 = this;

      // Don't start if no interval, or if we are already running
      if (!this.interval || this.isCycling) {
        return;
      }
      this.slides.forEach(function (slide) {
        slide.tabIndex = -1;
      });
      this.intervalId = setInterval(function () {
        _this3.next();
      }, Math.max(1000, this.interval));
    },

    // Re-Start auto rotate slides when focus/hover leaves the carousel
    restart: function restart(evt) {
      if (!this.$el.contains(document.activeElement)) {
        this.start();
      }
    },

    // Update slide list
    updateSlides: function updateSlides() {
      this.pause();
      // Get all slides as DOM elements
      this.slides = Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["u" /* selectAll */])('.carousel-item', this.$refs.inner);
      var numSlides = this.slides.length;
      // Keep slide number in range
      var index = Math.max(0, Math.min(Math.floor(this.index), numSlides - 1));
      this.slides.forEach(function (slide, idx) {
        var n = idx + 1;
        if (idx === index) {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* addClass */])(slide, 'active');
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["s" /* removeClass */])(slide, 'active');
        }
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(slide, 'aria-current', idx === index ? 'true' : 'false');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(slide, 'aria-posinset', String(n));
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(slide, 'aria-setsize', String(numSlides));
        slide.tabIndex = -1;
      });
      // Set slide as active
      this.setSlide(index);
      this.start();
    },
    calcDirection: function calcDirection() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var curIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var nextIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!direction) {
        return nextIndex > curIndex ? DIRECTION.next : DIRECTION.prev;
      }
      return DIRECTION[direction];
    }
  },
  watch: {
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.setSlide(newVal);
      }
    },
    interval: function interval(newVal, oldVal) {
      if (newVal === oldVal) {
        return;
      }
      if (!newVal) {
        // Pausing slide show
        this.pause();
      } else {
        // Restarting or Changing interval
        this.pause();
        this.start();
      }
    },
    index: function index(val, oldVal) {
      var _this4 = this;

      if (val === oldVal || this.isSliding) {
        return;
      }
      // Determine sliding direction
      var direction = this.calcDirection(this.direction, oldVal, val);
      // Determine current and next slides
      var currentSlide = this.slides[oldVal];
      var nextSlide = this.slides[val];
      // Don't do anything if there aren't any slides to slide to
      if (!currentSlide || !nextSlide) {
        return;
      }
      // Start animating
      this.isSliding = true;
      this.$emit('sliding-start', val);
      // Update v-model
      this.$emit('input', this.index);
      nextSlide.classList.add(direction.overlayClass);
      // Trigger a reflow of next slide
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["q" /* reflow */])(nextSlide);
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* addClass */])(currentSlide, direction.dirClass);
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* addClass */])(nextSlide, direction.dirClass);
      // Transition End handler
      var called = false;
      /* istanbul ignore next: dificult to test */
      var onceTransEnd = function onceTransEnd(evt) {
        if (called) {
          return;
        }
        called = true;
        if (_this4.transitionEndEvent) {
          var events = _this4.transitionEndEvent.split(/\s+/);
          events.forEach(function (event) {
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["c" /* eventOff */])(currentSlide, event, onceTransEnd);
          });
        }
        _this4._animationTimeout = null;
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["s" /* removeClass */])(nextSlide, direction.dirClass);
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["s" /* removeClass */])(nextSlide, direction.overlayClass);
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["a" /* addClass */])(nextSlide, 'active');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["s" /* removeClass */])(currentSlide, 'active');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["s" /* removeClass */])(currentSlide, direction.dirClass);
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["s" /* removeClass */])(currentSlide, direction.overlayClass);
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(currentSlide, 'aria-current', 'false');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(nextSlide, 'aria-current', 'true');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(currentSlide, 'aria-hidden', 'true');
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["v" /* setAttr */])(nextSlide, 'aria-hidden', 'false');
        currentSlide.tabIndex = -1;
        nextSlide.tabIndex = -1;
        if (!_this4.isCycling) {
          // Focus the next slide for screen readers if not in play mode
          nextSlide.tabIndex = 0;
          _this4.$nextTick(function () {
            nextSlide.focus();
          });
        }
        _this4.isSliding = false;
        _this4.direction = null;
        // Notify ourselves that we're done sliding (slid)
        _this4.$nextTick(function () {
          return _this4.$emit('sliding-end', val);
        });
      };
      // Clear transition classes after transition ends
      if (this.transitionEndEvent) {
        var events = this.transitionEndEvent.split(/\s+/);
        events.forEach(function (event) {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_dom__["d" /* eventOn */])(currentSlide, event, onceTransEnd);
        });
      }
      // Fallback to setTimeout
      this._animationTimeout = setTimeout(onceTransEnd, TRANS_DURATION);
    }
  },
  created: function created() {
    // Create private non-reactive props
    this._animationTimeout = null;
  },
  mounted: function mounted() {
    // Cache current browser transitionend event name
    this.transitionEndEvent = getTransisionEndEvent(this.$el) || null;
    // Get all slides
    this.updateSlides();
    // Observe child changes so we can update slide list
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_observe_dom__["a" /* default */])(this.$refs.inner, this.updateSlides.bind(this), {
      subtree: false,
      childList: true,
      attributes: true,
      attributeFilter: ['id']
    });
  },

  /* istanbul ignore next: dificult to test */
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.intervalId);
    clearTimeout(this._animationTimeout);
    this.intervalId = null;
    this._animationTimeout = null;
  }
});

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_img__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_warn__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_id__ = __webpack_require__(309);




/* harmony default export */ __webpack_exports__["a"] = ({
  components: { bImg: __WEBPACK_IMPORTED_MODULE_0__image_img__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_id__["a" /* default */]],
  render: function render(h) {
    var $slots = this.$slots;

    var img = $slots.img;
    if (!img && (this.imgSrc || this.imgBlank)) {
      img = h('b-img', {
        props: {
          fluidGrow: true,
          block: true,
          src: this.imgSrc,
          blank: this.imgBlank,
          blankColor: this.imgBlankColor,
          width: this.computedWidth,
          height: this.computedHeight,
          alt: this.imgAlt
        }
      });
    }

    var content = h(this.contentTag, { class: this.contentClasses }, [this.caption ? h(this.captionTag, { domProps: { innerHTML: this.caption } }) : h(false), this.text ? h(this.textTag, { domProps: { innerHTML: this.text } }) : h(false), $slots.default]);

    return h('div', {
      class: ['carousel-item'],
      style: { background: this.background },
      attrs: { id: this.safeId(), role: 'listitem' }
    }, [img, content]);
  },

  props: {
    imgSrc: {
      type: String,
      default: function _default() {
        if (this && this.src) {
          // Deprecate src
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_warn__["a" /* default */])("b-carousel-slide: prop 'src' has been deprecated. Use 'img-src' instead");
          return this.src;
        }
        return null;
      }
    },
    src: {
      // Deprecated: use img-src instead
      type: String
    },
    imgAlt: {
      type: String
    },
    imgWidth: {
      type: [Number, String]
    },
    imgHeight: {
      type: [Number, String]
    },
    imgBlank: {
      type: Boolean,
      default: false
    },
    imgBlankColor: {
      type: String,
      default: 'transparent'
    },
    contentVisibleUp: {
      type: String
    },
    contentTag: {
      type: String,
      default: 'div'
    },
    caption: {
      type: String
    },
    captionTag: {
      type: String,
      default: 'h3'
    },
    text: {
      type: String
    },
    textTag: {
      type: String,
      default: 'p'
    },
    background: {
      type: String
    }
  },
  computed: {
    contentClasses: function contentClasses() {
      return ['carousel-caption', this.contentVisibleUp ? 'd-none' : '', this.contentVisibleUp ? 'd-' + this.contentVisibleUp + '-block' : ''];
    },
    computedWidth: function computedWidth() {
      // Use local width, or try parent width
      return this.imgWidth || this.$parent.imgWidth;
    },
    computedHeight: function computedHeight() {
      // Use local height, or try parent height
      return this.imgHeight || this.$parent.imgHeight;
    }
  }
});

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__container__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__row__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__col__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_row__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_plugins__ = __webpack_require__(305);






var components = {
  bContainer: __WEBPACK_IMPORTED_MODULE_0__container__["a" /* default */],
  bRow: __WEBPACK_IMPORTED_MODULE_1__row__["a" /* default */],
  bCol: __WEBPACK_IMPORTED_MODULE_2__col__["a" /* default */],
  bFormRow: __WEBPACK_IMPORTED_MODULE_3__form_row__["a" /* default */]
};

var VuePlugin = {
  install: function install(Vue) {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils_plugins__["a" /* registerComponents */])(Vue, components);
  }
};

Object(__WEBPACK_IMPORTED_MODULE_4__utils_plugins__["c" /* vueUse */])(VuePlugin);

/* harmony default export */ __webpack_exports__["a"] = (VuePlugin);

/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_array__ = __webpack_require__(307);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var COMMON_ALIGNMENT = ['start', 'end', 'center'];

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  noGutters: {
    type: Boolean,
    default: false
  },
  alignV: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(COMMON_ALIGNMENT.concat(['baseline', 'stretch']), str);
    }
  },
  alignH: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(COMMON_ALIGNMENT.concat(['between', 'around']), str);
    }
  },
  alignContent: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_array__["a" /* arrayIncludes */])(COMMON_ALIGNMENT.concat(['between', 'around', 'stretch']), str);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, {
      staticClass: 'row',
      class: (_class = {
        'no-gutters': props.noGutters
      }, _defineProperty(_class, 'align-items-' + props.alignV, props.alignV), _defineProperty(_class, 'justify-content-' + props.alignH, props.alignH), _defineProperty(_class, 'align-content-' + props.alignContent, props.alignContent), _class)
    }), children);
  }
});

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export computeBkPtClass */
/* unused harmony export props */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_memoize__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_suffix_prop_name__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_object__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_array__ = __webpack_require__(307);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Generates a prop object with a type of
 * [Boolean, String, Number]
 */
function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}

/**
 * Generates a prop object with a type of
 * [String, Number]
 */
function strNum() {
  return {
    type: [String, Number],
    default: null
  };
}

var computeBkPtClass = Object(__WEBPACK_IMPORTED_MODULE_1__utils_memoize__["a" /* default */])(function computeBkPt(type, breakpoint, val) {
  var className = type;
  if (val === false || val === null || val === undefined) {
    return undefined;
  }
  if (breakpoint) {
    className += '-' + breakpoint;
  }
  // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <b-col sm /> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.
  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  }
  // .order-md-6
  className += '-' + val;
  return className.toLowerCase();
});

var BREAKPOINTS = ['sm', 'md', 'lg', 'xl'];
// Supports classes like: .col-sm, .col-md-6, .col-lg-auto
var breakpointCol = BREAKPOINTS.reduce(
// eslint-disable-next-line no-sequences
function (propMap, breakpoint) {
  return propMap[breakpoint] = boolStrNum(), propMap;
}, Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null));
// Supports classes like: .offset-md-1, .offset-lg-12
var breakpointOffset = BREAKPOINTS.reduce(
// eslint-disable-next-line no-sequences
function (propMap, breakpoint) {
  return propMap[Object(__WEBPACK_IMPORTED_MODULE_2__utils_suffix_prop_name__["a" /* default */])(breakpoint, 'offset')] = strNum(), propMap;
}, Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null));
// Supports classes like: .order-md-1, .order-lg-12
var breakpointOrder = BREAKPOINTS.reduce(
// eslint-disable-next-line no-sequences
function (propMap, breakpoint) {
  return propMap[Object(__WEBPACK_IMPORTED_MODULE_2__utils_suffix_prop_name__["a" /* default */])(breakpoint, 'order')] = strNum(), propMap;
}, Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null));

// For loop doesn't need to check hasOwnProperty
// when using an object created from null
var breakpointPropMap = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])(Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["b" /* create */])(null), {
  col: Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["e" /* keys */])(breakpointCol),
  offset: Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["e" /* keys */])(breakpointOffset),
  order: Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["e" /* keys */])(breakpointOrder)
});

var props = Object(__WEBPACK_IMPORTED_MODULE_3__utils_object__["a" /* assign */])({}, breakpointCol, breakpointOffset, breakpointOrder, {
  tag: {
    type: String,
    default: 'div'
  },
  // Generic flexbox .col
  col: {
    type: Boolean,
    default: false
  },
  // .col-[1-12]|auto
  cols: strNum(),
  // .offset-[1-12]
  offset: strNum(),
  // Flex ordering utility .order-[1-12]
  order: strNum(),
  alignSelf: {
    type: String,
    default: null,
    validator: function validator(str) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_array__["a" /* arrayIncludes */])(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
    }
  }
});

/**
 * We need ".col" to default in when no other props are passed,
 * but always render when col=true.
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;

    var classList = [];
    // Loop through `col`, `offset`, `order` breakpoint props
    for (var type in breakpointPropMap) {
      // Returns colSm, offset, offsetSm, orderMd, etc.
      var _keys = breakpointPropMap[type];
      for (var i = 0; i < _keys.length; i++) {
        // computeBkPt(col, colSm => Sm, value=[String, Number, Boolean])
        var c = computeBkPtClass(type, _keys[i].replace(type, ''), props[_keys[i]]);
        // If a class is returned, push it onto the array.
        if (c) {
          classList.push(c);
        }
      }
    }

    classList.push((_classList$push = {
      // Default to .col if no other classes generated nor `cols` specified.
      col: props.col || classList.length === 0 && !props.cols
    }, _defineProperty(_classList$push, 'col-' + props.cols, props.cols), _defineProperty(_classList$push, 'offset-' + props.offset, props.offset), _defineProperty(_classList$push, 'order-' + props.order, props.order), _defineProperty(_classList$push, 'align-self-' + props.alignSelf, props.alignSelf), _classList$push));

    return h(props.tag, Object(__WEBPACK_IMPORTED_MODULE_0_vue_functional_data_merge__["a" /* mergeData */])(data, { class: classList }), children);
  }
});

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(306);


function memoize(fn) {
  var cache = Object(__WEBPACK_IMPORTED_MODULE_0__object__["b" /* create */])(null);

  return function memoizedFn() {
    var args = JSON.stringify(arguments);
    return cache[args] = cache[args] || fn.apply(null, arguments);
  };
}

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = suffixPropName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upper_first__ = __webpack_require__(339);


/**
 * Suffix can be a falsey value so nothing is appended to string.
 * (helps when looping over props & some shouldn't change)
 * Use data last parameters to allow for currying.
 * @param {string} suffix
 * @param {string} str
 */
function suffixPropName(suffix, str) {
  return str + (suffix ? Object(__WEBPACK_IMPORTED_MODULE_0__upper_first__["a" /* default */])(suffix) : '');
}

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_listen_on_root__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(308);



// Events we emit on $root
var EVENT_STATE = 'bv::collapse::state';
var EVENT_ACCORDION = 'bv::collapse::accordion';
// Events we listen to on $root
var EVENT_TOGGLE = 'bv::toggle::collapse';

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_listen_on_root__["a" /* default */]],
  render: function render(h) {
    var content = h(this.tag, {
      class: this.classObject,
      directives: [{ name: 'show', value: this.show }],
      attrs: { id: this.id || null },
      on: { click: this.clickHandler }
    }, [this.$slots.default]);
    return h('transition', {
      props: {
        enterClass: '',
        enterActiveClass: 'collapsing',
        enterToClass: '',
        leaveClass: '',
        leaveActiveClass: 'collapsing',
        leaveToClass: ''
      },
      on: {
        enter: this.onEnter,
        afterEnter: this.onAfterEnter,
        leave: this.onLeave,
        afterLeave: this.onAfterLeave
      }
    }, [content]);
  },
  data: function data() {
    return {
      show: this.visible,
      transitioning: false
    };
  },

  model: {
    prop: 'visible',
    event: 'input'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    isNav: {
      type: Boolean,
      default: false
    },
    accordion: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  watch: {
    visible: function visible(newVal) {
      if (newVal !== this.show) {
        this.show = newVal;
      }
    },
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.emitState();
      }
    }
  },
  computed: {
    classObject: function classObject() {
      return {
        'navbar-collapse': this.isNav,
        'collapse': !this.transitioning,
        'show': this.show && !this.transitioning
      };
    }
  },
  methods: {
    toggle: function toggle() {
      this.show = !this.show;
    },
    onEnter: function onEnter(el) {
      el.style.height = 0;
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["q" /* reflow */])(el);
      el.style.height = el.scrollHeight + 'px';
      this.transitioning = true;
      // This should be moved out so we can add cancellable events
      this.$emit('show');
    },
    onAfterEnter: function onAfterEnter(el) {
      el.style.height = null;
      this.transitioning = false;
      this.$emit('shown');
    },
    onLeave: function onLeave(el) {
      el.style.height = 'auto';
      el.style.display = 'block';
      el.style.height = el.getBoundingClientRect().height + 'px';
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["q" /* reflow */])(el);
      this.transitioning = true;
      el.style.height = 0;
      // This should be moved out so we can add cancellable events
      this.$emit('hide');
    },
    onAfterLeave: function onAfterLeave(el) {
      el.style.height = null;
      this.transitioning = false;
      this.$emit('hidden');
    },
    emitState: function emitState() {
      this.$emit('input', this.show);
      // Let v-b-toggle know the state of this collapse
      this.$root.$emit(EVENT_STATE, this.id, this.show);
      if (this.accordion && this.show) {
        // Tell the other collapses in this accordion to close
        this.$root.$emit(EVENT_ACCORDION, this.id, this.accordion);
      }
    },
    clickHandler: function clickHandler(evt) {
      // If we are in a nav/navbar, close the collapse when non-disabled link clicked
      var el = evt.target;
      if (!this.isNav || !el || getComputedStyle(this.$el).display !== 'block') {
        return;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["j" /* hasClass */])(el, 'nav-link') || Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["j" /* hasClass */])(el, 'dropdown-item')) {
        this.show = false;
      }
    },
    handleToggleEvt: function handleToggleEvt(target) {
      if (target !== this.id) {
        return;
      }
      this.toggle();
    },
    handleAccordionEvt: function handleAccordionEvt(openedId, accordion) {
      if (!this.accordion || accordion !== this.accordion) {
        return;
      }
      if (openedId === this.id) {
        // Open this collapse if not shown
        if (!this.show) {
          this.toggle();
        }
      } else {
        // Close this collapse if shown
        if (this.show) {
          this.toggle();
        }
      }
    },
    handleResize: function handleResize() {
      // Handler for orientation/resize to set collapsed state in nav/navbar
      this.show = getComputedStyle(this.$el).display === 'block';
    }
  },
  created: function created() {
    // Listen for toggle events to open/close us
    this.listenOnRoot(EVENT_TOGGLE, this.handleToggleEvt);
    // Listen to otehr collapses for accordion events
    this.listenOnRoot(EVENT_ACCORDION, this.handleAccordionEvt);
  },
  mounted: function mounted() {
    if (this.isNav && typeof document !== 'undefined') {
      // Set up handlers
      window.addEventListener('resize', this.handleResize, false);
      window.addEventListener('orientationchange', this.handleResize, false);
      this.handleResize();
    }
    this.emitState();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.isNav && typeof document !== 'undefined') {
      window.removeEventListener('resize', this.handleResize, false);
      window.removeEventListener('orientationchange', this.handleResize, false);
    }
  }
});

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_target__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom__ = __webpack_require__(308);



// Are we client side?
var inBrowser = typeof window !== 'undefined';

// target listen types
var listenTypes = { click: true

  // Property key for handler storage
};var BVT = '__BV_toggle__';

// Emitted Control Event for collapse (emitted to collapse)
var EVENT_TOGGLE = 'bv::toggle::collapse';

// Listen to Event for toggle state update (Emited by collapse)
var EVENT_STATE = 'bv::collapse::state';

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, vnode) {
    var targets = Object(__WEBPACK_IMPORTED_MODULE_0__utils_target__["b" /* default */])(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;

      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_TOGGLE, target);
      });
    });

    if (inBrowser && vnode.context && targets.length > 0) {
      // Add aria attributes to element
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["v" /* setAttr */])(el, 'aria-controls', targets.join(' '));
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["v" /* setAttr */])(el, 'aria-expanded', 'false');
      if (el.tagName !== 'BUTTON') {
        // If element is not a button, we add `role="button"` for accessibility
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["v" /* setAttr */])(el, 'role', 'button');
      }

      // Toggle state hadnler, stored on element
      el[BVT] = function toggleDirectiveHandler(id, state) {
        if (targets.indexOf(id) !== -1) {
          // Set aria-expanded state
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["v" /* setAttr */])(el, 'aria-expanded', state ? 'true' : 'false');
          // Set/Clear 'collapsed' class state
          if (state) {
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["s" /* removeClass */])(el, 'collapsed');
          } else {
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_dom__["a" /* addClass */])(el, 'collapsed');
          }
        }
      };

      // Listen for toggle state changes
      vnode.context.$root.$on(EVENT_STATE, el[BVT]);
    }
  },
  unbind: function unbind(el, binding, vnode) {
    if (el[BVT]) {
      // Remove our $root listener
      vnode.context.$root.$off(EVENT_STATE, el[BVT]);
      el[BVT] = null;
    }
  }
});

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_id__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_dropdown__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_button__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_css__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dropdown_css__);
>>>>>>> 0a07e92d1982c3dd10f58d8b830db7ad0f8dc548

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

/***/ 270:
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
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(51)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 271:
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

<<<<<<< HEAD
/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(465);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("05c7039f", content, false, {});
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

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css);", ""]);

// module
exports.push([module.i, "\n@charset \"UTF-8\";\n#block-family .slideshow:before, #block-family .slideshow:after {\n  content: \"\";\n  position: absolute;\n  border-radius: 100%;\n}\n#block-family .slideshow:before {\n  background: #f36f1b;\n  width: 120vw;\n  height: 65vw;\n  bottom: 0vw;\n  right: -20vw;\n  z-index: 1;\n}\n#block-family .slideshow:after {\n  width: 120vw;\n  height: 74vw;\n  background: #ffaa85;\n  left: -13vw;\n  top: -19vh;\n  z-index: 0;\n}\n#block-family .slideshow .slick-list {\n  overflow: visible;\n  overflow-x: hidden;\n  z-index: 2;\n}\n#block-family .slideshow .slick-next, #block-family .slideshow .slick-prev {\n  z-index: 2;\n  color: white;\n  font-size: 12px;\n  letter-spacing: 2px;\n  width: auto;\n  padding: 15px 20px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  text-transform: uppercase;\n  font-family: \"PingFang SC\",微軟正黑體;\n  font-weight: 300;\n}\n#block-family .slideshow .slick-next:hover, #block-family .slideshow .slick-prev:hover {\n    background: white;\n    color: #f36e1b;\n    font-weight: 500;\n}\n#block-family .slideshow .slick-next:before, #block-family .slideshow .slick-prev:before {\n    content: none;\n}\n#block-family .slideshow .slick-prev {\n  left: 20px;\n}\n#block-family .slideshow .slick-next {\n  right: 20px;\n}\n#block-family .slideshow .slick-slide {\n  position: relative;\n  overflow: hidden;\n}\n#block-family .slideshow .slick-slide .slider {\n    height: 110vh;\n    -webkit-clip-path: circle(150vh at 54vw -42vh);\n            clip-path: circle(150vh at 54vw -42vh);\n}\n#block-family .slideshow .slick-slide .slider p {\n      z-index: 2;\n}\n#block-family .slideshow .slick-slide .slider .slide-title {\n      font-size: 110px;\n      font-weight: 600;\n}\n#block-family .slideshow .slick-slide .slider .slide-subtitle {\n      font-size: 42px;\n      font-weight: 500;\n}\n#block-family .slideshow .slick-slide .slider .slide-text {\n      font-size: 18px;\n      bottom: 18vh;\n}\n#block-family .slideshow .slick-slide .slider .slide-text:before, #block-family .slideshow .slick-slide .slider .slide-text:after {\n        content: \"\";\n        position: absolute;\n        width: 2px;\n        height: calc(20vh + 30px);\n        background: white;\n        left: 50%;\n        top: 50px;\n}\n#block-family .slideshow .slick-slide .slider .slide-text:before {\n        opacity: 0.6;\n}\n#block-family .slideshow .slick-slide .slider .slide-text:after {\n        height: 30px;\n        -webkit-animation: scrolling 1.5s infinite ease-in-out;\n                animation: scrolling 1.5s infinite ease-in-out;\n}\n#block-family .slideshow .slick-slide .slider:before {\n      content: \"\";\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      background: rgba(56, 26, 2, 0.16);\n}\n@-webkit-keyframes scrolling {\n100% {\n    top: calc(10vh + 30px);\n}\n}\n@keyframes scrolling {\n100% {\n    top: calc(10vh + 30px);\n}\n}\n#block-family #family-intro .family-title {\n  font-size: 45px;\n  padding-right: 10vw;\n  line-height: 67px;\n  position: relative;\n  margin-top: 80px;\n  padding-right: 80px;\n}\n#block-family #family-intro .family-title:before {\n    content: \"\";\n    position: absolute;\n    width: 1.6px;\n    height: 50px;\n    background: #f26e22;\n    top: 14px;\n    right: 65px;\n}\n#block-family #family-intro .family-step-list .family-step {\n  margin-bottom: 270px;\n}\n#block-family #family-intro .family-step-list .family-step:nth-child(2n) {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n}\n#block-family #family-intro .family-step-list .family-step .big_title, #block-family #family-intro .family-step-list .family-step .step-title, #block-family #family-intro .family-step-list .family-step .subtitle, #block-family #family-intro .family-step-list .family-step .desc {\n    font-weight: 500;\n    width: 60%;\n}\n#block-family #family-intro .family-step-list .family-step .big_title {\n    opacity: 0.5;\n    font-size: 220px;\n    top: -180px;\n    left: 80px;\n}\n#block-family #family-intro .family-step-list .family-step .step-title {\n    font-size: 35px;\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n    margin-bottom: 25px;\n    padding-right: 45px;\n    border-right: 1px solid;\n    line-height: 45px;\n}\n#block-family #family-intro .family-step-list .family-step .subtitle {\n    font-size: 23px;\n    margin-bottom: 40px;\n}\n#block-family #family-intro .family-step-list .family-step .desc {\n    color: gray;\n}\n#block-family #teams-say .teams-content {\n  padding: 200px 300px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#block-family #teams-say .teams-content .team-content-texts {\n    width: 60%;\n}\n#block-family #teams-say .teams-content:before {\n    content: \"\";\n    position: absolute;\n    background: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n}\n#block-family #teams-say .teams-content:after {\n    content: \"Q\";\n    font-size: 430px;\n    position: absolute;\n    top: -10px;\n    left: 180px;\n    opacity: 0.4;\n}\n#block-family #teams-say .teams-content h3 {\n    margin-bottom: 50px;\n    font-size: 40px;\n}\n#block-family #teams-say .teams-content .team-desc {\n    line-height: 40px;\n    font-size: 18px;\n    margin-bottom: 30px;\n    padding-left: 100px;\n}\n#block-family #teams-say .teams-content .team-desc:before {\n      content: '\\201C';\n      font-size: 150px;\n      position: absolute;\n      left: auto;\n      top: 20px;\n      color: #f26d22;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0;\n}\n#block-family #teams-say .teams-content .team-name {\n    font-size: 20px;\n}\n#block-family #teams-say .teams .team-item {\n  height: 25vw;\n  cursor: pointer;\n  -webkit-box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.15);\n          box-shadow: 10px 0px 40px rgba(0, 0, 0, 0.15);\n}\n#block-family #teams-say .teams .team-item:nth-child(1) {\n    z-index: 3;\n}\n#block-family #teams-say .teams .team-item:nth-child(2) {\n    z-index: 2;\n}\n#block-family #teams-say .teams .team-item:nth-child(3) {\n    z-index: 1;\n}\n#block-family #teams-say .teams .team-item:nth-child(4) {\n    z-index: 0;\n}\n#block-family #teams-say .teams .team-item .team-title {\n    font-size: 35px;\n    color: #f26c24;\n    z-index: 1;\n}\n#block-family #teams-say .teams .team-item:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: white;\n}\n#block-family #teams-say .teams .team-item:hover .team-title {\n    color: white;\n}\n#block-family #teams-say .teams .team-item:hover:before {\n    background: rgba(242, 108, 36, 0.85);\n    -webkit-transition: all .5s;\n    transition: all .5s;\n}\n", ""]);

// exports


/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_footer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_slick__ = __webpack_require__(268);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                arrows: true
            },
            slick_items: [{
                bg: '/images/slideshow_1.jpg',
                title: '實現你未來的夢想',
                subtitle: '踏足餐飲業的堅實第一步<br>橘色大家庭為你實現',
                scrollText: '讓我們帶你實現夢想!'
            }, {
                bg: '/images/bg_brand_1.png',
                title: '實現你未來的夢想',
                subtitle: '踏足餐飲業的堅實第一步<br>橘色大家庭為你實現',
                scrollText: '讓我們帶你實現夢想!'
            }],
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
                slidesToShow: 4
            },
            slick_teams: [{
                team: '橘色公關團隊1',
                member: '某某某',
                text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s1.png',
                img_big: '/images/family_b1.png'
            }, {
                team: '橘色公關團隊2',
                member: '某某某',
                text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s1.png',
                img_big: '/images/family_b1.png'
            }, {
                team: '橘色公關團隊3',
                member: '某某某',
                text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s1.png',
                img_big: '/images/family_b1.png'
            }, {
                team: '橘色公關團隊4',
                member: '某某某',
                text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s1.png',
                img_big: '/images/family_b1.png'
            }, {
                team: '橘色公關團隊5',
                member: '某某某',
                text: '「測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字」',
                img: '/images/family_s1.png',
                img_big: '/images/family_b1.png'
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

            this.$nextTick(function () {
                _this.$refs.slick.reSlick();
            });
        },
        handleInit: function handleInit(event, slick) {
            console.log('handleInit', event, slick);
        }
    }
});

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "block-family" } },
    [
      _c(
        "slick",
        {
          ref: "slick",
          staticClass: "slideshow",
          attrs: { options: _vm.slickOptions }
        },
        _vm._l(_vm.slick_items, function(item, $index) {
          return _c(
            "div",
            {
              key: $index,
              staticClass:
                "slider position-relative d-flex flex-column align-items-center justify-content-center",
              style: "background-image:url(" + item.bg + ")"
            },
            [
              _c("p", { staticClass: "slide-title text-white" }, [
                _vm._v(_vm._s(item.title))
              ]),
              _vm._v(" "),
              _c("p", {
                staticClass: "slide-subtitle text-white",
                domProps: { innerHTML: _vm._s(item.subtitle) }
              }),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "slide-text text-white position-absolute" },
                [_vm._v(_vm._s(item.scrollText))]
              )
            ]
          )
        })
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "family-intro" } }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "family-step-list" },
          _vm._l(_vm.family_steps, function(item, $index) {
            return _c(
              "div",
              { key: $index, staticClass: "family-step d-flex" },
              [
                _c("div", { staticClass: "w-50 position-relative" }, [
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
                      "w-50 p-5 d-flex flex-column justify-content-center"
                  },
                  [
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
        { attrs: { id: "teams-say" } },
        [
          _c(
            "div",
            {
              staticClass: "teams-content text-white position-relative",
              style:
                "background-image:url(" +
                _vm.slick_teams[_vm.teamIndex].img_big +
                ")"
            },
            [
              _c(
                "div",
                { staticClass: "team-content-texts position-relative" },
                [
                  _c("h3", {}, [_vm._v("看看我們的夥伴們怎麼說")]),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "team-desc position-relative",
                    domProps: {
                      innerHTML: _vm._s(_vm.slick_teams[_vm.teamIndex].text)
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "team-name d-block text-right" }, [
                    _vm._v(
                      "- " +
                        _vm._s(_vm.slick_teams[_vm.teamIndex].team) +
                        " " +
                        _vm._s(_vm.slick_teams[_vm.teamIndex].member)
                    )
                  ])
                ]
              )
            ]
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
    return _c("h2", { staticClass: "family-title text-orange text-right" }, [
      _vm._v("橘色"),
      _c("br"),
      _vm._v("引領你築夢踏實"),
      _c("br"),
      _vm._v("一步一步達成夢想")
    ])
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
=======
/*
 * Export our directive
 */
/* istanbul ignore next: not easy to test */
/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, bindings, vnode) {
    applyBVPO(el, bindings, vnode);
  },
  inserted: function inserted(el, bindings, vnode) {
    applyBVPO(el, bindings, vnode);
  },
  update: function update(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyBVPO(el, bindings, vnode);
    }
  },
  componentUpdated: function componentUpdated(el, bindings, vnode) {
    if (bindings.value !== bindings.oldValue) {
      applyBVPO(el, bindings, vnode);
    }
  },
  unbind: function unbind(el) {
    removeBVPO(el);
  }
});
>>>>>>> 0a07e92d1982c3dd10f58d8b830db7ad0f8dc548

/***/ })

});