import React from 'react';
import { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import ListItem from './ListItem';
import AddItemForm from './AddItemForm';

export default class ListApp extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        {text: 'doing a thing', done: false},
        {text: 'do something else', done: false},
        {text: 'keep doing things', done: false},
      ],
      formText: ''
    }
    this.toggleDone = this.toggleDone.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
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
    );
  }
  removeItem(i) {
    this.setState(
      { items: this.state.items.filter(
          (item, index) => { return index !== i; }
        )
      }
    );
  }
  handleFormChange(e) {
    const ENTER_KEY = 13;
    if (e.key === 'Enter' || e.which === ENTER_KEY) {
      this.addItem(e);
    }
    else {
      this.setState({ formText: e.target.value });
    }
  }
  addItem(e) {
    let items = this.state.items.map((item) => (item));
    const newItem = { text: this.state.formText, done: false };
    items.push(newItem);
    this.setState({ items: items });
  }
  render() {
    return (
      <div>
        <List toggleDone={this.toggleDone}
          removeItem={this.removeItem}
          items={this.state.items} />
        <AddItemForm handleFormChange={this.handleFormChange}
          addItem={this.addItem} />
      </div>
    );
  }
}
