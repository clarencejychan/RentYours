import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        {this.props.itemName}
      </div>
    );
  }
}

export default Item;