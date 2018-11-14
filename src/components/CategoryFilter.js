import React from 'react';
import { initialState } from '../actions/constants';
import '../css/CategoryFilter.css';

export class CategoryFilter extends React.Component {

  handleChange = event => {
    this.props.selector(event.target.value);
  }

  render() {

    const filters = ['All', ...initialState.filters];

    return (
      <div className = 'filter'>
        <span className = 'filterTag'>Filter:</span>
        <select className = 'filterSelector' name = 'filters' onChange = { this.handleChange }>
          { filters.map( (category, idx) => (
            <option value = { category } key = { idx }>{ category }</option>
          ))}
        </select>
      </div>
    );
  }
}
