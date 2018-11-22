import React from 'react';
import '../css/BookView.css';
import { Book } from '../components/Book';
import { connect } from 'react-redux';

class BookView extends React.Component {
  render() {


    let book = this.props.inventory.filter( book => book.id === Number(this.props.id))[0];

    return(
      <div className = 'BookView'>
        <Book
          id = { book.id }
          title = { book.title }
          category = { book.category }
          removeBtn = { this.handleRemoveBook }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory.books
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookView);
