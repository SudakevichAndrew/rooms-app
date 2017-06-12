import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.count
        }
    }

    changeValue = (event, value) => {
        this.setState({value});
        this.props.changeItemCount(this.props.index, value);

    }

    render() {
        return (
            <TextField
                hintText="Count"
                type="number"
                className="input"
                value={this.state.value}
                onChange={this.changeValue} />
        );
    }
}

export default Input;