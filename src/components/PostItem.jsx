import React from "react";
import { useDrag } from "react-dnd";

const PostItem = (props) => {
    let className = "post" + props.number % 2;
    const [{ isDragging }, dragRef] = useDrag({
        type: 'post',
        item: props.post,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    return (
        <div>
            <div id={props.post.id} onClick={() => {props.openPostModal(props.post)}} className={className} ref={dragRef}>
                <div className="postContent">
                    <div className="text">
                        {props.post.id}. {props.post.title}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;