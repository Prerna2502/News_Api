import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className='card'>
            {
                props.news.urlToImage != null?
                <img className='card-img-top' src={props.news.urlToImage} alt='No img availabe for this article' onerror="this.style.display='none'"/>
                : null
            }
            {/* <img className='card-img-top' src={props.news.urlToImage} alt='No img availabe for this article' onerror="this.style.display='none'"/> */}
            <div className='card-body'>
                {
                    props.news.title != null?
                    <div className='card-text'><h4>{props.news.title}</h4></div>
                    :null
                }
                {/* <div className='card-text'><h2>{props.news.title}</h2></div> */}
                {
                    props.news.author != null?
                    <div className='card-title font-weight-bold'>Author:{props.news.author} </div>
                    :null
                }
                {/* <div className='card-title font-weight-bold'>Author:{props.news.author}</div> */}
                {
                    props.news.publishedAt != null?
                    <div className='card-text'><b>  Published At: </b>{props.news.publishedAt}</div>
                    :null
                }
                {/* <div className='card-text'><b>Published At:</b>{props.news.publishedAt}</div> */}
                {
                    props.news.content != null?
                    <div className='card-text'>{props.news.content}</div>
                    :null
                }
                <br/>
                {/* <div className='card-text'>{props.news.content}</div><br/> */}
                {
                    props.news.description != null?
                    <div className='card-text'>{props.news.description}</div>
                    :null
                }
                <br/>
                {/* <div className='card-text'><b>Description:</b>{props.news.description}</div><br/> */}
                
                {
                    props.news.source.id != null?
                    <div className='card-text'><b>Source </b>{props.news.source.id}   </div>
                    :null
                }
                {/* <div className='card-text'><b>Source Id:</b>{props.news.source.id}</div> */}
                {
                    props.news.source.name != null?
                    <div className='card-text'><b>Source Name</b>{props.news.source.name}</div>
                    :null
                }
                {/* <div className='card-text'><b>Source Name:</b>{props.news.source.name}</div> */}
                {
                    props.news.url != null?
                    <button className='btn btn-success d-block m-auto'><a href={props.news.url} target="_blank">Read more</a></button>
                    :null
                }
                {/* <button className='btn btn-success d-block m-auto'><a href={props.news.url} target="_blank">Read more</a></button> */}
            </div>
        </div>
    )
}
