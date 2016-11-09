import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {RadioGroup,Radio} from '../src/RadioGroup.js'


 const App = React.createClass({
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
        <label>
          <Radio colors="warning" value="apple" >apple</Radio>
        </label>
        <label>
          <Radio value="orange" >Orange</Radio>
        </label>
        <label>
          <Radio value="watermelon" >Watermelon</Radio>
        </label>
      </RadioGroup>
    );
  }
});

export default App;