import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Select from './Select';
import Input from './Input';

class RoomsListItem extends Component {
    removeItem = () => {
        this.props.removeItem(this.props.item);
    }

    render() {
        return (
            <li className="rooms-list-item">
                <Select
                    index={this.props.index}
                    item={this.props.item}
                    roomList={this.props.roomList}
                    roomTypeList={this.props.roomTypeList}
                    type={this.props.type}
                    changeItemType={this.props.changeItemType}
                    saveUsedType={this.props.saveUsedType}
                    usedTypes={this.props.usedTypes}/>
                <Input
                    index={this.props.index}
                    count={this.props.count}
                    changeItemCount={this.props.changeItemCount}/>
                <FloatingActionButton className="remove-button" onClick={this.removeItem}>
                    <NavigationClose />
                </FloatingActionButton>
            </li>
        );
    }
}

export default RoomsListItem;
