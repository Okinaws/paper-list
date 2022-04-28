import React, {useState} from 'react';
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyAddButton/MyButton';
import plus from "../images/plus.svg";
import sort from "../images/sort.svg"

const PostInput = ({create, index}) => {
    const [post, setPost] = useState({body: ""});

    function addNewPost(e) {
        if (post.body === "") {
          return;
        }
        e.preventDefault();
        const newPost = {
            ...post,
            id: index
        };
        create(newPost);
        setPost({body: ""});
    }

    return ( 
      <form className="inputForm">
        <MyInput
          type="text"
          placeholder="Type here..."
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          />
        <MyButton image={plus} func={addNewPost}/>
      </form>
     );
}
 
export default PostInput;