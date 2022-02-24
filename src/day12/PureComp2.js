import React, { memo } from "react";

const PureComp2 = (props) => {
  return (
    <div>
      {console.log("This is Pure : Functional Component")}
      <h1>PureComponent using Functional Component : {props.name}</h1>
    </div>
  );
};

export default memo(PureComp2);
