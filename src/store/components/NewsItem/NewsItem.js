import React from "react";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../slices/favoritesSlice";

const NewsItem = ({newsItem}) => {
    const dispatch = useDispatch()

    const handleAddToFavorites = () => {
        dispatch(addToFavorites(newsItem))
    }

    return (
        <div>
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <p>Published on: {newsItem.date}</p>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
    )
}

export default NewsItem