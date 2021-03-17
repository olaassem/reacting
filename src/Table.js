import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
            <th>Name</th>
            <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, i) => {
        return (
            <tr key={i}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}   

class Table extends Component {
    render() {
      const {characterData} = this.props
  
      return (
        <table>
          <TableHeader />
          <TableBody characterData={characterData} />
        </table>
      )
    }
  }

export default Table;
