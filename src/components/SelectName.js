import React from "react";

export default function SelectName({ filterItems, handleFilter }) {
  function updateEmpName(e) {
    handleFilter(e);
  }

  return (
    <>
      Name:{" "}
      <input
        type="text"
        name="empName"
        placeholder="Name of employee"
        value={filterItems.empName}
        onChange={updateEmpName}
      />
    </>
  );
}
