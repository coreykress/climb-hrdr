import React, { Component } from "react";

export default class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Section">
        <h3>{this.props.section.type}</h3>
      </div>
    );
  }
}
