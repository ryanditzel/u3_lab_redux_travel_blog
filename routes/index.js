const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/posts', controllers.getAllPosts)

router.get('/posts/:id', controllers.getPostDetails)

router.post('/comments', controllers.createComment)

module.exports = router