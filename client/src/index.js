import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './styles/index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>

          <App />

      </Router>
    </Provider>
  </React.StrictMode>
)