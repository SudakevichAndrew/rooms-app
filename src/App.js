import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OpenButton from './components/OpenButton';
import Popup from './components/Popup';

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
                <div>
                    {!this.state.isOpened ? (
                        <OpenButton changePopupOpening={this.changePopupOpening} />
                    ) : (
                        <Popup roomTypeList={this.props.roomTypeList} changePopupOpening={this.changePopupOpening}/>
                    )}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
