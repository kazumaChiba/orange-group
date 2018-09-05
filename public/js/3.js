webpackJsonp([3],{

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(603)
}
var normalizeComponent = __webpack_require__(51)
/* script */
var __vue_script__ = __webpack_require__(605)
/* template */
var __vue_template__ = __webpack_require__(616)
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
Component.options.__file = "resources/assets/pages/Contact.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20caa861", Component.options)
  } else {
    hotAPI.reload("data-v-20caa861", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(369)
}
var normalizeComponent = __webpack_require__(51)
/* script */
var __vue_script__ = __webpack_require__(371)
/* template */
var __vue_template__ = __webpack_require__(372)
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

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(206)("b8d6fad2", content, false, {});
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

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n#footer {\n  height: 100vh;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n    margin-bottom: 60px;\n}\n#footer:before {\n    background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n    font-size: 20px;\n}\n#footer .footer {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n#footer .footer .footer-info {\n      margin-bottom: 100px;\n      line-height: 25px;\n      font-size: 14px;\n      font-weight: 100;\n}\n#footer .footer .footer-info div {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#footer .footer .footer-info p {\n        margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n        font-size: 18px;\n        font-weight: 100;\n        line-height: 30px;\n}\n#footer .footer.footer-join {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#footer .footer.footer-join:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.8);\n        top: 0px;\n}\n#footer .footer .btn-orange:hover {\n      background: white;\n      color: #f26d23 !important;\n      font-weight: 500;\n}\n@media only screen and (max-width: 991px) {\n#app #footer .footer .col-contact-us {\n    -webkit-box-flex: 100%;\n        -ms-flex: 100%;\n            flex: 100%;\n}\n#app #footer .container .join-us-slogan {\n    line-height: 45px;\n    margin-bottom: 50px;\n}\n#app #footer .container .join-us-slogan span {\n      font-size: 28px;\n}\n#app #footer .logo {\n    height: 100px;\n}\n#app .btn-orange.fat {\n    padding: 20px 45px;\n}\n}\n@media only screen and (max-width: 420px) {\n#app #footer {\n    height: auto;\n}\n#app #footer .container {\n      padding: 50px 40px;\n}\n#app #footer .container .join-us-slogan {\n        font-size: 18px;\n        line-height: 30px;\n        margin-bottom: 30px;\n}\n#app #footer .container .join-us-slogan span {\n          font-size: 18px;\n}\n#app #footer #copyright, #app #footer #copyright a {\n      white-space: normal;\n}\n#app #footer .footer {\n      margin-bottom: 0 !important;\n}\n#app #footer .footer .col p {\n        font-size: 13px !important;\n}\n#app #footer .btn-orange.fat {\n      padding: 12px 30px;\n      font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 371:
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

/***/ 372:
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
      _vm._m(1)
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
    return _c("div", { staticClass: "footer container" }, [
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
              _c("div", { staticClass: "col col-contact-us" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "footer-text-left text-center text-lg-left pt-5"
                  },
                  [
                    _c("div", { staticClass: "d-inline-block text-center" }, [
                      _c(
                        "p",
                        { staticClass: "text-orange footer-info-title mb-4" },
                        [_vm._v("聯絡我們")]
                      ),
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("img", {
                  staticClass: "logo",
                  attrs: { src: "/images/index_logo.png" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "footer-text-right text-center text-lg-right pt-0 pt-lg-5"
                  },
                  [
                    _c("div", { staticClass: "d-inline-block text-center" }, [
                      _c(
                        "p",
                        { staticClass: "text-orange footer-info-title mb-4" },
                        [_vm._v("橘色精神")]
                      ),
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
            ]
          ),
          _vm._v(" "),
          _c(
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
                    _c("a", { staticClass: "link-orange" }, [
                      _vm._v(" 橘色涮涮屋 ")
                    ]),
                    _vm._v(" 版權所有. Designed by "),
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
        ]
      )
    ])
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

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(378)
}
var normalizeComponent = __webpack_require__(51)
/* script */
var __vue_script__ = __webpack_require__(380)
/* template */
var __vue_template__ = __webpack_require__(381)
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
Component.options.__file = "resources/assets/components/block-banner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b429dd1e", Component.options)
  } else {
    hotAPI.reload("data-v-b429dd1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(379);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(206)("822c5f64", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b429dd1e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-banner.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b429dd1e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-banner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n#block-breadcrumb {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n}\n#block-breadcrumb:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n}\n@media only screen and (max-width: 991px) {\n#block-breadcrumb {\n      height: 220px;\n}\n#block-breadcrumb .banner-title {\n        font-size: 28px;\n}\n#block-breadcrumb .banner-title span {\n          color: white !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 380:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    methods: {},
    props: {
        title: {
            type: String,
            default: 'title'
        },
        img: {
            type: String,
            default: '/images/slideshow_1.jpg'
        }
    }
});

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "position-relative w-100 d-flex align-items-center justify-content-center",
      style: "background-image:url(" + _vm.img + ")",
      attrs: { id: "block-breadcrumb" }
    },
    [
      _c(
        "div",
        { staticClass: "position-relative text-white pt-4 pt-lg-0" },
        [
          _c("h2", {
            staticClass: "mb-2 mb-lg-4 banner-title",
            domProps: { innerHTML: _vm._s(_vm.title) }
          }),
          _vm._v(" "),
          _c(
            "el-breadcrumb",
            { attrs: { "separator-class": "el-icon-arrow-right" } },
            [
              _c(
                "el-breadcrumb-item",
                { staticClass: "text-white", attrs: { to: "/" } },
                [_vm._v("首頁")]
              ),
              _vm._v(" "),
              _vm._l(_vm.$route.matched, function(item, index) {
                return item.name && item.path !== "/"
                  ? _c(
                      "el-breadcrumb-item",
                      {
                        key: item.meta.id,
                        class: [
                          {
                            "no-redirect":
                              (index < _vm.$route.matched.length - 1 &&
                                _vm.$route.matched[index + 1].path ==
                                  _vm.$route.matched[index].path + "/") ||
                              index == _vm.$route.matched.length - 1 ||
                              _vm.$route.matched[index].redirect != undefined
                          }
                        ]
                      },
                      [
                        (index < _vm.$route.matched.length - 1 &&
                          _vm.$route.matched[index + 1].path ==
                            _vm.$route.matched[index].path + "/") ||
                        index == _vm.$route.matched.length - 1 ||
                        _vm.$route.matched[index].redirect != undefined
                          ? _c("span", { staticClass: "no-redirect" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(item.name) +
                                  "\n                "
                              )
                            ])
                          : _c(
                              "router-link",
                              { attrs: { to: item.redirect || item.path } },
                              [_vm._v(_vm._s(item.name))]
                            )
                      ],
                      1
                    )
                  : _vm._e()
              })
            ],
            2
          )
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-b429dd1e", module.exports)
  }
}

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(206)("7ed73c01", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20caa861\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-20caa861\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contact.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n#header {\n  top: 0;\n}\n#block-contact #block-contact-brands {\n  -webkit-transform: translateY(-150px);\n          transform: translateY(-150px);\n  margin-bottom: -50px;\n}\n#block-contact #block-contact-brands .contact-brands-list {\n    position: relative;\n    background: white;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item {\n      -webkit-box-flex: 25%;\n          -ms-flex: 25%;\n              flex: 25%;\n      -webkit-box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.1);\n              box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.1);\n      overflow: hidden;\n      padding: 40px;\n      position: relative;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:before, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:after {\n        content: \"\";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        opacity: 0;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:before {\n        background-image: url(/images/bg_brand_1.png);\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:after {\n        background: #f26d23;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item.-intro-text {\n        -webkit-box-flex: 50%;\n            -ms-flex: 50%;\n                flex: 50%;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item img {\n        width: 80px;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item > * {\n        z-index: 2;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text):hover, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text).active {\n        cursor: pointer;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text):hover .brand-title, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text):hover p, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text).active .brand-title, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text).active p {\n          color: white !important;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text):hover:before, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text).active:before {\n          opacity: 1;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text):hover:after, #block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(.-intro-text).active:after {\n          opacity: 0.5;\n}\n#block-contact #block-contact-brands .contact-brands-list .brand-intro-title {\n      font-size: 38px;\n      font-weight: 500;\n      margin-bottom: 10px;\n}\n#block-contact #block-contact-brands .contact-brands-list .brand-intro-subtitle {\n      font-size: 22px;\n      color: gray;\n      font-weight: 500;\n}\n#block-contact #block-contact-brands .contact-brands-list .text-line-left {\n      margin-bottom: 20px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#block-contact #block-contact-brands .contact-brands-list .text-line-left:before {\n        content: \"\";\n        position: absolute;\n        width: 50%;\n        height: 1px;\n        background: #f26d23;\n        top: 50%;\n        left: calc(-50% - 20px);\n}\n#block-contact #block-contact-brands .contact-brands-list .brand-title {\n      font-size: 22px;\n      font-weight: 500;\n      margin-bottom: 0;\n}\n@media only screen and (max-width: 991px) {\n#block-contact #block-contact-brands {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    margin: 50px 0;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item {\n      -webkit-box-flex: 50%;\n          -ms-flex: 50%;\n              flex: 50%;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border: 1px solid #ccc;\n      padding: 20px 0;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item.-intro-text {\n        -webkit-box-flex: 100%;\n            -ms-flex: 100%;\n                flex: 100%;\n        border: none;\n        padding: 0px;\n        margin-bottom: 15px;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:nth-child(2n-1) {\n        border-left: none;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item:not(:last-child):not(:nth-last-child(2)) {\n        border-bottom: none;\n}\n#block-contact #block-contact-brands .contact-brands-list .contact-brands-item img {\n        width: 50px;\n}\n#block-contact #block-contact-brands .contact-brands-list .text-line-left {\n      text-align: center;\n      margin-bottom: 10px;\n      font-size: 12px;\n}\n#block-contact #block-contact-brands .contact-brands-list .text-line-left:before {\n        display: none;\n}\n#block-contact #block-contact-brands .contact-brands-list .brand-intro-title {\n      font-size: 23px;\n      text-align: center;\n}\n#block-contact #block-contact-brands .contact-brands-list .brand-intro-subtitle {\n      font-size: 14px;\n}\n#block-contact #block-contact-brands .contact-brands-list .brand-title {\n      font-size: 16px;\n}\n#block-contact #block-contact-brands .contact-brands-list .text-size-2 {\n      font-size: 12px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_banner__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_contact_form__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_contact_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_contact_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_footer__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_block_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            brandItems: [{
                img: '/images/index_logo.png',
                title: '橘色涮涮屋',
                intro: '',
                name: 'shabu'
            }, {
                img: '/images/index_logo.png',
                title: 'EXTENSION 1 BY 橘色',
                intro: '',
                name: 'extension_1'
            }, {
                img: '/images/icon_m1cafe.png',
                title: 'M ONE CAFE',
                intro: '',
                name: 'm_one_cafe'
            }, {
                img: '/images/icon_m1spa.png',
                title: 'M ONE SPA',
                intro: '',
                name: 'm_one_spa'
            }, {
                img: '/images/icon_sakura.png',
                title: 'SAKURA SPA',
                intro: '',
                name: 'sakura_spa'
            }],
            brandName: ''
        };
    },
    components: {
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_menu_header___default.a,
        Banner: __WEBPACK_IMPORTED_MODULE_1_components_block_banner___default.a,
        ContactForm: __WEBPACK_IMPORTED_MODULE_2_components_contact_form___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_3_components_block_footer___default.a
    }
});

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(607)
}
var normalizeComponent = __webpack_require__(51)
/* script */
var __vue_script__ = __webpack_require__(609)
/* template */
var __vue_template__ = __webpack_require__(615)
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
Component.options.__file = "resources/assets/components/contact-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f8a4e54", Component.options)
  } else {
    hotAPI.reload("data-v-7f8a4e54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(206)("3c4d6a73", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f8a4e54\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact-form.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f8a4e54\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contact-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n#contact-form .btn-orange {\n  padding: 10px 55px;\n  font-size: 14px;\n  -webkit-box-shadow: 5px 5px 10px rgba(242, 109, 35, 0.3);\n          box-shadow: 5px 5px 10px rgba(242, 109, 35, 0.3);\n}\n#contact-form .btn-orange:hover {\n    background: rgba(0, 0, 0, 0.85);\n}\n#contact-form #contact-form-body {\n  padding: 0 80px;\n}\n#contact-form #contact-form-body .field-item {\n    width: 50%;\n}\n#contact-form #contact-form-body .field-item .field-icon {\n      position: absolute;\n      top: 15px;\n}\n#contact-form #contact-form-body .field-item .field-icon.plane {\n        font-size: 60px;\n        color: #f26c23;\n        right: 0;\n        top: -70px;\n}\n#contact-form .contact-form-title {\n  font-size: 28px;\n}\n#contact-form .contact-form-field {\n  height: 330px;\n}\n#contact-form .contact-form-field .field-item {\n    margin-bottom: 20px;\n}\n#contact-form .contact-form-field .el-select {\n    width: 100%;\n    font-size: 14px;\n    color: #858585;\n}\n#contact-form .contact-form-field .el-select .el-input__suffix {\n      height: 39px;\n      line-height: 39px;\n}\n#contact-form .contact-form-field input, #contact-form .contact-form-field textarea {\n    background: white;\n    border-radius: 0;\n    -moz-appearance: none;\n         appearance: none;\n    -webkit-appearance: none;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid #ccc;\n    padding: 10px 30px;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n#contact-form .contact-form-field input::-webkit-input-placeholder, #contact-form .contact-form-field textarea::-webkit-input-placeholder {\n      font-size: 14px;\n}\n#contact-form .contact-form-field input:-ms-input-placeholder, #contact-form .contact-form-field textarea:-ms-input-placeholder {\n      font-size: 14px;\n}\n#contact-form .contact-form-field input::-ms-input-placeholder, #contact-form .contact-form-field textarea::-ms-input-placeholder {\n      font-size: 14px;\n}\n#contact-form .contact-form-field input::placeholder, #contact-form .contact-form-field textarea::placeholder {\n      font-size: 14px;\n}\n#contact-form .contact-form-field input:focus, #contact-form .contact-form-field textarea:focus {\n      outline: none;\n      border-bottom-color: #f26c23;\n      border-width: 2px;\n}\n#contact-form .contact-form-field input:focus::-webkit-input-placeholder, #contact-form .contact-form-field textarea:focus::-webkit-input-placeholder {\n        color: transparent;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#contact-form .contact-form-field input:focus:-ms-input-placeholder, #contact-form .contact-form-field textarea:focus:-ms-input-placeholder {\n        color: transparent;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#contact-form .contact-form-field input:focus::-ms-input-placeholder, #contact-form .contact-form-field textarea:focus::-ms-input-placeholder {\n        color: transparent;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#contact-form .contact-form-field input:focus::placeholder, #contact-form .contact-form-field textarea:focus::placeholder {\n        color: transparent;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#contact-form .contact-form-field input:focus + .field-icon, #contact-form .contact-form-field textarea:focus + .field-icon {\n        color: #f26c23;\n}\n#contact-form .contact-form-field input.btn-orange, #contact-form .contact-form-field textarea.btn-orange {\n      font-size: 14px;\n      padding: 10px 60px;\n      -webkit-box-shadow: 5px 5px 10px rgba(242, 108, 35, 0.3);\n              box-shadow: 5px 5px 10px rgba(242, 108, 35, 0.3);\n}\n#contact-form .contact-form-field textarea {\n    margin-left: 30px;\n    height: 305px;\n}\n#contact-form form {\n  margin-bottom: 100px;\n}\n@media only screen and (max-width: 991px) {\n#contact-form #contact-form-body {\n    padding: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_map__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_map__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        var _fields;

        return {
            fields: (_fields = {}, _defineProperty(_fields, 'shabu', {
                title: '聯絡<span class="text-orange">橘色涮涮屋</span>',
                subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！'
            }), _defineProperty(_fields, 'extension_1', {
                title: '聯絡<span class="text-orange">Extension 1 By橘色</span>',
                subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！'
            }), _fields),
            question: ''
        };
    },
    components: {
        BlockMap: __WEBPACK_IMPORTED_MODULE_0_components_block_map___default.a
    },
    props: {
        brand: {
            type: String,
            default: 'shabu'
        }
    }
});

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(611)
}
var normalizeComponent = __webpack_require__(51)
/* script */
var __vue_script__ = __webpack_require__(613)
/* template */
var __vue_template__ = __webpack_require__(614)
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
Component.options.__file = "resources/assets/components/block-map.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27da9b67", Component.options)
  } else {
    hotAPI.reload("data-v-27da9b67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(612);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(206)("682b8be5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27da9b67\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-map.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27da9b67\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-map.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(false);
// imports


// module
exports.push([module.i, "\n#block-map .map-list {\n  margin-bottom: 80px;\n  padding: 0 80px;\n}\n#block-map .map-list .map-item {\n    max-width: calc(100%/3);\n    padding: 20px;\n}\n#block-map .map-list .map-item .map-title {\n      font-size: 20px;\n}\n#block-map .map-list .map-item .map-address:after {\n      content: \"\";\n      display: block;\n      width: 50px;\n      height: 1px;\n      background: #f26c23;\n      margin-top: 16px;\n}\n#block-map .map-list .map-item:hover, #block-map .map-list .map-item.active {\n      -webkit-box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);\n              box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.1);\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      cursor: pointer;\n}\n#block-map .map-iframe {\n  border: none;\n}\n#block-map .map-iframe iframe {\n    display: block;\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            mapItems: _defineProperty({}, 'shabu', [{
                title: '橘色涮涮屋一館',
                address: '106台北市大安區大安路一段135號',
                infos: '+886 2 8780 59559<br>service@group.com'
            }, {
                title: '橘色涮涮屋二館',
                address: '106台北市大安區仁愛路四段29-2號',
                infos: '+886 2 8780 59559<br>service@group.com'
            }, {
                title: '橘色涮涮屋新光A9旗艦',
                address: '110台北市信義區松壽路9號5樓',
                infos: '+886 2 8780 59559<br>service@group.com'
            }]),
            mapIndex: 0
        };
    },
    methods: {},
    props: {
        brand: {
            type: String,
            default: 'shabu'
        }
    }
});

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.mapItems[_vm.brand]
    ? _c("div", { attrs: { id: "block-map-body" } }, [
        _c("div", { staticClass: "map-list container" }, [
          _c(
            "div",
            { staticClass: "row d-flex justify-content-between " },
            _vm._l(_vm.mapItems[_vm.brand], function(item, $index) {
              return _c(
                "div",
                {
                  key: $index,
                  staticClass: "map-item",
                  class: _vm.mapIndex == $index ? "active" : "",
                  on: {
                    click: function($event) {
                      _vm.mapIndex = $index
                    }
                  }
                },
                [
                  _c(
                    "p",
                    { staticClass: "map-title" },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fal", "map-marker-alt"] }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-orange" }, [
                        _vm._v(_vm._s(item.title))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "map-address font-weight-bold text-size-1" },
                    [_vm._v(_vm._s(item.address))]
                  ),
                  _vm._v(" "),
                  _c("p", {
                    staticClass: "map-infos text-gray text-size-1",
                    domProps: { innerHTML: _vm._s(item.infos) }
                  })
                ]
              )
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "map-iframe" }, [
          _c("iframe", {
            staticClass: "w-100",
            attrs: {
              height: "560",
              src:
                "https://www.google.com/maps/embed/v1/search?&key=AIzaSyD-Yjh575xmaPu3O-gBx_kk4AZ1Nyx_GjI&q=" +
                _vm.mapItems[_vm.brand][_vm.mapIndex].address
            }
          })
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-27da9b67", module.exports)
  }
}

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.fields[_vm.brand]
      ? _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "w-100", attrs: { id: "contact-form-body" } },
            [
              _c("p", {
                staticClass: "contact-form-title mb-1",
                domProps: { innerHTML: _vm._s(_vm.fields[_vm.brand].title) }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "text-size-1 font-weight-bold" }, [
                _vm._v(_vm._s(_vm.fields[_vm.brand].subtitle))
              ]),
              _vm._v(" "),
              _c("form", [
                _c(
                  "div",
                  {
                    staticClass:
                      "contact-form-field d-flex flex-column flex-wrap"
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "field-item field-question d-flex align-items-center position-relative"
                      },
                      [
                        _c(
                          "el-select",
                          {
                            attrs: { placeholder: "欲詢問的問題類型" },
                            model: {
                              value: _vm.question,
                              callback: function($$v) {
                                _vm.question = $$v
                              },
                              expression: "question"
                            }
                          },
                          [
                            _c("el-option", {
                              attrs: { label: "問題一", value: 1 }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: { label: "問題二", value: 2 }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: { label: "問題三", value: 3 }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "field-icon",
                          attrs: { src: "/images/icon-ask.png" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(4)
                  ]
                ),
                _vm._v(" "),
                _vm._m(5)
              ])
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "block-map" } },
      [_c("block-map", { attrs: { brand: _vm.brand } })],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "field-item field-user d-flex align-items-center position-relative"
      },
      [
        _c("input", { attrs: { placeholder: "您的姓名" } }),
        _vm._v(" "),
        _c("img", {
          staticClass: "field-icon",
          attrs: { src: "/images/icon-user.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "field-item field-envelop d-flex align-items-center position-relative"
      },
      [
        _c("input", { attrs: { placeholder: "您的電子信箱" } }),
        _vm._v(" "),
        _c("img", {
          staticClass: "field-icon",
          attrs: { src: "/images/icon-mail.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "field-item field-phone d-flex align-items-center position-relative"
      },
      [
        _c("input", { attrs: { placeholder: "您的電話" } }),
        _vm._v(" "),
        _c("img", {
          staticClass: "field-icon",
          attrs: { src: "/images/icon-phone.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "field-item field-location d-flex align-items-center position-relative"
      },
      [
        _c("input", { attrs: { placeholder: "欲聯繫的橘色分館" } }),
        _vm._v(" "),
        _c("img", {
          staticClass: "field-icon",
          attrs: { src: "/images/icon-location.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "field-item field-content d-flex align-items-center position-relative h-100"
      },
      [
        _c("textarea", { attrs: { placeholder: "您的詢問內容" } }),
        _vm._v(" "),
        _c("img", {
          staticClass: "field-icon plane",
          attrs: { src: "/images/icon-plane.png" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 clearfix" }, [
      _c(
        "span",
        { staticClass: "text-size-1 float-left text-gray w-50 pr-4" },
        [
          _vm._v(
            "您所填寫的任何資料，我們都將遵循台灣隱私權相關法律規範，不提供與任何其他單位，請擔心提出您的問題，謝謝"
          )
        ]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass: "btn-orange d-inline-block float-right",
        attrs: { type: "submit", value: "發送訊息" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f8a4e54", module.exports)
  }
}

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "block-contact" } },
    [
      _c("banner", {
        attrs: {
          title: "聯絡<span class='text-orange'>我們</span>",
          img: "/images/banner_contact.png"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "position-relative",
          attrs: { id: "block-contact-brands" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "contact-brands-list d-flex flex-wrap" },
              [
                _vm._m(0),
                _vm._v(" "),
                _vm._l(_vm.brandItems, function(item, $index) {
                  return _c(
                    "div",
                    {
                      key: $index,
                      staticClass:
                        "contact-brands-item d-flex flex-column align-items-center justify-content-center",
                      class: _vm.brandName == item.name ? "active" : "",
                      on: {
                        click: function($event) {
                          _vm.brandName = item.name
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "position-relative mb-2",
                        attrs: { src: item.img }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass:
                            "text-orange brand-title position-relative text-center d-none d-md-block"
                        },
                        [_vm._v(_vm._s(item.title))]
                      ),
                      _vm._v(" "),
                      _c("div", { domProps: { innerHTML: _vm._s(item.intro) } })
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._m(1)
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "contact-form" } },
        [_c("contact-form", { attrs: { brand: _vm.brandName } })],
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
    return _c(
      "div",
      {
        staticClass:
          "contact-brands-item -intro-text d-flex justify-content-center align-items-center"
      },
      [
        _c("div", { staticClass: "overflow-hidden" }, [
          _c(
            "span",
            {
              staticClass:
                "text-orange text-line-left d-block position-relative"
            },
            [_vm._v("竭誠歡迎與我們聯繫")]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "brand-intro-title" }, [
            _vm._v("橘色餐飲集團")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "brand-intro-subtitle" }, [
            _vm._v("請選擇您想聯繫的集團單位"),
            _c("br"),
            _vm._v("我們會儘速與您聯絡，謝謝。")
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
      "div",
      {
        staticClass:
          "contact-brands-item d-flex flex-column align-items-center justify-content-center"
      },
      [
        _c(
          "p",
          {
            staticClass: "text-orange brand-title position-relative text-center"
          },
          [_vm._v("人力招募")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-size-2 font-weight-bold mb-0" }, [
          _vm._v("即刻加入橘色大家庭")
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
    require("vue-hot-reload-api")      .rerender("data-v-20caa861", module.exports)
  }
}

/***/ })

});