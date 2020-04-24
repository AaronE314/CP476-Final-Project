webpackHotUpdate("static\\development\\pages\\categories.js",{

/***/ "./lib/userAuth.js":
/*!*************************!*\
  !*** ./lib/userAuth.js ***!
  \*************************/
/*! exports provided: setUser, getUserEmail, getUserWishList, getUserCart, getUser, isSignedIn, getNumberOfItemsInCart, getUserEmailName, updateWishList, updateCart, initUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserEmail", function() { return getUserEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserWishList", function() { return getUserWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCart", function() { return getUserCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSignedIn", function() { return isSignedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfItemsInCart", function() { return getNumberOfItemsInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserEmailName", function() { return getUserEmailName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWishList", function() { return updateWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCart", function() { return updateCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUser", function() { return initUser; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiRequester__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiRequester */ "./lib/apiRequester.js");



var setUser = function setUser(session, data) {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");

  if (!session) {
    // localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.userInfo));
  } else {
    // sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", JSON.stringify(data.userInfo));
  }
};

var isSignedIn = function isSignedIn() {
  var res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function isSignedIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_apiRequester__WEBPACK_IMPORTED_MODULE_1__["checkToken"])());

        case 2:
          res = _context.sent;

          if (!(typeof localStorage !== "undefined")) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.loggedIn && res.validToken && getUser() !== undefined);

        case 7:
          return _context.abrupt("return", res.loggedIn && res.validToken);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var getUserEmail = function getUserEmail() {
  var user = localStorage.getItem("user");

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (!user) {
    return undefined;
  }

  user = JSON.parse(user);
  return user.email;
};

var getUserEmailName = function getUserEmailName() {
  var user = localStorage.getItem("user");

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (!user || !user.email) {
    console.log("no user");
    return undefined;
  }

  user = JSON.parse(user);
  return user.email.split("@")[0];
};

var updateWishList = function updateWishList(item, remove) {
  var user = getUser();

  if (user) {
    if (!user.wishlist.includes(item)) {
      if (remove) {
        user.wishlist = user.wishlist.filter(function (val) {
          return JSON.stringify(val) !== JSON.stringify(item);
        });
      } else {
        user.wishlist.push(item);
      }

      isSignedIn().then(function (signedIn) {
        if (signedIn) {
          Object(_apiRequester__WEBPACK_IMPORTED_MODULE_1__["addToWishlist"])(user.email, item);
        }
      });

      if (localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    }
  } else {
    // User not logged in.
    localStorage.setItem("user", JSON.stringify({
      wishlist: [item]
    }));
  }
};

var updateCart = function updateCart(item, remove, amount, value) {
  var user, index;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateCart$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = getUser();
          console.log("item: ".concat(item, ", remove: ").concat(remove, ", amount: ").concat(amount, ", value: ").concat(value));

          if (user) {
            index = -1;
            index = user.shoppingCart.findIndex(function (product) {
              return product.productID === item.productID && product.size === item.size && product.colours.hex === item.colours.hex;
            });
            console.log("index: " + index);

            if (!user.shoppingCart.includes(item)) {
              console.log("includes item: " + remove);

              if (remove) {
                user.shoppingCart = user.shoppingCart.filter(function (val) {
                  return JSON.stringify(val) !== JSON.stringify(item);
                });
              } else {
                if (index !== -1) {
                  user.shoppingCart[index].quantity += value;
                } else {
                  user.shoppingCart.push(item);
                }
              }

              isSignedIn().then(function _callee(signedIn) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!signedIn) {
                          _context2.next = 9;
                          break;
                        }

                        if (!(remove !== true)) {
                          _context2.next = 7;
                          break;
                        }

                        console.log("GOING INTO apiREQUESTER");
                        _context2.next = 5;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_apiRequester__WEBPACK_IMPORTED_MODULE_1__["addToShoppingCart"])(user.email, item, value));

                      case 5:
                        _context2.next = 9;
                        break;

                      case 7:
                        _context2.next = 9;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_apiRequester__WEBPACK_IMPORTED_MODULE_1__["removeFromShoppingCart"])(user.email, item, amount));

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, null, null, null, Promise);
              });

              if (localStorage.getItem("user")) {
                localStorage.setItem("user", JSON.stringify(user));
              } else {
                sessionStorage.setItem("user", JSON.stringify(user));
              }
            }
          } else {
            // User not logged in.
            localStorage.setItem("user", JSON.stringify({
              shoppingCart: [item]
            }));
          }

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
};

var getUserWishList = function getUserWishList() {
  var user = localStorage.getItem("user");

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (!user) {
    return undefined;
  }

  user = JSON.parse(user);
  return user.wishlist;
};

var getUserCart = function getUserCart() {
  var user = localStorage.getItem("user");

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (!user) {
    return undefined;
  }

  user = JSON.parse(user);
  return user.shoppingCart;
};

var initUser = function initUser() {
  var user = localStorage.getItem("user");

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (!user) {
    localStorage.setItem("user", JSON.stringify({
      wishlist: [],
      shoppingCart: []
    }));
  }
};

var getNumberOfItemsInCart = function getNumberOfItemsInCart() {
  if (typeof localStorage === "undefined") {
    return 0;
  }

  var cart = getUserCart();
  var total = 0;

  if (cart) {
    cart.forEach(function (item) {
      total += item.quantity;
    });
  }

  return total;
};

var getUser = function getUser() {
  var user = localStorage.getItem("user");

  if (!user) {
    user = sessionStorage.getItem("user");
  }

  if (!user) {
    return undefined;
  }

  return JSON.parse(user);
};



/***/ })

})
//# sourceMappingURL=categories.js.adc18b9f2cbc10b5ec8f.hot-update.js.map