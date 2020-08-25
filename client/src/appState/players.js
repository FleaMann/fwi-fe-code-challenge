import { FETCH_PLAYERS_SUCCESS, CREATE_PLAYER_SUCCESS } from './constants';

function mergePlayers(state, { players }) {
  const newState = { ...state };
  players.forEach((player) => {
    newState[player.id] = player;
  });
  return newState;
}

function addPlayer(state, newPlayer) {
  return {
    ...state,
    updatedPlayers: state.players.concat(newPlayer),
  };
}

export default function players(state = {}, action) {
  switch (action.type) {
    case FETCH_PLAYERS_SUCCESS:
      return mergePlayers(state, action.payload.data);
    case CREATE_PLAYER_SUCCESS:
      const newPlyr = {
        id: Math.random(),
        name: action.payload.name,
        country: action.payload.country,
        winnings: action.payload.winnings,
      };
      return addPlayer(state, newPlyr);
    default:
      return state;
  }
}
