import React from 'react';

export default class AddItemForm extends React.Component {
  render() {
    return (
      <div className="add-item-form">
        <input type="text" value={this.props.inputText}
          onChange={this.props.handleFormChange}
          onKeyDown={this.props.handleKeyDown} />
        <button onClick={this.props.addItem}>Add</button>
      </div>
    )
  }
}
