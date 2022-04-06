import { GET_POSTS } from "../types"

const iState = {
    posts: []
}

const PostReducer = (state = iState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload }
        default:
            return { ...state}
    }       
}

export default PostReducer