import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import RoomsListItem from './RoomsListItem';

class RoomsListBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomsList: [],
            usedTypes: [],
            disabledAdding: false,
            saveSuccess: false
        };
    }

    componentWillMount() {
        this.getSavedData()
    }

    _updateLocalStorage() {
        let roomsList = JSON.stringify(this.state.roomsList);
        localStorage.setItem('roomsList', roomsList);
    }

    getSavedData = () => {
        let localRoomsList = JSON.parse(localStorage.getItem('roomsList'));
        if(localRoomsList) {
            this.setState({roomsList: localRoomsList});
        }
    }

    getItemCount = () => {
        let disabled = this.state.roomsList.length >= this.props.roomTypeList.length;

        this.setState({disabledAdding: disabled});
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

        this.getDisabledTypes();

        this.getItemCount();
    }

    changeItemType = (index, value) => {
        let newState = this.state.roomsList;

        newState[index].type = value;

        this.setState({roomsList: newState});

        this.getDisabledTypes();
    }

    changeItemCount = (index, value) => {
        let newState = this.state.roomsList;
        newState[index].count = value;

        this.setState({roomsList: newState});
    }

    saveItem = () => {
        if(this.checkSaveSuccess()) {
            this._updateLocalStorage();
            this.props.changePopupOpening();
        }
    }

    checkSaveSuccess = () => {
        let roomsList = this.state.roomsList;
        return roomsList.every((item) => {
            return (item.type !== '' && item.count !== '');
        });
    }

    getDisabledTypes = () => {
        let roomsList = this.state.roomsList;
        let newState = [];
        roomsList.forEach((item) => {
            newState.push(item.type);
        });

        this.setState({usedTypes: newState});
    }

    render() {
        let roomsList = this.state.roomsList.map((item, index) => {
            return (
                <RoomsListItem
                    key={index}
                    index={index}
                    item={item}
                    type={item.type}
                    count={item.count}
                    roomTypeList={this.props.roomTypeList}
                    roomsList={this.state.roomsList}
                    removeItem={this.removeItem}
                    changeItemType={this.changeItemType}
                    changeItemCount={this.changeItemCount}
                    usedTypes={this.state.usedTypes}
                    getDisabledTypes={this.getDisabledTypes}/>
            );
        });
        return (
            <div className="content">
                <ul className="rooms-list">
                    {roomsList}
                </ul>
                <FlatButton disabled={this.state.disabledAdding} onClick={this.createItem} className="create-item" label="Add" primary={true} />
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
}

export default RoomsListBlock