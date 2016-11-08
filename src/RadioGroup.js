import React, {PropTypes} from 'react';
import classNames from 'classnames';

export const Radio = React.createClass({

  propTypes: {
    colors: React.PropTypes.oneOf(['', 'dark', 'success', 'info', 'warning', 'danger','primary']),

 	disabled: React.PropTypes.bool
  },

  contextTypes: {
    radioGroup: React.PropTypes.object
  },

  render: function() {

    const {name, selectedValue, onChange} = this.context.radioGroup;
    const {
	      disabled,
	      colors,
	      className,
	      children,
	      ...others
    	} = this.props;

    const optional = {};
    const clsPrefix = 'u-radio';
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
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
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

  childContextTypes: {
    radioGroup: React.PropTypes.object
  },

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