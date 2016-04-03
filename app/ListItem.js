import React from 'react';
import { PropTypes } from 'react';

export default function ListItem(props) {
  const handleOnClick = () => {
    props.toggleDone(props.num);
  }
  const handleRemoveItem = () => {
    props.removeItem(props.num);
  }
  return (
    <li>
      <i className="remove-item fa fa-times" onClick={handleRemoveItem}></i>
      <span
        onClick={handleOnClick}
        className={props.done ? "item-done" : "item-not-done"}
      >
        {props.text}
      </span>
    </li>
  )
}

ListItem.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
