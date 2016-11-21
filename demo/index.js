import App from './RadioGroupDemo';
import ReactDOM from 'react-dom';
import RadioGroup from '../src';

const Demo2 = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>

          <RadioGroup.Radio value="apple" >apple</RadioGroup.Radio>

          <RadioGroup.Radio value="orange" >Orange</RadioGroup.Radio>

          <RadioGroup.Radio disabled value="watermelon" >Watermelon</RadioGroup.Radio>

      </RadioGroup>
    );
  }
});

const Demo1 = React.createClass({
  getInitialState() {
    return {selectedValue: 'apple'};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>

          <RadioGroup.Radio colors="warning" value="apple" >apple</RadioGroup.Radio>

          <RadioGroup.Radio colors="success" value="orange" >Orange</RadioGroup.Radio>

          <RadioGroup.Radio colors="info" value="watermelon" >Watermelon</RadioGroup.Radio>

          <RadioGroup.Radio colors="danger" value="banana" >Banana</RadioGroup.Radio>

          <RadioGroup.Radio colors="dark" value="grape" >Grape</RadioGroup.Radio>

      </RadioGroup>
    );
  }
});

ReactDOM.render(<Demo2 />, document.getElementById('ReactRadioGroupDemo2'));
ReactDOM.render(<Demo1 />, document.getElementById('ReactRadioGroupDemo1'));