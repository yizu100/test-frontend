import React, { Component } from 'react';
import Township5 from './township5';
import data from "../data"
import dl_logo from "../img/download_icon.png"
import dist_logo from "../img/Dist_logo.png"


class District5 extends Component {
  constructor() {
    super();
    this.state = {
      expandedRows: []
    };
  }

  //Click handler for expanding rows
  handleRowClick(rowId) {
    const currentExpandedRows = this.state.expandedRows;

    //If false that means that there is no district expanded row at the time of this click handler
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);

    //If isRowCurrentlyExpanded is false state row will expand
    const newExpandedRows = isRowCurrentlyExpanded ?
      currentExpandedRows.filter(id => id !== rowId) :
      currentExpandedRows.concat(rowId);

    this.setState({ expandedRows: newExpandedRows });
  }

  //Rendering function for sta row
  renderItem(sta) {
    const { title, id, lastIn, numForms, numVotes, update, subRegions } = this.props.district;

    const clickCallback = () => this.handleRowClick(id);

    const itemRows = [
      <tr className="names" key={"district-row-data-" + id}>
        <td>
          <img className="dl_logo" src={dist_logo} alt="dist_logo" />
          <span>{title}</span>
          <img className="dl_logo" src={dl_logo} alt="dl_icon" />
          {subRegions.length > 0 &&
            <button
              className="toggle-btn"
              onClick={clickCallback}>{subRegions.length} Townships
              {this.state.expandedRows > 0 ? " -" : " +"}
            </button>
          }
        </td>
        <td>{lastIn}</td>
        <td>{numForms}</td>
        <td>{numVotes}</td>
        <td>{update}</td>
      </tr>
    ];

    //Toggle for rendering township rows of the sta if there are townships under the sta
    if (subRegions.length > 0 && this.state.expandedRows.includes(id)) {
      itemRows.push(
        subRegions.map((town) =>
          <Township5 town={town} />
        )
      )
    }
    return itemRows;
  }

  render() {
    let allItemRows = [];

    data.forEach(sta => {
      allItemRows = this.renderItem(sta);
    });

    return (
      <tbody>
        {allItemRows}
      </tbody>
    );
  }
}

export default District5;