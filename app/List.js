import React from 'react';
import { PropTypes } from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const listItems = props.items.map(
    (item, i) => (
      <ListItem
        key={i}
        text={item.text}
        done={item.done}
        toggleDone={props.toggleDone.bind(this, i)}
        removeItem={props.removeItem.bind(this, i)}
      />
    )
  )
  return (
    <ul>
      {listItems}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}
export default List
