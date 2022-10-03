import React, { useState, useEffect } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import fetchImagesWithQuery from '../services/services';
import './App.module.css';

export default function App() {
    const [images, setImages] = useState([]);
    let [error, setError] = useState(null);
    let [loader, setLoader] = useState(false);
    let [searchQuery, setSearchQuery] = useState('popular');
    let [page, setPage] = useState(1);
    let [perPage, setPerPage] = useState(12);

    useEffect(() => {
        fetchImages();
        console.log('searchQuery ue =', searchQuery);
        console.log(page);
        console.log(perPage);
    }, [searchQuery]);

    let onLoadMore = () => {
        setPage((page += 1));

        fetchImages();
    };

    let fetchImages = () => {
        setLoader(true);
        fetchImagesWithQuery(searchQuery, page, perPage)
            .then(items => setImages([...images, ...items]))

            .catch(error => {
                return setError(error);
            })
            .finally(() => setLoader(false));
    };

    let onHandleSubmit = inputValue => {
        setSearchQuery(inputValue);
        setPage(1);
        setImages([]);
    };

    return (
        <>
            <Searchbar onHandleSubmit={onHandleSubmit} />

            {loader && <Loader />}
            {loader || <ImageGallery images={images} />}
            {loader || <Button handleClick={onLoadMore} />}
            {loader || <Modal />}
        </>
    );
}
