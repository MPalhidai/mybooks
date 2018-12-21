import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import EditForm from '../containers/EditForm';
import BookView from '../containers/BookView';
import CommentForm from '../containers/CommentForm';

export class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path = '/mybooks/' render = { props =>
          <div>
            <BookList />
            <BookForm />
          </div>
        } />
        <Route exact path = '/books/:id' render = { props =>
          <div>
            <BookView bookId = { props.match.params.id } />
            <CommentForm bookId = { props.match.params.id } />
          </div>
        } />
        <Route exact path = '/books/update/:id' render = { props =>
          <div>
            <BookView bookId = { props.match.params.id } />
            <EditForm bookId = { props.match.params.id } />
          </div>
        } />
      </Switch>
    );
  }
}
