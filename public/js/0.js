webpackJsonp([0],{

/***/ 52:
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

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(63)
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

/***/ 55:
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

/***/ 56:
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#app .logo {\n  height: 150px;\n}\n#app #header {\n  top: 0;\n  z-index: 999999;\n  width: 100%;\n}\n#app .main-title {\n  line-height: 35px;\n}\n#app .main-title .sub-title {\n    letter-spacing: 16px;\n    font-weight: 400;\n}\n#app .section-pd {\n  padding: 100px 0;\n}\n#app .fade-enter-active, #app .fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n#app .fade-enter, #app .fade-leave-to {\n  opacity: 0;\n}\n.bg-black-cover:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  left: 0;\n}\n#content-experience:before {\n  position: absolute;\n  width: 50%;\n  height: 100vh;\n  background: black;\n  content: \"\";\n  left: 0;\n  opacity: 0.6;\n  top: calc(50% - 50vh);\n  z-index: -1;\n  content: \"\";\n  word-break: keep-all;\n}\n#content-experience .big_title {\n  font-size: 220px;\n  color: rgba(255, 255, 255, 0.2);\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 50%;\n  word-break: keep-all;\n  overflow: hidden;\n}\n#content-experience .experience-inner {\n  width: 350px;\n  margin: 0 auto;\n  text-align: left;\n  font-weight: 300;\n  top: 100px;\n}\n#content-experience .experience-inner h5 {\n    letter-spacing: 4px;\n    font-weight: 300;\n}\n#content-experience .experience-inner .left-line:before {\n    content: \"\";\n    display: inline-block;\n    width: 20px;\n    height: 5px;\n    background: #f26d23;\n    margin-right: 10px;\n    vertical-align: middle;\n}\n#content-experience .circle-option, #content-experience .circle-body {\n  position: absolute;\n  width: 500px;\n  height: 500px;\n  top: calc(100% - 250px);\n  left: calc(50% - 250px);\n}\n#content-experience .circle-body {\n  border-radius: 500px;\n  border: 30px solid rgba(255, 113, 34, 0.76);\n  border-left-color: transparent;\n  z-index: -2;\n}\n#content-experience .circle-option {\n  -webkit-transition: all 2s;\n  transition: all 2s;\n  -webkit-transform: rotate(0);\n          transform: rotate(0);\n}\n#content-experience .circle-option.active {\n    opacity: 0;\n    -webkit-transition: opacity .3s;\n    transition: opacity .3s;\n}\n#content-experience .circle-option .text-circle-option {\n    position: absolute;\n}\n#content-experience .circle-option .text-circle-option:hover {\n      cursor: pointer;\n      color: #f26d23;\n}\n#content-experience .circle-option .text-circle-option.-top {\n      top: -50px;\n      left: 50%;\n}\n#content-experience .circle-option .text-circle-option.-bottom {\n      bottom: -50px;\n      left: 50%;\n}\n#content-experience .circle-option .text-circle-option.-right {\n      top: 50%;\n      right: -50px;\n}\n#content-experience .circle-option .text-circle-option.-left {\n      top: 50%;\n      left: -50px;\n}\n#content-experience .circle-option .text-circle-option a {\n      word-break: keep-all;\n}\n#content-experience .circle-option .text-circle-option.active {\n      opacity: 0;\n      -webkit-transition: opacity 1s;\n      transition: opacity 1s;\n      -webkit-transition-delay: .5s;\n              transition-delay: .5s;\n}\n#content-experience .circle-option.e_index_0 {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n#content-experience .circle-option.e_index_0 a {\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      -webkit-transform: rotate(0deg) !important;\n              transform: rotate(0deg) !important;\n}\n#content-experience .circle-option.e_index_1 {\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n#content-experience .circle-option.e_index_1 a {\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      -webkit-transform: rotate(90deg) !important;\n              transform: rotate(90deg) !important;\n}\n#content-experience .circle-option.e_index_2 {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg);\n}\n#content-experience .circle-option.e_index_2 a {\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      -webkit-transform: rotate(180deg) !important;\n              transform: rotate(180deg) !important;\n}\n#content-experience .circle-option.e_index_3 {\n    -webkit-transform: rotate(-270deg);\n            transform: rotate(-270deg);\n}\n#content-experience .circle-option.e_index_3 a {\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      -webkit-transform: rotate(270deg) !important;\n              transform: rotate(270deg) !important;\n}\n#block-foods .line-top:before {\n  content: \"\";\n  background: #f46f1b;\n  width: 100px;\n  height: 1px;\n  display: block;\n  margin-bottom: 30px;\n}\n#block-foods .content-food {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-position: center;\n  background-repeat: no-repeat;\n  padding: 0 100px;\n}\n#block-foods .content-food .more-food-info {\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n    border-radius: 100%;\n    background-position: center;\n    background-size: cover;\n    cursor: pointer;\n    margin-right: 25px;\n}\n#block-foods .content-food > div {\n    position: relative;\n    z-index: 2;\n}\n#block-foods .content-food.-left:after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n}\n#block-foods .content-food.-right:before, #block-foods .content-food.-right:after {\n    content: \"\";\n    position: absolute;\n    border-radius: 100%;\n}\n#block-foods .content-food.-right:before {\n    width: 850px;\n    height: 850px;\n    background: rgba(242, 108, 35, 0.1);\n    right: -540px;\n    bottom: -480px;\n}\n#block-foods .content-food.-right:after {\n    width: 100px;\n    height: 100px;\n    background: rgba(0, 0, 0, 0.22);\n    right: -70px;\n    bottom: 300px;\n}\n#block-foods .content-food.-right .food-info-inner {\n    height: 500px;\n    width: 500px;\n    background: #f26d23;\n    border-radius: 100%;\n    -webkit-box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);\n            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);\n}\n#block-foods .content-food.-right .food-info-inner .text-food-info {\n      font-weight: 300;\n      letter-spacing: 2px;\n}\n#block-foods .content-food.-right .loader {\n    position: absolute;\n    width: 50vw;\n    height: 100vh;\n    stroke-linecap: round;\n    stroke-width: 5;\n    fill: none;\n    left: 0;\n    top: 120px;\n}\n#block-foods .content-food.-right .loader .internal-circle {\n      stroke: #f26c23;\n      stroke-dasharray: 60%,10%,25%;\n      opacity: .4;\n      -webkit-animation: internal 1.5s ease-in-out alternate;\n              animation: internal 1.5s ease-in-out alternate;\n      -webkit-animation-play-state: paused;\n              animation-play-state: paused;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      -webkit-transform-origin: 350px 400px;\n              transform-origin: 350px 400px;\n}\n#block-foods.active .content-food.-right .internal-circle {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n@-webkit-keyframes internal {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes internal {\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n#block-brands {\n  background-repeat: no-repea;\n  background-size: cover;\n}\n#block-brands .container {\n    z-index: 2;\n}\n#block-brands .container .content-brands .info-brands {\n      width: 300px;\n      height: 300px;\n      background: rgba(242, 108, 35, 0.4);\n      border: 1px solid white;\n      padding: 0 40px;\n      font-size: 30px;\n}\n#block-brands .container .text-brands {\n      font-size: 30px;\n      letter-spacing: 20px;\n      line-height: 45px;\n      font-weight: lighter;\n}\n#block-brands .container .text-brands .text-orange {\n        letter-spacing: 20px;\n}\n#block-news:before {\n  content: \"\";\n  background-size: 25px 25px;\n  background-image: radial-gradient(#0000000d 20%, transparent 15%), radial-gradient(#0000000d 20%, transparent 20%);\n  background-position: 10px 25px;\n  position: absolute;\n  width: 100%;\n  height: 400px;\n  left: 0;\n  top: 0;\n}\n#block-news .news-body .category-items {\n  cursor: pointer;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n#block-news .news-body .category-items:hover {\n    color: #f26e22;\n}\n#block-news .news-body .news-list {\n  height: 800px;\n}\n#block-news .news-body .news-list .news-item {\n    width: 30%;\n}\n#block-news .news-body .news-list .news-item .news-head {\n      padding-top: 110%;\n}\n#block-news .news-body .news-list .news-item .news-title {\n      color: black;\n}\n#footer:before {\n  background: rgba(0, 0, 0, 0.85);\n}\n#footer .fp-tableCell {\n  position: relative;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#footer .fp-tableCell .footer-info-title {\n    letter-spacing: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_header_menu__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            experience: [{
                big_title: '橘色體驗',
                title: '<span class="fs-inherit text-orange">橘色 </span>體驗',
                text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                link_url: '/',
                link_text: '探索橘色體驗'
            }, {
                big_title: '橘色鍋物',
                title: '<span class="fs-inherit text-orange">橘色 </span>鍋物',
                text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                link_url: '/',
                link_text: '探索橘色體驗'
            }, {
                big_title: '橘色咖啡',
                title: '<span class="fs-inherit text-orange">橘色 </span>咖啡',
                text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                link_url: '/',
                link_text: '探索橘色咖啡'
            }, {
                big_title: '橘色舒體',
                title: '<span class="fs-inherit text-orange">橘色 </span>舒體',
                text: '獨一無二的橘色價值<br/>創造獨一無二的體驗',
                link_url: '/',
                link_text: '探索橘色體驗'
            }],
            experience_index: 0,
            options: {
                menu: '#menu',
                anchors: ['', '橘色體驗', '橘色價值', '橘色版圖', '橘色新訊'],
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
            },
            bgImg: ["background-image:url('/images/bg_food_1.png')", "background-image:url('/images/bg_food_1.png')", "background-image:url('/images/bg_food_1.png')"],
            selectFoodInfo: "",
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
            }],
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
            }],
            newsCategories: ['全部新訊', '橘色涮涮屋', 'Extension 1 by 橘色', 'M One Cafe', 'M One Spa', 'Sakura Spa']

        };
    },
    mounted: function mounted() {
        jQuery(document).ready(function () {}); // END jquery ready
    },
    components: {
        MenuHeader: __WEBPACK_IMPORTED_MODULE_0_components_block_header_menu___default.a
    }
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(65)
}
var normalizeComponent = __webpack_require__(12)
/* script */
var __vue_script__ = __webpack_require__(67)
/* template */
var __vue_template__ = __webpack_require__(68)
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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "\n#main-menu {\n  width: 50%;\n  margin-left: auto;\n}\n#main-menu .menu-title {\n    display: inline-block;\n    font-size: 16px;\n    font-weight: 500;\n    padding: 0 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 67:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {},
    props: {}
});

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex justify-content-end", attrs: { id: "main-menu" } },
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
      _c("router-link", { staticClass: "menu-title", attrs: { to: "/news" } }, [
        _vm._v("橘色新訊")
      ]),
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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "block-main" } }, [
    _c("div", { staticClass: "position-fixed", attrs: { id: "header" } }, [
      _c(
        "div",
        { staticClass: "ml-5 mr-5 mt-5 d-flex" },
        [_vm._m(0), _vm._v(" "), _c("menu-header")],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "full-page",
          { ref: "fullpage", attrs: { id: "fullpage", options: _vm.options } },
          [
            _c(
              "div",
              {
                staticClass: "section text-white text-center",
                staticStyle: {
                  "background-image": "url('/images/slideshow_1.jpg')"
                },
                attrs: { id: "block-experience" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "position-relative position-h-center",
                    attrs: { id: "content-experience" }
                  },
                  [
                    _c("h1", { staticClass: "big_title" }, [
                      _vm._v(
                        _vm._s(_vm.experience[_vm.experience_index].big_title)
                      )
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
                                  _vm.experience_index = 0
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
                                  _vm.experience_index = 1
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
                                  _vm.experience_index = 2
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
                                  _vm.experience_index = 3
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
                          "div",
                          {
                            key: _vm.experience_index,
                            staticClass: "experience-item"
                          },
                          [
                            _c("h2", {
                              staticClass: "mb-4",
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.experience[_vm.experience_index].title
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("h5", {
                              staticClass: "mb-4",
                              domProps: {
                                innerHTML: _vm._s(
                                  _vm.experience[_vm.experience_index].text
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "left-line text-size-2",
                                attrs: {
                                  to:
                                    _vm.experience[_vm.experience_index]
                                      .link_url
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.experience[_vm.experience_index]
                                      .link_text
                                  )
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "section text-white",
                attrs: { id: "block-foods" }
              },
              [
                _c("div", { staticClass: "d-flex h-100" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "content-food -left d-flex flex-column justify-content-center position-relative",
                      style: _vm.bgImg[0]
                    },
                    [
                      _c("div", { staticClass: "mb-5" }, [
                        _c("p", { staticClass: "line-top text-size-2" }, [
                          _vm._v(
                            "\n                                頂級食材源自產地與挑選"
                          ),
                          _c("br"),
                          _vm._v(
                            "只願意提供最美好的食材給每位客戶\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("h1", [_vm._v("頂級食材")])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "align-self-end mt-5" },
                        [
                          _c("p", { staticClass: "text-size-2" }, [
                            _vm._v("探索更多橘色價值")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.bgImg, function(item, $index) {
                            return _c("div", {
                              key: $index,
                              staticClass: "more-food-info",
                              style: item
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
                      _c("svg", { staticClass: "loader" }, [
                        _c("circle", {
                          staticClass: "internal-circle",
                          attrs: { cx: "350", cy: "400", r: "450" }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "h3",
                        { staticClass: "main-title text-black text-uppercase" },
                        [
                          _c(
                            "span",
                            { staticClass: "fs-inherit text-orange" },
                            [_vm._v("橘色 ")]
                          ),
                          _vm._v("體驗"),
                          _c("br"),
                          _c("span", { staticClass: "text-size-3 sub-title" }, [
                            _vm._v("about value")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "food-info-inner d-flex flex-column justify-content-center p-5"
                        },
                        [
                          _c("p", { staticClass: "text-size-2 mb-2" }, [
                            _vm._v("橘色美食背後的秘密")
                          ]),
                          _vm._v(" "),
                          _c("h4", { staticClass: "text-food-title mb-4" }, [
                            _vm._v("食材的"),
                            _c("span", { staticClass: "text-black" }, [
                              _vm._v("秘密")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-food-info" }, [
                            _vm._v(
                              "測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字"
                            )
                          ])
                        ]
                      )
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
                  "section text-white position-relative text-center bg-black-cover",
                style:
                  "background: url(" +
                  _vm.brandBg[_vm.brandIndex].background +
                  ")",
                attrs: { id: "block-brands" }
              },
              [
                _c(
                  "div",
                  { staticClass: "container position-relative m-auto h-100 " },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "row h-100 flex-column align-items-center justify-content-center"
                      },
                      [
                        _c("h3", { staticClass: "main-title text-uppercase" }, [
                          _c(
                            "span",
                            { staticClass: "fs-inherit text-orange" },
                            [_vm._v("橘色")]
                          ),
                          _vm._v("版圖"),
                          _c("br"),
                          _c("span", { staticClass: "text-size-3 sub-title" }, [
                            _vm._v("orange brands")
                          ])
                        ]),
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
                                _c("p", [
                                  _vm._v(
                                    _vm._s(_vm.brandBg[_vm.brandIndex].title)
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "d-flex text-size-3" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "brands-link",
                                        attrs: {
                                          to:
                                            _vm.brandBg[_vm.brandIndex].contact
                                        }
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
                                        attrs: {
                                          to: _vm.brandBg[_vm.brandIndex].book
                                        }
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
                          domProps: {
                            innerHTML: _vm._s(_vm.brandBg[_vm.brandIndex].text)
                          }
                        })
                      ]
                    )
                  ]
                )
              ]
            ),
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
                          _c("span", { staticClass: "text-size-3 sub-title" }, [
                            _vm._v("events & news")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "news-body" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "news-categories d-flex text-size-2 mt-5 mb-3"
                            },
                            _vm._l(_vm.newsCategories, function(item, $index) {
                              return _c(
                                "div",
                                {
                                  key: $index,
                                  staticClass: "category-items mr-4 ml-4"
                                },
                                [_vm._v(_vm._s(item))]
                              )
                            })
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "news-list d-flex flex-column flex-wrap"
                            },
                            _vm._l(_vm.newsItems, function(item, $index) {
                              return _c(
                                "div",
                                { key: $index, staticClass: "news-item" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "news-head",
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
                                  _c("div", [
                                    _c(
                                      "span",
                                      { staticClass: "text-black text-size-1" },
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
                                    domProps: { innerHTML: _vm._s(item.title) }
                                  })
                                ]
                              )
                            })
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          { staticClass: "btn-orange", attrs: { to: "/" } },
                          [_vm._v("更多橘色新訊")]
                        )
                      ],
                      1
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "section text-white text-center bg-black-cover",
                staticStyle: {
                  "background-image": "url('/images/bg_footer.png')"
                },
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
                        _c("h4", { staticClass: "text-left" }, [
                          _c("span", [_vm._v("不僅僅只是台灣最棒的餐飲集團")]),
                          _c("br"),
                          _c("span", { staticClass: "text-orange" }, [
                            _vm._v("還是實現自我未來的大家庭")
                          ])
                        ]),
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
                    _c(
                      "div",
                      {
                        staticClass:
                          "footer footer-info position-relative d-flex justify-content-between align-items-center w-100"
                      },
                      [
                        _c("div", { staticClass: "text-size-2" }, [
                          _c(
                            "p",
                            {
                              staticClass: "text-orange footer-info-title mb-4"
                            },
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
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "logo",
                          attrs: { src: "/images/index_logo.png" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-size-2" }, [
                          _c(
                            "p",
                            {
                              staticClass: "text-orange footer-info-title mb-4"
                            },
                            [_vm._v("橘色精神")]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-size-3" }, [
                            _vm._v("用心 · 貼心 · 安心"),
                            _c("br"),
                            _vm._v("信心 · 一心 · 同理心")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "footer footer-social position-relative" },
                      [
                        _c(
                          "a",
                          { attrs: { href: "#" } },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: "facebook" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fab fa-twitter" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fab fa-youtube" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fab fa-google-plus-g" })
                        ]),
                        _vm._v(" "),
                        _c("a", { attrs: { href: "#" } }, [
                          _c("i", { staticClass: "fab fa-behance" })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "footer position-relative w-100 text-size-1 d-flex align-items-end justify-content-center",
                        attrs: { id: "copyright" }
                      },
                      [
                        _vm._v("2018 "),
                        _c("a", { staticClass: "link-orange" }, [
                          _vm._v(" 橘色涮涮屋 ")
                        ]),
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
                  ])
                ])
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo" }, [
      _c("img", { attrs: { src: "/images/index_logo.png" } })
    ])
  }
]
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