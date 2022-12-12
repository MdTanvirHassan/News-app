import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor(){
        super();
        console.log('news item')
        
    }
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div>
        <div className="card" style={{width: "20rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height: "150px"}}/>
            <div className="card-body"style={{height: "300px"}}>
                <h6 className="card-title" style={{height: "100px"}}>{title}</h6>
                <p className="card-text" style={{height: "100px", overflow:"hidden"}}>{description}</p>
                <a href={newsUrl} target="blank" className="btn btn-sm btn-outline-primary"> Read more...</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem