
import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts')
    console.log('response from getting all posts', res)
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const GetPostDetails = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateComment = async (newComment) => {
  try {
    const res = await Client.post('/comments', newComment)
    console.log('banana')
    return
    // return res.data.posts
  } catch (error) {
    throw error
  }
}