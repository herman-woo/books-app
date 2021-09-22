import React, { Component } from 'react';
import Book from './BookComponent';
import { Link } from "react-router-dom";
import '../styles/Search.css';
import * as BooksAPI from '../utils/BooksAPI'
class Search extends Component {
  state = {
    search: '',
    results: [],
    query: ''
  }  
  async submitSearch(){
    const res = await BooksAPI.search(this.state.search)
    this.setState({
      results: res,
      query: this.state.search
    })
  }
  render(){
    const { search,results,query } = this.state
    const { update,clearDropDown } = this.props
    const updateQuery = async (search) => {
      this.setState(() => ({
        search: search,
      }))
    }
    const clearSearch = () => {
      this.setState({
        search: '',
        results: [],
        query: ''
      })
    }
      return(
      <div className='search' onClick={() => clearDropDown("none")}>
        <div className='search-header'>
          <div className='search-bar'>
             <input
              className='search-books-input'
              type='text'
              placeholder='Search Books'
              value={search}
              onChange={(event)=> updateQuery(event.target.value)}>
            </input>
            <div className="search-button-holder">
              <button className="search-button" onClick={() => this.submitSearch()}>Enter Search</button>              
            </div>
          </div>
          <div className='search-results-title'>           
            {query === ''
                ? <h1>Search the Library</h1>
                : <h2>{results.length === undefined ? 
                  `No results for ${query}` : 
                  results.length === 1 ?
                  `1 result for '${query}'` :
                  `${results.length} results for '${query}'`
                  }</h2>}
            {query!== '' &&(
              <button className='clear button'
                  onClick={() => clearSearch()}>
                    Clear Search
              </button>
            )}      
          </div>

        </div>
        <div className='search-results'>          
          <ol className='books-list'>
            {results.length !== undefined && (
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


  /*

 

    
  */