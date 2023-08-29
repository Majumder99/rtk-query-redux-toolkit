import { useState } from "react";
import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./redux/post";

function App() {
  const [deletePost, res] = useDeletePostMutation();
  const [createPost, res1] = useCreatePostMutation();
  const [updatePost, res2] = useUpdatePostMutation();
  console.log("createPost", res1);
  console.log("updatePost", res2);
  const [id, setId] = useState(1);
  const { data, isLoading, isError } = useGetAllPostQuery();
  const { data: SinglePostData } = useGetPostByIdQuery(id);
  console.log(data);
  console.log("lazy data", SinglePostData);
  const handleChange = (e) => {
    setId(e.target.value);
  };
  return (
    <>
      <div className="App">
        <h1>Hello world</h1>
        <input type="number" onChange={handleChange} />
        {/* deletePost function will delete the post */}
        <button onClick={() => deletePost(2)}>Delete</button>
        {/* Create post */}
        <button
          onClick={() => {
            createPost({
              title: "Hello",
              body: "Hello world",
              userId: 100,
            });
          }}>
          Create Post
        </button>
        {/* update post */}
        <button
          onClick={() => {
            updatePost({
              id: 1,
              title: "Hello",
              body: "Hello world",
              userId: 100,
            });
          }}>
          Update Post
        </button>
      </div>
    </>
  );
}

export default App;
