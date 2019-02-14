import React from 'react';
import '../css/Comment.css';

export class Category extends React.Component {
  render() {
    return (
      <div className = 'commentCard'>
        <div className = 'flexDiv'>
          <div className = 'commentCardLeft'>
            <p className = 'commentUser'>{ this.props.type }</p>
          </div>
          <div className = 'commentCardRight'>
            <p className = 'commentRating'>Total: { this.props.total }</p>
          </div>
        </div>
      </div>
    );
  }
}
