"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SortLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _designSystem = require("@admin-bro/design-system");

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SortLinkOriginal extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive() {
    const {
      sortBy,
      property
    } = this.props;
    return sortBy === property.propertyPath;
  }

  render() {
    const {
      property,
      location,
      direction
    } = this.props;
    const query = new URLSearchParams(location.search);
    const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
    query.set('direction', oppositeDirection);
    query.set('sortBy', property.propertyPath);
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
      to: {
        search: query.toString()
      },
      className: (0, _designSystem.cssClass)('SortLink')
    }, property.label, this.isActive() ? /*#__PURE__*/_react.default.createElement(_designSystem.Icon, {
      icon: sortedByIcon,
      color: "primary100",
      ml: "default"
    }) : '');
  }

}

const SortLink = (0, _allowOverride.default)((0, _reactRouterDom.withRouter)(SortLinkOriginal), 'SortLink');
exports.SortLink = SortLink;
var _default = SortLink;
exports.default = _default;