import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const SweetContainer = props => {
    // Individual pieces of state with their own hooks
 const [sweetsToDisplay, setSweetsToDisplay] = useState(props.sweets);
 const [filterValue, setFilterValue] = useState('');

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredSweetList = props.sweets.filter(sweet => {
      return sweet.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setSweetsToDisplay(filteredSweetList);
}

  return(
    <div className="listFoods">
        <h1>Sweets Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={sweetsToDisplay} />
      </div>
  );
}

export default SweetContainer;