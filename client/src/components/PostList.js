import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadPosts } from '../store/actions/PostActions'

const mapStateToProps = ({ postState }) => {
  return { postState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const PostList = (props) => {
  
  useEffect (() => {
    props.fetchPosts()
  },[])
  
  return (
    <div>
      {props.postState.posts.map((post) => (
        <ul key={post.id}>
          <Link to={`/posts/${post._id}`}>{post.title}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
