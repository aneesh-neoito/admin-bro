"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Signup = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRedux = require("react-redux");

var _designSystem = require("@admin-bro/design-system");

var _hooks = require("../../hooks");

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Wrapper = (0, _styledComponents.default)(_designSystem.Box).withConfig({
  displayName: "signup__Wrapper",
  componentId: "eu1rs5-0"
})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]);

const StyledLogo = _styledComponents.default.img.withConfig({
  displayName: "signup__StyledLogo",
  componentId: "eu1rs5-1"
})(["max-width:200px;margin:", " 0;"], (0, _designSystem.themeGet)('space', 'md'));

const SignupOriginal = props => {
  const {
    action
  } = props;
  const {
    translateLabel,
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
  }) : branding.companyName), /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    mt: "xl",
    textAlign: "center"
  }, "Signup not implemented yet."))), branding.softwareBrothers ? /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    mt: "xxl"
  }, /*#__PURE__*/_react.default.createElement(_designSystem.SoftwareBrothers, null)) : null);
};

const Signup = (0, _allowOverride.default)(SignupOriginal, 'Signup');
exports.Signup = Signup;
var _default = Signup;
exports.default = _default;