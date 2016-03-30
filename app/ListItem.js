import React from 'react';
import { PropTypes } from 'react';

export default function ListItem(props) {
  return (
    <li
      onClick={props.toggleDone}
      className={props.done ? "item-done" : "item-not-done"}
    >
      No. {props.index + 1}: {props.text}
    </li>
  )
}
