"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/projects/page",{

/***/ "(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx":
/*!**********************************************!*\
  !*** ./src/components/Hero/ProjectsHero.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectsHero: function() { return /* binding */ ProjectsHero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @providers/MediaQueryProvider */ \"(app-pages-browser)/./src/providers/MediaQueryProvider/index.ts\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Icon */ \"(app-pages-browser)/./src/components/Icon/index.ts\");\n/* __next_internal_client_entry_do_not_use__ ProjectsHero auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ProjectItem = (param)=>{\n    let { src, alt, title, description, centerIcon } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-2 \".concat(centerIcon ? \"items-center\" : \"items-start\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                src: src,\n                alt: alt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-bold text-lg\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            description.map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: paragraph\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectItem;\nconst ProjectsHero = ()=>{\n    _s();\n    const { isMedium, isLarge, isXLarge, isSmall } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_MediaQueryProvider__WEBPACK_IMPORTED_MODULE_2__.MediaQueryContext);\n    const serviceClass = \"w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16\";\n    const outerHeroClass = \"flex flex-col gap-12 items-center\";\n    const innerHeroClass = \"flex flex-col gap-4 text-center\";\n    // Responsive grid layout\n    const gridClass = \"\\n    grid\\n    gap-8\\n    grid-cols-1\\n    \".concat(isLarge || isXLarge ? \"lg:grid-cols-2\" : \"grid-cols-1\", \"\\n  \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: serviceClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: outerHeroClass,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: innerHeroClass,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Our Services\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg\",\n                            children: \"Through comprehensive services including innovative software solutions, digital strategy execution, professional consulting, and reliable support, we enable organizations to succeed in today's evolving digital landscape and fulfill their strategic visions.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: gridClass,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: \"/DevIcon.png\",\n                        alt: \"Code\",\n                        title: \"Cloud Native Solutions\",\n                        description: [\n                            \"We design and build applications that are scalable, resilient, and optimized for the cloud using platforms like AWS (Amazon Web Services).\",\n                            \"By harnessing cloud-native technologies, we ensure your applications are agile and well-suited for dynamic business environments.\"\n                        ],\n                        centerIcon: !isMedium\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: \"/DesignerIcon.png\",\n                        alt: \"Code\",\n                        title: \"Distributed Systems\",\n                        description: [\n                            \"We excel in designing and implementing distributed systems that combine microservices architecture with essential common services.\",\n                            \"By adopting distributed systems, we enable efficient and adaptable solutions that enhance overall operational effectiveness.\"\n                        ],\n                        centerIcon: !isMedium\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: \"/FileIcon.png\",\n                        alt: \"Code\",\n                        title: \"Custom Software Development\",\n                        description: [\n                            \"We create bespoke software solutions tailored to your specific business requirements using modern technology stacks such as React.\",\n                            \"Our development process ensures high performance and a seamless user experience.\"\n                        ],\n                        centerIcon: !isMedium\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectItem, {\n                        src: \"/CameraIcon.png\",\n                        alt: \"Code\",\n                        title: \"Technical Consulting\",\n                        description: [\n                            \"Our consultants offer strategic advice to help you navigate complex technology landscapes.\",\n                            \"We provide insights on technology adoption, project planning, and digital transformation, ensuring you make informed decisions.\"\n                        ],\n                        centerIcon: !isMedium\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Coding Projects\\\\Portfolio website\\\\portfolio-website\\\\src\\\\components\\\\Hero\\\\ProjectsHero.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsHero, \"IJaQ+yuVj7aUaVodkT0vJcP/RZc=\");\n_c1 = ProjectsHero;\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectItem\");\n$RefreshReg$(_c1, \"ProjectsHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtQztBQUMrQjtBQUUxQjtBQVV4QyxNQUFNRyxjQUFjO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQW9CO0lBQ2pGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLHVCQUFtRSxPQUE1Q0YsYUFBYSxpQkFBaUI7OzBCQUNuRSw4REFBQ04sa0RBQUlBO2dCQUFDRSxLQUFLQTtnQkFBS0MsS0FBS0E7Ozs7OzswQkFDckIsOERBQUNNO2dCQUFHRCxXQUFVOzBCQUFxQko7Ozs7OztZQUNsQ0MsWUFBWUssR0FBRyxDQUFDLENBQUNDLFdBQVdDLHNCQUMzQiw4REFBQ0M7OEJBQWVGO21CQUFSQzs7Ozs7Ozs7Ozs7QUFJaEI7S0FWTVg7QUFZQyxNQUFNYSxlQUFlOztJQUMxQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHcEIsaURBQVVBLENBQUNDLDRFQUFpQkE7SUFFN0UsTUFBTW9CLGVBQWU7SUFDckIsTUFBTUMsaUJBQWlCO0lBQ3ZCLE1BQU1DLGlCQUFpQjtJQUV2Qix5QkFBeUI7SUFDekIsTUFBTUMsWUFBWSwrQ0FJeUMsT0FBdkROLFdBQVdDLFdBQVcsbUJBQW1CLGVBQWM7SUFHM0QscUJBQ0UsOERBQUNWO1FBQUlDLFdBQVdXOzswQkFDZCw4REFBQ1o7Z0JBQUlDLFdBQVdZOzBCQUNkLDRFQUFDYjtvQkFBSUMsV0FBV2E7O3NDQUNkLDhEQUFDRTs0QkFBR2YsV0FBVTtzQ0FBcUI7Ozs7OztzQ0FDbkMsOERBQUNLOzRCQUFFTCxXQUFVO3NDQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFPM0IsOERBQUNEO2dCQUFJQyxXQUFXYzs7a0NBQ2QsOERBQUNyQjt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsYUFBYTs0QkFDWDs0QkFDQTt5QkFDRDt3QkFDREMsWUFBWSxDQUFDUzs7Ozs7O2tDQUVmLDhEQUFDZDt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsYUFBYTs0QkFDWDs0QkFDQTt5QkFDRDt3QkFDREMsWUFBWSxDQUFDUzs7Ozs7O2tDQUVmLDhEQUFDZDt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsYUFBYTs0QkFDWDs0QkFDQTt5QkFDRDt3QkFDREMsWUFBWSxDQUFDUzs7Ozs7O2tDQUVmLDhEQUFDZDt3QkFDQ0MsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTTt3QkFDTkMsYUFBYTs0QkFDWDs0QkFDQTt5QkFDRDt3QkFDREMsWUFBWSxDQUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZCLEVBQUU7R0F2RVdEO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlcm8vUHJvamVjdHNIZXJvLnRzeD8xZDU2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lZGlhUXVlcnlDb250ZXh0IH0gZnJvbSAnQHByb3ZpZGVycy9NZWRpYVF1ZXJ5UHJvdmlkZXInO1xyXG5cclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0Bjb21wb25lbnRzL0ljb24nO1xyXG5cclxuaW50ZXJmYWNlIFByb2plY3RJdGVtUHJvcHMge1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIGFsdDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZ1tdO1xyXG4gIGNlbnRlckljb246IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RJdGVtID0gKHsgc3JjLCBhbHQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2VudGVySWNvbiB9OiBQcm9qZWN0SXRlbVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBnYXAtMiAke2NlbnRlckljb24gPyAnaXRlbXMtY2VudGVyJyA6ICdpdGVtcy1zdGFydCd9YH0+XHJcbiAgICAgIDxJY29uIHNyYz17c3JjfSBhbHQ9e2FsdH0gLz5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnXCI+e3RpdGxlfTwvaDM+XHJcbiAgICAgIHtkZXNjcmlwdGlvbi5tYXAoKHBhcmFncmFwaCwgaW5kZXgpID0+IChcclxuICAgICAgICA8cCBrZXk9e2luZGV4fT57cGFyYWdyYXBofTwvcD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzSGVybyA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzTWVkaXVtLCBpc0xhcmdlLCBpc1hMYXJnZSwgaXNTbWFsbCB9ID0gdXNlQ29udGV4dChNZWRpYVF1ZXJ5Q29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHNlcnZpY2VDbGFzcyA9ICd3LTQvNSBmbGV4IGZsZXgtY29sIG14LWF1dG8gbWItMzIgbXQtMTIgZ2FwLTE2JztcclxuICBjb25zdCBvdXRlckhlcm9DbGFzcyA9ICdmbGV4IGZsZXgtY29sIGdhcC0xMiBpdGVtcy1jZW50ZXInO1xyXG4gIGNvbnN0IGlubmVySGVyb0NsYXNzID0gJ2ZsZXggZmxleC1jb2wgZ2FwLTQgdGV4dC1jZW50ZXInO1xyXG5cclxuICAvLyBSZXNwb25zaXZlIGdyaWQgbGF5b3V0XHJcbiAgY29uc3QgZ3JpZENsYXNzID0gYFxyXG4gICAgZ3JpZFxyXG4gICAgZ2FwLThcclxuICAgIGdyaWQtY29scy0xXHJcbiAgICAke2lzTGFyZ2UgfHwgaXNYTGFyZ2UgPyAnbGc6Z3JpZC1jb2xzLTInIDogJ2dyaWQtY29scy0xJ31cclxuICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VDbGFzc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdXRlckhlcm9DbGFzc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lubmVySGVyb0NsYXNzfT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5PdXIgU2VydmljZXM8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICBUaHJvdWdoIGNvbXByZWhlbnNpdmUgc2VydmljZXMgaW5jbHVkaW5nIGlubm92YXRpdmUgc29mdHdhcmUgc29sdXRpb25zLCBkaWdpdGFsIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbiwgcHJvZmVzc2lvbmFsIGNvbnN1bHRpbmcsIGFuZCByZWxpYWJsZSBzdXBwb3J0LCB3ZSBlbmFibGUgb3JnYW5pemF0aW9ucyB0b1xyXG4gICAgICAgICAgICBzdWNjZWVkIGluIHRvZGF5J3MgZXZvbHZpbmcgZGlnaXRhbCBsYW5kc2NhcGUgYW5kIGZ1bGZpbGwgdGhlaXIgc3RyYXRlZ2ljIHZpc2lvbnMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZENsYXNzfT5cclxuICAgICAgICA8UHJvamVjdEl0ZW1cclxuICAgICAgICAgIHNyYz0nL0Rldkljb24ucG5nJ1xyXG4gICAgICAgICAgYWx0PSdDb2RlJ1xyXG4gICAgICAgICAgdGl0bGU9J0Nsb3VkIE5hdGl2ZSBTb2x1dGlvbnMnXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17W1xyXG4gICAgICAgICAgICAnV2UgZGVzaWduIGFuZCBidWlsZCBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgc2NhbGFibGUsIHJlc2lsaWVudCwgYW5kIG9wdGltaXplZCBmb3IgdGhlIGNsb3VkIHVzaW5nIHBsYXRmb3JtcyBsaWtlIEFXUyAoQW1hem9uIFdlYiBTZXJ2aWNlcykuJyxcclxuICAgICAgICAgICAgJ0J5IGhhcm5lc3NpbmcgY2xvdWQtbmF0aXZlIHRlY2hub2xvZ2llcywgd2UgZW5zdXJlIHlvdXIgYXBwbGljYXRpb25zIGFyZSBhZ2lsZSBhbmQgd2VsbC1zdWl0ZWQgZm9yIGR5bmFtaWMgYnVzaW5lc3MgZW52aXJvbm1lbnRzLicsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgY2VudGVySWNvbj17IWlzTWVkaXVtfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFByb2plY3RJdGVtXHJcbiAgICAgICAgICBzcmM9Jy9EZXNpZ25lckljb24ucG5nJ1xyXG4gICAgICAgICAgYWx0PSdDb2RlJ1xyXG4gICAgICAgICAgdGl0bGU9J0Rpc3RyaWJ1dGVkIFN5c3RlbXMnXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17W1xyXG4gICAgICAgICAgICAnV2UgZXhjZWwgaW4gZGVzaWduaW5nIGFuZCBpbXBsZW1lbnRpbmcgZGlzdHJpYnV0ZWQgc3lzdGVtcyB0aGF0IGNvbWJpbmUgbWljcm9zZXJ2aWNlcyBhcmNoaXRlY3R1cmUgd2l0aCBlc3NlbnRpYWwgY29tbW9uIHNlcnZpY2VzLicsXHJcbiAgICAgICAgICAgICdCeSBhZG9wdGluZyBkaXN0cmlidXRlZCBzeXN0ZW1zLCB3ZSBlbmFibGUgZWZmaWNpZW50IGFuZCBhZGFwdGFibGUgc29sdXRpb25zIHRoYXQgZW5oYW5jZSBvdmVyYWxsIG9wZXJhdGlvbmFsIGVmZmVjdGl2ZW5lc3MuJyxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBjZW50ZXJJY29uPXshaXNNZWRpdW19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UHJvamVjdEl0ZW1cclxuICAgICAgICAgIHNyYz0nL0ZpbGVJY29uLnBuZydcclxuICAgICAgICAgIGFsdD0nQ29kZSdcclxuICAgICAgICAgIHRpdGxlPSdDdXN0b20gU29mdHdhcmUgRGV2ZWxvcG1lbnQnXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17W1xyXG4gICAgICAgICAgICAnV2UgY3JlYXRlIGJlc3Bva2Ugc29mdHdhcmUgc29sdXRpb25zIHRhaWxvcmVkIHRvIHlvdXIgc3BlY2lmaWMgYnVzaW5lc3MgcmVxdWlyZW1lbnRzIHVzaW5nIG1vZGVybiB0ZWNobm9sb2d5IHN0YWNrcyBzdWNoIGFzIFJlYWN0LicsXHJcbiAgICAgICAgICAgICdPdXIgZGV2ZWxvcG1lbnQgcHJvY2VzcyBlbnN1cmVzIGhpZ2ggcGVyZm9ybWFuY2UgYW5kIGEgc2VhbWxlc3MgdXNlciBleHBlcmllbmNlLicsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgY2VudGVySWNvbj17IWlzTWVkaXVtfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFByb2plY3RJdGVtXHJcbiAgICAgICAgICBzcmM9Jy9DYW1lcmFJY29uLnBuZydcclxuICAgICAgICAgIGFsdD0nQ29kZSdcclxuICAgICAgICAgIHRpdGxlPSdUZWNobmljYWwgQ29uc3VsdGluZydcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtbXHJcbiAgICAgICAgICAgICdPdXIgY29uc3VsdGFudHMgb2ZmZXIgc3RyYXRlZ2ljIGFkdmljZSB0byBoZWxwIHlvdSBuYXZpZ2F0ZSBjb21wbGV4IHRlY2hub2xvZ3kgbGFuZHNjYXBlcy4nLFxyXG4gICAgICAgICAgICAnV2UgcHJvdmlkZSBpbnNpZ2h0cyBvbiB0ZWNobm9sb2d5IGFkb3B0aW9uLCBwcm9qZWN0IHBsYW5uaW5nLCBhbmQgZGlnaXRhbCB0cmFuc2Zvcm1hdGlvbiwgZW5zdXJpbmcgeW91IG1ha2UgaW5mb3JtZWQgZGVjaXNpb25zLicsXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgICAgY2VudGVySWNvbj17IWlzTWVkaXVtfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJNZWRpYVF1ZXJ5Q29udGV4dCIsIkljb24iLCJQcm9qZWN0SXRlbSIsInNyYyIsImFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjZW50ZXJJY29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsInAiLCJQcm9qZWN0c0hlcm8iLCJpc01lZGl1bSIsImlzTGFyZ2UiLCJpc1hMYXJnZSIsImlzU21hbGwiLCJzZXJ2aWNlQ2xhc3MiLCJvdXRlckhlcm9DbGFzcyIsImlubmVySGVyb0NsYXNzIiwiZ3JpZENsYXNzIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Hero/ProjectsHero.tsx\n"));

/***/ })

});