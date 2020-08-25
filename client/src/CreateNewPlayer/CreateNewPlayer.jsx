import React from 'react';
import './CreateNewPlayer.scss';
import { Button } from 'bootstrap-react';

const CreateNewPlayer = (props) => {
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
          maxLength="2"
        />
        <input
          type="number"
          placeholder="Winnings"
          onChange={props.winningsChanged}
          value={props.winnings}
        />
      </div>
      <div className="Buttons">
        <Button onClick={props.saveNewPlayer}>Save</Button>
        <Button onClick={props.hideModal}>Exit</Button>
      </div>
      <p>
        {/*I left these here to show my two-way binding was set up*/}
        Name: {props.name} Country: {props.country} Winnings: {props.winnings}
      </p>
    </div>
  );
};

export default CreateNewPlayer;
