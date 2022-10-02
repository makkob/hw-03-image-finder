import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import fetchImagesWithQuery from '../services/services';
import './App.module.css';

export default function App() {
    const [items, setItems] = useState([]);
    let [error, setError] = useState(null);
    let [loader, setLoader] = useState(false);
    let [searchQuery, setSearchQuery] = useState('');
    let [page, setPage] = useState(1);

    useEffect(() => {
        fetchImages();
        console.log('searchQuery ue =', searchQuery);
    }, [searchQuery]);

    let fetchImages = () => {
        setLoader(true);

        fetchImagesWithQuery(searchQuery, page)
            .then(items => setItems(items))
            .catch(error => {
                return setError(error);
            })
            .finally(() => setLoader(false));
    };

    let onHandleSubmit = inputValue => {
        setSearchQuery(inputValue);
        // fetchImages();
        // console.log('inputValue=', inputValue);
        // console.log('searchQuery =', searchQuery);
    };

    return (
        <>
            <Searchbar onHandleSubmit={onHandleSubmit} />
            <Loader />
            <ImageGallery items={items} />
            <Button />
            <Modal />
        </>
    );
}
