import React from 'react';
import { initialState } from '../actions/constants';

export class CategoryFilter extends React.Component {

  handleChange = event => {
    this.props.selector(event.target.value);
  }

  render() {

    const filters = ['All', ...initialState.filters];

    return (
      <div>
        <span className = 'filterTag'>Filter: </span>
        <select className = 'filterSelector' name = 'filters' onChange = { this.handleChange }>
          { filters.map( category => (
            <option value = { category }>{ category }</option>
          ))}
        </select>
      </div>
    );
  }
}
