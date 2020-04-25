webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Overlay.jsx":
/*!********************************!*\
  !*** ./components/Overlay.jsx ***!
  \********************************/
/*! exports provided: Overlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/Overlay.module.css */ "./css/Overlay.module.css");
/* harmony import */ var _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_apiRequester__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apiRequester */ "./lib/apiRequester.js");







var _jsxFileName = "C:\\Users\\Minec\\OneDrive\\Documents\\School\\Semester2\\CP476\\CP476-Final-Project\\components\\Overlay.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Overlay = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Overlay, _React$Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Overlay);

    _this = _super.call(this, props);
    _this.mounted = false;
    _this.state = {
      arivals: [{
        name: "View All",
        link: "/categories",
        filter: "new"
      }],
      category: [{
        name: "View All",
        link: "/categories",
        filter: ""
      }, {
        name: "Shirts",
        link: "/categories",
        filter: "shirts"
      }, {
        name: "T-shirts",
        link: "/categories",
        filter: "t-shirts"
      }, {
        name: "Sweaters & Cardigans",
        link: "/categories",
        filter: "sweaters"
      }, {
        name: "Pants",
        link: "/categories",
        filter: "pants"
      }, {
        name: "Jeans",
        link: "/categories",
        filter: "jeans"
      }, {
        name: "Joggers",
        link: "/categories",
        filter: "joggers"
      }]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Overlay, [{
    key: "getLink",
    value: function getLink(item) {
      var link = item.link;
      console.log(link);

      if (item.filter !== "") {
        // return {pathname: link, query: {mainCategory: this.props.category, subCategory: item.filter}};
        return "".concat(link, "?mainCategory=").concat(this.props.category, "&subCategory=").concat(item.filter);
      }

      return "".concat(link, "?mainCategory=").concat(this.props.category); // return {pathname: link, query: {mainCategory: this.props.category}};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.mounted = true;

              if (!(sessionStorage !== undefined)) {
                _context.next = 12;
                break;
              }

              data = sessionStorage.getItem("overlay");

              if (data) {
                _context.next = 10;
                break;
              }

              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_apiRequester__WEBPACK_IMPORTED_MODULE_10__["getOverlay"])());

            case 6:
              data = _context.sent;
              sessionStorage.setItem("overlay", JSON.stringify(data));
              _context.next = 11;
              break;

            case 10:
              data = JSON.parse(data);

            case 11:
              if (this.mounted) {
                this.setState(_objectSpread({}, this.state, {
                  category: data
                }));
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // document.documentElement.style.setProperty("--overlayOffset", (112 + this.props.offset) + "px");
      return __jsx("div", {
        className: _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.overlay,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 16
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx("h4", {
        className: _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, "New Arrivals"), __jsx("ul", {
        className: _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, this.state.arivals.map(function (item, i) {
        return __jsx("li", {
          key: i,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 32
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          as: "".concat("").concat(_this2.getLink(item)),
          href: _this2.getLink(item),
          passHref: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 44
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 141
          }
        }, item.name)));
      }))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, __jsx("h4", {
        className: _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }
      }, "Shop by Category"), __jsx("ul", {
        className: _css_Overlay_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, this.state.category.map(function (item, i) {
        return __jsx("li", {
          key: i,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 32
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          as: "".concat("").concat(_this2.getLink(item)),
          href: _this2.getLink(item),
          passHref: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 44
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 141
          }
        }, item.name)));
      }))));
    }
  }]);

  return Overlay;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.d76497fc521db12b855b.hot-update.js.map