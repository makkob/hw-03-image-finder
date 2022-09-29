import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import './App.module.css';

export default function App() {
    const [articles, setArticles] = useState([]);
    let [error, setError] = useState(null);
    let [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        axios
            .get(
                'https://pixabay.com/api/?q=cat&page=1&key=28517920-47e926602853ad98d512bf5fa&image_type=photo&orientation=horizontal&per_page=12',
            )
            .then(({ data }) => setArticles(data.hits))
            .catch(error => {
                return setError(error);
            })
            .finally(() => setLoader(false));
    }, []);

    return (
        <>
            <Searchbar />
            <ul>
                {articles.map(({ id, previewURL }) => (
                    <li key={id}>
                        <img src={previewURL} />
                    </li>
                ))}
            </ul>

            <ImageGallery />
            <Loader />
            <Button />
            <Modal />
        </>
    );
}
