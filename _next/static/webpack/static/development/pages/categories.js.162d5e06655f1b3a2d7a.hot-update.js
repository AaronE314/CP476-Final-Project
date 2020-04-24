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
      console.log(products.length);
      console.log("".concat("", "/").concat(this.getLink({
        name: "View All",
        link: "/categories",
        filter: ""
      })));
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "jsx-2646735618" + " " + "sidenav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 21
        }
      }, "New Arrivals"), __jsx("ul", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 21
        }
      }, this.state.arivals.map(function (item, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 36
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          as: "".concat("", "/").concat(_this2.getLink(item)),
          href: _this2.getLink(item),
          passHref: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 48
          }
        }, __jsx("a", {
          className: "jsx-2646735618" + " " + "hoverColor",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 146
          }
        }, item.name)));
      }))), __jsx("div", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 17
        }
      }, __jsx("h4", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }
      }, "Shop by Category"), __jsx("ul", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }
      }, this.state.category.map(function (item, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 36
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          as: "".concat("", "/").concat(_this2.getLink(item)),
          href: _this2.getLink(item),
          passHref: true,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 48
          }
        }, __jsx("a", {
          className: "jsx-2646735618" + " " + "hoverColor",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 146
          }
        }, item.name)));
      })))), __jsx("div", {
        className: "jsx-2646735618" + " " + "mainContent",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 13
        }
      }, __jsx("h1", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }
      }, this.getTitle()), __jsx("div", {
        className: "jsx-2646735618" + " " + "filterby",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }
      }, __jsx("label", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
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
          lineNumber: 265,
          columnNumber: 25
        }
      }, __jsx("option", {
        defaultValue: true,
        value: "default",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
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
            lineNumber: 268,
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
          lineNumber: 271,
          columnNumber: 25
        }
      }, __jsx("option", {
        defaultValue: true,
        value: "default",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
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
            lineNumber: 274,
            columnNumber: 40
          }
        }, item.text);
      }), ";"), __jsx("div", {
        className: "jsx-2646735618" + " " + "filterPannels",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 25
        }
      }, __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_19__["default"], {
        typeName: null,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 25
        }
      }, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.state.activeFilters).map(function (item, i) {
        return __jsx("div", {
          key: item.text,
          className: "jsx-2646735618" + " " + "filterPannel",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 40
          }
        }, __jsx("span", {
          className: "jsx-2646735618",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281,
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
            lineNumber: 282,
            columnNumber: 37
          }
        }));
      })))), __jsx("div", {
        className: "jsx-2646735618" + " " + "sortBy",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
        }
      }, __jsx("label", {
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
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
          lineNumber: 293,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "recommended",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
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
          lineNumber: 295,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "newest",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
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
          lineNumber: 297,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "lowest",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
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
          lineNumber: 299,
          columnNumber: 25
        }
      }), __jsx("label", {
        htmlFor: "highest",
        className: "jsx-2646735618",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 25
        }
      }, "Highest Price")), products.length > 0 ? __jsx("div", {
        className: "jsx-2646735618" + " " + "products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 46
        }
      }, products.slice(0, this.state.numberShown).map(function (item, i) {
        return __jsx(_components_ItemDisplayBox__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: i,
          value: item,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 36
          }
        });
      })) : __jsx("p", {
        className: "jsx-2646735618" + " " + "message",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 30
        }
      }, this.state.loading ? "Loading..." : "No products match the query"), products.length > this.state.numberShown ? __jsx("button", {
        onClick: this.showMore,
        className: "jsx-2646735618" + " " + "loadMore",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 67
        }
      }, "LOAD MORE") : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "2646735618",
        __self: this
      }, ".sidenav.jsx-2646735618{height:calc(100% - 80px - 16px + var(--footerHeight));top:80px;width:180px;position:absolute;z-index:1;left:0px;background:var(--backgroundColor);overflow-x:hidden;padding-left:32px;padding-top:16px;}.mainContent.jsx-2646735618{position:relative;min-height:100%;padding-top:16px;width:calc(100% - 244px);margin-left:244px;}.products.jsx-2646735618{display:grid;grid-row-gap:8px;grid-column-gap:32px;grid-template-columns:repeat(auto-fill,minmax(343px,1fr));overflow:hidden;}.message.jsx-2646735618{text-align:center;width:100%;}.filterby.jsx-2646735618 label.jsx-2646735618{margin-right:24px;}.filterby.jsx-2646735618 select.jsx-2646735618,.filterby.jsx-2646735618 option.jsx-2646735618{font-family:'Open Sans';font-weight:normal;font-size:14px;min-width:50px;}.filterby.jsx-2646735618 select.jsx-2646735618{border:0px;outline:0px;}.filterby.jsx-2646735618 option.jsx-2646735618{border:1px solid black;outline:none;}.hoverColor.jsx-2646735618:hover{background-color:var(--highlightColor);}.filterPannels.jsx-2646735618{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:57px;}.filterPannel.jsx-2646735618{position:relative;width:110px;height:32px;border:0.5px solid black;margin:12px 8px 12px 0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.filterPannel.jsx-2646735618 span.jsx-2646735618{position:absolute;left:12px;font-family:'Open Sans';font-style:normal;font-weight:normal;font-size:14px;line-height:19px;top:6px;}.filterPannel.jsx-2646735618 img.jsx-2646735618{position:absolute;right:12px;top:8px;cursor:pointer;}.sortBy.jsx-2646735618{position:relative;margin:24px 0;}.sortBy.jsx-2646735618 label.jsx-2646735618{margin-right:24px;}.sortBy.jsx-2646735618 label.jsx-2646735618:not(:first-child){font-family:'Open Sans';font-weight:normal;font-size:14px;}.loadMore.jsx-2646735618{border:none;width:294px;height:32px;margin:32px 0;padding:0;left:calc(50% - 294px/2);background:var(--highlightColor);position:relative;}.loadMore.jsx-2646735618:hover{-webkit-filter:brightness(95%);filter:brightness(95%);cursor:pointer;}[type=\"radio\"]:checked.jsx-2646735618,[type=\"radio\"]:not(:checked).jsx-2646735618{position:absolute;left:-9999px;}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618,[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:var(--foregroundColor);}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618:before,[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618:before{content:'';position:absolute;left:0;top:0;width:18px;height:18px;border:1px solid var(--foregroundColor);border-radius:100%;background:var(--backgroundColor);}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618:after,[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618:after{content:'';width:18px;height:18px;background:var(--highlightColor);position:absolute;top:1px;left:1px;border-radius:100%;-webkit-transition:all 0.2s ease;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}[type=\"radio\"]:not(:checked).jsx-2646735618+label.jsx-2646735618:after{opacity:0;-webkit-transform:scale(0);-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}[type=\"radio\"]:checked.jsx-2646735618+label.jsx-2646735618:after{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}h1.jsx-2646735618{font-size:32px;line-height:37px;font-weight:bold;text-transform:uppercase;margin:0;margin-bottom:32px;}h4.jsx-2646735618{font-family:\"Open Sans\";margin-top:0;font-weight:bold;}ul.jsx-2646735618{list-style:none;padding:0;}ul.jsx-2646735618 li.jsx-2646735618{margin-top:12px;}ul.jsx-2646735618 li.jsx-2646735618 a.jsx-2646735618{font-family:\"Open Sans\";font-weight:normal;font-size:14px;}@media only screen and (max-width:1000px){.sidenav.jsx-2646735618{left:-230px;}.mainContent.jsx-2646735618{margin-left:32px;width:calc(100% - (2 * 32px));}}@media only screen and (max-width:815px){.products.jsx-2646735618{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}@media only screen and (max-width:610px){.mainContent.jsx-2646735618{margin-top:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWluZWNcXE9uZURyaXZlXFxEb2N1bWVudHNcXFNjaG9vbFxcU2VtZXN0ZXIyXFxDUDQ3NlxcQ1A0NzYtRmluYWwtUHJvamVjdFxccGFnZXNcXGNhdGVnb3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdVR3QixBQUkyRSxBQWFwQyxBQVlMLEFBU0ssQUFLQSxBQUlNLEFBT2QsQUFLYSxBQUtnQixBQUlyQixBQU1BLEFBZUEsQUFXQSxBQU9BLEFBS0EsQUFJTSxBQU9aLEFBaUJXLEFBTUwsQUFNQSxBQVNQLEFBWUEsQUFZRCxBQUtBLEFBTUssQUFTUyxBQU9SLEFBS0EsQUFJUSxBQU9SLEFBSUssQUFTTSxBQVFQLFVBL0RPLEFBS0EsQ0F4SWhCLEFBMkdPLEFBWVAsQ0FqREMsQUF3R1osQ0F2TWlCLEVBdUtBLENBZ0JQLEFBS2QsQUFnQ0ksQ0FqQmtDLENBdE5sQixBQW9CTCxBQUtmLEFBeUJpQixBQU1ELEFBZUYsQUFXQyxBQU9HLEFBS2xCLEFBa0NpQixBQU1LLElBc0JOLENBdkhoQixBQUlpQixDQVpNLEFBcUVBLEFBU1AsQUFnRkEsQUFnQk8sRUFSdkIsRUEzSDRCLENBbkQ1QixBQThEWSxBQTZERCxDQXBJYyxBQTZDVCxDQXdFaEIsQ0F2Q0EsQUF5RnFCLEVBakxBLEFBMkpnQixFQW5IckMsQUFtRWtCLEFBMEJDLEFBVVQsQ0E3RFMsQUFvRkksQUFLQSxBQWdCRixFQS9JckIsR0FZNkIsQUF3RmQsQ0FwSEksQUFxRUEsQUF5R0EsSUFXZixFQW5DeUIsQ0F0RWYsQ0ExR2UsQUFTbUMsQUEySDNDLENBL0RDLEFBWXRCLENBOERnQixDQWpLSixBQXdJTyxBQW9FbkIsSUEvSm1CLEFBcUVuQixBQXlHQSxFQTdGNkIsR0E3SGIsRUFpSzRCLEVBekZqQixBQW1HTCxDQXJCRyxDQWR6QixDQWpEdUIsR0ExQ3ZCLENBcUphLENBak1TLENBaUJBLE9BaUxDLEVBcEVjLEFBNkN6QixJQXBGTyxBQStEYyxDQTdFRixFQVZmLENBOURGLEFBMktELENBekpiLEtBd05JLEdBOURtQixBQXNCdkIsQ0FqTWEsQ0E4RGIsQUF3QnFCLENBeUVFLENBb0J2QixBQUtBLEdBL0pvQixHQXhCa0IsS0F1RVQsQ0FzRFAsQUF1QnRCLEdBOURZLEFBcUZ5QixHQVpDLENBdEl0QyxJQThEQSxPQXdDQSxNQXZENEIsSUF2RU4sUUEyS08sSUFaN0IsTUE5SnNCLEVBdUVJLGdCQXJFM0IsTUFzRTBCLFdBdEV6QixVQXVFcUIsR0FrR3JCLGtGQWpHQSIsImZpbGUiOiJDOlxcVXNlcnNcXE1pbmVjXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxTY2hvb2xcXFNlbWVzdGVyMlxcQ1A0NzZcXENQNDc2LUZpbmFsLVByb2plY3RcXHBhZ2VzXFxjYXRlZ29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEl0ZW1EaXNwbGF5Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvSXRlbURpc3BsYXlCb3gnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0cywgZ2V0UHJvZHVjdHNTZWFyY2ggfSBmcm9tIFwiLi4vbGliL2FwaVJlcXVlc3RlclwiO1xyXG5pbXBvcnQgeyBpc0xldHRlcixpc1ZhbGlkVGl0bGV9IGZyb20gXCIuLi9saWIvdmFsaWRhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZXRDb21wYXJlIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRmxpcE1vdmUgZnJvbSAncmVhY3QtZmxpcC1tb3ZlJztcclxuZXhwb3J0IGNsYXNzIENhdGVnb3JpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG5cclxuICAgICAgICAgICAgYXJpdmFsczogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiVmlldyBBbGxcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwibmV3XCJ9XHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeTogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiVmlldyBBbGxcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwiXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiU2hpcnRzXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiwgZmlsdGVyOiBcInNoaXJ0c1wifSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIlQtc2hpcnRzXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiwgZmlsdGVyOiBcInQtc2hpcnRzXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiU3dlYXRlcnMgJiBDYXJkaWdhbnNcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwic3dlYXRlcnNcIn0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogXCJQYW50c1wiLCBsaW5rOiBcIi9jYXRlZ29yaWVzXCIsIGZpbHRlcjogXCJwYW50c1wifSxcclxuICAgICAgICAgICAgICAgIHtuYW1lOiBcIkplYW5zXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiwgZmlsdGVyOiBcImplYW5zXCJ9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6IFwiSm9nZ2Vyc1wiLCBsaW5rOiBcIi9jYXRlZ29yaWVzXCIsIGZpbHRlcjogXCJqb2dnZXJzXCJ9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHNob3dNb3JlOiAxLFxyXG4gICAgICAgICAgICBxdWVyeTogcm91dGVyLnF1ZXJ5LCBcclxuICAgICAgICAgICAgcHJvZHVjdHMgOiBbXSxcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgc29ydEJ5OiBcInJlY1wiLFxyXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXJzOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICAgIHByaWNlRmlsZXJzOiBbe2xvdzogMCwgaGlnaDogMTAsIHRleHQ6IFwiJDAgLSAkMTBcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvdzogMTEsIGhpZ2g6IDIwLCB0ZXh0OiBcIiQxMSAtICQyMFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG93OiAyMSwgaGlnaDogMzAsIHRleHQ6IFwiJDIxIC0gJDMwXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsb3c6IDMxLCBoaWdoOiA0MCwgdGV4dDogXCIkMzEgLSAkNDBcIn0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xvdzogNDEsIGhpZ2g6IDUwLCB0ZXh0OiBcIiQ0MSAtICQ1MFwifSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bG93OiA1MSwgaGlnaDogMTAwMDAwMDAsIHRleHQ6IFwiJDUxK1wifV0sXHJcbiAgICAgICAgICAgIHNpemVGaWx0ZXJzOiBbe3RleHQ6ICdTJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdNJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdMJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RleHQ6ICdYTCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiAnWFhMJ31dXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dNb3JlID0gdGhpcy5zaG93TW9yZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaXRsZSgpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSByb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgdGl0bGUgKz0gXCIgXCIgKyByb3V0ZXIucXVlcnkuc3ViQ2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgICAgICAgICAxXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlGaWx0ZXJzID0gKHByb2R1Y3RzKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgbWF0Y2hlc1ByaWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGVzU2l6ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlRmlsdGVycy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlci5sb3cgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzUHJpY2UgPSBtYXRjaGVzUHJpY2UgfHwgaXRlbS5wcmljZSA+IGZpbHRlci5sb3cgJiYgaXRlbS5wcmljZSA8IGZpbHRlci5oaWdoO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNTaXplID0gbWF0Y2hlc1NpemUgfHwgKGl0ZW0uc2l6ZXMgJiYgaXRlbS5zaXplcy5pbmNsdWRlcyhmaWx0ZXIudGV4dCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNQcmljZSB8fCBtYXRjaGVzU2l6ZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2hvd24gPSAod2lkdGgsIGhlaWdodCwgc2hvd01vcmUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gKHdpZHRoID4gODE1KSA/ICgoMiAqIHNob3dNb3JlKSAqIE1hdGguZmxvb3IoKGhlaWdodCAtIDgwIC0gKDMyICogMykpIC8gNTMzKSAqIE1hdGguZmxvb3IoKHdpZHRoIC0gMjQ0KSAvIDM0MykpIDogODtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgbnVtYmVyU2hvd246IHRoaXMubWF4U2hvd24od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgdGhpcy5zdGF0ZS5zaG93TW9yZSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxyXG5cclxuICAgICAgICBjb25zdCB7IHJvdXRlciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgZ2VuZGVyID0gcm91dGVyLnF1ZXJ5Lm1haW5DYXRlZ29yeTtcclxuICAgICAgICBsZXQgc3ViQ2F0ZWdvcnk7XHJcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuc3ViQ2F0ZWdvcnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VhcmNoID0gcm91dGVyLnF1ZXJ5LnNlYXJjaCA/IHVuZXNjYXBlKHJvdXRlci5xdWVyeS5zZWFyY2gpIDogdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBpZiAoKGdlbmRlciAhPT0gdW5kZWZpbmVkIHx8IHN1YkNhdGVnb3J5ICE9PSB1bmRlZmluZWQpICYmIGlzTGV0dGVyKGdlbmRlcikgJiYgaXNMZXR0ZXIoc3ViQ2F0ZWdvcnkpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWVyeSBieSBjYXRlZ29yeVwiKTtcclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RBcnJheSAgPSBhd2FpdCBnZXRQcm9kdWN0cyhnZW5kZXIsIHN1YkNhdGVnb3J5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgcHJvZHVjdHM6IHByb2R1Y3RBcnJheSwgbG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzTGV0dGVyKHNlYXJjaCkpe1xyXG4gICAgICAgICAgICBsZXQgcHJvZHVjdEFycmF5ICA9IGF3YWl0IGdldFByb2R1Y3RzU2VhcmNoKHNlYXJjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0QXJyYXksIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgcHJvZHVjdHM6IFtdLCBsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBhc3luYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpe1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBnZW5kZXIgPSByb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5O1xyXG4gICAgICAgIGxldCBzdWJDYXRlZ29yeTtcclxuICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnN1YkNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdlbmRlciAhPT0gcHJldlByb3BzLnJvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnkgIFxyXG4gICAgICAgICAgICB8fCBzdWJDYXRlZ29yeSAhPT0gcHJldlByb3BzLnJvdXRlci5xdWVyeS5zdWJDYXRlZ29yeVxyXG4gICAgICAgICAgICB8fCByb3V0ZXIucXVlcnkuc2VhcmNoICE9PSBwcmV2UHJvcHMucm91dGVyLnF1ZXJ5LnNlYXJjaCkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW5kZXIgPSBcIiArIGlzTGV0dGVyKGdlbmRlcikpOyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWJDYXRlZ29yeSA9IFwiICsgaXNMZXR0ZXIoc3ViQ2F0ZWdvcnkpKTtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaCA9IHJvdXRlci5xdWVyeS5zZWFyY2ggPyB1bmVzY2FwZShyb3V0ZXIucXVlcnkuc2VhcmNoKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKChnZW5kZXIgIT09IHVuZGVmaW5lZCB8fCBzdWJDYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSAmJiBpc0xldHRlcihnZW5kZXIpICYmIGlzTGV0dGVyKHN1YkNhdGVnb3J5KSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdEFycmF5ICA9IGF3YWl0IGdldFByb2R1Y3RzKGdlbmRlciwgc3ViQ2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcm9kdWN0cy5sZW5ndGggPSAwIDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHByb2R1Y3RzOiBwcm9kdWN0QXJyYXksIGxvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMZXR0ZXIoc2VhcmNoKSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZHVjdEFycmF5ICA9IGF3YWl0IGdldFByb2R1Y3RzU2VhcmNoKHNlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBwcm9kdWN0czogcHJvZHVjdEFycmF5LCBsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0TGluayhpdGVtKSB7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vICAgICBsZXQgbGluayA9IGl0ZW0ubGluaztcclxuXHJcbiAgICAvLyAgICAgaWYgKGl0ZW0uZmlsdGVyICE9PSBcIlwiKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB7cGF0aG5hbWU6IGxpbmssIHF1ZXJ5OiB7bWFpbkNhdGVnb3J5OiByb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5LCBzdWJDYXRlZ29yeTogaXRlbS5maWx0ZXJ9fTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHtwYXRobmFtZTogbGluaywgcXVlcnk6IHttYWluQ2F0ZWdvcnk6IHJvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnl9fTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBnZXRMaW5rKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGxldCBsaW5rID0gaXRlbS5saW5rO1xyXG5cclxuICAgICAgICBpZiAoaXRlbS5maWx0ZXIgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtwYXRobmFtZTogbGluaywgcXVlcnk6IHttYWluQ2F0ZWdvcnk6IHJvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnksIHN1YkNhdGVnb3J5OiBpdGVtLmZpbHRlcn19O1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bGlua30/bWFpbkNhdGVnb3J5PSR7cm91dGVyLnF1ZXJ5Lm1haW5DYXRlZ29yeX0mc3ViQ2F0ZWdvcnk9JHtpdGVtLmZpbHRlcn1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtsaW5rfT9tYWluQ2F0ZWdvcnk9JHtyb3V0ZXIucXVlcnkubWFpbkNhdGVnb3J5fWBcclxuICAgICAgICAvLyByZXR1cm4ge3BhdGhuYW1lOiBsaW5rLCBxdWVyeToge21haW5DYXRlZ29yeTogdGhpcy5wcm9wcy5jYXRlZ29yeXJvdXRlci5xdWVyeS5tYWluQ2F0ZWdvcnl9fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNob3dNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHNob3dNb3JlOiB0aGlzLnN0YXRlLnNob3dNb3JlICsgMSwgbnVtYmVyU2hvd246IHRoaXMubWF4U2hvd24od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgdGhpcy5zdGF0ZS5zaG93TW9yZSArIDEpfSlcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgW25hbWUsIGFzZW5kaW5nXSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KFwiIFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gdGhpcy5zdGF0ZS5wcm9kdWN0cy5zb3J0KGdldENvbXBhcmUobmFtZSwgYXNlbmRpbmcgPT09ICd0cnVlJykpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIFxyXG4gICAgICAgICAgICBzb3J0Qnk6IGUudGFyZ2V0LnZhbHVlLCBcclxuICAgICAgICAgICAgcHJvZHVjdHM6IG5ld0FycmF5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRmlsdGVyQ2hhbmdlID0gKGZpbHRlciwgdmFsdWUpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IHZhbCA9IChmaWx0ZXIgPT09IFwicHJpY2VcIikgPyB0aGlzLnN0YXRlLnByaWNlRmlsZXJzW3ZhbHVlXSA6IHRoaXMuc3RhdGUuc2l6ZUZpbHRlcnNbdmFsdWVdO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcnMuYWRkKHZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGV9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGaWx0ZXIgPSAoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVGaWx0ZXJzLmRlbGV0ZShmaWx0ZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGV9KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gdGhpcy5hcHBseUZpbHRlcnModGhpcy5zdGF0ZS5wcm9kdWN0cyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vJHt0aGlzLmdldExpbmsoe25hbWU6IFwiVmlldyBBbGxcIiwgbGluazogXCIvY2F0ZWdvcmllc1wiLCBmaWx0ZXI6IFwiXCJ9KX1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxMYXlvdXQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5OZXcgQXJyaXZhbHM8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJpdmFscy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpfT48TGluayBhcz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfS8ke3RoaXMuZ2V0TGluayhpdGVtKX1gfSBocmVmPXt0aGlzLmdldExpbmsoaXRlbSl9IHBhc3NIcmVmPjxhIGNsYXNzTmFtZT1cImhvdmVyQ29sb3JcIj57aXRlbS5uYW1lfTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlNob3AgYnkgQ2F0ZWdvcnk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2F0ZWdvcnkubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+PExpbmsgYXM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0vJHt0aGlzLmdldExpbmsoaXRlbSl9YH0gaHJlZj17dGhpcy5nZXRMaW5rKGl0ZW0pfSBwYXNzSHJlZj48YSBjbGFzc05hbWU9XCJob3ZlckNvbG9yXCI+e2l0ZW0ubmFtZX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57dGhpcy5nZXRUaXRsZSgpfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyYnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpbHRlciBCeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicHJpY2VcIiBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZShcInByaWNlXCIsIGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e1wiZGVmYXVsdFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlIHZhbHVlPVwiZGVmYXVsdFwiPlByaWNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcmljZUZpbGVycy5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtpfT57aXRlbS50ZXh0fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlKFwidGl0bGVcIiwgZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17XCJkZWZhdWx0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkZWZhdWx0VmFsdWUgdmFsdWU9XCJkZWZhdWx0XCI+U2l6ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2l6ZUZpbHRlcnMubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17aX0+e2l0ZW0udGV4dH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyUGFubmVsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxpcE1vdmUgdHlwZU5hbWU9e251bGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi50aGlzLnN0YXRlLmFjdGl2ZUZpbHRlcnNdLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlclBhbm5lbFwiIGtleT17aXRlbS50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2Ake2l0ZW0udGV4dH1gfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtlID0+IHRoaXMucmVtb3ZlRmlsdGVyKGl0ZW0pfSBzcmM9XCIvaW1hZ2VzL2Nsb3NlLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsaXBNb3ZlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydEJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb3J0IEJ5PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0Q2hlY2tlZCBpZD1cInJlY29tbWVuZGVkXCIgdmFsdWU9XCJyZWMgdHJ1ZVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzb3J0QnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZWNvbW1lbmRlZFwiPlJlY29tbWVuZGVkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3ZXN0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJuZXcgdHJ1ZVwiIG5hbWU9XCJzb3J0QnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBodG1sRm9yPVwibmV3ZXN0XCI+TmV3ZXN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibG93ZXN0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwcmljZSB0cnVlXCIgbmFtZT1cInNvcnRCeVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGh0bWxGb3I9XCJsb3dlc3RcIj5Mb3dlc3QgUHJpY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJoaWdoZXN0XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJwcmljZSBmYWxzZVwiIG5hbWU9XCJzb3J0QnlcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJoaWdoZXN0XCI+SGlnaGVzdCBQcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdHMubGVuZ3RoID4gMCkgPyA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5zbGljZSgwLCB0aGlzLnN0YXRlLm51bWJlclNob3duKS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8SXRlbURpc3BsYXlCb3gga2V5PXtpfSB2YWx1ZT17aXRlbX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJtZXNzYWdlXCI+eyh0aGlzLnN0YXRlLmxvYWRpbmcpID8gXCJMb2FkaW5nLi4uXCIgOiBcIk5vIHByb2R1Y3RzIG1hdGNoIHRoZSBxdWVyeVwifTwvcD59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdHMubGVuZ3RoID4gdGhpcy5zdGF0ZS5udW1iZXJTaG93bikgPyA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd01vcmV9IGNsYXNzTmFtZT1cImxvYWRNb3JlXCI+TE9BRCBNT1JFPC9idXR0b24+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnNpZGVuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gODBweCAtIDE2cHggKyB2YXIoLS1mb290ZXJIZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6ODBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gODBweCAtIDE2cHggKyB2YXIoLS1mb290ZXJIZWlnaHQpKTsgKi9cclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRvcDogODBweDsgKi9cclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0NHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjQ0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzQzcHgsIDFmcikpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcmJ5IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcmJ5IHNlbGVjdCwgLmZpbHRlcmJ5IG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyYnkgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXJieSBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhvdmVyQ29sb3I6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2hsaWdodENvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyUGFubmVscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1N3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5maWx0ZXJQYW5uZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDhweCAxMnB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyUGFubmVsIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbHRlclBhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNvcnRCeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zb3J0QnkgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc29ydEJ5IGxhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvYWRNb3JlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjk0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMycHggMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDI5NHB4LzIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHRDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvYWRNb3JlOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTUlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpICsgbGFiZWxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvcmVncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9yZWdyb3VuZENvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taGlnaGxpZ2h0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiA3M3B4OyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdWwgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdWwgbGkgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuc2lkZW5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0yMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gKDIgKiAzMnB4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxNXB4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbkNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihDYXRlZ29yaWVzKTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Minec\\\\OneDrive\\\\Documents\\\\School\\\\Semester2\\\\CP476\\\\CP476-Final-Project\\\\pages\\\\categories.js */"));
    }
  }]);

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Categories));

/***/ })

})
//# sourceMappingURL=categories.js.162d5e06655f1b3a2d7a.hot-update.js.map