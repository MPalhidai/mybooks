import React from 'react';
import '../css/CategoryList.css';
import { Category } from '../components/Category';
import { connect } from 'react-redux';
import { getCategories } from '../actions/async';

class CategoryList extends React.Component {

  render() {
    return(
      <div className = 'CategoryList'>
        { this.props.categories.map( (category, idx) => (
          <Category
            key = { idx }
            category = { category }
            total = { category.total }
          />
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.props.getCategories()
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
};

const mapDispatchToProps = {
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
