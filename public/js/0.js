webpackJsonp([0],{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(235)
}
var normalizeComponent = __webpack_require__(48)
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
var update = __webpack_require__(79)("b8d6fad2", content, false, {});
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

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n#footer {\n  height: 100vh;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n    margin-bottom: 60px;\n}\n#footer:before {\n    background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n    font-size: 20px;\n}\n#footer .footer {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n#footer .footer .footer-info {\n      margin-bottom: 100px;\n      line-height: 25px;\n      font-size: 14px;\n      font-weight: 100;\n}\n#footer .footer .footer-info div {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#footer .footer .footer-info p {\n        margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n        font-size: 18px;\n        font-weight: 100;\n        line-height: 30px;\n}\n#footer .footer.footer-join {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#footer .footer.footer-join:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.8);\n        top: 0px;\n}\n#footer .footer .btn-orange:hover {\n      background: white;\n      color: #f26d23 !important;\n      font-weight: 500;\n}\n@media only screen and (max-width: 991px) {\n#app #footer .footer .col-contact-us {\n    -webkit-box-flex: 100%;\n        -ms-flex: 100%;\n            flex: 100%;\n}\n#app #footer .container .join-us-slogan {\n    line-height: 45px;\n    margin-bottom: 50px;\n}\n#app #footer .container .join-us-slogan span {\n      font-size: 28px;\n}\n#app #footer .logo {\n    height: 100px;\n}\n#app .btn-orange.fat {\n    padding: 20px 45px;\n}\n}\n@media only screen and (max-width: 420px) {\n#app #footer {\n    height: auto;\n}\n#app #footer .container {\n      padding: 50px 40px;\n}\n#app #footer .container .join-us-slogan {\n        font-size: 18px;\n        line-height: 30px;\n        margin-bottom: 30px;\n}\n#app #footer .container .join-us-slogan span {\n          font-size: 18px;\n}\n#app #footer #copyright, #app #footer #copyright a {\n      white-space: normal;\n}\n#app #footer .footer {\n      margin-bottom: 0 !important;\n}\n#app #footer .footer .col p {\n        font-size: 13px !important;\n}\n#app #footer .btn-orange.fat {\n      padding: 12px 30px;\n      font-size: 13px;\n}\n}\n", ""]);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(246)
/* template */
var __vue_template__ = __webpack_require__(247)
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(79)("822c5f64", content, false, {});
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

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n#block-breadcrumb {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n}\n#block-breadcrumb:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n}\n@media only screen and (max-width: 991px) {\n#block-breadcrumb {\n      height: 200px;\n}\n#block-breadcrumb .banner-title {\n        font-size: 28px;\n}\n#block-breadcrumb .banner-title span {\n          color: white !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 246:
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

/***/ 247:
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

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(456);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(79)("42e1514a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03657a3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./News.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03657a3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./News.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n#block-news:before {\n  background-attachment: fixed;\n}\n", ""]);

