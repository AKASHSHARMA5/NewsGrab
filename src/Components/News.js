/*
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultsProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capatalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props) {
        super(props);
        console.log("hello i am a constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }

        document.title = `${this.capatalize(this.props.category)} -NewsGrab`;
    }

    async componentDidMount() {
        
        //this.setState({loading:true})
        //let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92234a65c8314d8cbdae4ca1dc0f27f0&page=1&pageSize=${this.props.pageSize}`
        //let p = await fetch(URL)
        //let data = await p.json();
        //this.setState({ 
        //    articles: data.articles ,
        //    totalResults:data.totalResults,
        //    loading:false
        //}) 
        this.updatenews()
    }
    async updatenews() {
        this.props.setProgress(10)
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let p = await fetch(URL)
        this.props.setProgress(30)
        let data = await p.json();
        this.props.setProgress(70)
        this.setState({ loading: false })
        this.setState({
            //page:this.state.page+1,
            articles: data.articles,
            totalResults: data.totalResults

        })
        this.props.setProgress(100)
    }
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        // this.setState({loading:true})
        let p = await fetch(URL)
        let data = await p.json();
        this.setState({
            //page:this.state.page+1,
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults

        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsGrab- Top {this.capatalize(this.props.category)} headlines</h1>
                {this.state.loading && < Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h4><Spinner /></h4>}
                >
                    <div className='container'>


                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={!element.url ? "URL not available" : element.url}>
                                    <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div >

                </InfiniteScroll>
            </div>
                  
        )
    }
}

export default News
*/
//we can change our News which is a class based component into a function based component because function based component is easier than class based component

import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const capatalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    document.title = `${capatalize(props.category)} -NewsGrab`;
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const updatenews = async () => {
        props.setProgress(10)
        let URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`
        setloading(true)
        let p = await fetch(URL)
        props.setProgress(30)
        let data = await p.json();
        props.setProgress(70)
        setloading(false)
        setarticles(data.articles)
        settotalResults(data.totalResults)
        props.setProgress(100)
    }

    useEffect(() => {
        updatenews()
    }, [])

    const fetchMoreData = async () => {
        let URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`
        setpage(page + 1)
        let p = await fetch(URL)
        let data = await p.json();
        setarticles(articles.concat(data.articles))
        settotalResults(data.totalResults)
    }

    return (
        <div className='container my-3'>
            <h1 className='text-center' style={{marginTop:"85px"}}>NewsGrab- Top {capatalize(props.category)} headlines</h1>
            {loading && < Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4><Spinner /></h4>}
            >
                <div className='container'>


                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={!element.url ? "URL not available" : element.url}>
                                <Newsitem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div >

            </InfiniteScroll>
        </div>
                  
    )
}


export default News
News.defaultsProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}