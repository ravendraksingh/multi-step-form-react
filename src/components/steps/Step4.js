import { style } from "@mui/system";
import React from "react";

const Step4 = () => {
  console.log("step4");

  return (
    <form id="form4" className="right py-5 text-center">
      <div className="d-flex flex-fill flex-column justify-content-center align-items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/icon-thank-you.svg"}
          className="thank-you-img"
        />
        <br />
        <br />
        <p className="heading">Thank you!</p>
        <br />
        <p className="sub-heading">
          Thanks for confirming your subscription! We hope you have fun using
          our plarform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </form>
  );
};

export default Step4;
