import React from "react";

export default function SelectJobTitle({
  empJobTypeList,
  filterItems,
  handleFilter
}) {
  function jobTypes() {
    return empJobTypeList.map(function(job, i) {
      return (
        <option value={job.key} key={i}>
          {job.display}
        </option>
      );
    });
  }

  function updateJobTitle(e) {
    handleFilter(e);
  }

  return (
    <>
      Job Title
      <select name="empJobType" onChange={updateJobTitle}>
        <option value="">- Select -</option>
        {jobTypes()}
      </select>
    </>
  );
}
