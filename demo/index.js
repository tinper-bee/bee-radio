
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RadioGroup from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


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
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>

          <RadioGroup.Radio value="apple" >apple</RadioGroup.Radio>

          <RadioGroup.Radio value="orange" >Orange</RadioGroup.Radio>

          <RadioGroup.Radio disabled value="watermelon" >Watermelon</RadioGroup.Radio>

      </RadioGroup>
    )
  }
};var DemoArray = [{"example":<Demo1 />,"title":" Radio","code":"/**\n * @title Radio\n * @description `colors`参数控制背景色\n */\nclass Demo1 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'apple'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <RadioGroup\n        name=\"fruit\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n\n          <RadioGroup.Radio value=\"apple\" >apple</RadioGroup.Radio>\n\n          <RadioGroup.Radio value=\"orange\" >Orange</RadioGroup.Radio>\n\n          <RadioGroup.Radio disabled value=\"watermelon\" >Watermelon</RadioGroup.Radio>\n\n      </RadioGroup>\n    )\n  }\n};","desc":" `colors`参数控制背景色"}]


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
        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
