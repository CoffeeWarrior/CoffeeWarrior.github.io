import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from "react-router-dom";


const app = (
    <HashRouter>
        <App/>
    </HashRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
