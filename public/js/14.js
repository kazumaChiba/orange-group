webpackJsonp([14],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(452)
}
var normalizeComponent = __webpack_require__(49)
/* script */
var __vue_script__ = __webpack_require__(454)
/* template */
var __vue_template__ = __webpack_require__(455)
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


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(453);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(80)("42e1514a", content, false, {});
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

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n#header {\n  top: 0;\n}\n#block-news {\n  margin-bottom: 180px;\n}\n#block-news .filter-date.-year {\n    width: 90px;\n}\n#block-news .filter-date.-month {\n    width: 85px;\n}\n#block-news .filter-date .el-input__inner {\n    -webkit-appearance: none;\n    border-radius: 0;\n    border: unset;\n    background: transparent;\n    color: white;\n}\n#block-news .filter-date .el-select__caret {\n    color: #fff;\n}\n#block-news #block-news-lists {\n    z-index: 2;\n    margin-bottom: 80px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories {\n      padding: 55px 0;\n      font-size: 14px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories.-category {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date {\n        padding: 5px;\n        background: #f26d23;\n        cursor: pointer;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date.-month {\n          margin-right: 20px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date.-year {\n          position: relative;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date.-year:after {\n            content: \"\";\n            position: absolute;\n            height: 60%;\n            width: 1px;\n            background: #bfbfbf;\n            right: 0;\n            top: 20%;\n}\n#block-news #block-news-items .news-item {\n    width: 25%;\n    padding: 0 16px;\n}\n#block-breadcrumb .banner-title {\n  font-size: 90px;\n  font-weight: 300;\n}\n", ""]);

// exports


/***/ }),

/***/ 454:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (105:0)\n\n\u001b[0m \u001b[90m 103 | \u001b[39m            newsItems\u001b[33m:\u001b[39m [\n \u001b[90m 104 | \u001b[39m                {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 105 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m     | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 106 | \u001b[39m                    background\u001b[33m:\u001b[39m \u001b[32m'/images/news_v1.png'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 107 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 108 | \u001b[39m                    background\u001b[33m:\u001b[39m \u001b[32m'/images/news_v2.png'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 455:
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
          img: "/images/slideshow_1.jpg"
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
                _c("div", { staticClass: "container" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "news-categories -category d-flex" },
                      _vm._l(_vm.newsCategories, function(item, $index) {
                        return _c(
                          "div",
                          {
                            key: $index,
                            staticClass:
                              "category-items mr-4 ml-4 d-flex align-items-center",
                            class: _vm.newsIndex == $index ? "active" : "",
                            attrs: { id: "category-items" },
                            on: {
                              click: function($event) {
                                _vm.newsIndex = $index
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                " +
                                _vm._s(item) +
                                "\n                            "
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
                          staticClass: "d-flex",
                          attrs: { id: "category-date" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "filter-date -year" },
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
                              { key: $index, staticClass: "news-item" },
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

/***/ })

});