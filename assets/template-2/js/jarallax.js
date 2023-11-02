/*!
 * Name : Just Another Parallax [Jarallax]
 * Version : 1.12.2
 * Author : nK <https://nkdev.info>
 * GitHub : https://github.com/nk-o/jarallax
 */
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = !0;
        return module.exports
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: !0,
                get: getter
            })
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            })
        }
        Object.defineProperty(exports, '__esModule', {
            value: !0
        })
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
            enumerable: !0,
            value: value
        });
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key]
            }.bind(null, key));
        return ns
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default']
        } : function getModuleExports() {
            return module
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 10)
})([, , (function(module, exports) {
    module.exports = function(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            callback.call()
        } else if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'interactive') callback.call()
            })
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback)
        }
    }
}), (function(module, exports, __webpack_require__) {
    (function(global) {
        var win;
        if (typeof window !== "undefined") {
            win = window
        } else if (typeof global !== "undefined") {
            win = global
        } else if (typeof self !== "undefined") {
            win = self
        } else {
            win = {}
        }
        module.exports = win
    }.call(this, __webpack_require__(4)))
}), (function(module, exports) {
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj
            }
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
        }
        return _typeof(obj)
    }
    var g;
    g = function() {
        return this
    }();
    try {
        g = g || new Function("return this")()
    } catch (e) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window
    }
    module.exports = g
}), , , , , , (function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(11)
}), (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
    var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
    var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
    var global__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
    var _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);

    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj
            }
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
        }
        return _typeof(obj)
    }
    var oldPlugin = global__WEBPACK_IMPORTED_MODULE_1__.window.jarallax;
    global__WEBPACK_IMPORTED_MODULE_1__.window.jarallax = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"];
    global__WEBPACK_IMPORTED_MODULE_1__.window.jarallax.noConflict = function() {
        global__WEBPACK_IMPORTED_MODULE_1__.window.jarallax = oldPlugin;
        return this
    };
    if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_1__.jQuery) {
        var jQueryPlugin = function jQueryPlugin() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key]
            }
            Array.prototype.unshift.call(args, this);
            var res = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].apply(global__WEBPACK_IMPORTED_MODULE_1__.window, args);
            return 'object' !== _typeof(res) ? res : this
        };
        jQueryPlugin.constructor = _jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"].constructor;
        var oldJqPlugin = global__WEBPACK_IMPORTED_MODULE_1__.jQuery.fn.jarallax;
        global__WEBPACK_IMPORTED_MODULE_1__.jQuery.fn.jarallax = jQueryPlugin;
        global__WEBPACK_IMPORTED_MODULE_1__.jQuery.fn.jarallax.noConflict = function() {
            global__WEBPACK_IMPORTED_MODULE_1__.jQuery.fn.jarallax = oldJqPlugin;
            return this
        }
    }
    lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function() {
        Object(_jarallax_esm__WEBPACK_IMPORTED_MODULE_2__["default"])(document.querySelectorAll('[data-jarallax]'))
    })
}), (function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
    var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
    var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
    var global__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i]
        }
        return arr2
    }

    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = !0;
        var _d = !1;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break
            }
        } catch (err) {
            _d = !0;
            _e = err
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]()
            } finally {
                if (_d) throw _e
            }
        }
        return _arr
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr
    }

    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof(obj) {
                return typeof obj
            }
        } else {
            _typeof = function _typeof(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
            }
        }
        return _typeof(obj)
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function")
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1;
            descriptor.configurable = !0;
            if ("value" in descriptor) descriptor.writable = !0;
            Object.defineProperty(target, descriptor.key, descriptor)
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor
    }
    var navigator = global__WEBPACK_IMPORTED_MODULE_1__.window.navigator;
    var isIE = -1 < navigator.userAgent.indexOf('MSIE ') || -1 < navigator.userAgent.indexOf('Trident/') || -1 < navigator.userAgent.indexOf('Edge/');
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var supportTransform = function() {
        var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
        var div = document.createElement('div');
        for (var i = 0; i < prefixes.length; i += 1) {
            if (div && div.style[prefixes[i]] !== undefined) {
                return prefixes[i]
            }
        }
        return !1
    }();
    var $deviceHelper;

    function getDeviceHeight() {
        if (!$deviceHelper && document.body) {
            $deviceHelper = document.createElement('div');
            $deviceHelper.style.cssText = 'position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;';
            document.body.appendChild($deviceHelper)
        }
        return ($deviceHelper ? $deviceHelper.clientHeight : 0) || global__WEBPACK_IMPORTED_MODULE_1__.window.innerHeight || document.documentElement.clientHeight
    }
    var wndH;

    function updateWndVars() {
        if (isMobile) {
            wndH = getDeviceHeight()
        } else {
            wndH = global__WEBPACK_IMPORTED_MODULE_1__.window.innerHeight || document.documentElement.clientHeight
        }
    }
    updateWndVars();
    global__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('resize', updateWndVars);
    global__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('orientationchange', updateWndVars);
    global__WEBPACK_IMPORTED_MODULE_1__.window.addEventListener('load', updateWndVars);
    lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function() {
        updateWndVars({
            type: 'dom-loaded'
        })
    });
    var jarallaxList = [];

    function getParents(elem) {
        var parents = [];
        while (null !== elem.parentElement) {
            elem = elem.parentElement;
            if (1 === elem.nodeType) {
                parents.push(elem)
            }
        }
        return parents
    }

    function updateParallax() {
        if (!jarallaxList.length) {
            return
        }
        jarallaxList.forEach(function(data, k) {
            var instance = data.instance,
                oldData = data.oldData;
            var clientRect = instance.$item.getBoundingClientRect();
            var newData = {
                width: clientRect.width,
                height: clientRect.height,
                top: clientRect.top,
                bottom: clientRect.bottom,
                wndW: global__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth,
                wndH: wndH
            };
            var isResized = !oldData || oldData.wndW !== newData.wndW || oldData.wndH !== newData.wndH || oldData.width !== newData.width || oldData.height !== newData.height;
            var isScrolled = isResized || !oldData || oldData.top !== newData.top || oldData.bottom !== newData.bottom;
            jarallaxList[k].oldData = newData;
            if (isResized) {
                instance.onResize()
            }
            if (isScrolled) {
                instance.onScroll()
            }
        });
        global__WEBPACK_IMPORTED_MODULE_1__.window.requestAnimationFrame(updateParallax)
    }
    var instanceID = 0;
    var Jarallax = function() {
        function Jarallax(item, userOptions) {
            _classCallCheck(this, Jarallax);
            var self = this;
            self.instanceID = instanceID;
            instanceID += 1;
            self.$item = item;
            self.defaults = {
                type: 'scroll',
                speed: 0.5,
                imgSrc: null,
                imgElement: '.jarallax-img',
                imgSize: 'cover',
                imgPosition: '50% 50%',
                imgRepeat: 'no-repeat',
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var dataOptions = self.$item.dataset || {};
            var pureDataOptions = {};
            Object.keys(dataOptions).forEach(function(key) {
                var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
                if (loweCaseOption && 'undefined' !== typeof self.defaults[loweCaseOption]) {
                    pureDataOptions[loweCaseOption] = dataOptions[key]
                }
            });
            self.options = self.extend({}, self.defaults, pureDataOptions, userOptions);
            self.pureOptions = self.extend({}, self.options);
            Object.keys(self.options).forEach(function(key) {
                if ('true' === self.options[key]) {
                    self.options[key] = !0
                } else if ('false' === self.options[key]) {
                    self.options[key] = !1
                }
            });
            self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
            if ('string' === typeof self.options.disableParallax) {
                self.options.disableParallax = new RegExp(self.options.disableParallax)
            }
            if (self.options.disableParallax instanceof RegExp) {
                var disableParallaxRegexp = self.options.disableParallax;
                self.options.disableParallax = function() {
                    return disableParallaxRegexp.test(navigator.userAgent)
                }
            }
            if ('function' !== typeof self.options.disableParallax) {
                self.options.disableParallax = function() {
                    return !1
                }
            }
            if ('string' === typeof self.options.disableVideo) {
                self.options.disableVideo = new RegExp(self.options.disableVideo)
            }
            if (self.options.disableVideo instanceof RegExp) {
                var disableVideoRegexp = self.options.disableVideo;
                self.options.disableVideo = function() {
                    return disableVideoRegexp.test(navigator.userAgent)
                }
            }
            if ('function' !== typeof self.options.disableVideo) {
                self.options.disableVideo = function() {
                    return !1
                }
            }
            var elementInVP = self.options.elementInViewport;
            if (elementInVP && 'object' === _typeof(elementInVP) && 'undefined' !== typeof elementInVP.length) {
                var _elementInVP = elementInVP;
                var _elementInVP2 = _slicedToArray(_elementInVP, 1);
                elementInVP = _elementInVP2[0]
            }
            if (!(elementInVP instanceof Element)) {
                elementInVP = null
            }
            self.options.elementInViewport = elementInVP;
            self.image = {
                src: self.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
            };
            if (self.initImg() && self.canInitParallax()) {
                self.init()
            }
        }
        _createClass(Jarallax, [{
            key: "css",
            value: function css(el, styles) {
                if ('string' === typeof styles) {
                    return global__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle(el).getPropertyValue(styles)
                }
                if (styles.transform && supportTransform) {
                    styles[supportTransform] = styles.transform
                }
                Object.keys(styles).forEach(function(key) {
                    el.style[key] = styles[key]
                });
                return el
            }
        }, {
            key: "extend",
            value: function extend(out) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key]
                }
                out = out || {};
                Object.keys(args).forEach(function(i) {
                    if (!args[i]) {
                        return
                    }
                    Object.keys(args[i]).forEach(function(key) {
                        out[key] = args[i][key]
                    })
                });
                return out
            }
        }, {
            key: "getWindowData",
            value: function getWindowData() {
                return {
                    width: global__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth || document.documentElement.clientWidth,
                    height: wndH,
                    y: document.documentElement.scrollTop
                }
            }
        }, {
            key: "initImg",
            value: function initImg() {
                var self = this;
                var $imgElement = self.options.imgElement;
                if ($imgElement && 'string' === typeof $imgElement) {
                    $imgElement = self.$item.querySelector($imgElement)
                }
                if (!($imgElement instanceof Element)) {
                    if (self.options.imgSrc) {
                        $imgElement = new Image();
                        $imgElement.src = self.options.imgSrc
                    } else {
                        $imgElement = null
                    }
                }
                if ($imgElement) {
                    if (self.options.keepImg) {
                        self.image.$item = $imgElement.cloneNode(!0)
                    } else {
                        self.image.$item = $imgElement;
                        self.image.$itemParent = $imgElement.parentNode
                    }
                    self.image.useImgTag = !0
                }
                if (self.image.$item) {
                    return !0
                }
                if (null === self.image.src) {
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    self.image.bgImage = self.css(self.$item, 'background-image')
                }
                return !(!self.image.bgImage || 'none' === self.image.bgImage)
            }
        }, {
            key: "canInitParallax",
            value: function canInitParallax() {
                return supportTransform && !this.options.disableParallax()
            }
        }, {
            key: "init",
            value: function init() {
                var self = this;
                var containerStyles = {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                };
                var imageStyles = {
                    pointerEvents: 'none',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform,opacity'
                };
                if (!self.options.keepImg) {
                    var curStyle = self.$item.getAttribute('style');
                    if (curStyle) {
                        self.$item.setAttribute('data-jarallax-original-styles', curStyle)
                    }
                    if (self.image.useImgTag) {
                        var curImgStyle = self.image.$item.getAttribute('style');
                        if (curImgStyle) {
                            self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle)
                        }
                    }
                }
                if ('static' === self.css(self.$item, 'position')) {
                    self.css(self.$item, {
                        position: 'relative'
                    })
                }
                if ('auto' === self.css(self.$item, 'z-index')) {
                    self.css(self.$item, {
                        zIndex: 0
                    })
                }
                self.image.$container = document.createElement('div');
                self.css(self.image.$container, containerStyles);
                self.css(self.image.$container, {
                    'z-index': self.options.zIndex
                });
                if (isIE) {
                    self.css(self.image.$container, {
                        opacity: 0.9999
                    })
                }
                self.image.$container.setAttribute('id', "jarallax-container-".concat(self.instanceID));
                self.$item.appendChild(self.image.$container);
                if (self.image.useImgTag) {
                    imageStyles = self.extend({
                        'object-fit': self.options.imgSize,
                        'object-position': self.options.imgPosition,
                        'font-family': "object-fit: ".concat(self.options.imgSize, "; object-position: ").concat(self.options.imgPosition, ";"),
                        'max-width': 'none'
                    }, containerStyles, imageStyles)
                } else {
                    self.image.$item = document.createElement('div');
                    if (self.image.src) {
                        imageStyles = self.extend({
                            'background-position': self.options.imgPosition,
                            'background-size': self.options.imgSize,
                            'background-repeat': self.options.imgRepeat,
                            'background-image': self.image.bgImage || "url(\"".concat(self.image.src, "\")")
                        }, containerStyles, imageStyles)
                    }
                }
                if ('opacity' === self.options.type || 'scale' === self.options.type || 'scale-opacity' === self.options.type || 1 === self.options.speed) {
                    self.image.position = 'absolute'
                }
                if ('fixed' === self.image.position) {
                    var $parents = getParents(self.$item).filter(function(el) {
                        var styles = global__WEBPACK_IMPORTED_MODULE_1__.window.getComputedStyle(el);
                        var parentTransform = styles['-webkit-transform'] || styles['-moz-transform'] || styles.transform;
                        var overflowRegex = /(auto|scroll)/;
                        return parentTransform && 'none' !== parentTransform || overflowRegex.test(styles.overflow + styles['overflow-y'] + styles['overflow-x'])
                    });
                    self.image.position = $parents.length ? 'absolute' : 'fixed'
                }
                imageStyles.position = self.image.position;
                self.css(self.image.$item, imageStyles);
                self.image.$container.appendChild(self.image.$item);
                self.onResize();
                self.onScroll(!0);
                if (self.options.onInit) {
                    self.options.onInit.call(self)
                }
                if ('none' !== self.css(self.$item, 'background-image')) {
                    self.css(self.$item, {
                        'background-image': 'none'
                    })
                }
                self.addToParallaxList()
            }
        }, {
            key: "addToParallaxList",
            value: function addToParallaxList() {
                jarallaxList.push({
                    instance: this
                });
                if (1 === jarallaxList.length) {
                    global__WEBPACK_IMPORTED_MODULE_1__.window.requestAnimationFrame(updateParallax)
                }
            }
        }, {
            key: "removeFromParallaxList",
            value: function removeFromParallaxList() {
                var self = this;
                jarallaxList.forEach(function(data, key) {
                    if (data.instance.instanceID === self.instanceID) {
                        jarallaxList.splice(key, 1)
                    }
                })
            }
        }, {
            key: "destroy",
            value: function destroy() {
                var self = this;
                self.removeFromParallaxList();
                var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                self.$item.removeAttribute('data-jarallax-original-styles');
                if (!originalStylesTag) {
                    self.$item.removeAttribute('style')
                } else {
                    self.$item.setAttribute('style', originalStylesTag)
                }
                if (self.image.useImgTag) {
                    var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
                    self.image.$item.removeAttribute('data-jarallax-original-styles');
                    if (!originalStylesImgTag) {
                        self.image.$item.removeAttribute('style')
                    } else {
                        self.image.$item.setAttribute('style', originalStylesTag)
                    }
                    if (self.image.$itemParent) {
                        self.image.$itemParent.appendChild(self.image.$item)
                    }
                }
                if (self.$clipStyles) {
                    self.$clipStyles.parentNode.removeChild(self.$clipStyles)
                }
                if (self.image.$container) {
                    self.image.$container.parentNode.removeChild(self.image.$container)
                }
                if (self.options.onDestroy) {
                    self.options.onDestroy.call(self)
                }
                delete self.$item.jarallax
            }
        }, {
            key: "clipContainer",
            value: function clipContainer() {
                if ('fixed' !== this.image.position) {
                    return
                }
                var self = this;
                var rect = self.image.$container.getBoundingClientRect();
                var width = rect.width,
                    height = rect.height;
                if (!self.$clipStyles) {
                    self.$clipStyles = document.createElement('style');
                    self.$clipStyles.setAttribute('type', 'text/css');
                    self.$clipStyles.setAttribute('id', "jarallax-clip-".concat(self.instanceID));
                    var head = document.head || document.getElementsByTagName('head')[0];
                    head.appendChild(self.$clipStyles)
                }
                var styles = "#jarallax-container-".concat(self.instanceID, " {\n            clip: rect(0 ").concat(width, "px ").concat(height, "px 0);\n            clip: rect(0, ").concat(width, "px, ").concat(height, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }");
                if (self.$clipStyles.styleSheet) {
                    self.$clipStyles.styleSheet.cssText = styles
                } else {
                    self.$clipStyles.innerHTML = styles
                }
            }
        }, {
            key: "coverImage",
            value: function coverImage() {
                var self = this;
                var rect = self.image.$container.getBoundingClientRect();
                var contH = rect.height;
                var speed = self.options.speed;
                var isScroll = 'scroll' === self.options.type || 'scroll-opacity' === self.options.type;
                var scrollDist = 0;
                var resultH = contH;
                var resultMT = 0;
                if (isScroll) {
                    if (0 > speed) {
                        scrollDist = speed * Math.max(contH, wndH);
                        if (wndH < contH) {
                            scrollDist -= speed * (contH - wndH)
                        }
                    } else {
                        scrollDist = speed * (contH + wndH)
                    }
                    if (1 < speed) {
                        resultH = Math.abs(scrollDist - wndH)
                    } else if (0 > speed) {
                        resultH = scrollDist / speed + Math.abs(scrollDist)
                    } else {
                        resultH += (wndH - contH) * (1 - speed)
                    }
                    scrollDist /= 2
                }
                self.parallaxScrollDistance = scrollDist;
                if (isScroll) {
                    resultMT = (wndH - resultH) / 2
                } else {
                    resultMT = (contH - resultH) / 2
                }
                self.css(self.image.$item, {
                    height: "".concat(resultH, "px"),
                    marginTop: "".concat(resultMT, "px"),
                    left: 'fixed' === self.image.position ? "".concat(rect.left, "px") : '0',
                    width: "".concat(rect.width, "px")
                });
                if (self.options.onCoverImage) {
                    self.options.onCoverImage.call(self)
                }
                return {
                    image: {
                        height: resultH,
                        marginTop: resultMT
                    },
                    container: rect
                }
            }
        }, {
            key: "isVisible",
            value: function isVisible() {
                return this.isElementInViewport || !1
            }
        }, {
            key: "onScroll",
            value: function onScroll(force) {
                var self = this;
                var rect = self.$item.getBoundingClientRect();
                var contT = rect.top;
                var contH = rect.height;
                var styles = {};
                var viewportRect = rect;
                if (self.options.elementInViewport) {
                    viewportRect = self.options.elementInViewport.getBoundingClientRect()
                }
                self.isElementInViewport = 0 <= viewportRect.bottom && 0 <= viewportRect.right && viewportRect.top <= wndH && viewportRect.left <= global__WEBPACK_IMPORTED_MODULE_1__.window.innerWidth;
                if (force ? !1 : !self.isElementInViewport) {
                    return
                }
                var beforeTop = Math.max(0, contT);
                var beforeTopEnd = Math.max(0, contH + contT);
                var afterTop = Math.max(0, -contT);
                var beforeBottom = Math.max(0, contT + contH - wndH);
                var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
                var afterBottom = Math.max(0, -contT + wndH - contH);
                var fromViewportCenter = 1 - 2 * ((wndH - contT) / (wndH + contH));
                var visiblePercent = 1;
                if (contH < wndH) {
                    visiblePercent = 1 - (afterTop || beforeBottom) / contH
                } else if (beforeTopEnd <= wndH) {
                    visiblePercent = beforeTopEnd / wndH
                } else if (beforeBottomEnd <= wndH) {
                    visiblePercent = beforeBottomEnd / wndH
                }
                if ('opacity' === self.options.type || 'scale-opacity' === self.options.type || 'scroll-opacity' === self.options.type) {
                    styles.transform = 'translate3d(0,0,0)';
                    styles.opacity = visiblePercent
                }
                if ('scale' === self.options.type || 'scale-opacity' === self.options.type) {
                    var scale = 1;
                    if (0 > self.options.speed) {
                        scale -= self.options.speed * visiblePercent
                    } else {
                        scale += self.options.speed * (1 - visiblePercent)
                    }
                    styles.transform = "scale(".concat(scale, ") translate3d(0,0,0)")
                }
                if ('scroll' === self.options.type || 'scroll-opacity' === self.options.type) {
                    var positionY = self.parallaxScrollDistance * fromViewportCenter;
                    if ('absolute' === self.image.position) {
                        positionY -= contT
                    }
                    styles.transform = "translate3d(0,".concat(positionY, "px,0)")
                }
                self.css(self.image.$item, styles);
                if (self.options.onScroll) {
                    self.options.onScroll.call(self, {
                        section: rect,
                        beforeTop: beforeTop,
                        beforeTopEnd: beforeTopEnd,
                        afterTop: afterTop,
                        beforeBottom: beforeBottom,
                        beforeBottomEnd: beforeBottomEnd,
                        afterBottom: afterBottom,
                        visiblePercent: visiblePercent,
                        fromViewportCenter: fromViewportCenter
                    })
                }
            }
        }, {
            key: "onResize",
            value: function onResize() {
                this.coverImage();
                this.clipContainer()
            }
        }]);
        return Jarallax
    }();
    var plugin = function plugin(items, options) {
        if ('object' === (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? items instanceof HTMLElement : items && 'object' === _typeof(items) && null !== items && 1 === items.nodeType && 'string' === typeof items.nodeName) {
            items = [items]
        }
        var len = items.length;
        var k = 0;
        var ret;
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2]
        }
        for (k; k < len; k += 1) {
            if ('object' === _typeof(options) || 'undefined' === typeof options) {
                if (!items[k].jarallax) {
                    items[k].jarallax = new Jarallax(items[k], options)
                }
            } else if (items[k].jarallax) {
                ret = items[k].jarallax[options].apply(items[k].jarallax, args)
            }
            if ('undefined' !== typeof ret) {
                return ret
            }
        }
        return items
    };
    plugin.constructor = Jarallax;
    __webpack_exports__["default"] = (plugin)
})])