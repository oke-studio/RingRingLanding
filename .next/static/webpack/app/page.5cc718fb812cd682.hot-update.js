"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/contact/contact-form.tsx":
/*!**************************************!*\
  !*** ./app/contact/contact-form.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction ContactForm() {\n    async function handleSubmit(event) {\n        event.preventDefault();\n        let data = {\n            email: String(event.target.email.value)\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-emerald-100  flex flex-col flex items-center md:flex-items-start w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            name: \"contact\",\n            \"data-netlify\": \"true\",\n            method: \"post\",\n            className: \"flex flex-col  md:pl-8 w-1/2  md:w-full \",\n            \"data-netlify-honeypot\": \"bot-field\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"hidden\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    required: true,\n                    placeholder: \"Enter your email Address\",\n                    id: \"email\",\n                    name: \"email\",\n                    className: \" bg-white rounded-md h-fit w-full text-center md:text-start md:w-4/5 p-2 mt-3 \"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-red-700 text-white self-center md:self-start md:flex flex-start  p-3 rounded-3xl w-fit mt-5 mb-7 \",\n                    children: \"Notify me for preorder \"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n            lineNumber: 17,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbnRhY3QvY29udGFjdC1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV5QjtBQUVWLFNBQVNDO0lBRXBCLGVBQWVDLGFBQWFDLEtBQVM7UUFDakNBLE1BQU1DO1FBQ04sSUFBSUMsT0FBSztZQUNMQyxPQUFPQyxPQUFPSixNQUFNSyxPQUFPRixNQUFNRztRQUNyQztJQUdKO0lBQ0YscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1QsNEVBQUNDO1lBQUtDLFVBQVVYO1lBQWNZLE1BQUs7WUFBVUMsZ0JBQWE7WUFBT0MsUUFBTztZQUFPTCxXQUFVO1lBQTJDTSx5QkFBc0I7OzhCQUNwSiw4REFBQ0M7b0JBQU1QLFdBQVU7Ozs7Ozs4QkFDakIsOERBQUNPO29CQUFNQyxNQUFLO29CQUFRQyxRQUFRO29CQUFDQyxhQUFZO29CQUEyQkMsSUFBRztvQkFBUVIsTUFBSztvQkFBT0gsV0FBVTs7Ozs7OzhCQUNyRyw4REFBQ1k7b0JBQU9KLE1BQUs7b0JBQVNSLFdBQVU7OEJBQXVHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt2SjtLQXBCd0JWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb250YWN0L2NvbnRhY3QtZm9ybS50c3g/MWUxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDphbnkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGRhdGE9e1xuICAgICAgICAgICAgZW1haWw6IFN0cmluZyhldmVudC50YXJnZXQuZW1haWwudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICBcbiAgICBcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTEwMCAgZmxleCBmbGV4LWNvbCBmbGV4IGl0ZW1zLWNlbnRlciBtZDpmbGV4LWl0ZW1zLXN0YXJ0IHctZnVsbFwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5hbWU9XCJjb250YWN0XCIgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgIG1kOnBsLTggdy0xLzIgIG1kOnctZnVsbCAnIGRhdGEtbmV0bGlmeS1ob25leXBvdD1cImJvdC1maWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2hpZGRlbicgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgZW1haWwgQWRkcmVzcycgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiY2xhc3NOYW1lPVwiIGJnLXdoaXRlIHJvdW5kZWQtbWQgaC1maXQgdy1mdWxsIHRleHQtY2VudGVyIG1kOnRleHQtc3RhcnQgbWQ6dy00LzUgcC0yIG10LTMgXCIvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0nYmctcmVkLTcwMCB0ZXh0LXdoaXRlIHNlbGYtY2VudGVyIG1kOnNlbGYtc3RhcnQgbWQ6ZmxleCBmbGV4LXN0YXJ0ICBwLTMgcm91bmRlZC0zeGwgdy1maXQgbXQtNSBtYi03ICc+Tm90aWZ5IG1lIGZvciBwcmVvcmRlciA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFjdEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImVtYWlsIiwiU3RyaW5nIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJuYW1lIiwiZGF0YS1uZXRsaWZ5IiwibWV0aG9kIiwiZGF0YS1uZXRsaWZ5LWhvbmV5cG90IiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsImlkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/contact/contact-form.tsx\n"));

/***/ })

});