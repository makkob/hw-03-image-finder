import React from 'react'
import styles from "./Button.module.css";

export default function Button({handleClick}) {



  return (
    
   
   
   

   <div className={styles.DivButton}>
     <button onClick={handleClick} className={styles.Button} type ="button"> Load more </button>
   </div> 
    

  )
}
