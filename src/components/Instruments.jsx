import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";
import MyAddButton from "../UI/MyAddButton/MyAddButton";


const Instruments = (props) => {
    const [post, setPost] = useState({title: ""});

    function addNewPost(e) {
        if (post.title === "") {
          return;
        }
        e.preventDefault();
        const newPost = {
            ...post,
            id: props.posts[props.posts.length - 1].id + 1
        };
        props.create(newPost);
        setPost({title: ""});
        props.setFilter({...props.filter, query: ""});
    }

    return ( 
        <div className="instruments">
            <MySelect 
                value={props.filter.sort}
                onChange={selectedSort => props.setFilter({...props.filter, sort: selectedSort})}
                defaultValue={"Sort"} 
                options={[
                    {value: 'id', name: "By index"},
                    {value: 'title', name: "By title"},
                    ]}
            />
            <MyInput
                type="text"
                placeholder="Type here..."
                value={post.title}
                onChange={e => {
                    setPost({...post, title: e.target.value});
                    props.setFilter({...props.filter, query: e.target.value});
                }}
            />
            <MyAddButton icon={"add-outline"} func={addNewPost}/>
        </div>
     );
}
 
export default Instruments;