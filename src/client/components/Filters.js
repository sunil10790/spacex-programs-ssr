import './Filters.css';
import React from 'react';
import FilterButton from './common/FilterButton';

function Filters(props) {
  const displayYears = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  return (
    <div className='filters'>
      <h3 className='filters-title'>Filters</h3>
      <div className='launch-year'>
        <p>Launch Year</p>
        {displayYears.map((year) => {
          return (
            <FilterButton
              value={year}
              type='year'
              onButtonClick={props.onButtonClick}
              displayValue={year}
            />
          );
        })}
        <p>Successful Launch</p>
        <FilterButton
          value='true'
          type='successfulLaunch'
          onButtonClick={props.onButtonClick}
          displayValue='True'
        />
        <FilterButton
          value='false'
          type='successfulLaunch'
          onButtonClick={props.onButtonClick}
          displayValue='False'
        />
        <p>Successful Landing</p>
        <FilterButton
          value='true'
          type='successfulLanding'
          onButtonClick={props.onButtonClick}
          displayValue='True'
        />
        <FilterButton
          value='false'
          type='successfulLanding'
          onButtonClick={props.onButtonClick}
          displayValue='False'
        />
      </div>
    </div>
  );
}

export default Filters;
