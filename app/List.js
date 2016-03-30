import React from 'react';
import { PropTypes } from 'react';

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        'the first item',
        'the second item',
        'the third item'
      ]
    }
  }
  render() {
    const list = this.state.items.map(
      (itemText, index) => (
        <li key={index}>{itemText}</li>
      )
    )
    return (
      <ul>
        {list}
      </ul>
    );
  }
}
