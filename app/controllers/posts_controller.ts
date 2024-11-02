import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    async index({response, view}: HttpContext) {
        const html = await view.render('posts/index')
        // return html
        return response.status(200).json('This is message from index() in PostController')

    }
}