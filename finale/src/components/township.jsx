import React from 'react';
import dl_logo from "../img/download_icon.png"

const Township = (props) => {
  const { title, id, lastIn, numForms, numVotes, update } = props.town;
  return (
    <tr className="townshipRow" key={"town-row-data-" + id}>
      <td>
        <span className="capital capitalTown">T</span>
        <span>{title}</span>
        <img className="dl_logo" src={dl_logo} alt="dl_icon" />
      </td>
      <td>{lastIn}</td>
      <td>{numForms}</td>
      <td>{numVotes}</td>
      <td>{update}</td>
    </tr>
  );
}

export default Township;