import React, { Component } from 'react';
import Shelf from './ShelfComponent';

class BookShelf extends Component{
 render(){
     const { books, clear, update } = this.props
     return(
    <div className='log-list'>
        <Shelf
            books={books}
            clear = {clear}
            update = {update}
            title='Currently Reading'
            shelf='currentlyReading'
            />
        <Shelf
            books={books}
            clear = {clear}
            update = {update}
            title='Want to Read'
            shelf='wantToRead'
        />
        <Shelf
            books={books}
            clear = {clear}
            update = {update}
            title='Read'
            shelf='read'
            />
    </div>
    );
    }    
}

export default BookShelf