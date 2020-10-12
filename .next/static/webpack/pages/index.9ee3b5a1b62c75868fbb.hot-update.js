webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation/index.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/selectors */ \"./store/selectors/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions */ \"./store/actions/index.js\");\n/* harmony import */ var _components_UserIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserIcon */ \"./components/UserIcon/index.js\");\n/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Form */ \"./components/Form/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(_store_selectors__WEBPACK_IMPORTED_MODULE_6__[\"authSelectors\"].selectAuthToken);\n  var urls = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(_store_selectors__WEBPACK_IMPORTED_MODULE_6__[\"urlSelectors\"].selectUrls);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({}),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      values = _React$useState2[0],\n      setValues = _React$useState2[1];\n\n  var url = values.url,\n      custom = values.custom;\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState3, 2),\n      current = _React$useState4[0],\n      setCurrent = _React$useState4[1];\n\n  var handleSubmit = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback(function (e) {\n    e.preventDefault();\n    setCurrent(custom);\n    if (authToken) dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"urlActions\"].shorten({\n      custom: custom,\n      url: url,\n      id: authToken._id\n    }));\n  }, [values, current]);\n  var Logout = react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"authActions\"].logout());\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [dispatch, _store_actions__WEBPACK_IMPORTED_MODULE_7__[\"authActions\"]]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    Title: \"URL-shortener\",\n    Links: [{\n      title: 'Login',\n      ref: '/login',\n      condition: !!authToken,\n      replacement: __jsx(_components_UserIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        Actions: [{\n          name: 'Dashboard',\n          act: function act() {}\n        }, {\n          name: 'Logout',\n          act: Logout\n        }],\n        Letter: authToken ? authToken.userName[0] : null\n      })\n    }]\n  }), __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    Title: \"Shorten your URL\",\n    ParentState: [values, setValues],\n    SubmitFunction: handleSubmit,\n    Inputs: [{\n      label: 'URL',\n      id: 'url',\n      type: 'text'\n    }, {\n      label: 'custom',\n      id: 'custom',\n      type: 'text',\n      exteriorLabel: \"your custom path\"\n    }],\n    LowerText: {\n      info: urls ? null : \"\".concat(_constants__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).concat(values.custom || 'your custom path'),\n      link: {\n        name: urls ? \"\".concat(_constants__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).concat(values.custom) : null,\n        ref: urls ? \"\".concat(_constants__WEBPACK_IMPORTED_MODULE_10__[\"default\"]).concat(values.custom) : null\n      }\n    }\n  }));\n};\n\n_s(Home, \"bTjO07PShOcY6g/pkZdHUPkGhPk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGhUb2tlbiIsInVzZVNlbGVjdG9yIiwiYXV0aFNlbGVjdG9ycyIsInNlbGVjdEF1dGhUb2tlbiIsInVybHMiLCJ1cmxTZWxlY3RvcnMiLCJzZWxlY3RVcmxzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZhbHVlcyIsInNldFZhbHVlcyIsInVybCIsImN1c3RvbSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiaGFuZGxlU3VibWl0IiwidXNlQ2FsbGJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cmxBY3Rpb25zIiwic2hvcnRlbiIsImlkIiwiX2lkIiwiTG9nb3V0IiwiYXV0aEFjdGlvbnMiLCJsb2dvdXQiLCJ0aXRsZSIsInJlZiIsImNvbmRpdGlvbiIsInJlcGxhY2VtZW50IiwibmFtZSIsImFjdCIsInVzZXJOYW1lIiwibGFiZWwiLCJ0eXBlIiwiZXh0ZXJpb3JMYWJlbCIsImluZm8iLCJVUkwiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQ0MsOERBQWEsQ0FBQ0MsZUFBZixDQUE3QjtBQUNBLE1BQU1DLElBQUksR0FBR0gsK0RBQVcsQ0FBQ0ksNkRBQVksQ0FBQ0MsVUFBZCxDQUF4Qjs7QUFIaUIsd0JBSVdDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBSlg7QUFBQTtBQUFBLE1BSVZDLE1BSlU7QUFBQSxNQUlGQyxTQUpFOztBQUFBLE1BS1RDLEdBTFMsR0FLT0YsTUFMUCxDQUtURSxHQUxTO0FBQUEsTUFLSkMsTUFMSSxHQUtPSCxNQUxQLENBS0pHLE1BTEk7O0FBQUEseUJBTWFMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBTmI7QUFBQTtBQUFBLE1BTVZLLE9BTlU7QUFBQSxNQU1EQyxVQU5DOztBQVFqQixNQUFNQyxZQUFZLEdBQUdSLDRDQUFLLENBQUNTLFdBQU4sQ0FDbkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQ0xBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSixjQUFVLENBQUNGLE1BQUQsQ0FBVjtBQUNBLFFBQUlaLFNBQUosRUFDRUYsUUFBUSxDQUNOcUIseURBQVUsQ0FBQ0MsT0FBWCxDQUFtQjtBQUNqQlIsWUFBTSxFQUFOQSxNQURpQjtBQUVqQkQsU0FBRyxFQUFIQSxHQUZpQjtBQUdqQlUsUUFBRSxFQUFFckIsU0FBUyxDQUFDc0I7QUFIRyxLQUFuQixDQURNLENBQVI7QUFPSCxHQVprQixFQWFuQixDQUFDYixNQUFELEVBQVNJLE9BQVQsQ0FibUIsQ0FBckI7QUFnQkEsTUFBTVUsTUFBTSxHQUFHaEIsNENBQUssQ0FBQ1MsV0FBTixnTUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQmxCLG9CQUFRLENBQUMwQiwwREFBVyxDQUFDQyxNQUFaLEVBQUQsQ0FBUjs7QUFEK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBbEIsSUFFWixDQUFDM0IsUUFBRCxFQUFXMEIsMERBQVgsQ0FGWSxDQUFmO0FBR0EsU0FDRSxtRUFDRSxNQUFDLDhEQUFEO0FBQ0UsU0FBSyxFQUFDLGVBRFI7QUFFRSxTQUFLLEVBQUUsQ0FDTDtBQUNFRSxXQUFLLEVBQUUsT0FEVDtBQUVFQyxTQUFHLEVBQUUsUUFGUDtBQUdFQyxlQUFTLEVBQUUsQ0FBQyxDQUFDNUIsU0FIZjtBQUlFNkIsaUJBQVcsRUFDVCxNQUFDLDREQUFEO0FBQ0UsZUFBTyxFQUFFLENBQ1A7QUFBRUMsY0FBSSxFQUFFLFdBQVI7QUFBcUJDLGFBQUcsRUFBRSxlQUFNLENBQUU7QUFBbEMsU0FETyxFQUVQO0FBQUVELGNBQUksRUFBRSxRQUFSO0FBQWtCQyxhQUFHLEVBQUVSO0FBQXZCLFNBRk8sQ0FEWDtBQUtFLGNBQU0sRUFBRXZCLFNBQVMsR0FBR0EsU0FBUyxDQUFDZ0MsUUFBVixDQUFtQixDQUFuQixDQUFILEdBQTJCO0FBTDlDO0FBTEosS0FESztBQUZULElBREYsRUFxQkUsTUFBQyx3REFBRDtBQUNFLFNBQUssRUFBQyxrQkFEUjtBQUVFLGVBQVcsRUFBRSxDQUFDdkIsTUFBRCxFQUFTQyxTQUFULENBRmY7QUFHRSxrQkFBYyxFQUFFSyxZQUhsQjtBQUlFLFVBQU0sRUFBRSxDQUNOO0FBQUVrQixXQUFLLEVBQUUsS0FBVDtBQUFnQlosUUFBRSxFQUFFLEtBQXBCO0FBQTJCYSxVQUFJLEVBQUU7QUFBakMsS0FETSxFQUVOO0FBQ0VELFdBQUssRUFBRSxRQURUO0FBRUVaLFFBQUUsRUFBRSxRQUZOO0FBR0VhLFVBQUksRUFBRSxNQUhSO0FBS0VDLG1CQUFhO0FBTGYsS0FGTSxDQUpWO0FBY0UsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRWhDLElBQUksR0FBRyxJQUFILGFBQWFpQyxtREFBYixTQUFtQjVCLE1BQU0sQ0FBQ0csTUFBUCxJQUFpQixrQkFBcEMsQ0FERDtBQUVUMEIsVUFBSSxFQUFFO0FBQ0pSLFlBQUksRUFBRTFCLElBQUksYUFBTWlDLG1EQUFOLFNBQVk1QixNQUFNLENBQUNHLE1BQW5CLElBQThCLElBRHBDO0FBRUplLFdBQUcsRUFBRXZCLElBQUksYUFBTWlDLG1EQUFOLFNBQVk1QixNQUFNLENBQUNHLE1BQW5CLElBQThCO0FBRm5DO0FBRkc7QUFkYixJQXJCRixDQURGO0FBOENELENBekVEOztHQUFNZixJO1VBQ2FFLHVELEVBQ0NFLHVELEVBQ0xBLHVEOzs7S0FIVEosSTtBQTJFU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgeyBhdXRoU2VsZWN0b3JzLCB1cmxTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgYXV0aEFjdGlvbnMsIHVybEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zJztcblxuaW1wb3J0IFVzZXJJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckljb24nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtJztcbmltcG9ydCBVUkwgZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBhdXRoVG9rZW4gPSB1c2VTZWxlY3RvcihhdXRoU2VsZWN0b3JzLnNlbGVjdEF1dGhUb2tlbik7XG4gIGNvbnN0IHVybHMgPSB1c2VTZWxlY3Rvcih1cmxTZWxlY3RvcnMuc2VsZWN0VXJscyk7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IHsgdXJsLCBjdXN0b20gfSA9IHZhbHVlcztcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldEN1cnJlbnQoY3VzdG9tKTtcbiAgICAgIGlmIChhdXRoVG9rZW4pXG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHVybEFjdGlvbnMuc2hvcnRlbih7XG4gICAgICAgICAgICBjdXN0b20sXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBpZDogYXV0aFRva2VuLl9pZFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSxcbiAgICBbdmFsdWVzLCBjdXJyZW50XVxuICApO1xuXG4gIGNvbnN0IExvZ291dCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSk7XG4gIH0sIFtkaXNwYXRjaCwgYXV0aEFjdGlvbnNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmlnYXRpb25cbiAgICAgICAgVGl0bGU9XCJVUkwtc2hvcnRlbmVyXCJcbiAgICAgICAgTGlua3M9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0xvZ2luJyxcbiAgICAgICAgICAgIHJlZjogJy9sb2dpbicsXG4gICAgICAgICAgICBjb25kaXRpb246ICEhYXV0aFRva2VuLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IChcbiAgICAgICAgICAgICAgPFVzZXJJY29uXG4gICAgICAgICAgICAgICAgQWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnRGFzaGJvYXJkJywgYWN0OiAoKSA9PiB7fSB9LFxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTG9nb3V0JywgYWN0OiBMb2dvdXQgfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgTGV0dGVyPXthdXRoVG9rZW4gPyBhdXRoVG9rZW4udXNlck5hbWVbMF0gOiBudWxsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgIC8+XG5cbiAgICAgIDxGb3JtXG4gICAgICAgIFRpdGxlPVwiU2hvcnRlbiB5b3VyIFVSTFwiXG4gICAgICAgIFBhcmVudFN0YXRlPXtbdmFsdWVzLCBzZXRWYWx1ZXNdfVxuICAgICAgICBTdWJtaXRGdW5jdGlvbj17aGFuZGxlU3VibWl0fVxuICAgICAgICBJbnB1dHM9e1tcbiAgICAgICAgICB7IGxhYmVsOiAnVVJMJywgaWQ6ICd1cmwnLCB0eXBlOiAndGV4dCcgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ2N1c3RvbScsXG4gICAgICAgICAgICBpZDogJ2N1c3RvbScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG5cbiAgICAgICAgICAgIGV4dGVyaW9yTGFiZWw6IGB5b3VyIGN1c3RvbSBwYXRoYFxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgICAgTG93ZXJUZXh0PXt7XG4gICAgICAgICAgaW5mbzogdXJscyA/IG51bGwgOiBgJHtVUkx9JHt2YWx1ZXMuY3VzdG9tIHx8ICd5b3VyIGN1c3RvbSBwYXRoJ31gLFxuICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgIG5hbWU6IHVybHMgPyBgJHtVUkx9JHt2YWx1ZXMuY3VzdG9tfWAgOiBudWxsLFxuICAgICAgICAgICAgcmVmOiB1cmxzID8gYCR7VVJMfSR7dmFsdWVzLmN1c3RvbX1gIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})