import React from 'react';
import '../css/Comment.css';

// Comment - rating, content, user_id, book_id
// Cool feature if the comment could check how much the user has read the book

export class Comment extends React.Component {
  render() {
    return (
      <div className = 'CommentCard' id = { this.props.id }>
        <div className = 'CommentCardLeft'>
          <p className = 'CommentUser'>{ this.props.user }</p>
        </div>
        <div className = 'CommentCardRight'>
          <p className = 'CommentRating'>{ this.props.rating }</p>
        </div>
        <div className = 'CommentCardBottom'>
          <p className = 'CommentContent'>{ this.props.content }</p>
        </div>
      </div>
    );
  }
}
