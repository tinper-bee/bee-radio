/**
 * @title Radio
 * @description `colors`参数控制背景色
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo1 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: 'apple'
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <Radio.RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>

          <Radio value="apple" >apple</Radio>

          <Radio value="orange" >Orange</Radio>

          <Radio disabled value="watermelon" >Watermelon</Radio>

      </Radio.RadioGroup>
    )
  }
};

export default Demo1;