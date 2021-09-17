import React, {useState} from 'react';
import List from './List';
import Input from './Input';

const ChipContainer = props => {
    // Individual pieces of state with their own hooks
 const [chipsToDisplay, setChipsToDisplay] = useState(props.chips);
 const [filterValue, setFilterValue] = useState('');

const handleFilterChange = e => {
    e.preventDefault();

    const newValue = e.target.value;
    setFilterValue(newValue);
    const filteredChipList = props.chips.filter(chip => {
      return chip.toLowerCase().includes(newValue.toLowerCase());
    }) 
    setChipsToDisplay(filteredChipList);
}

  return(
    <div className="listFoods">
        <h1>Chips Filter</h1>
        <Input value={filterValue} onChange={handleFilterChange} />
        <List foods={chipsToDisplay} />
      </div>
  );
}

export default ChipContainer;