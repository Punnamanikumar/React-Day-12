import React, { Component } from "react";
import PureComp from "./PureComp";
import PureComp2 from "./PureComp2";
import RegularComp from "./RegularComp";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "ManiKumar",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "ManiKumar",
      });
    }, 5000);
  }
  render() {
    console.log("This is ParentComponent");
    return (
      <div>
        <h1>Parent Component</h1>
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
        <PureComp2 name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
