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
};