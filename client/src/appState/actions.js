import { FETCH_PLAYERS_SUCCESS } from './constants';
import { CREATE_PLAYER_SUCCESS } from './constants';
import { DELETE_PLAYER_SUCCESS } from './constants';

export function fetchPlayersSuccess(data) {
  return { type: FETCH_PLAYERS_SUCCESS, payload: { data } };
}

export function createPlayersSuccess(data) {
  return { type: CREATE_PLAYER_SUCCESS, payload: { data } };
}

export function deletePlayerSuccess(data) {
  return { type: DELETE_PLAYER_SUCCESS, payload: { data } };
}
