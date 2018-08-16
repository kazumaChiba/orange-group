webpackJsonp([4],Array(52).concat([
/* 52 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(64)
/* template */
var __vue_template__ = __webpack_require__(95)
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
/* 55 */
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

var listToStyles = __webpack_require__(56)

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
/* 56 */
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
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("66f7d9da", content, false, {});
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#burger-menu {\n  width: 0px;\n  height: 25px;\n  text-align: center;\n  overflow: hidden;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  position: absolute;\n  right: 0;\n}\n#burger-menu:before {\n    content: \"|||\";\n    color: #f26c23;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    display: inline-block;\n    font-weight: bold;\n}\n#burger-menu:hover {\n    cursor: pointer;\n}\n#burger-menu.menu-close {\n    width: 25px;\n}\n#fp-nav {\n  opacity: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc(50% - 585px);\n  visibility: hidden;\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n#fp-nav.active {\n    visibility: visible;\n    opacity: 1;\n}\n#fp-nav ul li {\n    width: 100%;\n    height: 30px;\n    margin: 0;\n}\n#fp-nav ul li:last-child {\n      display: none;\n}\n#fp-nav ul li span {\n      display: none;\n}\n#fp-nav ul li .fp-tooltip.fp-right {\n      color: #ccc;\n      opacity: 1;\n      width: auto;\n      font-size: 17px;\n      letter-spacing: 0px;\n      font-style: italic;\n      top: 50%;\n      right: 50%;\n      overflow: visible;\n      -webkit-transform: translate(50%, -50%);\n              transform: translate(50%, -50%);\n}\n#fp-nav ul li:hover {\n      cursor: pointer;\n      background: #f26c23;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n}\n#fp-nav ul li:hover .fp-tooltip.fp-right {\n        color: white;\n}\n#app .fp-scroller {\n  min-height: 100%;\n}\n#app .logo {\n  height: 150px;\n}\n#app #header {\n  top: 0;\n  z-index: 999999;\n  width: 100%;\n}\n#app .main-title {\n  line-height: 35px;\n}\n#app .main-title .sub-title {\n    letter-spacing: 16px;\n    font-weight: 400;\n}\n#app .section-pd {\n  padding: 100px 0;\n}\n#app .fade-enter-active, #app .fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n#app .fade-enter-to, #app .fade-leave-to {\n  opacity: 0;\n}\n#app .bg-transition {\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n#app .bg-transition .bg-inner {\n    background-position-x: 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    -webkit-transition: all 1s;\n    transition: all 1s;\n    height: 100%;\n    width: 100vw;\n}\n#app .bg-transition.bg-left {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n}\n#app .bg-transition.bg-right {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    right: 0;\n}\n#app .bg-transition.bg-right .bg-inner {\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n}\n#app .bg-transition.active {\n    -webkit-animation: bgSwitch 1s ease-in-out;\n            animation: bgSwitch 1s ease-in-out;\n}\n@-webkit-keyframes bgSwitch {\n100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n}\n@keyframes bgSwitch {\n100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n}\n}\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.bg-black-cover:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  left: 0;\n}\n.fade-enter-active, .fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n  display: none;\n}\n", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_header_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_experience__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_block_brands__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_block_news___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_block_news__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_block_foods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_block_footer__ = __webpack_require__(90);
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
                slidesNavigation: true
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
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu___default.a,
        BlockExperience: __WEBPACK_IMPORTED_MODULE_1_components_block_experience___default.a,
        BlockBrands: __WEBPACK_IMPORTED_MODULE_2_components_block_brands___default.a,
        BlockNews: __WEBPACK_IMPORTED_MODULE_3_components_block_news___default.a,
        BlockFoods: __WEBPACK_IMPORTED_MODULE_4_components_block_foods___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_5_components_block_footer___default.a
    }

});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(68)
/* template */
var __vue_template__ = __webpack_require__(69)
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("43a9e374", content, false, {});
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#header .logo {\n  padding-left: 35px;\n}\n#header #main-menu {\n  width: 50%;\n  margin-left: auto;\n  overflow: hidden;\n  position: relative;\n  padding-right: 35px;\n  margin-right: 35px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n#header #main-menu .menu-outer {\n    overflow: hidden;\n}\n#header #main-menu .menu-outer.menu-close .menu-list {\n      -webkit-transform: translateX(100%);\n              transform: translateX(100%);\n}\n#header #main-menu .menu-outer .menu-list {\n      -webkit-transition: all .5s ease-in-out;\n      transition: all .5s ease-in-out;\n}\n#header #main-menu .menu-outer .menu-title {\n      display: inline-block;\n      font-size: 16px;\n      font-weight: 500;\n      padding: 0 20px;\n}\n#header #main-menu .menu-outer.menu-shadow .menu-list {\n      background: rgba(0, 0, 0, 0.3);\n}\n", ""]);

