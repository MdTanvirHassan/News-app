import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props
    return (
      <div>
        <div className="card" style={{width: "23rem"}}>
        <span className="position-absolute top-10   badge rounded-pill bg-danger"
           style={{zIndex:'1', right:"0%", top:'1%'}}>
        {source}
        </span>
            <img src={imageUrl} className="card-img-top" alt="...." style={{height: "175px"}}/>
            <div className="card-body"style={{height: "300px"}}>
                <h6 className="card-title text-primary"  style={{height: "60px", overflow:'hidden'}}>{title}</h6>

                <p className="card-text" style={{height: "100px", overflow:"hidden"}}>
                  {!description?'...':description}
                </p>
                <p className="card-text" style={{height: "35px", overflow:'hidden'}}>
                  <small className="text-muted">
                    By {!author?'unknown':author} on {new Date(date).toGMTString()}.
                    </small>
                </p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn-outline-primary"> 
                Read more &rarr;
                </a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem