
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radio from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 * @title Radio
 * @description `colors`参数控制背景色
 */
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
};/**
 * @title RadioButton
 * @description `colors`参数控制背景色
 */
class Demo2 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: 'banana'
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

          <Radio.RadioButton value="apple">apple</Radio.RadioButton>

          <Radio.RadioButton value="banana">banana</Radio.RadioButton>

          <Radio.RadioButton  value="orange">orange</Radio.RadioButton>

      </Radio.RadioGroup>
     

    )
  }
};var DemoArray = [{"example":<Demo1 />,"title":" Radio","code":"/**\n * @title Radio\n * @description `colors`参数控制背景色\n */\nclass Demo1 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'apple'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"fruit\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n\n          <Radio value=\"apple\" >apple</Radio>\n\n          <Radio value=\"orange\" >Orange</Radio>\n\n          <Radio disabled value=\"watermelon\" >Watermelon</Radio>\n\n      </Radio.RadioGroup>\n    )\n  }\n};","desc":" `colors`参数控制背景色"},{"example":<Demo2 />,"title":" RadioButton","code":"/**\n * @title RadioButton\n * @description `colors`参数控制背景色\n */\nclass Demo2 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'banana'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"fruit\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n\n          <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\n\n          <Radio.RadioButton value=\"banana\">banana</Radio.RadioButton>\n\n          <Radio.RadioButton  value=\"orange\">orange</Radio.RadioButton>\n\n      </Radio.RadioGroup>\n     \n\n    )\n  }\n};","desc":" `colors`参数控制背景色"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
