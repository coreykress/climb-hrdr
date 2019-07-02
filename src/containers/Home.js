import React, { Component } from "react";
import Section from "../components/Section";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "day": 1,
      "date": "",
      "sections": [
        {
          "type": "Warm Up",
          "exercises": [
            {
              "name": "bike",
              "description": "Go for 10 minutes",
              "completion": false
            }
          ]
        },
        {
          "type": "Strength",
          "exercises": [
            {
              "name": "ARC #1",
              "description": "35 minutes",
              "completion": false
            },
            {
              "name": "Hangboard #1",
              "completion": false
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Today's Work - Day {this.state.day}</h1>
            {this.state.sections.map((section, i) =>
              <Section section={section} key={i} />
            )}
        </div>
      </div>
    );
  }
}
