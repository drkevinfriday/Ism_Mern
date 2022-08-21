import React, { Component } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Category from '../Category';


class SingleCategory extends Component {

   
render () {
    let caategories = Category();
    console.log(caategories);
    return (
    <div>
        <p>{caategories}</p>  
    </div>
)   
}
}

export default SingleCategory;