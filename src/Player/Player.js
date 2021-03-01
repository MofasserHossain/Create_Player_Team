import React, { useState } from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
  //   console.log(props);
  const { playerName, salary, country, position, flag, img } = props.player;
  const [btnDisable, setBtnDisable] = useState(false);
  return (
    <div className="player__card">
      <div className="img">
        <img src={img} alt={playerName} />
      </div>
      <h3>{playerName}</h3>
      <h6 className="position">( {position} )</h6>
      <p className="flag">
        <span>Country : </span> <img src={flag} alt={country} />
        {country}
      </p>
      <p>
        <span>Salary : &euro;</span>
        {salary} Millions/Year
      </p>
      <button
        className={
          btnDisable
            ? 'addTeam btn btn-primary mt-2 disable'
            : 'addTeam btn btn-primary mt-2'
        }
        onClick={() => {
          props.handleAddPlayer(props.player);
          setBtnDisable(true);
        }}
      >
        <FontAwesomeIcon icon={faPlus} /> Add Player
      </button>
    </div>
  );
};

export default Player;
