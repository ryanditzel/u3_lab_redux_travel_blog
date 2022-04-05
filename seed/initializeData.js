const db = require('../db')
const { Post, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const post1 = await new Post({
    title: 'Hawaii',
    content:
      'Hawaii is a state in the Western United States, located in the Pacific Ocean about 2,000 miles from the U.S. mainland. It is the only state outside North America, the only state that is an archipelago, and the only state in the tropics',
    comments: []
  })
  await post1.save()

  const post2 = await new Post({
    title: 'Argentina',
    content:
      'Argentina, officially the Argentine Republic, is a country in the southern half of South America. Argentina covers an area of 2,780,400 km², making it the largest Spanish-speaking nation in the world by area.',
    comments: []
  })
  await post2.save()

  const comment1 = await new Comment({
    author: 'Ryan',
    text: 'I love the sun',
    post: post1._id
  })
  await comment1.save()

  // Updates comments that belong to the post
  post1.comments = [...post1.comments, comment1._id]
  await post1.save()

  const comment2 = await new Comment({
    author: 'Angie',
    text: "Can't wait to go hiking up the volcano",
    post: post1._id
  })
  await comment2.save()

  post1.comments = [...post1.comments, comment2._id]
  await post1.save()

  const comment3 = await new Comment({
    author: 'Jenna',
    text: "I can't wait to try the empanadas!",
    post: post2._id
  })
  await comment3.save()

  post2.comments = [...post2.comments, comment3._id]
  await post2.save()

  const comment4 = await new Comment({
    author: 'Jackson',
    text: 'Love the food!',
    post: post2._id
  })
  await comment4.save()

  post2.comments = [...post2.comments, comment4._id]
  await post2.save()

  console.log('seeded travelBlogDatabase')
}
const run = async () => {
  await Post.deleteMany()
  await Comment.deleteMany()
  await main()
  db.close()
}

run()