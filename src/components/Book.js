import React from 'react';
import '../css/Book.css';

export class Book extends React.Component {
  render() {
    return (
      <tr className = 'tableRow' key = { this.props.key }>
        <td>{ this.props.id }</td>
        <td>{ this.props.title }</td>
        <td>{ this.props.category }</td>
        <td className = 'removeColumn'>
          <button onClick = { () => this.props.removeBtn(this.props.id) } className = 'removeBtn'>
            X
          </button>
        </td>
      </tr>
    );
  }
}
