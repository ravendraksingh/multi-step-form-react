import React, { useState } from "react";
import "./plan.css";

const Plan = ({ plan, onSelect, selected }) => {
  //   console.log("plan", plan);

  function choosePlanHandler() {
    //console.log(name + " plan selected");
    onSelect(plan);
  }

  return (
    <div
      className="planbox"
      style={{
        border: selected ? "2px solid blue" : "2px solid rgb(220,220,220)",
      }}
      onClick={choosePlanHandler}
    >
      <img
        src={process.env.PUBLIC_URL + "/images/" + plan.pic}
        className="planpic"
      />
      <div>
        <label className="fw-bold color__navy">{plan.name}</label>
        <br />
        <label className="color__gray">
          ${plan.rate}/{plan.frequency === "monthly" ? "mo" : "yr"}
        </label>
        {plan?.comments && <div className="comments">{plan?.comments}</div>}
      </div>
    </div>
  );
};

export default Plan;
