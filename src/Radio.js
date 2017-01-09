import classnames from 'classnames';
import React from 'react';

const propTypes = {
  /**
    * radio 颜色 样式
    */
  colors: React.PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger','primary']),
  /**
    * radio 大小
    */
  size: React.PropTypes.oneOf(['lg','sm']),
  /**
    * radio 是否可用
    */
  disabled: React.PropTypes.bool
};

const defaultProps = {
  disabled: false,
  clsPrefix: 'u-radio'
};

/**
 * 建立与RadioGroup通信
 */
const contextTypes = {
    radioGroup: React.PropTypes.object
}


class Radio extends React.Component {
  constructor(props, context) {

    super(props, context);
    
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick(event) {
    const {onChange } = this.context.radioGroup;

    if (this.props.disabled) {
      return;
    }

    if (onChange) {
      onChange(this.props.value);
    }
  }
 
  render() {
      const {name, selectedValue,size} = this.context.radioGroup;
      /**
       * 自身的属性
       */
      const {
          disabled,
          colors,
          className,
          children,
          clsPrefix,
          ...others
        } = this.props;

      let optional = {};
      /**
       * 若父级selectedValue与本身的value值相同，则改radio被选中
       */
      if(selectedValue !== undefined) {
        optional.checked = (this.props.value === selectedValue);
      }

      let classes = {
        'is-checked':optional.checked && !disabled,   
        disabled
      };

      if (colors) {
          classes[`${clsPrefix}-${colors}`] = true;
      }
      if (size) {
          classes[`${clsPrefix}-${size}`] = true;
      }
      let classNames = classnames(clsPrefix,classes);
      const input = (
          <input
          {...others}
          type="radio"
          name={name}
          disabled={this.props.disabled}
          />
      );
       return (
          <label onClick = {this.handleClick} className={classnames(className, classNames)}>
            {input}
            <label className={clsPrefix+'-label'}>{children}</label>
          </label>
      );

  }
}

Radio.contextTypes = contextTypes;
Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
