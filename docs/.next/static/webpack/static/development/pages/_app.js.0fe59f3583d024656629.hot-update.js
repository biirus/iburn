webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../src/components/Reset/styles.js":
/*!*****************************************!*\
  !*** ../src/components/Reset/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (theme) {
  var typography = theme.typography;
  var headers = ["h1", "h2", "h3", "h4", "h5", "h6"].reduce(function (acc, header) {
    return _objectSpread({}, acc, _defineProperty({}, header, {
      margin: 0
    }));
  }, {});
  return {
    "@global": _objectSpread({
      "*": {
        boxSizing: "border-box"
      },
      html: {
        height: "100vh"
      },
      body: _objectSpread({
        margin: 0,
        padding: 0,
        height: "100vh",
        textDecorationSkip: "ink"
      }, typography.body),
      root: {
        height: "100vh"
      },
      ".fixed": {
        maxHeight: "100vh",
        overflow: "hidden"
      }
    }, headers, {
      p: _objectSpread({}, typography.paragraph)
    })
  };
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components/Reset/styles")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../docs/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.0fe59f3583d024656629.hot-update.js.map