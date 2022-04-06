import Client from './'

export const GetPosts = async () => {
    try {
        const res = await Client.get(`/posts`)
        console.log('response from getting all posts', res)
        return res.data.posts
    } catch (error) {
        throw error
    }
}

export const GetPostDetails = async (id) => {
    try {
        const res = await Client.get(`/posts/`)
        console.log('response of post details', res)
        return res
    } catch (error) {
        throw error
    }
}