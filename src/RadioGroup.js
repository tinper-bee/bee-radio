import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Radio from './Radio'

const propTypes = {
  name: PropTypes.string,
  /**
   * 选中的值
   */
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  /**
  * 暴露给用户，且与子Radio通信的方法
  */
  onChange: PropTypes.func,

  children: PropTypes.node.isRequired,

  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ])
};

const defaultProps = {
  Component: 'div'
};

/**
 * 与子Radio通信
 */
const childContextTypes = {
  radioGroup: React.PropTypes.object
}

class RadioGroup extends React.Component {

  constructor(props, context) {
    super(props, context);
    
  }
  
  
  /**
    * 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
    */

  getChildContext() {
    const {name, selectedValue, onChange} = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange
      }
    }
  }

  render () {
    const {Component, name, selectedValue, onChange, children, ...others} = this.props;
    
    return <Component {...others}>{children}</Component>;
  }
}

RadioGroup.childContextTypes = childContextTypes;
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
RadioGroup.Radio = Radio;
export default RadioGroup;