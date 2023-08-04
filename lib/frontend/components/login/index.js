"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoginApp = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _styledComponents = require("styled-components");

var _login = require("./login");

var _forgotPassword = require("./forgot-password");

var _changePassword = require("./change-password");

var _signup = require("./signup");

var _viewHelpers = _interopRequireDefault(require("../../../backend/utils/view-helpers/view-helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const LoginApp = props => {
  const h = new _viewHelpers.default();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(GlobalStyle, null), /*#__PURE__*/_react.default.createElement(_reactRouter.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
    path: h.forgotPasswordUrl()
  }, /*#__PURE__*/_react.default.createElement(_forgotPassword.ForgotPassword, props)), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
    path: h.changePasswordUrl()
  }, /*#__PURE__*/_react.default.createElement(_changePassword.ChangePassword, props)), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, {
    path: h.signupUrl()
  }, /*#__PURE__*/_react.default.createElement(_signup.Signup, props)), /*#__PURE__*/_react.default.createElement(_reactRouter.Route, null, /*#__PURE__*/_react.default.createElement(_login.Login, props))));
};

exports.LoginApp = LoginApp;
var _default = LoginApp;
exports.default = _default;