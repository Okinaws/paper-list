import classes from './MyAddButton.module.css';

const MyAddButton = ({icon, func}) => {
    return ( 
        <div onClick={func}
            className={classes.MyAddButton}>
            <ion-icon name={icon}></ion-icon>
        </div>
     );
}
 
export default MyAddButton;