/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: Component, ToyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToyReact\", function() { return ToyReact; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 元素\nvar ElementWrapper = /*#__PURE__*/function () {\n  function ElementWrapper(type) {\n    _classCallCheck(this, ElementWrapper);\n\n    this.type = type;\n    this.props = Object.create(null);\n    this.children = [];\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      /*let reg = /^on([\\s\\S]+)$/\r\n      if (name.match(reg)) {\r\n          let eventName = RegExp.$1.replace(/^[\\s\\S]/, s => s.toLowerCase())\r\n          this.root.addEventListener(eventName, value)\r\n      }\r\n      if (name === 'className') {\r\n          name = 'class'\r\n      }*/\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      this.children.push(vchild); // let range = document.createRange()\n      // if (this.root.children.length) {\n      //     range.setStartAfter(this.root.lastChild)\n      //     range.setEndAfter(this.root.lastChild)\n      // } else {\n      //     range.setStart(this.root, 0)\n      //     range.setEnd(this.root, 0)\n      // }\n      // vchild.mountTo(range)\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      // 将创建的元素加到置顶元素中\n      range.deleteContents();\n      var reg = /^on([\\s\\S]+)$/;\n      var element = document.createElement(this.type);\n\n      for (var name in this.props) {\n        var value = this.props[name];\n\n        if (name.match(reg)) {\n          var eventName = RegExp.$1.replace(/^[\\s\\S]/, function (s) {\n            return s.toLowerCase();\n          });\n          element.addEventListener(eventName, value);\n        }\n\n        if (name === 'className') {\n          name = 'class';\n        }\n\n        element.setAttribute(name, value);\n      }\n\n      var _iterator = _createForOfIteratorHelper(this.children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n\n          var _range = document.createRange();\n\n          if (element.children.length) {\n            _range.setStartAfter(element.lastChild);\n\n            _range.setEndAfter(element.lastChild);\n          } else {\n            _range.setStart(element, 0);\n\n            _range.setEnd(element, 0);\n          }\n\n          child.mountTo(_range);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      range.insertNode(element);\n    }\n  }]);\n\n  return ElementWrapper;\n}();\n\nvar TextWrapper = /*#__PURE__*/function () {\n  function TextWrapper(content) {\n    _classCallCheck(this, TextWrapper);\n\n    this.root = document.createTextNode(content); // 创建文本节点\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}(); // 抽离组件公共方法\n\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.children = [];\n    this.props = Object.create(null);\n    this.range;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n      this[name] = value;\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(range) {\n      this.range = range;\n      this.update(); // 更新vdom\n      // let range = document.createRange();\n      // range.setStartAfter(parent.lastChild)\n      // range.setEndAfter(parent.lastChild)\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var placeholder = document.createComment('placeholder');\n      var range = document.createRange();\n      range.setStart(this.range.endContainer, this.range.endOffset);\n      range.setEnd(this.range.endContainer, this.range.endOffset);\n      range.insertNode(placeholder); // range存储的是真实的dom，然后需要进行vdom和dom进行对比就依赖range\n\n      this.range.deleteContents(); // 先将render清空\n\n      var vdom = this.render();\n      vdom.mountTo(this.range);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      console.log('Component', vchild);\n      this.children.push(vchild);\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(state) {\n      var merge = function merge(oldState, newState) {\n        for (var p in newState) {\n          if (_typeof(newState[p]) === 'object' && newState[p] !== null) {\n            if (_typeof(oldState[p]) !== 'object') {\n              oldState[p] = {};\n            }\n\n            merge(oldState[p], newState[p]);\n          } else {\n            oldState[p] = newState[p];\n          }\n        }\n      };\n\n      if (!this.state && state) {\n        this.state = {};\n      }\n\n      merge(this.state, state);\n      console.log(this.state);\n      this.update();\n    }\n  }]);\n\n  return Component;\n}();\n/** \r\n * @param {type} 元素节点 String | Object\r\n * @param {attributes} 属性 Object\r\n * @param {children} 包含的子节点 Object | Array\r\n*/\n\nvar ToyReact = {\n  createElement: function createElement(type, attributes) {\n    var element;\n\n    if (typeof type === 'string') {\n      element = new ElementWrapper(type);\n    } else {\n      element = new type(); // new Mycomponent\n    }\n\n    for (var name in attributes) {\n      element.setAttribute(name, attributes[name]); // 这里不能用property 是本身自带的属性，不能改变的，attribute是赋予属性，不能这么用element[name] = attributes[name] \n    }\n\n    var insertChildren = function insertChildren(children) {\n      var _iterator2 = _createForOfIteratorHelper(children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n\n          if (Array.isArray(child)) {\n            // 数组就递归调用\n            insertChildren(child);\n          } else {\n            if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) {\n              child = String(child);\n            }\n\n            if (typeof child === 'string') {\n              child = new TextWrapper(child);\n            }\n\n            element.appendChild(child);\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    };\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    insertChildren(children);\n    return element;\n  },\n  render: function render(vdom, element) {\n    var range = document.createRange(); // 将元素渲染到页面上\n\n    if (element.children.length) {\n      // 如果该元素有真实子元素\n      range.setStartAfter(element.lastChild);\n      range.setEndAfter(element.lastChild);\n    } else {\n      range.setStart(element, 0); //  setStart设置起点位置\n\n      range.setEnd(element, 0);\n    }\n\n    vdom.mountTo(range);\n  }\n};\n/** \r\n * Arguments: \r\n * 0: 'div\r\n * 1: {name: 'a', id: 'ida'}\r\n * 2: span\r\n * 3: span\r\n * 4: span\r\n * length: 5\r\n*/\n\n//# sourceURL=webpack:///./ToyReact.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact.js */ \"./ToyReact.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      value: null\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          return _this2.setState({\n            value: 'X'\n          });\n        }\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Square, {\n        value: i\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var status = 'Next player: X';\n      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"status\"\n      }, status), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar a = _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Board, null);\n_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].render(a, document.body);\n/** \r\n * let a = <div name=\"a\" id=\"ida\">\r\n    <span>hello</span>\r\n    <span>world</span>\r\n    <span>!</span>\r\n</div>\r\ndocument.body.appendChild(a)\r\n 会被翻译成下面这种\r\n var a = ToyReact.createElement('div', {\r\n    name: 'a',\r\n    id: 'ida'\r\n },\r\n ToyReact.createElement('span', null, 'hello')\r\n ToyReact.createElement('span', null, 'world')\r\n ToyReact.createElement('span', null, '!')\r\n )\r\n*/\n\nconsole.log(a);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });