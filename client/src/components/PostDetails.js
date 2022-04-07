import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import CreateCommentForm from '../components/CreateCommentForm'
import { LoadPostDetails, UpdateCommentAuthor, UpdateCommentText, SubmitComment } from '../store/actions/PostActions'
// import { process_params } from 'express/lib/router'

const mapStateToProps = ({ postDetailsState }) => {
  return { postDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostDetails: (id) => dispatch(LoadPostDetails(id)),
    updateCommentAuthor: (authorName) => dispatch(UpdateCommentAuthor(authorName)),
    updateCommentText: (commentText) => dispatch(UpdateCommentText(commentText)),
    SubmitComment: (id) => dispatch(SubmitComment(id))
  }
}

const PostDetails = (props) => {
  let { id } = useParams()


  useEffect(() => {
    props.fetchPostDetails(id)
  }, [id])

  
  const details = props.postDetailsState.details
 
  const commentsArray = props.postDetailsState.comments
  

  const handleOnAuthorChange = (event) => {
    props.updateCommentAuthor(event.target.value)
  }

  const handleOnTextChange = (event) => {
    props.updateCommentText(event.target.value)
  }

  const handleFormSubmission = () => {
    props.SubmitComment(props.postDetailsState.newComment, id)
  }

  return (
    <div>
      <h2>Post Details Page</h2>
      <div>
        <h3>{details.title}</h3>
        <p><em>{details.content}</em></p>
        <h3>Comments:</h3>
        {commentsArray.map((comment) => (
          <div key={comment.id}>
            <p><b>Author</b>: {comment.author}</p>
            <p><b>Content</b>: {comment.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Enter author name..."
          onChange={handleOnAuthorChange}
          value={props.postDetailsState.newComment.author}
        />
        <br />
        <textarea
          placeholder="Enter comment..."
          onChange={handleOnTextChange}
          value={props.postDetailsState.newComment.text}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)