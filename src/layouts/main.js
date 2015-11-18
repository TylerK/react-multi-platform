import { Component } from 'react';
import Render from './mainRender';

export default class App extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
