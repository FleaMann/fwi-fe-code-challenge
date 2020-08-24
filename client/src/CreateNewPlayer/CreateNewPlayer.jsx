import React from 'react';
import './CreateNewPlayer.scss';
import { Button } from 'bootstrap-react';
// import { useDispatch } from 'react-redux';
//
// import { createPlayersSuccess } from '../appState/actions';

const CreateNewPlayer = (props) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   (async function createPlayer() {
  //     const response = await postMessage('http://localhost:3001/players', {
  //       headers: {
  //         Accept: 'application/json',
  //       },
  //     });
  //
  //     const json = await response.json();
  //     dispatch(createPlayersSuccess(json));
  //   })();
  // }, [dispatch]);

  return (
    <div className="CreateNewPlayer">
      <header>
        <h4>Create New Player</h4>
      </header>
      <div className="Content">
        <input
          type="text"
          placeholder="Name"
          onChange={props.nameChanged}
          value={props.name}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={props.countryChanged}
          value={props.country}
        />
        <input
          type="text"
          placeholder="Winnings"
          onChange={props.winningsChanged}
          value={props.winnings}
        />
      </div>
      <div className="Buttons">
        <Button>Save</Button>
        <Button onClick={props.hideModal}>Exit</Button>
      </div>
      <p>
        Name: {props.name} Country: {props.country} Winnings: {props.winnings}
      </p>
    </div>
  );
};

export default CreateNewPlayer;
