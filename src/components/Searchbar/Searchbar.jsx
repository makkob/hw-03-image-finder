
import React , {useState} from 'react'

export default function Searchbar({onHandleSubmit}) {

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


    <header className="Searchbar">
  <form className="SearchForm"
   onSubmit={handleSubmit}
   >
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input 
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={inputValue}
      onChange = {handleChange}
    />
  </form>
</header>
  )
}
