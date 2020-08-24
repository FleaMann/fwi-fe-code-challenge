import { combineReducers } from 'redux';

import playerIds from './playerIds';
import players from './players';
// add new reducers here

export default combineReducers({
  playerIds,
  players,
});
