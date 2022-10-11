import React from 'react'
import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";


export default function ImageGalleryItem({   largeImageURL , tags , onImgClick}) {
  return (
    

     <li className={styles.ImageGalleryItem}  onClick={onImgClick}>
       <img src={largeImageURL} alt={tags}  className={styles.ImageGalleryItem_image} />
     </li>

  )
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};