// exports


/***/ }),
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(71)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(74)
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("b9557f26", content, false, {});
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#block-experience {\n  background-size: cover;\n}\n#block-experience:before, #block-experience .bg-transition.bg-left:before {\n    position: absolute;\n    width: 50%;\n    height: 100vh;\n    background: black;\n    content: \"\";\n    left: 0;\n    opacity: 0.6;\n    top: calc(50% - 50vh);\n    z-index: 0;\n    content: \"\";\n    word-break: keep-all;\n}\n#block-experience .bg-transition.bg-left:before {\n    width: 100%;\n}\n#block-experience .fp-scroller {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#block-experience #content-experience .big_title {\n    font-size: 220px;\n    color: rgba(255, 255, 255, 0.2);\n    position: absolute;\n    left: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 50%;\n    word-break: keep-all;\n    overflow: hidden;\n}\n#block-experience #content-experience .experience-inner {\n    width: 350px;\n    margin: 0 auto;\n    text-align: left;\n    font-weight: 300;\n    top: 100px;\n}\n#block-experience #content-experience .experience-inner .experience-item {\n      -webkit-transition: opacity .5s;\n      transition: opacity .5s;\n}\n#block-experience #content-experience .experience-inner h5 {\n      letter-spacing: 4px;\n      font-weight: 300;\n}\n#block-experience #content-experience .experience-inner .left-line:before {\n      content: \"\";\n      display: inline-block;\n      width: 20px;\n      height: 5px;\n      background: #f26d23;\n      margin-right: 10px;\n      vertical-align: middle;\n}\n#block-experience #content-experience .experience-circle {\n    position: absolute;\n    top: calc(50% - 150px);\n    left: calc(50% - 250px);\n}\n#block-experience #content-experience .experience-circle .circle-option, #block-experience #content-experience .experience-circle .circle-body {\n      position: absolute;\n      width: 500px;\n      height: 500px;\n}\n#block-experience #content-experience .experience-circle .circle-body {\n      border-radius: 500px;\n      border: 30px solid rgba(255, 113, 34, 0.76);\n      border-left-color: transparent;\n}\n#block-experience #content-experience .experience-circle .circle-option {\n      -webkit-transition: all 2s;\n      transition: all 2s;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n}\n#block-experience #content-experience .experience-circle .circle-option.active {\n        opacity: 0;\n        -webkit-transition: opacity .3s;\n        transition: opacity .3s;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option {\n        position: absolute;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option:hover {\n          cursor: pointer;\n          color: #f26d23;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-top {\n          top: -50px;\n          left: 50%;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-bottom {\n          bottom: -50px;\n          left: 50%;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-right {\n          top: 50%;\n          right: -50px;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.-left {\n          top: 50%;\n          left: -50px;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option a {\n          word-break: keep-all;\n}\n#block-experience #content-experience .experience-circle .circle-option .text-circle-option.active {\n          opacity: 0;\n          -webkit-transition: opacity 1s;\n          transition: opacity 1s;\n          -webkit-transition-delay: .5s;\n                  transition-delay: .5s;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_0 a {\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          -webkit-transform: rotate(0deg) !important;\n                  transform: rotate(0deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 {\n        -webkit-transform: rotate(-90deg);\n                transform: rotate(-90deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_1 a {\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          -webkit-transform: rotate(90deg) !important;\n                  transform: rotate(90deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_2 a {\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          -webkit-transform: rotate(180deg) !important;\n                  transform: rotate(180deg) !important;\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 {\n        -webkit-transform: rotate(-270deg);\n                transform: rotate(-270deg);\n}\n#block-experience #content-experience .experience-circle .circle-option.e_index_3 a {\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          -webkit-transform: rotate(270deg) !important;\n                  transform: rotate(270deg) !important;\n}\n", ""]);

