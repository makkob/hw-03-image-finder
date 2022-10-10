
import React , {useState} from 'react'
import styles from "./Searchbar.module.css";


export default function Searchbar({onHandleSubmit , perPageValue , changePerPageValue}) {

  let [inputValue, setInputValue] = useState("");
 
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onHandleSubmit(inputValue);
    setInputValue("");
    
  };
  let handleChange = (evt) => {
     
    setInputValue(evt.target.value);
   
  }
  


  return (


    <header className={styles.Searchbar}>
  <form className={styles.SearchForm}
   onSubmit={handleSubmit}
   >
    <button type="submit" className={styles.SearchForm_button}>
      <span className={styles.SearchForm_button_label}>Search</span>
    </button>

    <input 
      className={styles.SearchForm_input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={inputValue}
      onChange = {handleChange}
    />
  </form>
  <p   className={styles.p} >  Images per page   </p>
    <input  className={styles.PerPageForm} type="number" min="3" max="48" value = {perPageValue  } onChange = {changePerPageValue} />
</header>
  )
}
