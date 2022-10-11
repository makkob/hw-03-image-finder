import React from 'react'
import styles from "./ImageGallery.module.css";
import PropTypes from "prop-types";
import ImageGalleryItem from './ImageGalleryItem'


export default function ImageGallery({images , onShowModal}) { 
  
  return (
 <>
     
     
   <ul className={styles.ImageGallery}>

     {images.map(({ id,  largeImageURL , tags  }) => (
       <ImageGalleryItem key = {id} 
                         
       largeImageURL = {largeImageURL}
       tags = {tags}
       onImgClick = { () => onShowModal(largeImageURL , tags) }
       />
     
       ))}

     </ul>

     

    </>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onShowModal: PropTypes.func.isRequired,
};