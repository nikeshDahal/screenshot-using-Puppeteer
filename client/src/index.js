import React from 'react';
import ReactDOM, { render } from 'react-dom';

import './index.css';
import App from './App';



//traditional way
// const page=  <div id="maindiv">
// <h1>Welcome to my first react project</h1>
// <h3>Here are lists of listed items</h3>
// <img src="./logo192.png" alt="error"></img>
// <ol>
//   <li>hello</li>
//   <li>world</li>
//   <li>world</li>
//   <li>world</li>
//   <li>world</li>
// </ol>
// </div>
//closed

ReactDOM.render(<App/>,document.getElementById('root')
);
//next way 
