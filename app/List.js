import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  componentWillUpdate() {
    let node = ReactDOM.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }
  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      let node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight - node.clientHeight;
    }
  }
  render() {
    const listItems = this.props.items.map(
      (item, i) => (
        <ListItem
          key={i}
          num={i}
          text={item.text}
          done={item.done}
          toggleDone={this.props.toggleDone}
          removeItem={this.props.removeItem}
        />
      )
    )
    return (
        <ul className={listItems.length > 0 ? 'display-items' : 'display-none'}>
          {listItems}
        </ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
}
export default List
