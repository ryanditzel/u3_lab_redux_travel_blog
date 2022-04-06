import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'

const App = () => {
  return (
    <div className="App">
      <h3>Travel Blog Posts</h3>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </div>
  )
}

export default App
