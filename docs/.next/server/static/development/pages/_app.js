module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/components/Reset/index.js":
/*!****************************************!*\
  !*** ../src/components/Reset/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "../src/components/Reset/styles.js");
// enhancers
 // styles


/* harmony default export */ __webpack_exports__["default"] = (react_jss__WEBPACK_IMPORTED_MODULE_0___default()(_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return null;
}));

/***/ }),

/***/ "../src/components/Reset/styles.js":
/*!*****************************************!*\
  !*** ../src/components/Reset/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

/***/ }),

/***/ "../src/theme/colors/alpha.js":
/*!************************************!*\
  !*** ../src/theme/colors/alpha.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var alpha = {
  10: 0.02,
  20: 0.04,
  30: 0.08,
  40: 0.13,
  50: 0.25,
  60: 0.31,
  70: 0.36,
  80: 0.42,
  90: 0.48,
  100: 0.54,
  200: 0.6,
  300: 0.66,
  400: 0.71,
  500: 0.77,
  600: 0.82,
  700: 0.89,
  800: 0.95
};

var getAlphaColor = function getAlphaColor(baseColor, alpha) {
  return color__WEBPACK_IMPORTED_MODULE_0___default()(baseColor).alpha(alpha).toString();
};

var getColorsMap = function getColorsMap(prefix, baseColor) {
  return Object.keys(alpha).reduce(function (acc, key) {
    return _objectSpread({}, acc, _defineProperty({}, "".concat(prefix).concat(key, "a"), getAlphaColor(baseColor, alpha[key])));
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (function (neutral, brand) {
  return _objectSpread({}, getColorsMap("n", neutral.n900), getColorsMap("b", brand.b75), getColorsMap("w", neutral.n0));
});

/***/ }),

/***/ "../src/theme/colors/brand.js":
/*!************************************!*\
  !*** ../src/theme/colors/brand.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  b500: "#0747A6",
  b400: "#0052CC",
  b300: "#0065FF",
  b200: "#2684FF",
  b100: "#4C9AFF",
  b75: "#B2D4FF",
  b50: "#DEEBFF"
});

/***/ }),

/***/ "../src/theme/colors/green.js":
/*!************************************!*\
  !*** ../src/theme/colors/green.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  g500: "#006644",
  g400: "#00875A",
  g300: "#36B37E",
  g200: "#57D9A3",
  g100: "#79F2C0",
  g75: "#ABF5D1",
  g50: "#E3FCEF"
});

/***/ }),

/***/ "../src/theme/colors/index.js":
/*!************************************!*\
  !*** ../src/theme/colors/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand */ "../src/theme/colors/brand.js");
/* harmony import */ var _green__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./green */ "../src/theme/colors/green.js");
/* harmony import */ var _neutral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neutral */ "../src/theme/colors/neutral.js");
/* harmony import */ var _purple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purple */ "../src/theme/colors/purple.js");
/* harmony import */ var _red__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./red */ "../src/theme/colors/red.js");
/* harmony import */ var _yellow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./yellow */ "../src/theme/colors/yellow.js");
/* harmony import */ var _alpha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alpha */ "../src/theme/colors/alpha.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, _brand__WEBPACK_IMPORTED_MODULE_0__["default"], _green__WEBPACK_IMPORTED_MODULE_1__["default"], _neutral__WEBPACK_IMPORTED_MODULE_2__["default"], _purple__WEBPACK_IMPORTED_MODULE_3__["default"], _red__WEBPACK_IMPORTED_MODULE_4__["default"], _yellow__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_alpha__WEBPACK_IMPORTED_MODULE_6__["default"])(_neutral__WEBPACK_IMPORTED_MODULE_2__["default"], _brand__WEBPACK_IMPORTED_MODULE_0__["default"])));

/***/ }),

/***/ "../src/theme/colors/neutral.js":
/*!**************************************!*\
  !*** ../src/theme/colors/neutral.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  n900: "#091E42",
  n800: "#172B4D",
  n700: "#253858",
  n600: "#344563",
  n500: "#42526E",
  n400: "#505F79",
  n300: "#5E6C84",
  n200: "#6C798F",
  n100: "#7A869A",
  n90: "#8993A4",
  n80: "#97A0AF",
  n70: "#A5ADBA",
  n60: "#B3BAC5",
  n50: "#C1C7D0",
  n40: "#DFE1E5",
  n30: "#EBECF0",
  n20: "#F4F5F7",
  n10: "#FAFBFC",
  n0: "#FFFFFF"
});

/***/ }),

/***/ "../src/theme/colors/purple.js":
/*!*************************************!*\
  !*** ../src/theme/colors/purple.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  p500: "#403294",
  p400: "#5243AA",
  p300: "#6554C0",
  p200: "#8777D9",
  p100: "#998DD9",
  p75: "#C0B6F2",
  p50: "#EAE6FF"
});

/***/ }),

/***/ "../src/theme/colors/red.js":
/*!**********************************!*\
  !*** ../src/theme/colors/red.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  r500: "#BF2600",
  r400: "#DE350B",
  r300: "#FF5630",
  r200: "#FF7452",
  r100: "#FF8F73",
  r75: "#FFBDAD",
  r50: "#FFEBE5"
});

/***/ }),

/***/ "../src/theme/colors/yellow.js":
/*!*************************************!*\
  !*** ../src/theme/colors/yellow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  y500: "#FF8B00",
  y400: "#FF991F",
  y300: "#FFAB00",
  y200: "#FFC400",
  y100: "#FFE380",
  y75: "#FFF0B2",
  y50: "#FFFAE5"
});

/***/ }),

