import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import {Fabric} from '@fluentui/react';

ReactDOM.render(
    <Fabric>
        <App/>
    </Fabric>,
    document.getElementById('app')
);