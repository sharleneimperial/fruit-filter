import React from 'react';

const Input = props => {

  return(
    <div>
        <label htmlFor="food-filter">Filter: </label>
        <input 
        type="text" 
        name="food-filter"
        id="food-filter"
        value={props.value}
        onChange={props.onChange} 
        />
    </div>
  )
}

export default Input;