// exports


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(458);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(79)("4074ab8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03657a3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./News.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03657a3c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./News.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "\n.el-input__inner {\n  -webkit-appearance: none;\n  border-radius: 0;\n  border: unset;\n  background: transparent;\n  color: white;\n}\n.el-select__caret {\n  color: #fff;\n}\n#header {\n  top: 0;\n}\n#block-news {\n  margin-bottom: 180px;\n}\n#block-news .filter-date.-year {\n    width: 90px;\n}\n#block-news .filter-date.-month {\n    width: 85px;\n}\n#block-news #block-news-lists {\n    z-index: 2;\n    margin-bottom: 80px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories {\n      padding: 55px 0;\n      font-size: 14px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories.-category {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date {\n        padding: 5px;\n        background: #f26d23;\n        cursor: pointer;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date.-month {\n          margin-right: 20px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date.-year:after, #block-news #block-news-lists #block-news-filter .news-categories .filter-date.-cate:after {\n          content: \"\";\n          position: absolute;\n          height: 60%;\n          width: 1px;\n          background: rgba(255, 255, 255, 0.6);\n          right: 0;\n          top: 20%;\n}\n#block-news #block-news-items .news-item {\n    width: 25%;\n    padding: 0 16px;\n}\n#block-breadcrumb .banner-title {\n  font-size: 90px;\n  font-weight: 300;\n}\n@media only screen and (max-width: 991px) {\n#block-news {\n    margin-bottom: 55px;\n}\n#block-news #block-news-lists {\n      margin-bottom: 0;\n}\n#block-news #block-news-filter .news-categories {\n      padding: 30px 0;\n}\n#block-news #block-news-filter .news-categories.-category {\n        display: none !important;\n}\n#block-news #block-news-filter .news-categories.-date .filter-date {\n        width: auto;\n        -webkit-box-flex: 2;\n            -ms-flex: 2;\n                flex: 2;\n}\n#block-news #block-news-filter .news-categories.-date .filter-date.-cate {\n          -webkit-box-flex: 3;\n              -ms-flex: 3;\n                  flex: 3;\n}\n#block-news #block-news-filter .news-categories.-date .filter-date.-month {\n          margin-right: 0 !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_footer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_block_footer__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                link: '/#/news/detail'
            }, {
                background: '/images/news_v3.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v5.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v2.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v4.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v2.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v3.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v4.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/news_v5.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }],
            newsCategories: ['全部新訊', '橘色涮涮屋', 'Extension 1 by 橘色'],
            newsIndex: 0,
            viewIndex: 8,
            year: 2018,
            month: '',
            category: '全部新訊'
        };
    },
    components: {
        Banner: __WEBPACK_IMPORTED_MODULE_0_components_block_banner___default.a,
        MenuHeader: __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_2_components_block_footer___default.a
    },
    methods: {
        loadMore: function loadMore() {
            this.viewIndex += 4;
        }
    }
});

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "position-relative" },
    [
      _c("banner", {
        attrs: {
          title: "<span class='text-orange'>橘色</span>新訊",
          img: "/images/banner_news.png"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "news-body position-relative",
          attrs: { id: "block-news" }
        },
        [
          _c(
            "div",
            {
              staticClass: "position-relative",
              attrs: { id: "block-news-lists" }
            },
            [
              _c("div", { attrs: { id: "block-news-filter" } }, [
                _c("div", { staticClass: "container d-flex" }, [
                  _c(
                    "div",
                    {
                      staticClass: "news-categories -category d-flex",
                      attrs: { id: "category-items" }
                    },
                    _vm._l(_vm.newsCategories, function(item, $index) {
                      return _c(
                        "div",
                        {
                          key: $index,
                          staticClass:
                            "category-items mr-4 ml-4 d-flex align-items-center",
                          class: _vm.newsIndex == $index ? "active" : "",
                          on: {
                            click: function($event) {
                              _vm.newsIndex = $index
                              _vm.category = _vm.newsCategories[_vm.newsIndex]
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(item) +
                              "\n                        "
                          )
                        ]
                      )
                    })
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "news-categories -date" }, [
                    _c(
                      "div",
                      {
                        staticClass: "d-flex justify-content-end",
                        attrs: { id: "category-date" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "filter-date -cate position-relative d-block d-lg-none"
                          },
                          [
                            _c(
                              "el-select",
                              {
                                model: {
                                  value: _vm.category,
                                  callback: function($$v) {
                                    _vm.category = $$v
                                  },
                                  expression: "category"
                                }
                              },
                              _vm._l(_vm.newsCategories, function(
                                item,
                                $index
                              ) {
                                return _c("el-option", {
                                  key: $index,
                                  attrs: { label: item, value: item },
                                  on: {
                                    click: function($event) {
                                      _vm.newsIndex = $index
                                    }
                                  }
                                })
                              })
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "filter-date -year position-relative"
                          },
                          [
                            _c(
                              "el-select",
                              {
                                model: {
                                  value: _vm.year,
                                  callback: function($$v) {
                                    _vm.year = $$v
                                  },
                                  expression: "year"
                                }
                              },
                              [
                                _c("el-option", {
                                  attrs: { label: "2018", value: 2018 }
                                }),
                                _vm._v(" "),
                                _c("el-option", {
                                  attrs: { label: "2015", value: 2015 }
                                }),
                                _vm._v(" "),
                                _c("el-option", {
                                  attrs: { label: "2013", value: 2013 }
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
                          { staticClass: "filter-date -month" },
                          [
                            _c(
                              "el-select",
                              {
                                model: {
                                  value: _vm.month,
                                  callback: function($$v) {
                                    _vm.month = $$v
                                  },
                                  expression: "month"
                                }
                              },
                              [
                                _c("el-option", {
                                  attrs: { label: "月份", value: "" }
                                }),
                                _vm._v(" "),
                                _c("el-option", {
                                  attrs: { label: "10月", value: 10 }
                                }),
                                _vm._v(" "),
                                _c("el-option", {
                                  attrs: { label: "9月", value: 9 }
                                }),
                                _vm._v(" "),
                                _c("el-option", {
                                  attrs: { label: "8月", value: 8 }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "news-list", attrs: { id: "block-news-items" } },
                [
                  _c("div", { staticClass: "container" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.newsItems.slice(0, _vm.viewIndex), function(
                        item,
                        $index
                      ) {
                        return item.category ==
                          _vm.newsCategories[_vm.newsIndex] ||
                          _vm.newsIndex == 0
                          ? _c(
                              "div",
                              {
                                key: $index,
                                staticClass: "news-item col-6 col-md-3"
                              },
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
                                        attrs: { to: "/news/detail/" }
                                      },
                                      [_vm._v("了解更多")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "news-content text-center" },
                                  [
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "text-black text-size-1"
                                        },
                                        [_vm._v(_vm._s(item.date))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "text-orange text-size-1"
                                        },
                                        [_vm._v(_vm._s(item.category))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass: "news-title",
                                      attrs: { href: item.link },
                                      domProps: {
                                        innerHTML: _vm._s(item.title)
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      })
                    )
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "btn-load-more text-center" }, [
            _c(
              "a",
              {
                staticClass: "btn-load-more btn-orange fat",
                on: { click: _vm.loadMore }
              },
              [_vm._v("\n                載入更多\n            ")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("block-footer")
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
    require("vue-hot-reload-api")      .rerender("data-v-03657a3c", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(455)
  __webpack_require__(457)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(459)
/* template */
var __vue_template__ = __webpack_require__(460)
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
Component.options.__file = "resources/assets/pages/News.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03657a3c", Component.options)
  } else {
    hotAPI.reload("data-v-03657a3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});