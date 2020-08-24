import React, { useState } from 'react';
import { Button } from 'bootstrap-react';

import CreateNewPlayer from '../CreateNewPlayer/CreateNewPlayer';
import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';

const Header = () => {
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
    setNewPlayer({
      name: event.target.value,
      country: newPlayer.country,
      winnings: newPlayer.winnings,
    });
  };

  const handleCountryChange = (event) => {
    setNewPlayer({
      name: newPlayer.name,
      country: event.target.value,
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

  let modal = null;
  if (showModal) {
    modal = (
      <CreateNewPlayer
        hideModal={handleHideModal}
        nameChanged={handleNameChange}
        countryChanged={handleCountryChange}
        winningsChanged={handleWinningsChange}
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
