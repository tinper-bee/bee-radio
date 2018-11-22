/**
 * @title 竖方向Radio
 * @description 可以通过style来设置radio样式
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo3 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: 'ig'
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
        name="team"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>
          <Radio style={radioStyle} value="ig" >IG</Radio>
          <Radio style={radioStyle} value="edg" >EDG</Radio>
          <Radio style={radioStyle} value="rng" >RNG</Radio>
          <Radio style={radioStyle} value="we" >WE</Radio>
          <Radio style={radioStyle} value="skt" >SKT</Radio>
          <Radio style={radioStyle} value="ssg" >SSG</Radio>
      </Radio.RadioGroup>
    )
  }
};

export default Demo3;