import React from 'react';
import { PropTypes } from 'react';

export default function ListItem(props) {
  return (
    <li>
      <span
        onClick={props.toggleDone}
        className={props.done ? "item-done" : "item-not-done"}
      >
        {props.text}
      </span>
      <button onClick={props.removeItem}>Delete</button>
    </li>
  )
}
