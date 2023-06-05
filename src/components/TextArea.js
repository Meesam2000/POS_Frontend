import React from "react";
class InputArea extends React.Component {
    // state = {
    //   inputarea: "",
    // };

    onTrigger = (e) => {

        this.props.parentCallbackdesc(e.target.value);
        e.preventDefault();
    };

    // handleChangeArea = (e) => {
    //  this.setState({ inputarea: e.target.value });
    //};

    render() {
        return (
            <textarea
                name="description"
                cols={50}
                rows={5}
                onChange={this.onTrigger}
            />
        );
    }
}
export default InputArea