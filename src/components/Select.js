import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Select extends Component {
    state = {
        value: this.props.type
    }

    changeValue = (event, index, value) => {
        this.setState({value});
        this.props.changeItemType(this.props.index, value);
    }

    render() {
        return (
            <SelectField className="select" floatingLabelText="Choose type" value={this.state.value} onChange={this.changeValue}>
            {
                this.props.roomTypeList.map((option, index) => {
                    return <MenuItem key={index} value={option} primaryText={option} />;
                })
            }
            </SelectField>
        );
    }
}

export default Select;