webpackJsonp([2],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(258)
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

/***/ 211:
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

var listToStyles = __webpack_require__(212)

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

/***/ 212:
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

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(214)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(216)
/* template */
var __vue_template__ = __webpack_require__(217)
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
Component.options.__file = "resources/assets/components/block-header-menu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-450143ac", Component.options)
  } else {
    hotAPI.reload("data-v-450143ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(211)("43a9e374", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-450143ac\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-header-menu.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-450143ac\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-header-menu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#header .logo {\n  padding-left: 35px;\n}\n#header #main-menu {\n  width: 50%;\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n  padding-right: 35px;\n  margin-right: 35px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n#header #main-menu .menu-outer {\n    overflow: hidden;\n}\n#header #main-menu .menu-outer.menu-close .menu-list {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n}\n#header #main-menu .menu-outer .menu-list {\n      -webkit-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n}\n#header #main-menu .menu-outer .menu-title {\n      display: inline-block;\n      font-size: 16px;\n      font-weight: 500;\n      padding: 0 20px;\n}\n#header #main-menu .menu-outer.menu-shadow .menu-list {\n      background: rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/***/ }),

/***/ 216:
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

/***/ 217:
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
    require("vue-hot-reload-api")      .rerender("data-v-450143ac", module.exports)
  }
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(211)("7ed73c01", content, false, {});
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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#block-contact #block-contact-brands {\n  top: 150px;\n  margin-bottom: 250px;\n}\n#block-contact #block-contact-brands .row {\n    height: 500px;\n    position: relative;\n    background: white;\n}\n#block-contact #block-contact-brands .row .contact-brands-item {\n      width: 25%;\n      -webkit-box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.1);\n              box-shadow: -10px -10px 60px rgba(0, 0, 0, 0.1);\n      overflow: hidden;\n      padding: 40px;\n      position: relative;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:before, #block-contact #block-contact-brands .row .contact-brands-item:after {\n        content: \"\";\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        opacity: 0;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:before {\n        background-image: url(/images/bg_brand_1.png);\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:after {\n        background: #f26d23;\n}\n#block-contact #block-contact-brands .row .contact-brands-item.-intro-text {\n        width: 50%;\n}\n#block-contact #block-contact-brands .row .contact-brands-item img {\n        width: 80px;\n}\n#block-contact #block-contact-brands .row .contact-brands-item > * {\n        z-index: 2;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text):hover, #block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text).active {\n        cursor: pointer;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text):hover .brand-title, #block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text):hover p, #block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text).active .brand-title, #block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text).active p {\n          color: white !important;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text):hover:before, #block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text).active:before {\n          opacity: 1;\n}\n#block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text):hover:after, #block-contact #block-contact-brands .row .contact-brands-item:not(.-intro-text).active:after {\n          opacity: 0.5;\n}\n#block-contact #block-contact-brands .row .brand-intro-title {\n      font-size: 38px;\n      font-weight: 500;\n      margin-bottom: 10px;\n}\n#block-contact #block-contact-brands .row .brand-intro-subtitle {\n      font-size: 22px;\n      color: gray;\n      font-weight: 500;\n}\n#block-contact #block-contact-brands .row .text-line-left {\n      margin-bottom: 20px;\n      font-weight: 500;\n}\n#block-contact #block-contact-brands .row .text-line-left:before {\n        content: \"\";\n        position: absolute;\n        width: 50%;\n        height: 1px;\n        background: #f26d23;\n        top: 50%;\n        left: calc(-50% - 20px);\n}\n#block-contact #block-contact-brands .row .brand-title {\n      font-size: 22px;\n      font-weight: 500;\n      margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_header_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_banner__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_contact_form__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_contact_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_contact_form__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                img: '/images/index_logo.png',
                title: 'M ONE CAFE',
                intro: '',
                name: 'm_one_cafe'
            }, {
                img: '/images/index_logo.png',
                title: 'M ONE SPA',
                intro: '',
                name: 'm_one_spa'
            }, {
                img: '/images/index_logo.png',
                title: 'SAKURA SPA',
                intro: '',
                name: 'sakura_spa'
            }, {
                img: '/images/index_logo.png',
                title: '人力招募',
                intro: '<p class="text-size-2 font-weight-bold">即刻加入橘色大家庭</p>',
                name: 'join'
            }],
            brandName: 'shabu'
        };
    },
    components: {
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu___default.a,
        Banner: __WEBPACK_IMPORTED_MODULE_1_components_block_banner___default.a,
        ContactForm: __WEBPACK_IMPORTED_MODULE_2_components_contact_form___default.a
    }
});

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(262)
/* template */
var __vue_template__ = __webpack_require__(263)
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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(261);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(211)("822c5f64", content, false, {});
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

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#block-breadcrumb {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  top: 0;\n  height: 50vh;\n}\n#block-breadcrumb:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n}\n#block-breadcrumb .el-breadcrumb {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#block-breadcrumb .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {\n      color: white;\n}\n#block-breadcrumb .el-breadcrumb .el-breadcrumb__item:not(.no-redirect) .el-breadcrumb__inner:hover {\n      color: #f26d23;\n}\n", ""]);

