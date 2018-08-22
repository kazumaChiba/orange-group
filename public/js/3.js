webpackJsonp([3],{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(213)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 213:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(220)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(222)
/* template */
var __vue_template__ = __webpack_require__(223)
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

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(212)("b8d6fad2", content, false, {});
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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#footer .container {\n  padding: 60px 0 20px 0;\n}\n#footer .container .join-us-slogan {\n    font-size: 28px;\n    font-weight: lighter;\n}\n#footer .container .join-us-slogan span {\n      font-size: 48px;\n      line-height: 40px;\n      font-weight: bold;\n}\n#footer .footer-social {\n  margin-bottom: 60px;\n}\n#footer:before {\n  background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n  position: relative;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n    letter-spacing: 6px;\n    font-weight: 500;\n    font-size: 15px;\n}\n#footer .footer-social .footer-icons {\n  font-size: 20px;\n}\n#footer .footer .footer-info {\n  margin-bottom: 100px;\n  line-height: 25px;\n  font-size: 14px;\n  font-weight: 100;\n}\n#footer .footer .footer-info p {\n    margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle {\n    font-size: 18px;\n    font-weight: 100;\n    line-height: 30px;\n}\n#footer .footer.footer-join:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: calc(100% + 150px);\n  background: rgba(0, 0, 0, 0.4);\n  z-index: -1;\n  top: -100px;\n}\n", ""]);

// exports


/***/ }),

/***/ 222:
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

/***/ 223:
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
                  { staticClass: "btn-orange -fat", attrs: { to: "/" } },
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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(261)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(263)
/* template */
var __vue_template__ = __webpack_require__(264)
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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(212)("822c5f64", content, false, {});
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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#block-breadcrumb {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 50vh;\n}\n#block-breadcrumb:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    top: 0;\n}\n#block-breadcrumb .el-breadcrumb {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#block-breadcrumb .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {\n      color: white;\n}\n#block-breadcrumb .el-breadcrumb .el-breadcrumb__item:not(.no-redirect) .el-breadcrumb__inner:hover {\n      color: #f26d23;\n}\n", ""]);

// exports


/***/ }),

/***/ 263:
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

/***/ 264:
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

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(283)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(285)
/* template */
var __vue_template__ = __webpack_require__(286)
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
Component.options.__file = "resources/assets/components/block-menu-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d544a46", Component.options)
  } else {
    hotAPI.reload("data-v-6d544a46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(284);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(212)("2989ad9a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d544a46\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-menu-header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6d544a46\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-menu-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#header .logo {\n  padding-left: 35px;\n}\n#header #main-menu {\n  width: 50%;\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n  padding-right: 35px;\n  margin-right: 35px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n#header #main-menu .menu-outer {\n    overflow: hidden;\n}\n#header #main-menu .menu-outer.menu-close .menu-list {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n}\n#header #main-menu .menu-outer .menu-list {\n      -webkit-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n}\n#header #main-menu .menu-outer .menu-title {\n      display: inline-block;\n      font-size: 16px;\n      font-weight: 500;\n      padding: 0 20px;\n}\n#header #main-menu .menu-outer.menu-shadow .menu-list {\n      background: rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/***/ }),

/***/ 285:
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
    props: {}
});

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "menu-outer d-flex justify-content-end" }, [
    _c(
      "div",
      { staticClass: "menu-list" },
      [
        _c("router-link", { staticClass: "menu-title", attrs: { to: "/" } }, [
          _vm._v("橘色體驗")
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "menu-title", attrs: { to: "/about" } },
          [_vm._v("關於橘色")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "menu-title", attrs: { to: "/news" } },
          [_vm._v("橘色新訊")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "menu-title", attrs: { to: "/family" } },
          [_vm._v("橘色家庭")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "menu-title", attrs: { to: "/contact" } },
          [_vm._v("聯絡我們")]
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
    require("vue-hot-reload-api")      .rerender("data-v-6d544a46", module.exports)
  }
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(294)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(296)
/* template */
var __vue_template__ = __webpack_require__(297)
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

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(295);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(212)("42e1514a", content, false, {});
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

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#header {\n  top: 0;\n}\n#block-news {\n  margin-bottom: 180px;\n}\n#block-news #block-news-lists {\n    z-index: 2;\n    margin-bottom: 80px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories {\n      padding: 55px 0px;\n      font-size: 14px;\n}\n#block-news #block-news-lists #block-news-filter .news-categories.-category {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#block-news #block-news-lists #block-news-filter .news-categories .filter-date {\n        padding: 15px 20px;\n        background: #f26d23;\n        margin-right: 20px;\n        cursor: pointer;\n}\n#block-news #block-news-items .news-item {\n    width: 25%;\n    padding: 0 16px;\n}\n#block-breadcrumb .banner-title {\n  font-size: 90px;\n  font-weight: 300;\n}\n", ""]);

// exports


/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_menu_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_menu_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_footer__ = __webpack_require__(219);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newsItems: [{
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }, {
                background: '/images/bg_brand_1.png',
                date: '2018/3/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                link: '/#/news/detail'
            }],
            newsCategories: ['全部新訊', '橘色涮涮屋', 'Extension 1 by 橘色', 'M One Cafe', 'M One Spa', 'Sakura Spa'],
            newsIndex: 0,
            viewIndex: 8
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

/***/ 297:
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
        { staticClass: "position-absolute w-100", attrs: { id: "header" } },
        [
          _c("div", { staticClass: "mt-5 d-flex w-100" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-end align-items-start",
                attrs: { id: "main-menu" }
              },
              [_c("menu-header")],
              1
            )
          ])
        ]
      ),
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
                                "el-dropdown",
                                {
                                  staticClass: "text-white",
                                  attrs: { trigger: "click" }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "el-dropdown-link" },
                                    [
                                      _vm._v(
                                        "\n                                            2018"
                                      ),
                                      _c("i", {
                                        staticClass:
                                          "el-icon-arrow-down el-icon--right"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-dropdown-menu",
                                    {
                                      attrs: { slot: "dropdown" },
                                      slot: "dropdown"
                                    },
                                    [_c("el-dropdown-item", [_vm._v("年")])],
                                    1
                                  )
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
                                "el-dropdown",
                                {
                                  staticClass: "text-white",
                                  attrs: { trigger: "click" }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "el-dropdown-link" },
                                    [
                                      _vm._v(
                                        "\n                                            9月"
                                      ),
                                      _c("i", {
                                        staticClass:
                                          "el-icon-arrow-down el-icon--right"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-dropdown-menu",
                                    {
                                      attrs: { slot: "dropdown" },
                                      slot: "dropdown"
                                    },
                                    [_c("el-dropdown-item", [_vm._v("月")])],
                                    1
                                  )
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
                                      "background: url(" + item.background + ")"
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
                staticClass: "btn-load-more btn-orange -fat",
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c("img", {
        staticClass: "position-relative",
        attrs: { src: "/images/index_logo.png" }
      })
    ])
  }
]
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