import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL; // Accessing from .env
const API_KEY = process.env.REACT_APP_API_KEY;


export const fetchDataFromApi = async (url, params) => {
    try {
        const data = await axios.get(BASE_URL + url, {
            params: {
                api_key: API_KEY,
                ...params,
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
  };
