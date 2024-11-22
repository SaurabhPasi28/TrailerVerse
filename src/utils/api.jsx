import axios from "axios";
import { API_KEY} from "../config";
const BASE_URL = "https://api.themoviedb.org/3"

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


