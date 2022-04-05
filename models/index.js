const mongoose = require('mongoose')
const PostSchema = require('./Post')
const CommentSchema = require('./Comment')

const Post = mongoose.model('Post', PostSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {
  Post,
  Comment
}