import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OpenButton from './components/OpenButton';
import Popup from './components/Popup';
import GeneralListBlock from './components/GeneralListBlock'

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
