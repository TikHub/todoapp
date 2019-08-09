import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onItemAdded } = this.props;
    return (
      //   <form>
      //     <input type="text" />
      //     <button className="btn btn-outline-secondary>Add Item</button>
      //   </form>
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded("Hello!")}
        >
          Add Item
        </button>
      </div>
    );
  }
}
