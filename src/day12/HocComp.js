import React from "react";

const HocComp = (WrappedComponent) => {
  //! It will return a new Component.

  const WrappingComponent = () => {
    const name = "ManiKumar";
    return (
      <div>
        <WrappedComponent name={name} />
      </div>
    );
  };
  return WrappingComponent;
};

export default HocComp;
