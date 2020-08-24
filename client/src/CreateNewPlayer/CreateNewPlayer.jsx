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
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Winnings" />
      </div>
      <div className="Buttons">
        <Button>Save</Button>
        <Button onClick={props.hideModal}>Exit</Button>
      </div>
    </div>
  );
};

export default CreateNewPlayer;
