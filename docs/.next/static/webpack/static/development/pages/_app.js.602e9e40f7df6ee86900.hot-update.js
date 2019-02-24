webpackHotUpdate("static/development/pages/_app.js",{

/***/ "../src/theme/typography/create.js":
/*!*****************************************!*\
  !*** ../src/theme/typography/create.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = (function (palette) {
  var fontFamily = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif";
  var common = {
    fontFamily: fontFamily,
    textRendering: "optimizeLegibility" // "-webkit-font-smoothing": "antialiased",
    // "-moz-osx-font-smoothing": "grayscale",

  }; // Empty states and feature introductions

  var h800 = _objectSpread({}, common, {
    fontSize: 29,
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: "-0.01em",
    color: palette.text.heading
  }); // Main titles, use only once per page


  var h700 = _objectSpread({}, common, {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.01em",
    color: palette.text.heading
  }); // Headings that identify key functionality


  var h600 = _objectSpread({}, common, {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.008em",
    color: palette.text.heading
  }); // Sub-section and field group headings


  var h500 = _objectSpread({}, common, {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.006em",
    color: palette.text.heading
  }); // Deep headings and for highlighting important pieces of information


  var h400 = _objectSpread({}, common, {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.003em",
    color: palette.text.heading
  }); // Heading up a group of list items


  var h300 = _objectSpread({}, common, {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: "16px",
    letterSpacing: 0,
    color: palette.text.heading
  }); // Low level headings


  var h200 = _objectSpread({}, common, {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: 0,
    color: palette.text.secondary
  }); // Lowest level headings


  var h100 = _objectSpread({}, common, {
    fontSize: 10,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0.06em",
    color: palette.text.secondary,
    textTransform: "uppercase"
  }); // Slogans, starting text


  var lead = _objectSpread({}, common, {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    color: palette.text.secondary
  }); // Input labels


  var label = h200; // main text

  var body = _objectSpread({}, common, {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.006em",
    color: palette.text.primary
  });

  var paragraph = _objectSpread({}, body, {
    margin: [12, 0]
  });

  return {
    h800: h800,
    h700: h700,
    h600: h600,
    h500: h500,
    h400: h400,
    h300: h300,
    h200: h200,
    h100: h100,
    lead: lead,
    body: body,
    label: label,
    paragraph: paragraph
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/theme/typography/create")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../docs/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.602e9e40f7df6ee86900.hot-update.js.map