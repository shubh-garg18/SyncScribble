/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./client/src/middle/components/modal/animations/ModalManager.animations.ts":
/*!**********************************************************************************!*\
  !*** ./client/src/middle/components/modal/animations/ModalManager.animations.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgAnimation\": () => (/* binding */ bgAnimation),\n/* harmony export */   \"modalAnimation\": () => (/* binding */ modalAnimation)\n/* harmony export */ });\n/* harmony import */ var _client_src_middle_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/client/src/middle/constants/easings */ \"./client/src/middle/constants/easings.ts\");\n\nconst transition = {\n    ease: _client_src_middle_constants_easings__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EASE\n};\nconst bgAnimation = {\n    closed: {\n        opacity: 0,\n        transition\n    },\n    opened: {\n        opacity: 1,\n        transition\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100,\n        transition\n    },\n    opened: {\n        y: 0,\n        transition\n    },\n    exited: {\n        y: 100,\n        transition\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9FO0FBRXBFLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUM7SUFBQ0MsSUFBSSxFQUFFRiw4RUFBWTtBQUFDLENBQUM7QUFFbEMsS0FBSyxDQUFDRyxXQUFXLEdBQUcsQ0FBQztJQUMxQkMsTUFBTSxFQUFFLENBQUM7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUosVUFBVTtJQUFDLENBQUM7SUFDbENLLE1BQU0sRUFBRSxDQUFDO1FBQUNELE9BQU8sRUFBRSxDQUFDO1FBQUVKLFVBQVU7SUFBQyxDQUFDO0FBQ3BDLENBQUM7QUFFTSxLQUFLLENBQUNNLGNBQWMsR0FBRyxDQUFDO0lBQzdCSCxNQUFNLEVBQUUsQ0FBQztRQUFDSSxDQUFDLEdBQUcsR0FBRztRQUFFUCxVQUFVO0lBQUMsQ0FBQztJQUMvQkssTUFBTSxFQUFFLENBQUM7UUFBQ0UsQ0FBQyxFQUFFLENBQUM7UUFBRVAsVUFBVTtJQUFDLENBQUM7SUFDNUJRLE1BQU0sRUFBRSxDQUFDO1FBQUNELENBQUMsRUFBRSxHQUFHO1FBQUVQLFVBQVU7SUFBQyxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jbGllbnQvc3JjL21pZGRsZS9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHM/OWI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX0VBU0UgfSBmcm9tIFwiQC9jbGllbnQvc3JjL21pZGRsZS9jb25zdGFudHMvZWFzaW5nc1wiO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHsgZWFzZTogREVGQVVMVF9FQVNFIH07XHJcblxyXG5leHBvcnQgY29uc3QgYmdBbmltYXRpb24gPSB7XHJcbiAgY2xvc2VkOiB7IG9wYWNpdHk6IDAsIHRyYW5zaXRpb24gfSxcclxuICBvcGVuZWQ6IHsgb3BhY2l0eTogMSwgdHJhbnNpdGlvbiB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsQW5pbWF0aW9uID0ge1xyXG4gIGNsb3NlZDogeyB5OiAtMTAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgb3BlbmVkOiB7IHk6IDAsIHRyYW5zaXRpb24gfSxcclxuICBleGl0ZWQ6IHsgeTogMTAwLCB0cmFuc2l0aW9uIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0VBU0UiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImJnQW5pbWF0aW9uIiwiY2xvc2VkIiwib3BhY2l0eSIsIm9wZW5lZCIsIm1vZGFsQW5pbWF0aW9uIiwieSIsImV4aXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/middle/components/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "./client/src/middle/components/modal/components/ModalManager.tsx":
