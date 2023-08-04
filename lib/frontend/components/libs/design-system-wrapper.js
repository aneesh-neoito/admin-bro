"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCell = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = exports.Button = exports.Input = void 0;

var DesignSystem = _interopRequireWildcard(require("@admin-bro/design-system"));

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Input = (0, _allowOverride.default)(DesignSystem.Input, 'Input');
exports.Input = Input;
const Button = (0, _allowOverride.default)(DesignSystem.Button, 'Button');
exports.Button = Button;
const Table = (0, _allowOverride.default)(DesignSystem.Table, 'Table');
exports.Table = Table;
const TableHead = (0, _allowOverride.default)(DesignSystem.TableHead, 'TableHead');
exports.TableHead = TableHead;
const TableBody = (0, _allowOverride.default)(DesignSystem.TableBody, 'TableBody');
exports.TableBody = TableBody;
const TableRow = (0, _allowOverride.default)(DesignSystem.TableRow, 'TableRow');
exports.TableRow = TableRow;
const TableCell = (0, _allowOverride.default)(DesignSystem.TableCell, 'TableCell'); // const overridableComponents: OverridableComponent[] = [
//   'Button',
//   'TableRow',
//   'TableCell'
// ];
// const components = overridableComponents.reduce((exportable, component) => {
//   exportable[component] = allowOverride(DesignSystem[component], component);
//   return exportable;
// }, {});

exports.TableCell = TableCell;