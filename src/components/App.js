import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import './App.module.css';

export default function App() {
    return (
        <>
            <Searchbar />
            <ImageGallery />
            <Loader />
            <Button />
            <Modal />
        </>
    );
}
