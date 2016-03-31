import React from 'react';
import { PropTypes } from 'react';

export default function ListItem(props) {
  return (
    <li>
      <button onClick={props.removeItem}>x</button>
      <span
        onClick={props.toggleDone}
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
}
