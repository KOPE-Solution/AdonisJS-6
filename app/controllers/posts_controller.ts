import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    async index({response}: HttpContext) {
        return response.status(200).json('This is message from index() in PostController')
    }
}