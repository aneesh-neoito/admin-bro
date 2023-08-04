"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouterDom = require("react-router-dom");

var _reactI18next = require("react-i18next");

var _i18next = _interopRequireDefault(require("i18next"));

var _styledComponents = require("styled-components");

var _login = _interopRequireDefault(require("./components/login"));

var _viewHelpers = _interopRequireDefault(require("../backend/utils/view-helpers/view-helpers"));

var _apiClient = _interopRequireDefault(require("./utils/api-client"));

var _store = _interopRequireDefault(require("./store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const env = {
  NODE_ENV: process.env.NODE_ENV || 'development'
};
const store = (0, _store.default)(window.REDUX_STATE);
const theme = window.THEME;
const login = window.LOGIN;
const {
  locale
} = window.REDUX_STATE;

_i18next.default.use(_reactI18next.initReactI18next).init({
  resources: {
    [locale.language]: {
      translation: locale.translations
    }
  },
  lng: locale.language,
  interpolation: {
    escapeValue: false
  }
});

const Application = /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react.default.createElement(_reactI18next.I18nextProvider, {
  i18n: _i18next.default
}, /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: theme
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_login.default, {
  action: login.action,
  message: login.errorMessage
}))))); // eslint-disable-next-line no-undef


window.regeneratorRuntime = regeneratorRuntime;
var _default = {
  Application,
  // Review It
  ApiClient: _apiClient.default,
  ViewHelpers: _viewHelpers.default,
  UserComponents: {},
  env
};
exports.default = _default;