import React from 'react';
import  { useState, useEffect } from 'react';
import AllArticles from './AllArticles.jsx';
import '@sass/content/home/home.scss';

function ShowArticles({articles}) {
    console.log(articles);
    return (
        <div className='ListCard'>  {  
        
        articles.map((article, index)=>(
            <AllArticles key={article.id}  image={article.social_image}  title={article.title}  description={article.description}  lien={article.url}  tags={article.tag_list}  datepublication={article.readable_publish_date} />
        ))}
        </div>
    );
}

export default ShowArticles;