import React from 'react';

export default class AddItemForm extends React.Component {
  render() {
    return (
      <form>
        <p>Add Item:</p>
        <input type="text" />
        <input type="submit" value="Add" />
      </form>
    )
  }
}
