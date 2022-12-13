import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }  
    }
    async componentDidMount(){
        let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=3d202c609e0e4308afa54e2d4c76721f&page=1&pageSize=18';
        let data = await fetch(url)
        let parseData =await data.json();
        this.setState({articles: parseData.articles, totalResults: parseData.totalResults});
    }
    handlePreClick= async ()=> {
      console.log("Pre-click");
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3d202c609e0e4308afa54e2d4c76721f&page=${this.state.page-1}&pageSize=18`;
        let data = await fetch(url)
        let parseData =await data.json();
        this.setState({
          page: this.state.page - 1,
          articles: parseData.articles});
      }
    

    handleNextClick= async ()=> {
      console.log("Next-click")
      this.next= this.state.totalResults/18
      if(this.state.totalResults/18){
        let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=3d202c609e0e4308afa54e2d4c76721f&page=${this.state.page+1}&pageSize=18`;
        let data = await fetch(url)
        let parseData =await data.json();
        this.setState({
          page: this.state.page+1,
          articles: parseData.articles});
      }
    }

  render() {
    return (
      <div className='container my-3'>
        <h5>NewsTime - Top Headlines</h5><hr />
        <div className="row">
            {this.state.articles.map((element) =>{
                return (
                    <div className="col-md-4 my-1 p-1" key={element.url}>
                        <NewsItem title={element.title} description={element.description}
                         imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                )
             })
            }     
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button disabled={this.state.page<=1} className='btn btn-dark' type='button' onClick={this.handlePreClick}>&larr; Previous</button>
          <button disabled={this.state.page===this.next+1 }className='btn btn-dark' type='button' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News