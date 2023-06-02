import React from "react";

const MyStep = ({ stepNum, stepLabel }) => {
  return (
    <div>
      <div style={{ color: "hsl(229, 24%, 87%)" }}>{"STEP " + stepNum}</div>
      <div>
        <b style={{ color: "white" }}>{stepLabel}</b>
      </div>
    </div>
  );
};

export default MyStep;
