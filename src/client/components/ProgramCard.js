import './ProgramCard.css';
import React from 'react';

function ProgramCard(props) {
  return (
    <div className='program-card'>
      <img
        className='program-image'
        alt={props.program.mission_name}
        src={props.program.links.mission_patch_small}
      ></img>
      <p>
        {props.program.mission_name} #{props.program.flight_number}
      </p>
      <p>Mission Ids: {props.program.mission_id.join(', ')}</p>
      <p>Launch Year: {props.program.launch_year}</p>
      <p>Successful Launch: {String(props.program.launch_success)}</p>
      <p>
        Successful Landing:{' '}
        {String(props.program.rocket.first_stage.cores[0].land_success)}
      </p>
    </div>
  );
}

export default ProgramCard;
