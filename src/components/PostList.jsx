import React from "react";
import PostItem from "./PostItem";
import pin from "../images/pushpin.svg";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({posts, remove, openPostModal}) => {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>No posts!</h1>
        )
    }

    return (
        <div className="list">
            <img src={pin} alt="pin" className="pin"/>
            <TransitionGroup>
                {posts.map((post, index) =>
                <CSSTransition
                key={post.id}
                timeout={300}
                classNames="post"
                >
                    <PostItem draggable={false} 
                    number = {index + 1} 
                    post = {post} 
                    length = {posts.length} 
                    remove = {remove}
                    openPostModal = {openPostModal}
                    ></PostItem>
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;