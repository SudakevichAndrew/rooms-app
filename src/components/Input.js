import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.count
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value: nextProps.count});
    }

    changeValue = (event, value) => {
        value = (value !== '' && value <= 0) ? 1 : value;
        this.setState({value});
        this.props.changeItemCount(this.props.index, value);

    }

    render() {
        return (
            <TextField
                className="input"
                hintText="Count*"
                type="number"
                min="1"
                value={this.state.value}
                onChange={this.changeValue} />
        );
    }
}

export default Input;