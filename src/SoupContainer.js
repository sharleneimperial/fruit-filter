import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const SoupContainer = props => {
    // Individual pieces of state with their own hooks
 const [soupsToDisplay, setSoupsToDisplay] = useState(props.soups);
 const [filterValue, setFilterValue] = useState('');

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredSoupList = props.soups.filter(soup=> {
      return soup.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setSoupsToDisplay(filteredSoupList);
}

  return(
    <div className="listFoods">
        <h1>Soups Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={soupsToDisplay} />
      </div>
  );
}

export default SoupContainer;