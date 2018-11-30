/**
 * @title Radio
 * @description 基本用法 
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo1 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: '1'
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <Radio.RadioGroup
        name="lol"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>
          <Radio value="ig" >IG</Radio>
          <Radio value="edg" >EDG</Radio>
          <Radio value="rng" >RNG</Radio>
          <Radio value="we" >WE</Radio>
          <Radio value="skt" >SKT</Radio>
          <Radio value="ssg" >SSG</Radio>
      </Radio.RadioGroup>
    )
  }
};

export default Demo1;