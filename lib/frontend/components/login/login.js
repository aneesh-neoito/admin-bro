"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Login = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRedux = require("react-redux");

var _designSystem = require("@admin-bro/design-system");

var _hooks = require("../../hooks");

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Wrapper = (0, _styledComponents.default)(_designSystem.Box).withConfig({
  displayName: "login__Wrapper",
  componentId: "sc-8h2m0l-0"
})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);

const StyledLogo = _styledComponents.default.img.withConfig({
  displayName: "login__StyledLogo",
  componentId: "sc-8h2m0l-1"
})(["max-width:200px;margin:", " 0;"], (0, _designSystem.themeGet)('space', 'md'));

const LoginOriginal = props => {
  const {
    action,
    message
  } = props;
  const {
    translateLabel,
    translateButton,
    translateProperty,
    translateMessage
  } = (0, _hooks.useTranslation)();
  const branding = (0, _reactRedux.useSelector)(state => state.branding);
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    flex: true,
    variant: "grey"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    bg: "white",
    height: "440px",
    flex: true,
    boxShadow: "login",
    width: [1, 2 / 3, 'auto']
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    bg: "primary100",
    color: "white",
    p: "x3",
    width: "380px",
    flexGrow: 0,
    display: ['none', 'none', 'block'],
    position: "relative"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.H2, {
    fontWeight: "lighter"
  }, translateLabel('loginWelcome')), /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    fontWeight: "lighter",
    mt: "default"
  }, translateMessage('loginWelcome')), /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    textAlign: "center",
    p: "xxl"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    display: "inline",
    mr: "default"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Illustration, {
    variant: "Planet",
    width: 82,
    height: 91
  })), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    display: "inline"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Illustration, {
    variant: "Astronaut",
    width: 82,
    height: 91
  })), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    display: "inline",
    position: "relative",
    top: "-20px"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Illustration, {
    variant: "FlagInCog",
    width: 82,
    height: 91
  })))), /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    as: "form",
    action: action,
    method: "POST",
    p: "x3",
    flexGrow: 1,
    width: ['100%', '100%', '480px']
  }, /*#__PURE__*/_react.default.createElement(_designSystem.H5, {
    marginBottom: "xxl"
  }, branding.logo ? /*#__PURE__*/_react.default.createElement(StyledLogo, {
    src: branding.logo,
    alt: branding.companyName
  }) : branding.companyName), message && /*#__PURE__*/_react.default.createElement(_designSystem.MessageBox, {
    my: "lg",
    message: message.split(' ').length > 1 ? message : translateMessage(message),
    variant: "danger"
  }), /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, null, /*#__PURE__*/_react.default.createElement(_designSystem.Label, {
    required: true
  }, translateProperty('email')), /*#__PURE__*/_react.default.createElement(_designSystem.Input, {
    name: "email",
    placeholder: translateProperty('email')
  })), /*#__PURE__*/_react.default.createElement(_designSystem.FormGroup, null, /*#__PURE__*/_react.default.createElement(_designSystem.Label, {
    required: true
  }, translateProperty('password')), /*#__PURE__*/_react.default.createElement(_designSystem.Input, {
    type: "password",
    name: "password",
    placeholder: translateProperty('password'),
    autoComplete: "new-password"
  })), /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    mt: "xl",
    textAlign: "center"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.Button, {
    variant: "primary"
  }, translateButton('login'))))), branding.softwareBrothers ? /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    mt: "xxl"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.SoftwareBrothers, null)) : null);
};

const Login = (0, _allowOverride.default)(LoginOriginal, 'Login');
exports.Login = Login;
var _default = Login;
exports.default = _default;