import React , { useEffect } from 'react'


export default function Modal({largeImageURL , tags , onHandleModal}) {

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEscape = (evt) => {
    if (evt.code === "Escape") {
      onHandleModal();
    }
  };

  const onModal = () => {
    onHandleModal();
  }


  return (
    <div className="Overlay" onClick={onModal}>
     <div className="Modal">
      <img src={largeImageURL} alt={tags} />
     </div>
    </div>


  )
}
