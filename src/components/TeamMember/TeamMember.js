import React from 'react';
import './TeamMember.css';

const TeamMember = (props) => {
  const { playerName, img, salary } = props.player;
  return (
    <div className="teamMember">
      <img src={img} alt={playerName} />
      <span className="flex-grow-1">{playerName}</span>
      <span>&euro;{salary} Millions</span>
    </div>
  );
};

export default TeamMember;
