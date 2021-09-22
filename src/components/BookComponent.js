import React, { Component } from 'react'
import '../styles/Book.css'


class Book extends Component{
    showDropdown(id,clear){
        const elementID = id
        document.getElementById(elementID).classList.toggle("book-button-dropdown-content-show")
        clear(id)
    }
    updateBook(book,updateFunc,shelf){
        updateFunc(book,shelf)
    }

    render(){
        const { book, clear, update,shelf} = this.props
        return(
            <li className="book"
                draggable="true"
                >
                <div className="book-image" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                <div className="book-info">
                    <h3>{book.title}</h3>
                    <div className="book-info-bottom">
                        <div className="book-authors">{book.authors && book.authors.map((author) => {
                            return author
                        }
                        )}</div>
                        <div className="book-button">
                            <div className="book-button-dropdown" >
                                <button onClick={() => this.showDropdown(book.id+"-dropdown",clear)}></button>
                                <div className="book-button-dropdown-content" id={book.id+"-dropdown"}>
                                    {shelf === "currentlyReading" 
                                        ? <p className="book-button-item highlight" onClick={() => this.updateBook(book,update,"currentlyReading")}>Currently Reading</p>
                                        : <p className="book-button-item" onClick={() => this.updateBook(book,update,"currentlyReading")}>Currently Reading</p>}
                                    {shelf === "wantToRead" 
                                        ? <p className="book-button-item highlight" onClick={() => this.updateBook(book,update,"watToRead")}>Want to Read</p>
                                        : <p className="book-button-item" onClick={() => this.updateBook(book,update,"wantToRead")}>Want to Read</p>}
                                    {shelf === "read" 
                                        ? <p className="book-button-item highlight" onClick={() => this.updateBook(book,update,"read")}>Read</p>
                                        : <p className="book-button-item" onClick={() => this.updateBook(book,update,"read")}>Read</p>}
                                </div>                               
                            </div>
                        </div>
                   
                    </div>

                </div>
            </li>
        )
    }
}
export default Book
