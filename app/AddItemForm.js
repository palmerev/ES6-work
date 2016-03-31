import React from 'react';

export default class AddItemForm extends React.Component {
  render() {
    return (
      <div>
        <p>Add Item:</p>
        <input type="text" value={this.props.inputText}
          onChange={this.props.handleFormChange} />
        <button onClick={this.props.addItem}>Add</button>
      </div>
    )
  }
}
