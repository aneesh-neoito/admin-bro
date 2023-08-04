"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@admin-bro/design-system");

var _reactRouter = require("react-router");

var _styledComponents = require("styled-components");

var _recordsTable = _interopRequireDefault(require("../app/records-table/records-table"));

var _useRecords = _interopRequireDefault(require("../../hooks/use-records/use-records"));

var _useSelectedRecords = _interopRequireDefault(require("../../hooks/use-selected-records/use-selected-records"));

var _appendForceRefresh = require("./utils/append-force-refresh");

var _allowOverride = _interopRequireDefault(require("../../hoc/allow-override"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Pagination = (0, _allowOverride.default)(_designSystem.Pagination, 'Pagination', true);

const List = ({
  resource,
  setTag,
  theme
}) => {
  const {
    records,
    loading,
    direction,
    sortBy,
    page,
    total,
    fetchData,
    perPage
  } = (0, _useRecords.default)(resource.id);
  const {
    selectedRecords,
    handleSelect,
    handleSelectAll,
    setSelectedRecords
  } = (0, _useSelectedRecords.default)(records);
  const location = (0, _reactRouter.useLocation)();
  const history = (0, _reactRouter.useHistory)();
  (0, _react.useEffect)(() => {
    if (setTag) {
      setTag(total.toString());
    }
  }, [total]);
  (0, _react.useEffect)(() => {
    setSelectedRecords([]);
  }, [resource.id]);
  (0, _react.useEffect)(() => {
    const search = new URLSearchParams(location.search);

    if (search.get(_appendForceRefresh.REFRESH_KEY)) {
      setSelectedRecords([]);
    }
  }, [location.search]);

  const handleActionPerformed = () => fetchData();

  const handlePaginationChange = pageNumber => {
    const search = new URLSearchParams(location.search);
    search.set('page', pageNumber.toString());
    history.push({
      search: search.toString()
    });
  };

  return /*#__PURE__*/_react.default.createElement(_designSystem.Box, {
    styles: {
      background: theme.colors.bg
    }
  }, /*#__PURE__*/_react.default.createElement(_recordsTable.default, {
    resource: resource,
    records: records,
    actionPerformed: handleActionPerformed,
    onSelect: handleSelect,
    onSelectAll: handleSelectAll,
    selectedRecords: selectedRecords,
    direction: direction,
    sortBy: sortBy,
    isLoading: loading,
    total: total
  }), /*#__PURE__*/_react.default.createElement(_designSystem.Text, {
    mt: "xl",
    textAlign: "center"
  }, /*#__PURE__*/_react.default.createElement(Pagination, {
    page: page,
    perPage: perPage,
    total: total,
    onChange: handlePaginationChange
  })));
};

const ListWithTheme = (0, _styledComponents.withTheme)(List);
exports.List = exports.default = ListWithTheme;