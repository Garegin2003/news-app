import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNews } from "../../slices/newsSlice";
import fetchNews from "../../slices/newsApi";

const NewsList = () => {
    const dispatch = useDispatch()
    const news = useSelector(selectNews)

    useEffect(() => {
        dispatch(fetchNews())
    },[dispatch])

    return (
        <div>
            <h2>News List</h2>
            {
                news.map(article => (
                    <div key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default NewsList