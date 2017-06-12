import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

let RoomTypeList = ['single', 'twin', 'tripple', 'quadro'];


ReactDOM.render(
    <App roomTypeList={RoomTypeList}/>,
    document.getElementById('root')
);


