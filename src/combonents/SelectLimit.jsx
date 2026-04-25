import React from "react";

const SelectLimit = ({ select, setSelect }) => {
  return (
    <div className="controls">
      <label htmlFor="lable">Coins per page </label>
      <select
        className="select"
        name="select"
        id="select"
        value={select}
        onChange={(e) => {
          setSelect(Number(e.target.value));
        }}
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default SelectLimit;
