import React, { Component } from 'react'
import Book from './BookComponent'
import '../styles/Shelf.css'

class Shelf extends Component{
render(){
    const { books, clear, title, shelf , update } = this.props
    const selectedBooks = books.filter(book => book.shelf === shelf)
    return(
        <div className="shelf">
            <h2 className='shelf-title'>{title}</h2>
            <div className='shelf-body'>
                <ol className='books-list'>
                {selectedBooks.map((book) =>
                        <Book 
                            book={book}
                            clear={clear}
                            update = {update}
                            shelf = {book.shelf}
                            key={book.id}
                        />                             
                )}
                </ol>
            </div>
        </div>
    )
    }
}
export default Shelf
