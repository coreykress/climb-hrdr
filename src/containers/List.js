import React, { Component } from "react";
import Section from "../components/Section";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "dates": [
        {
          "day": 1,
          "completion": false,
          "tags": ["warmup", "strength"]
        },
        {
          "day": 2,
          "completion": false,
          "tags": []
        },
        {
          "day": 3,
          "completion": false,
          "tags": []
        },
      ]
    };
  }

  render() {
    return (
      <div className="dayList">
        {this.state.dates.map((date, i) =>
              <p>{date.day}</p>
        )}
      </div>
    );
  }
}
