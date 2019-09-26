(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["screen-small"],{

/***/ "./Modules/Trading/Components/Elements/mobile-widget.jsx":
/*!***************************************************************!*\
  !*** ./Modules/Trading/Components/Elements/mobile-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _full_screen_dialog_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-screen-dialog.jsx */ \"./Modules/Trading/Components/Elements/full-screen-dialog.jsx\");\n/* harmony import */ var _Containers_trade_params_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/trade-params.jsx */ \"./Modules/Trading/Containers/trade-params.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar MobileWidget =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(MobileWidget, _React$PureComponent);\n\n  function MobileWidget(props) {\n    var _this;\n\n    _classCallCheck(this, MobileWidget);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileWidget).call(this, props));\n    _this.state = {\n      open: false\n    };\n    _this.handleDialogClose = _this.handleDialogClose.bind(_assertThisInitialized(_this));\n    _this.handleWidgetClick = _this.handleWidgetClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(MobileWidget, [{\n    key: \"handleWidgetClick\",\n    value: function handleWidgetClick() {\n      this.setState({\n        open: true\n      });\n    }\n  }, {\n    key: \"handleDialogClose\",\n    value: function handleDialogClose() {\n      this.setState({\n        open: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mobile-widget\",\n        onClick: this.handleWidgetClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Containers_trade_params_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        is_minimized: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_full_screen_dialog_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Set parameters\",\n        visible: this.state.open,\n        onClose: this.handleDialogClose\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Containers_trade_params_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        is_nativepicker: true\n      })));\n    }\n  }]);\n\n  return MobileWidget;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileWidget);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1RyYWRpbmcvQ29tcG9uZW50cy9FbGVtZW50cy9tb2JpbGUtd2lkZ2V0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL01vZHVsZXMvVHJhZGluZy9Db21wb25lbnRzL0VsZW1lbnRzL21vYmlsZS13aWRnZXQuanN4P2I3MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZ1bGxTY3JlZW5EaWFsb2cgZnJvbSAnLi9mdWxsLXNjcmVlbi1kaWFsb2cuanN4JztcbmltcG9ydCBUcmFkZVBhcmFtcyAgICAgIGZyb20gJy4uLy4uL0NvbnRhaW5lcnMvdHJhZGUtcGFyYW1zLmpzeCc7XG5cbmNsYXNzIE1vYmlsZVdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZURpYWxvZ0Nsb3NlID0gdGhpcy5oYW5kbGVEaWFsb2dDbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVdpZGdldENsaWNrID0gdGhpcy5oYW5kbGVXaWRnZXRDbGljay5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVdpZGdldENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZURpYWxvZ0Nsb3NlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS13aWRnZXQnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlV2lkZ2V0Q2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8VHJhZGVQYXJhbXMgaXNfbWluaW1pemVkIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8RnVsbFNjcmVlbkRpYWxvZ1xuICAgICAgICAgICAgICAgICAgICB0aXRsZT0nU2V0IHBhcmFtZXRlcnMnXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFkZVBhcmFtcyBpc19uYXRpdmVwaWNrZXIgLz5cbiAgICAgICAgICAgICAgICA8L0Z1bGxTY3JlZW5EaWFsb2c+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlV2lkZ2V0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFJQTs7OztBQXRDQTtBQUNBO0FBd0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Modules/Trading/Components/Elements/mobile-widget.jsx\n");

/***/ }),

/***/ "./Modules/Trading/Components/Form/screen-small.jsx":
/*!**********************************************************!*\
  !*** ./Modules/Trading/Components/Form/screen-small.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Elements_mobile_widget_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Elements/mobile-widget.jsx */ \"./Modules/Trading/Components/Elements/mobile-widget.jsx\");\n/* harmony import */ var _Containers_contract_type_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/contract-type.jsx */ \"./Modules/Trading/Containers/contract-type.jsx\");\n/* harmony import */ var _Containers_purchase_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Containers/purchase.jsx */ \"./Modules/Trading/Containers/purchase.jsx\");\n/* harmony import */ var Sass_app_common_mobile_widget_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Sass/app/_common/mobile-widget.scss */ \"./sass/app/_common/mobile-widget.scss\");\n/* harmony import */ var Sass_app_common_mobile_widget_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Sass_app_common_mobile_widget_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ScreenSmall = function ScreenSmall() {\n  return (\n    /* { is_trade_enabled } */\n    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Containers_contract_type_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"mobile-only\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Elements_mobile_widget_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"purchase-container\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Containers_purchase_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))\n  );\n};\n\nScreenSmall.propTypes = {\n  is_trade_enabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScreenSmall);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1RyYWRpbmcvQ29tcG9uZW50cy9Gb3JtL3NjcmVlbi1zbWFsbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Nb2R1bGVzL1RyYWRpbmcvQ29tcG9uZW50cy9Gb3JtL3NjcmVlbi1zbWFsbC5qc3g/NDA5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9iaWxlV2lkZ2V0IGZyb20gJy4uL0VsZW1lbnRzL21vYmlsZS13aWRnZXQuanN4JztcbmltcG9ydCBDb250cmFjdFR5cGUgZnJvbSAnLi4vLi4vQ29udGFpbmVycy9jb250cmFjdC10eXBlLmpzeCc7XG5pbXBvcnQgUHVyY2hhc2UgICAgIGZyb20gJy4uLy4uL0NvbnRhaW5lcnMvcHVyY2hhc2UuanN4JztcbmltcG9ydCAnU2Fzcy9hcHAvX2NvbW1vbi9tb2JpbGUtd2lkZ2V0LnNjc3MnO1xuXG5jb25zdCBTY3JlZW5TbWFsbCA9ICgvKiB7IGlzX3RyYWRlX2VuYWJsZWQgfSAqLykgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPENvbnRyYWN0VHlwZSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLW9ubHknPlxuICAgICAgICAgICAgPE1vYmlsZVdpZGdldCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1cmNoYXNlLWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8UHVyY2hhc2UgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cblNjcmVlblNtYWxsLnByb3BUeXBlcyA9IHtcbiAgICBpc190cmFkZV9lbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlblNtYWxsO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQU5BO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFEQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Modules/Trading/Components/Form/screen-small.jsx\n");

/***/ }),

/***/ "./sass/app/_common/mobile-widget.scss":
/*!*********************************************!*\
  !*** ./sass/app/_common/mobile-widget.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9fY29tbW9uL21vYmlsZS13aWRnZXQuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvYXBwL19jb21tb24vbW9iaWxlLXdpZGdldC5zY3NzPzJkMWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/app/_common/mobile-widget.scss\n");

/***/ })

}]);