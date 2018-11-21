import React from 'react';
import '../css/App.css';

import BookForm from '../containers/BookForm';
import { Nav } from './Nav';
import { Routes } from './Routes';

export class App extends React.Component {
  render() {
    return (
      <div className = 'App'>
        <Nav />
        <div className = 'container'>
          <Routes />
          <BookForm />
        </div>
      </div>
    );
  }
}
