import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import Directory from "./components/data/Directory";

//Data for directory
const directory = Directory;

function App() {
  //Initialize State
  var [people, setPeople] = useState(directory.people);
  var [empJobTypeList, setEmpJobTypeList] = useState(directory.titles);
  var [filterItems, setFilterItems] = useState({
    empName: "",
    empJobType: "",
    empIntern: false
  });

  useEffect(() => {
    let filterDirectory = directory.people.filter(function(person) {
      return (
        (filterItems.empName === "" ||
          person.name
            .toLowerCase()
            .indexOf(filterItems.empName.toLowerCase()) !== -1) &&
        (filterItems.empJobType === "" ||
          person.title_cat === filterItems.empJobType) &&
        (filterItems.empIntern === false ||
          person.intern === filterItems.empIntern)
      );
    });

    setPeople(filterDirectory);
  }, [filterItems]);

  //Dynamically Updates Form Elements
  function handleFilter(event) {
    if (event.target.value == "on") {
      const { name, checked } = event.target;
      setFilterItems(prevState => ({ ...prevState, [name]: checked }));
    } else {
      const { name, value } = event.target;
      setFilterItems(prevState => ({ ...prevState, [name]: value }));
    }
  }

  function handleReset() {
    setFilterItems(prevState => ({ ...prevState, empName: "" }));
    setFilterItems(prevState => ({ ...prevState, empJobType: "" }));
    setFilterItems(prevState => ({ ...prevState, empIntern: false }));
  }

  return (
    <div className="directoryC" style={{ margin: "20px auto", width: "50%" }}>
      <Filter
        filterItems={filterItems}
        empJobTypeList={empJobTypeList}
        handleFilter={handleFilter}
        handleReset={handleReset}
      />
      <br />
      <b>Filter:</b> Name:{filterItems.empName} | Job Title:
      <span style={{ textTransform: "capitalize" }}>
        {filterItems.empJobType}
      </span>{" "}
      | Intern: {filterItems.empIntern}
      {people.length}
      <List people={people} />
    </div>
  );
}

export default App;
