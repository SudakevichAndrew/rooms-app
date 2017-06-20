import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OpenButton from './OpenButton';
import Popup from './Popup';
import GeneralListBlock from './GeneralListBlock'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
    }

    changePopupOpening = () => {
        this.setState({isOpened: !this.state.isOpened});
    }

    render() {
        return (
            <MuiThemeProvider>
                {!this.state.isOpened ? (
                    <div>
                        <OpenButton changePopupOpening={this.changePopupOpening} />
                        <GeneralListBlock
                            roomsList={this.state.roomsList}
                            getSavedData={this.getSavedData}/>
                    </div>
                ) : (
                    <Popup
                        roomTypeList={this.props.roomTypeList}
                        changePopupOpening={this.changePopupOpening} />
                )}
            </MuiThemeProvider>
        );
    }
}

export default App;
