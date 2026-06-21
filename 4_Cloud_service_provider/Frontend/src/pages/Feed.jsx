import { useEffect, useState } from "react";
import axios from "axios"

const Feed = () => {
  const [posts, setposts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1780789595436-43ff7aec7e41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      caption: "My First Post",
    },
  ]);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts").then((res)=>{
      setposts(res.data.posts)
    })
    
  },[])
  return (
    <section className="Feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No Post Available</h1>
      )}
    </section>
  );
};

export default Feed;
