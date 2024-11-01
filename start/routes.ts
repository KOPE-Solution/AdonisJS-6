/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.where('id', router.matchers.number())

router.on('/').render('pages/home')

// GET method
router.get('abouts', () => {
    return 'GET method for abouts'
})

// POST method
router.post('abouts', () => {
    return 'POST method for abouts'
})

// PUT method
router.put('abouts/:id', () => {
    return 'PUT method for abouts'
})

// PATCH method
router.patch('abouts/:id', () => {
    return 'PATCH method for abouts'
})

// DELETE method
router.delete('abouts/:id', () => {
    return 'DELETE method for abouts'
})

router.get('posts/:id?', ({ params, request }) => {
    console.log(request.all())

    const {id} = params
    return `Post with id ${id}`
})

router
  .group(() => {
    router.get('users', () => {
        return "users"
    })
    router.get('payments', () => {
        return "payments"
    })
  })
  .prefix('/api')

router.get('/posts', 'PostsController.index')