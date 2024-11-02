import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ view }: HttpContext) {
    const post = {
      id: 1,
      name: 'Cars',
      hidden: false,
    }

    const posts = [
      {
        id: 1,
        name: 'Movies',
        hidden: true,
      },
      {
        id: 2,
        name: 'Bikes',
        hidden: true,
      },
      {
        id: 3,
        name: 'Computers',
        hidden: false,
      },
    ]

    const food = {
      ketchup: '5 tbsp',
      mustard: '1 tbsp',
      pickle: '0 tbsp',
    }
    

    const html = await view.render('posts/index', { title: 'Post index page', post, posts, food })
    return html
  }
}
