(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-info"],{

/***/ "./App/Components/Layout/Header/account-info.jsx":
/*!*******************************************************!*\
  !*** ./App/Components/Layout/Header/account-info.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ \"../node_modules/react-transition-group/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var App_Containers_AccountSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! App/Containers/AccountSwitcher */ \"./App/Containers/AccountSwitcher/index.js\");\n/* harmony import */ var Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Assets/icon.jsx */ \"./Assets/icon.jsx\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // todo fix absolute path\n\nvar AccountInfo = function AccountInfo(_ref) {\n  var balance = _ref.balance,\n      currency = _ref.currency,\n      loginid = _ref.loginid,\n      is_dialog_on = _ref.is_dialog_on,\n      is_upgrade_enabled = _ref.is_upgrade_enabled,\n      is_virtual = _ref.is_virtual,\n      onClickUpgrade = _ref.onClickUpgrade,\n      toggleDialog = _ref.toggleDialog;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"acc-info__wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    id: \"dt_account_dropdown\",\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('acc-info', {\n      'acc-info--show': is_dialog_on,\n      'acc-info--is-virtual': is_virtual\n    }),\n    onClick: toggleDialog\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", {\n    className: \"acc-info__id\",\n    title: loginid\n  }, loginid, \"\\xA0\"), typeof balance !== 'undefined' && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"p\", {\n    className: \"acc-info__balance\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('symbols', _defineProperty({}, \"symbols--\".concat((currency || '').toLowerCase()), currency))\n  }), balance), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: \"IconArrowBold\",\n    className: \"acc-info__select-arrow\"\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"CSSTransition\"], {\n    \"in\": is_dialog_on,\n    timeout: 200,\n    classNames: {\n      enter: 'acc-switcher__wrapper--enter',\n      enterDone: 'acc-switcher__wrapper--enter-done',\n      exit: 'acc-switcher__wrapper--exit'\n    },\n    unmountOnExit: true\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"acc-switcher__wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App_Containers_AccountSwitcher__WEBPACK_IMPORTED_MODULE_4__[\"AccountSwitcher\"], {\n    is_visible: is_dialog_on,\n    toggle: toggleDialog,\n    is_upgrade_enabled: is_upgrade_enabled,\n    onClickUpgrade: onClickUpgrade\n  }))));\n};\n\nAccountInfo.propTypes = {\n  account_type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  balance: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  currency: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  is_dialog_on: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_upgrade_enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_virtual: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  loginid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onClickUpgrade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  toggleDialog: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountInfo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2FjY291bnQtaW5mby5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29tcG9uZW50cy9MYXlvdXQvSGVhZGVyL2FjY291bnQtaW5mby5qc3g/YTQzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyAgICAgICAgICBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgICAgICAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9ICAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBBY2NvdW50U3dpdGNoZXIgfSBmcm9tICdBcHAvQ29udGFpbmVycy9BY2NvdW50U3dpdGNoZXInO1xuaW1wb3J0IEljb24gICAgICAgICAgICAgICAgZnJvbSAnQXNzZXRzL2ljb24uanN4JztcblxuLy8gdG9kbyBmaXggYWJzb2x1dGUgcGF0aFxuXG5jb25zdCBBY2NvdW50SW5mbyA9ICh7XG4gICAgYmFsYW5jZSxcbiAgICBjdXJyZW5jeSxcbiAgICBsb2dpbmlkLFxuICAgIGlzX2RpYWxvZ19vbixcbiAgICBpc191cGdyYWRlX2VuYWJsZWQsXG4gICAgaXNfdmlydHVhbCxcbiAgICBvbkNsaWNrVXBncmFkZSxcbiAgICB0b2dnbGVEaWFsb2csXG59KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2FjYy1pbmZvX193cmFwcGVyJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9J2R0X2FjY291bnRfZHJvcGRvd24nXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjYy1pbmZvJywge1xuICAgICAgICAgICAgICAgICdhY2MtaW5mby0tc2hvdycgICAgICA6IGlzX2RpYWxvZ19vbixcbiAgICAgICAgICAgICAgICAnYWNjLWluZm8tLWlzLXZpcnR1YWwnOiBpc192aXJ0dWFsLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEaWFsb2d9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhY2MtaW5mb19faWQnXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xvZ2luaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvZ2luaWR9Jm5ic3A7XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZW9mIGJhbGFuY2UgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhY2MtaW5mb19fYmFsYW5jZSc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3N5bWJvbHMnLCB7IFtgc3ltYm9scy0tJHsoY3VycmVuY3kgfHwgJycpLnRvTG93ZXJDYXNlKCl9YF06IGN1cnJlbmN5IH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7YmFsYW5jZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8SWNvbiBpY29uPSdJY29uQXJyb3dCb2xkJyBjbGFzc05hbWU9J2FjYy1pbmZvX19zZWxlY3QtYXJyb3cnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgaW49e2lzX2RpYWxvZ19vbn1cbiAgICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgICAgICBlbnRlciAgICA6ICdhY2Mtc3dpdGNoZXJfX3dyYXBwZXItLWVudGVyJyxcbiAgICAgICAgICAgICAgICBlbnRlckRvbmU6ICdhY2Mtc3dpdGNoZXJfX3dyYXBwZXItLWVudGVyLWRvbmUnLFxuICAgICAgICAgICAgICAgIGV4aXQgICAgIDogJ2FjYy1zd2l0Y2hlcl9fd3JhcHBlci0tZXhpdCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWNjLXN3aXRjaGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgICAgICA8QWNjb3VudFN3aXRjaGVyXG4gICAgICAgICAgICAgICAgICAgIGlzX3Zpc2libGU9e2lzX2RpYWxvZ19vbn1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGVEaWFsb2d9XG4gICAgICAgICAgICAgICAgICAgIGlzX3VwZ3JhZGVfZW5hYmxlZD17aXNfdXBncmFkZV9lbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrVXBncmFkZT17b25DbGlja1VwZ3JhZGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4pO1xuXG5BY2NvdW50SW5mby5wcm9wVHlwZXMgPSB7XG4gICAgYWNjb3VudF90eXBlICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJhbGFuY2UgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjdXJyZW5jeSAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNfZGlhbG9nX29uICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc191cGdyYWRlX2VuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzX3ZpcnR1YWwgICAgICAgIDogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9naW5pZCAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xpY2tVcGdyYWRlICAgIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdG9nZ2xlRGlhbG9nICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnRJbmZvO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQVNBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFFQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVJBO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUEvQ0E7QUFDQTtBQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Components/Layout/Header/account-info.jsx\n");

/***/ }),

