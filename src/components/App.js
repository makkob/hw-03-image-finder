import React, { useState, useEffect } from 'react';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

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
    let [searchQuery, setSearchQuery] = useState('');
    let [page, setPage] = useState(1);
    let [perPage, setPerPage] = useState(12);
    let [modalImgURL, setModalImgUrl] = useState('');
    let [modalTag, detModalImgTag] = useState('');
    let [modalState, setModalState] = useState(false);

    useEffect(() => {
        fetchImages();

        const items = localStorage.getItem('perPage');
        if (items) {
            setPerPage(JSON.parse(items));
        }
    }, [searchQuery]);

    let onLoadMore = () => {
        setPage((page += 1));

        fetchImages();

        setTimeout(() => {
            scroll();
        }, 100);
    };

    let scroll = () => {
        setLoader(false);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    let showError = () => {
        alert({
            title: 'Error',
            text: `There's some error: ${error}`,
            type: 'notice',
            delay: 1500,
        });

        console.error(error);
        setError('');
    };

    let fetchImages = () => {
        setLoader(true);
        fetchImagesWithQuery(searchQuery, page, perPage)
            .then(items => setImages([...images, ...items]))

            .catch(error => {
                setError(error.message);
                showError(error);
            })
            .finally(() => scroll());
    };

    let onHandleSubmit = inputValue => {
        setSearchQuery(inputValue);
        setPage(1);
        setImages([]);
    };
    let handleModal = () => {
        setModalState(false);
    };
    let showModal = (modalImgURL, modalTag) => {
        setModalState(true);
        setModalImgUrl(modalImgURL);
        detModalImgTag(modalTag);
    };

    let changePerPage = evt => {
        if (perPage !== evt.target.value) {
            setPerPage(evt.target.value);

            localStorage.setItem('perPage', JSON.stringify(perPage));
        }
        console.log('evt.target.value', evt.target.value);

        console.log('perPage', perPage);
    };
    return (
        <>
            <Searchbar
                onHandleSubmit={onHandleSubmit}
                changePerPageValue={changePerPage}
                perPageValue={perPage}
            />

            {loader && <Loader />}
            {loader || <ImageGallery images={images} onShowModal={showModal} />}
            {modalState && (
                <Modal
                    largeImageURL={modalImgURL}
                    tags={modalTag}
                    onHandleModal={handleModal}
                />
            )}
            {loader || (images && <Button handleClick={onLoadMore} />)}
        </>
    );
}
