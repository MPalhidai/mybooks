import React from 'react';
import '../css/Book.css';

export class Book extends React.Component {
  render() {
    return (
      <div className = 'bookCard' id = { this.props.id }>
        <div className = 'bookCardLeft'>
          <p className = 'bookCategory'>{ this.props.category }</p>
          <p className = 'bookTitle'>{ this.props.title }</p>
          <p className = 'bookAuthor'>Author</p>
          <p className = 'bookLinks'>
            <span className = 'bookLink'>Comments</span>
            <span className = 'bookLink' onClick = { () => this.props.removeBtn(this.props.id) }>
              Remove
            </span>
            <span className = 'bookLink'>Edit</span>
          </p>
        </div>
        <div className = 'bookCardMiddle'>
          <div className = 'bookProgressBar'>

          </div>
          <div className = 'bookCardMiddleRight'>
            <p className = 'bookProgressNumber'>0%</p>
            <p className = 'bookProgressComplete'>Completed</p>
          </div>
        </div>
        <div className = 'bookCardRight'>
          <p className = 'bookChapterHeader'>CURRENT CHAPTER</p>
          <p className = 'bookChapter'>Introduction</p>
          <button className = 'progressBtn' >
            Update Progress
          </button>
        </div>
      </div>
    );
  }
}
