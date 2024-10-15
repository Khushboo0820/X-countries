import React from 'react';
import Styles from './Countries.module.css';

const Countries = ({name,flag,abbr}) => {
    return (
      <div className={Styles.card}>
          <img src={flag} alt={abbr} />
          <h5 className={Styles.text}>{name}</h5>
      </div>
    )
  }
  
  export default Countries;