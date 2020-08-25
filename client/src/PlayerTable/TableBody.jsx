import React from 'react';
import PropTypes from 'prop-types';
import Flags from 'react-world-flags';

import Avatar from '../Avatar';
import { COUNTRIES } from '../constants';
import { Button } from 'bootstrap-react';

const TableBody = ({ players }, props) => {
  return (
    <table
      id="player-table-body"
      role="presentation"
      className="table table--body"
    >
      <tbody>
        {players.map(({ id, name, country, winnings, imageUrl }) => (
          <tr key={id} role="row" className="table__row">
            <td role="gridcell" className="table__avatar">
              <Avatar src={imageUrl} />
              {/*If I had more time I would have made both of the buttons
              functional and laid them out better using flex in this row*/}
              <Button onClick={(id) => props.deletePlayer}>Delete </Button>
              <Button onClick={(id) => props.updatePlayer}>Update </Button>
            </td>
            <td role="gridcell" className="table__player">
              {name}
            </td>
            <td role="gridcell" className="table__winnings">
              {winnings.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </td>
            <td role="gridcell" className="table__native">
              <div className="country">
                <Avatar>
                  <Flags code={country} alt="" />
                </Avatar>
                {country}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableBody.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.oneOf(Object.keys(COUNTRIES)),
      winnings: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableBody;
