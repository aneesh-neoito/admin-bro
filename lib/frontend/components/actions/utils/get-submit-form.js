"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@admin-bro/design-system");

var _designSystemWrapper = require("../../libs/design-system-wrapper");

var _useTranslation = require("../../../hooks/use-translation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const submitForm = ({
  props,
  loading
}) => {
  var _action$custom;

  const {
    resource,
    action
  } = props;
  const {
    translateButton
  } = (0, _useTranslation.useTranslation)();
  const {
    submitForm
  } = (_action$custom = action === null || action === void 0 ? void 0 : action.custom) !== null && _action$custom !== void 0 ? _action$custom : {};

  if (submitForm === false) {
    return '';
  }

  const CustomSubmitForm = AdminBro.UserComponents[submitForm];

  if (CustomSubmitForm) {
    return /*#__PURE__*/_react.default.createElement(CustomSubmitForm, _extends({}, props, {
      loading: loading
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, null, /*#__PURE__*/_react.default.createElement(_designSystemWrapper.Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    "data-testid": "button-save"
  }, loading ? /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
    icon: "Fade",
    spin: true
  }) : null, translateButton('save', resource.id)));
};

exports.submitForm = submitForm;