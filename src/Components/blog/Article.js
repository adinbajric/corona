import React from 'react'
import './Article.css';
import {Link} from 'react-router-dom';

function Article({title ,urlToImage, url, publishedAt, description, source}) {
    const author = source.name;   
   
    return (
        <div className='article'>            
           <div className='article__imgContainer'>
                <Link to={{pathname: url}} target='_blank'>
                    <img className='article__img' src={urlToImage} alt='img'></img>
                </Link>          
                <p className='article__source'>{author}</p>
            </div>
            <div className='article__textContainer'>
                <Link to={{pathname: url}} className='link__title' target='_blank'>
                <h4 className='title__small article__title'>{title}</h4>
                </Link>
                <p className='article__content'>{description}</p>
                <p className='article__date'>{new Date(publishedAt).toDateString()}</p>                
            </div>   
        </div>
    )
}

export default Article
