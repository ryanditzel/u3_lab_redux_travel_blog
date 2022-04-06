import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CreateCommentForm from '../components/CreateCommentForm'

const PostDetails = () => {
  let { id } = useParams()
  const [newComment, setNewComment] = useState({
    author: '',
    text: '',
    post: id
  })
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const getPostData = async () => {
    const response = await axios.get(`http://localhost:3001/posts/${id}`)
    console.log('RESPONSE FROM GET POST DATA:', response)
    setPost(response.data.post)
    setComments(response.data.postComments)
  }

  useEffect(() => {
    getPostData()
  }, [])

  const handleInputChange = (event) => {
    setNewComment({
      ...newComment,
      [event.target.name]: event.target.value
    })
  }

  const createComment = async (event) => {
    event.preventDefault()
    await axios
      .post('http://localhost:3001/comments', newComment)
      .then(function (response) {
        getPostData()
      })
      .catch(function (error) {
        console.log(error)
      })
    setNewComment({
      author: '',
      text: '',
      post: id
    })
  }

  return (
    <div>
      <h2>Post Details Page</h2>
      <CreateCommentForm
        newComment={newComment}
        handleInputChange={handleInputChange}
        createComment={createComment}
      />
      <div>
        <h3>{post.title}</h3>
        <p><em>{post.content}</em></p>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p><b>Author</b>: {comment.author}</p>
            <p><b>Content</b>: {comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostDetails