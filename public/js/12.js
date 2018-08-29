webpackJsonp([12],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(456)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(458)
/* template */
var __vue_template__ = __webpack_require__(459)
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
Component.options.__file = "resources/assets/pages/NewsInner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-039313c4", Component.options)
  } else {
    hotAPI.reload("data-v-039313c4", Component.options)
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
exports.push([module.i, "\n#footer {\n  height: 700px;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n    margin-bottom: 60px;\n}\n#footer:before {\n    background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n    font-size: 20px;\n}\n#footer .footer .footer-info {\n    margin-bottom: 100px;\n    line-height: 25px;\n    font-size: 14px;\n    font-weight: 100;\n}\n#footer .footer .footer-info div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#footer .footer .footer-info p {\n      margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n      font-size: 18px;\n      font-weight: 100;\n      line-height: 30px;\n}\n#footer .footer.footer-join:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: calc(100% + 150px);\n    background: rgba(0, 0, 0, 0.8);\n    top: 0px;\n}\n#footer .footer .btn-orange:hover {\n    background: white;\n    color: #f26d23 !important;\n    font-weight: 500;\n}\n", ""]);

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
        _vm._v(" 版權所有. Designed by＆ensp;"),
        _c(
          "a",
          {
            staticClass: "link-orange",
            attrs: { href: "www.daydream-lab.com" }
          },
          [_vm._v("Daydream Lab")]
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

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(49)
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
var update = __webpack_require__(80)("822c5f64", content, false, {});
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

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#block-breadcrumb {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n}\n#block-breadcrumb:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n}\n", ""]);

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
        { staticClass: "position-relative text-white" },
        [
          _c("h2", {
            staticClass: "mb-4 banner-title",
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

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("3bcafb7a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-039313c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NewsInner.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-039313c4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./NewsInner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n#block-news-item {\n  height: 95vh;\n}\n#block-news-item .news-item-head {\n    margin-top: 25vh;\n}\n#block-news-item .news-item-head .news-item-title {\n      font-size: 60px;\n      margin-bottom: 70px;\n}\n#block-news-item .news-item-head .news-item-info {\n      margin-bottom: 50px;\n}\n#block-news-item .news-item-head .news-item-info .info-title {\n        font-size: 13px;\n        color: #b3b3b3;\n}\n#block-news-item .item-news-body {\n    background: white;\n    color: black;\n    margin-top: 30px;\n}\n#block-news-item .item-news-body .item-relatives {\n      margin: 45px 0;\n}\n#block-news-item .item-news-body .item-relatives .item-relative.-pre {\n        padding-left: 30px;\n}\n#block-news-item .item-news-body .item-relatives .item-relative.-pre a:before {\n          right: auto;\n          left: -25px;\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg);\n}\n#block-news-item .item-news-body .item-relatives .item-relative.-next {\n        padding-right: 30px;\n}\n#block-news-item .item-news-body .item-relatives .item-relative a:before {\n        content: \"\\2794\";\n        position: absolute;\n        top: 0;\n        right: -25px;\n}\n#block-news-item .item-news-body .item-relatives .title-relative {\n        font-size: 13px;\n        color: gray;\n}\n#block-news-item .item-news-body .item-relatives a {\n        display: block;\n        color: black;\n        margin-top: 5px;\n}\n#block-news-item .item-news-body .item-relatives a:hover {\n          color: #f36f1b;\n}\n#block-news-item .item-news-body .item-intro-text {\n      font-size: 22px;\n      line-height: 35px;\n}\n#block-news-item .item-news-body .item-news-content {\n      line-height: 28px;\n      padding: 100px 180px;\n}\n#block-news-item .item-news-body .item-news-content p, #block-news-item .item-news-body .item-news-content span, #block-news-item .item-news-body .item-news-content ul {\n        margin: 30px 0;\n        font-size: 15px;\n        font-weight: 500;\n}\n#block-news-item .item-news-body .item-news-content img {\n        width: 100%;\n        margin: 30px 0px 20px 0;\n}\n#block-news-item .item-news-body .item-news-content .text-img {\n        margin-top: 0;\n        font-size: 18px;\n}\n#block-news-item .item-news-body .item-news-content .text-big-orange {\n        font-size: 38px;\n        color: #f26e22;\n        text-align: center;\n        padding: 40px 0;\n        margin: 15px 0;\n        position: relative;\n}\n#block-news-item .item-news-body .item-news-content .text-big-orange:after {\n          content: \"\";\n          width: 30px;\n          height: 1px;\n          background: #f26e22;\n          position: absolute;\n          bottom: 0;\n          left: calc(50% - 15px);\n}\n#block-news-item .item-news-body .item-news-content .text-intro-small {\n        font-size: 14px;\n        font-weight: 600;\n}\n#block-news-item .item-news-body .item-news-content .text-intro-title {\n        font-size: 33px;\n        color: #f26e22;\n        padding: 20px 0;\n        margin: 15px 0;\n}\n#block-news-item .item-news-foot {\n    padding-bottom: 30px;\n    margin-bottom: 30px;\n    border-bottom: 1px solid #ccc;\n}\n#block-news-item .item-news-foot .item-social-list span {\n      font-size: 13px;\n      color: gray;\n}\n#block-news-item .item-news-foot .item-tags-list .item-tag {\n      border: 1px solid #ccc;\n      color: gray;\n      padding: 5px 15px;\n      font-size: 12px;\n      margin-right: 5px;\n}\n#block-news-item .item-news-foot .item-tags-list .item-tag:hover {\n        border-color: #f26d23;\n        color: #f26d23;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n        cursor: pointer;\n}\n#block-news-item .item-news-foot .item-social .social-icons {\n      width: 30px;\n      height: 30px;\n      border-radius: 100%;\n}\n#block-news-item .item-news-foot .item-social .social-icons:hover {\n        color: white;\n}\n#block-news-item .item-news-foot .item-social .social-icons.facebook {\n        background-color: #3b5999;\n}\n#block-news-item .item-news-foot .item-social .social-icons.twitter {\n        background-color: #53acee;\n}\n#block-news-item .item-news-foot .item-social .social-icons.google {\n        background-color: #dd4a3a;\n}\n#block-news-item .item-news-foot .item-social .social-icons.linkedin-in {\n        background-color: #0076b4;\n}\n#block-news-item .el-breadcrumb {\n    -webkit-box-pack: left;\n        -ms-flex-pack: left;\n            justify-content: left;\n}\n", ""]);

// exports


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__ = __webpack_require__(81);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    components: {
        MenuHeader: __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_2_components_block_footer___default.a
    }
});

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "bg-black-cover position-relative",
      style: "background-image:url(/images/bg_brand_1.png)",
      attrs: { id: "block-news-item" }
    },
    [
      _c(
        "div",
        { staticClass: "text-white align-items-end d-flex position-relative" },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "news-item-head flex-column position-relative w-100"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "news-item-breadcrumb" },
                    [
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
                                          (index <
                                            _vm.$route.matched.length - 1 &&
                                            _vm.$route.matched[index + 1]
                                              .path ==
                                              _vm.$route.matched[index].path +
                                                "/") ||
                                          index ==
                                            _vm.$route.matched.length - 1 ||
                                          _vm.$route.matched[index].redirect !=
                                            undefined
                                      }
                                    ]
                                  },
                                  [
                                    (index < _vm.$route.matched.length - 1 &&
                                      _vm.$route.matched[index + 1].path ==
                                        _vm.$route.matched[index].path + "/") ||
                                    index == _vm.$route.matched.length - 1 ||
                                    _vm.$route.matched[index].redirect !=
                                      undefined
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "no-redirect text-white"
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(item.name) +
                                                "\n                                "
                                            )
                                          ]
                                        )
                                      : _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: item.redirect || item.path
                                            }
                                          },
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
              ),
              _vm._v(" "),
              _c("div", { staticClass: "item-news-body w-100" }, [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "item-news-foot w-100 d-flex justify-content-between"
                  },
                  [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "item-social-list d-flex" }, [
                      _c(
                        "span",
                        {
                          staticClass: "d-inline-flex align-items-center mr-3"
                        },
                        [_vm._v("社群分享")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "item-social" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "social-icons facebook d-inline-flex align-items-center justify-content-center",
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
                            staticClass:
                              "social-icons twitter d-inline-flex align-items-center justify-content-center",
                            attrs: { href: "#" }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: ["fab", "twitter"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "social-icons google d-inline-flex align-items-center justify-content-center",
                            attrs: { href: "#" }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: ["fab", "google"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass:
                              "social-icons linkedin-in d-inline-flex align-items-center justify-content-center",
                            attrs: { href: "#" }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: ["fab", "linkedin-in"] }
                            })
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(5)
              ])
            ])
          ])
        ]
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
    return _c("h2", { staticClass: "news-item-title" }, [
      _vm._v("新光三越旗艦店開幕"),
      _c("br"),
      _vm._v("全店享九折優惠")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "news-item-info d-flex" }, [
      _c("div", { staticClass: "news-info -date d-flex flex-column mr-5" }, [
        _c("span", { staticClass: "info-title" }, [_vm._v("發佈日期：")]),
        _vm._v(" "),
        _c("span", { staticClass: "info-text" }, [_vm._v("2018/3/21")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "news-info -group d-flex flex-column mr-5" }, [
        _c("span", { staticClass: "info-title" }, [_vm._v("發佈單位：")]),
        _vm._v(" "),
        _c("span", { staticClass: "info-text text-orange" }, [
          _vm._v("橘色涮涮屋")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "news-info -cate d-flex flex-column mr-5" }, [
        _c("span", { staticClass: "info-title" }, [_vm._v("發佈類別：")]),
        _vm._v(" "),
        _c("span", { staticClass: "info-text" }, [_vm._v("最新消息")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "news-play text-white" }, [
      _c("span", { staticClass: "btn-play d-inline-flex align-items-center" }, [
        _vm._v("播放媒體影音")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-news-content" }, [
      _c("p", { staticClass: "item-intro-text" }, [
        _vm._v(
          "測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱測試描述文字大綱"
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-big-orange" }, [
        _vm._v("”用心。貼心。安心，打造最美好的火鍋體驗“")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "text-intro-small text-center" }, [
        _vm._v("橘色創辦人 袁永定")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
        )
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-intro-title" }, [
        _vm._v("測試描述標題文字")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
        )
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "img-fullwidth",
        attrs: { src: "/images/slideshow_1.jpg" }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "text-center text-img" }, [
        _vm._v("測試描述文字測試描述文字測試描述文字測試描述")
      ]),
      _vm._v(" "),
      _c("h3", { staticClass: "text-intro-title" }, [
        _vm._v("測試描述標題文字")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
        )
      ]),
      _vm._v(" "),
      _c("img", { attrs: { src: "/images/bg_brand_1.png" } }),
      _vm._v(" "),
      _c("img", { attrs: { src: "/images/bg_food_1.png" } }),
      _vm._v(" "),
      _c("h3", { staticClass: "text-intro-title" }, [
        _vm._v("測試描述標題文字")
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-tags-list" }, [
      _c("span", { staticClass: "item-tag" }, [_vm._v("橘色涮涮屋")]),
      _vm._v(" "),
      _c("span", { staticClass: "item-tag" }, [_vm._v("新店")]),
      _vm._v(" "),
      _c("span", { staticClass: "item-tag" }, [_vm._v("新光三越")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "item-relatives w-100 d-flex justify-content-between" },
      [
        _c("div", { staticClass: "item-relative -pre text-left" }, [
          _c("span", { staticClass: "title-relative" }, [_vm._v("上一則訊息")]),
          _vm._v(" "),
          _c("a", { staticClass: "position-relative", attrs: { href: "#" } }, [
            _vm._v("消息標題文字")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "item-relative -next text-right" }, [
          _c("span", { staticClass: "title-relative" }, [_vm._v("下一則訊息")]),
          _vm._v(" "),
          _c("a", { staticClass: "position-relative", attrs: { href: "#" } }, [
            _vm._v("消息標題文字")
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
    require("vue-hot-reload-api")      .rerender("data-v-039313c4", module.exports)
  }
}

/***/ })

});