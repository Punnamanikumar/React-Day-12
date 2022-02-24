import React from "react";

class PureComp extends React.PureComponent {
  render() {
    console.log("This is PureComponent : Class Component");

    return (
      <div>
        <h1>PureComponent - {this.props.name}</h1>
      </div>
    );
  }
}

export default PureComp;
