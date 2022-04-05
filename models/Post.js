const { Schema } = require('mongoose')
const Post = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', required: false }],
  },
  { timestamps: true }
)
module.exports = Post