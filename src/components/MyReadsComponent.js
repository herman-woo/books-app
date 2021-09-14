import React, { Component } from 'react';
import BookShelf from './BookshelfComponent';
import '../styles/MyReads.css'
import { Link } from 'react-router-dom'

class MyReads extends Component {

  render(){

      const { books, clearDropDown, update } = this.props
      return(
        <div className='app-body' onClick={() => clearDropDown("none")}>
          <div className='app-header' >
            <div className='app-title'>
              <h1>My Reads</h1>
              <p>1.00</p>
            </div>
            <div className='app-dashboard'>
              <Link
                to='/search'>
                  <button className='magnifying-glass button'>
                    Search Games
                  </button>
              </Link>
            </div>
          </div>
          <BookShelf 
              books = {books}
              clear = {clearDropDown} 
              update = {update}  
          />
        </div>
      );
    }
  }

export default MyReads