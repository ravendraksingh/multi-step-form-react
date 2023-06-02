import React, { useEffect, useState } from "react";
import Plan from "../plan/Plan";
import "./step1.css";
import "./toggleswitch.css";

const PLANS_MASTER = [
  {
    id: "arcade_monthly",
    name: "Arcade",
    frequency: "monthly",
    rate: 9,
    pic: "icon-arcade.svg",
  },
  {
    id: "advance_monthly",
    name: "Advanced",
    frequency: "monthly",
    rate: 12,
    pic: "icon-advanced.svg",
  },
  {
    id: "pro_monthly",
    name: "Pro",
    frequency: "monthly",
    rate: 15,
    pic: "icon-pro.svg",
  },
  {
    id: "arcade_yearly",
    name: "Arcade",
    frequency: "yearly",
    rate: 90,
    pic: "icon-arcade.svg",
    comments: "2 months free",
  },
  {
    id: "advance_yearly",
    name: "Advanced",
    frequency: "yearly",
    rate: 120,
    pic: "icon-advanced.svg",
    comments: "2 months free",
  },
  {
    id: "pro_yearly",
    name: "Pro",
    frequency: "yearly",
    rate: 150,
    pic: "icon-pro.svg",
    comments: "2 months free",
  },
];

const Step1 = ({ prevStep, nextStep, updateInfo, values }) => {
  console.log("step1:plans initial values", values);
  const [filteredPlans, setFilteredPlans] = useState([]);

  useEffect(() => {
    const filtered_plans = PLANS_MASTER.filter(
      (plan) => plan.frequency === values.frequency
    );
    setFilteredPlans(filtered_plans);
  }, [values]);

  function choosePlanHandler(plan) {
    // console.log("selected plan", plan);
    updateInfo({ plan: plan });
  }

  const frequencyChangeHandler = (e) => {
    const _freq = e.target.checked ? "yearly" : "monthly";
    updateInfo({ frequency: _freq, plan: null, addons: [] });
  };

  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    if (values.plan === undefined || values.plan === null) {
      alert("Pls select your plan !");
      return;
    }
    nextStep();
  };
  // previous event listener
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <form id="form1" className="right">
      <div>
        <label className="heading">Select your plan</label>
        <label className="sub-heading">
          You have the option of monthly or yearly billing.
        </label>
        <br />
        <br />
        <div className="plans-container">
          {filteredPlans.map((plan, planIndex) => (
            <Plan
              key={plan.id}
              plan={plan}
              selected={plan.id === values?.plan?.id}
              onSelect={choosePlanHandler}
            />
          ))}
        </div>
        <br />
        <br />
        <div className="d-flex flex-row justify-content-center py-2 switch-box">
          <span
            style={{
              color:
                values?.frequency === "monthly"
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(231, 11%, 63%)",
            }}
          >
            Monthly
          </span>
          <label className="switch mx-5">
            <input
              type="checkbox"
              checked={values?.frequency === "yearly"}
              onChange={frequencyChangeHandler}
            />
            <span className="slider round"></span>
          </label>
          <span
            style={{
              color:
                values?.frequency === "yearly"
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(231, 11%, 63%)",
            }}
          >
            Yearly
          </span>
        </div>
      </div>
      <div className="actions">
        <button
          id="idBtnPrevStep"
          className="btn btn-primary active-btn"
          type="button"
          onClick={Previous}
        >
          Prev Step
        </button>
        <button
          id="idBtnNextStep"
          className="btn btn-primary active-btn"
          type="submit"
          onClick={Continue}
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Step1;
