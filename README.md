# bee-radio-group
[![npm version](https://img.shields.io/npm/v/bee-radio-group.svg)](https://www.npmjs.com/package/bee-radio-group)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-radio-group)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-radio-group.svg)](https://david-dm.org/tinper-bee/bee-radio-group#info=devDependencies)

单选框组合

包含为RadioGroup与Radio两个子组件。

## 使用
使用单独的bee-radio-group包
#### 组件引入
先进行下载bee-radio-group包

```
npm install --save bee-radio-group
```
组件调用
```js
import { RadioGroup,Radio} from 'bee-radio-group';

const RadioApp = React.createClass({
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

React.render(<RadioApp />, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-radio.css
```
<link rel="stylesheet" href="./node_modules/build/bee-radio-group.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/RadioGroup.scss"
//或是
import "./node_modules/build/bee-radio-group.css"
```


## API

## Radio
|参数|说明|类型|默认值|
|---|----|---|------|
|color|one of: `primary` `success` `info` `error`  `warning` `dark`|string|''|
|disabled|是否可用|bool|false|

## RadioGroup

|参数|说明|类型|默认值|
|---|----|---|------|
|onChange|暴露在外层的触发radio是否选中的方法|func|''|
|selectedValue|被选中的radio值|string|''|
|name|radio组名|string|''|
|Children|Radio子组件|obj|''|

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-radio-group
$ cd bee-radio-group
$ npm install
$ npm run dev
```
