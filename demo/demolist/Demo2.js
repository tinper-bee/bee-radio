/**
 * @title 不同颜色的radio
 * @description `colors`参数控制背景色
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo2 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: 'rng'
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <Radio.RadioGroup
        name="color"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>
          <Radio colors="primary" value="ig" >IG</Radio>
          <Radio colors="success" value="edg" >EDG</Radio>
          <Radio colors="info" value="rng" >RNG</Radio>
          <Radio colors="warning" value="we" >WE</Radio>
          <Radio colors="danger" value="skt" >SKT</Radio>
          <Radio colors="dark" value="ssg" >SSG</Radio>
      </Radio.RadioGroup>
    )
  }
};

export default Demo2;