import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import RoomsListItem from './RoomsListItem';

class RoomsListBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomsList: [],
            disabled: false
        }
    }

    componentWillMount() {
        var localRoomsList = JSON.parse(localStorage.getItem('roomsList'));
        if(localRoomsList) {
            this.setState({roomsList: localRoomsList});
        }
    }

    getItemCount = () => {
        var disabled = this.state.roomsList.length >= this.props.roomTypeList.length;

        this.setState({disabled: disabled});
    }

    createItem = () => {
        let object = {
            type: '',
            count: 1
        };
        let newState = this.state.roomsList;
        newState.push(object);

        this.setState({roomsList: newState});

        this.getItemCount();
    }

    removeItem = (item) => {
        let newState = this.state.roomsList;
        newState.splice(newState.indexOf(item), 1);

        this.setState({roomsList: newState});

        this.getItemCount();
    }

    changeItemType = (index, value) => {
        let newState = this.state.roomsList;
        newState[index].type = value;

        this.setState({roomsList: newState});
    }

    changeItemCount = (index, value) => {
        let newState = this.state.roomsList;
        newState[index].count = value;

        this.setState({roomsList: newState});
    }

    saveItem = () => {
        this._updateLocalStorage();
    }

    render() {
        let roomsList = this.state.roomsList.map((item, index) => {
            return (
                <RoomsListItem
                    key={index}
                    index={index}
                    type={item.type}
                    count={item.count}
                    roomTypeList={this.props.roomTypeList}
                    roomList={this.props.roomList}
                    removeItem={this.removeItem}
                    changeItemType={this.changeItemType}
                    changeItemCount={this.changeItemCount}/>
            );
        });
        return (
            <div>
                <ul className="rooms-list">
                    {roomsList}
                </ul>
                <FlatButton disabled={this.state.disabled} onClick={this.createItem} className="create-item" label="Add" primary={true} />
                <div>
                    <RaisedButton label="Save" primary={true} onClick={this.saveItem} />
                    <FlatButton label="Cancel" onClick={this.props.changePopupOpening} />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getItemCount();
    }

    _updateLocalStorage() {
        let roomsList = JSON.stringify(this.state.roomsList);
        localStorage.setItem('roomsList', roomsList);
    }
}

export default RoomsListBlock