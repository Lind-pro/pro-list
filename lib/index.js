"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _proTable = _interopRequireDefault(require("@jetlinks/pro-table"));

var _antd = require("antd");

var _ListView = _interopRequireDefault(require("./ListView"));

require("./index.less");

var _excluded = ["metas", "split", "footer", "rowKey", "tooltip", "className", "options", "search", "expandable", "showActions", "showExtra", "rowSelection", "pagination", "itemLayout", "renderItem", "grid", "onRow", "locale", "itemHeaderRender", "itemTitleRender"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ProList(props) {
  var metals = props.metas,
      split = props.split,
      footer = props.footer,
      rowKey = props.rowKey,
      tooltip = props.tooltip,
      className = props.className,
      _props$options = props.options,
      options = _props$options === void 0 ? false : _props$options,
      _props$search = props.search,
      search = _props$search === void 0 ? false : _props$search,
      expandable = props.expandable,
      showActions = props.showActions,
      showExtra = props.showExtra,
      _props$rowSelection = props.rowSelection,
      propRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
      _props$pagination = props.pagination,
      propsPagination = _props$pagination === void 0 ? false : _props$pagination,
      itemLayout = props.itemLayout,
      renderItem = props.renderItem,
      grid = props.grid,
      onRow = props.onRow,
      locale = props.locale,
      itemHeaderRender = props.itemHeaderRender,
      itemTitleRender = props.itemTitleRender,
      rest = _objectWithoutProperties(props, _excluded);

  var actionRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(rest.actionRef, function () {
    return actionRef.current;
  }, [actionRef.current]);

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var proTableColumns = (0, _react.useMemo)(function () {
    var columns = [];
    Object.keys(metals || {}).forEach(function (key) {
      var meta = metals[key] || {};
      var valueType = meta.valueType;

      if (!valueType) {
        // 给默认的 valueType
        if (key === 'avatar') {
          valueType = 'avatar';
        }

        if (key === 'actions') {
          valueType = 'option';
        }

        if (key === 'description') {
          valueType = 'textarea';
        }
      }

      columns.push(_objectSpread(_objectSpread({
        listKey: key,
        dataIndex: (meta === null || meta === void 0 ? void 0 : meta.dataIndex) || key
      }, meta), {}, {
        valueType: valueType
      }));
    });
    return columns;
  }, [metals]);
  var prefixCls = getPrefixCls('pro-list');
  var listClassName = (0, _classnames.default)(prefixCls, _defineProperty({}, "".concat(prefixCls, "-no-split"), !split));
  return /*#__PURE__*/_react.default.createElement(_proTable.default, _extends({
    tooltip: tooltip
  }, rest, {
    actionRef: actionRef,
    pagination: propsPagination,
    type: "list",
    rowSelection: propRowSelection,
    search: search,
    options: options,
    className: (0, _classnames.default)(prefixCls, className, listClassName),
    columns: proTableColumns,
    rowKey: rowKey,
    cardProps: {
      style: {
        background: 'transparent'
      },
      bodyStyle: {
        padding: 0,
        background: 'transparent'
      }
    },
    toolbar: {
      style: {
        padding: '0 24px'
      }
    },
    tableViewRender: function tableViewRender(_ref) {
      var columns = _ref.columns,
          size = _ref.size,
          pagination = _ref.pagination,
          rowSelection = _ref.rowSelection,
          dataSource = _ref.dataSource,
          loading = _ref.loading;
      return /*#__PURE__*/_react.default.createElement(_antd.Form, {
        component: false
      }, /*#__PURE__*/_react.default.createElement(_ListView.default, {
        grid: grid,
        itemTitleRender: itemTitleRender,
        prefixCls: prefixCls,
        columns: columns,
        renderItem: renderItem,
        actionRef: actionRef,
        dataSource: dataSource || [],
        size: size,
        footer: footer,
        split: split,
        rowKey: rowKey,
        expandable: expandable,
        rowSelection: propRowSelection === false ? undefined : rowSelection,
        showActions: showActions,
        showExtra: showExtra,
        pagination: pagination,
        itemLayout: itemLayout,
        loading: loading,
        itemHeaderRender: itemHeaderRender,
        onRow: onRow,
        locale: locale
      }));
    }
  }));
}

var _default = ProList;
exports.default = _default;