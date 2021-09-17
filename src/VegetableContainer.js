import React, { useState } from "react";
import List from "./List";
import Input from "./Input";

const VegetableContainer = (props) => {
  // Individual pieces of state with their own hooks
  const [vegetablesToDisplay, setVegetablesToDisplay] = useState(
    props.vegetables
  );
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredVegetableList = props.vegetables.filter((vegetable) => {
      return vegetable.toLowerCase().includes(newValue.toLowerCase());
    });
    setVegetablesToDisplay(filteredVegetableList);
  };

  return (
      <div className="listFoods">
        <h1>Vegetables Filter</h1>
      <Input value={filterValue} onChange={handleFilterChange} />
      <List foods={vegetablesToDisplay} />
    </div>
  );
};

export default VegetableContainer;
