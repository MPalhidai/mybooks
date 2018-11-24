import React from 'react';
import '../css/Comment.css';

// comment - rating, content, user_id, book_id
// Cool feature if the comment could check how much the user has read the book

export class Comment extends React.Component {
  render() {
    return (
      <div className = 'commentCard' id = { this.props.id }>
        <div className = 'flexDiv'>
          <div className = 'commentCardLeft'>
            <p className = 'commentUser'>User: { this.props.user }</p>
          </div>
          <div className = 'commentCardRight'>
            <p className = 'commentRating'>Rating: { this.props.rating }</p>
          </div>
        </div>
        <div className = 'commentCardBottom'>
          <p className = 'commentContent'>{ this.props.content }</p>
        </div>

      </div>
    );
  }
}
