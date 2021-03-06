(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "GfCq":
/*!****************************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/native-loading/ls.native-loading.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "s+lh"));
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "s+lh")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(window, function(window, document, lazySizes) {
	'use strict';

	var imgSupport = 'loading' in HTMLImageElement.prototype;
	var iframeSupport = 'loading' in HTMLIFrameElement.prototype;
	var isConfigSet = false;
	var oldPrematureUnveil = lazySizes.prematureUnveil;
	var cfg = lazySizes.cfg;
	var listenerMap = {
		focus: 1,
		mouseover: 1,
		click: 1,
		load: 1,
		transitionend: 1,
		animationend: 1,
		scroll: 1,
		resize: 1,
	};

	if (!cfg.nativeLoading) {
		cfg.nativeLoading = {};
	}

	if (!window.addEventListener || !window.MutationObserver || (!imgSupport && !iframeSupport)) {
		return;
	}

	function disableEvents() {
		var loader = lazySizes.loader;
		var throttledCheckElements = loader.checkElems;
		var removeALSL = function(){
			setTimeout(function(){
				window.removeEventListener('scroll', loader._aLSL, true);
			}, 1000);
		};
		var currentListenerMap = typeof cfg.nativeLoading.disableListeners == 'object' ?
			cfg.nativeLoading.disableListeners :
			listenerMap;

		if (currentListenerMap.scroll) {
			window.addEventListener('load', removeALSL);
			removeALSL();

			window.removeEventListener('scroll', throttledCheckElements, true);
		}

		if (currentListenerMap.resize) {
			window.removeEventListener('resize', throttledCheckElements, true);
		}

		Object.keys(currentListenerMap).forEach(function(name) {
			if (currentListenerMap[name]) {
				document.removeEventListener(name, throttledCheckElements, true);
			}
		});
	}

	function runConfig() {
		if (isConfigSet) {return;}
		isConfigSet = true;

		if (imgSupport && iframeSupport && cfg.nativeLoading.disableListeners) {
			if (cfg.nativeLoading.disableListeners === true) {
				cfg.nativeLoading.setLoadingAttribute = true;
			}

			disableEvents();
		}

		if (cfg.nativeLoading.setLoadingAttribute) {
			window.addEventListener('lazybeforeunveil', function(e){
				var element = e.target;

				if ('loading' in element && !element.getAttribute('loading')) {
					element.setAttribute('loading', 'lazy');
				}
			}, true);
		}
	}

	lazySizes.prematureUnveil = function prematureUnveil(element) {

		if (!isConfigSet) {
			runConfig();
		}

		if ('loading' in element &&
			(cfg.nativeLoading.setLoadingAttribute || element.getAttribute('loading')) &&
			(element.getAttribute('data-sizes') != 'auto' || element.offsetWidth)) {
			return true;
		}

		if (oldPrematureUnveil) {
			return oldPrematureUnveil(element);
		}
	};

}));


/***/ })

}]);
//# sourceMappingURL=1.js.map