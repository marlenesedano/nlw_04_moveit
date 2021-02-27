webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\n\nvar _jsxFileName = \"/media/marlene/Novo volume/NLW_04_Moveit/moveit/src/contexts/CountdownContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countdownTimeout;\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(25 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setHasFinished(false);\n    setTime(0.1 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      startCountdown: startCountdown,\n      resetCountdown: resetCountdown\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 9\n  }, this);\n}\n\n_s(CountdownProvider, \"gOwweAy347QjoNh2krWNMVrWZHE=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4P2ZlOWQiXSwibmFtZXMiOlsiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93bkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQWVPLElBQU1DLGdCQUFnQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXRDO0FBRUEsU0FBU0MsaUJBQVQsT0FBOEQ7QUFBQTs7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDOztBQUFBLG9CQUVwQ0Msd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FGMEI7QUFBQSxNQUUxREMsaUJBRjBELGVBRTFEQSxpQkFGMEQ7O0FBQUEsa0JBSXpDQyxzREFBUSxDQUFDLEtBQUssRUFBTixDQUppQztBQUFBLE1BSTFEQyxJQUowRDtBQUFBLE1BSXBEQyxPQUpvRDs7QUFBQSxtQkFLakNGLHNEQUFRLENBQUMsS0FBRCxDQUx5QjtBQUFBLE1BSzFERyxRQUwwRDtBQUFBLE1BS2hEQyxXQUxnRDs7QUFBQSxtQkFNM0JKLHNEQUFRLENBQUMsS0FBRCxDQU5tQjtBQUFBLE1BTTFESyxXQU4wRDtBQUFBLE1BTTdDQyxjQU42Qzs7QUFRakUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7O0FBRUEsV0FBU1UsY0FBVCxHQUF5QjtBQUNyQlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNRLGNBQVQsR0FBeUI7QUFDckJDLGdCQUFZLENBQUNyQixnQkFBRCxDQUFaO0FBQ0FZLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUUsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUosV0FBTyxDQUFDLE1BQUssRUFBTixDQUFQO0FBQ0g7O0FBRURZLHlEQUFTLENBQUMsWUFBSztBQUNYLFFBQUdYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXRCLEVBQXlCO0FBQ3JCVCxzQkFBZ0IsR0FBR3VCLFVBQVUsQ0FBQyxZQUFJO0FBQzlCYixlQUFPLENBQUNELElBQUksR0FBRSxDQUFQLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdILEtBSkQsTUFJTyxJQUFHRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF4QixFQUEwQjtBQUM3Qkssb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsdUJBQWlCO0FBRXBCO0FBQ0osR0FYUSxFQVdOLENBQUNJLFFBQUQsRUFBV0YsSUFBWCxDQVhNLENBQVQ7QUFhQSxzQkFDSSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFDOUJNLGFBQU8sRUFBUEEsT0FEOEI7QUFFOUJHLGFBQU8sRUFBUEEsT0FGOEI7QUFHOUJMLGlCQUFXLEVBQVhBLFdBSDhCO0FBSTlCRixjQUFRLEVBQVJBLFFBSjhCO0FBSzlCUSxvQkFBYyxFQUFkQSxjQUw4QjtBQU05QkMsb0JBQWMsRUFBZEE7QUFOOEIsS0FBbEM7QUFBQSxjQVFLaEI7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0EvQ2VELGlCOztLQUFBQSxpQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dCc7XG5cbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcblxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhe1xuICAgIG1pbnV0ZXM6IG51bWJlcjtcbiAgICBzZWNvbmRzOiBudW1iZXI7XG4gICAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XG4gICAgc3RhcnRDb3VudGRvd246ICgpID0+IHZvaWQ7XG4gICAgcmVzZXRDb3VudGRvd246ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3Bze1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSlcblxuZXhwb3J0IGZ1bmN0aW9uIENvdW50ZG93blByb3ZpZGVyKHtjaGlsZHJlbn06IENvdW50ZG93blByb3ZpZGVyUHJvcHMpe1xuXG4gICAgY29uc3Qge3N0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KVxuXG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMjUgKiA2MCk7XG4gICAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XG5cbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpe1xuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XG4gICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xuICAgICAgICBzZXRUaW1lKDAuMSAqNjApO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgaWYoaXNBY3RpdmUgJiYgdGltZSA+IDAgKXtcbiAgICAgICAgICAgIGNvdW50ZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0xKTtcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH0gZWxzZSBpZihpc0FjdGl2ZSAmJiB0aW1lID09PSAwKXtcbiAgICAgICAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xuICAgICAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgICAgc2Vjb25kcyxcbiAgICAgICAgICAgIGhhc0ZpbmlzaGVkLFxuICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICBzdGFydENvdW50ZG93bixcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db3VudGRvd25Db250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContext.tsx\n");

/***/ })

})