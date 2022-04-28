import React, { useEffect, useState } from "react";
import './styles/app.css';
import PostList from './components/PostList';
import Instruments from "./components/Instruments";
import { usePosts } from "./hooks/usePosts";
import Trash from "./UI/Trash/Trash";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PostService from "./API/PostService";
import { useFetching } from "./hooks/useFetching";
import Loader from "./UI/Loader/Loader";
import MyPostModal from "./UI/MyPostModal/MyPostModal";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: "", query: ""});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [postModalActive, setPostModalActive] = useState(false);
  const [postModal, setPostModal] = useState({});
  
  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(10);
    setPosts([...posts, ...response.data]);
  })

  useEffect(() => {
    fetchPosts();
  }, [])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function openPostModal(post) {
    setPostModalActive(true);
    setPostModal(post);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Instruments filter={filter} setFilter={setFilter} create={createPost} posts = {posts}/>
        {postError && <h1>Error: {postError}</h1>}
        {isPostsLoading
          ?
          <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
            <Loader/>
          </div>
          :
          <PostList posts={sortedAndSearchedPosts} remove={removePost} openPostModal={openPostModal}/>
        }
        <MyPostModal active={postModalActive} setActive={setPostModalActive} post = {postModal}/>
        <Trash remove={removePost}/>
      </div>
    </DndProvider>
  );
}

export default App;
