import React from 'react';

export class Book extends React.Component {
  render() {
    return (
      <tr className = 'tableRow'>
        <td>{ this.props.id }</td>
        <td>{ this.props.title }</td>
        <td>{ this.props.category }</td>
      </tr>
    );
  }
}
