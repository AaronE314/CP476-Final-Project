webpackHotUpdate("static\\development\\pages\\categories.js",{

/***/ "./pages/categories.js":
/*!*****************************!*\
  !*** ./pages/categories.js ***!
  \*****************************/
/*! exports provided: Categories, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_ItemDisplayBox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ItemDisplayBox */ "./components/ItemDisplayBox.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _lib_apiRequester__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/apiRequester */ "./lib/apiRequester.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/validators */ "./lib/validators.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");










var _jsxFileName = "C:\\Users\\Minec\\OneDrive\\Documents\\School\\Semester2\\CP476\\CP476-Final-Project\\pages\\categories.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Categories = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Categories, _React$Component);

  var _super = _createSuper(Categories);

  function Categories(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Categories);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "applyFilters", function (products) {
      return products.filter(function (item) {
        var matchesPrice = false;
        var matchesSize = false;

        if (_this.state.activeFilters.size === 0) {
          return true;
        }

        _this.state.activeFilters.forEach(function (filter) {
          if (filter.low !== undefined) {
            matchesPrice = matchesPrice || item.price > filter.low && item.price < filter.high;
          } else {
            matchesSize = matchesSize || item.sizes && item.sizes.includes(filter.text);
          }
        });

        return matchesPrice || matchesSize;
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "maxShown", function (width, height, showMore) {
      console.log(width, height);
      return width > 815 ? 2 * showMore * Math.floor((height - 80 - 32 * 3) / 533) * Math.floor((width - 244) / 343) : 8;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleResize", function () {
      _this.setState({
        width: window.innerWidth,
        numberShown: _this.maxShown(window.innerWidth, window.innerHeight, _this.state.showMore)
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (e) {
      var _e$target$value$split = e.target.value.split(" "),
          _e$target$value$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_e$target$value$split, 2),
          name = _e$target$value$split2[0],
          asending = _e$target$value$split2[1];

      var newArray = _this.state.products.sort(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_18__["getCompare"])(name, asending === 'true'));

      _this.setState(_objectSpread({}, _this.state, {
        sortBy: e.target.value,
        products: newArray
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleFilterChange", function (filter, value) {
      var val = filter === "price" ? _this.state.priceFilers[value] : _this.state.sizeFilters[value];

      _this.state.activeFilters.add(val);

      _this.setState(_objectSpread({}, _this.state));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeFilter", function (filter) {
      _this.state.activeFilters["delete"](filter);

      _this.setState(_objectSpread({}, _this.state));
    });

    var router = _this.props.router;
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
      }],
      showMore: 1,
      query: router.query,
      products: [],
      loading: true,
      sortBy: "rec",
      activeFilters: new Set(),
      priceFilers: [{
        low: 0,
        high: 10,
        text: "$0 - $10"
      }, {
        low: 11,
        high: 20,
        text: "$11 - $20"
      }, {
        low: 21,
        high: 30,
        text: "$21 - $30"
      }, {
        low: 31,
        high: 40,
        text: "$31 - $40"
      }, {
        low: 41,
        high: 50,
        text: "$41 - $50"
      }, {
        low: 51,
        high: 10000000,
        text: "$51+"
      }],
      sizeFilters: [{
        text: 'S'
      }, {
        text: 'M'
      }, {
        text: 'L'
      }, {
        text: 'XL'
      }, {
        text: 'XXL'
      }]
    };
    _this.showMore = _this.showMore.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Categories, [{
    key: "getTitle",
    value: function getTitle() {
      var router = this.props.router;
      var title = router.query.mainCategory;

      if (router.query.subCategory) {
        title += " " + router.query.subCategory;
      }

      return title;
      1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var router, gender, subCategory, search, productArray, _productArray;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.handleResize();
              window.addEventListener('resize', this.handleResize);
              router = this.props.router;
              gender = router.query.mainCategory;

              if (router.query.subCategory) {
                subCategory = router.query.subCategory;
              }

              search = router.query.search ? unescape(router.query.search) : undefined;

              if (!((gender !== undefined || subCategory !== undefined) && Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(gender) && Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(subCategory))) {
                _context.next = 14;
                break;
              }

              console.log("query by category");
              _context.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_lib_apiRequester__WEBPACK_IMPORTED_MODULE_16__["getProducts"])(gender, subCategory));

            case 10:
              productArray = _context.sent;
              this.setState(_objectSpread({}, this.state, {
                products: productArray,
                loading: false
              }));
              _context.next = 22;
              break;

            case 14:
              if (!Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(search)) {
                _context.next = 21;
                break;
              }

              _context.next = 17;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_lib_apiRequester__WEBPACK_IMPORTED_MODULE_16__["getProductsSearch"])(search));

            case 17:
              _productArray = _context.sent;
              this.setState(_objectSpread({}, this.state, {
                products: _productArray,
                loading: false
              }));
              _context.next = 22;
              break;

            case 21:
              this.setState(_objectSpread({}, this.state, {
                products: [],
                loading: false
              }));

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var router, gender, subCategory, search, productArray, _productArray2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidUpdate$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              router = this.props.router;
              gender = router.query.mainCategory;

              if (router.query.subCategory) {
                subCategory = router.query.subCategory;
              }

              if (!(gender !== prevProps.router.query.mainCategory || subCategory !== prevProps.router.query.subCategory || router.query.search !== prevProps.router.query.search)) {
                _context2.next = 22;
                break;
              }

              console.log("gender = " + Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(gender));
              console.log("subCategory = " + Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(subCategory));
              search = router.query.search ? unescape(router.query.search) : undefined;

              if (!((gender !== undefined || subCategory !== undefined) && Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(gender) && Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(subCategory))) {
                _context2.next = 16;
                break;
              }

              console.log("a");
              _context2.next = 11;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_lib_apiRequester__WEBPACK_IMPORTED_MODULE_16__["getProducts"])(gender, subCategory));

            case 11:
              productArray = _context2.sent;
              this.state.products.length = 0;
              this.setState(_objectSpread({}, this.state, {
                products: productArray,
                loading: false
              }));
              _context2.next = 22;
              break;

            case 16:
              if (!Object(_lib_validators__WEBPACK_IMPORTED_MODULE_17__["isLetter"])(search)) {
                _context2.next = 22;
                break;
              }

              console.log("b");
              _context2.next = 20;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_lib_apiRequester__WEBPACK_IMPORTED_MODULE_16__["getProductsSearch"])(search));

            case 20:
              _productArray2 = _context2.sent;
              this.setState(_objectSpread({}, this.state, {
                products: _productArray2,
                loading: false
              }));

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    } // getLink(item) {
    //     const { router } = this.props;
    //     let link = item.link;
    //     if (item.filter !== "") {
    //         return {pathname: link, query: {mainCategory: router.query.mainCategory, subCategory: item.filter}};
    //     }
    //     return {pathname: link, query: {mainCategory: router.query.mainCategory}};
    // }

  }, {
    key: "getLink",
    value: function getLink(item) {
      var router = this.props.router;
      var link = item.link;

      if (item.filter !== "") {
        // return {pathname: link, query: {mainCategory: router.query.mainCategory, subCategory: item.filter}};
        return "".concat(link, "?mainCategory=").concat(router.query.mainCategory, "&subCategory=").concat(item.filter);
      }

      return "".concat(link, "?mainCategory=").concat(router.query.mainCategory); // return {pathname: link, query: {mainCategory: this.props.categoryrouter.query.mainCategory}};
    }
  }, {
    key: "showMore",
    value: function showMore() {
      this.setState(_objectSpread({}, this.state, {
        showMore: this.state.showMore + 1,
        numberShown: this.maxShown(window.innerWidth, window.innerHeight, this.state.showMore + 1)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var products = this.applyFilters(this.state.products);
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "jsx-2646735618" + " " + "sidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 21
        }
      }, "New Arrivals"), __jsx("ul", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 21
        }
      }, this.state.arivals.map(function (item, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 36
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          as: "".concat("").concat(_this2.getLink(item)),
          href: _this2.getLink(item),
          passHref: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 48
          }
        }, __jsx("a", {
          className: "jsx-2646735618" + " " + "hoverColor",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 145
          }
        }, item.name)));
      }))), __jsx("div", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 21
        }
      }, "Shop by Category"), __jsx("ul", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }
      }, this.state.category.map(function (item, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 36
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          as: "".concat("").concat(_this2.getLink(item)),
          href: _this2.getLink(item),
          passHref: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 48
          }
        }, __jsx("a", {
          className: "jsx-2646735618" + " " + "hoverColor",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 145
          }
        }, item.name)));
      })))), __jsx("div", {
        className: "jsx-2646735618" + " " + "mainContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 21
        }
      }, this.getTitle()), __jsx("div", {
        className: "jsx-2646735618" + " " + "filterby",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }
      }, __jsx("label", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 25
        }
      }, "Filter By"), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.handleFilterChange("price", e.target.value);
        },
        value: "default",
        className: "jsx-2646735618" + " " + "price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 25
        }
      }, __jsx("option", {
        defaultValue: true,
        value: "default",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 29
        }
      }, "Price"), this.state.priceFilers.map(function (item, i) {
        return __jsx("option", {
          key: i,
          value: i,
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 40
          }
        }, item.text);
      }), ";"), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.handleFilterChange("title", e.target.value);
        },
        value: "default",
        className: "jsx-2646735618" + " " + "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 25
        }
      }, __jsx("option", {
        defaultValue: true,
        value: "default",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 29
        }
      }, "Size"), this.state.sizeFilters.map(function (item, i) {
        return __jsx("option", {
          key: i,
          value: i,
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 40
          }
        }, item.text);
      }), ";"), __jsx("div", {
        className: "jsx-2646735618" + " " + "filterPannels",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 25
        }
      }, __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_19__["default"], {
        typeName: null,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 25
        }
      }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.activeFilters).map(function (item, i) {
        return __jsx("div", {
          key: item.text,
          className: "jsx-2646735618" + " " + "filterPannel",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 40
          }
        }, __jsx("span", {
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 37
          }
        }, "".concat(item.text)), __jsx("img", {
          onClick: function onClick(e) {
            return _this2.removeFilter(item);
          },
          src: "/images/close.svg",
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 37
          }
        }));
      })))), __jsx("div", {
        className: "jsx-2646735618" + " " + "sortBy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 21
        }
      }, __jsx("label", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 25
        }
      }, "Sort By"), __jsx("input", {
        defaultChecked: true,
        id: "recommended",
        value: "rec true",
        type: "radio",
        name: "sortBy",
        onChange: this.handleChange,
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "recommended",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }
      }, "Recommended"), __jsx("input", {
        id: "newest",
        type: "radio",
        value: "new true",
        name: "sortBy",
        onChange: this.handleChange,
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "newest",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, "Newest"), __jsx("input", {
        id: "lowest",
        type: "radio",
        value: "price true",
        name: "sortBy",
        onChange: this.handleChange,
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "lowest",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 25
        }
      }, "Lowest Price"), __jsx("input", {
        id: "highest",
        type: "radio",
        value: "price false",
        name: "sortBy",
        onChange: this.handleChange,
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "highest",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 25
        }
      }, "Highest Price")), products.length > 0 ? __jsx("div", {
        className: "jsx-2646735618" + " " + "products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 46
        }
      }, products.slice(0, this.state.numberShown).map(function (item, i) {
        return __jsx(_components_ItemDisplayBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: i,
          value: item,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 36
          }
        });
      })) : __jsx("p", {
        className: "jsx-2646735618" + " " + "message",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 30
        }
      }, this.state.loading ? "Loading..." : "No products match the query"), products.length > this.state.numberShown ? __jsx("button", {
        onClick: this.showMore,
        className: "jsx-2646735618" + " " + "loadMore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 67
        }
      }, "LOAD MORE") : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2646735618",
        __self: this
      }, ".sidenav.jsx-2646735618{height:calc(100% - 80px - 16px + var(--footerHeight));top:80px;width:180px;position:absolute;z-index:1;left:0px;background:var(--backgroundColor);overflow-x:hidden;padding-left:32px;padding-top:16px;}.mainContent.jsx-2646735618{position:relative;min-height:100%;padding-top:16px;width:calc(100% - 244px);margin-left:244px;}.products.jsx-2646735618{display:grid;grid-row-gap:8px;grid-column-gap:32px;grid-template-columns:repeat(auto-fill,minmax(343px,1fr));overflow:hidden;}.message.jsx-2646735618{text-align:center;width:100%;}.filterby.jsx-2646735618 label.jsx-2646735618{margin-right:24px;}.filterby.jsx-2646735618 select.jsx-2646735618,.filterby.jsx-2646735618 option.jsx-2646735618{font-family:'Open Sans';font-weight:normal;font-size:14px;min-width:50px;}.filterby.jsx-2646735618 select.jsx-2646735618{border:0px;outline:0px;}.filterby.jsx-2646735618 option.jsx-2646735618{border:1px solid black;outline:none;}.hoverColor.jsx-2646735618:hover{background-color:var(--highlightColor);}.filterPannels.jsx-2646735618{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:57px;}.filterPannel.jsx-2646735618{position:relative;width:110px;height:32px;border:0.5px solid black;margin:12px 8px 12px 0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.filterPannel.jsx-2646735618 span.jsx-2646735618{position:absolute;left:12px;font-family:'Open Sans';font-style:normal;font-weight:normal;font-size:14px;line-height:19px;top:6px;}.filterPannel.jsx-2646735618 img.jsx-2646735618{position:absolute;right:12px;top:8px;cursor:pointer;}.sortBy.jsx-2646735618{position:relative;margin:24px 0;}.sortBy.jsx-2646735618 label.jsx-2646735618{margin-right:24px;}.sortBy.jsx-2646735618 label.jsx-2646735618:not(:first-child){font-family:'Open Sans';font-weight:normal;font-size:14px;}.loadMore.jsx-2646735618{border:none;width:294px;height:32px;margin:32px 0;padding:0;left:calc(50% - 294px/2);background:var(--highlightColor);position:relative;}.loadMore.jsx-2646735618:hover{-webkit-filter:brightness(95%);filter:brightness(95%);cursor:pointer;}[type=\"radio\"]:checked.jsx-2646735618,[type=\"radio\"]:not(:checked).jsx-2646735618{position:absolute;left:-9999px;}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618,[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:var(--foregroundColor);}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618:before,[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618:before{content:'';position:absolute;left:0;top:0;width:18px;height:18px;border:1px solid var(--foregroundColor);border-radius:100%;background:var(--backgroundColor);}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618:after,[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618:after{content:'';width:18px;height:18px;background:var(--highlightColor);position:absolute;top:1px;left:1px;border-radius:100%;-webkit-transition:all 0.2s ease;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618:after{opacity:0;-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618:after{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}h1.jsx-2646735618{font-size:32px;line-height:37px;font-weight:bold;text-transform:uppercase;margin:0;margin-bottom:32px;}h4.jsx-2646735618{font-family:\"Open Sans\";margin-top:0;font-weight:bold;}ul.jsx-2646735618{list-style:none;padding:0;}ul.jsx-2646735618 li.jsx-2646735618{margin-top:12px;}ul.jsx-2646735618 li.jsx-2646735618 a.jsx-2646735618{font-family:\"Open Sans\";font-weight:normal;font-size:14px;}@media only screen and (max-width:1000px){.sidenav.jsx-2646735618{left:-230px;}.mainContent.jsx-2646735618{margin-left:32px;width:calc(100% - (2 * 32px));}}@media only screen and (max-width:815px){.products.jsx-2646735618{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}@media only screen and (max-width:610px){.mainContent.jsx-2646735618{margin-top:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWluZWNcXE9uZURyaXZlXFxEb2N1bWVudHNcXFNjaG9vbFxcU2VtZXN0ZXIyXFxDUDQ3NlxcQ1A0NzYtRmluYWwtUHJvamVjdFxccGFnZXNcXGNhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbVR3QixBQUkyRSxBQWFwQyxBQVlMLEFBU0ssQUFLQSxBQUlNLEFBT2QsQUFLYSxBQUtnQixBQUlyQixBQU1BLEFBZUEsQUFXQSxBQU9BLEFBS0EsQUFJTSxBQU9aLEFBaUJXLEFBTUwsQUFNQSxBQVNQLEFBWUEsQUFZRCxBQUtBLEFBTUssQUFTUyxBQU9SLEFBS0EsQUFJUSxBQU9SLEFBSUssQUFTTSxBQVFQLFVBL0RPLEFBS0EsQ0F4SWhCLEFBMkdPLEFBWVAsQ0FqREMsQUF3R1osQ0F2TWlCLEVBdUtBLENBZ0JQLEFBS2QsQUFnQ0ksQ0FqQmtDLENBdE5sQixBQW9CTCxBQUtmLEFBeUJpQixBQU1ELEFBZUYsQUFXQyxBQU9HLEFBS2xCLEFBa0NpQixBQU1LLElBc0JOLENBdkhoQixBQUlpQixDQVpNLEFBcUVBLEFBU1AsQUFnRkEsQUFnQk8sRUFSdkIsRUEzSDRCLENBbkQ1QixBQThEWSxBQTZERCxDQXBJYyxBQTZDVCxDQXdFaEIsQ0F2Q0EsQUF5RnFCLEVBakxBLEFBMkpnQixFQW5IckMsQUFtRWtCLEFBMEJDLEFBVVQsQ0E3RFMsQUFvRkksQUFLQSxBQWdCRixFQS9JckIsR0FZNkIsQUF3RmQsQ0FwSEksQUFxRUEsQUF5R0EsSUFXZixFQW5DeUIsQ0F0RWYsQ0ExR2UsQUFTbUMsQUEySDNDLENBL0RDLEFBWXRCLENBOERnQixDQWpLSixBQXdJTyxBQW9FbkIsSUEvSm1CLEFBcUVuQixBQXlHQSxFQTdGNkIsR0E3SGIsRUFpSzRCLEVBekZqQixBQW1HTCxDQXJCRyxDQWR6QixDQWpEdUIsR0ExQ3ZCLENBcUphLENBak1TLENBaUJBLE9BaUxDLEVBcEVjLEFBNkN6QixJQXBGTyxBQStEYyxDQTdFRixFQVZmLENBOURGLEFBMktELENBekpiLEtBd05JLEdBOURtQixBQXNCdkIsQ0FqTWEsQ0E4RGIsQUF3QnFCLENBeUVFLENBb0J2QixBQUtBLEdBL0pvQixHQXhCa0IsS0F1RVQsQ0FzRFAsQUF1QnRCLEdBOURZLEFBcUZ5QixHQVpDLENBdEl0QyxJQThEQSxPQXdDQSxNQXZENEIsSUF2RU4sUUEyS08sSUFaN0IsTUE5SnNCLEVBdUVJLGdCQXJFM0IsTUFzRTBCLFdBdEV6QixVQXVFcUIsR0FrR3JCLGtGQWpHQSIsImZpbGUiOiJDOlxcVXNlcnNcXE1pbmVjXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxTY2hvb2xcXFNlbWVzdGVyMlxcQ1A0NzZcXENQNDc2LUZpbmFsLVByb2plY3RcXHBhZ2VzXFxjYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEl0ZW1EaXNwbGF5Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvSXRlbURpc3BsYXlCb3gnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0cywgZ2V0UHJvZHVjdHNTZWFyY2ggfSBmcm9tIFwiLi4vbGliL2FwaVJlcXVlc3RlclwiO1xyXG5pbXBvcnQgeyBpc0xldHRlcixpc1ZhbGlkVGl0bGV9IGZyb20gXCIuLi9saWIvdmFsaWRhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZXRDb21wYXJlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJztcclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG5cclxuICAgICAgICAgICAgYXJpdmFsczogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiVmlldyBBbGxcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwibmV3XCJ9XHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeTogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiVmlldyBBbGxcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwiXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiU2hpcnRzXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiwgZmlsdGVyOiBcInNoaXJ0c1wifSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIlQtc2hpcnRzXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiwgZmlsdGVyOiBcInQtc2hpcnRzXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiU3dlYXRlcnMgJiBDYXJkaWdhbnNcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwic3dlYXRlcnNcIn0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJQYW50c1wiLCBsaW5rOiBcIi9jYXRlZ29yaWVzXCIsIGZpbHRlcjogXCJwYW50c1wifSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkplYW5zXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiwgZmlsdGVyOiBcImplYW5zXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiSm9nZ2Vyc1wiLCBsaW5rOiBcIi9jYXRlZ29yaWVzXCIsIGZpbHRlcjogXCJqb2dnZXJzXCJ9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNob3dNb3JlOiAxLFxyXG4gICAgICAgICAgICBxdWVyeTogcm91dGVyLnF1ZXJ5LCBcclxuICAgICAgICAgICAgcHJvZHVjdHMgOiBbXSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgc29ydEJ5OiBcInJlY1wiLFxyXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHByaWNlRmlsZXJzOiBbe2xvdzogMCwgaGlnaDogMTAsIHRleHQ6IFwiJDAgLSAkMTBcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvdzogMTEsIGhpZ2g6IDIwLCB0ZXh0OiBcIiQxMSAtICQyMFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG93OiAyMSwgaGlnaDogMzAsIHRleHQ6IFwiJDIxIC0gJDMwXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsb3c6IDMxLCBoaWdoOiA0MCwgdGV4dDogXCIkMzEgLSAkNDBcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvdzogNDEsIGhpZ2g6IDUwLCB0ZXh0OiBcIiQ0MSAtICQ1MFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG93OiA1MSwgaGlnaDogMTAwMDAwMDAsIHRleHQ6IFwiJDUxK1wifV0sXHJcbiAgICAgICAgICAgIHNpemVGaWx0ZXJzOiBbe3RleHQ6ICdTJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdNJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdMJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdYTCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnWFhMJ31dXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dNb3JlID0gdGhpcy5zaG93TW9yZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSgpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSByb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgKz0gXCIgXCIgKyByb3V0ZXIucXVlcnkuc3ViQ2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgICAgICAgICAxXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXJzID0gKHByb2R1Y3RzKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlc1ByaWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVzU2l6ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlRmlsdGVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlci5sb3cgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzUHJpY2UgPSBtYXRjaGVzUHJpY2UgfHwgaXRlbS5wcmljZSA+IGZpbHRlci5sb3cgJiYgaXRlbS5wcmljZSA8IGZpbHRlci5oaWdoO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNTaXplID0gbWF0Y2hlc1NpemUgfHwgKGl0ZW0uc2l6ZXMgJiYgaXRlbS5zaXplcy5pbmNsdWRlcyhmaWx0ZXIudGV4dCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNQcmljZSB8fCBtYXRjaGVzU2l6ZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2hvd24gPSAod2lkdGgsIGhlaWdodCwgc2hvd01vcmUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gKHdpZHRoID4gODE1KSA/ICgoMiAqIHNob3dNb3JlKSAqIE1hdGguZmxvb3IoKGhlaWdodCAtIDgwIC0gKDMyICogMykpIC8gNTMzKSAqIE1hdGguZmxvb3IoKHdpZHRoIC0gMjQ0KSAvIDM0MykpIDogODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgbnVtYmVyU2hvd246IHRoaXMubWF4U2hvd24od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgdGhpcy5zdGF0ZS5zaG93TW9yZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxyXG5cclxuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZ2VuZGVyID0gcm91dGVyLnF1ZXJ5Lm1haW5DYXRlZ29yeTtcclxuICAgICAgICBsZXQgc3ViQ2F0ZWdvcnk7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuc3ViQ2F0ZWdvcnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCA/IHVuZXNjYXBlKHJvdXRlci5xdWVyeS5zZWFyY2gpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoKGdlbmRlciAhPT0gdW5kZWZpbmVkIHx8IHN1YkNhdGVnb3J5ICE9PSB1bmRlZmluZWQpICYmIGlzTGV0dGVyKGdlbmRlcikgJiYgaXNMZXR0ZXIoc3ViQ2F0ZWdvcnkpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeSBieSBjYXRlZ29yeVwiKTtcclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RBcnJheSAgPSBhd2FpdCBnZXRQcm9kdWN0cyhnZW5kZXIsIHN1YkNhdGVnb3J5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgcHJvZHVjdHM6IHByb2R1Y3RBcnJheSwgbG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTGV0dGVyKHNlYXJjaCkpe1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdEFycmF5ICA9IGF3YWl0IGdldFByb2R1Y3RzU2VhcmNoKHNlYXJjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0QXJyYXksIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgcHJvZHVjdHM6IFtdLCBsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBnZW5kZXIgPSByb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5O1xyXG4gICAgICAgIGxldCBzdWJDYXRlZ29yeTtcclxuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnN1YkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdlbmRlciAhPT0gcHJldlByb3BzLnJvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnkgIFxyXG4gICAgICAgICAgICB8fCBzdWJDYXRlZ29yeSAhPT0gcHJldlByb3BzLnJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeVxyXG4gICAgICAgICAgICB8fCByb3V0ZXIucXVlcnkuc2VhcmNoICE9PSBwcmV2UHJvcHMucm91dGVyLnF1ZXJ5LnNlYXJjaCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW5kZXIgPSBcIiArIGlzTGV0dGVyKGdlbmRlcikpOyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJDYXRlZ29yeSA9IFwiICsgaXNMZXR0ZXIoc3ViQ2F0ZWdvcnkpKTtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IHJvdXRlci5xdWVyeS5zZWFyY2ggPyB1bmVzY2FwZShyb3V0ZXIucXVlcnkuc2VhcmNoKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKChnZW5kZXIgIT09IHVuZGVmaW5lZCB8fCBzdWJDYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSAmJiBpc0xldHRlcihnZW5kZXIpICYmIGlzTGV0dGVyKHN1YkNhdGVnb3J5KSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdEFycmF5ICA9IGF3YWl0IGdldFByb2R1Y3RzKGdlbmRlciwgc3ViQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9kdWN0cy5sZW5ndGggPSAwIDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0QXJyYXksIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMZXR0ZXIoc2VhcmNoKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdEFycmF5ICA9IGF3YWl0IGdldFByb2R1Y3RzU2VhcmNoKHNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdEFycmF5LCBsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0TGluayhpdGVtKSB7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vICAgICBsZXQgbGluayA9IGl0ZW0ubGluaztcclxuXHJcbiAgICAvLyAgICAgaWYgKGl0ZW0uZmlsdGVyICE9PSBcIlwiKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7cGF0aG5hbWU6IGxpbmssIHF1ZXJ5OiB7bWFpbkNhdGVnb3J5OiByb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5LCBzdWJDYXRlZ29yeTogaXRlbS5maWx0ZXJ9fTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHtwYXRobmFtZTogbGluaywgcXVlcnk6IHttYWluQ2F0ZWdvcnk6IHJvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnl9fTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRMaW5rKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBsaW5rID0gaXRlbS5saW5rOyAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChpdGVtLmZpbHRlciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4ge3BhdGhuYW1lOiBsaW5rLCBxdWVyeToge21haW5DYXRlZ29yeTogcm91dGVyLnF1ZXJ5Lm1haW5DYXRlZ29yeSwgc3ViQ2F0ZWdvcnk6IGl0ZW0uZmlsdGVyfX07XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtsaW5rfT9tYWluQ2F0ZWdvcnk9JHtyb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5fSZzdWJDYXRlZ29yeT0ke2l0ZW0uZmlsdGVyfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke2xpbmt9P21haW5DYXRlZ29yeT0ke3JvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnl9YFxyXG4gICAgICAgIC8vIHJldHVybiB7cGF0aG5hbWU6IGxpbmssIHF1ZXJ5OiB7bWFpbkNhdGVnb3J5OiB0aGlzLnByb3BzLmNhdGVnb3J5cm91dGVyLnF1ZXJ5Lm1haW5DYXRlZ29yeX19O1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd01vcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgc2hvd01vcmU6IHRoaXMuc3RhdGUuc2hvd01vcmUgKyAxLCBudW1iZXJTaG93bjogdGhpcy5tYXhTaG93bih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB0aGlzLnN0YXRlLnNob3dNb3JlICsgMSl9KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBbbmFtZSwgYXNlbmRpbmddID0gZS50YXJnZXQudmFsdWUuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSB0aGlzLnN0YXRlLnByb2R1Y3RzLnNvcnQoZ2V0Q29tcGFyZShuYW1lLCBhc2VuZGluZyA9PT0gJ3RydWUnKSlcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgXHJcbiAgICAgICAgICAgIHNvcnRCeTogZS50YXJnZXQudmFsdWUsIFxyXG4gICAgICAgICAgICBwcm9kdWN0czogbmV3QXJyYXl9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVGaWx0ZXJDaGFuZ2UgPSAoZmlsdGVyLCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgdmFsID0gKGZpbHRlciA9PT0gXCJwcmljZVwiKSA/IHRoaXMuc3RhdGUucHJpY2VGaWxlcnNbdmFsdWVdIDogdGhpcy5zdGF0ZS5zaXplRmlsdGVyc1t2YWx1ZV07XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlRmlsdGVycy5hZGQodmFsKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpbHRlciA9IChmaWx0ZXIpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcnMuZGVsZXRlKGZpbHRlcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZX0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBsZXQgcHJvZHVjdHMgPSB0aGlzLmFwcGx5RmlsdGVycyh0aGlzLnN0YXRlLnByb2R1Y3RzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5OZXcgQXJyaXZhbHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJpdmFscy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48TGluayBhcz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfSR7dGhpcy5nZXRMaW5rKGl0ZW0pfWB9IGhyZWY9e3RoaXMuZ2V0TGluayhpdGVtKX0gcGFzc0hyZWY+PGEgY2xhc3NOYW1lPVwiaG92ZXJDb2xvclwiPntpdGVtLm5hbWV9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2hvcCBieSBDYXRlZ29yeTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yeS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48TGluayBhcz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfSR7dGhpcy5nZXRMaW5rKGl0ZW0pfWB9IGhyZWY9e3RoaXMuZ2V0TGluayhpdGVtKX0gcGFzc0hyZWY+PGEgY2xhc3NOYW1lPVwiaG92ZXJDb2xvclwiPntpdGVtLm5hbWV9PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e3RoaXMuZ2V0VGl0bGUoKX08L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GaWx0ZXIgQnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UoXCJwcmljZVwiLCBlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXtcImRlZmF1bHRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZSB2YWx1ZT1cImRlZmF1bHRcIj5QcmljZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucHJpY2VGaWxlcnMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aX0+e2l0ZW0udGV4dH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwidGl0bGVcIiBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZShcInRpdGxlXCIsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e1wiZGVmYXVsdFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlIHZhbHVlPVwiZGVmYXVsdFwiPlNpemU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNpemVGaWx0ZXJzLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2l9PntpdGVtLnRleHR9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclBhbm5lbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsaXBNb3ZlIHR5cGVOYW1lPXtudWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbLi4udGhpcy5zdGF0ZS5hY3RpdmVGaWx0ZXJzXS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJQYW5uZWxcIiBrZXk9e2l0ZW0udGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntgJHtpdGVtLnRleHR9YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17ZSA9PiB0aGlzLnJlbW92ZUZpbHRlcihpdGVtKX0gc3JjPVwiL2ltYWdlcy9jbG9zZS5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGlwTW92ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnRCeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U29ydCBCeTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdENoZWNrZWQgaWQ9XCJyZWNvbW1lbmRlZFwiIHZhbHVlPVwicmVjIHRydWVcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwic29ydEJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmVjb21tZW5kZWRcIj5SZWNvbW1lbmRlZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5ld2VzdFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwibmV3IHRydWVcIiBuYW1lPVwic29ydEJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgaHRtbEZvcj1cIm5ld2VzdFwiPk5ld2VzdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxvd2VzdFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicHJpY2UgdHJ1ZVwiIG5hbWU9XCJzb3J0QnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBodG1sRm9yPVwibG93ZXN0XCI+TG93ZXN0IFByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaGlnaGVzdFwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwicHJpY2UgZmFsc2VcIiBuYW1lPVwic29ydEJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaGlnaGVzdFwiPkhpZ2hlc3QgUHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb2R1Y3RzLmxlbmd0aCA+IDApID8gPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMuc2xpY2UoMCwgdGhpcy5zdGF0ZS5udW1iZXJTaG93bikubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEl0ZW1EaXNwbGF5Qm94IGtleT17aX0gdmFsdWU9e2l0ZW19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPHAgY2xhc3NOYW1lPVwibWVzc2FnZVwiPnsodGhpcy5zdGF0ZS5sb2FkaW5nKSA/IFwiTG9hZGluZy4uLlwiIDogXCJObyBwcm9kdWN0cyBtYXRjaCB0aGUgcXVlcnlcIn08L3A+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7KHByb2R1Y3RzLmxlbmd0aCA+IHRoaXMuc3RhdGUubnVtYmVyU2hvd24pID8gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dNb3JlfSBjbGFzc05hbWU9XCJsb2FkTW9yZVwiPkxPQUQgTU9SRTwvYnV0dG9uPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zaWRlbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHggLSAxNnB4ICsgdmFyKC0tZm9vdGVySGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbkNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHggLSAxNnB4ICsgdmFyKC0tZm9vdGVySGVpZ2h0KSk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvKiB0b3A6IDgwcHg7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNDRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI0NHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM0M3B4LCAxZnIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXJieSBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXJieSBzZWxlY3QsIC5maWx0ZXJieSBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcmJ5IHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyYnkgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ob3ZlckNvbG9yOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbHRlclBhbm5lbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyUGFubmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTJweCA4cHggMTJweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbHRlclBhbm5lbCBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXJQYW5uZWwgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zb3J0Qnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDI0cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc29ydEJ5IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNvcnRCeSBsYWJlbDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sb2FkTW9yZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI5NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyOTRweC8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sb2FkTW9yZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDk1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCxcclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb3JlZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcmVncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXHJcbiAgICAgICAgICAgICAgICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIG1hcmdpbi1yaWdodDogNzNweDsgKi9cclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHVsIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHVsIGxpIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGVuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbkNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICgyICogMzJweCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTVweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQ2F0ZWdvcmllcyk7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Minec\\\\OneDrive\\\\Documents\\\\School\\\\Semester2\\\\CP476\\\\CP476-Final-Project\\\\pages\\\\categories.js */"));
    }
  }]);

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Categories));

/***/ })

})
//# sourceMappingURL=categories.js.ca1e61aa84302808ff9e.hot-update.js.map