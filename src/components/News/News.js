import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log('news item') 
        this.state = {
            articles: [],
            loading: false
        }  
    }
    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3d202c609e0e4308afa54e2d4c76721f';
        let data = await fetch(url)
        let parseData =await data.json();
        this.setState({articles: parseData.articles});
    }
  render() {
    return (
      <div className='container my-3'>
        <h5>NewsTime - Top Headlines</h5><hr />
        <div className="row">
            {this.state.articles.map((element) =>{
                return (
                    <div className="col-md-4 my-1 p-1" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                )
            })
            }
            
        </div>
      </div>
    )
  }
}

export default News