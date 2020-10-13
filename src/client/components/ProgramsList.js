import './ProgramsList.css';
import React from 'react';
import ProgramCard from './ProgramCard';

function ProgramsList(props) {
  return (
    <div className='programs-list'>
      {props.launches.map((program) => {
        return <ProgramCard program={program} />;
      })}
    </div>
  );
}

export default ProgramsList;
