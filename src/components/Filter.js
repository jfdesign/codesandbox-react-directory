import React from "react";
import SelectName from "./SelectName";
import SelectJobTitle from "./SelectJobTitle";
import SelectIntern from "./SelectIntern";

export default function Filter({
  empJobTypeList,
  filterItems,
  handleFilter,
  handleReset
}) {
  function updateReset(e) {
    e.preventDefault();
    handleReset();
  }

  return (
    <div
      className="filter"
      style={{ background: "#EEE", padding: "30px 15px", textAlign: "center" }}
    >
      <SelectName filterItems={filterItems} handleFilter={handleFilter} />
      &nbsp;&nbsp;
      <SelectJobTitle
        empJobTypeList={empJobTypeList}
        filterItems={filterItems}
        handleFilter={handleFilter}
      />
      &nbsp;&nbsp;
      <SelectIntern filterItems={filterItems} handleFilter={handleFilter} />
      &nbsp;&nbsp;
      <button onClick={updateReset}>Reset</button>
    </div>
  );
}
