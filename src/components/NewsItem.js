import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!props.imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1492680652.jpg?c=16x9&q=w_800,c_fill":props.imageUrl} className="imgcard" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
          {props.description}
          </p>
          <a rel='noreferrer' href={props.newsUrl} target='_blank' className="btn btn-dark">
          Read More
          </a>
        </div>
      </div>
    </div>
  )
}
   