/*!************************************************************************!*\
  !*** ./client/src/middle/components/modal/components/ModalManager.tsx ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_src_middle_recoil_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/client/src/middle/recoil/modal */ \"./client/src/middle/recoil/modal/index.ts\");\n/* harmony import */ var _portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/components/Portal */ \"./client/src/middle/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"./client/src/middle/components/modal/animations/ModalManager.animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened , modal  }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_client_src_middle_recoil_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const { 0: portalNode , 1: setPortalNode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!portalNode) {\n            const node = document.getElementById(\"portal\");\n            if (node) setPortalNode(node);\n            return;\n        }\n        if (opened) {\n            portalNode.style.pointerEvents = \"all\";\n        } else {\n            portalNode.style.pointerEvents = \"none\";\n        }\n    }, [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                })\n            ,\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation()\n                    ,\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\client\\\\src\\\\middle\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\client\\\\src\\\\middle\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\client\\\\src\\\\middle\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\client\\\\src\\\\middle\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFFWTtBQUNoQjtBQUVpQjtBQUVMO0FBSUw7QUFFOUMsS0FBSyxDQUFDUyxZQUFZLE9BQVMsQ0FBQztJQUMxQixLQUFLLEVBQUUsQ0FBQyxDQUFDQyxNQUFNLEdBQUVDLEtBQUssRUFBQyxDQUFDLEVBQUVDLFFBQVEsSUFBSVIsc0RBQWMsQ0FBQ0MsdUVBQVM7SUFFOUQsS0FBSyxNQUFFUSxVQUFVLE1BQUVDLGFBQWEsTUFBSWIsK0NBQVE7SUFFNUNELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBR2EsVUFBVSxFQUFFLENBQUM7WUFDaEIsS0FBSyxDQUFDRSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVE7WUFDN0MsRUFBRSxFQUFFRixJQUFJLEVBQUVELGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7WUFDOUIsTUFBTTtRQUNSLENBQUM7UUFFRCxFQUFFLEVBQUVMLE1BQU0sRUFBRSxDQUFDO1lBQ1hHLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBSyxLQUFDO1FBQ3pDLENBQUMsTUFBTSxDQUFDO1lBQ05OLFVBQVUsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBTSxNQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ1Q7UUFBQUEsTUFBTTtRQUFFRyxVQUFVO0lBQUEsQ0FBQyxDQUFDLENBQUM7SUFFekIsTUFBTSw2RUFDSFAsaUVBQU07OEZBQ0pILHFEQUFVO1lBQ1RrQixTQUFTLEVBQUMsQ0FBOEU7WUFDeEZDLE9BQU8sTUFBUVYsUUFBUSxDQUFDLENBQUM7b0JBQUNELEtBQUs7b0JBQVNELE1BQU0sRUFBRSxLQUFLO2dCQUFDLENBQUM7O1lBQ3ZEYSxRQUFRLEVBQUVoQiw0RUFBVztZQUNyQmlCLE9BQU8sRUFBQyxDQUFRO1lBQ2hCQyxPQUFPLEVBQUVmLE1BQU0sR0FBRyxDQUFRLFVBQUcsQ0FBUTtrR0FFcENSLDBEQUFlOzBCQUNiUSxNQUFNLGdGQUNKUCxxREFBVTtvQkFDVG9CLFFBQVEsRUFBRWYsK0VBQWM7b0JBQ3hCZ0IsT0FBTyxFQUFDLENBQVE7b0JBQ2hCQyxPQUFPLEVBQUMsQ0FBUTtvQkFDaEJDLElBQUksRUFBQyxDQUFRO29CQUNiSixPQUFPLEdBQUdLLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxlQUFlOztvQkFDakNQLFNBQVMsRUFBQyxDQUFLOzhCQUVkVixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEIsQ0FBQztBQUVELGlFQUFlRixZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jbGllbnQvc3JjL21pZGRsZS9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyLnRzeD9jMzcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgbW9kYWxBdG9tIGZyb20gXCJAL2NsaWVudC9zcmMvbWlkZGxlL3JlY29pbC9tb2RhbFwiO1xyXG5cclxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vLi4vcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgYmdBbmltYXRpb24sXHJcbiAgbW9kYWxBbmltYXRpb24sXHJcbn0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnNcIjtcclxuXHJcbmNvbnN0IE1vZGFsTWFuYWdlciA9ICgpID0+IHtcclxuICBjb25zdCBbeyBvcGVuZWQsIG1vZGFsIH0sIHNldE1vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XHJcblxyXG4gIGNvbnN0IFtwb3J0YWxOb2RlLCBzZXRQb3J0YWxOb2RlXSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50PigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFwb3J0YWxOb2RlKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcnRhbFwiKTtcclxuICAgICAgaWYgKG5vZGUpIHNldFBvcnRhbE5vZGUobm9kZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgIHBvcnRhbE5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb3J0YWxOb2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICB9LCBbb3BlbmVkLCBwb3J0YWxOb2RlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UG9ydGFsPlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotNDAgZmxleCBtaW4taC1mdWxsIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2svODBcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsKHsgbW9kYWw6IDw+PC8+LCBvcGVuZWQ6IGZhbHNlIH0pfVxyXG4gICAgICAgIHZhcmlhbnRzPXtiZ0FuaW1hdGlvbn1cclxuICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgICBhbmltYXRlPXtvcGVuZWQgPyBcIm9wZW5lZFwiIDogXCJjbG9zZWRcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICB7b3BlbmVkICYmIChcclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB2YXJpYW50cz17bW9kYWxBbmltYXRpb259XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgICAgICAgICAgYW5pbWF0ZT1cIm9wZW5lZFwiXHJcbiAgICAgICAgICAgICAgZXhpdD1cImV4aXRlZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttb2RhbH1cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9Qb3J0YWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsTWFuYWdlcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlUmVjb2lsU3RhdGUiLCJtb2RhbEF0b20iLCJQb3J0YWwiLCJiZ0FuaW1hdGlvbiIsIm1vZGFsQW5pbWF0aW9uIiwiTW9kYWxNYW5hZ2VyIiwib3BlbmVkIiwibW9kYWwiLCJzZXRNb2RhbCIsInBvcnRhbE5vZGUiLCJzZXRQb3J0YWxOb2RlIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/middle/components/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "./client/src/middle/components/portal/components/Portal.ts":
/*!******************************************************************!*\
  !*** ./client/src/middle/components/portal/components/Portal.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children  })=>{\n    const { 0: portal , 1: setPortal  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const node = document.getElementById(\"portal\");\n        if (node) setPortal(node);\n    }, []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9jb21wb25lbnRzL3BvcnRhbC9jb21wb25lbnRzL1BvcnRhbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUVIO0FBRXhDLEtBQUssQ0FBQ0csTUFBTSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUE0QyxDQUFDLEdBQUssQ0FBQztJQUMzRSxLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUTtJQUVwQ0QsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDTyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQVE7UUFDN0MsRUFBRSxFQUFFRixJQUFJLEVBQUVELFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxFQUFFLEdBQUdGLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtJQUV4QixNQUFNLENBQUNILHVEQUFZLENBQUNFLFFBQVEsRUFBRUMsTUFBTTtBQUN0QyxDQUFDO0FBRUQsaUVBQWVGLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL2NsaWVudC9zcmMvbWlkZGxlL2NvbXBvbmVudHMvcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsLnRzPzE1NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgUG9ydGFsID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIH0pID0+IHtcclxuICBjb25zdCBbcG9ydGFsLCBzZXRQb3J0YWxdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQ+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0YWxcIik7XHJcbiAgICBpZiAobm9kZSkgc2V0UG9ydGFsKG5vZGUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFwb3J0YWwpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBwb3J0YWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVQb3J0YWwiLCJQb3J0YWwiLCJjaGlsZHJlbiIsInBvcnRhbCIsInNldFBvcnRhbCIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/middle/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "./client/src/middle/constants/easings.ts":
/*!************************************************!*\
  !*** ./client/src/middle/constants/easings.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DEFAULT_EASE\": () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9jb25zdGFudHMvZWFzaW5ncy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxZQUFZLEdBQUcsQ0FBQztBQUFBLE9BQUc7QUFBRSxRQUFJO0tBQUcsSUFBSTtBQUFFLE9BQUc7QUFBQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlnaWJvYXJkLy4vY2xpZW50L3NyYy9taWRkbGUvY29uc3RhbnRzL2Vhc2luZ3MudHM/ZThiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREVGQVVMVF9FQVNFID0gWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV07XHJcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0VBU0UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/middle/constants/easings.ts\n");

/***/ }),

