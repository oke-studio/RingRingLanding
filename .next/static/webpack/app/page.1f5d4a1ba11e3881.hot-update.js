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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ContactForm() {\n    _s();\n    const [message, setmessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(message);\n    }, [\n        message\n    ]);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        let data = {\n            email: String(event.target.email.value)\n        };\n        fetch(\"/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\"\n            },\n            body: new URLSearchParams(data).toString()\n        }).then(()=>setmessage(!false)).catch((error)=>alert(error));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"   flex flex-col flex items-center md:flex-items-start w-full  h-full pb-0 lg:pt-5 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            name: \"contact\",\n            \"data-netlify\": \"true\",\n            method: \"POST\",\n            className: \"z-10 flex flex-col  md:pl-8 w-1/2  md:w-full \",\n            \"data-netlify-honeypot\": \"bot-field\",\n            autoComplete: \"off\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"hidden\",\n                    name: \"form-name\",\n                    value: \"contact\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    required: true,\n                    placeholder: \"Enter your email Address\",\n                    name: \"email\",\n                    className: \" bg-white rounded-md h-fit w-full text-center md:text-start md:w-4/5 p-2 mt-3 \"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"bg-[#BD4230] font-newhero font-normal text-white self-center md:self-start md:flex flex-start  p-3 border-b-4 border-b-[#5E2017] rounded-3xl w-fit mt-5 mb-7 \",\n                    children: \"Notify me for preorders \"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text\",\n                    children: \"Thank you, your email has been received\"\n                }, void 0, false, {\n                    fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 27\n                }, this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n            lineNumber: 29,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/daniel/Documents/GitHub/RingRingLanding/app/contact/contact-form.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"TsuR26uHo2vTizQP1e123bFv/b8=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbnRhY3QvY29udGFjdC1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUQ7QUFFbEMsU0FBU0c7O0lBRXRCLE1BQU0sQ0FBQ0MsU0FBUUMsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUV0Q0MsZ0RBQVNBLENBQUM7UUFDUkksUUFBUUMsSUFBSUg7SUFDZCxHQUFHO1FBQUNBO0tBQVE7SUFFVixlQUFlSSxhQUFhQyxLQUFTO1FBQ2pDQSxNQUFNQztRQUNOLElBQUlDLE9BQUs7WUFDTEMsT0FBT0MsT0FBT0osTUFBTUssT0FBT0YsTUFBTUc7UUFDckM7UUFDQUMsTUFBTSxLQUFLO1lBQ1RDLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBb0M7WUFDL0RDLE1BQU0sSUFBSUMsZ0JBQWdCVCxNQUFNVTtRQUNsQyxHQUNHQyxLQUFLLElBQU1qQixXQUFXLENBQUMsUUFDdkJrQixNQUFNLENBQUNDLFFBQVVDLE1BQU1EO0lBRTlCO0lBQ0YscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7a0JBQ1QsNEVBQUNDO1lBQUtDLE1BQUs7WUFBVUMsZ0JBQWE7WUFBT2IsUUFBTztZQUFPVSxXQUFVO1lBQWdESSx5QkFBc0I7WUFBWUMsY0FBYTtZQUFNQyxVQUFVekI7OzhCQUMxSyw4REFBQzBCO29CQUFNQyxNQUFNO29CQUFTTixNQUFLO29CQUFZZCxPQUFNOzs7Ozs7OEJBQzdDLDhEQUFDbUI7b0JBQU1DLE1BQUs7b0JBQVFDLFFBQVE7b0JBQUNDLGFBQVk7b0JBQTRCUixNQUFLO29CQUFPRixXQUFVOzs7Ozs7OEJBQzNGLDhEQUFDVztvQkFBT0gsTUFBSztvQkFBU1IsV0FBVTs4QkFBZ0s7Ozs7OztnQkFDL0x2Qix3QkFBUyw4REFBQ3NCO29CQUFJQyxXQUFVOzhCQUFPOzs7OzsyQkFBK0M7Ozs7Ozs7Ozs7OztBQU8vRjtHQW5Dd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29udGFjdC9jb250YWN0LWZvcm0udHN4PzFlMTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuXG4gIGNvbnN0IFttZXNzYWdlLHNldG1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICB9LCBbbWVzc2FnZV0pXG4gIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDphbnkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGRhdGE9e1xuICAgICAgICAgICAgZW1haWw6IFN0cmluZyhldmVudC50YXJnZXQuZW1haWwudmFsdWUpXG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgICAgIGJvZHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkudG9TdHJpbmcoKSxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiBzZXRtZXNzYWdlKCFmYWxzZSkpXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IpKTtcbiAgICBcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgICBmbGV4IGZsZXgtY29sIGZsZXggaXRlbXMtY2VudGVyIG1kOmZsZXgtaXRlbXMtc3RhcnQgdy1mdWxsICBoLWZ1bGwgcGItMCBsZzpwdC01IFwiPlxuICAgICAgICAgIDxmb3JtIG5hbWU9XCJjb250YWN0XCIgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiIG1ldGhvZD1cIlBPU1RcIiBjbGFzc05hbWU9J3otMTAgZmxleCBmbGV4LWNvbCAgbWQ6cGwtOCB3LTEvMiAgbWQ6dy1mdWxsICcgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSdoaWRkZW4nIG5hbWU9J2Zvcm0tbmFtZScgdmFsdWU9J2NvbnRhY3QnIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGVtYWlsIEFkZHJlc3MnICBuYW1lPVwiZW1haWxcImNsYXNzTmFtZT1cIiBiZy13aGl0ZSByb3VuZGVkLW1kIGgtZml0IHctZnVsbCB0ZXh0LWNlbnRlciBtZDp0ZXh0LXN0YXJ0IG1kOnctNC81IHAtMiBtdC0zIFwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J2JnLVsjQkQ0MjMwXSBmb250LW5ld2hlcm8gZm9udC1ub3JtYWwgdGV4dC13aGl0ZSBzZWxmLWNlbnRlciBtZDpzZWxmLXN0YXJ0IG1kOmZsZXggZmxleC1zdGFydCAgcC0zIGJvcmRlci1iLTQgYm9yZGVyLWItWyM1RTIwMTddIHJvdW5kZWQtM3hsIHctZml0IG10LTUgbWItNyAnPk5vdGlmeSBtZSBmb3IgcHJlb3JkZXJzIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHttZXNzYWdlPyA8ZGl2IGNsYXNzTmFtZT0ndGV4dCc+VGhhbmsgeW91LCB5b3VyIGVtYWlsIGhhcyBiZWVuIHJlY2VpdmVkPC9kaXY+IDonJ31cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbnRhY3RGb3JtIiwibWVzc2FnZSIsInNldG1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJlbWFpbCIsIlN0cmluZyIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJuYW1lIiwiZGF0YS1uZXRsaWZ5IiwiZGF0YS1uZXRsaWZ5LWhvbmV5cG90IiwiYXV0b0NvbXBsZXRlIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/contact/contact-form.tsx\n"));

/***/ })

});