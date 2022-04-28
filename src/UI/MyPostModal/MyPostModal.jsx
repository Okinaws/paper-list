import classes from "./MyPostModal.module.css";

const MyPostModal = ({active, setActive, post}) => {
    return ( 
        <div className={active ? classes.MyPostModalActive : classes.MyPostModal} onClick={() => setActive(false)}>
            <div className={classes.MyPostModalContent} onClick={e => e.stopPropagation()}>
                <div className="text">
                    {post.id}. {post.title}
                </div>
            </div>
        </div>
     );
}
 
export default MyPostModal;