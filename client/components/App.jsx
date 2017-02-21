import React from 'react';
import Example from './Example.jsx';
import Book from './book.js';
import People from './People.js';


export default class App extends React.Component {
  // constructor(props)
  // {
  //     super(props);
  //     this.clickMe = this.clickMe.bind(this);
  // }
    clickMe(msg) {
        console.log('clicked', msg);
    }
    render() {
        let book = { title: 'React in action', author: 'somebody' };
        return (
      <div style={{ textAlign: 'center' }}>
        <h1 onClick={this.clickMe.bind(this, 'hi')}> hello world</h1>
        <div>My first react application</div>
        <Example></Example>
        <Book details={book} people = {<People />}/>
      </div>
        );
    }
}