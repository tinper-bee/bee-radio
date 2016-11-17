'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  name: _react.PropTypes.string,
  /**
   * 选中的值
   */
  selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]),
  /**
  * 暴露给用户，且与子Radio通信的方法
  */
  onChange: _react.PropTypes.func,

  children: _react.PropTypes.node.isRequired,

  Component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func, _react.PropTypes.object])
};

var defaultProps = {
  Component: 'div'
};

/**
 * 与子Radio通信
 */
var childContextTypes = {
  radioGroup: _react2["default"].PropTypes.object
};

var RadioGroup = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(props, context) {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, _React$Component.call(this, props, context));
  }

  /**
    * 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
    */

  RadioGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props;
    var name = _props.name;
    var selectedValue = _props.selectedValue;
    var onChange = _props.onChange;

    return {
      radioGroup: {
        name: name, selectedValue: selectedValue, onChange: onChange
      }
    };
  };

  RadioGroup.prototype.render = function render() {
    var _props2 = this.props;
    var Component = _props2.Component;
    var name = _props2.name;
    var selectedValue = _props2.selectedValue;
    var onChange = _props2.onChange;
    var children = _props2.children;

    var others = _objectWithoutProperties(_props2, ['Component', 'name', 'selectedValue', 'onChange', 'children']);

    return _react2["default"].createElement(
      Component,
      others,
      children
    );
  };

  return RadioGroup;
}(_react2["default"].Component);

RadioGroup.childContextTypes = childContextTypes;
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.Radio = _Radio2["default"];
exports["default"] = RadioGroup;
module.exports = exports['default'];