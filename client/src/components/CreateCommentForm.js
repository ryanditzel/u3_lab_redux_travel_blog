const CreateCommentForm = ({ newComment, handleInputChange, createComment }) => {
    return (
      <div className="form-container">
        <h2>Add a Comment</h2>
        <form onSubmit={createComment}>
          <div className="form-field">
            <label><b>Author</b>:</label>
            <input name="author" type="text" onChange={handleInputChange} placeholder="Enter your name..." value={newComment.author} required />
          </div>
          <div className="form-field">
            <label><b>Comment Content</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Enter comment..." value={newComment.text} required />
          </div>
          <div className="button-wrapper">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
  
  export default CreateCommentForm