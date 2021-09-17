import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const DrinkContainer = props => {
    // Individual pieces of state with their own hooks
 const [drinksToDisplay, setDrinksToDisplay] = useState(props.drinks);
 const [filterValue, setFilterValue] = useState('');

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredDrinkList = props.drinks.filter(drink => {
      return drink.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setDrinksToDisplay(filteredDrinkList);
}

  return(
    <div className="listFoods">
        <h1>Drinks Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={drinksToDisplay} />
      </div>
  );
}

export default DrinkContainer;