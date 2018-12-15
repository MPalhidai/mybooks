import React from 'react';
import '../css/Book.css';
import { Link } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export class Book extends React.Component {

  render() {

    const book = {
      id: this.props.id,
      category: this.props.category,
      title: this.props.title,
      author: this.props.author,
      current_page: this.props.current_page,
      current_chapter: this.props.current_chapter,
      total_pages: this.props.total_pages
    }

    let percentage = Math.floor(book.current_page / book.total_pages * 100);

    return (
      <div className = 'bookCard' id = { book.id }>
        <div className = 'bookCardLeft'>
          <p className = 'bookCategory'>{ book.category }</p>
          <p className = 'bookTitle'>{ book.title }</p>
          <p className = 'bookAuthor'>{ book.author }</p>
          <p className = 'bookLinks'>
            <Link to = { `/books/${ book.id }` } className = 'bookLink'>Comments</Link>
            <span className = 'bookLink' onClick = { () => this.props.removeBtn(book.id) }>
              Remove
            </span>
            <Link to = { `/books/update/${ book.id }` } className = 'bookLink'>Edit</Link>
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
          <p className = 'bookChapter'>{ book.current_chapter }</p>
          <button className = 'progressBtn' onClick = { () => this.props.progressBtn(book) }>
            Update Progress
          </button>
        </div>
      </div>
    );
  }
}
