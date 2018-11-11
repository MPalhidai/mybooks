import React from 'react';
import { initialState } from '../actions/constants';

const filters = ['All', ...initialState.filters];

export class CategoryFilter extends React.Component {
  render() {
    return (
      <select className = 'filterSelector' name = 'filters' value = { this.props.category }>
        { filters.map( category => (
          <option value = { category }>{ category }</option>
        ))}
      </select>
    );
  }
}
