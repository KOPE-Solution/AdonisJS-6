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

---