// exports


/***/ }),

/***/ 262:
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

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "position-absolute w-100 d-flex align-items-center justify-content-center",
      style: "background-image:url(" + _vm.img + ")",
      attrs: { id: "block-breadcrumb" }
    },
    [
      _c(
        "div",
        { staticClass: "position-relative text-white" },
        [
          _c("h2", {
            staticClass: "mb-4 ",
            domProps: { innerHTML: _vm._s(_vm.title) }
          }),
          _vm._v(" "),
          _c(
            "el-breadcrumb",
            { attrs: { "separator-class": "el-icon-arrow-right" } },
            [
              _c("el-breadcrumb-item", { attrs: { to: "/" } }, [
                _vm._v("Home")
              ]),
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

/***/ 264:
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
          img: "/images/slideshow_1.jpg"
        }
      }),
      _vm._v(" "),
      _c("div", { attrs: { id: "header" } }, [
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
      ]),
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
              { staticClass: "row" },
              [
                _vm._m(1),
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
                            "text-orange brand-title position-relative text-center"
                        },
                        [_vm._v(_vm._s(item.title))]
                      ),
                      _vm._v(" "),
                      _c("div", { domProps: { innerHTML: _vm._s(item.intro) } })
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("contact-form", { attrs: { brand: _vm.brandName } }),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { attrs: { id: "block-map" } })
          ],
          1
        )
      ])
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
  },
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
        _c("div", [
          _c(
            "span",
            {
              staticClass:
                "text-orange text-size-2 text-line-left d-block position-relative"
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
    return _c("div", { attrs: { id: "block-address" } }, [_c("div")])
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

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(267)
}
var normalizeComponent = __webpack_require__(79)
/* script */
var __vue_script__ = __webpack_require__(269)
/* template */
var __vue_template__ = __webpack_require__(270)
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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(211)("3c4d6a73", content, false, {});
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#contact-form {\n  padding: 0 100px;\n}\n#contact-form .contact-form-title {\n    font-size: 28px;\n}\n#contact-form .contact-form-field {\n    height: 325px;\n}\n#contact-form .contact-form-field input {\n      width: calc(50% - 15px);\n      border: none;\n      border-bottom: 1px solid #ccc;\n      padding: 10px 0;\n      margin-bottom: 20px;\n}\n#contact-form .contact-form-field input:last-child {\n        margin-left: 30px;\n}\n#contact-form .contact-form-field input::-webkit-input-placeholder {\n        font-size: 14px;\n}\n#contact-form .contact-form-field input:-ms-input-placeholder {\n        font-size: 14px;\n}\n#contact-form .contact-form-field input::-ms-input-placeholder {\n        font-size: 14px;\n}\n#contact-form .contact-form-field input::placeholder {\n        font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 269:
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
                subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！',
                content: '<input placeholder="您的姓名">' + '<input placeholder="您的電子信箱">' + '<input placeholder="您的電話">' + '<input placeholder="欲聯繫的橘色分館">' + '<input placeholder="欲詢問的問題類型">' + '<input type="textarea" placeholder="您的詢問內容">'

            }), _defineProperty(_fields, 'extension_1', {
                title: '聯絡<span class="text-orange">Extension 1 By橘色</span>',
                subtitle: '隨時歡迎您與我們聯繫，無論是訂位餐飲或是任何其他相關問題，都可以提出詢問！',
                content: '<input placeholder="您的姓名">' + '<input placeholder="您的電子信箱">' + '<input placeholder="您的電話">' + '<input placeholder="欲聯繫的extension 1分館">' + '<input placeholder="欲詢問的問題類型">' + '<input type="textarea" placeholder="您的詢問內容">'

            }), _fields)
        };
    },
    components: {},
    props: {
        brand: {
            type: String,
            default: 'shabu'
        }
    }
});

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-100", attrs: { id: "contact-form" } }, [
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
      _c("div", {
        staticClass: "contact-form-field d-flex flex-column flex-wrap",
        domProps: { innerHTML: _vm._s(_vm.fields[_vm.brand].content) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f8a4e54", module.exports)
  }
}

/***/ })

});