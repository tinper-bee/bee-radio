'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
    * radio 颜色 样式
    */
  colors: _react2["default"].PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger', 'primary']),
  /**
  * radio 是否可用
  */
  disabled: _react2["default"].PropTypes.bool
};

var defaultProps = {
  active: false,
  disabled: false
};

/**
 * 建立与RadioGroup通信
 */
var contextTypes = {
  radioGroup: _react2["default"].PropTypes.object
};

var clsPrefix = "u-radio";

var Radio = function (_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio(props, context) {
    _classCallCheck(this, Radio);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);

    return _this;
  }

  Radio.prototype.handleClick = function handleClick(event) {
    var onChange = this.context.radioGroup.onChange;


    if (this.props.disabled) {
      return;
    }

    if (onChange) {
      onChange(this.props.value);
    }
  };

  Radio.prototype.render = function render() {
    var _context$radioGroup = this.context.radioGroup;
    var name = _context$radioGroup.name;
    var selectedValue = _context$radioGroup.selectedValue;
    /**
     * 自身的属性
     */

    var _props = this.props;
    var disabled = _props.disabled;
    var colors = _props.colors;
    var className = _props.className;
    var children = _props.children;

    var others = _objectWithoutProperties(_props, ['disabled', 'colors', 'className', 'children']);

    var optional = {};
    /**
     * 若父级selectedValue与本身的value值相同，则改radio被选中
     */
    if (selectedValue !== undefined) {
      optional.checked = this.props.value === selectedValue;
    }

    var classes = {
      'u-radio': true,
      'is-checked': optional.checked,
      disabled: disabled
    };

    if (colors) {
      classes[clsPrefix + '-' + colors] = true;
    }

    var input = _react2["default"].createElement('input', _extends({}, others, {
      type: 'radio',
      name: name,
      disabled: this.props.disabled
    }));
    return _react2["default"].createElement(
      'label',
      { onClick: this.handleClick, className: (0, _classnames2["default"])(className, classes) },
      input,
      _react2["default"].createElement(
        'label',
        { className: 'u-radio-label' },
        children
      )
    );
  };

  return Radio;
}(_react2["default"].Component);

Radio.contextTypes = contextTypes;
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

exports["default"] = Radio;
module.exports = exports['default'];