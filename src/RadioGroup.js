import React, {PropTypes} from 'react';
import classNames from 'classnames';

export const Radio = React.createClass({

  propTypes: {
  	/**
	  * radio 颜色 样式
	  */
    colors: React.PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger','primary']),
    /**
	  * radio 是否可用
	  */
 	disabled: React.PropTypes.bool
  },
  /**
   * 建立与RadioGroup通信
   */
  contextTypes: {
    radioGroup: React.PropTypes.object
  },

  render: function() {
    /**
     * 通过context通信，获取父级的属性
     * name:radio的组名
     * selectedValue:被选中radio的值
     * 暴露在外的change方法
     */
    const {name, selectedValue, onChange} = this.context.radioGroup;
    /**
     * 自身的属性
     */
    const {
	      disabled,
	      colors,
	      className,
	      children,
	      ...others
    	} = this.props;

    const optional = {};
    const clsPrefix = 'u-radio';
    /**
     * 若父级selectedValue与本身的value值相同，则改radio被选中
     */
    if(selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }

     const classes = {
    	'u-radio':true,
    	'is-checked':optional.checked,   
    	disabled
    };

    if (colors) {
        classes[`${clsPrefix}-${colors}`] = true;
    }

    if (colors) {
        classes[`${clsPrefix}-${colors}`] = true;
    }

    
    /**
     * radio本身的onClick方法触发外面的change,将本身的value传输到外层
     */
    if(typeof onChange === 'function') {
      optional.onClick = onChange.bind(null, this.props.value);
    }

    const input = (
      	<input
        {...others}
        type="radio"
        name={name}
        disabled={this.props.disabled}
        />
    );
     return (
        <label {...optional} className={classNames(className, classes)}>
          {input}
          <label className="u-radio-label">{children}</label>
        </label>
    );
    
  }
});

export const RadioGroup = React.createClass({

  propTypes: {
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
  },

  getDefaultProps: function() {
    return {
      Component: "div"
    };
  },
  /**
   * 与子Radio通信
   */
  childContextTypes: {
    radioGroup: React.PropTypes.object
  },
  /**
  	* 一旦外层change方法触发本身props发生改变，则调用getChildContext更新与子Radio的通信信息（radioGroup）
  	*/
  getChildContext: function() {
    const {name, selectedValue, onChange} = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange
      }
    }
  },

  render: function() {
    const {Component, name, selectedValue, onChange, children, ...rest} = this.props;
    return <Component {...rest}>{children}</Component>;
  }
});