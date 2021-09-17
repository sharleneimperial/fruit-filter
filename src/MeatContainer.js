import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const MeatContainer = props => {
    // Individual pieces of state with their own hooks
 const [meatsToDisplay, setMeatsToDisplay] = useState(props.meats);
 const [filterValue, setFilterValue] = useState('');

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredMeatList = props.meats.filter(meat => {
      return meat.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setMeatsToDisplay(filteredMeatList);
}
  return(
    <div className="listFoods">
        <h1>Meats Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={meatsToDisplay} />
      </div>
  );
}

export default MeatContainer;