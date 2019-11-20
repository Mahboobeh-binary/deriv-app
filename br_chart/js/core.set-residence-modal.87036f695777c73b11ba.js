(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["set-residence-modal"],{

/***/ "./App/Containers/SetResidenceModal/index.js":
/*!***************************************************!*\
  !*** ./App/Containers/SetResidenceModal/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _set_residence_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-residence-modal.jsx */ \"./App/Containers/SetResidenceModal/set-residence-modal.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _set_residence_modal_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldFJlc2lkZW5jZU1vZGFsL2luZGV4LmpzPzlkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zZXQtcmVzaWRlbmNlLW1vZGFsLmpzeCc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/index.js\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/set-residence-form.jsx":
/*!*****************************************************************!*\
  !*** ./App/Containers/SetResidenceModal/set-residence-form.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var deriv_components_lib_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deriv-components/lib/autocomplete */ \"../../components/lib/autocomplete.js\");\n/* harmony import */ var deriv_components_lib_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_autocomplete__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deriv_components_lib_autocomplete_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deriv-components/lib/autocomplete.css */ \"../../components/lib/autocomplete.css\");\n/* harmony import */ var deriv_components_lib_autocomplete_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_autocomplete_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n        \n\n\n\n\n\nvar SetResidenceForm = function SetResidenceForm(_ref) {\n  var _ref$class_prefix = _ref.class_prefix,\n      class_prefix = _ref$class_prefix === void 0 ? 'set-residence' : _ref$class_prefix,\n      children = _ref.children,\n      header_text = _ref.header_text,\n      errors = _ref.errors,\n      touched = _ref.touched,\n      setFieldValue = _ref.setFieldValue,\n      residence_list = _ref.residence_list;\n  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    className: \"\".concat(class_prefix, \"__residence-selection\")\n  }, !!header_text && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"p\", {\n    className: \"\".concat(class_prefix, \"__heading\")\n  }, header_text), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"p\", {\n    className: \"\".concat(class_prefix, \"__\").concat(header_text ? 'text' : 'heading')\n  }, Object(App_i18n__WEBPACK_IMPORTED_MODULE_5__[\"localize\"])('Where do you live?')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__[\"Field\"], {\n    name: \"residence\"\n  }, function (_ref2) {\n    var field = _ref2.field;\n    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(deriv_components_lib_autocomplete__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({}, field, {\n      autoComplete: \"off\",\n      className: \"\".concat(class_prefix, \"__residence-field\"),\n      dropdown_offset: \"3.2rem\",\n      type: \"text\",\n      label: Object(App_i18n__WEBPACK_IMPORTED_MODULE_5__[\"localize\"])('Choose country'),\n      error: touched.residence && errors.residence,\n      required: true,\n      list_items: residence_list,\n      onItemSelection: function onItemSelection(_ref3) {\n        var value = _ref3.value,\n            text = _ref3.text;\n        return setFieldValue('residence', value ? text : '', true);\n      }\n    }));\n  }), children);\n};\n\nSetResidenceForm.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,\n  class_prefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  header_text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SetResidenceForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9zZXQtcmVzaWRlbmNlLWZvcm0uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvU2V0UmVzaWRlbmNlTW9kYWwvc2V0LXJlc2lkZW5jZS1mb3JtLmpzeD85NmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dG9jb21wbGV0ZSB9IGZyb20gJ2Rlcml2LWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRmllbGQgfSAgICAgICAgZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgICAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSAgICAgZnJvbSAnQXBwL2kxOG4nO1xuXG5jb25zdCBTZXRSZXNpZGVuY2VGb3JtID0gKHtcbiAgICBjbGFzc19wcmVmaXggPSAnc2V0LXJlc2lkZW5jZScsXG4gICAgY2hpbGRyZW4sXG4gICAgaGVhZGVyX3RleHQsXG4gICAgZXJyb3JzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0RmllbGRWYWx1ZSxcbiAgICByZXNpZGVuY2VfbGlzdCxcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NfcHJlZml4fV9fcmVzaWRlbmNlLXNlbGVjdGlvbmB9PlxuICAgICAgICAgICAgeyAhIWhlYWRlcl90ZXh0ICYmXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2NsYXNzX3ByZWZpeH1fX2hlYWRpbmdgfT5cbiAgICAgICAgICAgICAgICB7aGVhZGVyX3RleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2NsYXNzX3ByZWZpeH1fXyR7aGVhZGVyX3RleHQgPyAndGV4dCcgOiAnaGVhZGluZyd9YH0+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKCdXaGVyZSBkbyB5b3UgbGl2ZT8nKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdyZXNpZGVuY2UnPlxuICAgICAgICAgICAgICAgIHsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uZmllbGQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzX3ByZWZpeH1fX3Jlc2lkZW5jZS1maWVsZGB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bl9vZmZzZXQ9JzMuMnJlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17IGxvY2FsaXplKCdDaG9vc2UgY291bnRyeScpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXsgdG91Y2hlZC5yZXNpZGVuY2UgJiYgZXJyb3JzLnJlc2lkZW5jZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9pdGVtcz17IHJlc2lkZW5jZV9saXN0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSXRlbVNlbGVjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHsgdmFsdWUsIHRleHQgfSkgPT4gc2V0RmllbGRWYWx1ZSgncmVzaWRlbmNlJywgdmFsdWUgPyB0ZXh0IDogJycsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5TZXRSZXNpZGVuY2VGb3JtLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbiAgICAgIDogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2xhc3NfcHJlZml4ICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGVhZGVyX3RleHQgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVzaWRlbmNlX2xpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0UmVzaWRlbmNlRm9ybTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFEQTtBQW9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/set-residence-form.jsx\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/set-residence-modal.jsx":
/*!******************************************************************!*\
  !*** ./App/Containers/SetResidenceModal/set-residence-modal.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deriv-components/lib/button */ \"../../components/lib/button.js\");\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deriv-components/lib/button.css */ \"../../components/lib/button.css\");\n/* harmony import */ var deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var deriv_components_lib_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deriv-components/lib/dialog */ \"../../components/lib/dialog.js\");\n/* harmony import */ var deriv_components_lib_dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_dialog__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var deriv_components_lib_dialog_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deriv-components/lib/dialog.css */ \"../../components/lib/dialog.css\");\n/* harmony import */ var deriv_components_lib_dialog_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_dialog_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var App_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! App/i18n */ \"./App/i18n.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var App_Constants_app_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! App/Constants/app-config */ \"./App/Constants/app-config.js\");\n/* harmony import */ var _set_residence_form_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./set-residence-form.jsx */ \"./App/Containers/SetResidenceModal/set-residence-form.jsx\");\n/* harmony import */ var Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Sass/app/modules/set-residence.scss */ \"./sass/app/modules/set-residence.scss\");\n/* harmony import */ var Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_12__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n        \n\n\n\n        \n\n\n\n\n\n\n\n // TODO: Move some of these functions to helpers since some of them are shared with AccountSignUpModal\n\nvar isResidenceText = function isResidenceText(item, values) {\n  return item.text.toLowerCase() === values.residence.toLowerCase();\n};\n\nvar validateResidence = function validateResidence(values, residence_list) {\n  var errors = {};\n\n  if (!values.residence) {\n    errors.residence = true;\n  } else {\n    var index_of_selection = residence_list.findIndex(function (item) {\n      return isResidenceText(item, values);\n    });\n\n    if (index_of_selection === -1 || residence_list[index_of_selection].disabled === 'DISABLED') {\n      errors.residence = Object(App_i18n__WEBPACK_IMPORTED_MODULE_8__[\"localize\"])('Unfortunately, {{website_name}} is not available in your country.', {\n        website_name: App_Constants_app_config__WEBPACK_IMPORTED_MODULE_10__[\"website_name\"]\n      });\n    }\n  }\n\n  return errors;\n};\n\nvar SetResidence =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(SetResidence, _React$Component);\n\n  function SetResidence() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, SetResidence);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SetResidence)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.onSetResidenceComplete = function (error) {\n      // TODO: Proper error handling (currently we have no place to put the message)\n      if (error) {\n        throw Error(error);\n      } // Handle lower level modal controls due to overriding modal rendering\n\n\n      _this.props.isModalVisible(false);\n\n      _this.props.enableApp();\n    };\n\n    return _this;\n  }\n\n  _createClass(SetResidence, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          onSetResidence = _this$props.onSetResidence,\n          residence_list = _this$props.residence_list;\n\n      var onSetResidencePassthrough = function onSetResidencePassthrough(values) {\n        var index_of_selection = residence_list.findIndex(function (item) {\n          return isResidenceText(item, values);\n        });\n\n        var modded_values = _objectSpread({}, values, {\n          residence: residence_list[index_of_selection].value\n        });\n\n        onSetResidence(modded_values, _this2.onSetResidenceComplete);\n      };\n\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: \"set-residence\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__[\"Formik\"], {\n        initialValues: {\n          residence: ''\n        },\n        validate: function validate(values) {\n          return validateResidence(values, residence_list);\n        },\n        onSubmit: onSetResidencePassthrough\n      }, function (_ref) {\n        var isSubmitting = _ref.isSubmitting,\n            errors = _ref.errors,\n            values = _ref.values,\n            setFieldValue = _ref.setFieldValue,\n            touched = _ref.touched;\n        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__[\"Form\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_set_residence_form_jsx__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          errors: errors,\n          touched: touched,\n          setFieldValue: setFieldValue,\n          residence_list: residence_list\n        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"p\", {\n          className: \"set-residence__subtext\"\n        }, Object(App_i18n__WEBPACK_IMPORTED_MODULE_8__[\"localize\"])('We need this to make sure our service complies with laws and regulations in your country.')), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('set-residence__btn', {\n            'set-residence__btn--disabled': !values.residence || errors.residence || isSubmitting\n          }),\n          type: \"submit\",\n          is_disabled: !values.residence || !!errors.residence || isSubmitting,\n          text: Object(App_i18n__WEBPACK_IMPORTED_MODULE_8__[\"localize\"])('Set residence'),\n          primary: true\n        }))));\n      }));\n    }\n  }]);\n\n  return SetResidence;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\nSetResidence.propTypes = {\n  onSetResidence: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array\n};\n\nvar SetResidenceModal = function SetResidenceModal(_ref2) {\n  var enableApp = _ref2.enableApp,\n      disableApp = _ref2.disableApp,\n      is_loading = _ref2.is_loading,\n      is_visible = _ref2.is_visible,\n      onSetResidence = _ref2.onSetResidence,\n      residence_list = _ref2.residence_list,\n      toggleSetResidenceModal = _ref2.toggleSetResidenceModal;\n  if (residence_list.length < 1) return null;\n  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(deriv_components_lib_dialog__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading || !residence_list.length,\n    is_content_centered: true\n  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SetResidence, {\n    onSetResidence: onSetResidence,\n    residence_list: residence_list,\n    isModalVisible: toggleSetResidenceModal,\n    enableApp: enableApp\n  }));\n};\n\nSetResidenceModal.propTypes = {\n  disableApp: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,\n  enableApp: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  is_visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,\n  onSetResidence: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(function (_ref3) {\n  var ui = _ref3.ui,\n      client = _ref3.client;\n  return {\n    is_visible: ui.is_set_residence_modal_visible,\n    toggleSetResidenceModal: ui.toggleSetResidenceModal,\n    enableApp: ui.enableApp,\n    disableApp: ui.disableApp,\n    is_loading: ui.is_loading,\n    onSetResidence: client.onSetResidence,\n    residence_list: client.residence_list\n  };\n})(SetResidenceModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9zZXQtcmVzaWRlbmNlLW1vZGFsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldFJlc2lkZW5jZU1vZGFsL3NldC1yZXNpZGVuY2UtbW9kYWwuanN4PzRiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgICAgICAgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge1xuICAgIEJ1dHRvbixcbiAgICBEaWFsb2cgfSAgICAgICAgICAgIGZyb20gJ2Rlcml2LWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgICBGb3JtaWssXG4gICAgRm9ybSB9ICAgICAgICAgICAgICBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFByb3BUeXBlcyAgICAgICAgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgICAgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9ICAgICBmcm9tICdBcHAvaTE4bic7XG5pbXBvcnQgeyBjb25uZWN0IH0gICAgICBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5pbXBvcnQgeyB3ZWJzaXRlX25hbWUgfSBmcm9tICdBcHAvQ29uc3RhbnRzL2FwcC1jb25maWcnO1xuaW1wb3J0IFJlc2lkZW5jZUZvcm0gICAgZnJvbSAnLi9zZXQtcmVzaWRlbmNlLWZvcm0uanN4JztcbmltcG9ydCAgICAgICAgICAgICAgICAgICAgICAgJ1Nhc3MvYXBwL21vZHVsZXMvc2V0LXJlc2lkZW5jZS5zY3NzJztcblxuLy8gVE9ETzogTW92ZSBzb21lIG9mIHRoZXNlIGZ1bmN0aW9ucyB0byBoZWxwZXJzIHNpbmNlIHNvbWUgb2YgdGhlbSBhcmUgc2hhcmVkIHdpdGggQWNjb3VudFNpZ25VcE1vZGFsXG5jb25zdCBpc1Jlc2lkZW5jZVRleHQgPSAoaXRlbSwgdmFsdWVzKSA9PiBpdGVtLnRleHQudG9Mb3dlckNhc2UoKSA9PT0gdmFsdWVzLnJlc2lkZW5jZS50b0xvd2VyQ2FzZSgpO1xuXG5jb25zdCB2YWxpZGF0ZVJlc2lkZW5jZSA9ICh2YWx1ZXMsIHJlc2lkZW5jZV9saXN0KSA9PiB7XG4gICAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgICBpZiAoIXZhbHVlcy5yZXNpZGVuY2UpIHtcbiAgICAgICAgZXJyb3JzLnJlc2lkZW5jZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5kZXhfb2Zfc2VsZWN0aW9uID0gcmVzaWRlbmNlX2xpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpc1Jlc2lkZW5jZVRleHQoaXRlbSwgdmFsdWVzKSk7XG5cbiAgICAgICAgaWYgKGluZGV4X29mX3NlbGVjdGlvbiA9PT0gLTEgfHwgcmVzaWRlbmNlX2xpc3RbaW5kZXhfb2Zfc2VsZWN0aW9uXS5kaXNhYmxlZCA9PT0gJ0RJU0FCTEVEJykge1xuICAgICAgICAgICAgZXJyb3JzLnJlc2lkZW5jZSA9IGxvY2FsaXplKCdVbmZvcnR1bmF0ZWx5LCB7e3dlYnNpdGVfbmFtZX19IGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBjb3VudHJ5LicsIHsgd2Vic2l0ZV9uYW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNsYXNzIFNldFJlc2lkZW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25TZXRSZXNpZGVuY2VDb21wbGV0ZSA9IChlcnJvcikgPT4ge1xuICAgICAgICAvLyBUT0RPOiBQcm9wZXIgZXJyb3IgaGFuZGxpbmcgKGN1cnJlbnRseSB3ZSBoYXZlIG5vIHBsYWNlIHRvIHB1dCB0aGUgbWVzc2FnZSlcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGxvd2VyIGxldmVsIG1vZGFsIGNvbnRyb2xzIGR1ZSB0byBvdmVycmlkaW5nIG1vZGFsIHJlbmRlcmluZ1xuICAgICAgICB0aGlzLnByb3BzLmlzTW9kYWxWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5lbmFibGVBcHAoKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG9uU2V0UmVzaWRlbmNlLCByZXNpZGVuY2VfbGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgb25TZXRSZXNpZGVuY2VQYXNzdGhyb3VnaCA9ICh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4X29mX3NlbGVjdGlvbiA9IHJlc2lkZW5jZV9saXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXNSZXNpZGVuY2VUZXh0KGl0ZW0sIHZhbHVlcykpO1xuICAgICAgICAgICAgY29uc3QgbW9kZGVkX3ZhbHVlcyA9IHsgLi4udmFsdWVzLCByZXNpZGVuY2U6IHJlc2lkZW5jZV9saXN0W2luZGV4X29mX3NlbGVjdGlvbl0udmFsdWUgfTtcbiAgICAgICAgICAgIG9uU2V0UmVzaWRlbmNlKG1vZGRlZF92YWx1ZXMsIHRoaXMub25TZXRSZXNpZGVuY2VDb21wbGV0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0LXJlc2lkZW5jZSc+XG4gICAgICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXsgeyByZXNpZGVuY2U6ICcnIH0gfVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZT17ICh2YWx1ZXMpID0+IHZhbGlkYXRlUmVzaWRlbmNlKHZhbHVlcywgcmVzaWRlbmNlX2xpc3QpIH1cbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyBvblNldFJlc2lkZW5jZVBhc3N0aHJvdWdoIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIGVycm9ycywgdmFsdWVzLCBzZXRGaWVsZFZhbHVlLCB0b3VjaGVkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2lkZW5jZUZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpZGVuY2VfbGlzdD17cmVzaWRlbmNlX2xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2V0LXJlc2lkZW5jZV9fc3VidGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKCdXZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIG91ciBzZXJ2aWNlIGNvbXBsaWVzIHdpdGggbGF3cyBhbmQgcmVndWxhdGlvbnMgaW4geW91ciBjb3VudHJ5LicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2V0LXJlc2lkZW5jZV9fYnRuJywgeyAnc2V0LXJlc2lkZW5jZV9fYnRuLS1kaXNhYmxlZCc6ICF2YWx1ZXMucmVzaWRlbmNlIHx8IGVycm9ycy5yZXNpZGVuY2UgfHwgaXNTdWJtaXR0aW5nIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlZD17ICF2YWx1ZXMucmVzaWRlbmNlIHx8ICEhZXJyb3JzLnJlc2lkZW5jZSB8fCBpc1N1Ym1pdHRpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdTZXQgcmVzaWRlbmNlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZXNpZGVuY2VGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblNldFJlc2lkZW5jZS5wcm9wVHlwZXMgPSB7XG4gICAgb25TZXRSZXNpZGVuY2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlc2lkZW5jZV9saXN0OiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5jb25zdCBTZXRSZXNpZGVuY2VNb2RhbCA9ICh7XG4gICAgZW5hYmxlQXBwLFxuICAgIGRpc2FibGVBcHAsXG4gICAgaXNfbG9hZGluZyxcbiAgICBpc192aXNpYmxlLFxuICAgIG9uU2V0UmVzaWRlbmNlLFxuICAgIHJlc2lkZW5jZV9saXN0LFxuICAgIHRvZ2dsZVNldFJlc2lkZW5jZU1vZGFsLFxufSkgPT4ge1xuICAgIGlmIChyZXNpZGVuY2VfbGlzdC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICBpc192aXNpYmxlPXtpc192aXNpYmxlfVxuICAgICAgICAgICAgZGlzYWJsZUFwcD17ZGlzYWJsZUFwcH1cbiAgICAgICAgICAgIGVuYWJsZUFwcD17ZW5hYmxlQXBwfVxuICAgICAgICAgICAgaXNfbG9hZGluZz17aXNfbG9hZGluZyB8fCAhcmVzaWRlbmNlX2xpc3QubGVuZ3RofVxuICAgICAgICAgICAgaXNfY29udGVudF9jZW50ZXJlZFxuICAgICAgICA+XG4gICAgICAgICAgICA8U2V0UmVzaWRlbmNlXG4gICAgICAgICAgICAgICAgb25TZXRSZXNpZGVuY2U9e29uU2V0UmVzaWRlbmNlfVxuICAgICAgICAgICAgICAgIHJlc2lkZW5jZV9saXN0PXtyZXNpZGVuY2VfbGlzdH1cbiAgICAgICAgICAgICAgICBpc01vZGFsVmlzaWJsZT17dG9nZ2xlU2V0UmVzaWRlbmNlTW9kYWx9XG4gICAgICAgICAgICAgICAgZW5hYmxlQXBwPXtlbmFibGVBcHB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZz5cbiAgICApO1xufTtcblxuU2V0UmVzaWRlbmNlTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVBcHAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlbmFibGVBcHAgICAgIDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNfbG9hZGluZyAgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzX3Zpc2libGUgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNldFJlc2lkZW5jZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVzaWRlbmNlX2xpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoeyB1aSwgY2xpZW50IH0pID0+ICh7XG4gICAgICAgIGlzX3Zpc2libGUgICAgICAgICAgICAgOiB1aS5pc19zZXRfcmVzaWRlbmNlX21vZGFsX3Zpc2libGUsXG4gICAgICAgIHRvZ2dsZVNldFJlc2lkZW5jZU1vZGFsOiB1aS50b2dnbGVTZXRSZXNpZGVuY2VNb2RhbCxcbiAgICAgICAgZW5hYmxlQXBwICAgICAgICAgICAgICA6IHVpLmVuYWJsZUFwcCxcbiAgICAgICAgZGlzYWJsZUFwcCAgICAgICAgICAgICA6IHVpLmRpc2FibGVBcHAsXG4gICAgICAgIGlzX2xvYWRpbmcgICAgICAgICAgICAgOiB1aS5pc19sb2FkaW5nLFxuICAgICAgICBvblNldFJlc2lkZW5jZSAgICAgICAgIDogY2xpZW50Lm9uU2V0UmVzaWRlbmNlLFxuICAgICAgICByZXNpZGVuY2VfbGlzdCAgICAgICAgIDogY2xpZW50LnJlc2lkZW5jZV9saXN0LFxuICAgIH0pLFxuKShTZXRSZXNpZGVuY2VNb2RhbCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBOztBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVpBO0FBMEJBOzs7O0FBbkRBOztBQXNEQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/set-residence-modal.jsx\n");

/***/ }),

/***/ "./sass/app/modules/set-residence.scss":
/*!*********************************************!*\
  !*** ./sass/app/modules/set-residence.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9tb2R1bGVzL3NldC1yZXNpZGVuY2Uuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvYXBwL21vZHVsZXMvc2V0LXJlc2lkZW5jZS5zY3NzP2IwNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sass/app/modules/set-residence.scss\n");

/***/ })

}]);