import React from "react";

class SubscFormField extends React.Component {
  
  onTrigger = (e) => {
    this.props.parentCallbackfield(e.target.value);
    e.preventDefault();
  };
  render() {
    return (
      <input type={this.props.type1} text={this.props.text} value={this.props.placeholder} onChange={this.onTrigger}
      color={this.props.color} style={{width:'95%',height:'10%',padding:'20px', borderRadius:'5px', color:this.props.color}}></input>
    );
  }
}

export default SubscFormField;