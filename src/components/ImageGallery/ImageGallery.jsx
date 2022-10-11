import React from 'react'
import styles from "./ImageGallery.module.css";
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