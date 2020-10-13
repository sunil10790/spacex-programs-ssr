import React from 'react';

function FilterButton(props) {
  return (
    <button
      type='button'
      className='btn btn-primary btn-sm'
      onClick={(e) => props.onButtonClick(props.type, props.value)}
    >
      {props.displayValue}
    </button>
  );
}

export default FilterButton;
