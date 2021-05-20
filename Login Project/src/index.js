import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {AutContextProvider} from './components/context/Auth-context'

ReactDOM.render(<AutContextProvider><App /> </AutContextProvider>, document.getElementById('root'));
