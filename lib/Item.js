"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderExpandIcon = renderExpandIcon;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _proCard = _interopRequireDefault(require("@ant-design/pro-card"));

var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["title", "subTitle", "content", "itemTitleRender", "prefixCls", "actions", "item", "recordKey", "avatar", "cardProps", "description", "isEditable", "checkbox", "index", "selected", "loading", "expand", "onExpand", "expandable", "rowSupportExpand", "showActions", "showExtra", "type", "style", "className", "record", "extra", "onRow", "itemHeaderRender"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function renderExpandIcon(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      _ref$expandIcon = _ref.expandIcon,
      expandIcon = _ref$expandIcon === void 0 ? /*#__PURE__*/_react.default.createElement(_icons.RightOutlined, null) : _ref$expandIcon,
      onExpand = _ref.onExpand,
      expanded = _ref.expanded,
      record = _ref.record;
  var icon = expandIcon;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");

  var onClick = function onClick(event) {
    onExpand(!expanded);
    event.stopPropagation();
  };

  if (typeof expandIcon === 'function') {
    icon = expandIcon({
      expanded: expanded,
      onExpand: onExpand,
      record: record
    });
  }

  return /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(expandClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), _defineProperty(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
    onClick: onClick
  }, icon);
}

function ProListItem(props) {
  var _classNames2, _ref3, _ref4;

  var customizePrefixCls = props.prefixCls;

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-list', customizePrefixCls);
  var defaultClassName = "".concat(prefixCls, "-row");

  var title = props.title,
      subTitle = props.subTitle,
      content = props.content,
      itemTitleRender = props.itemTitleRender,
      restPrefixCls = props.prefixCls,
      actions = props.actions,
      item = props.item,
      recordKey = props.recordKey,
      avatar = props.avatar,
      cardProps = props.cardProps,
      description = props.description,
      isEditable = props.isEditable,
      checkbox = props.checkbox,
      _props$index = props.index,
      index = _props$index === void 0 ? 0 : _props$index,
      selected = props.selected,
      loading = props.loading,
      propsExpand = props.expand,
      propsOnExpand = props.onExpand,
      expandableConfig = props.expandable,
      rowSupportExpand = props.rowSupportExpand,
      showActions = props.showActions,
      showExtra = props.showExtra,
      type = props.type,
      style = props.style,
      _props$className = props.className,
      propsClassName = _props$className === void 0 ? defaultClassName : _props$className,
      record = props.record,
      extra = props.extra,
      onRow = props.onRow,
      itemHeaderRender = props.itemHeaderRender,
      rest = _objectWithoutProperties(props, _excluded);

  var _ref2 = expandableConfig || {},
      expandedRowRender = _ref2.expandedRowRender,
      expandIcon = _ref2.expandIcon,
      expandRowByClick = _ref2.expandRowByClick,
      _ref2$indentSize = _ref2.indentSize,
      indentSize = _ref2$indentSize === void 0 ? 8 : _ref2$indentSize,
      expandedRowClassName = _ref2.expandedRowClassName;

  var _useMergedState = (0, _useMergedState3.default)(!!propsExpand, {
    value: propsExpand,
    onChange: propsOnExpand
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      expanded = _useMergedState2[0],
      onExpand = _useMergedState2[1];

  var className = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(propsClassName, "-selected"), selected), _defineProperty(_classNames2, "".concat(propsClassName, "-show-action-hover"), showActions === 'hover'), _defineProperty(_classNames2, "".concat(propsClassName, "-type-").concat(type), !!type), _defineProperty(_classNames2, "".concat(propsClassName, "-editable"), isEditable), _defineProperty(_classNames2, "".concat(propsClassName, "-show-extra-hover"), showExtra === 'hover'), _classNames2), propsClassName);
  var extraClassName = (0, _classnames.default)(_defineProperty({}, "".concat(propsClassName, "-extra"), showExtra === 'hover'));
  var needExpanded = expanded || Object.values(expandableConfig || {}).length === 0;
  var expandedRowDom = expandedRowRender && expandedRowRender(record, index, indentSize, expanded);
  var actionsDom = (0, _react.useMemo)(function () {
    if (actions) {
      return [/*#__PURE__*/_react.default.createElement("div", {
        key: "action",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, actions)];
    }

    return [];
  }, [actions]);
  var titleDom = title || subTitle ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-header-title")
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-title")
  }, title), subTitle && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-subTitle")
  }, subTitle)) : null;
  var metaDom = title || avatar || subTitle || description ? /*#__PURE__*/_react.default.createElement(_antd.List.Item.Meta, {
    avatar: avatar,
    title: (_ref3 = itemTitleRender && (itemTitleRender === null || itemTitleRender === void 0 ? void 0 : itemTitleRender(record, index, titleDom))) !== null && _ref3 !== void 0 ? _ref3 : titleDom,
    description: description && needExpanded && /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(className, "-description")
    }, description)
  }) : null;
  var defaultDom = !cardProps ? /*#__PURE__*/_react.default.createElement(_antd.List.Item, _extends({
    actions: actionsDom,
    extra: /*#__PURE__*/_react.default.createElement("div", {
      className: extraClassName
    }, extra)
  }, rest, onRow === null || onRow === void 0 ? void 0 : onRow(record, index), {
    onClick: function onClick(e) {
      var _onRow, _onRow$onClick;

      onRow === null || onRow === void 0 ? void 0 : (_onRow = onRow(record, index)) === null || _onRow === void 0 ? void 0 : (_onRow$onClick = _onRow.onClick) === null || _onRow$onClick === void 0 ? void 0 : _onRow$onClick.call(_onRow, e);

      if (expandRowByClick) {
        onExpand(!expanded);
      }
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Skeleton, {
    avatar: true,
    title: false,
    loading: loading,
    active: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-header")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-header-option")
  }, checkbox && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-checkbox")
  }, checkbox), Object.values(expandableConfig || {}).length > 0 && rowSupportExpand && renderExpandIcon({
    prefixCls: prefixCls,
    expandIcon: expandIcon,
    onExpand: onExpand,
    expanded: expanded,
    record: record
  })), (_ref4 = itemHeaderRender && (itemHeaderRender === null || itemHeaderRender === void 0 ? void 0 : itemHeaderRender(record, index, metaDom))) !== null && _ref4 !== void 0 ? _ref4 : metaDom), needExpanded && (content || expandedRowDom) && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(className, "-content")
  }, content, expandedRowRender && rowSupportExpand && /*#__PURE__*/_react.default.createElement("div", {
    className: expandedRowClassName && expandedRowClassName(record, index, indentSize)
  }, expandedRowDom)))) : /*#__PURE__*/_react.default.createElement(_proCard.default, _extends({
    bordered: true,
    loading: loading
  }, cardProps, {
    title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Avatar, {
      size: 22,
      src: avatar,
      className: getPrefixCls('list-item-meta-avatar')
    }), title),
    subTitle: subTitle,
    extra: actionsDom
  }), content);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, _defineProperty({}, "".concat(className, "-card"), cardProps)),
    style: style
  }, defaultDom);
}

var _default = ProListItem;
exports.default = _default;