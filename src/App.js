import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyReads from './components/MyReadsComponent';
import Search from './components/SearchComponent';
import * as BooksAPI from './utils/BooksAPI'


  class App extends Component{
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll()
        .then((books)=>{
          this.setState(() => ({
            books
      }))
    })
  }

  updateBooks = (book,shelf) => {
    BooksAPI.update(book,shelf)
    .then(() => {
      return BooksAPI.getAll()
      })
      .then(res => 
        this.setState({
          books: res
        }))
    }

   render (){
    let id = "none"    
    const clearDropDown = (newID) => {
      if (newID !== "none"){
        id = newID
      }
      else{
        if(id !== "none"){
          const elements = document.getElementsByClassName("book-button-dropdown-content-show")
          for (let element of elements){
            if(element.id !== id){
              element.classList.remove("book-button-dropdown-content-show")
            }
          }
          id = "none" 
        }
        else{
          const elements = document.getElementsByClassName("book-button-dropdown-content-show")
          if(elements.length > 0 ){
            elements[0].classList.remove("book-button-dropdown-content-show")
          }
        }
      }
    }
    return(
      <div>
        <Route exact path='/' 
          render = {() => (
            <MyReads
              books = {this.state.books}
              clearDropDown = {clearDropDown}
              update = {this.updateBooks}
            />
          )}
        />
        <Route path='/search' render={()=> (
          <Search
            books = {this.state.books}
            clearDropDown = {clearDropDown}
            update = {this.updateBooks}
          />
        )}/>
      </div>
    );
  }
}

export default App;
