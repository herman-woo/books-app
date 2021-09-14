import React, { Component } from 'react';
import Book from './BookComponent';
import { Link } from "react-router-dom";
import '../styles/Search.css';

class Search extends Component {
  state = {
    search: ''
  }  
  updateQuery = (search) => {
    this.setState(() => ({search: search}))
  }

  clearSearch = () => {
    this.updateQuery('')
  }

  render(){
    const { search } = this.state
    const { books,update,clearDropDown } = this.props
    const results = search === ''
    ? ''
    : books.filter((book) => (
      book.title.toLowerCase().includes(search.toLowerCase())
    ))

      return(
      <div className='search' onClick={() => clearDropDown("none")}>
        <div className='search-header'>
          <input
            className='search-books-input'
            type='text'
            placeholder='Search Books'
            value={search}
            onChange={(event)=> this.updateQuery(event.target.value)}
          ></input>
          <div className='search-results-title'>           
            {search === ''
            ? <h1>Search the Library</h1>
            : <h2>{`${results.length} search ${results.length === 1
              ? 'result'
              : 'results'} for '${search}'`}</h2>}
            {search!== '' &&(
              <button className='clear button'
              onClick={this.clearSearch}>
                Clear Search
              </button>
            )}      
            </div>
        </div>

        
        <div className='search-results'>          
          <ol className='books-list'>
            {results !== '' && (
              results.map((book)=>(
                <Book 
                book={book}
                clear={clearDropDown}
                update={update}
                shelf={book.shelf}
                key={book.id}
            />    )))
            }
          </ol>
        </div>


        <div className='search-footer'>
          <Link
            to='/'
          >
            <button className='back button'></button>
          </Link>
          <h2>Return</h2>
        </div>
      </div>
      );
    }
  }

  export default Search