import React, { useEffect } from "react";
import { useState } from "react";
import Step0 from "../steps/Step0";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
// import bgdesktopsidebar from "../images/bg-sidebar-desktop.svg";
// import bgsidebarmobile from "./images/bg-sidebar-mobile.svg";
import "./form.css";

import { Stepper, Step, StepLabel } from "@mui/material";

import { useWindowDimensions } from "../util/ScreenUtils";
import MyStep from "../UI/MyStep";

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY", "THANK YOU"];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    frequency: "monthly",
  });
  const windowDimensions = useWindowDimensions();
  //   console.log("windowDimensions", windowDimensions);
  const isSmallScreen = windowDimensions.width < 720;

  // go back to previous step
  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    console.log("nextStep in Form.js called");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Handle fields change
  const handleChange = (e) => {
    console.log("handle change called", e.target.value, e.target.id);
    setData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const updateInfo = (info) => {
    console.log("update info called", info);
    setData((prevData) => ({
      ...prevData,
      ...info,
    }));
  };

  const formContent = () => {
    // alert("active step:", step);
    switch (activeStep) {
      case 0:
        return (
          <Step0
            nextStep={nextStep}
            values={data}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <Step1
            prevStep={prevStep}
            nextStep={nextStep}
            values={data}
            updateInfo={updateInfo}
          />
        );
      case 2:
        return (
          <Step2
            prevStep={prevStep}
            nextStep={nextStep}
            values={data}
            updateInfo={updateInfo}
          />
        );
      case 3:
        return <Step3 prevStep={prevStep} values={data} nextStep={nextStep} />;
      case 4:
        return <Step4 />;
      default:
      // return <div>404: Not Found</div>;
    }
  };

  return (
    <div className="main-grid">
      <div
        className="left "
        style={{
          backgroundImage: `url(${
            isSmallScreen
              ? process.env.PUBLIC_URL + "/images/bg-sidebar-mobile.svg"
              : process.env.PUBLIC_URL + "/images/bg-sidebar-desktop.svg"
          } )`,
        }}
      >
        <Stepper
          activeStep={activeStep}
          orientation={isSmallScreen ? "horizontal" : "vertical"}
          className="stepper"
        >
          {steps.slice(0, 4).map((label, index) => (
            <Step key={index}>
              <StepLabel
                sx={{
                  width: "20",
                }}
              >
                {isSmallScreen ? (
                  ""
                ) : (
                  <MyStep stepNum={index + 1} stepLabel={label} />
                )}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {/* <div className="right"> */}
      {/* add 'was-validated' class to form tag to perform validation before submit */}
      {formContent(activeStep)}
      {/* </div> */}
    </div>
  );
};

export default Form;
