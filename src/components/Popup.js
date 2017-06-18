import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import RoomsListBlock from './RoomsListBlock';

class Popup extends Component {
    render() {
        return (
            <div className="popup">
                <AppBar
                    title={<span>Rooms structure</span>}
                    iconElementLeft={<IconButton><ActionHome /></IconButton>}
                    iconElementRight={<IconButton onClick={this.props.changePopupOpening}><NavigationClose /></IconButton>}/>
                <RoomsListBlock
                    roomTypeList={this.props.roomTypeList}
                    changePopupOpening={this.props.changePopupOpening}/>
            </div>
        );
    }
}

export default Popup;
