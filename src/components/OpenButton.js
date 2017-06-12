import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

class OpenButton extends Component {
    render() {
        return (
            <div className="open-popup-button">
                <FlatButton onClick={this.props.changePopupOpening} label="Open Popup" primary={true} />
            </div>
        );
    }
}

export default OpenButton;

