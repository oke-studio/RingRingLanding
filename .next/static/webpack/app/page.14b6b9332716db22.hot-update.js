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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction ContactForm() {\n    async function handleSubmit(event) {\n        event.preventDefault();\n        let data = {\n            email: String(event.target.email.value)\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-emerald-100 flex flex-col flex items-center md:flex-items-start \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            name: \"contact\",\n            \"data-netlify\": \"true\",\n            method: \"post\",\n            className: \"f md:pl-8  \",\n            \"data-netlify-honeypot\": \"bot-field\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"hidden\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    required: true,\n                    placeholder: \"Enter your email Address\",\n                    id: \"email\",\n                    name: \"email\",\n                    className: \" bg-white rounded-md h-fit w-full text-center md:text-start md:w-4/5 p-2 mt-3 \"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-red-700 text-white flex flex-start  p-3 rounded-3xl w-fit mt-5 mb-7\",\n                    children: \"Notify me for preorder \"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n            lineNumber: 17,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbnRhY3QvY29udGFjdC1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUV5QjtBQUVWLFNBQVNDO0lBRXBCLGVBQWVDLGFBQWFDLEtBQVM7UUFDakNBLE1BQU1DO1FBQ04sSUFBSUMsT0FBSztZQUNMQyxPQUFPQyxPQUFPSixNQUFNSyxPQUFPRixNQUFNRztRQUNyQztJQUdKO0lBQ0YscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1QsNEVBQUNDO1lBQUtDLFVBQVVYO1lBQWNZLE1BQUs7WUFBVUMsZ0JBQWE7WUFBT0MsUUFBTztZQUFPTCxXQUFVO1lBQWNNLHlCQUFzQjs7OEJBQ3ZILDhEQUFDQztvQkFBTVAsV0FBVTs7Ozs7OzhCQUNqQiw4REFBQ087b0JBQU1DLE1BQUs7b0JBQVFDLFFBQVE7b0JBQUNDLGFBQVk7b0JBQTJCQyxJQUFHO29CQUFRUixNQUFLO29CQUFPSCxXQUFVOzs7Ozs7OEJBQ3JHLDhEQUFDWTtvQkFBT0osTUFBSztvQkFBU1IsV0FBVTs4QkFBeUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpIO0tBbkJ3QlYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRhY3QvY29udGFjdC1mb3JtLnRzeD8xZTEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50OmFueSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgZGF0YT17XG4gICAgICAgICAgICBlbWFpbDogU3RyaW5nKGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgIFxuICAgIFxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtMTAwIGZsZXggZmxleC1jb2wgZmxleCBpdGVtcy1jZW50ZXIgbWQ6ZmxleC1pdGVtcy1zdGFydCBcIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBuYW1lPVwiY29udGFjdFwiIGRhdGEtbmV0bGlmeT1cInRydWVcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPSdmIG1kOnBsLTggICcgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naGlkZGVuJyAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBlbWFpbCBBZGRyZXNzJyBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCJjbGFzc05hbWU9XCIgYmctd2hpdGUgcm91bmRlZC1tZCBoLWZpdCB3LWZ1bGwgdGV4dC1jZW50ZXIgbWQ6dGV4dC1zdGFydCBtZDp3LTQvNSBwLTIgbXQtMyBcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPSdiZy1yZWQtNzAwIHRleHQtd2hpdGUgZmxleCBmbGV4LXN0YXJ0ICBwLTMgcm91bmRlZC0zeGwgdy1maXQgbXQtNSBtYi03Jz5Ob3RpZnkgbWUgZm9yIHByZW9yZGVyIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWN0Rm9ybSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZW1haWwiLCJTdHJpbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsIm5hbWUiLCJkYXRhLW5ldGxpZnkiLCJtZXRob2QiLCJkYXRhLW5ldGxpZnktaG9uZXlwb3QiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiaWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/contact/contact-form.tsx\n"));

/***/ })

});