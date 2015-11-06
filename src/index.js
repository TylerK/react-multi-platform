
import React from 'react';
import { Render } from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

Render(React.createElement(HelloWorld), document.getElementById('app'));
