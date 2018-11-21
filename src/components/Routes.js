import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookList from '../containers/BookList';

export class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path = '/' component = { BookList } />
      </Switch>
    );
  }
}
