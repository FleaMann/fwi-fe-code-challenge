import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlayersSuccess } from '../appState/actions';

import './PlayerTable.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const getPlayers = (state) => state.playerIds.map((id) => state.players[id]);

const PlayerTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function fetchPlayers() {
      const response = await fetch(
        'http://localhost:3001/players?sortBy=name&sortOrder=asce',
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const json = await response.json();
      dispatch(fetchPlayersSuccess(json));
    })();
  }, [dispatch]);

  const handleDelete = async (id) => {
    console.log('DELETE Player using GET player from td id and DELETE request');
    // Didn't get this far with the time I had unfortunately,
    // but would use the id here to make a "get a player" GET request
    // to find the player to delete then use the "delete a player"
    // DELETE request
    // similar to how I did in Header.jsx for Creating a player
  };

  const handleUpdate = async (id) => {
    console.log('Update Player using PATCH request');
    // Didn't get this far with the time I had unfortunately,
    // but would use the id here to make a "get a player" GET request
    // to find the player id to update then use the "update a player"
    // PATCH request
    // similar to how I did in Header.jsx for Creating a player
  };

  const players = useSelector(getPlayers);

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody
        players={players}
        deletePlayer={handleDelete}
        updatePlayer={handleUpdate}
      />
    </div>
  );
};

export default PlayerTable;
