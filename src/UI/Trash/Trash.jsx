import { useDrop } from "react-dnd";
import classes from "./Trash.module.css";

const Trash = ({remove}) => {
    const [trash, trashBefore] = [document.getElementById("trash"), document.getElementById("trash_before")];
    const [{ isOver }, dropRef] = useDrop({
        accept: 'post',
        drop: (item) => {remove(item)},
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    function setTrashHover () {
        trash.style.transition = "0.5s";
        trash.style.transform = "scale(1.3) rotate(-60deg) translateY(-12px)";
        trashBefore.style.transform = "rotate(90deg) translateY(-40px)";
    }
    
    function putTrashHover () {
        if (trash === null) {
            return;
        }
        trash.style.transition = "0.5s";
        trash.style.transform = "";
        trashBefore.style.transform = "";
    }


    return (
        <div>
            <div className={classes.trash} ref={dropRef} id="trash" title="Trash">
                <div className={classes.before} id="trash_before"></div>    
            </div>
            {isOver
                ?
                setTrashHover()
                :
                putTrashHover()
                }
        </div>
    );
}
 
export default Trash;