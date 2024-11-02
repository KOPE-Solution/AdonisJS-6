# AdonisJS : Chaper-3 Controllers

Reference from [docs.adonisjs.com](https://docs.adonisjs.com/guides/basics/controllers)

## Make controller command 
```shell
node ace make:controller Post

DONE:    create app/controllers/posts_controller.ts
```

## Resource-driven controllers
app/controllers/post_controller.ts :
```ts
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    async index({response}: HttpContext) {
        return response.status(200).json('This is message from index() in PostController')
    }
}
```

start/routes.ts :
```ts
/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')

router.where('id', router.matchers.number())

...

router.resource('posts', PostsController)

router.get('posts/:id?', ({ params, request }) => {
    console.log(request.all())

    const {id} = params
    return `Post with id ${id}`
})

```

![01](/01.png)

---