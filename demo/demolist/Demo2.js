/**
 * @title 竖方向Radio
 * @description 可以通过style来设置radio样式
 */

import React, { Component } from 'react'
import Radio from '../../src'



class demo2 extends Component{
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
    const radioStyle = {
      display: 'block'
    };
    return (
      <Radio.RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>

          <Radio style={radioStyle} value="apple" >apple</Radio>

          <Radio style={radioStyle} value="orange" >Orange</Radio>

          <Radio style={radioStyle} disabled value="watermelon" >Watermelon</Radio>

      </Radio.RadioGroup>
    )
  }
};

export default demo2;