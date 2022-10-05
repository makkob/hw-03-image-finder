import React from 'react'
import ImageGalleryItem from './ImageGalleryItem'

export default function ImageGallery({images}) { 
  
  return (
 <>
     
     
   <ul className="ImageGallery">

     {images.map(({ id, previewURL , largeImageURL , tags }) => (
       <ImageGalleryItem key = {id} li = {id}
                         previewURL = {previewURL}
                         largeImageURL = {largeImageURL}
                         tags = {tags}
         />
     
       ))}

     </ul>

     

    </>
  )
}