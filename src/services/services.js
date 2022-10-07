import axios from 'axios';
import token from '../Token/token.json';
// console.log(API_KEY);
// const token = '28517920-47e926602853ad98d512bf5fa';

function fetchImagesWithQuery(query, page, perPage) {
    return axios(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${token.API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    ).then(response => response.data.hits);
}

export default fetchImagesWithQuery;
