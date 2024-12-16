// import {useEffect, useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { fetchNewsActionHome } from '../store/actions/fetchNewsHome-action'
import { useEffect } from 'react';
import { savedAction } from '../store/actions/saved-action';
import { removeAction } from '../store/actions/remove-action';

export default function Rumah() {
    const fetchNews = useSelector(state => state.news.dataNews);
    const fetchNewsLoading = useSelector(state => state.news.isLoading);
    const show = useSelector(state => state.saved.store)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsActionHome())
    },[])
    
    
    return (
        <div className="container-fluid">
            <p>Status : {fetchNewsLoading ? "Loading..." : "Done"}</p>
            {
                fetchNewsLoading ? 
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className='row row-cols-auto justify-content-center gap-4 p-4 border rounded-4'>
                    {fetchNews.map((article, index) => {
                        const isSaved = show.find(
                            (product) => product._id === article._id
                        );


                        return (<div key={index} className='card col p-3 text-start rounded-4 shadow' style={{width: `20rem`}}>
                            <p>{article.source}</p>
                            <h4 className="text-capitalize fw-bold">{article.headline.main}</h4>
                            <div className='card-body p-0 mt-3'>
                                <p className='fw-medium fs-6'>Byline: {article.byline.original}</p>
                                <p className="h-20">{article.abstract}</p>
                            </div>
                            <div>
                                <button className="btn btn-primary me-2" onClick={() => window.open(article.web_url, '_blank')}>Read More</button>
                                <button className={`btn ${isSaved ? "btn-danger" : "btn-success"}`} onClick={
                                    () => {dispatch(isSaved ? removeAction(article) : savedAction(article))}}
                                
                                >{isSaved ? "Remove" : "Save"}</button>
                            </div>
                        </div>)
                    })}
                </div>
            }
        </div>
    )
}


