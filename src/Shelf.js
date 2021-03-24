import React, { Component } from 'react';

class Shelf extends Component{

    render(){
        const { name, books } = this.props
        return(
            <div className='shelf'>
                <div className='shelf-title'>
                    <h1>{name}</h1>
                </div>
                <div classname='shelf-body'>
                </div>
                
            </div>
        )
    }


}



export default Shelf