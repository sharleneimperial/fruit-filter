import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const FruitContainer = props => {
    // Individual pieces of state with their own hooks
 const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
 const [filterValue, setFilterValue] = useState('');

// /single state object
// const [state, setState] = useState({
// fruitsToDisplay: props.fruits,
// filterValue: ''
// });

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredFruitList = props.fruits.filter(fruit => {
      return fruit.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setFruitsToDisplay(filteredFruitList);
}

//   const stateCopy = { ... state}
//   stateCopy.filterValue = newValue;
//   stateCopy.fruitsToDisplay = filterFruitList;
//   setState(stateCopy);

  return(
    <div className="listFoods">
        <h1>Fruits Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={fruitsToDisplay} />
      </div>
  );
}

export default FruitContainer;