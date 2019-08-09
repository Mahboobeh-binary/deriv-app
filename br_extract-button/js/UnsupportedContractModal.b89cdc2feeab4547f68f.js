(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnsupportedContractModal"],{

/***/ "./App/Components/Elements/FullPageModal/full-page-modal.jsx":
/*!*******************************************************************!*\
  !*** ./App/Components/Elements/FullPageModal/full-page-modal.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ \"../node_modules/react-transition-group/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deriv-components/lib/button */ \"../../components/lib/button.js\");\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar FullPageModal =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(FullPageModal, _React$Component);\n\n  function FullPageModal() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, FullPageModal);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FullPageModal)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.handleCancel = function () {\n      if (_this.props.is_closed_on_cancel) {\n        _this.props.hideFullBlur();\n      }\n\n      _this.props.onCancel();\n    };\n\n    _this.handleConfirm = function () {\n      if (_this.props.is_closed_on_confirm) {\n        _this.props.hideFullBlur();\n      }\n\n      _this.props.onConfirm();\n    };\n\n    return _this;\n  }\n\n  _createClass(FullPageModal, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (this.props.is_visible) {\n        this.props.showFullBlur();\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      if (this.props.is_visible) {\n        this.props.showFullBlur();\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          cancel_button_text = _this$props.cancel_button_text,\n          children = _this$props.children,\n          confirm_button_text = _this$props.confirm_button_text,\n          onCancel = _this$props.onCancel,\n          is_loading = _this$props.is_loading,\n          is_visible = _this$props.is_visible,\n          title = _this$props.title;\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"CSSTransition\"], {\n        appear: true,\n        \"in\": is_visible && !is_loading,\n        timeout: 50,\n        classNames: {\n          appear: 'full-page-modal__background--enter',\n          enter: 'full-page-modal__background--enter',\n          enterDone: 'full-page-modal__background--enter-done',\n          exit: 'full-page-modal__background--exit'\n        },\n        unmountOnExit: true\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"full-page-modal__background\"\n      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"CSSTransition\"], {\n        appear: true,\n        \"in\": is_visible && !is_loading,\n        timeout: 50,\n        classNames: {\n          appear: 'full-page-modal__wrapper--enter',\n          enter: 'full-page-modal__wrapper--enter',\n          enterDone: 'full-page-modal__wrapper--enter-done',\n          exit: 'full-page-modal__wrapper--exit'\n        },\n        unmountOnExit: true\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"full-page-modal__wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"full-page-modal__dialog\"\n      }, title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", {\n        className: \"full-page-modal__header\"\n      }, title), typeof children === 'string' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n        className: \"full-page-modal__content\"\n      }, children) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"full-page-modal__content\"\n      }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"full-page-modal__footer\"\n      }, onCancel && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('full-page-modal__button', 'btn--secondary', 'btn--secondary--orange'),\n        has_effect: true,\n        text: cancel_button_text,\n        onClick: this.handleCancel\n      }), confirm_button_text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('full-page-modal__button', 'btn--primary', 'btn--primary--orange'),\n        has_effect: true,\n        text: confirm_button_text,\n        onClick: this.handleConfirm\n      }))))));\n    }\n  }]);\n\n  return FullPageModal;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nFullPageModal.defaultProps = {\n  is_closed_on_cancel: true,\n  is_closed_on_confirm: true\n};\nFullPageModal.propTypes = {\n  cancel_button_text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  confirm_button_text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  hideFullBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  is_closed_on_cancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  is_closed_on_confirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,\n  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  showFullBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n};\nvar full_page_modal = Object(Stores_connect__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(function (_ref) {\n  var ui = _ref.ui;\n  return {\n    hideFullBlur: ui.hideFullBlur,\n    is_loading: ui.is_loading,\n    showFullBlur: ui.showFullBlur\n  };\n})(FullPageModal);\n/* harmony default export */ __webpack_exports__[\"default\"] = (full_page_modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9GdWxsUGFnZU1vZGFsL2Z1bGwtcGFnZS1tb2RhbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9GdWxsUGFnZU1vZGFsL2Z1bGwtcGFnZS1tb2RhbC5qc3g/YTUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyAgICAgICAgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyAgICAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiAgICAgICAgICAgIGZyb20gJ2Rlcml2LWNvbXBvbmVudHMvbGliL2J1dHRvbic7XG5pbXBvcnQgeyBjb25uZWN0IH0gICAgICAgZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuXG5jbGFzcyBGdWxsUGFnZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfdmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93RnVsbEJsdXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfdmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93RnVsbEJsdXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfY2xvc2VkX29uX2NhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlRnVsbEJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKCk7XG4gICAgfTtcblxuICAgIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzX2Nsb3NlZF9vbl9jb25maXJtKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpZGVGdWxsQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maXJtKCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2FuY2VsX2J1dHRvbl90ZXh0LFxuICAgICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgICAgICBjb25maXJtX2J1dHRvbl90ZXh0LFxuICAgICAgICAgICAgb25DYW5jZWwsXG4gICAgICAgICAgICBpc19sb2FkaW5nLFxuICAgICAgICAgICAgaXNfdmlzaWJsZSxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICAgICAgICAgICAgaW49eyhpc192aXNpYmxlICYmICFpc19sb2FkaW5nKX1cbiAgICAgICAgICAgICAgICAgICAgdGltZW91dD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhciAgIDogJ2Z1bGwtcGFnZS1tb2RhbF9fYmFja2dyb3VuZC0tZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXIgICAgOiAnZnVsbC1wYWdlLW1vZGFsX19iYWNrZ3JvdW5kLS1lbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlckRvbmU6ICdmdWxsLXBhZ2UtbW9kYWxfX2JhY2tncm91bmQtLWVudGVyLWRvbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCAgICAgOiAnZnVsbC1wYWdlLW1vZGFsX19iYWNrZ3JvdW5kLS1leGl0JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtcGFnZS1tb2RhbF9fYmFja2dyb3VuZCcgLz5cbiAgICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgICAgICAgIGluPXsoaXNfdmlzaWJsZSAmJiAhaXNfbG9hZGluZyl9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXIgICA6ICdmdWxsLXBhZ2UtbW9kYWxfX3dyYXBwZXItLWVudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyICAgIDogJ2Z1bGwtcGFnZS1tb2RhbF9fd3JhcHBlci0tZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJEb25lOiAnZnVsbC1wYWdlLW1vZGFsX193cmFwcGVyLS1lbnRlci1kb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQgICAgIDogJ2Z1bGwtcGFnZS1tb2RhbF9fd3JhcHBlci0tZXhpdCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmdWxsLXBhZ2UtbW9kYWxfX3dyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtcGFnZS1tb2RhbF9fZGlhbG9nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Z1bGwtcGFnZS1tb2RhbF9faGVhZGVyJz57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmdWxsLXBhZ2UtbW9kYWxfX2NvbnRlbnQnPntjaGlsZHJlbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Z1bGwtcGFnZS1tb2RhbF9fY29udGVudCc+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnVsbC1wYWdlLW1vZGFsX19mb290ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9uQ2FuY2VsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnVsbC1wYWdlLW1vZGFsX19idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnRuLS1zZWNvbmRhcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnRuLS1zZWNvbmRhcnktLW9yYW5nZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfZWZmZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17Y2FuY2VsX2J1dHRvbl90ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNvbmZpcm1fYnV0dG9uX3RleHQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmdWxsLXBhZ2UtbW9kYWxfX2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidG4tLXByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnRuLS1wcmltYXJ5LS1vcmFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzX2VmZmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2NvbmZpcm1fYnV0dG9uX3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5GdWxsUGFnZU1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpc19jbG9zZWRfb25fY2FuY2VsIDogdHJ1ZSxcbiAgICBpc19jbG9zZWRfb25fY29uZmlybTogdHJ1ZSxcbn07XG5cbkZ1bGxQYWdlTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIGNhbmNlbF9idXR0b25fdGV4dCAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbmZpcm1fYnV0dG9uX3RleHQgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhpZGVGdWxsQmx1ciAgICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBpc19jbG9zZWRfb25fY2FuY2VsIDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNfY2xvc2VkX29uX2NvbmZpcm06IFByb3BUeXBlcy5ib29sLFxuICAgIGlzX2xvYWRpbmcgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc192aXNpYmxlICAgICAgICAgIDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DYW5jZWwgICAgICAgICAgICA6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29uZmlybSAgICAgICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93RnVsbEJsdXIgICAgICAgIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGUgICAgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBmdWxsX3BhZ2VfbW9kYWwgPSBjb25uZWN0KFxuICAgICh7IHVpIH0pID0+ICh7XG4gICAgICAgIGhpZGVGdWxsQmx1cjogdWkuaGlkZUZ1bGxCbHVyLFxuICAgICAgICBpc19sb2FkaW5nICA6IHVpLmlzX2xvYWRpbmcsXG4gICAgICAgIHNob3dGdWxsQmx1cjogdWkuc2hvd0Z1bGxCbHVyLFxuICAgIH0pLFxuKShGdWxsUGFnZU1vZGFsKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bGxfcGFnZV9tb2RhbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQXpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVZBO0FBWUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBVkE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQVJBO0FBYUE7QUFLQTtBQUNBO0FBQ0E7QUFSQTtBQWlCQTs7OztBQTFHQTtBQUNBO0FBNEdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Components/Elements/FullPageModal/full-page-modal.jsx\n");

/***/ }),

