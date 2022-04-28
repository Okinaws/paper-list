import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <div className={classes.searchBox}>
            <input ref={ref} {...props} className={classes.MyInput}></input>
        </div> 
     );
});
 
export default MyInput;