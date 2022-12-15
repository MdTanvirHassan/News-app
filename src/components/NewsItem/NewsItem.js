import React, { Component } from 'react'
import './NewsItem.css'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div>
        <div className="card" style={{width: "22rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height: "175px"}}/>
            <div className="card-body"style={{height: "280px"}}>
                <h6 className="card-title" style={{height: "80px"}}>{title}</h6>
                <p className="card-text" style={{height: "100px", overflow:"hidden"}}>{description}</p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn-outline-primary"> Read more &rarr;</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem