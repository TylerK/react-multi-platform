import { Component } from 'react'
import Todo from '../containers/todo/todo';

export default class App extends Component {
  render () {
    return Todo.call(this, this.props, this.state);
  }
}

