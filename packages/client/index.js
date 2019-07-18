import ReactDom from 'react-dom';
import React from 'react';
import {Counter} from './counter.jsx';
import './styles.css';

ReactDom.render(React.createElement(Counter, {value: ' there'}), document.getElementById('root'));