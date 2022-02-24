import React, { Component } from "react";

class RegularComp extends Component {
  render() {
    console.log("This is Regular: RegularComponent");
    return (
      <div>
        <h1>RegularComponet - {this.props.name}</h1>
      </div>
    );
  }
}

export default RegularComp;
