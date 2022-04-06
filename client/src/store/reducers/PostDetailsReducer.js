import { GET_POSTS_DETAILS } from "../types"

const iState = {
    posts: []
}

const PostDetailsReducer = (state = iState, action) => {
    switch(action.type) {
        case GET_POSTS_DETAILS:
            return {...state, posts: action.payload }
        default:
            return { ...state}
    }       
}

export default PostDetailsReducer