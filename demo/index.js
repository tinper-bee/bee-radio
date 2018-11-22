
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" Radio","code":"/**\n * @title Radio\n * @description 基本用法 \n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo1 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'ig'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"lol\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n          <Radio value=\"ig\" >IG</Radio>\n          <Radio value=\"edg\" >EDG</Radio>\n          <Radio value=\"rng\" >RNG</Radio>\n          <Radio value=\"we\" >WE</Radio>\n          <Radio value=\"skt\" >SKT</Radio>\n          <Radio value=\"ssg\" >SSG</Radio>\n      </Radio.RadioGroup>\n    )\n  }\n};\n\n","desc":" 基本用法 "},{"example":<Demo2 />,"title":" 不同颜色的radio","code":"/**\n * @title 不同颜色的radio\n * @description `colors`参数控制背景色\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo2 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'ig'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"color\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n          <Radio colors=\"primary\" value=\"ig\" >IG</Radio>\n          <Radio colors=\"success\" value=\"edg\" >EDG</Radio>\n          <Radio colors=\"info\" value=\"rng\" >RNG</Radio>\n          <Radio colors=\"warning\" value=\"we\" >WE</Radio>\n          <Radio colors=\"danger\" value=\"skt\" >SKT</Radio>\n          <Radio colors=\"dark\" value=\"ssg\" >SSG</Radio>\n      </Radio.RadioGroup>\n    )\n  }\n};\n\n","desc":" `colors`参数控制背景色"},{"example":<Demo3 />,"title":" 竖方向Radio","code":"/**\n * @title 竖方向Radio\n * @description 可以通过style来设置radio样式\n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\n\n\nclass Demo3 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'ig'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    const radioStyle = {\n      display: 'block'\n    };\n    return (\n      <Radio.RadioGroup\n        name=\"team\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n          <Radio style={radioStyle} value=\"ig\" >IG</Radio>\n          <Radio style={radioStyle} value=\"edg\" >EDG</Radio>\n          <Radio style={radioStyle} value=\"rng\" >RNG</Radio>\n          <Radio style={radioStyle} value=\"we\" >WE</Radio>\n          <Radio style={radioStyle} value=\"skt\" >SKT</Radio>\n          <Radio style={radioStyle} value=\"ssg\" >SSG</Radio>\n      </Radio.RadioGroup>\n    )\n  }\n};\n\n","desc":" 可以通过style来设置radio样式"},{"example":<Demo4 />,"title":" RadioButton","code":"/**\n * @title RadioButton\n * @description \n */\n\nimport React, { Component } from 'react'\nimport { Radio } from 'tinper-bee';\n\nconst  RadioGroup = Radio.RadioGroup;\n\nclass Demo4 extends Component{\n  constructor(props) {\n  \tsuper(props);\n  \tthis.state = {\n    \tselectedValue: 'banana'\n    };\n  }\n  handleChange(value) {\n    this.setState({selectedValue: value});\n  }\n  render() {\n    return (\n      <Radio.RadioGroup\n        name=\"fruit\"\n        selectedValue={this.state.selectedValue}\n        onChange={this.handleChange.bind(this)}>\n\n          <Radio.RadioButton value=\"apple\">apple</Radio.RadioButton>\n\n          <Radio.RadioButton value=\"banana\">banana</Radio.RadioButton>\n\n          <Radio.RadioButton  value=\"orange\">orange</Radio.RadioButton>\n\n      </Radio.RadioGroup>\n     \n\n    )\n  }\n};\n\n","desc":" "}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
