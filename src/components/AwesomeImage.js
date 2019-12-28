import React, { Component } from "react";

export default class AwesomeImage extends Component {
  render() {
    return (
      <div
        className="awesomeimage"
        style={{
          backgroundImage: `url(${this.props.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          width: "300px",
          height: "200px"
        }}
      />
    );
  }
}
