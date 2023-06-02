import React, { useState } from "react";
import "./addon.css";

const AddOn = ({ addon, onSelect, frequency, selected }) => {
  const [checked, setChecked] = useState(selected);

  const checkedHandler = (e) => {
    const _checked = e.target.checked ? true : false;
    setChecked(_checked);
    onSelect(addon, _checked);
  };

  return (
    <div
      className="addonbox"
      style={{
        border: selected ? "2px solid blue" : "2px solid rgb(220,220,220)",
      }}
    >
      <input type="checkbox" checked={checked} onChange={checkedHandler} />
      <div>
        <label className="color__navy">{addon.name}</label>
        <br />
        <label className="color__gray">{addon.desc1}</label>
      </div>
      <label className="color__blue">
        ${addon.rate}
        {frequency === "monthly" ? "/mo" : "/yr"}
      </label>
    </div>
  );
};

export default AddOn;
