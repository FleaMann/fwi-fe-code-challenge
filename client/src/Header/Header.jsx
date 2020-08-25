import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'bootstrap-react';

import CreateNewPlayer from '../CreateNewPlayer/CreateNewPlayer';
import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';
import { fetchPlayersSuccess } from '../appState/actions';

const Header = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    country: '',
    winnings: '',
  });

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setNewPlayer({
      name: newName.charAt(0).toUpperCase() + newName.slice(1),
      country: newPlayer.country,
      winnings: newPlayer.winnings,
    });
  };

  const handleCountryChange = (event) => {
    setNewPlayer({
      name: newPlayer.name,
      country: event.target.value.toUpperCase(),
      winnings: newPlayer.winnings,
    });
  };

  const handleWinningsChange = (event) => {
    setNewPlayer({
      name: newPlayer.name,
      country: newPlayer.country,
      winnings: event.target.value,
    });
  };

  // I would love a chance to talk through with someone about why
  // I could not get this POST to not return anything but a 400 Bad
  // Request :( but in Postman I could post all the same data and it
  // crete a new player I could then see in the players list.
  //
  const handleOnSave = async () => {
    // this log shows that I am getting the correct json to send with the POST
    console.log('new player ', JSON.stringify(newPlayer));
    //this request succeeds in postman, not sure why it fails in the app
    const response = await fetch('http://localhost:3001/players', {
      method: 'POST',
      headers: {
        Content: 'application/json',
      },
      body: JSON.stringify(newPlayer),
    });

    const json = await response.json();
    console.log('Response', json);
    dispatch(fetchPlayersSuccess(json)); // I am very new to react but I believe
    // we would use the dispatch here to fetch the players again after change
    // but the useEffect() in PlayerTable.jsx may handle this, but I wasn't sure
    handleHideModal();
  };

  let modal = null;
  if (showModal) {
    modal = (
      <CreateNewPlayer
        hideModal={handleHideModal}
        nameChanged={handleNameChange}
        countryChanged={handleCountryChange}
        winningsChanged={handleWinningsChange}
        saveNewPlayer={handleOnSave}
        name={newPlayer.name}
        country={newPlayer.country}
        winnings={newPlayer.winnings}
      />
    );
  }

  return (
    <div>
      <header id="main-header" className="header">
        <div className="logo">
          <CloudColor className="logo__color" />
          <CloudEffects className="logo__effects" />
        </div>
        <h1 className="header__title">FWI Poker Challenge</h1>
        <Button variant="primary" onClick={handleShowModal}>
          Create new player
        </Button>
      </header>
      <div>{modal}</div>
    </div>
  );
};

export default Header;
