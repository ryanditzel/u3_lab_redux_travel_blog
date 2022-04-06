import { GetPosts } from '../../services/PostService'
import { GET_POSTS } from '../types'

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