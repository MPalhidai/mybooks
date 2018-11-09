import React from 'react';
import { Book } from '../components/Book';
import { connect } from 'react-redux';
import { createBook, removeBook, getBooks } from '../actions/index';

class BookList extends React.Component {

  render() {
    return(
      <div className = 'BookList'>
        <table className = 'table'>
          <tr className = 'tableHeader'>
            <th className = 'id'>Id</th>
            <th className = 'title'>Title</th>
            <th className = 'category'>Category</th>
          </tr>
          { this.props.inventory.map(({ id, title, category }) => (
            <Book
              id = { id }
              title = { title }
              category = { category }
            />
          ))};
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inventory: state.inventory
  }
};

const mapDispatchToProps = {
  createBook,
  removeBook,
  getBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
