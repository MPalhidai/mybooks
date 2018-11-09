import React from 'react';
import '../css/BookForm.css';

const categories = ['Action','Biography','History','Horror','Kids','Learning','Sci-Fi'];

export class BookForm extends React.Component {
  render() {
    return (
      <form className = 'BookForm'>
        <input type = 'text' name = 'title'/>
        <select name = 'categories'>
          { categories.map( category => (
            <option value = {category}>{category}</option>
          ))}
        </select>
        <button type = 'submit'>Add Book</button>
      </form>
    );
  }
}
