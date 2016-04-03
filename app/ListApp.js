import React from 'react';
import { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import List from './List';
import ListItem from './ListItem';
import AddItemForm from './AddItemForm';

export default class ListApp extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
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
              { text: item.text, done: !item.done } : item
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
    let items = [...this.state.items];
    const text = this.state.inputText.trim();
    if (text) {
      const newItem = { text: text, done: false };
      items.push(newItem);
      this.setState({ items: items, inputText: '' });
    }
  }
  render() {
    const messageWrapperClasses = classNames({ 'wrapper': true,
          'display-none': this.state.items.length > 0,
          'display-msg': this.state.items.length <= 0 });
    const listWrapperClasses = classNames({ 'wrapper': true,
          'display-none': this.state.items.length <= 0,
          'display-list': this.state.items.length > 0 });
    return (
      <div ref="app">
        <h1>To-Do List</h1>
        <div className={listWrapperClasses}>
        <List toggleDone={this.toggleDone}
          removeItem={this.removeItem}
          items={this.state.items} />
        </div>
        <div className={messageWrapperClasses}>
          <p>You have nothing to do!</p>
        </div>
        <AddItemForm inputText={this.state.inputText} handleFormChange={this.handleFormChange}
        handleKeyDown={this.handleKeyDown}
          addItem={this.addItem} />
      </div>
    );
  }
}
