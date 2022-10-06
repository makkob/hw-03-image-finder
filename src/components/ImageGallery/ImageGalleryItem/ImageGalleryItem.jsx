import React from 'react'


export default function ImageGalleryItem({ id, previewURL , largeImageURL , tags , onImgClick}) {
  return (
    

     <li className="ImageGalleryItem"  onClick={onImgClick}>
       <img src={largeImageURL} alt={tags} id = {id} className="ImageGalleryItem-image" />
     </li>

  )
}
