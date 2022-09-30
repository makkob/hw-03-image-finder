import React from 'react'


export default function ImageGalleryItem({ id, previewURL , largeImageURL , tags}) {
  return (
    

     <li className="ImageGalleryItem">
       <img src={largeImageURL} alt={tags} id = {id} className="ImageGalleryItem-image" />
     </li>

  )
}
