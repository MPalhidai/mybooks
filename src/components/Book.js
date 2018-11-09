import React from 'react';

export class Book extends React.Component {
  render() {
    return (
      <div className = 'Book'>
        <tr className = 'tableRow'>
          <td>{ this.props.id }</td>
          <td>{ this.props.title }</td>
          <td>{ this.props.category }</td>
        </tr>
      </div>
    );
  }
}
