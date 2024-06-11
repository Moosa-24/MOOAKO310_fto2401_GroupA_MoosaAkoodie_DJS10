import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError('Data Fetching Failed');
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Blog Posts</h1>
        {error ? (
          <div>
            <p>{error}</p>
          </div>
        ) : (
          <div>
            {posts.map(post => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;