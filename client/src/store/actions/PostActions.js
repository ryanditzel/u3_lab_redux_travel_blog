import {
  GetPosts,
  GetPostDetails,
  CreateComment
} from '../../services/PostService'
import {
  GET_POSTS,
  GET_POST_DETAILS,
  UPDATE_AUTHOR,
  UPDATE_TEXT,
  SUBMIT_COMMENT
} from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()

      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadPostDetails = (id) => {
  return async (dispatch) => {
    try {
      const postDetails = await GetPostDetails(id)
      console.log('postDetails:', postDetails)

      dispatch({
        type: GET_POST_DETAILS,
        payload: postDetails
      })
    } catch (error) {
      throw error
    }
  }
}

export const UpdateCommentAuthor = (authorName) => ({
  type: UPDATE_AUTHOR,
  payload: authorName
})

export const UpdateCommentText = (commentText) => ({
  type: UPDATE_TEXT,
  payload: commentText
})

export const SubmitComment = (newComment, id) => {
  console.log('id:', id)
  return async (dispatch) => {
    try {
      const res = await CreateComment(newComment, id)
      return res.data
    } catch (error) {
      throw error
    }
  }
}