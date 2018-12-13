import React from 'react';
import '../css/Book.css';
import { Link } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export class Book extends React.Component {

  render() {
    let percentage = Math.floor(this.props.current_page / this.props.total_pages * 100);

    return (
      <div className = 'bookCard' id = { this.props.id }>
        <div className = 'bookCardLeft'>
          <p className = 'bookCategory'>{ this.props.category }</p>
          <p className = 'bookTitle'>{ this.props.title }</p>
          <p className = 'bookAuthor'>{ this.props.author }</p>
          <p className = 'bookLinks'>
            <Link to = { `/books/${ this.props.id }` } className = 'bookLink'>Comments</Link>
            <span className = 'bookLink' onClick = { () => this.props.removeBtn(this.props.id) }>
              Remove
            </span>
            <Link to = { `/books/update/${ this.props.id }` } className = 'bookLink'>Edit</Link>
          </p>
        </div>
        <div className = 'bookCardMiddle'>
          <CircularProgressbar
            percentage = { percentage }
            className = 'bookProgressBar'
            styles={{
              path: { stroke: "#379cf6" }
            }}
          />
          <div className = 'bookCardMiddleRight'>
            <p className = 'bookProgressNumber'>{ percentage }%</p>
            <p className = 'bookProgressComplete'>Completed</p>
          </div>
        </div>
        <div className = 'bookCardRight'>
          <p className = 'bookChapterHeader'>CURRENT CHAPTER</p>
          <p className = 'bookChapter'>{ this.props.current_chapter }</p>
          <button className = 'progressBtn' onClick = { () => this.props.progressBtn(this.props.id) }>
            Update Progress
          </button>
        </div>
      </div>
    );
  }
}
