import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Select from './Select';
import Input from './Input';

import './RoomsListItem.css';

class RoomsListItem extends Component {
    render() {
        return (
            <li className="rooms-list-item">
                <Select
                    index={this.props.index}
                    roomList={this.props.roomList}
                    roomTypeList={this.props.roomTypeList}
                    type={this.props.type}
                    changeItemType={this.props.changeItemType}/>
                <Input
                    index={this.props.index}
                    count={this.props.count}
                    changeItemCount={this.props.changeItemCount}/>
                <FloatingActionButton className="remove-button" onClick={this.props.removeItem}>
                    <NavigationClose />
                </FloatingActionButton>
            </li>
        );
    }
}

export default RoomsListItem;
