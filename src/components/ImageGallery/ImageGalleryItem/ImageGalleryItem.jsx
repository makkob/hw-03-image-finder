import React from 'react'


export default function ImageGalleryItem({   largeImageURL , tags , onImgClick}) {
  return (
    

     <li className="ImageGalleryItem"  onClick={onImgClick}>
       <img src={largeImageURL} alt={tags}  className="ImageGalleryItem-image" />
     </li>

  )
}
