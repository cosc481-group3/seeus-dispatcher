import React from 'react';
import ReactDOM from 'react-dom';
import { FocusStyleManager } from '@blueprintjs/core';

import './style/main.css';
import App from './App';

FocusStyleManager.onlyShowFocusOnTabs();
ReactDOM.render(<App />, document.getElementById('app'));
