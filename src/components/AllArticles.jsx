import React from 'react';
import  { useState, useEffect } from 'react';
import Home from './Home.jsx';

function AllArticles({id , image , title , description , lien , tags , datepublication}) {
    return(
        
        <a href={lien} className='Card'>
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p className='tags'>{tags}</p>
            <p className='datepublication'>{datepublication}</p>
    
        </a>
        
    
    )
};

    export default AllArticles;