/***/ "./client/src/middle/recoil/modal/index.ts":
/*!*************************************************!*\
  !*** ./client/src/middle/recoil/modal/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useModal\": () => (/* reexport safe */ _modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.atom */ \"./client/src/middle/recoil/modal/modal.atom.tsx\");\n/* harmony import */ var _modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.hooks */ \"./client/src/middle/recoil/modal/modal.hooks.tsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modal_atom__WEBPACK_IMPORTED_MODULE_0__.modalAtom);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9yZWNvaWwvbW9kYWwvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNBO0FBRXhDLGlFQUFlQSxrREFBUyxFQUFDO0FBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jbGllbnQvc3JjL21pZGRsZS9yZWNvaWwvbW9kYWwvaW5kZXgudHM/ZWYyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tIFwiLi9tb2RhbC5hdG9tXCI7XHJcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWwuaG9va3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsQXRvbTtcclxuXHJcbmV4cG9ydCB7IHVzZU1vZGFsIH07XHJcbiJdLCJuYW1lcyI6WyJtb2RhbEF0b20iLCJ1c2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/middle/recoil/modal/index.ts\n");

/***/ }),

/***/ "./client/src/middle/recoil/modal/modal.atom.tsx":
/*!*******************************************************!*\
  !*** ./client/src/middle/recoil/modal/modal.atom.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalAtom\": () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9yZWNvaWwvbW9kYWwvbW9kYWwuYXRvbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBRXRCLEtBQUssQ0FBQ0MsU0FBUyxHQUFHRCw0Q0FBSSxDQUcxQixDQUFDO0lBQ0ZFLEdBQUcsRUFBRSxDQUFPO0lBQ1pDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLEtBQUs7UUFDTEMsTUFBTSxFQUFFLEtBQUs7SUFDZixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL2NsaWVudC9zcmMvbWlkZGxlL3JlY29pbC9tb2RhbC9tb2RhbC5hdG9tLnRzeD9jMDA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWxBdG9tID0gYXRvbTx7XHJcbiAgbW9kYWw6IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXTtcclxuICBvcGVuZWQ6IGJvb2xlYW47XHJcbn0+KHtcclxuICBrZXk6IFwibW9kYWxcIixcclxuICBkZWZhdWx0OiB7XHJcbiAgICBtb2RhbDogPD48Lz4sXHJcbiAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiYXRvbSIsIm1vZGFsQXRvbSIsImtleSIsImRlZmF1bHQiLCJtb2RhbCIsIm9wZW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/middle/recoil/modal/modal.atom.tsx\n");

/***/ }),

