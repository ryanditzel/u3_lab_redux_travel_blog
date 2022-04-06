const { Post, Comment } = require('../models')

const getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find()
      return res.status(200).json({ posts })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

const createComment = async (req, res) => {
    try{
        const comment = await new Comment(req.body)
        await comment.save()
        const postId = req.body.postId
        const post = await Post.findById(postId)
        await Post.findByIdAndUpdate(postId, {
            comments: [...post.comments, comment._id]
        })
        return res.status(201).json(comment)
        } catch (error) {
            return res.status(500).json({ error: error.message })
  }
}

const getPostDetails = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      const postComments = []
      for await (const commentId of post.comments) {
        postComments.push(await Comment.findById(commentId))
      }
      return res.status(200).json({ post: post, postComments: postComments })
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

  module.exports = {
      getAllPosts,
      createComment,
      getPostDetails
  }