/***/ "../src/theme/index.js":
/*!*****************************!*\
  !*** ../src/theme/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _z_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z-index */ "../src/theme/z-index/index.js");
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "../src/theme/colors/index.js");
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shadows */ "../src/theme/shadows/index.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spacing */ "../src/theme/spacing/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transitions */ "../src/theme/transitions/index.js");
/* harmony import */ var _palette_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palette/create */ "../src/theme/palette/create.js");
/* harmony import */ var _typography_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/create */ "../src/theme/typography/create.js");







var palette = Object(_palette_create__WEBPACK_IMPORTED_MODULE_5__["default"])(_colors__WEBPACK_IMPORTED_MODULE_1__["default"]);
var typography = Object(_typography_create__WEBPACK_IMPORTED_MODULE_6__["default"])(palette);
var borderRadius = 3;
var theme = {
  zIndex: _z_index__WEBPACK_IMPORTED_MODULE_0__["default"],
  colors: _colors__WEBPACK_IMPORTED_MODULE_1__["default"],
  shadows: _shadows__WEBPACK_IMPORTED_MODULE_2__["default"],
  spacing: _spacing__WEBPACK_IMPORTED_MODULE_3__["default"],
  palette: palette,
  typography: typography,
  transitions: _transitions__WEBPACK_IMPORTED_MODULE_4__["default"],
  borderRadius: borderRadius
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "../src/theme/palette/create.js":
/*!**************************************!*\
  !*** ../src/theme/palette/create.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (colors) {
  var blue = colors.b400;
  var neutral = colors.n30;
  var green = colors.g400;
  var yellow = colors.y400;
  var red = colors.r400;
  var purple = colors.p400;
  return {
    primary: blue,
    backgrounds: {
      default: colors.n0,
      panel: colors.n20,
      brand: blue
    },
    text: {
      primary: colors.n900,
      secondary: colors.n100,
      heading: colors.n800,
      invert: colors.n0
    },
    status: {
      inProgress: blue,
      todo: neutral,
      added: green,
      moved: yellow,
      removed: red,
      new: purple
    },
    connectivity: {
      unavailable: neutral,
      available: green,
      busy: red,
      focus: purple
    },
    actions: {
      primary: blue,
      secondary: neutral,
      confirm: green,
      warning: yellow,
      remove: red,
      help: purple
    },
    messages: {
      success: green,
      warning: yellow,
      error: red,
      info: purple
    },
    prioriy: {
      trivial: neutral,
      minor: green,
      medium: yellow,
      major: red
    }
  };
});

/***/ }),

/***/ "../src/theme/shadows/index.js":
/*!*************************************!*\
  !*** ../src/theme/shadows/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  small: "0 0 1px rgba(9, 30, 66, 0.31), 0 4px 8px -2px rgba(9, 30, 66, 0.25)",
  medium: "0 0 1px rgba(9, 30, 66, 0.31), 0 8px 12px -4px rgba(9, 30, 66, 0.25)",
  large: "0 0 1px rgba(9, 30, 66, 0.31), 0 20px 32px -8px rgba(9, 30, 66, 0.25)"
});

/***/ }),

/***/ "../src/theme/spacing/index.js":
/*!*************************************!*\
  !*** ../src/theme/spacing/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unit = 8;
/* harmony default export */ __webpack_exports__["default"] = ({
  unit: unit,
  small: unit,
  medium: unit * 2,
  large: unit * 3
});

/***/ }),

/***/ "../src/theme/transitions/create.js":
/*!******************************************!*\
  !*** ../src/theme/transitions/create.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "../src/theme/transitions/timing.js");

var durations = {
  instant: 0,
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
  leaveWaiting: 195 + 10
};

var hasDuration = function hasDuration(duration) {
  return Object.keys(durations).includes(duration);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ["all"];
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : durations.standard;
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : durations.instant;
  var timing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _timing__WEBPACK_IMPORTED_MODULE_0__["default"].default;
  duration = hasDuration(duration) ? durations[duration] : duration;
  delay = hasDuration(delay) ? durations[delay] : delay;
  return props.map(function (prop) {
    return "".concat(prop, " ").concat(duration, "ms ").concat(delay, "ms ").concat(timing);
  }).join(", ");
});

/***/ }),

/***/ "../src/theme/transitions/index.js":
/*!*****************************************!*\
  !*** ../src/theme/transitions/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "../src/theme/transitions/create.js");
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timing */ "../src/theme/transitions/timing.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  create: _create__WEBPACK_IMPORTED_MODULE_0__["default"],
  timing: _timing__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../src/theme/transitions/timing.js":
/*!******************************************!*\
  !*** ../src/theme/transitions/timing.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fastOutSlowIn = "cubic-bezier(0.4, 0, 0.2, 1)";
var linearOutSlowIn = "cubic-bezier(0, 0, 0.2, 1)";
var fastOutLinearIn = "cubic-bezier(0.4, 0, 1, 1)";
/* harmony default export */ __webpack_exports__["default"] = ({
  fastOutSlowIn: fastOutSlowIn,
  linearOutSlowIn: linearOutSlowIn,
  fastOutLinearIn: fastOutLinearIn,
  default: fastOutSlowIn
});

/***/ }),

/***/ "../src/theme/typography/create.js":
/*!*****************************************!*\
  !*** ../src/theme/typography/create.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

/***/ }),

/***/ "../src/theme/z-index/index.js":
/*!*************************************!*\
  !*** ../src/theme/z-index/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  overlay: 100,
  drawer: 200,
  dialog: 300,
  flag: 400,
  popover: 500,
  tooltip: 600
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "react-jss");
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Reset */ "../src/components/Reset/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/theme */ "../src/theme/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector("#server-side-styles");

      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jss__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: _src_theme__WEBPACK_IMPORTED_MODULE_5__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Reset__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss":
/*!****************************!*\
  !*** external "react-jss" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map