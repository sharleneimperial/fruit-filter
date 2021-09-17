import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const SeafoodContainer = props => {
    // Individual pieces of state with their own hooks
 const [seafoodsToDisplay, setSeafoodsToDisplay] = useState(props.seafoods);
 const [filterValue, setFilterValue] = useState('');

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredSeafoodList = props.seafoods.filter(seafood => {
      return seafood.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setSeafoodsToDisplay(filteredSeafoodList);
}

  return(
    <div className="listFoods">
        <h1>Seafoods Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={seafoodsToDisplay} />
      </div>
  );
}

export default SeafoodContainer;