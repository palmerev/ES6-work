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
      inputText: ''
    }
    this.toggleDone = this.toggleDone.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
  handleKeyDown(e) {
    const ENTER_KEY = 13;
    if(e.which === ENTER_KEY || e.key === 'Enter') {
      this.addItem();
    }
  }
  handleFormChange(e) {
    this.setState({ inputText: e.target.value });
  }
  addItem(e) {
    let items = this.state.items.map((item) => (item));
    const newItem = { text: this.state.inputText, done: false };
    items.push(newItem);
    this.setState({ items: items, inputText: '' });
  }
  render() {
    return (
      <div>
        <List toggleDone={this.toggleDone}
          removeItem={this.removeItem}
          items={this.state.items} />
        <AddItemForm inputText={this.state.inputText} handleFormChange={this.handleFormChange}
        handleKeyDown={this.handleKeyDown}
          addItem={this.addItem} />
      </div>
    );
  }
}
