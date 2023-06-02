import React from "react";

const Step3 = ({ prevStep, nextStep, values }) => {
  console.log("step3 values", values);
  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const getTotal = () => {
    // console.log("getTotal called");
    let rates = [];
    rates = values?.addons?.map(function (addon) {
      return addon?.rate;
    });
    let ratetotal = 0;
    ratetotal = rates?.reduce((a, b) => a + b, 0) ?? 0;
    // console.log("total", values.plan.rate, ratetotal);
    const _total = values?.plan?.rate + ratetotal;
    console.log(values?.plan?.rate, ratetotal);
    const yr_mo = values?.frequency === "yearly" ? "/yr" : "/mo";
    return "$" + _total + yr_mo;
  };

  return (
    <form id="form3" className="right">
      <div>
        <label className="heading">Finishing up</label>
        <label className="sub-heading">
          Double-check everything look OK before confirming.
        </label>
        <br />
        <br />
        <div className="bg__mangolia rounded px-4 py-4">
          <div className="row fw-bold">
            <div className="col color__navy">
              {values?.plan?.name + " "}
              <span style={{ textTransform: "capitalize" }}>
                ({values.frequency})
              </span>
            </div>
            <div className="col d-flex justify-content-end">
              ${values.plan.rate}
              {values.frequency === "monthly" ? "/mo" : "/yr"}
            </div>
          </div>
          <hr />
          {values?.addons?.map((addon) => (
            <div className="row">
              <div className="col">{addon?.name}</div>
              <div className="col d-flex justify-content-end">
                ${addon?.rate}
                {values.frequency === "monthly" ? "/mo" : "/yr"}
              </div>
            </div>
          ))}
        </div>
        <div className="row px-4 py-4">
          <div className="col">
            Total ({values.frequency === "monthly" ? "per month" : "per year"})
          </div>
          <div className="col d-flex justify-content-end fs-3 fw-bold color__blue">
            {getTotal()}
            {/* {values.frequency === "monthly" ? "/mo" : "/yr"} */}
          </div>
        </div>
      </div>

      <div className="actions">
        <button
          id="idBtnPrevStep"
          className="btn btn-primary active-btn"
          type="submit"
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
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Step3;