/***/ "./App/Components/Elements/Modals/UnsupportedContractModal/index.js":
/*!**************************************************************************!*\
  !*** ./App/Components/Elements/Modals/UnsupportedContractModal/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _unsupported_contract_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupported-contract-modal.jsx */ \"./App/Components/Elements/Modals/UnsupportedContractModal/unsupported-contract-modal.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupported_contract_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9Nb2RhbHMvVW5zdXBwb3J0ZWRDb250cmFjdE1vZGFsL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbXBvbmVudHMvRWxlbWVudHMvTW9kYWxzL1Vuc3VwcG9ydGVkQ29udHJhY3RNb2RhbC9pbmRleC5qcz9iYWNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vdW5zdXBwb3J0ZWQtY29udHJhY3QtbW9kYWwuanN4JztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Components/Elements/Modals/UnsupportedContractModal/index.js\n");

/***/ }),

/***/ "./App/Components/Elements/Modals/UnsupportedContractModal/unsupported-contract-modal.jsx":
/*!************************************************************************************************!*\
  !*** ./App/Components/Elements/Modals/UnsupportedContractModal/unsupported-contract-modal.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\n/* harmony import */ var App_Components_Elements_FullPageModal_full_page_modal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! App/Components/Elements/FullPageModal/full-page-modal.jsx */ \"./App/Components/Elements/FullPageModal/full-page-modal.jsx\");\n/* harmony import */ var App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! App/Components/Elements/localize.jsx */ \"./App/Components/Elements/localize.jsx\");\n/* harmony import */ var _Constants_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Constants/app-config */ \"./App/Constants/app-config.js\");\n\n\n\n\n\n\n\nvar UnsupportedContractModal = function UnsupportedContractModal(_ref) {\n  var is_visible = _ref.is_visible,\n      onConfirm = _ref.onConfirm,\n      onClose = _ref.onClose;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App_Components_Elements_FullPageModal_full_page_modal_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: Object(App_i18n__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Whoops!'),\n    confirm_button_text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Continue to Binary.com'),\n    cancel_button_text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Back to trade page'),\n    onConfirm: onConfirm,\n    onCancel: onClose,\n    is_closed_on_cancel: true,\n    is_visible: is_visible\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App_Components_Elements_localize_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    i18n_default_text: \"This trade type is currently not supported on {{website_name}}. Please go to Binary.com for details.\",\n    values: {\n      website_name: _Constants_app_config__WEBPACK_IMPORTED_MODULE_5__[\"website_name\"]\n    }\n  }));\n};\n\nUnsupportedContractModal.propTypes = {\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnsupportedContractModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9Nb2RhbHMvVW5zdXBwb3J0ZWRDb250cmFjdE1vZGFsL3Vuc3VwcG9ydGVkLWNvbnRyYWN0LW1vZGFsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db21wb25lbnRzL0VsZW1lbnRzL01vZGFscy9VbnN1cHBvcnRlZENvbnRyYWN0TW9kYWwvdW5zdXBwb3J0ZWQtY29udHJhY3QtbW9kYWwuanN4PzA5OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyAgICAgICAgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9ICAgICBmcm9tICdBcHAvaTE4bic7XG5pbXBvcnQgRnVsbFBhZ2VNb2RhbCAgICBmcm9tICdBcHAvQ29tcG9uZW50cy9FbGVtZW50cy9GdWxsUGFnZU1vZGFsL2Z1bGwtcGFnZS1tb2RhbC5qc3gnO1xuaW1wb3J0IExvY2FsaXplICAgICAgICAgZnJvbSAnQXBwL0NvbXBvbmVudHMvRWxlbWVudHMvbG9jYWxpemUuanN4JztcbmltcG9ydCB7IHdlYnNpdGVfbmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL0NvbnN0YW50cy9hcHAtY29uZmlnJztcblxuY29uc3QgVW5zdXBwb3J0ZWRDb250cmFjdE1vZGFsID0gKHtcbiAgICBpc192aXNpYmxlLFxuICAgIG9uQ29uZmlybSxcbiAgICBvbkNsb3NlLFxufSkgPT4gKFxuICAgIDxGdWxsUGFnZU1vZGFsXG4gICAgICAgIHRpdGxlPXtsb2NhbGl6ZSgnV2hvb3BzIScpfVxuICAgICAgICBjb25maXJtX2J1dHRvbl90ZXh0PXtsb2NhbGl6ZSgnQ29udGludWUgdG8gQmluYXJ5LmNvbScpfVxuICAgICAgICBjYW5jZWxfYnV0dG9uX3RleHQ9e2xvY2FsaXplKCdCYWNrIHRvIHRyYWRlIHBhZ2UnKX1cbiAgICAgICAgb25Db25maXJtPXtvbkNvbmZpcm19XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlfVxuICAgICAgICBpc19jbG9zZWRfb25fY2FuY2VsXG4gICAgICAgIGlzX3Zpc2libGU9e2lzX3Zpc2libGV9XG4gICAgPlxuICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdUaGlzIHRyYWRlIHR5cGUgaXMgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQgb24ge3t3ZWJzaXRlX25hbWV9fS4gUGxlYXNlIGdvIHRvIEJpbmFyeS5jb20gZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgdmFsdWVzPXt7IHdlYnNpdGVfbmFtZSB9fVxuICAgICAgICAvPlxuICAgIDwvRnVsbFBhZ2VNb2RhbD5cbik7XG5cblVuc3VwcG9ydGVkQ29udHJhY3RNb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgaXNfdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbG9zZSAgIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db25maXJtIDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVbnN1cHBvcnRlZENvbnRyYWN0TW9kYWw7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBZEE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Components/Elements/Modals/UnsupportedContractModal/unsupported-contract-modal.jsx\n");

/***/ })

}]);