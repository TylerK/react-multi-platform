import { Component } from 'react';
import Render from './todoRender';

export default class App extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
