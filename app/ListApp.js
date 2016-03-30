import React from 'react';
import { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import ListItem from './ListItem';
import AddItemForm from './AddItemForm';

export default class ListApp extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [
        {text: 'the first item', done: false},
        {text: 'the second item', done: false},
        {text: 'the third item', done: false},
      ]
    }
    this.toggleDone = this.toggleDone.bind(this)
  }
  toggleDone(i) {
    this.setState(
      { items:  this.state.items.map(
          (item, index) => {
            return index === i ?
              { text: item.text, done: !item.done } :
              item
          }
      )
      }
    )
  }
  render() {
    return (
      <div>
        <List toggleDone={this.toggleDone}
          items={this.state.items} />
        <AddItemForm />
      </div>
    )
  }
}
