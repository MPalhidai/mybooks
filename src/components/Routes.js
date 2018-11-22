import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

export class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path = '/' render = { props =>
          <div>
            <BookList />
            <BookForm />
          </div>
        } />


      </Switch>
    );
  }
}
