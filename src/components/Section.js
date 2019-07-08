import React, { Component } from "react";
import './Section.css';

export default class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section">
        <h3>{this.props.section.type}</h3>
        {this.props.section.exercises.map((exercise, i) =>
              <p>{exercise.name}</p>
            )}
      </div>
    );
  }
}
