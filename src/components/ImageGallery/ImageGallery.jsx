import React from 'react'
import ImageGalleryItem from './ImageGalleryItem'

export default function ImageGallery({images , onShowModal}) { 
  
  return (
 <>
     
     
   <ul className="ImageGallery">

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