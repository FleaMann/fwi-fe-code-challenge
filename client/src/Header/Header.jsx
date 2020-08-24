import React, { useState } from 'react';
import { Button } from 'bootstrap-react';

import CreateNewPlayer from '../CreateNewPlayer/CreateNewPlayer';
import './Header.scss';
import { ReactComponent as CloudColor } from './cloud-color.svg';
import { ReactComponent as CloudEffects } from './cloud-effects.svg';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  let modal = null;
  if (showModal) {
    modal = <CreateNewPlayer hideModal={handleHideModal} />;
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
