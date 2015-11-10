import React from 'react';
import ReactDom from 'react-dom';
import App from './layouts/main';

const elem = document.getElementById('app')
ReactDom.render(React.createElement(App), elem);
