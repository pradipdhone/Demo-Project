import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from 'axios'
import Spinner from "./Spinner";

export default function News() {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(17)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=129e5b25285646428c9e7d85ae0a7415&page=${page}&pageSize=${pageSize}`;
                const { data } = await axios.get(url);
                console.log("parsedData", data);
                setArticles(data.articles);
                setTotalResults(data.totalResults);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    const handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=129e5b25285646428c9e7d85ae0a7415&page=${page-1}&pageSize=${pageSize}`
        setLoading(true)
        const { data } = await axios.get(url);
                console.log("parsedData", data);
                setArticles(data.articles);
                setTotalResults(data.totalResults);
        setPage(page-1)
        setLoading(false)
    }

    const handleNextClick = async () => {
        if(!(page+1 > Math.ceil(totalResults/pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=129e5b25285646428c9e7d85ae0a7415&page=${page+1}&pageSize=${pageSize}`
            setLoading(true)
            const { data } = await axios.get(url);
                console.log("parsedData", data);
                setArticles(data.articles);
                setTotalResults(data.totalResults);
            setPage(page+1)
            setLoading(false)
        }
    }

  return (
    <div className="container my-3">
        <h1 className="text-center">News - Top Headlines</h1>
        {loading && <Spinner/>}
        <div className="row">
            {!loading && articles.map((element) => {
                return <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title? element.title.slice(0, 20) : ""} description={element.description?element.description.slice(0, 40):"US President Donald Trump threatened to"} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
            <button disabled={page+1 > Math.ceil(totalResults/pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}> Next &rarr;</button>
        </div>
    </div>
  );
}