/***/ "./App/Containers/AccountSwitcher/account-switcher.jsx":
/*!*************************************************************!*\
  !*** ./App/Containers/AccountSwitcher/account-switcher.jsx ***!
  \*************************************************************/
/*! exports provided: AccountSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AccountSwitcher\", function() { return account_switcher; });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _common/url */ \"./_common/url.js\");\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_url__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! _common/utility */ \"./_common/utility.js\");\n/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_utility__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Assets/icon.jsx */ \"./Assets/icon.jsx\");\n/* harmony import */ var Services_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Services/index */ \"./Services/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\nvar AccountSwitcher =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(AccountSwitcher, _React$Component);\n\n  function AccountSwitcher() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, AccountSwitcher);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccountSwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.setWrapperRef = function (node) {\n      _this.wrapper_ref = node;\n    };\n\n    _this.handleClickOutside = function (event) {\n      var accounts_toggle_btn = !event.target.classList.contains('acc-info');\n\n      if (_this.wrapper_ref && !_this.wrapper_ref.contains(event.target) && _this.props.is_visible && accounts_toggle_btn) {\n        _this.props.toggle();\n      }\n    };\n\n    _this.handleLogout = function () {\n      _this.props.toggle();\n\n      if (_this.props.is_positions_drawer_on) {\n        _this.props.togglePositionsDrawer(); // TODO: hide drawer inside logout, once it is a mobx action\n\n      }\n\n      Object(Services_index__WEBPACK_IMPORTED_MODULE_7__[\"requestLogout\"])().then(_this.props.cleanUp);\n    };\n\n    return _this;\n  }\n\n  _createClass(AccountSwitcher, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.addEventListener('mousedown', this.handleClickOutside);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      document.removeEventListener('mousedown', this.handleClickOutside);\n    }\n  }, {\n    key: \"doSwitch\",\n    value: function () {\n      var _doSwitch = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(loginid) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.props.toggle();\n\n                if (!(this.props.account_loginid === loginid)) {\n                  _context.next = 3;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 3:\n                _context.next = 5;\n                return this.props.switchAccount(loginid);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function doSwitch(_x) {\n        return _doSwitch.apply(this, arguments);\n      }\n\n      return doSwitch;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      if (!this.props.is_logged_in) return false; // TODO: Once we allow other real accounts (apart from CR), assign correct title and group accounts into list with correct account title/types\n      // e.g - Real, Financial, Gaming, Investment\n\n      var real_accounts = this.props.account_list.filter(function (acc) {\n        return !acc.is_virtual;\n      });\n      var vrt_account = this.props.account_list.find(function (acc) {\n        return acc.is_virtual;\n      });\n      var main_account_title = real_accounts.length > 1 ? Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Real accounts') : Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Real account');\n\n      var UpgradeButton = function UpgradeButton(_ref) {\n        var text = _ref.text;\n        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          className: \"acc-switcher__new-account\"\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", {\n          className: \"acc-switcher__new-account-link\",\n          href: Object(_common_url__WEBPACK_IMPORTED_MODULE_4__[\"urlFor\"])('user/accounts', undefined, undefined, true),\n          rel: \"noopener noreferrer\",\n          target: \"_blank\"\n        }, text));\n      };\n\n      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"acc-switcher__list\",\n        ref: this.setWrapperRef\n      }, // Make sure this block is not rendered if there are no real accounts\n      !!(this.props.account_list.length && real_accounts.length) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"acc-switcher__list-group\"\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        className: \"acc-switcher__list-title\"\n      }, main_account_title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"acc-switcher__accounts\"\n      }, real_accounts.map(function (account) {\n        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n          key: account.loginid,\n          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('acc-switcher__account', {\n            'acc-switcher__account--selected': account.loginid === _this2.props.account_loginid\n          }),\n          onClick: _this2.doSwitch.bind(_this2, account.loginid)\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n          className: 'acc-switcher__id'\n        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          icon: \"IconAccountsCurrency\",\n          className: \"acc-switcher__id-icon acc-switcher__id-icon--\".concat(account.icon),\n          type: account.icon\n        }), account.loginid));\n      })), // TODO: Add link to account opening page for upgrade or multi account page for new account.\n      // Update text below for handling types of account to create :- e.g - Investment\n      !!(this.props.is_upgrade_enabled && this.props.upgrade_info.can_open_multi) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UpgradeButton, {\n        text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Add new account')\n      })), !Object(_common_utility__WEBPACK_IMPORTED_MODULE_5__[\"isEmptyObject\"])(vrt_account) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"acc-switcher__list--virtual\"\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        className: \"acc-switcher__list-title\"\n      }, Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Virtual account')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"acc-switcher__accounts\"\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('acc-switcher__account', {\n          'acc-switcher__account--selected': this.props.virtual_loginid === this.props.account_loginid\n        }),\n        onClick: this.doSwitch.bind(this, this.props.virtual_loginid)\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('acc-switcher__id', 'acc-switcher__id--virtual')\n      }, this.props.virtual_loginid)))), !!(this.props.is_upgrade_enabled && this.props.is_virtual) && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UpgradeButton, {\n        text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Upgrade to Real Account')\n      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"acc-switcher__logout\",\n        onClick: this.handleLogout\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n        className: \"acc-switcher__logout-text\"\n      }, Object(App_i18n__WEBPACK_IMPORTED_MODULE_3__[\"localize\"])('Log out')), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        icon: \"IconLogout\",\n        className: \"acc-switcher__logout-icon drawer__icon\"\n      })));\n    }\n  }]);\n\n  return AccountSwitcher;\n}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);\n\nAccountSwitcher.propTypes = {\n  account_list: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  account_loginid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  cleanUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  clearError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  has_error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_logged_in: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_positions_drawer_on: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_upgrade_enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_virtual: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  onClickUpgrade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  togglePositionsDrawer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  upgrade_info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  virtual_loginid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\nvar account_switcher = Object(Stores_connect__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (_ref2) {\n  var client = _ref2.client,\n      ui = _ref2.ui;\n  return {\n    account_list: client.account_list,\n    account_loginid: client.loginid,\n    is_logged_in: client.is_logged_in,\n    is_virtual: client.is_virtual,\n    switchAccount: client.switchAccount,\n    upgrade_info: client.upgrade_info,\n    cleanUp: client.cleanUp,\n    virtual_loginid: client.virtual_account_loginid,\n    // clearError            : modules.contract_trade.clearError,\n    // has_error             : modules.contract_trade.has_error,\n    is_positions_drawer_on: ui.is_positions_drawer_on,\n    togglePositionsDrawer: ui.togglePositionsDrawer\n  };\n})(AccountSwitcher);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9BY2NvdW50U3dpdGNoZXIvYWNjb3VudC1zd2l0Y2hlci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9BY2NvdW50U3dpdGNoZXIvYWNjb3VudC1zd2l0Y2hlci5qc3g/OTNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyAgICAgICAgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzICAgICAgICAgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSAgICAgIGZyb20gJ0FwcC9pMThuJztcbmltcG9ydCB7IHVybEZvciB9ICAgICAgICBmcm9tICdfY29tbW9uL3VybCc7XG5pbXBvcnQgeyBpc0VtcHR5T2JqZWN0IH0gZnJvbSAnX2NvbW1vbi91dGlsaXR5JztcbmltcG9ydCBJY29uICAgICAgICAgICAgICBmcm9tICdBc3NldHMvaWNvbi5qc3gnO1xuaW1wb3J0IHsgcmVxdWVzdExvZ291dCB9IGZyb20gJ1NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSAgICAgICBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5cbmNsYXNzIEFjY291bnRTd2l0Y2hlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2V0V3JhcHBlclJlZiA9IChub2RlKSA9PiB7XG4gICAgICAgIHRoaXMud3JhcHBlcl9yZWYgPSBub2RlO1xuICAgIH07XG5cbiAgICBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHNfdG9nZ2xlX2J0biA9ICEoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWNjLWluZm8nKSk7XG4gICAgICAgIGlmICh0aGlzLndyYXBwZXJfcmVmICYmICF0aGlzLndyYXBwZXJfcmVmLmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICAgICAgICYmIHRoaXMucHJvcHMuaXNfdmlzaWJsZSAmJiBhY2NvdW50c190b2dnbGVfYnRuKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNfcG9zaXRpb25zX2RyYXdlcl9vbikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b2dnbGVQb3NpdGlvbnNEcmF3ZXIoKTsgLy8gVE9ETzogaGlkZSBkcmF3ZXIgaW5zaWRlIGxvZ291dCwgb25jZSBpdCBpcyBhIG1vYnggYWN0aW9uXG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdExvZ291dCgpLnRoZW4odGhpcy5wcm9wcy5jbGVhblVwKTtcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGRvU3dpdGNoKGxvZ2luaWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b2dnbGUoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWNjb3VudF9sb2dpbmlkID09PSBsb2dpbmlkKSByZXR1cm47XG4gICAgICAgIGF3YWl0IHRoaXMucHJvcHMuc3dpdGNoQWNjb3VudChsb2dpbmlkKTtcblxuICAgICAgICAvKiBpZiAodGhpcy5wcm9wcy5oYXNfZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xlYXJFcnJvcigpO1xuICAgICAgICB9ICovXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMuaXNfbG9nZ2VkX2luKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIFRPRE86IE9uY2Ugd2UgYWxsb3cgb3RoZXIgcmVhbCBhY2NvdW50cyAoYXBhcnQgZnJvbSBDUiksIGFzc2lnbiBjb3JyZWN0IHRpdGxlIGFuZCBncm91cCBhY2NvdW50cyBpbnRvIGxpc3Qgd2l0aCBjb3JyZWN0IGFjY291bnQgdGl0bGUvdHlwZXNcbiAgICAgICAgLy8gZS5nIC0gUmVhbCwgRmluYW5jaWFsLCBHYW1pbmcsIEludmVzdG1lbnRcbiAgICAgICAgY29uc3QgcmVhbF9hY2NvdW50cyA9IHRoaXMucHJvcHMuYWNjb3VudF9saXN0LmZpbHRlcihhY2MgPT4gIWFjYy5pc192aXJ0dWFsKTtcbiAgICAgICAgY29uc3QgdnJ0X2FjY291bnQgICA9IHRoaXMucHJvcHMuYWNjb3VudF9saXN0LmZpbmQoYWNjID0+IGFjYy5pc192aXJ0dWFsKTtcblxuICAgICAgICBjb25zdCBtYWluX2FjY291bnRfdGl0bGUgPSByZWFsX2FjY291bnRzLmxlbmd0aCA+IDEgPyBsb2NhbGl6ZSgnUmVhbCBhY2NvdW50cycpIDogbG9jYWxpemUoJ1JlYWwgYWNjb3VudCcpO1xuXG4gICAgICAgIGNvbnN0IFVwZ3JhZGVCdXR0b24gPSAoeyB0ZXh0IH0pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX25ldy1hY2NvdW50Jz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FjYy1zd2l0Y2hlcl9fbmV3LWFjY291bnQtbGluaydcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsRm9yKCd1c2VyL2FjY291bnRzJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRydWUpfVxuICAgICAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX2xpc3QnIHJlZj17dGhpcy5zZXRXcmFwcGVyUmVmfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzIGJsb2NrIGlzIG5vdCByZW5kZXJlZCBpZiB0aGVyZSBhcmUgbm8gcmVhbCBhY2NvdW50c1xuICAgICAgICAgICAgICAgICAgICAhISh0aGlzLnByb3BzLmFjY291bnRfbGlzdC5sZW5ndGggJiYgcmVhbF9hY2NvdW50cy5sZW5ndGgpICYmXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX2xpc3QtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX2xpc3QtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYWluX2FjY291bnRfdGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWNjLXN3aXRjaGVyX19hY2NvdW50cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFsX2FjY291bnRzLm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YWNjb3VudC5sb2dpbmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjLXN3aXRjaGVyX19hY2NvdW50Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWNjLXN3aXRjaGVyX19hY2NvdW50LS1zZWxlY3RlZCc6IChhY2NvdW50LmxvZ2luaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudF9sb2dpbmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRvU3dpdGNoLmJpbmQodGhpcywgYWNjb3VudC5sb2dpbmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydhY2Mtc3dpdGNoZXJfX2lkJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSdJY29uQWNjb3VudHNDdXJyZW5jeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFjYy1zd2l0Y2hlcl9faWQtaWNvbiBhY2Mtc3dpdGNoZXJfX2lkLWljb24tLSR7YWNjb3VudC5pY29ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXthY2NvdW50Lmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmxvZ2luaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgICAvLyBUT0RPOiBBZGQgbGluayB0byBhY2NvdW50IG9wZW5pbmcgcGFnZSBmb3IgdXBncmFkZSBvciBtdWx0aSBhY2NvdW50IHBhZ2UgZm9yIG5ldyBhY2NvdW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0ZXh0IGJlbG93IGZvciBoYW5kbGluZyB0eXBlcyBvZiBhY2NvdW50IHRvIGNyZWF0ZSA6LSBlLmcgLSBJbnZlc3RtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgISEodGhpcy5wcm9wcy5pc191cGdyYWRlX2VuYWJsZWQgJiYgdGhpcy5wcm9wcy51cGdyYWRlX2luZm8uY2FuX29wZW5fbXVsdGkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwZ3JhZGVCdXR0b24gdGV4dD17bG9jYWxpemUoJ0FkZCBuZXcgYWNjb3VudCcpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAhaXNFbXB0eU9iamVjdCh2cnRfYWNjb3VudCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjYy1zd2l0Y2hlcl9fbGlzdC0tdmlydHVhbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2FjYy1zd2l0Y2hlcl9fbGlzdC10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKCdWaXJ0dWFsIGFjY291bnQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX2FjY291bnRzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjLXN3aXRjaGVyX19hY2NvdW50Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjYy1zd2l0Y2hlcl9fYWNjb3VudC0tc2VsZWN0ZWQnOiAodGhpcy5wcm9wcy52aXJ0dWFsX2xvZ2luaWQgPT09IHRoaXMucHJvcHMuYWNjb3VudF9sb2dpbmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZG9Td2l0Y2guYmluZCh0aGlzLCB0aGlzLnByb3BzLnZpcnR1YWxfbG9naW5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjYy1zd2l0Y2hlcl9faWQnLCAnYWNjLXN3aXRjaGVyX19pZC0tdmlydHVhbCcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnZpcnR1YWxfbG9naW5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7ICEhKHRoaXMucHJvcHMuaXNfdXBncmFkZV9lbmFibGVkICYmIHRoaXMucHJvcHMuaXNfdmlydHVhbCkgJiZcbiAgICAgICAgICAgICAgICAgICAgPFVwZ3JhZGVCdXR0b24gdGV4dD17bG9jYWxpemUoJ1VwZ3JhZGUgdG8gUmVhbCBBY2NvdW50Jyl9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX2xvZ291dCcgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2FjYy1zd2l0Y2hlcl9fbG9nb3V0LXRleHQnPntsb2NhbGl6ZSgnTG9nIG91dCcpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNvbkxvZ291dCcgY2xhc3NOYW1lPSdhY2Mtc3dpdGNoZXJfX2xvZ291dC1pY29uIGRyYXdlcl9faWNvbicgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQWNjb3VudFN3aXRjaGVyLnByb3BUeXBlcyA9IHtcbiAgICBhY2NvdW50X2xpc3QgICAgICAgICAgOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYWNjb3VudF9sb2dpbmlkICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGVhblVwICAgICAgICAgICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjbGVhckVycm9yICAgICAgICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNfZXJyb3IgICAgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc19sb2dnZWRfaW4gICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc19wb3NpdGlvbnNfZHJhd2VyX29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc191cGdyYWRlX2VuYWJsZWQgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc192aXJ0dWFsICAgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc192aXNpYmxlICAgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsaWNrVXBncmFkZSAgICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0b2dnbGUgICAgICAgICAgICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0b2dnbGVQb3NpdGlvbnNEcmF3ZXIgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB1cGdyYWRlX2luZm8gICAgICAgICAgOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZpcnR1YWxfbG9naW5pZCAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5jb25zdCBhY2NvdW50X3N3aXRjaGVyID0gY29ubmVjdChcbiAgICAoeyBjbGllbnQsIHVpLyogLCBtb2R1bGVzICovIH0pID0+ICh7XG4gICAgICAgIGFjY291bnRfbGlzdCAgICAgICAgICA6IGNsaWVudC5hY2NvdW50X2xpc3QsXG4gICAgICAgIGFjY291bnRfbG9naW5pZCAgICAgICA6IGNsaWVudC5sb2dpbmlkLFxuICAgICAgICBpc19sb2dnZWRfaW4gICAgICAgICAgOiBjbGllbnQuaXNfbG9nZ2VkX2luLFxuICAgICAgICBpc192aXJ0dWFsICAgICAgICAgICAgOiBjbGllbnQuaXNfdmlydHVhbCxcbiAgICAgICAgc3dpdGNoQWNjb3VudCAgICAgICAgIDogY2xpZW50LnN3aXRjaEFjY291bnQsXG4gICAgICAgIHVwZ3JhZGVfaW5mbyAgICAgICAgICA6IGNsaWVudC51cGdyYWRlX2luZm8sXG4gICAgICAgIGNsZWFuVXAgICAgICAgICAgICAgICA6IGNsaWVudC5jbGVhblVwLFxuICAgICAgICB2aXJ0dWFsX2xvZ2luaWQgICAgICAgOiBjbGllbnQudmlydHVhbF9hY2NvdW50X2xvZ2luaWQsXG4gICAgICAgIC8vIGNsZWFyRXJyb3IgICAgICAgICAgICA6IG1vZHVsZXMuY29udHJhY3RfdHJhZGUuY2xlYXJFcnJvcixcbiAgICAgICAgLy8gaGFzX2Vycm9yICAgICAgICAgICAgIDogbW9kdWxlcy5jb250cmFjdF90cmFkZS5oYXNfZXJyb3IsXG4gICAgICAgIGlzX3Bvc2l0aW9uc19kcmF3ZXJfb246IHVpLmlzX3Bvc2l0aW9uc19kcmF3ZXJfb24sXG4gICAgICAgIHRvZ2dsZVBvc2l0aW9uc0RyYXdlciA6IHVpLnRvZ2dsZVBvc2l0aW9uc0RyYXdlcixcbiAgICB9KSxcbikoQWNjb3VudFN3aXRjaGVyKTtcblxuZXhwb3J0IHsgYWNjb3VudF9zd2l0Y2hlciBhcyBBY2NvdW50U3dpdGNoZXIgfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQXNCQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFNQTtBQUFBO0FBUUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTs7OztBQWpJQTtBQUNBO0FBbUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFrQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/AccountSwitcher/account-switcher.jsx\n");

/***/ }),

/***/ "./App/Containers/AccountSwitcher/index.js":
/*!*************************************************!*\
  !*** ./App/Containers/AccountSwitcher/index.js ***!
  \*************************************************/
/*! exports provided: AccountSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _account_switcher_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-switcher.jsx */ \"./App/Containers/AccountSwitcher/account-switcher.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AccountSwitcher\", function() { return _account_switcher_jsx__WEBPACK_IMPORTED_MODULE_0__[\"AccountSwitcher\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9BY2NvdW50U3dpdGNoZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9BY2NvdW50U3dpdGNoZXIvaW5kZXguanM/MGJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FjY291bnQtc3dpdGNoZXIuanN4JztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/AccountSwitcher/index.js\n");

/***/ })

}]);