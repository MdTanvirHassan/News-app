import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import PropTypes from "prop-types";
import Snipper from "../Snipper/Snipper";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `NewsTime -${this.capitalizeFirstLetter( this.props.category)}`;
  }
  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d202c609e0e4308afa54e2d4c76721f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parseData = await data.json();
    this.props.setProgress(90);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData= async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3d202c609e0e4308afa54e2d4c76721f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
    });
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // handlePreClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  render() {
    return (
      <>
        <h4 className="text-center text-success my-3">
          NewsTime - {this.capitalizeFirstLetter(this.props.category)} Top
          Headlines
        </h4>
        <hr />
        {this.state.loading && <Snipper />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Snipper/>}
        >

          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-1 p-1" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          </InfiniteScroll>
        {/* <div className="d-flex justify-content-between mt-5">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark"
              type="button"
              onClick={this.handlePreClick}>
              &larr; Previous
            </button>
            <button 
              onClick={this.handleNextClick}
              className="btn btn-dark"
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }>
              Next &rarr;
            </button>
          </div> */}
      </>
    );
  }
}

export default News;
