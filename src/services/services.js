import axios from 'axios';
// import { API_KEY } from '../Token/token.json';
// console.log(API_KEY);
const API_KEY = '28517920-47e926602853ad98d512bf5fa';

function fetchImagesWithQuery(query, page, perPage) {
    return axios(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    ).then(response => response.data.hits);
}

export default fetchImagesWithQuery;