// exports


/***/ }),
/* 73 */
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
                'title': 'M One Cafe'
            }, {
                'url': '/images/bg_food_1.png',
                'title': '橘色舒體'
            }],
            experience_index: 0,
            index_old: 0
        };
    },
    components: {
        'ex': {
            template: '<div>' + '<h2 class="mb-4">橘色體驗</h2>' + '<h5 class="mb-4"><span class="fs-inherit text-orange">橘色 </span>體驗</h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色體驗</router-link>' + '</div>'
        },
        'pot': {
            template: '<div>' + '<h2 class="mb-4">橘色鍋物</h2>' + '<h5 class="mb-4"><span class="fs-inherit text-orange">橘色 </span>鍋物</h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色鍋物</router-link>' + '</div>'
        },
        'coffee': {
            template: '<div>' + '<h3 class="mb-4">M One Cafe</h3>' + '<h5 class="mb-4"><span class="fs-inherit text-orange">M One </span>Cafe</h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索M One Cafe</router-link>' + '</div>'
        },
        'spa': {
            template: '<div>' + '<h2 class="mb-4">橘色舒體</h2>' + '<h5 class="mb-4"><span class="fs-inherit text-orange">橘色 </span>舒體</h5>' + '<router-link :to="\'\/\'\" class="left-line text-size-2">探索橘色舒體</router-link>' + '</div>'
        }
    },
    methods: {
        bgAnimated: function bgAnimated(index) {
            var _this = this;

            this.bgTransition = true;
            setTimeout(function () {
                _this.index_old = index;
            }, 1000);
            setTimeout(function () {
                _this.bgTransition = false;
            }, 1500);
        }
    }
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "position-relative section text-white text-center h-100",
      style: "background-image:url(" + _vm.experience[_vm.index_old].url + ")",
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
            staticClass: "bg-inner",
            style:
              "background-image:url(" +
              _vm.experience[_vm.experience_index].url +
              ")"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "bg-transition bg-right",
          class: { active: _vm.bgTransition }
        },
        [
          _c("div", {
            staticClass: "bg-inner",
            style:
              "background-image:url(" +
              _vm.experience[_vm.experience_index].url +
              ")"
          })
        ]
      ),
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
            _c("div", { staticClass: "circle-body" }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "circle-option",
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
                        _vm.bgAnimated(0)
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
                        _vm.bgAnimated(1)
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
                        _vm.bgAnimated(2)
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
                        _vm.bgAnimated(3)
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(78)
/* template */
var __vue_template__ = __webpack_require__(79)
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("7b45937c", content, false, {});
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#block-brands {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#block-brands .container {\n    z-index: 2;\n}\n#block-brands .container .content-brands .info-brands {\n      width: 300px;\n      height: 300px;\n      background: rgba(242, 108, 35, 0.4);\n      border: 1px solid white;\n      padding: 0 40px;\n      font-size: 30px;\n}\n#block-brands .container .text-brands {\n      font-size: 30px;\n      letter-spacing: 20px;\n      line-height: 45px;\n      font-weight: lighter;\n}\n#block-brands .container .text-brands .text-orange {\n        letter-spacing: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 78 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            addTransition: false,
            brandIndex: 0,
            brandBg: [{
                background: '/images/bg_brand_1.png',
                title: 'EXTENSION1 by 橘色',
                contact: '/',
                book: '/',
                text: '小鍋<span class="text-orange">新</span>時尚<br>不管多少人都能吃得精彩！'
            }, {
                background: '/images/bg_brand_1.png',
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
            }, parseInt(time));
        }
    }
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "section text-white position-relative text-center bg-black-cover",
      style: "background: url(" + _vm.brandBg[_vm.brandIndex].background + ")",
      attrs: { id: "block-brands" }
    },
    [
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
      _c("span", { staticClass: "text-size-3 sub-title" }, [
        _vm._v("orange brands")
      ])
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(83)
/* template */
var __vue_template__ = __webpack_require__(84)
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("125a11db", content, false, {});
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#block-news:before, #block-news:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 400px;\n  left: 0;\n  top: 0;\n}\n#block-news:before {\n  background-size: 25px 25px;\n  background-image: radial-gradient(#0000000d 20%, transparent 15%), radial-gradient(#0000000d 20%, transparent 20%);\n  background-position: 10px 25px;\n}\n#block-news:after {\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(white));\n  background: linear-gradient(transparent, white);\n}\n#block-news > div {\n  z-index: 3;\n  position: relative;\n}\n#block-news .news-body .category-items {\n  cursor: pointer;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n#block-news .news-body .category-items:hover {\n    color: #f26e22;\n}\n#block-news .news-body .news-list {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n#block-news .news-body .news-list .block-list {\n    width: 20%;\n}\n#block-news .news-body .news-list .block-list.-center {\n      width: 50%;\n}\n#block-news .news-body .news-list .block-list .news-item {\n      margin-bottom: 50px;\n      -webkit-transition: all .5s;\n      transition: all .5s;\n}\n#block-news .news-body .news-list .block-list .news-item .news-head {\n        height: 350px;\n        margin-bottom: 15px;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#block-news .news-body .news-list .block-list .news-item .news-head:before {\n          content: \"\";\n          background: #f26d23;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n          -webkit-transition: all .3s;\n          transition: all .3s;\n}\n#block-news .news-body .news-list .block-list .news-item .news-head:hover:before {\n          opacity: 0.6;\n}\n#block-news .news-body .news-list .block-list .news-item .news-head:hover a {\n          display: block;\n}\n#block-news .news-body .news-list .block-list .news-item .news-head a {\n          display: none;\n          z-index: 2;\n}\n#block-news .news-body .news-list .block-list .news-item .news-head .text-size-1 {\n          font-size: 13px !important;\n}\n#block-news .news-body .news-list .block-list .news-item .news-title {\n        color: black;\n}\n#block-news .news-body .news-list .block-list .news-item .news-title:hover {\n          color: #f26e22;\n}\n#block-news .btn-orange:hover {\n  background: #f26d23;\n  color: white;\n}\n", ""]);

// exports


/***/ }),
/* 83 */
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
    methods: {
        loadMore: function loadMore() {
            this.viewIndex++;
            fullpage_api.reBuild();
        }
    }
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "section text-black position-relative text-center",
      attrs: { id: "block-news" }
    },
    [
      _c(
        "div",
        { staticClass: "container position-relative m-auto section-pd" },
        [
          _c(
            "div",
            {
              staticClass:
                "row flex-column align-items-center justify-content-center flex-nowrap"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
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
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(item) +
                              "\n                    "
                          )
                        ]
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
                          staticClass:
                            "news-list d-flex justify-content-between w-100"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-list -beside d-flex flex-column justify-content-between"
                            },
                            _vm._l(
                              _vm.newsItems.slice(
                                _vm.viewIndex,
                                _vm.viewIndex + 2
                              ),
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
                                          "background: url(" +
                                          item.background +
                                          ")"
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "btn-border",
                                            attrs: { to: "/" }
                                          },
                                          [_vm._v("了解更多")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "news-content" }, [
                                      _c("div", [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-black text-size-1"
                                          },
                                          [_vm._v(_vm._s(item.date))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-orange text-size-1"
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
                                        "background: url(" +
                                        _vm.newsItems[_vm.viewIndex + 2]
                                          .background +
                                        ")"
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "btn-border",
                                          attrs: { to: "/" }
                                        },
                                        [_vm._v("了解更多")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "news-content" }, [
                                    _c("div", [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "text-black text-size-1"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.newsItems[_vm.viewIndex + 2]
                                                .date
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "text-orange text-size-1"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.newsItems[_vm.viewIndex + 2]
                                                .category
                                            )
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("a", {
                                      staticClass: "news-title",
                                      attrs: {
                                        href:
                                          _vm.newsItems[_vm.viewIndex + 2].link
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
                              _vm.newsItems.slice(
                                _vm.viewIndex + 3,
                                _vm.viewIndex + 5
                              ),
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
                                          "background: url(" +
                                          item.background +
                                          ")"
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "btn-border",
                                            attrs: { to: "/" }
                                          },
                                          [_vm._v("了解更多")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "news-content" }, [
                                      _c("div", [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-black text-size-1"
                                          },
                                          [_vm._v(_vm._s(item.date))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-orange text-size-1"
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
              ),
              _vm._v(" "),
              _c("router-link", { attrs: { to: "/" } }, [
                _c(
                  "span",
                  {
                    staticClass: "btn-load-more btn-orange",
                    on: {
                      click: function($event) {
                        _vm.loadMore()
                      }
                    }
                  },
                  [_vm._v("更多橘色新訊")]
                )
              ])
            ],
            1
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
    return _c("h3", { staticClass: "main-title text-uppercase" }, [
      _c("span", { staticClass: "fs-inherit text-orange" }, [_vm._v("橘色")]),
      _vm._v("新訊"),
      _c("br"),
      _c("span", { staticClass: "text-size-3 sub-title" }, [
        _vm._v("events & news")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e9078d8", module.exports)
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(86)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(89)
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("e8adc522", content, false, {});
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#block-foods .line-top:before {\n  content: \"\";\n  background: #f46f1b;\n  width: 100px;\n  height: 1px;\n  display: block;\n  margin-bottom: 30px;\n}\n#block-foods .block-food-body {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n#block-foods .block-food-body:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n}\n#block-foods .block-food-body .content-food {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 0 100px;\n    overflow: hidden;\n}\n#block-foods .block-food-body .content-food .bg-left {\n      width: 100%;\n      left: 0;\n      z-index: 0;\n}\n#block-foods .block-food-body .content-food .more-food-info {\n      width: 100px;\n      height: 100px;\n      display: inline-block;\n      border-radius: 100%;\n      background-position: center;\n      background-size: cover;\n      cursor: pointer;\n      margin-right: 25px;\n}\n#block-foods .block-food-body .content-food .more-food-info.active {\n        opacity: 0.8;\n        -webkit-box-shadow: 0 0 15px rgba(255, 255, 255, 0.21);\n                box-shadow: 0 0 15px rgba(255, 255, 255, 0.21);\n        -webkit-transition: all .3s;\n        transition: all .3s;\n}\n#block-foods .block-food-body .content-food > div {\n      position: relative;\n      z-index: 2;\n}\n#block-foods .block-food-body .content-food.-left {\n      background: transparent;\n}\n#block-foods .block-food-body .content-food.-right {\n      background: white;\n      z-index: 2;\n}\n#block-foods .block-food-body .content-food.-right:before, #block-foods .block-food-body .content-food.-right:after {\n        content: \"\";\n        position: absolute;\n        border-radius: 100%;\n}\n#block-foods .block-food-body .content-food.-right:before {\n        width: 850px;\n        height: 850px;\n        background: rgba(242, 108, 35, 0.1);\n        right: -540px;\n        bottom: -480px;\n}\n#block-foods .block-food-body .content-food.-right:after {\n        width: 100px;\n        height: 100px;\n        background: rgba(0, 0, 0, 0.22);\n        right: -70px;\n        bottom: 300px;\n}\n#block-foods .block-food-body .content-food.-right .food-info-inner {\n        height: 500px;\n        width: 500px;\n        background: #f26d23;\n        border-radius: 100%;\n        -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);\n                box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);\n        -webkit-transition: all .5s;\n        transition: all .5s;\n}\n#block-foods .block-food-body .content-food.-right .food-info-inner .text-food-info {\n          font-weight: 300;\n          letter-spacing: 2px;\n}\n#block-foods .block-food-body .content-food.-right .loader {\n        position: absolute;\n        width: 50vw;\n        height: 100vh;\n        stroke-linecap: round;\n        stroke-width: 5;\n        fill: none;\n        left: 0;\n}\n#block-foods .block-food-body .content-food.-right .loader .internal-circle {\n          stroke: #f26c23;\n          stroke-dasharray: 55%,10%,25%;\n          opacity: .4;\n          -webkit-transform-origin: 45% 55%;\n                  transform-origin: 45% 55%;\n}\n#block-foods .block-food-body .content-food.-right .loader.active .internal-circle {\n          -webkit-transform: rotate(360deg);\n                  transform: rotate(360deg);\n          -webkit-transition: all 1s;\n          transition: all 1s;\n}\n", ""]);

// exports


/***/ }),
/* 88 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            bgTransition: false,
            addTransition: false,
            index_old: 0,
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
            food_index: 0

        };
    },
    methods: {
        bgAnimated: function bgAnimated(index) {
            var _this = this;

            this.bgTransition = true;
            setTimeout(function () {
                _this.index_old = index;
            }, 1000);
            setTimeout(function () {
                _this.bgTransition = false;
            }, 1500);
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "section text-white position-relative",
      attrs: { id: "block-foods" }
    },
    [
      _c(
        "div",
        {
          staticClass: "block-food-body d-flex h-100 bg-black-filter",
          style:
            "background-image:url(" + _vm.foodItems[_vm.index_old].url + ")"
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
                staticClass: "bg-inner",
                style:
                  "background-image:url(" +
                  _vm.foodItems[_vm.food_index].url +
                  ")"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "content-food -left d-flex flex-column justify-content-center position-relative"
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
                  _c("h1", [
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
                          _vm.bgAnimated($index)
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
                    attrs: { cx: "45%", cy: "55%", r: "450" }
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
    return _c("h3", { staticClass: "main-title text-black text-uppercase" }, [
      _c("span", { staticClass: "fs-inherit text-orange" }, [_vm._v("橘色 ")]),
      _vm._v("價值"),
      _c("br"),
      _c("span", { staticClass: "text-size-3 sub-title" }, [
        _vm._v("about value")
      ])
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(93)
/* template */
var __vue_template__ = __webpack_require__(94)
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(55)("b8d6fad2", content, false, {});
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#footer:before {\n  background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n  position: relative;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n    letter-spacing: 5px;\n}\n#footer .footer-social .footer-icons {\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 93 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "section text-white text-center bg-black-cover",
      staticStyle: { "background-image": "url('/images/bg_footer.png')" },
      attrs: { id: "footer" }
    },
    [
      _c("div", { staticClass: "container h-100 section-pd" }, [
        _c("div", { staticClass: "row h-100" }, [
          _c(
            "div",
            {
              staticClass:
                "footer footer-join position-relative d-flex align-items-center justify-content-between w-100"
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "btn-orange", attrs: { to: "/" } },
                [_vm._v("馬上加入我們")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "footer footer-social position-relative d-flex flex-column align-items-center justify-content-center w-100"
            },
            [
              _c("div", { staticClass: "mb-5" }, [
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
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-left" }, [
      _c("span", [_vm._v("不僅僅只是台灣最棒的餐飲集團")]),
      _c("br"),
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
          "footer footer-info position-relative d-flex justify-content-between align-items-center w-100"
      },
      [
        _c("div", { staticClass: "text-size-2" }, [
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
        _c("div", { staticClass: "text-size-2" }, [
          _c("p", { staticClass: "text-orange footer-info-title mb-4" }, [
            _vm._v("橘色精神")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-size-3" }, [
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
/* 95 */
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
        class: _vm.sectionPosition,
        attrs: { id: "header" }
      },
      [
        _c("div", { staticClass: "mt-5 d-flex" }, [
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
              }),
              _vm._v(" "),
              _c("span", {
                class: _vm.sectionIndex != 0 ? "menu-close" : "",
                attrs: { id: "burger-menu" },
                on: {
                  click: function($event) {
                    _vm.closeMenu = !_vm.closeMenu
                  }
                }
              })
            ],
            1
          )
        ])
      ]
    ),
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
            _c("block-news"),
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
]));