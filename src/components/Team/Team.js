import React from 'react';
import TeamMember from '../TeamMember/TeamMember';
import './Team.css';
const Team = (props) => {
  //   console.log(props.addPlayer);
  const playerData = props.addPlayer;
  const totalBudget = playerData.reduce(
    (total, player) => total + player.salary,
    0
  );
  return (
    <div className="team__card">
      <h3 className="mb-4">Player Added : {playerData.length}</h3>
      <div className="teamMember__list">
        {playerData.map((player) => (
          <TeamMember key={player.id} player={player}></TeamMember>
        ))}
      </div>
      <div className="total">
        <span>Total Budget :</span>
        <span>&euro;{totalBudget} Million</span>
      </div>
    </div>
  );
};

export default Team;
