import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import EditForm from '../containers/EditForm';
import BookView from '../containers/BookView';
import CommentForm from '../containers/CommentForm';
import CategoryList from '../containers/CategoryList';
import CategoryForm from '../containers/CategoryForm';

import HomePage from './components/HomePage'
import SignInPage from './components/SignInPage'
import { generateRequireSignInWrapper } from 'redux-token-auth'

// build a HomePage and change login form to signin

export class Routes extends React.Component {

  render() {
    const requireSignIn = generateRequireSignInWrapper({
      redirectPathIfNotSignedIn: '/signin',
    })

    return(
      <Switch>
        <Route path="/signin" component = { SignInPage } />
        <Route exact path = '/mybooks' render = { requireSignIn( props =>
          <div>
            <BookList />
            <BookForm />
          </div>
        ) } />
        <Route exact path = '/books/:id' render = { requireSignIn( props =>
          <div>
            <BookView bookId = { props.match.params.id } />
            <CommentForm bookId = { props.match.params.id } />
          </div>
        ) } />
        <Route exact path = '/books/update/:id' render = { requireSignIn( props =>
          <div>
            <BookView bookId = { props.match.params.id } />
            <EditForm bookId = { props.match.params.id } />
          </div>
        ) } />
        <Route exact path = '/categories' render = { requireSignIn( props =>
          <div>
            <CategoryList />
            <CategoryForm />
          </div>
        ) } />
      </Switch>
    );
  }
}
