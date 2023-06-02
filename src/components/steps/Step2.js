import React, { useEffect, useState } from "react";
import AddOn from "../UI/AddOn";
import "./step2.css";

const ADDONS_MASTER = [
  {
    id: "os_mo",
    name: "Online service",
    desc1: "Access to multiplayer games",
    frequency: "monthly",
    rate: 1,
  },
  {
    id: "os_yr",
    name: "Online service",
    desc1: "Access to multiplayer games",
    frequency: "yearly",
    rate: 10,
  },
  {
    id: "ls_mo",
    name: "Large storage",
    desc1: "Extra 1TB of cloud space",
    frequency: "monthly",
    rate: 2,
  },
  {
    id: "ls_yr",
    name: "Large storage",
    desc1: "Extra 1TB of cloud space",
    frequency: "yearly",
    rate: 20,
  },
  {
    id: "cu_pr",
    name: "Customizable profile",
    desc1: "Custom theme on your profile",
    frequency: "monthly",
    rate: 2,
  },
  {
    id: "cu_pr",
    name: "Customizable profile",
    desc1: "Custom theme on your profile",
    frequency: "yearly",
    rate: 20,
  },
];

const Step2 = ({ prevStep, nextStep, updateInfo, values }) => {
  console.log("step2:addons initial values", values);
  const [addons, setAddons] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  useEffect(() => {
    const filteredAddons = ADDONS_MASTER.filter(
      (addons) => addons.frequency === values.frequency
    );
    console.log("filtered addons", filteredAddons);
    setAddons(filteredAddons);
  }, []);

  // for continue event listener
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const addOnChangeHandler = (addon, checked) => {
    console.log("addon", addon, checked);
    console.log("selectedAddons", selectedAddons);

    let lv_addons = [...selectedAddons];
    if (checked) {
      // add to the list
      if (lv_addons.findIndex((b) => b.id === addon.id) < 0) {
        lv_addons.push(addon);
      } else {
        //addon already added, do nothing
      }
    } else {
      // remove the addon from list
      lv_addons = lv_addons.filter((a) => a.id !== addon.id);
    }
    console.log("lv_addons", lv_addons);
    setSelectedAddons(lv_addons);
    updateInfo({ addons: lv_addons });
  };

  return (
    <form id="form2" className="right">
      <div>
        <label className="heading">Pick add-ons</label>
        <label className="sub-heading">
          Add-ons help enhance your gaming experience.
        </label>
        <br />
        <br />
        <div className="addon-container">
          {addons.map((addon) => (
            <AddOn
              key={"addon_key_" + addon.id}
              addon={addon}
              onSelect={addOnChangeHandler}
              frequency={values.frequency}
              selected={
                values?.addons?.findIndex((a) => a.id === addon.id) >= 0
              }
              // selected={true}
            />
          ))}
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
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Step2;
