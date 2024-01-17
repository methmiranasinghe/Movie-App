import { movieapikey } from "./apikey";
import axios from 'axios';

//Endpoints
const apiBaseUrl = "https://api.themoviedb.org/";
const trendingMovieEndpoint= `${apiBaseUrl}/trending/movie/day?apikey=${movieapikey}`

const movieApiCall = async() =>{
    const options = {
      method: "GET",
      url: endpoints,
      params: params ? params : {},
    };
        try{
            const respone = await axios.request(options);
            return respone.data;
        }catch(error){
            console.log(error);
            return {};


        }
   
};

export const fetchTrendingMovie = () =>{
    return movieApiCall(trendingMovieEndpoint);
}