/***/ "./client/src/middle/recoil/modal/modal.hooks.tsx":
/*!********************************************************!*\
  !*** ./client/src/middle/recoil/modal/modal.hooks.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"./client/src/middle/recoil/modal/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        })\n    ;\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        })\n    ;\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL21pZGRsZS9yZWNvaWwvbW9kYWwvbW9kYWwuaG9va3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFFRjtBQUV4QyxLQUFLLENBQUNFLFFBQVEsT0FBUyxDQUFDO0lBQ3RCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHSCx5REFBaUIsQ0FBQ0Msa0RBQVM7SUFFNUMsS0FBSyxDQUFDRyxTQUFTLElBQUlDLEtBQWtDLEdBQ25ERixRQUFRLENBQUMsQ0FBQztZQUFDRSxLQUFLO1lBQUVDLE1BQU0sRUFBRSxJQUFJO1FBQUMsQ0FBQzs7SUFFbEMsS0FBSyxDQUFDQyxVQUFVLE9BQVNKLFFBQVEsQ0FBQyxDQUFDO1lBQUNFLEtBQUs7WUFBU0MsTUFBTSxFQUFFLEtBQUs7UUFBQyxDQUFDOztJQUVqRSxNQUFNLENBQUMsQ0FBQztRQUFDRixTQUFTO1FBQUVHLFVBQVU7SUFBQyxDQUFDO0FBQ2xDLENBQUM7QUFFbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaWdpYm9hcmQvLi9jbGllbnQvc3JjL21pZGRsZS9yZWNvaWwvbW9kYWwvbW9kYWwuaG9va3MudHN4PzJiMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgeyBtb2RhbEF0b20gfSBmcm9tIFwiLi9tb2RhbC5hdG9tXCI7XHJcblxyXG5jb25zdCB1c2VNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBzZXRNb2RhbCA9IHVzZVNldFJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XHJcblxyXG4gIGNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbDogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdKSA9PlxyXG4gICAgc2V0TW9kYWwoeyBtb2RhbCwgb3BlbmVkOiB0cnVlIH0pO1xyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSk7XHJcblxyXG4gIHJldHVybiB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXNlTW9kYWwgfTtcclxuIl0sIm5hbWVzIjpbInVzZVNldFJlY29pbFN0YXRlIiwibW9kYWxBdG9tIiwidXNlTW9kYWwiLCJzZXRNb2RhbCIsIm9wZW5Nb2RhbCIsIm1vZGFsIiwib3BlbmVkIiwiY2xvc2VNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/middle/recoil/modal/modal.hooks.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var client_src_middle_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! client/src/middle/styles/global.css */ \"./client/src/middle/styles/global.css\");\n/* harmony import */ var client_src_middle_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(client_src_middle_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client_src_middle_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/client/src/middle/components/modal/components/ModalManager */ \"./client/src/middle/components/modal/components/ModalManager.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client_src_middle_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__]);\n_client_src_middle_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"SyncScribble\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_client_src_middle_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Coding\\\\Dev_Projects\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFaEI7QUFDbUI7QUFDWjtBQUVvRDtBQUVyQztBQUVsRCxLQUFLLENBQUNJLEdBQUcsSUFBSSxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsR0FBSyxDQUFDO0lBQ25ELE1BQU07O3dGQUVETixrREFBSTs7Z0dBQ0ZPLENBQUs7a0NBQUMsQ0FBWTs7Ozs7O2dHQUNsQkMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBRXJDUiw4Q0FBVTs7Z0dBQ1JELDBEQUFjOzs7OztnR0FDZEUsbUdBQVk7Ozs7O2dHQUNaRSxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RpZ2lib2FyZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY2xpZW50L3NyYy9taWRkbGUvc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAL2NsaWVudC9zcmMvbWlkZGxlL2NvbXBvbmVudHMvbW9kYWwvY29tcG9uZW50cy9Nb2RhbE1hbmFnZXJcIjtcclxuXHJcbmltcG9ydCBcInJlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U3luY1NjcmliYmxlPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFJlY29pbFJvb3Q+XHJcbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPE1vZGFsTWFuYWdlciAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9SZWNvaWxSb290PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJUb2FzdENvbnRhaW5lciIsIlJlY29pbFJvb3QiLCJNb2RhbE1hbmFnZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./client/src/middle/styles/global.css":
/*!*********************************************!*\
  !*** ./client/src/middle/styles/global.css ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();