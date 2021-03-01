import React, { useEffect, useState } from 'react';
import './App.css';
import playerData from './fakeData/fakeData.json';
import Header from './Header/Header';
import Player from './Player/Player';
import Team from './Team/Team';
function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
    // console.log(playerData);
  }, []);
  const handleAddPlayer = (player) => {
    const newTeam = [...addPlayer, player];
    setAddPlayer(newTeam);
    // console.log(player);
  };
  return (
    <div className="team">
      <Header></Header>
      <div className="players">
        <h3 className="text-center">Add Players And Create Team</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="players__list">
                {players.map((player) => (
                  <Player
                    key={player.id}
                    player={player}
                    handleAddPlayer={handleAddPlayer}
                  ></Player>
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <Team addPlayer={addPlayer}></Team>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
