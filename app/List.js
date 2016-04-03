import React from 'react';
import { PropTypes } from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const listItems = props.items.map(
    (item, i) => (
      <ListItem
        key={i}
        num={i}
        text={item.text}
        done={item.done}
        toggleDone={props.toggleDone}
        removeItem={props.removeItem}
      />
    )
  )
  return (
      <ul className={listItems.length > 0 ? 'display-items' : 'display-none'}>
        {listItems}
      </ul>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
}
export default List
