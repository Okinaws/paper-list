import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
    return ( 
        <svg className={classes.loader}>
            <circle cx="70" cy="70" r="70"></circle>
        </svg>
     );
}
 
export default Loader;