import React , { useEffect } from 'react'
import styles from "./Modal.module.css";
import PropTypes from "prop-types";


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
    <div className={styles.Overlay} onClick={onModal}>
     <div className={styles.Modal}>
      <img src={largeImageURL} alt={tags} />
     </div>
    </div>


  )
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onHandleModal: PropTypes.func.isRequired,
};