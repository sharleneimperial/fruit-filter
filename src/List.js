import React from "react";

const List = (props) => {
  const foodItems = props.foods.map((food, idx) => {
    return <li key={idx}>{food}</li>;
  });

  return <ul>{foodItems}</ul>;
};

export default List;
