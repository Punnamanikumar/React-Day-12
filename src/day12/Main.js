import React from "react";
import HocComp from "./HocComp";

const Main = (props) => {
  console.log("Props from HOC Component", props.name);
  return (
    <div>
      <h1> HOC Using Props -{props.name}</h1>
    </div>
  );
};

// export default Main;
export default HocComp(Main);
