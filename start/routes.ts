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

router.group(() => {
    router.get('/about', () => {
        return "About page"
    })
    
    router.post('/about', () => {
        return 'About post'
    })
})


router.get('posts/:id?', ({params, request }) => {
    console.log(request.all())
    const {id} = params
    return 'Post with id ' + id
})