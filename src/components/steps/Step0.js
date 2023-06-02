import React from "react";
import "./step0.css";

const Step0 = ({ nextStep, handleChange, values }) => {
  console.log("step0: personal info, initial values", values);
  // for continue event listener
  const Continue = (e) => {
    console.log("continue called", e);
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    nextStep();
  };

  const validateForm = () => {
    // var fieldElement = document.getElementById("name");
    // console.log("fieldElement", fieldElement, fieldElement.value);
    var inputs = document.getElementsByTagName("input");
    console.log(inputs);
    var var3 = Array.prototype.filter.call(inputs, function (element) {
      console.log("element id", element.id);
      var elementFeedbackId = element.id + "-feedback";
      console.log("elementFeedbackId", elementFeedbackId);
      var var5 = document.getElementById(elementFeedbackId);
      console.log("var5", var5);

      if (element?.value === undefined || element?.value === "") {
        element.classList.add("input__error");
        var5.classList.remove("hide");
        return true;
      } else {
        element.classList.remove("input__error");
        var5.classList.add("hide");
      }
    });
    console.log("var3", var3);
    return var3.length === 0;
  };

  const handleInputChange = (e) => {
    handleChange(e);
  };

  return (
    <form id="form0" className="right">
      <div>
        <p className="heading">Personal info</p>
        <p className="sub-heading">
          Please provide your name, email address, and phone number.
        </p>
        <br />
        <div>
          <div>
            <div className="row">
              <label className="col">Name</label>
              <label id="name-feedback" className="col error__feedback hide">
                *Name is required
              </label>
            </div>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="e.g. John Doe"
              value={values?.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div>
            <div className="row">
              <label className="col">Email Address</label>
              <label id="email-feedback" className="col error__feedback hide">
                *Email address is required
              </label>
            </div>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="e.g. johndoe@email.com"
              value={values?.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div>
            <div className="row">
              <label className="col">Phone Number</label>
              <label id="phone-feedback" className="col error__feedback hide">
                *Phone number is required
              </label>
            </div>
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="e.g. +1 234 567 890"
              value={values?.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="actions">
        <div></div>
        <button
          id="idBtnNextStep"
          className="btn btn-primary active-btn"
          type="submit"
          onClick={Continue}
          //   onSubmit={Continue}
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Step0;
