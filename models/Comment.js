const { Schema } = require('mongoose')
const Comment = new Schema(
  {
    author: { type: String, required: true },
    text: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }
  },
  { timestamps: true }
)
module.exports = Comment