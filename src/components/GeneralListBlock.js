import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
    } from 'material-ui/Table';


class GeneralListBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomsList: []
        }
    }

    componentWillMount() {
        let localRoomsList = JSON.parse(localStorage.getItem('roomsList'));
        if(localRoomsList) {
            this.setState({roomsList: localRoomsList});
        }
    }

    render() {
        let generalList = this.state.roomsList.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableRowColumn>{++index}</TableRowColumn>
                    <TableRowColumn>{item.type}</TableRowColumn>
                    <TableRowColumn>{item.count}</TableRowColumn>
                </TableRow>
            )
        });
        return (
            <div>
                {this.state.roomsList.length ? (
                    <Table className="general-list">
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Type</TableHeaderColumn>
                                <TableHeaderColumn>Count</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                    {generalList}
                        </TableBody>
                    </Table>
                ) : (
                    <div className="empty-list-notice">The list is empty</div>
                )}
            </div>
        );
    }

}

export default GeneralListBlock;