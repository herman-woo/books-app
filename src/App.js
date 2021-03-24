//Libraries
import React, { Component } from 'react';

//Style Pages
import './App.css';

//Scripts
import * as BooksAPI from './utils/BooksAPI'
import Shelf from './Shelf.js';


class App extends Component{
  state = {
    books: [],
    display: 'log'
  }
  componentDidMount(){
    BooksAPI.getAll()
        .then((books)=>{
          this.setState(() => ({
            books
          }))
          console.log(books)
        })
  } 
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
          My Reads App v0.10
        </p>
      </header>
      <body className="App-body">
        <div>
          <div>
            <Shelf 
              name="Reading"
              books = {this.state.books}/>
            <Shelf 
              name="Waitlist"
              books = {this.state.books}/>
            <Shelf 
              name="Completed"
              books = {this.state.books}/>
          </div>
          <div>

          </div>
        </div>

      </body>
    </div>
  )}
}

export default App
