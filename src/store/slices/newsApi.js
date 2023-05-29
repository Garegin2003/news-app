import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-04-29&sortBy=publishedAt&apiKey=93c4d5e5be8a41d699545f46060ad721')
        return response.data.articles
    }
    catch(error) {
        throw new Error('Error fetching news' + error)
    }
})

export default fetchNews