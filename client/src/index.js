import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// You'll need to wrap <App /> for routing to work
ReactDOM.render(
    <BrowserRouter>
    {/* A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL. */}
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
