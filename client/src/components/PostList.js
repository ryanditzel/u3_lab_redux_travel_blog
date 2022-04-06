import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom'


const PostList = () => {

    const [posts, setPosts] = useState([])

    const GetPosts = async () => {
        try {
          const res = await axios.get('http://localhost:3001/posts/')
          console.log(res)
          setPosts(res.data.posts)
        } catch (error) {
          throw error
        }
      }

      useEffect (() => {
        GetPosts()
      },[]) 
    
    return (
        <div>
            {posts.map((post) => (
                <ul key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </ul>
            ))}
        </div>
    )
}

export default PostList