import React,{PropTypes,Component} from 'react';
import Radio from './Radio';

const propTypes = {
  value:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
  style: PropTypes.object
}
const defaultProps = {
  clsPrefix : "u-radio-button"
}

class RadioButton extends Component{

  render() {
    const {clsPrefic, ...onthers} = this.props;
    return (
      <Radio {...this.props} />
    );
  }
}

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
export default RadioButton;