import React from "react";

export default function SelectIntern({ filterItems, handleFilter }) {
  function updateIntern(e) {
    handleFilter(e);
  }

  return (
    <>
      <label htmlFor="intern">
        <input
          type="checkbox"
          name="empIntern"
          id="intern"
          checked={filterItems.empIntern}
          onChange={updateIntern}
        />{" "}
        Intern
      </label>
    </>
  );
}
